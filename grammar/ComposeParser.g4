parser grammar ComposeParser;

import AssemblyParser;

options {
  tokenVocab = ComposeLexer;
  superClass = BaseParser;
}

compilation_unit:
    preamble
    compilation_atom*
    ;

preamble:
    import_statement*
    ;

import_statement:
    IMPORT
    ( main=identifier (COMMA LCURL identifier (COMMA identifier)* RCURL)?
    | LCURL identifier (COMMA identifier)* RCURL )
    FROM import_source SEMI
    ;

import_source:
    STRING_LITERAL
    ;

compilation_atom:
    declaration
    | global_statement
    ;

global_statement:
    annotation*
    (EXPORT DEFAULT?)?
    ( declare_instances_statement )
    ;

declaration:
    annotation*
    (EXPORT DEFAULT?)?
    ( attribute_declaration
    | class_declaration
    | function_declaration[false]
    | enum_declaration )
    ;

enum_declaration:
    ENUM identifier LCURL enum_item (COMMA enum_item)* RCURL
    ;

enum_item:
    identifier ASSIGN expression
    ;

attribute_declaration:
    ATTRIBUTE identifier COLON data_type_or_null SEMI
    ;

identifier:
    IDENTIFIER | plain_opcode
    ;

annotation:
    ANNOTATION ( LPAR literal_expression RPAR )?
    ;

data_type:
    native_type
    | class_type
    ;

data_type_or_null:
    data_type (PIPE NULL_LITERAL)?
    ;

native_type:
    boolean_type
    | number_type
    | string_type
    ;

boolean_type:
    BOOLEAN
    ;

number_type:
    integer_type
    | decimal_type
    ;

integer_type:
    i32_type
    | i64_type
    | isize_type
    | u32_type
    | u64_type
    | usize_type
    ;

decimal_type:
    f32_type
    | f64_type
    ;

i32_type:
    I32
    ;

i64_type:
    I64
    ;

isize_type:
    ISIZE
    ;

u32_type:
    U32
    ;

u64_type:
    U64
    ;

usize_type:
    USIZE
    ;

f32_type:
    F32
    ;

f64_type:
    F64
    ;

string_type:
    STRING
    ;

void_type:
    VOID
    ;

attribute_type:
    attribute_ref
    ;

attribute_type_or_null:
    attribute_type (PIPE NULL_LITERAL)?
    ;

attribute_ref:
    { this.willBeLowercase() }? IDENTIFIER | plain_opcode
    ;

class_type:
    class_ref
    ;

class_ref:
    { this.willBeUppercase() }? IDENTIFIER
    ;

function_type:
    ( attribute_type
        | LPAR (parameter (COMMA parameter)*)? RPAR )
    ARROW return_types
    ;

function_type_or_null:
    function_type (PIPE NULL_LITERAL)?
    ;

return_type[boolean requireParenthesis]:
    data_type_or_null
    | attribute_type_or_null
    | { !$requireParenthesis }? function_type_or_null
    | LPAR function_type_or_null RPAR
    ;

return_types:
    void_type
    | return_type[true] ( COMMA return_type[false] )*
    ;

parameter:
    attribute_type_or_null                     # AttributeParameter
    | identifier COLON data_type_or_null       # TypedParameter
    | identifier COLON function_type_or_null   # FunctionParameter
    ;

class_declaration:
    accessibility? ABSTRACT? CLASS id = class_ref ( LPAR attribute_ref (COMMA attribute_ref)* RPAR )?
            ( EXTENDS class_ref (COMMA class_ref)* )?
        LCURL
            function_declaration[true]*
        RCURL
    ;

accessibility:
    PUBLIC | PROTECTED | PRIVATE
    ;

function_declaration[boolean as_member]:
    abstract_function_declaration[$as_member]
    | concrete_function_declaration[$as_member]
    | native_function_declaration[$as_member]
    ;

abstract_function_declaration[boolean as_member]:
    {$as_member}? accessibility? ABSTRACT function_prototype[true] SEMI
    | {!$as_member}? ABSTRACT FUNCTION function_prototype[true] SEMI
    ;

concrete_function_declaration[boolean as_member]:
    {$as_member}? accessibility? STATIC? function_prototype[false] LCURL statement* RCURL
    | {!$as_member}? FUNCTION function_prototype[false] LCURL statement* RCURL
    ;

native_function_declaration[boolean as_member]:
    {$as_member}? accessibility? STATIC NATIVE function_prototype[false] LCURL instruction* RCURL
    | {!$as_member}? NATIVE FUNCTION function_prototype[false] LCURL instruction* RCURL
    ;

function_prototype[boolean mandatory_return]:
    identifier ( LT generic_parameter ( COMMA generic_parameter )* GT )? LPAR ( parameter ( COMMA parameter )* )? RPAR
        (
            { $mandatory_return }? COLON return_types
            | { !$mandatory_return }? (COLON return_types) ?
        )
    ;

generic_parameter:
    class_ref ( EXTENDS data_type )?
    ;


statement:
    annotation*
    ( declare_instances_statement
    | assign_instance_statement
    | assign_item_statement
    | function_call_statement
    | if_statement
    | for_statement
    | try_statement
    | throw_statement
    | return_statement
    | break_statement
    )
    ;

throw_statement:
    THROW expression SEMI
    ;

try_statement:
    TRY 
        LCURL statement* RCURL
    catch_clause*
    catch_all_clause?
    finally_clause?
    ;

catch_clause:
    CATCH LPAR identifier COLON data_type (PIPE data_type)* RPAR 
        LCURL statement* RCURL
    ;

catch_all_clause:
    CATCH LPAR ETC RPAR 
        LCURL statement* RCURL
    ;

finally_clause:
    FINALLY
        LCURL statement* RCURL
    ;

break_statement:
    BREAK
    ;

for_statement:
    FOR LPAR
        (LET declare_one (COMMA declare_one)*)?
        SEMI
        (expression (COMMA expression)*)?
        SEMI
        (expression (COMMA expression)*)?
        RPAR
        statements
    ;

if_statement:
    IF LPAR expression RPAR statements
    (ELSE IF LPAR expression RPAR statements)*
    (ELSE statements)*
    ;

statements:
    statement
    | LCURL statement* RCURL
    ;

function_call_statement:
    (expression DOT)? function_call SEMI
    ;

declare_instances_statement:
    (LET | CONST) declare_one (COMMA declare_one)* SEMI
    ;

declare_one:
    identifier (COLON data_type_or_null | function_type_or_null)? (ASSIGN expression)?
    ;

assign_instance_statement:
    (parent = expression DOT)? identifier assign_op value = expression SEMI
    ;

assign_op:
    ASSIGN | ADD_ASSIGN | SUB_ASSIGN | MUL_ASSIGN | DIV_ASSIGN
    | AND_ASSIGN | OR_ASSIGN | XOR_ASSIGN | MOD_ASSIGN
    | LSHIFT_ASSIGN | RSHIFT_ASSIGN | URSHIFT_ASSIGN
    ;

assign_item_statement:
    expression LPAR expression RPAR assign_op expression SEMI
    ;

return_statement:
    RETURN expression? SEMI
    ;

expression:
    parent = expression
        LBRAK item = expression RBRAK               # ItemExpression
    | parent = expression
        DOT member = identifier                     # MemberExpression
    | NEW function_call                             # NewExpression
    | SIZE_OF LPAR data_type RPAR                   # SizeofExpression
    | ALIGN_OF LPAR data_type RPAR                  # AlignofExpression
    | function_call                                 # SimpleCallExpression
    | expression DOT function_call                  # ChildCallExpression
    | expression { $parser.willNotContainLineTerminator()}
        INC                                         # PostIncrementExpression
    | expression { $parser.willNotContainLineTerminator()}
        DEC                                         # PostDecrementExpression
    | TYPE_OF ((LPAR expression RPAR)
          | TYPE_OF expression)                     # TypeofExpression
    | INC expression                                # UnaryPreIncrementExpression
    | DEC expression                                # UnaryPreDecrementExpression
    | PLUS expression                               # UnaryPlusExpression
    | MINUS expression                              # UnaryMinusExpression
    | TILDE expression                              # UnaryBitNotExpression
    | NOT expression                                # UnaryNotExpression
    | left = expression ( STAR | SLASH | PERCENT )
        right = expression                          # MultiplyExpression
    | left = expression ( PLUS | MINUS )
        right = expression                          # AddExpression
    | left = expression ( LSHIFT | RSHIFT | URSHIFT )
        right = expression                          # BitShiftExpression
    | left = expression ( GT | LT | GTE | LTE )
        right = expression                          # CompareExpression
    | left = expression INSTANCE_OF
        right = expression                          # InstanceofExpression
    | left = expression IN
        right = expression                          # InExpression
    | left = expression (EQUALS | NOT_EQUALS)
        right = expression                          # EqualsExpression
    | left = expression
        AMP right = expression                      # BitAndExpression
    | left = expression
        CARET right = expression                    # BitXorExpression
    | left = expression
        PIPE right = expression                     # BitOrExpression
    | left = expression
        AND right = expression                      # AndExpression
    | left = expression
        OR right = expression                       # OrExpression
    | condition = expression QUESTION
        if_true = expression COLON
        if_false = expression                       # TernaryExpression
    | THIS                                          # ThisExpression
    | identifier                                    # IdentifierExpression
    | SUPER ( LT identifier GT )?                   # SuperExpression
    | literal_expression                            # LiteralExpression
    | LPAR expression RPAR                          # ParenthesisExpression
    | LT data_type GT expression                    # PreCastExpression
    | expression AS data_type                       # CastAsExpression
    | identifier assign_op expression               # AssignExpression
    ;

function_call:
    name = identifier ( LT data_type_or_null (COMMA data_type_or_null)* GT )? LPAR ( expression ( COMMA expression)* )? RPAR
    ;

literal_expression:
    NULL_LITERAL        # NullLiteral
    | BOOLEAN_LITERAL   # BooleanLiteral
    | INTEGER_LITERAL   # IntegerLiteral
    | DECIMAL_LITERAL   # DecimalLiteral
    | CHAR_LITERAL      # CharLiteral
    | STRING_LITERAL    # StringLiteral
    | list_literal      # ListLiteral
    | set_literal       # SetLiteral
    | map_literal       # MapLiteral
    ;

list_literal:
    LBRAK ( exp = expression (COMMA exp = expression)* )? RBRAK
    ;

set_literal:
    LT ( exp = expression (COMMA exp = expression)* )? GT
    ;

map_literal:
    LCURL ( entry = map_entry  (COMMA entry = map_entry)* )? RCURL
    ;

map_entry:
    identifier COLON expression
    ;

instruction:
    expression* opcode INTEGER_LITERAL* SEMI
    ;

