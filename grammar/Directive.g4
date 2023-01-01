grammar Directive;

directive:
    if_directive
    | else_if_directive
    | else_directive
    | end_directive
    ;

if_directive:
    ('#if' | '#IF') value trailer
    ;

else_if_directive:
    ('#else if' | '#elif' | '#ELSE IF' | '#ELIF') value trailer
    ;

else_directive:
    ('#else' | '#ELSE') trailer
    ;

end_directive:
    ('#end' | '#endif' | '#END' | '#ENDIF') trailer
    ;

value:
     'true' | 'TRUE' | '1' | 'false' | 'FALSE' | '0' | IDENTIFIER
    ;

trailer:
    (IDENTIFIER | TRAILER)* EOF
    ;

IDENTIFIER
	:	Letter LetterOrDigit*
	;

fragment
Letter
	:	[a-zA-Z$_] // these are the "letters" below 0x7F
	;

fragment
LetterOrDigit
	:	[a-zA-Z0-9$_] // these are the "letters or digits" below 0x7F
	;

WS:
	[ \t]+ -> skip
    ;

TRAILER:
    [~\n]+
    ;
