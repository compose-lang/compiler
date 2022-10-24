export JAVA_HOME=`/usr/libexec/java_home -v 17`
cd grammar
java -cp ~/Development/antlr4/ericvergnaud/antlr4/tool/target/antlr4-4.11.2-SNAPSHOT-complete.jar org.antlr.v4.Tool ComposeLexer.g4 -o ../src/parser -Dlanguage=TypeScript
java -cp ~/Development/antlr4/ericvergnaud/antlr4/tool/target/antlr4-4.11.2-SNAPSHOT-complete.jar org.antlr.v4.Tool ComposeParser.g4 -o ../src/parser -Dlanguage=TypeScript -listener -no-visitor

