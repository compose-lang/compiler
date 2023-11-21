import importlib
import sys
from typing import Tuple


class Instruction(object):

    def __init__(self, token: str, literal: str, params: [str] or None, opcodes: [int], dots: bool):
        self.token = token
        self.literal = literal
        self.params = params
        self.opcodes = opcodes
        self.dots = dots
        self.duplicate = False


def read_instructions() -> [Instruction]:
    imported = importlib.import_module("index-instructions")
    tuples = imported.__getattribute__("INSTRUCTIONS")
    tuples = filter(lambda i: i[0] != "(reserved)", tuples)
    instructions = [parse_instruction_tuple(tuple) for tuple in tuples]
    return list(instructions)


def deduplicate_instruction(instruction: Instruction) -> Instruction:
    if instruction.token == "SELECT" and instruction.params is not None:
        instruction.token = "SELECT_T"
    elif instruction.token == "REF_TEST" and instruction.opcodes[1] == "15":
        instruction.token = "REF_TEST_NULL"
    return instruction


def fix_bogus_instruction(instruction: Instruction) -> Instruction:
    if instruction.token == "REFCAST":
        instruction.token = "REFCAST_NULL"
        instruction.literal = "ref.cast"
    for pair in [ ("ANYTRUE", "ANY_TRUE"), ("ALLTRUE", "ALL_TRUE"),
                  ("Q15MULRSAT_S", "Q15MULR_SAT_S"),
                  ("VDEMOTE", "DEMOTE"), ("VPROMOTE", "PROMOTE"), ("VCONVERT", "CONVERT"),
                  ("VTRUNC", "TRUNC"), ("VEXTEND", "EXTEND")]:
        idx = instruction.token.find(pair[0])
        if idx > 0:
            instruction.token = instruction.token.replace(pair[0], pair[1])
            instruction.literal = instruction.literal.replace(pair[0].lower(), pair[1].lower())
    return instruction

def parse_instruction_tuple(tuple: Tuple) -> Instruction:
    literal, params = parse_math_literal(tuple[0])
    literal = make_pretty_literal(literal, tuple)
    token = make_token(literal)
    opcodes, dots = parse_math_opcodes(tuple[1])
    return deduplicate_instruction( fix_bogus_instruction( Instruction(token, literal, params, opcodes, dots)))


def parse_math_opcodes(text: str) -> (str, bool):
    # extract literal
    start = text.index("`")
    end = text.index("`", start + 1)
    text = text[ start + 1: end ]
    # remove dots
    dots = text.find(" \\dots")
    if dots:
        text = text[:dots]
    # split
    parts = filter(lambda s: len(s) > 0, text.split("~"))
    opcodes = [s[5:7] for s in  parts]
    return opcodes, dots  >= 0


def make_token(literal: str) -> str:
    return literal.replace(".", "_").upper()


def make_pretty_literal(literal: str, instruction: Tuple) -> str:
    literal = literal.lower()
    # extract operator text
    exec_text = instruction[4]
    start = exec_text.find("(")
    if start >= 0:
        end = exec_text.find(")", start + 1)
        op_text = exec_text[start + 1:end]
        exec_text = exec_text[:start]
        start = op_text.find("<op-")
        if start >= 0:
            end = op_text.find(">", start + 1)
            op_text = op_text[start + len("<op-"): end]
        else:
            raise Exception("Unsupported: " + exec_text)
    else:
        op_text = None
    # extract exec text
    start = exec_text.find("<exec-")
    if start >= 0:
        end = exec_text.find(">", start + 1)
        exec_text = exec_text[start + len("<exec-"): end]
    if exec_text == "binop":
        return make_pretty_literal_from_binop(literal, op_text)
    elif exec_text == "vbinop" or exec_text == "vvbinop":
        return make_pretty_literal_from_vbinop(literal, op_text)
    elif exec_text == "vunop" or exec_text == "vvunop":
        return make_pretty_literal_from_vunop(literal, op_text)
    elif exec_text == "vishiftop":
        return make_pretty_literal_from_vshiftop(literal, op_text)
    # elif exec_text == "vcvtop":
    #     return make_pretty_literal_from_vcvtop(literal)
    else:
        return make_pretty_literal_from_exec(literal, exec_text)

def make_pretty_literal_from_binop(literal: str, op_text: str) -> str:
    pretty = op_text
    ugly = pretty.replace("_", "").replace(".","")
    # make it real pretty
    if pretty == "fmin":
        pretty = "min"
    elif pretty == "fmax":
        pretty = "max"
    return literal.replace(ugly, pretty)


def make_pretty_literal_from_vbinop(literal: str, op_text: str) -> str:
    pretty = op_text
    # remove vec prefix
    if pretty.find("vec-") == 0:
        pretty = pretty[len("vec-"):]
    # fix dangling literals
    pretty = pretty.replace("ieq", "veq").replace("ine", "vne").replace("feq", "veq").replace("iand", "vand").replace("ior", "vor").replace("ixor", "vxor") \
            .replace("fne", "vne").replace("fpmin", "vpmin").replace("fpmax", "vpmax")
    ugly = pretty.replace("_", "").replace(".","")
    # make it real pretty
    if pretty == "fmin":
        pretty = "min"
    elif pretty == "fmax":
        pretty = "max"
    elif pretty == "fpmin":
        pretty = "pmin"
    elif pretty == "fpmax":
        pretty = "pmax"
    elif pretty[0] == "v":
        pretty = pretty[1:]
    pretty = pretty.replace("veq", "eq")
    return literal.replace(ugly, pretty).replace(".vlt", ".lt").replace(".vle", ".le").replace(".vgt", ".gt").replace(".vge", ".ge") \
                .replace(".vadd", ".add").replace(".vsub", ".sub").replace(".vmin", ".min").replace(".vmax", ".max") \
                .replace(".vmul", ".mul").replace(".vdiv", ".div")


def make_pretty_literal_from_vunop(literal: str, op_text: str) -> str:
    pretty = op_text
    # remove vec prefix
    if pretty.find("vec-") == 0:
        pretty = pretty[len("vec-"):]
    # fix dangling literals
    pretty = pretty.replace("inot", "vnot").replace("iabs", "vabs").replace("ineg", "vneg").replace("ipopcnt", "vpopcnt") \
        .replace("fceil", "vceil").replace("ffloor", "vfloor").replace("ftrunc", "vtrunc").replace("fnearest", "vnearest") \
        .replace("fabs", "vabs").replace("fneg", "vneg").replace("fsqrt", "vsqrt")
    ugly = pretty.replace("_", "").replace(".","")
    # make it real pretty
    if pretty[0] == "v":
        pretty = pretty[1:]
    return literal.replace(ugly, pretty)


def make_pretty_literal_from_vshiftop(literal: str, op_text: str) -> str:
    pretty = op_text
    # remove vec prefix
    if pretty.find("vec-") == 0:
        pretty = pretty[len("vec-"):]
    # fix dangling literals
    pretty = pretty.replace("ish", "vsh")
    ugly = pretty.replace(".","")
    # make it real pretty
    if pretty[0] == "v":
        pretty = pretty[1:]
    return literal.replace(ugly, pretty)


# def make_pretty_literal_from_vcvtop(literal: str) -> str:
#     pretty = literal
#     ugly = pretty.replace(".","")
#     # make it real pretty
#     if pretty[0] == "v":
#         pretty = pretty[1:]
#     return literal.replace(ugly, pretty)


def make_pretty_literal_from_exec(literal: str, exec_text: str) -> str:
    pretty = exec_text
    # remove vec prefix
    if pretty.find("vec-") == 0:
        pretty = pretty[len("vec-"):]
    # uglify to match token
    ugly = pretty.replace("_", "").replace(".","")
    # make it real pretty
    if pretty == "vconst":
        pretty = "const"
    pretty = pretty.replace("fastlane", "fast_lane").replace("replacelane", "replace_lane")
    return literal.replace(ugly, pretty)


def parse_math_literal(text: str) -> (str, None):
    # extract literal
    start = text.index("`")
    end = text.index("`", start + 1)
    text = text[ start + 1: end ]
    return parse_latex_literal(text)


def parse_latex_param(param: str) -> str:
    return param.replace("\\X{bt}", "bt") \
                .replace("\\X{ht}", "ht") \
                .replace("^\\ast", "*") \
                .replace("^\\{16}", "") \
                .replace("\\laneidx", "laneidx") \
                .replace("\\memarg", "memarg") \
                .replace("\\i32", "i32") \
                .replace("\\i64", "i64") \
                .replace("\\i128", "i128") \
                .replace("\\f32", "f32") \
                .replace("\\f64", "f64") \
                .replace("\\REF", "REF") \
                .replace("\\NULL", "NULL")


def parse_latex_literal(text: str) -> (str, None):
    # parse args
    idx = text.find("~")
    if idx > 0:
        params = [parse_latex_param(param) for param in filter(lambda s: len(s) >0, text[idx:].split("~"))]
        text = text[:idx]
    else:
        params: [str] = None
    # split remaining parts
    parts = list(filter(lambda s: len(s) > 0, text.split("\\")))
    parts = rejoin_size_parts(parts)
    parts = [replace_size(part) for part in parts]
    name = "".join(parts)
    return name, params


def replace_size(text: str) -> str:
    idx = text.find("K{")
    if idx != 0:
        return text
    else:
        idx2 = text.index("}")
        size = text[idx+2:idx2]
        parts = size.split("\\")
        return text[:idx] + "".join(parts) + text[idx2+1:]


def rejoin_size_parts(parts: [str]) -> [str]:
    result = []
    skip = set()
    for i in range(0, len(parts)):
        part = parts[i]
        if part[0] == 'K':
            next = i
            while part[-1] != '}':
                next = next + 1
                part = part + "\\" + parts[next]
                skip.add(next)
        if i not in skip:
            result.append(part)
    return result


def check_unique(instructions: [Instruction]) -> None:
    tokens = set()
    literals = set()
    for instruction in instructions:
        if instruction.token in tokens:
            raise Exception("Duplicate token: " + instruction.token)
        tokens.add(instruction.token)
        if instruction.literal in literals:
            instruction.duplicate = True
        else:
            literals.add(instruction.literal)


def generate_lexer_entries(instructions: [Instruction], path: str) -> None:
    with open(path, "w") as lexer_file:
        for instruction in filter(lambda i: not i.duplicate, instructions):
            lexer_file.write(instruction.token)
            lexer_file.write(": '")
            lexer_file.write(instruction.literal)
            lexer_file.write("';\n")


def generate_opcodes_enum(instructions: [Instruction], path: str) -> None:
    with open(path, "w") as opcodes_file:
        opcodes_file.write("enum OpCode {\n")
        for instruction in filter(lambda i: not i.duplicate, instructions):
            opcodes_file.write("    ")
            opcodes_file.write(instruction.token)
            opcodes_file.write(" = 0x")
            for opcode in instruction.opcodes:
                opcodes_file.write(opcode)
            opcodes_file.write(",\n")
        opcodes_file.write("}\n")
        opcodes_file.write("\n")
        opcodes_file.write("export default OpCode;\n")


if __name__ == "__main__":
    instructions = read_instructions()
    check_unique(instructions)
    generate_lexer_entries(instructions, sys.argv[1])
    generate_opcodes_enum(instructions, sys.argv[2])
