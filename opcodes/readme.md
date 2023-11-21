make opcodes the current directory
`cd opcodes`

clone the wanted WebAssembly repo with instructions set, for example:
`git clone https://www.github.com/WebAssembly/gc.git`
add the repo to .gitignore

copy the python script to the above repo
`cp generate_instructions.py gc/document/core/appendix/generate_instructions.py`
run it, passing it the destination files for lexer tokens and opcodes enum
`python gc/document/core/appendix/generate_instructions.py AssemblyLexer.g4 OpCode.ts`

replace ../src/compiler/OpCode.ts with the generated OpCode.ts
the script does not cater for token precedence so you need to manually merge the generated AssemblyLexer.g4
once done you need to regenerate the antlr4 lexer and parser