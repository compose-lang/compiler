import ISource from "../runner/ISource";

export default interface ITarget {
    asSource(): ISource;
}
