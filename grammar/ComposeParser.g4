parser grammar ComposeParser;

options {
  tokenVocab = ComposeLexer;
  superClass = BaseParser;
}

compilation_unit:
    declaration*
    ;

declaration:
    attribute_declaration
    | class_declaration
    | function_declaration
//    | enum_declaration
    ;


attribute_declaration:
    ATTRIBUTE identifier COLON data_type
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

function_type:
    ( attribute_type
        | LPAR (parameter (COMMA parameter)*)? RPAR )
    ARROW return_types
    ;

return_type[boolean requireParenthesis]:
    data_type
    | attribute_type
    | { !$requireParenthesis }? function_type
    | LPAR function_type RPAR
    ;

return_types:
    void_type
    | return_type[true] ( COMMA return_type[false] )*
    ;

parameter:
    attribute_type                  # AttributeParameter
    | identifier COLON data_type    # TypedParameter
    | identifier COLON function_type  # FunctionParameter
    ;

class_declaration:
    ABSTRACT? CLASS id = class_ref ( LPAR attribute_ref (COMMA attribute_ref)* RPAR )?
            ( EXTENDS class_ref (COMMA class_ref)* )?
        LCURL
            (function_declaration (COMMA function_declaration)*)?
        RCURL
    ;

function_declaration:
    abstract_function_declaration
    | concrete_function_declaration
    ;

abstract_function_declaration:
    ABSTRACT function_prototype[true]
    ;

function_prototype[boolean mandatory_return]:
    FUNCTION identifier LPAR ( parameter ( COMMA parameter )* )? RPAR
        (
            { $mandatory_return }? COLON return_types
            | { !$mandatory_return }? (COLON return_types) ?
        )
    ;

concrete_function_declaration:
    function_prototype[false]
        LCURL statement* RCURL
    ;

statement:
    assign_local_statement
    | return_statement
    ;

assign_local_statement:
    (LET | CONST)? identifier (COLON data_type | function_type) ASSIGN expression SEMI
    ;

return_statement:
    RETURN expression? SEMI
    ;

expression:
    parent = expression
        LBRAK item = expression RBRAK   # ItemExpression
    | parent = expression
        DOT member = expression         # MemberExpression
    | NEW function_call_expression        # NewExpression
    | function_call_expression            # FunctionCallExpression
    | expression { $parser.willNotContainLineTerminator()}
        INC                             # PostIncrementExpression
    | expression { $parser.willNotContainLineTerminator()}
        DEC                             # PostDecrementExpression
    | TYPE_OF ((LPAR expression RPAR)
          | TYPE_OF expression)          # TypeofExpression
    | INC expression                    # UnaryPreIncrementExpression
    | DEC expression                    # UnaryPreDecrementExpression
    | PLUS expression                   # UnaryPlusExpression
    | MINUS expression                  # UnaryMinusExpression
    | TILDE expression                  # UnaryBitNotExpression
    | NOT expression                    # UnaryNotExpression
    | left = expression ( STAR | SLASH | PERCENT )
        right = expression              # MultiplyExpression
    | left = expression ( PLUS | MINUS )
        right = expression              # AddExpression
    | left = expression ( LSHIFT | RSHIFT | URSHIFT )
        right = expression # BitShiftExpression
    | left = expression ( GT | LT | GTE | LTE )
        right = expression              # CompareExpression
    | left = expression INSTANCE_OF
        right = expression              # InstanceofExpression
    | left = expression IN
        right = expression              # InExpression
    | left = expression (EQUALS | NOT_EQUALS)
        right = expression              # EqualsExpression
    | left = expression
        AMP right = expression          # BitAndExpression
    | left = expression
        CARET right = expression        # BitXorExpression
    | left = expression
        PIPE right = expression         # BitOrExpression
    | left = expression
        AND right = expression          # AndExpression
    | left = expression
        OR right = expression           # OrExpression
    | condition = expression QUESTION
        if_true = expression COLON
        if_false = expression           # TernaryExpression
    | THIS                              # ThisExpression
    | identifier                        # IdentifierExpression
    | SUPER ( LT IDENTIFIER GT )?       # SuperExpression
    | literal_expression                # LiteralExpression
    | LPAR expression RPAR              # ParenthesisExpression
    | exp = expression AS IDENTIFIER    # CastExpression
    ;

function_call_expression:
    identifier LPAR ( arg = expression ( COMMA arg = expression)* )? RPAR
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
