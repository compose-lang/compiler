export default class PipelineOptions {

    static DEFAULTS = new PipelineOptions();

    parseAndCheck = true;
    declare = true;
    compile = true;
    assemble = true;
    optimize = false;
}
