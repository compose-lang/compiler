const isNode = (typeof process !== 'undefined');


if(isNode) {
    console.log(process.versions.v8);
}
