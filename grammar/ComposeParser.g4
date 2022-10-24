parser grammar ComposeParser;

options {
  tokenVocab = ComposeLexer;
  superClass = BaseParser;
}

unit:
    declaration*
    ;

declaration:
    attribute_declaration
    | class_declaration
    | method_declaration
//    | enum_declaration
    ;


attribute_declaration:
    ATTR identifier COLON data_type
    ;

identifier:
    IDENTIFIER
    ;

type:
    data_type
    | void_type
    | method_type
    ;

data_type:
    native_type
    | class_type
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
    | u32_type
    | i64_type
    | u64_type
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

u32_type:
    U32
    ;

u64_type:
    U64
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

class_type:
    { this.willBeUppercase() }? IDENTIFIER
    ;

method_type:
    ( LPAR (parameter (COMMA parameter)*)? RPAR
        | attribute_type )
    ARROW
    type ( COMMA type )*
    ;

attribute_type:
    { this.willBeLowercase() }? IDENTIFIER
    ;

parameter:
    attribute_type                  # AttributeParameter
    | identifier COLON data_type    # TypedParameter
    | identifier COLON method_type  # MethodParameter
    ;

class_declaration:
    ABSTRACT? CLASS id = class_type ( LPAR attribute_type (COMMA attribute_type)* RPAR )?
            ( EXTENDS class_type (COMMA class_type)* )?
        LCURL
            (method_declaration (COMMA method_declaration)*)?
        RCURL
    ;

method_declaration:
    abstract_method_declaration
    | concrete_method_declaration
    ;

abstract_method_declaration:
    ABSTRACT method_prototype
    ;

method_prototype:
    FN identifier LPAR ( parameter ( COMMA parameter )* )? RPAR ( COLON type ( COMMA type )* )
    ;

concrete_method_declaration:
    method_prototype
        LCURL statement* RCURL
    ;

statement:
    assign_statement
    ;

assign_statement:
    identifier (COLON data_type | method_type) ASSIGN expression
    ;

expression:
    literal_expression
    ;

literal_expression:
    NULL_LITERAL
    | BOOLEAN_LITERAL
    | INTEGER_LITERAL
    | DECIMAL_LITERAL
    | CHAR_LITERAL
    | STRING_LITERAL
    | list_literal
    | set_literal
    | map_literal
    ;

list_literal:
    LBRAK ( expression (COMMA expression)* )? RBRAK
    ;

set_literal:
    LT ( expression (COMMA expression)* )? GT
    ;

map_literal:
    LCURL ( map_entry  (COMMA map_entry)* )? RCURL
    ;

map_entry:
    IDENTIFIER COLON expression
    ;
