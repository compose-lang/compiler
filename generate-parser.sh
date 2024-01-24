export JAVA_HOME=`/usr/libexec/java_home -v 17`
export TOOL=~/Development/antlr4/releases/antlr-4.13.1-complete.jar
pushd grammar

java -cp $TOOL org.antlr.v4.Tool Directive.g4 -o ../src/preprocessor -Dlanguage=TypeScript -listener -no-visitor
sed -i ".bak" "s/\"antlr4\"/'npm:antlr4'/" "../src/preprocessor/DirectiveLexer.ts"
sed -i ".bak" "s/'antlr4'/'npm:antlr4'/" "../src/preprocessor/DirectiveParser.ts"
sed -i ".bak" "s/.js/.ts/" "../src/preprocessor/DirectiveParser.ts"
sed -i ".bak" "s/\"antlr4\"/'npm:antlr4'/" "../src/preprocessor/DirectiveListener.ts"
sed -i ".bak" "s/Parser\"/Parser.ts\"/" "../src/preprocessor/DirectiveListener.ts"

java -cp $TOOL org.antlr.v4.Tool ComposeLexer.g4 -o ../src/parser -Dlanguage=TypeScript
sed -i ".bak" "s/\"antlr4\"/'npm:antlr4'/" "../src/parser/ComposeLexer.ts"

java -cp $TOOL org.antlr.v4.Tool ComposeParser.g4 -o ../src/parser -Dlanguage=TypeScript -listener -no-visitor
sed -i ".bak" "s/'antlr4'/'npm:antlr4'/" "../src/parser/ComposeParser.ts"
sed -i ".bak" "s/.js/.ts/" "../src/parser/ComposeParser.ts"
sed -i ".bak" "s/'.\/BaseParser'/'.\/BaseParser.ts'/" "../src/parser/ComposeParser.ts"
sed -i ".bak" "s/\"antlr4\"/'npm:antlr4'/" "../src/parser/ComposeParserListener.ts"
sed -i ".bak" "s/Parser\"/Parser.ts\"/" "../src/parser/ComposeParserListener.ts"

popd
