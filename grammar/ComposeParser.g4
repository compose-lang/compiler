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

attribute_type:
    attribute_ref
    ;

attribute_ref:
    { this.willBeLowercase() }? IDENTIFIER
    ;

class_type:
    class_ref
    ;

class_ref:
    { this.willBeUppercase() }? IDENTIFIER
    ;

method_type:
    ( attribute_type
        | LPAR (parameter (COMMA parameter)*)? RPAR )
    ARROW return_types
    ;

return_type[boolean requireParenthesis]:
    data_type
    | attribute_type
    | { !$requireParenthesis }? method_type
    | LPAR method_type RPAR
    ;

return_types:
    void_type
    | return_type[true] ( COMMA return_type[false] )*
    ;

parameter:
    attribute_type                  # AttributeParameter
    | identifier COLON data_type    # TypedParameter
    | identifier COLON method_type  # MethodParameter
    ;

class_declaration:
    ABSTRACT? CLASS id = class_ref ( LPAR attribute_ref (COMMA attribute_ref)* RPAR )?
            ( EXTENDS class_ref (COMMA class_ref)* )?
        LCURL
            (method_declaration (COMMA method_declaration)*)?
        RCURL
    ;

method_declaration:
    abstract_method_declaration
    | concrete_method_declaration
    ;

abstract_method_declaration:
    ABSTRACT method_prototype[true]
    ;

method_prototype[boolean mandatory_return]:
    FN identifier LPAR ( parameter ( COMMA parameter )* )? RPAR
        (
            { $mandatory_return }? COLON return_types
            | { !$mandatory_return }? (COLON return_types) ?
        )
    ;

concrete_method_declaration:
    method_prototype[false]
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
