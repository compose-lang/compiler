
var Binaryen = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(moduleArg = {}) {

var Module = moduleArg;

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise((resolve, reject) => {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
});

var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = typeof window == "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";

var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary;

if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document != "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 {
  read_ = url => {
   var xhr = new XMLHttpRequest;
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = url => {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response));
   };
  }
  readAsync = (url, onload, onerror) => {
   var xhr = new XMLHttpRequest;
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = () => {
    if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
} else {}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.error.bind(console);

Object.assign(Module, moduleOverrides);

moduleOverrides = null;

if (Module["arguments"]) arguments_ = Module["arguments"];

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

if (Module["quit"]) quit_ = Module["quit"];

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

if (typeof WebAssembly != "object") {
 abort("no native wasm support detected");
}

var wasmMemory;

var ABORT = false;

var EXITSTATUS;

/** @type {function(*, string=)} */ function assert(condition, text) {
 if (!condition) {
  abort(text);
 }
}

var /** @type {!Int8Array} */ HEAP8, /** @type {!Uint8Array} */ HEAPU8, /** @type {!Int16Array} */ HEAP16, /** @type {!Uint16Array} */ HEAPU16, /** @type {!Int32Array} */ HEAP32, /** @type {!Uint32Array} */ HEAPU32, /** @type {!Float32Array} */ HEAPF32, /** @type {!Float64Array} */ HEAPF64;

function updateMemoryViews() {
 var b = wasmMemory.buffer;
 Module["HEAP8"] = HEAP8 = new Int8Array(b);
 Module["HEAP16"] = HEAP16 = new Int16Array(b);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
 Module["HEAP32"] = HEAP32 = new Int32Array(b);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
}

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 runtimeInitialized = true;
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 FS.ignorePermissions = false;
 TTY.init();
 callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
 return id;
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

/** @param {string|number=} what */ function abort(what) {
 if (Module["onAbort"]) {
  Module["onAbort"](what);
 }
 what = "Aborted(" + what + ")";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 what += ". Build with -sASSERTIONS for more info.";
 /** @suppress {checkTypes} */ var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */ var isDataURI = filename => filename.startsWith(dataURIPrefix);

var wasmBinaryFile;

if (Module["locateFile"]) {
 wasmBinaryFile = "binaryen_raw_wasm.wasm";
 if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
 }
} else {
 wasmBinaryFile = new URL("binaryen_raw_wasm.wasm", import.meta.url).href;
}

function getBinarySync(file) {
 if (file == wasmBinaryFile && wasmBinary) {
  return new Uint8Array(wasmBinary);
 }
 if (readBinary) {
  return readBinary(file);
 }
 throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch == "function") {
   return fetch(binaryFile, {
    credentials: "same-origin"
   }).then(response => {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + binaryFile + "'";
    }
    return response["arrayBuffer"]();
   }).catch(() => getBinarySync(binaryFile));
  }
 }
 return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
 return getBinaryPromise(binaryFile).then(binary => WebAssembly.instantiate(binary, imports)).then(instance => instance).then(receiver, reason => {
  err(`failed to asynchronously prepare wasm: ${reason}`);
  abort(reason);
 });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
 if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
  return fetch(binaryFile, {
   credentials: "same-origin"
  }).then(response => {
   /** @suppress {checkTypes} */ var result = WebAssembly.instantiateStreaming(response, imports);
   return result.then(callback, function(reason) {
    err(`wasm streaming compile failed: ${reason}`);
    err("falling back to ArrayBuffer instantiation");
    return instantiateArrayBuffer(binaryFile, imports, callback);
   });
  });
 }
 return instantiateArrayBuffer(binaryFile, imports, callback);
}

function createWasm() {
 var info = {
  "a": wasmImports
 };
 /** @param {WebAssembly.Module=} module*/ function receiveInstance(instance, module) {
  wasmExports = instance.exports;
  wasmMemory = wasmExports["La"];
  updateMemoryViews();
  wasmTable = wasmExports["NA"];
  addOnInit(wasmExports["Ma"]);
  removeRunDependency("wasm-instantiate");
  return wasmExports;
 }
 addRunDependency("wasm-instantiate");
 function receiveInstantiationResult(result) {
  receiveInstance(result["instance"]);
 }
 if (Module["instantiateWasm"]) {
  try {
   return Module["instantiateWasm"](info, receiveInstance);
  } catch (e) {
   err(`Module.instantiateWasm callback failed with error: ${e}`);
   readyPromiseReject(e);
  }
 }
 instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
 return {};
}

var tempDouble;

var tempI64;

/** @constructor */ function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = `Program terminated with exit(${status})`;
 this.status = status;
}

var callRuntimeCallbacks = callbacks => {
 while (callbacks.length > 0) {
  callbacks.shift()(Module);
 }
};

var noExitRuntime = Module["noExitRuntime"] || true;

var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

/**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */ var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
  return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
 }
 var str = "";
 while (idx < endPtr) {
  var u0 = heapOrArray[idx++];
  if (!(u0 & 128)) {
   str += String.fromCharCode(u0);
   continue;
  }
  var u1 = heapOrArray[idx++] & 63;
  if ((u0 & 224) == 192) {
   str += String.fromCharCode(((u0 & 31) << 6) | u1);
   continue;
  }
  var u2 = heapOrArray[idx++] & 63;
  if ((u0 & 240) == 224) {
   u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
  } else {
   u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
  }
  if (u0 < 65536) {
   str += String.fromCharCode(u0);
  } else {
   var ch = u0 - 65536;
   str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
  }
 }
 return str;
};

/**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */ var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";

var ___assert_fail = (condition, filename, line, func) => {
 abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
};

var exceptionCaught = [];

var uncaughtExceptionCount = 0;

var ___cxa_begin_catch = ptr => {
 var info = new ExceptionInfo(ptr);
 if (!info.get_caught()) {
  info.set_caught(true);
  uncaughtExceptionCount--;
 }
 info.set_rethrown(false);
 exceptionCaught.push(info);
 ___cxa_increment_exception_refcount(info.excPtr);
 return info.get_exception_ptr();
};

var exceptionLast = 0;

var ___cxa_end_catch = () => {
 _setThrew(0, 0);
 var info = exceptionCaught.pop();
 ___cxa_decrement_exception_refcount(info.excPtr);
 exceptionLast = 0;
};

/** @constructor */ function ExceptionInfo(excPtr) {
 this.excPtr = excPtr;
 this.ptr = excPtr - 24;
 this.set_type = function(type) {
  HEAPU32[(((this.ptr) + (4)) >> 2)] = type;
 };
 this.get_type = function() {
  return HEAPU32[(((this.ptr) + (4)) >> 2)];
 };
 this.set_destructor = function(destructor) {
  HEAPU32[(((this.ptr) + (8)) >> 2)] = destructor;
 };
 this.get_destructor = function() {
  return HEAPU32[(((this.ptr) + (8)) >> 2)];
 };
 this.set_caught = function(caught) {
  caught = caught ? 1 : 0;
  HEAP8[(((this.ptr) + (12)) >> 0)] = caught;
 };
 this.get_caught = function() {
  return HEAP8[(((this.ptr) + (12)) >> 0)] != 0;
 };
 this.set_rethrown = function(rethrown) {
  rethrown = rethrown ? 1 : 0;
  HEAP8[(((this.ptr) + (13)) >> 0)] = rethrown;
 };
 this.get_rethrown = function() {
  return HEAP8[(((this.ptr) + (13)) >> 0)] != 0;
 };
 this.init = function(type, destructor) {
  this.set_adjusted_ptr(0);
  this.set_type(type);
  this.set_destructor(destructor);
 };
 this.set_adjusted_ptr = function(adjustedPtr) {
  HEAPU32[(((this.ptr) + (16)) >> 2)] = adjustedPtr;
 };
 this.get_adjusted_ptr = function() {
  return HEAPU32[(((this.ptr) + (16)) >> 2)];
 };
 this.get_exception_ptr = function() {
  var isPointer = ___cxa_is_pointer_type(this.get_type());
  if (isPointer) {
   return HEAPU32[((this.excPtr) >> 2)];
  }
  var adjusted = this.get_adjusted_ptr();
  if (adjusted !== 0) return adjusted;
  return this.excPtr;
 };
}

var ___resumeException = ptr => {
 if (!exceptionLast) {
  exceptionLast = ptr;
 }
 throw exceptionLast;
};

var findMatchingCatch = args => {
 var thrown = exceptionLast;
 if (!thrown) {
  setTempRet0(0);
  return 0;
 }
 var info = new ExceptionInfo(thrown);
 info.set_adjusted_ptr(thrown);
 var thrownType = info.get_type();
 if (!thrownType) {
  setTempRet0(0);
  return thrown;
 }
 for (var arg in args) {
  var caughtType = args[arg];
  if (caughtType === 0 || caughtType === thrownType) {
   break;
  }
  var adjusted_ptr_addr = info.ptr + 16;
  if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
   setTempRet0(caughtType);
   return thrown;
  }
 }
 setTempRet0(thrownType);
 return thrown;
};

var ___cxa_find_matching_catch_2 = () => findMatchingCatch([]);

var ___cxa_find_matching_catch_3 = arg0 => findMatchingCatch([ arg0 ]);

var ___cxa_find_matching_catch_4 = (arg0, arg1) => findMatchingCatch([ arg0, arg1 ]);

var ___cxa_rethrow = () => {
 var info = exceptionCaught.pop();
 if (!info) {
  abort("no exception to throw");
 }
 var ptr = info.excPtr;
 if (!info.get_rethrown()) {
  exceptionCaught.push(info);
  info.set_rethrown(true);
  info.set_caught(false);
  uncaughtExceptionCount++;
 }
 exceptionLast = ptr;
 throw exceptionLast;
};

var ___cxa_throw = (ptr, type, destructor) => {
 var info = new ExceptionInfo(ptr);
 info.init(type, destructor);
 exceptionLast = ptr;
 uncaughtExceptionCount++;
 throw exceptionLast;
};

var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;

var setErrNo = value => {
 HEAP32[((___errno_location()) >> 2)] = value;
 return value;
};

var PATH = {
 isAbs: path => path.charAt(0) === "/",
 splitPath: filename => {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: (parts, allowAboveRoot) => {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: path => {
  var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: path => {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: path => {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments);
  return PATH.normalize(paths.join("/"));
 },
 join2: (l, r) => PATH.normalize(l + "/" + r)
};

var initRandomFill = () => {
 if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
  return view => crypto.getRandomValues(view);
 } else abort("initRandomDevice");
};

var randomFill = view => (randomFill = initRandomFill())(view);

var PATH_FS = {
 resolve: function() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = (i >= 0) ? arguments[i] : FS.cwd();
   if (typeof path != "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = PATH.isAbs(path);
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
  return ((resolvedAbsolute ? "/" : "") + resolvedPath) || ".";
 },
 relative: (from, to) => {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

var FS_stdin_getChar_buffer = [];

var lengthBytesUTF8 = str => {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var c = str.charCodeAt(i);
  if (c <= 127) {
   len++;
  } else if (c <= 2047) {
   len += 2;
  } else if (c >= 55296 && c <= 57343) {
   len += 4;
   ++i;
  } else {
   len += 3;
  }
 }
 return len;
};

var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | (u1 & 1023);
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++] = 192 | (u >> 6);
   heap[outIdx++] = 128 | (u & 63);
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++] = 224 | (u >> 12);
   heap[outIdx++] = 128 | ((u >> 6) & 63);
   heap[outIdx++] = 128 | (u & 63);
  } else {
   if (outIdx + 3 >= endIdx) break;
   heap[outIdx++] = 240 | (u >> 18);
   heap[outIdx++] = 128 | ((u >> 12) & 63);
   heap[outIdx++] = 128 | ((u >> 6) & 63);
   heap[outIdx++] = 128 | (u & 63);
  }
 }
 heap[outIdx] = 0;
 return outIdx - startIdx;
};

/** @type {function(string, boolean=, number=)} */ function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

var FS_stdin_getChar = () => {
 if (!FS_stdin_getChar_buffer.length) {
  var result = null;
  if (typeof window != "undefined" && typeof window.prompt == "function") {
   result = window.prompt("Input: ");
   if (result !== null) {
    result += "\n";
   }
  } else if (typeof readline == "function") {
   result = readline();
   if (result !== null) {
    result += "\n";
   }
  }
  if (!result) {
   return null;
  }
  FS_stdin_getChar_buffer = intArrayFromString(result, true);
 }
 return FS_stdin_getChar_buffer.shift();
};

var TTY = {
 ttys: [],
 init() {},
 shutdown() {},
 register(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close(stream) {
   stream.tty.ops.fsync(stream.tty);
  },
  fsync(stream) {
   stream.tty.ops.fsync(stream.tty);
  },
  read(stream, buffer, offset, length, pos) {
   /* ignored */ if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char(tty) {
   return FS_stdin_getChar();
  },
  put_char(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  fsync(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  },
  ioctl_tcgets(tty) {
   return {
    c_iflag: 25856,
    c_oflag: 5,
    c_cflag: 191,
    c_lflag: 35387,
    c_cc: [ 3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
   };
  },
  ioctl_tcsets(tty, optional_actions, data) {
   return 0;
  },
  ioctl_tiocgwinsz(tty) {
   return [ 24, 80 ];
  }
 },
 default_tty1_ops: {
  put_char(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  fsync(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

var mmapAlloc = size => {
 abort();
};

var MEMFS = {
 ops_table: null,
 mount(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, /* 0777 */ 0);
 },
 createNode(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  if (!MEMFS.ops_table) {
   MEMFS.ops_table = {
    dir: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      lookup: MEMFS.node_ops.lookup,
      mknod: MEMFS.node_ops.mknod,
      rename: MEMFS.node_ops.rename,
      unlink: MEMFS.node_ops.unlink,
      rmdir: MEMFS.node_ops.rmdir,
      readdir: MEMFS.node_ops.readdir,
      symlink: MEMFS.node_ops.symlink
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek
     }
    },
    file: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek,
      read: MEMFS.stream_ops.read,
      write: MEMFS.stream_ops.write,
      allocate: MEMFS.stream_ops.allocate,
      mmap: MEMFS.stream_ops.mmap,
      msync: MEMFS.stream_ops.msync
     }
    },
    link: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      readlink: MEMFS.node_ops.readlink
     },
     stream: {}
    },
    chrdev: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: FS.chrdev_stream_ops
    }
   };
  }
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage(node, newCapacity) {
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage(node, newSize) {
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir(node) {
   var entries = [ ".", ".." ];
   for (var key in node.contents) {
    if (!node.contents.hasOwnProperty(key)) {
     continue;
    }
    entries.push(key);
   }
   return entries;
  },
  symlink(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | /* 0777 */ 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write(stream, buffer, offset, length, position, canOwn) {
   if (buffer.buffer === HEAP8.buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap(stream, length, position, prot, flags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    HEAP8.set(contents, ptr);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync(stream, buffer, offset, length, mmapFlags) {
   MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

/** @param {boolean=} noRunDep */ var asyncLoad = (url, onload, onerror, noRunDep) => {
 var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
 readAsync(url, arrayBuffer => {
  assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
  onload(new Uint8Array(arrayBuffer));
  if (dep) removeRunDependency(dep);
 }, event => {
  if (onerror) {
   onerror();
  } else {
   throw `Loading data file "${url}" failed.`;
  }
 });
 if (dep) addRunDependency(dep);
};

var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
 FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
};

var preloadPlugins = Module["preloadPlugins"] || [];

var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
 if (typeof Browser != "undefined") Browser.init();
 var handled = false;
 preloadPlugins.forEach(plugin => {
  if (handled) return;
  if (plugin["canHandle"](fullname)) {
   plugin["handle"](byteArray, fullname, finish, onerror);
   handled = true;
  }
 });
 return handled;
};

var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
 var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
 var dep = getUniqueRunDependency(`cp ${fullname}`);
 function processData(byteArray) {
  function finish(byteArray) {
   if (preFinish) preFinish();
   if (!dontCreateFile) {
    FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
   }
   if (onload) onload();
   removeRunDependency(dep);
  }
  if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
   if (onerror) onerror();
   removeRunDependency(dep);
  })) {
   return;
  }
  finish(byteArray);
 }
 addRunDependency(dep);
 if (typeof url == "string") {
  asyncLoad(url, byteArray => processData(byteArray), onerror);
 } else {
  processData(url);
 }
};

var FS_modeStringToFlags = str => {
 var flagModes = {
  "r": 0,
  "r+": 2,
  "w": 512 | 64 | 1,
  "w+": 512 | 64 | 2,
  "a": 1024 | 64 | 1,
  "a+": 1024 | 64 | 2
 };
 var flags = flagModes[str];
 if (typeof flags == "undefined") {
  throw new Error(`Unknown file open mode: ${str}`);
 }
 return flags;
};

var FS_getMode = (canRead, canWrite) => {
 var mode = 0;
 if (canRead) mode |= 292 | 73;
 if (canWrite) mode |= 146;
 return mode;
};

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 ErrnoError: null,
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 lookupPath(path, opts = {}) {
  path = PATH_FS.resolve(path);
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  opts = Object.assign(defaults, opts);
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = path.split("/").filter(p => !!p);
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = (i === parts.length - 1);
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || (islast && opts.follow_mount)) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count + 1
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath(node) {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
   }
   path = path ? `${node.name}/${path}` : node.name;
   node = node.parent;
  }
 },
 hashName(parentid, name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
  }
  return ((parentid + hash) >>> 0) % FS.nameTable.length;
 },
 hashAddNode(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode(parent, name) {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode, parent);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode(parent, name, mode, rdev) {
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode(node) {
  FS.hashRemoveNode(node);
 },
 isRoot(node) {
  return node === node.parent;
 },
 isMountpoint(node) {
  return !!node.mounted;
 },
 isFile(mode) {
  return (mode & 61440) === 32768;
 },
 isDir(mode) {
  return (mode & 61440) === 16384;
 },
 isLink(mode) {
  return (mode & 61440) === 40960;
 },
 isChrdev(mode) {
  return (mode & 61440) === 8192;
 },
 isBlkdev(mode) {
  return (mode & 61440) === 24576;
 },
 isFIFO(mode) {
  return (mode & 61440) === 4096;
 },
 isSocket(mode) {
  return (mode & 49152) === 49152;
 },
 flagsToPermissionString(flag) {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if ((flag & 512)) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions(node, perms) {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup(dir) {
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate(dir, name) {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete(dir, name, isdir) {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen(node, flags) {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" || (flags & 512)) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd() {
  for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStreamChecked(fd) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  return stream;
 },
 getStream: fd => FS.streams[fd],
 createStream(stream, fd = -1) {
  if (!FS.FSStream) {
   FS.FSStream = /** @constructor */ function() {
    this.shared = {};
   };
   FS.FSStream.prototype = {};
   Object.defineProperties(FS.FSStream.prototype, {
    object: {
     /** @this {FS.FSStream} */ get() {
      return this.node;
     },
     /** @this {FS.FSStream} */ set(val) {
      this.node = val;
     }
    },
    isRead: {
     /** @this {FS.FSStream} */ get() {
      return (this.flags & 2097155) !== 1;
     }
    },
    isWrite: {
     /** @this {FS.FSStream} */ get() {
      return (this.flags & 2097155) !== 0;
     }
    },
    isAppend: {
     /** @this {FS.FSStream} */ get() {
      return (this.flags & 1024);
     }
    },
    flags: {
     /** @this {FS.FSStream} */ get() {
      return this.shared.flags;
     },
     /** @this {FS.FSStream} */ set(val) {
      this.shared.flags = val;
     }
    },
    position: {
     /** @this {FS.FSStream} */ get() {
      return this.shared.position;
     },
     /** @this {FS.FSStream} */ set(val) {
      this.shared.position = val;
     }
    }
   });
  }
  stream = Object.assign(new FS.FSStream, stream);
  if (fd == -1) {
   fd = FS.nextfd();
  }
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream(fd) {
  FS.streams[fd] = null;
 },
 chrdev_stream_ops: {
  open(stream) {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   if (stream.stream_ops.open) {
    stream.stream_ops.open(stream);
   }
  },
  llseek() {
   throw new FS.ErrnoError(70);
  }
 },
 major: dev => ((dev) >> 8),
 minor: dev => ((dev) & 255),
 makedev: (ma, mi) => ((ma) << 8 | (mi)),
 registerDevice(dev, ops) {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: dev => FS.devices[dev],
 getMounts(mount) {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push.apply(check, m.mounts);
  }
  return mounts;
 },
 syncfs(populate, callback) {
  if (typeof populate == "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach(mount => {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  });
 },
 mount(type, opts, mountpoint) {
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount(mountpoint) {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach(hash => {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  });
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  node.mount.mounts.splice(idx, 1);
 },
 lookup(parent, name) {
  return parent.node_ops.lookup(parent, name);
 },
 mknod(path, mode, dev) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create(path, mode) {
  mode = mode !== undefined ? mode : 438;
  /* 0666 */ mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir(path, mode) {
  mode = mode !== undefined ? mode : 511;
  /* 0777 */ mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree(path, mode) {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev(path, mode, dev) {
  if (typeof dev == "undefined") {
   dev = mode;
   mode = 438;
  }
  /* 0666 */ mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink(oldpath, newpath) {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename(old_path, new_path) {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
 },
 rmdir(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
 },
 readdir(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
 },
 readlink(path) {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat(path, dontFollow) {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat(path) {
  return FS.stat(path, true);
 },
 chmod(path, mode, dontFollow) {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: (mode & 4095) | (node.mode & ~4095),
   timestamp: Date.now()
  });
 },
 lchmod(path, mode) {
  FS.chmod(path, mode, true);
 },
 fchmod(fd, mode) {
  var stream = FS.getStreamChecked(fd);
  FS.chmod(stream.node, mode);
 },
 chown(path, uid, gid, dontFollow) {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown(path, uid, gid) {
  FS.chown(path, uid, gid, true);
 },
 fchown(fd, uid, gid) {
  var stream = FS.getStreamChecked(fd);
  FS.chown(stream.node, uid, gid);
 },
 truncate(path, len) {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate(fd, len) {
  var stream = FS.getStreamChecked(fd);
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime(path, atime, mtime) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open(path, flags, mode) {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
  mode = typeof mode == "undefined" ? 438 : /* 0666 */ mode;
  if ((flags & 64)) {
   mode = (mode & 4095) | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path == "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if ((flags & 64)) {
   if (node) {
    if ((flags & 128)) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if ((flags & 65536) && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if ((flags & 512) && !created) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  });
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
   }
  }
  return stream;
 },
 close(stream) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed(stream) {
  return stream.fd === null;
 },
 llseek(stream, offset, whence) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read(stream, buffer, offset, length, position) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write(stream, buffer, offset, length, position, canOwn) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  return bytesWritten;
 },
 allocate(stream, offset, length) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap(stream, length, position, prot, flags) {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, length, position, prot, flags);
 },
 msync(stream, buffer, offset, length, mmapFlags) {
  if (!stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 munmap: stream => 0,
 ioctl(stream, cmd, arg) {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile(path, opts = {}) {
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error(`Invalid encoding type "${opts.encoding}"`);
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile(path, data, opts = {}) {
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data == "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: () => FS.currentPath,
 chdir(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories() {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices() {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: () => 0,
   write: (stream, buffer, offset, length, pos) => length
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var randomBuffer = new Uint8Array(1024), randomLeft = 0;
  var randomByte = () => {
   if (randomLeft === 0) {
    randomLeft = randomFill(randomBuffer).byteLength;
   }
   return randomBuffer[--randomLeft];
  };
  FS.createDevice("/dev", "random", randomByte);
  FS.createDevice("/dev", "urandom", randomByte);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories() {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount() {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, /* 0777 */ 73);
    node.node_ops = {
     lookup(parent, name) {
      var fd = +name;
      var stream = FS.getStreamChecked(fd);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: () => stream.path
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams() {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
 },
 ensureErrnoError() {
  if (FS.ErrnoError) return;
  FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
   this.name = "ErrnoError";
   this.node = node;
   this.setErrno = /** @this{Object} */ function(errno) {
    this.errno = errno;
   };
   this.setErrno(errno);
   this.message = "FS error";
  };
  FS.ErrnoError.prototype = new Error;
  FS.ErrnoError.prototype.constructor = FS.ErrnoError;
  [ 44 ].forEach(code => {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  });
 },
 staticInit() {
  FS.ensureErrnoError();
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS
  };
 },
 init(input, output, error) {
  FS.init.initialized = true;
  FS.ensureErrnoError();
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit() {
  FS.init.initialized = false;
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 findObject(path, dontResolveLastLink) {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (!ret.exists) {
   return null;
  }
  return ret.object;
 },
 analyzePath(path, dontResolveLastLink) {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath(parent, path, canRead, canWrite) {
  parent = typeof parent == "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile(parent, name, properties, canRead, canWrite) {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS_getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile(parent, name, data, canRead, canWrite, canOwn) {
  var path = name;
  if (parent) {
   parent = typeof parent == "string" ? parent : FS.getPath(parent);
   path = name ? PATH.join2(parent, name) : parent;
  }
  var mode = FS_getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data == "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
 },
 createDevice(parent, name, input, output) {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS_getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open(stream) {
    stream.seekable = false;
   },
   close(stream) {
    if (output && output.buffer && output.buffer.length) {
     output(10);
    }
   },
   read(stream, buffer, offset, length, pos) {
    /* ignored */ var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write(stream, buffer, offset, length, pos) {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile(obj) {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest != "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile(parent, name, url, canRead, canWrite) {
  /** @constructor */ function LazyUint8Array() {
   this.lengthKnown = false;
   this.chunks = [];
  }
  LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
   if (idx > this.length - 1 || idx < 0) {
    return undefined;
   }
   var chunkOffset = idx % this.chunkSize;
   var chunkNum = (idx / this.chunkSize) | 0;
   return this.getter(chunkNum)[chunkOffset];
  };
  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
   this.getter = getter;
  };
  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
   var xhr = new XMLHttpRequest;
   xhr.open("HEAD", url, false);
   xhr.send(null);
   if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
   var datalength = Number(xhr.getResponseHeader("Content-length"));
   var header;
   var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
   var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
   var chunkSize = 1024 * 1024;
   if (!hasByteServing) chunkSize = datalength;
   var doXHR = (from, to) => {
    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    xhr.responseType = "arraybuffer";
    if (xhr.overrideMimeType) {
     xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    if (xhr.response !== undefined) {
     return new Uint8Array(/** @type{Array<number>} */ (xhr.response || []));
    }
    return intArrayFromString(xhr.responseText || "", true);
   };
   var lazyArray = this;
   lazyArray.setDataGetter(chunkNum => {
    var start = chunkNum * chunkSize;
    var end = (chunkNum + 1) * chunkSize - 1;
    end = Math.min(end, datalength - 1);
    if (typeof lazyArray.chunks[chunkNum] == "undefined") {
     lazyArray.chunks[chunkNum] = doXHR(start, end);
    }
    if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
    return lazyArray.chunks[chunkNum];
   });
   if (usesGzip || !datalength) {
    chunkSize = datalength = 1;
    datalength = this.getter(0).length;
    chunkSize = datalength;
    out("LazyFiles on gzip forces download of the whole file when length is accessed");
   }
   this._length = datalength;
   this._chunkSize = chunkSize;
   this.lengthKnown = true;
  };
  if (typeof XMLHttpRequest != "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array;
   Object.defineProperties(lazyArray, {
    length: {
     get: /** @this{Object} */ function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._length;
     }
    },
    chunkSize: {
     get: /** @this{Object} */ function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._chunkSize;
     }
    }
   });
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: /** @this {FSNode} */ function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach(key => {
   var fn = node.stream_ops[key];
   stream_ops[key] = function forceLoadLazyFile() {
    FS.forceLoadFile(node);
    return fn.apply(null, arguments);
   };
  });
  function writeChunks(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  }
  stream_ops.read = (stream, buffer, offset, length, position) => {
   FS.forceLoadFile(node);
   return writeChunks(stream, buffer, offset, length, position);
  };
  stream_ops.mmap = (stream, length, position, prot, flags) => {
   FS.forceLoadFile(node);
   var ptr = mmapAlloc(length);
   if (!ptr) {
    throw new FS.ErrnoError(48);
   }
   writeChunks(stream, HEAP8, ptr, length, position);
   return {
    ptr: ptr,
    allocated: true
   };
  };
  node.stream_ops = stream_ops;
  return node;
 }
};

var SYSCALLS = {
 DEFAULT_POLLMASK: 5,
 calculateAt(dirfd, path, allowEmpty) {
  if (PATH.isAbs(path)) {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = SYSCALLS.getStreamFromFD(dirfd);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat(func, path, buf) {
  try {
   var stat = func(path);
  } catch (e) {
   if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
    return -54;
   }
   throw e;
  }
  HEAP32[((buf) >> 2)] = stat.dev;
  HEAP32[(((buf) + (4)) >> 2)] = stat.mode;
  HEAPU32[(((buf) + (8)) >> 2)] = stat.nlink;
  HEAP32[(((buf) + (12)) >> 2)] = stat.uid;
  HEAP32[(((buf) + (16)) >> 2)] = stat.gid;
  HEAP32[(((buf) + (20)) >> 2)] = stat.rdev;
  (tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  HEAP32[(((buf) + (24)) >> 2)] = tempI64[0], HEAP32[(((buf) + (28)) >> 2)] = tempI64[1]);
  HEAP32[(((buf) + (32)) >> 2)] = 4096;
  HEAP32[(((buf) + (36)) >> 2)] = stat.blocks;
  var atime = stat.atime.getTime();
  var mtime = stat.mtime.getTime();
  var ctime = stat.ctime.getTime();
  (tempI64 = [ Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), 
  (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  HEAP32[(((buf) + (40)) >> 2)] = tempI64[0], HEAP32[(((buf) + (44)) >> 2)] = tempI64[1]);
  HEAPU32[(((buf) + (48)) >> 2)] = (atime % 1e3) * 1e3;
  (tempI64 = [ Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), 
  (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  HEAP32[(((buf) + (56)) >> 2)] = tempI64[0], HEAP32[(((buf) + (60)) >> 2)] = tempI64[1]);
  HEAPU32[(((buf) + (64)) >> 2)] = (mtime % 1e3) * 1e3;
  (tempI64 = [ Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), 
  (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  HEAP32[(((buf) + (72)) >> 2)] = tempI64[0], HEAP32[(((buf) + (76)) >> 2)] = tempI64[1]);
  HEAPU32[(((buf) + (80)) >> 2)] = (ctime % 1e3) * 1e3;
  (tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  HEAP32[(((buf) + (88)) >> 2)] = tempI64[0], HEAP32[(((buf) + (92)) >> 2)] = tempI64[1]);
  return 0;
 },
 doMsync(addr, stream, len, flags, offset) {
  if (!FS.isFile(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (flags & 2) {
   return 0;
  }
  var buffer = HEAPU8.slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 varargs: undefined,
 get() {
  var ret = HEAP32[((+SYSCALLS.varargs) >> 2)];
  SYSCALLS.varargs += 4;
  return ret;
 },
 getp() {
  return SYSCALLS.get();
 },
 getStr(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD(fd) {
  var stream = FS.getStreamChecked(fd);
  return stream;
 }
};

function ___syscall_fcntl64(fd, cmd, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (cmd) {
  case 0:
   {
    var arg = SYSCALLS.get();
    if (arg < 0) {
     return -28;
    }
    while (FS.streams[arg]) {
     arg++;
    }
    var newStream;
    newStream = FS.createStream(stream, arg);
    return newStream.fd;
   }

  case 1:
  case 2:
   return 0;

  case 3:
   return stream.flags;

  case 4:
   {
    var arg = SYSCALLS.get();
    stream.flags |= arg;
    return 0;
   }

  case 5:
   {
    var arg = SYSCALLS.getp();
    var offset = 0;
    HEAP16[(((arg) + (offset)) >> 1)] = 2;
    return 0;
   }

  case 6:
  case 7:
   return 0;

  case 16:
  case 8:
   return -28;

  case 9:
   setErrNo(28);
   return -1;

  default:
   {
    return -28;
   }
  }
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_ioctl(fd, op, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (op) {
  case 21509:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21505:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tcgets) {
     var termios = stream.tty.ops.ioctl_tcgets(stream);
     var argp = SYSCALLS.getp();
     HEAP32[((argp) >> 2)] = termios.c_iflag || 0;
     HEAP32[(((argp) + (4)) >> 2)] = termios.c_oflag || 0;
     HEAP32[(((argp) + (8)) >> 2)] = termios.c_cflag || 0;
     HEAP32[(((argp) + (12)) >> 2)] = termios.c_lflag || 0;
     for (var i = 0; i < 32; i++) {
      HEAP8[(((argp + i) + (17)) >> 0)] = termios.c_cc[i] || 0;
     }
     return 0;
    }
    return 0;
   }

  case 21510:
  case 21511:
  case 21512:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21506:
  case 21507:
  case 21508:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tcsets) {
     var argp = SYSCALLS.getp();
     var c_iflag = HEAP32[((argp) >> 2)];
     var c_oflag = HEAP32[(((argp) + (4)) >> 2)];
     var c_cflag = HEAP32[(((argp) + (8)) >> 2)];
     var c_lflag = HEAP32[(((argp) + (12)) >> 2)];
     var c_cc = [];
     for (var i = 0; i < 32; i++) {
      c_cc.push(HEAP8[(((argp + i) + (17)) >> 0)]);
     }
     return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
      c_iflag: c_iflag,
      c_oflag: c_oflag,
      c_cflag: c_cflag,
      c_lflag: c_lflag,
      c_cc: c_cc
     });
    }
    return 0;
   }

  case 21519:
   {
    if (!stream.tty) return -59;
    var argp = SYSCALLS.getp();
    HEAP32[((argp) >> 2)] = 0;
    return 0;
   }

  case 21520:
   {
    if (!stream.tty) return -59;
    return -28;
   }

  case 21531:
   {
    var argp = SYSCALLS.getp();
    return FS.ioctl(stream, op, argp);
   }

  case 21523:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tiocgwinsz) {
     var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
     var argp = SYSCALLS.getp();
     HEAP16[((argp) >> 1)] = winsize[0];
     HEAP16[(((argp) + (2)) >> 1)] = winsize[1];
    }
    return 0;
   }

  case 21524:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21515:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  default:
   return -28;
  }
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  var mode = varargs ? SYSCALLS.get() : 0;
  return FS.open(path, flags, mode).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var nowIsMonotonic = 1;

var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

var _abort = () => {
 abort("");
};

var _emscripten_get_now;

_emscripten_get_now = () => performance.now();

var getHeapMax = () => 2147483648;

var growMemory = size => {
 var b = wasmMemory.buffer;
 var pages = (size - b.byteLength + 65535) / 65536;
 try {
  wasmMemory.grow(pages);
  updateMemoryViews();
  return 1;
 } /*success*/ catch (e) {}
};

var _emscripten_resize_heap = requestedSize => {
 var oldSize = HEAPU8.length;
 requestedSize >>>= 0;
 var maxHeapSize = getHeapMax();
 if (requestedSize > maxHeapSize) {
  return false;
 }
 var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = growMemory(newSize);
  if (replacement) {
   return true;
  }
 }
 return false;
};

var ENV = {};

var getExecutableName = () => thisProgram || "./this.program";

var getEnvStrings = () => {
 if (!getEnvStrings.strings) {
  var lang = ((typeof navigator == "object" && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
  var env = {
   "USER": "web_user",
   "LOGNAME": "web_user",
   "PATH": "/",
   "PWD": "/",
   "HOME": "/home/web_user",
   "LANG": lang,
   "_": getExecutableName()
  };
  for (var x in ENV) {
   if (ENV[x] === undefined) delete env[x]; else env[x] = ENV[x];
  }
  var strings = [];
  for (var x in env) {
   strings.push(`${x}=${env[x]}`);
  }
  getEnvStrings.strings = strings;
 }
 return getEnvStrings.strings;
};

var stringToAscii = (str, buffer) => {
 for (var i = 0; i < str.length; ++i) {
  HEAP8[((buffer++) >> 0)] = str.charCodeAt(i);
 }
 HEAP8[((buffer) >> 0)] = 0;
};

var _environ_get = (__environ, environ_buf) => {
 var bufSize = 0;
 getEnvStrings().forEach((string, i) => {
  var ptr = environ_buf + bufSize;
  HEAPU32[(((__environ) + (i * 4)) >> 2)] = ptr;
  stringToAscii(string, ptr);
  bufSize += string.length + 1;
 });
 return 0;
};

var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
 var strings = getEnvStrings();
 HEAPU32[((penviron_count) >> 2)] = strings.length;
 var bufSize = 0;
 strings.forEach(string => bufSize += string.length + 1);
 HEAPU32[((penviron_buf_size) >> 2)] = bufSize;
 return 0;
};

function _fd_close(fd) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

/** @param {number=} offset */ var doReadv = (stream, iov, iovcnt, offset) => {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = HEAPU32[((iov) >> 2)];
  var len = HEAPU32[(((iov) + (4)) >> 2)];
  iov += 8;
  var curr = FS.read(stream, HEAP8, ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (curr < len) break;
  if (typeof offset !== "undefined") {
   offset += curr;
  }
 }
 return ret;
};

function _fd_read(fd, iov, iovcnt, pnum) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doReadv(stream, iov, iovcnt);
  HEAPU32[((pnum) >> 2)] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

var convertI32PairToI53Checked = (lo, hi) => ((hi + 2097152) >>> 0 < 4194305 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 try {
  if (isNaN(offset)) return 61;
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.llseek(stream, offset, whence);
  (tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  HEAP32[((newOffset) >> 2)] = tempI64[0], HEAP32[(((newOffset) + (4)) >> 2)] = tempI64[1]);
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

/** @param {number=} offset */ var doWritev = (stream, iov, iovcnt, offset) => {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = HEAPU32[((iov) >> 2)];
  var len = HEAPU32[(((iov) + (4)) >> 2)];
  iov += 8;
  var curr = FS.write(stream, HEAP8, ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (typeof offset !== "undefined") {
   offset += curr;
  }
 }
 return ret;
};

function _fd_write(fd, iov, iovcnt, pnum) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doWritev(stream, iov, iovcnt);
  HEAPU32[((pnum) >> 2)] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

var _llvm_eh_typeid_for = type => type;

var runtimeKeepaliveCounter = 0;

var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;

var _proc_exit = code => {
 EXITSTATUS = code;
 if (!keepRuntimeAlive()) {
  if (Module["onExit"]) Module["onExit"](code);
  ABORT = true;
 }
 quit_(code, new ExitStatus(code));
};

var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

var arraySum = (array, index) => {
 var sum = 0;
 for (var i = 0; i <= index; sum += array[i++]) {}
 return sum;
};

var MONTH_DAYS_LEAP = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var MONTH_DAYS_REGULAR = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var addDays = (date, days) => {
 var newDate = new Date(date.getTime());
 while (days > 0) {
  var leap = isLeapYear(newDate.getFullYear());
  var currentMonth = newDate.getMonth();
  var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  if (days > daysInCurrentMonth - newDate.getDate()) {
   days -= (daysInCurrentMonth - newDate.getDate() + 1);
   newDate.setDate(1);
   if (currentMonth < 11) {
    newDate.setMonth(currentMonth + 1);
   } else {
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + 1);
   }
  } else {
   newDate.setDate(newDate.getDate() + days);
   return newDate;
  }
 }
 return newDate;
};

var writeArrayToMemory = (array, buffer) => {
 HEAP8.set(array, buffer);
};

var _strftime = (s, maxsize, format, tm) => {
 var tm_zone = HEAPU32[(((tm) + (40)) >> 2)];
 var date = {
  tm_sec: HEAP32[((tm) >> 2)],
  tm_min: HEAP32[(((tm) + (4)) >> 2)],
  tm_hour: HEAP32[(((tm) + (8)) >> 2)],
  tm_mday: HEAP32[(((tm) + (12)) >> 2)],
  tm_mon: HEAP32[(((tm) + (16)) >> 2)],
  tm_year: HEAP32[(((tm) + (20)) >> 2)],
  tm_wday: HEAP32[(((tm) + (24)) >> 2)],
  tm_yday: HEAP32[(((tm) + (28)) >> 2)],
  tm_isdst: HEAP32[(((tm) + (32)) >> 2)],
  tm_gmtoff: HEAP32[(((tm) + (36)) >> 2)],
  tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
 };
 var pattern = UTF8ToString(format);
 var EXPANSION_RULES_1 = {
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m/%d/%y",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%r": "%I:%M:%S %p",
  "%R": "%H:%M",
  "%T": "%H:%M:%S",
  "%x": "%m/%d/%y",
  "%X": "%H:%M:%S",
  "%Ec": "%c",
  "%EC": "%C",
  "%Ex": "%m/%d/%y",
  "%EX": "%H:%M:%S",
  "%Ey": "%y",
  "%EY": "%Y",
  "%Od": "%d",
  "%Oe": "%e",
  "%OH": "%H",
  "%OI": "%I",
  "%Om": "%m",
  "%OM": "%M",
  "%OS": "%S",
  "%Ou": "%u",
  "%OU": "%U",
  "%OV": "%V",
  "%Ow": "%w",
  "%OW": "%W",
  "%Oy": "%y"
 };
 for (var rule in EXPANSION_RULES_1) {
  pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
 }
 var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
 var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 function leadingSomething(value, digits, character) {
  var str = typeof value == "number" ? value.toString() : (value || "");
  while (str.length < digits) {
   str = character[0] + str;
  }
  return str;
 }
 function leadingNulls(value, digits) {
  return leadingSomething(value, digits, "0");
 }
 function compareByDay(date1, date2) {
  function sgn(value) {
   return value < 0 ? -1 : (value > 0 ? 1 : 0);
  }
  var compare;
  if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
   if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
    compare = sgn(date1.getDate() - date2.getDate());
   }
  }
  return compare;
 }
 function getFirstWeekStartDate(janFourth) {
  switch (janFourth.getDay()) {
  case 0:
   return new Date(janFourth.getFullYear() - 1, 11, 29);

  case 1:
   return janFourth;

  case 2:
   return new Date(janFourth.getFullYear(), 0, 3);

  case 3:
   return new Date(janFourth.getFullYear(), 0, 2);

  case 4:
   return new Date(janFourth.getFullYear(), 0, 1);

  case 5:
   return new Date(janFourth.getFullYear() - 1, 11, 31);

  case 6:
   return new Date(janFourth.getFullYear() - 1, 11, 30);
  }
 }
 function getWeekBasedYear(date) {
  var thisDate = addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
  var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
  var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
  var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
  var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
   if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
    return thisDate.getFullYear() + 1;
   }
   return thisDate.getFullYear();
  }
  return thisDate.getFullYear() - 1;
 }
 var EXPANSION_RULES_2 = {
  "%a": date => WEEKDAYS[date.tm_wday].substring(0, 3),
  "%A": date => WEEKDAYS[date.tm_wday],
  "%b": date => MONTHS[date.tm_mon].substring(0, 3),
  "%B": date => MONTHS[date.tm_mon],
  "%C": date => {
   var year = date.tm_year + 1900;
   return leadingNulls((year / 100) | 0, 2);
  },
  "%d": date => leadingNulls(date.tm_mday, 2),
  "%e": date => leadingSomething(date.tm_mday, 2, " "),
  "%g": date => getWeekBasedYear(date).toString().substring(2),
  "%G": date => getWeekBasedYear(date),
  "%H": date => leadingNulls(date.tm_hour, 2),
  "%I": date => {
   var twelveHour = date.tm_hour;
   if (twelveHour == 0) twelveHour = 12; else if (twelveHour > 12) twelveHour -= 12;
   return leadingNulls(twelveHour, 2);
  },
  "%j": date => leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon - 1), 3),
  "%m": date => leadingNulls(date.tm_mon + 1, 2),
  "%M": date => leadingNulls(date.tm_min, 2),
  "%n": () => "\n",
  "%p": date => {
   if (date.tm_hour >= 0 && date.tm_hour < 12) {
    return "AM";
   }
   return "PM";
  },
  "%S": date => leadingNulls(date.tm_sec, 2),
  "%t": () => "\t",
  "%u": date => date.tm_wday || 7,
  "%U": date => {
   var days = date.tm_yday + 7 - date.tm_wday;
   return leadingNulls(Math.floor(days / 7), 2);
  },
  "%V": date => {
   var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
   if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
    val++;
   }
   if (!val) {
    val = 52;
    var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
    if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year % 400 - 1))) {
     val++;
    }
   } else if (val == 53) {
    var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
    if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year))) val = 1;
   }
   return leadingNulls(val, 2);
  },
  "%w": date => date.tm_wday,
  "%W": date => {
   var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
   return leadingNulls(Math.floor(days / 7), 2);
  },
  "%y": date => (date.tm_year + 1900).toString().substring(2),
  "%Y": date => date.tm_year + 1900,
  "%z": date => {
   var off = date.tm_gmtoff;
   var ahead = off >= 0;
   off = Math.abs(off) / 60;
   off = (off / 60) * 100 + (off % 60);
   return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
  },
  "%Z": date => date.tm_zone,
  "%%": () => "%"
 };
 pattern = pattern.replace(/%%/g, "\0\0");
 for (var rule in EXPANSION_RULES_2) {
  if (pattern.includes(rule)) {
   pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
  }
 }
 pattern = pattern.replace(/\0\0/g, "%");
 var bytes = intArrayFromString(pattern, false);
 if (bytes.length > maxsize) {
  return 0;
 }
 writeArrayToMemory(bytes, s);
 return bytes.length - 1;
};

var _strftime_l = (s, maxsize, format, tm, loc) => _strftime(s, maxsize, format, tm);

var wasmTableMirror = [];

var wasmTable;

var getWasmTableEntry = funcPtr => {
 var func = wasmTableMirror[funcPtr];
 if (!func) {
  if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
  wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
 }
 return func;
};

var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);

/** @suppress {duplicate } */ var stringToUTF8OnStack = str => {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8(str, ret, size);
 return ret;
};

var allocateUTF8OnStack = stringToUTF8OnStack;

var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
 if (!parent) {
  parent = this;
 }
 this.parent = parent;
 this.mount = parent.mount;
 this.mounted = null;
 this.id = FS.nextInode++;
 this.name = name;
 this.mode = mode;
 this.node_ops = {};
 this.stream_ops = {};
 this.rdev = rdev;
};

var readMode = 292 | /*292*/ 73;

/*73*/ var writeMode = 146;

/*146*/ Object.defineProperties(FSNode.prototype, {
 read: {
  get: /** @this{FSNode} */ function() {
   return (this.mode & readMode) === readMode;
  },
  set: /** @this{FSNode} */ function(val) {
   val ? this.mode |= readMode : this.mode &= ~readMode;
  }
 },
 write: {
  get: /** @this{FSNode} */ function() {
   return (this.mode & writeMode) === writeMode;
  },
  set: /** @this{FSNode} */ function(val) {
   val ? this.mode |= writeMode : this.mode &= ~writeMode;
  }
 },
 isFolder: {
  get: /** @this{FSNode} */ function() {
   return FS.isDir(this.mode);
  }
 },
 isDevice: {
  get: /** @this{FSNode} */ function() {
   return FS.isChrdev(this.mode);
  }
 }
});

FS.FSNode = FSNode;

FS.createPreloadedFile = FS_createPreloadedFile;

FS.staticInit();

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

Module["FS_unlink"] = FS.unlink;

Module["FS_createLazyFile"] = FS.createLazyFile;

Module["FS_createDevice"] = FS.createDevice;

var wasmImports = {
 /** @export */ b: ___assert_fail,
 /** @export */ o: ___cxa_begin_catch,
 /** @export */ r: ___cxa_end_catch,
 /** @export */ a: ___cxa_find_matching_catch_2,
 /** @export */ l: ___cxa_find_matching_catch_3,
 /** @export */ E: ___cxa_find_matching_catch_4,
 /** @export */ D: ___cxa_rethrow,
 /** @export */ s: ___cxa_throw,
 /** @export */ Ha: ___cxa_uncaught_exceptions,
 /** @export */ h: ___resumeException,
 /** @export */ F: ___syscall_fcntl64,
 /** @export */ Fa: ___syscall_ioctl,
 /** @export */ Ga: ___syscall_openat,
 /** @export */ Ia: __emscripten_get_now_is_monotonic,
 /** @export */ p: _abort,
 /** @export */ I: _emscripten_get_now,
 /** @export */ Ja: _emscripten_resize_heap,
 /** @export */ T: _environ_get,
 /** @export */ ca: _environ_sizes_get,
 /** @export */ G: _fd_close,
 /** @export */ Ea: _fd_read,
 /** @export */ xa: _fd_seek,
 /** @export */ Ka: _fd_write,
 /** @export */ y: invoke_i,
 /** @export */ g: invoke_ii,
 /** @export */ Aa: invoke_iid,
 /** @export */ c: invoke_iii,
 /** @export */ e: invoke_iiii,
 /** @export */ n: invoke_iiiii,
 /** @export */ ya: invoke_iiiiid,
 /** @export */ q: invoke_iiiiii,
 /** @export */ t: invoke_iiiiiii,
 /** @export */ B: invoke_iiiiiiii,
 /** @export */ za: invoke_iiiiiiiii,
 /** @export */ A: invoke_iiiiiiiiiiii,
 /** @export */ N: invoke_iiiiiiij,
 /** @export */ L: invoke_iiiiiij,
 /** @export */ Q: invoke_iiiiij,
 /** @export */ V: invoke_iiiij,
 /** @export */ ua: invoke_iiij,
 /** @export */ K: invoke_iiiji,
 /** @export */ W: invoke_iiijii,
 /** @export */ aa: invoke_iiijj,
 /** @export */ sa: invoke_iij,
 /** @export */ fa: invoke_iiji,
 /** @export */ R: invoke_iijii,
 /** @export */ S: invoke_iijiiii,
 /** @export */ M: invoke_iijiiiij,
 /** @export */ oa: invoke_iji,
 /** @export */ pa: invoke_ijiii,
 /** @export */ X: invoke_ijiiii,
 /** @export */ J: invoke_j,
 /** @export */ qa: invoke_ji,
 /** @export */ Z: invoke_jii,
 /** @export */ H: invoke_jiii,
 /** @export */ ga: invoke_jiiiij,
 /** @export */ ea: invoke_jiji,
 /** @export */ j: invoke_v,
 /** @export */ k: invoke_vi,
 /** @export */ Ba: invoke_vid,
 /** @export */ C: invoke_vidi,
 /** @export */ d: invoke_vii,
 /** @export */ i: invoke_viii,
 /** @export */ f: invoke_viiii,
 /** @export */ m: invoke_viiiii,
 /** @export */ v: invoke_viiiiii,
 /** @export */ u: invoke_viiiiiii,
 /** @export */ Ca: invoke_viiiiiiii,
 /** @export */ x: invoke_viiiiiiiiii,
 /** @export */ z: invoke_viiiiiiiiiiiiiii,
 /** @export */ _: invoke_viiiiij,
 /** @export */ O: invoke_viiiij,
 /** @export */ ra: invoke_viiij,
 /** @export */ ka: invoke_viiiji,
 /** @export */ P: invoke_viiijiiii,
 /** @export */ va: invoke_viij,
 /** @export */ wa: invoke_viiji,
 /** @export */ ja: invoke_viijii,
 /** @export */ ia: invoke_viijiijj,
 /** @export */ ma: invoke_viijj,
 /** @export */ $: invoke_viijji,
 /** @export */ ta: invoke_vij,
 /** @export */ ba: invoke_viji,
 /** @export */ da: invoke_vijii,
 /** @export */ U: invoke_vijiii,
 /** @export */ ha: invoke_vijiijj,
 /** @export */ la: invoke_vijji,
 /** @export */ Y: invoke_vjii,
 /** @export */ w: _llvm_eh_typeid_for,
 /** @export */ na: _proc_exit,
 /** @export */ Da: _strftime_l
};

var wasmExports = createWasm();

var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["Ma"])();

var _BinaryenTypeNone = Module["_BinaryenTypeNone"] = () => (_BinaryenTypeNone = Module["_BinaryenTypeNone"] = wasmExports["Na"])();

var _BinaryenTypeInt32 = Module["_BinaryenTypeInt32"] = () => (_BinaryenTypeInt32 = Module["_BinaryenTypeInt32"] = wasmExports["Oa"])();

var _BinaryenTypeInt64 = Module["_BinaryenTypeInt64"] = () => (_BinaryenTypeInt64 = Module["_BinaryenTypeInt64"] = wasmExports["Pa"])();

var _BinaryenTypeFloat32 = Module["_BinaryenTypeFloat32"] = () => (_BinaryenTypeFloat32 = Module["_BinaryenTypeFloat32"] = wasmExports["Qa"])();

var _BinaryenTypeFloat64 = Module["_BinaryenTypeFloat64"] = () => (_BinaryenTypeFloat64 = Module["_BinaryenTypeFloat64"] = wasmExports["Ra"])();

var _BinaryenTypeVec128 = Module["_BinaryenTypeVec128"] = () => (_BinaryenTypeVec128 = Module["_BinaryenTypeVec128"] = wasmExports["Sa"])();

var _BinaryenTypeFuncref = Module["_BinaryenTypeFuncref"] = () => (_BinaryenTypeFuncref = Module["_BinaryenTypeFuncref"] = wasmExports["Ta"])();

var _BinaryenTypeExternref = Module["_BinaryenTypeExternref"] = () => (_BinaryenTypeExternref = Module["_BinaryenTypeExternref"] = wasmExports["Ua"])();

var _BinaryenTypeAnyref = Module["_BinaryenTypeAnyref"] = () => (_BinaryenTypeAnyref = Module["_BinaryenTypeAnyref"] = wasmExports["Va"])();

var _BinaryenTypeEqref = Module["_BinaryenTypeEqref"] = () => (_BinaryenTypeEqref = Module["_BinaryenTypeEqref"] = wasmExports["Wa"])();

var _BinaryenTypeI31ref = Module["_BinaryenTypeI31ref"] = () => (_BinaryenTypeI31ref = Module["_BinaryenTypeI31ref"] = wasmExports["Xa"])();

var _BinaryenTypeStructref = Module["_BinaryenTypeStructref"] = () => (_BinaryenTypeStructref = Module["_BinaryenTypeStructref"] = wasmExports["Ya"])();

var _BinaryenTypeArrayref = Module["_BinaryenTypeArrayref"] = () => (_BinaryenTypeArrayref = Module["_BinaryenTypeArrayref"] = wasmExports["Za"])();

var _BinaryenTypeStringref = Module["_BinaryenTypeStringref"] = () => (_BinaryenTypeStringref = Module["_BinaryenTypeStringref"] = wasmExports["_a"])();

var _BinaryenTypeStringviewWTF8 = Module["_BinaryenTypeStringviewWTF8"] = () => (_BinaryenTypeStringviewWTF8 = Module["_BinaryenTypeStringviewWTF8"] = wasmExports["$a"])();

var _BinaryenTypeStringviewWTF16 = Module["_BinaryenTypeStringviewWTF16"] = () => (_BinaryenTypeStringviewWTF16 = Module["_BinaryenTypeStringviewWTF16"] = wasmExports["ab"])();

var _BinaryenTypeStringviewIter = Module["_BinaryenTypeStringviewIter"] = () => (_BinaryenTypeStringviewIter = Module["_BinaryenTypeStringviewIter"] = wasmExports["bb"])();

var _BinaryenTypeNullref = Module["_BinaryenTypeNullref"] = () => (_BinaryenTypeNullref = Module["_BinaryenTypeNullref"] = wasmExports["cb"])();

var _BinaryenTypeNullExternref = Module["_BinaryenTypeNullExternref"] = () => (_BinaryenTypeNullExternref = Module["_BinaryenTypeNullExternref"] = wasmExports["db"])();

var _BinaryenTypeNullFuncref = Module["_BinaryenTypeNullFuncref"] = () => (_BinaryenTypeNullFuncref = Module["_BinaryenTypeNullFuncref"] = wasmExports["eb"])();

var _BinaryenTypeUnreachable = Module["_BinaryenTypeUnreachable"] = () => (_BinaryenTypeUnreachable = Module["_BinaryenTypeUnreachable"] = wasmExports["fb"])();

var _BinaryenTypeAuto = Module["_BinaryenTypeAuto"] = () => (_BinaryenTypeAuto = Module["_BinaryenTypeAuto"] = wasmExports["gb"])();

var _BinaryenTypeCreate = Module["_BinaryenTypeCreate"] = (a0, a1) => (_BinaryenTypeCreate = Module["_BinaryenTypeCreate"] = wasmExports["hb"])(a0, a1);

var _BinaryenTypeArity = Module["_BinaryenTypeArity"] = a0 => (_BinaryenTypeArity = Module["_BinaryenTypeArity"] = wasmExports["ib"])(a0);

var _BinaryenTypeExpand = Module["_BinaryenTypeExpand"] = (a0, a1) => (_BinaryenTypeExpand = Module["_BinaryenTypeExpand"] = wasmExports["jb"])(a0, a1);

var _BinaryenPackedTypeNotPacked = Module["_BinaryenPackedTypeNotPacked"] = () => (_BinaryenPackedTypeNotPacked = Module["_BinaryenPackedTypeNotPacked"] = wasmExports["kb"])();

var _BinaryenPackedTypeInt8 = Module["_BinaryenPackedTypeInt8"] = () => (_BinaryenPackedTypeInt8 = Module["_BinaryenPackedTypeInt8"] = wasmExports["lb"])();

var _BinaryenPackedTypeInt16 = Module["_BinaryenPackedTypeInt16"] = () => (_BinaryenPackedTypeInt16 = Module["_BinaryenPackedTypeInt16"] = wasmExports["mb"])();

var _BinaryenHeapTypeExt = Module["_BinaryenHeapTypeExt"] = () => (_BinaryenHeapTypeExt = Module["_BinaryenHeapTypeExt"] = wasmExports["nb"])();

var _BinaryenHeapTypeFunc = Module["_BinaryenHeapTypeFunc"] = () => (_BinaryenHeapTypeFunc = Module["_BinaryenHeapTypeFunc"] = wasmExports["ob"])();

var _BinaryenHeapTypeAny = Module["_BinaryenHeapTypeAny"] = () => (_BinaryenHeapTypeAny = Module["_BinaryenHeapTypeAny"] = wasmExports["pb"])();

var _BinaryenHeapTypeEq = Module["_BinaryenHeapTypeEq"] = () => (_BinaryenHeapTypeEq = Module["_BinaryenHeapTypeEq"] = wasmExports["qb"])();

var _BinaryenHeapTypeI31 = Module["_BinaryenHeapTypeI31"] = () => (_BinaryenHeapTypeI31 = Module["_BinaryenHeapTypeI31"] = wasmExports["rb"])();

var _BinaryenHeapTypeStruct = Module["_BinaryenHeapTypeStruct"] = () => (_BinaryenHeapTypeStruct = Module["_BinaryenHeapTypeStruct"] = wasmExports["sb"])();

var _BinaryenHeapTypeArray = Module["_BinaryenHeapTypeArray"] = () => (_BinaryenHeapTypeArray = Module["_BinaryenHeapTypeArray"] = wasmExports["tb"])();

var _BinaryenHeapTypeString = Module["_BinaryenHeapTypeString"] = () => (_BinaryenHeapTypeString = Module["_BinaryenHeapTypeString"] = wasmExports["ub"])();

var _BinaryenHeapTypeStringviewWTF8 = Module["_BinaryenHeapTypeStringviewWTF8"] = () => (_BinaryenHeapTypeStringviewWTF8 = Module["_BinaryenHeapTypeStringviewWTF8"] = wasmExports["vb"])();

var _BinaryenHeapTypeStringviewWTF16 = Module["_BinaryenHeapTypeStringviewWTF16"] = () => (_BinaryenHeapTypeStringviewWTF16 = Module["_BinaryenHeapTypeStringviewWTF16"] = wasmExports["wb"])();

var _BinaryenHeapTypeStringviewIter = Module["_BinaryenHeapTypeStringviewIter"] = () => (_BinaryenHeapTypeStringviewIter = Module["_BinaryenHeapTypeStringviewIter"] = wasmExports["xb"])();

var _BinaryenHeapTypeNone = Module["_BinaryenHeapTypeNone"] = () => (_BinaryenHeapTypeNone = Module["_BinaryenHeapTypeNone"] = wasmExports["yb"])();

var _BinaryenHeapTypeNoext = Module["_BinaryenHeapTypeNoext"] = () => (_BinaryenHeapTypeNoext = Module["_BinaryenHeapTypeNoext"] = wasmExports["zb"])();

var _BinaryenHeapTypeNofunc = Module["_BinaryenHeapTypeNofunc"] = () => (_BinaryenHeapTypeNofunc = Module["_BinaryenHeapTypeNofunc"] = wasmExports["Ab"])();

var _BinaryenHeapTypeIsBasic = Module["_BinaryenHeapTypeIsBasic"] = a0 => (_BinaryenHeapTypeIsBasic = Module["_BinaryenHeapTypeIsBasic"] = wasmExports["Bb"])(a0);

var _BinaryenHeapTypeIsSignature = Module["_BinaryenHeapTypeIsSignature"] = a0 => (_BinaryenHeapTypeIsSignature = Module["_BinaryenHeapTypeIsSignature"] = wasmExports["Cb"])(a0);

var _BinaryenHeapTypeIsStruct = Module["_BinaryenHeapTypeIsStruct"] = a0 => (_BinaryenHeapTypeIsStruct = Module["_BinaryenHeapTypeIsStruct"] = wasmExports["Db"])(a0);

var _BinaryenHeapTypeIsArray = Module["_BinaryenHeapTypeIsArray"] = a0 => (_BinaryenHeapTypeIsArray = Module["_BinaryenHeapTypeIsArray"] = wasmExports["Eb"])(a0);

var _BinaryenHeapTypeIsBottom = Module["_BinaryenHeapTypeIsBottom"] = a0 => (_BinaryenHeapTypeIsBottom = Module["_BinaryenHeapTypeIsBottom"] = wasmExports["Fb"])(a0);

var _BinaryenHeapTypeGetBottom = Module["_BinaryenHeapTypeGetBottom"] = a0 => (_BinaryenHeapTypeGetBottom = Module["_BinaryenHeapTypeGetBottom"] = wasmExports["Gb"])(a0);

var _BinaryenHeapTypeIsSubType = Module["_BinaryenHeapTypeIsSubType"] = (a0, a1) => (_BinaryenHeapTypeIsSubType = Module["_BinaryenHeapTypeIsSubType"] = wasmExports["Hb"])(a0, a1);

var _BinaryenStructTypeGetNumFields = Module["_BinaryenStructTypeGetNumFields"] = a0 => (_BinaryenStructTypeGetNumFields = Module["_BinaryenStructTypeGetNumFields"] = wasmExports["Ib"])(a0);

var _BinaryenStructTypeGetFieldType = Module["_BinaryenStructTypeGetFieldType"] = (a0, a1) => (_BinaryenStructTypeGetFieldType = Module["_BinaryenStructTypeGetFieldType"] = wasmExports["Jb"])(a0, a1);

var _BinaryenStructTypeGetFieldPackedType = Module["_BinaryenStructTypeGetFieldPackedType"] = (a0, a1) => (_BinaryenStructTypeGetFieldPackedType = Module["_BinaryenStructTypeGetFieldPackedType"] = wasmExports["Kb"])(a0, a1);

var _BinaryenStructTypeIsFieldMutable = Module["_BinaryenStructTypeIsFieldMutable"] = (a0, a1) => (_BinaryenStructTypeIsFieldMutable = Module["_BinaryenStructTypeIsFieldMutable"] = wasmExports["Lb"])(a0, a1);

var _BinaryenArrayTypeGetElementType = Module["_BinaryenArrayTypeGetElementType"] = a0 => (_BinaryenArrayTypeGetElementType = Module["_BinaryenArrayTypeGetElementType"] = wasmExports["Mb"])(a0);

var _BinaryenArrayTypeGetElementPackedType = Module["_BinaryenArrayTypeGetElementPackedType"] = a0 => (_BinaryenArrayTypeGetElementPackedType = Module["_BinaryenArrayTypeGetElementPackedType"] = wasmExports["Nb"])(a0);

var _BinaryenArrayTypeIsElementMutable = Module["_BinaryenArrayTypeIsElementMutable"] = a0 => (_BinaryenArrayTypeIsElementMutable = Module["_BinaryenArrayTypeIsElementMutable"] = wasmExports["Ob"])(a0);

var _BinaryenSignatureTypeGetParams = Module["_BinaryenSignatureTypeGetParams"] = a0 => (_BinaryenSignatureTypeGetParams = Module["_BinaryenSignatureTypeGetParams"] = wasmExports["Pb"])(a0);

var _BinaryenSignatureTypeGetResults = Module["_BinaryenSignatureTypeGetResults"] = a0 => (_BinaryenSignatureTypeGetResults = Module["_BinaryenSignatureTypeGetResults"] = wasmExports["Qb"])(a0);

var _BinaryenTypeGetHeapType = Module["_BinaryenTypeGetHeapType"] = a0 => (_BinaryenTypeGetHeapType = Module["_BinaryenTypeGetHeapType"] = wasmExports["Rb"])(a0);

var _BinaryenTypeIsNullable = Module["_BinaryenTypeIsNullable"] = a0 => (_BinaryenTypeIsNullable = Module["_BinaryenTypeIsNullable"] = wasmExports["Sb"])(a0);

var _BinaryenTypeFromHeapType = Module["_BinaryenTypeFromHeapType"] = (a0, a1) => (_BinaryenTypeFromHeapType = Module["_BinaryenTypeFromHeapType"] = wasmExports["Tb"])(a0, a1);

var _BinaryenInvalidId = Module["_BinaryenInvalidId"] = () => (_BinaryenInvalidId = Module["_BinaryenInvalidId"] = wasmExports["Ub"])();

var _BinaryenNopId = Module["_BinaryenNopId"] = () => (_BinaryenNopId = Module["_BinaryenNopId"] = wasmExports["Vb"])();

var _BinaryenBlockId = Module["_BinaryenBlockId"] = () => (_BinaryenBlockId = Module["_BinaryenBlockId"] = wasmExports["Wb"])();

var _BinaryenIfId = Module["_BinaryenIfId"] = () => (_BinaryenIfId = Module["_BinaryenIfId"] = wasmExports["Xb"])();

var _BinaryenLoopId = Module["_BinaryenLoopId"] = () => (_BinaryenLoopId = Module["_BinaryenLoopId"] = wasmExports["Yb"])();

var _BinaryenBreakId = Module["_BinaryenBreakId"] = () => (_BinaryenBreakId = Module["_BinaryenBreakId"] = wasmExports["Zb"])();

var _BinaryenSwitchId = Module["_BinaryenSwitchId"] = () => (_BinaryenSwitchId = Module["_BinaryenSwitchId"] = wasmExports["_b"])();

var _BinaryenCallId = Module["_BinaryenCallId"] = () => (_BinaryenCallId = Module["_BinaryenCallId"] = wasmExports["$b"])();

var _BinaryenCallIndirectId = Module["_BinaryenCallIndirectId"] = () => (_BinaryenCallIndirectId = Module["_BinaryenCallIndirectId"] = wasmExports["ac"])();

var _BinaryenLocalGetId = Module["_BinaryenLocalGetId"] = () => (_BinaryenLocalGetId = Module["_BinaryenLocalGetId"] = wasmExports["bc"])();

var _BinaryenLocalSetId = Module["_BinaryenLocalSetId"] = () => (_BinaryenLocalSetId = Module["_BinaryenLocalSetId"] = wasmExports["cc"])();

var _BinaryenGlobalGetId = Module["_BinaryenGlobalGetId"] = () => (_BinaryenGlobalGetId = Module["_BinaryenGlobalGetId"] = wasmExports["dc"])();

var _BinaryenGlobalSetId = Module["_BinaryenGlobalSetId"] = () => (_BinaryenGlobalSetId = Module["_BinaryenGlobalSetId"] = wasmExports["ec"])();

var _BinaryenLoadId = Module["_BinaryenLoadId"] = () => (_BinaryenLoadId = Module["_BinaryenLoadId"] = wasmExports["fc"])();

var _BinaryenStoreId = Module["_BinaryenStoreId"] = () => (_BinaryenStoreId = Module["_BinaryenStoreId"] = wasmExports["gc"])();

var _BinaryenAtomicRMWId = Module["_BinaryenAtomicRMWId"] = () => (_BinaryenAtomicRMWId = Module["_BinaryenAtomicRMWId"] = wasmExports["hc"])();

var _BinaryenAtomicCmpxchgId = Module["_BinaryenAtomicCmpxchgId"] = () => (_BinaryenAtomicCmpxchgId = Module["_BinaryenAtomicCmpxchgId"] = wasmExports["ic"])();

var _BinaryenAtomicWaitId = Module["_BinaryenAtomicWaitId"] = () => (_BinaryenAtomicWaitId = Module["_BinaryenAtomicWaitId"] = wasmExports["jc"])();

var _BinaryenAtomicNotifyId = Module["_BinaryenAtomicNotifyId"] = () => (_BinaryenAtomicNotifyId = Module["_BinaryenAtomicNotifyId"] = wasmExports["kc"])();

var _BinaryenAtomicFenceId = Module["_BinaryenAtomicFenceId"] = () => (_BinaryenAtomicFenceId = Module["_BinaryenAtomicFenceId"] = wasmExports["lc"])();

var _BinaryenSIMDExtractId = Module["_BinaryenSIMDExtractId"] = () => (_BinaryenSIMDExtractId = Module["_BinaryenSIMDExtractId"] = wasmExports["mc"])();

var _BinaryenSIMDReplaceId = Module["_BinaryenSIMDReplaceId"] = () => (_BinaryenSIMDReplaceId = Module["_BinaryenSIMDReplaceId"] = wasmExports["nc"])();

var _BinaryenSIMDShuffleId = Module["_BinaryenSIMDShuffleId"] = () => (_BinaryenSIMDShuffleId = Module["_BinaryenSIMDShuffleId"] = wasmExports["oc"])();

var _BinaryenSIMDTernaryId = Module["_BinaryenSIMDTernaryId"] = () => (_BinaryenSIMDTernaryId = Module["_BinaryenSIMDTernaryId"] = wasmExports["pc"])();

var _BinaryenSIMDShiftId = Module["_BinaryenSIMDShiftId"] = () => (_BinaryenSIMDShiftId = Module["_BinaryenSIMDShiftId"] = wasmExports["qc"])();

var _BinaryenSIMDLoadId = Module["_BinaryenSIMDLoadId"] = () => (_BinaryenSIMDLoadId = Module["_BinaryenSIMDLoadId"] = wasmExports["rc"])();

var _BinaryenSIMDLoadStoreLaneId = Module["_BinaryenSIMDLoadStoreLaneId"] = () => (_BinaryenSIMDLoadStoreLaneId = Module["_BinaryenSIMDLoadStoreLaneId"] = wasmExports["sc"])();

var _BinaryenMemoryInitId = Module["_BinaryenMemoryInitId"] = () => (_BinaryenMemoryInitId = Module["_BinaryenMemoryInitId"] = wasmExports["tc"])();

var _BinaryenDataDropId = Module["_BinaryenDataDropId"] = () => (_BinaryenDataDropId = Module["_BinaryenDataDropId"] = wasmExports["uc"])();

var _BinaryenMemoryCopyId = Module["_BinaryenMemoryCopyId"] = () => (_BinaryenMemoryCopyId = Module["_BinaryenMemoryCopyId"] = wasmExports["vc"])();

var _BinaryenMemoryFillId = Module["_BinaryenMemoryFillId"] = () => (_BinaryenMemoryFillId = Module["_BinaryenMemoryFillId"] = wasmExports["wc"])();

var _BinaryenConstId = Module["_BinaryenConstId"] = () => (_BinaryenConstId = Module["_BinaryenConstId"] = wasmExports["xc"])();

var _BinaryenUnaryId = Module["_BinaryenUnaryId"] = () => (_BinaryenUnaryId = Module["_BinaryenUnaryId"] = wasmExports["yc"])();

var _BinaryenBinaryId = Module["_BinaryenBinaryId"] = () => (_BinaryenBinaryId = Module["_BinaryenBinaryId"] = wasmExports["zc"])();

var _BinaryenSelectId = Module["_BinaryenSelectId"] = () => (_BinaryenSelectId = Module["_BinaryenSelectId"] = wasmExports["Ac"])();

var _BinaryenDropId = Module["_BinaryenDropId"] = () => (_BinaryenDropId = Module["_BinaryenDropId"] = wasmExports["Bc"])();

var _BinaryenReturnId = Module["_BinaryenReturnId"] = () => (_BinaryenReturnId = Module["_BinaryenReturnId"] = wasmExports["Cc"])();

var _BinaryenMemorySizeId = Module["_BinaryenMemorySizeId"] = () => (_BinaryenMemorySizeId = Module["_BinaryenMemorySizeId"] = wasmExports["Dc"])();

var _BinaryenMemoryGrowId = Module["_BinaryenMemoryGrowId"] = () => (_BinaryenMemoryGrowId = Module["_BinaryenMemoryGrowId"] = wasmExports["Ec"])();

var _BinaryenUnreachableId = Module["_BinaryenUnreachableId"] = () => (_BinaryenUnreachableId = Module["_BinaryenUnreachableId"] = wasmExports["Fc"])();

var _BinaryenPopId = Module["_BinaryenPopId"] = () => (_BinaryenPopId = Module["_BinaryenPopId"] = wasmExports["Gc"])();

var _BinaryenRefNullId = Module["_BinaryenRefNullId"] = () => (_BinaryenRefNullId = Module["_BinaryenRefNullId"] = wasmExports["Hc"])();

var _BinaryenRefIsNullId = Module["_BinaryenRefIsNullId"] = () => (_BinaryenRefIsNullId = Module["_BinaryenRefIsNullId"] = wasmExports["Ic"])();

var _BinaryenRefFuncId = Module["_BinaryenRefFuncId"] = () => (_BinaryenRefFuncId = Module["_BinaryenRefFuncId"] = wasmExports["Jc"])();

var _BinaryenRefEqId = Module["_BinaryenRefEqId"] = () => (_BinaryenRefEqId = Module["_BinaryenRefEqId"] = wasmExports["Kc"])();

var _BinaryenTableGetId = Module["_BinaryenTableGetId"] = () => (_BinaryenTableGetId = Module["_BinaryenTableGetId"] = wasmExports["Lc"])();

var _BinaryenTableSetId = Module["_BinaryenTableSetId"] = () => (_BinaryenTableSetId = Module["_BinaryenTableSetId"] = wasmExports["Mc"])();

var _BinaryenTableSizeId = Module["_BinaryenTableSizeId"] = () => (_BinaryenTableSizeId = Module["_BinaryenTableSizeId"] = wasmExports["Nc"])();

var _BinaryenTableGrowId = Module["_BinaryenTableGrowId"] = () => (_BinaryenTableGrowId = Module["_BinaryenTableGrowId"] = wasmExports["Oc"])();

var _BinaryenTableFillId = Module["_BinaryenTableFillId"] = () => (_BinaryenTableFillId = Module["_BinaryenTableFillId"] = wasmExports["Pc"])();

var _BinaryenTableCopyId = Module["_BinaryenTableCopyId"] = () => (_BinaryenTableCopyId = Module["_BinaryenTableCopyId"] = wasmExports["Qc"])();

var _BinaryenTryId = Module["_BinaryenTryId"] = () => (_BinaryenTryId = Module["_BinaryenTryId"] = wasmExports["Rc"])();

var _BinaryenTryTableId = Module["_BinaryenTryTableId"] = () => (_BinaryenTryTableId = Module["_BinaryenTryTableId"] = wasmExports["Sc"])();

var _BinaryenThrowId = Module["_BinaryenThrowId"] = () => (_BinaryenThrowId = Module["_BinaryenThrowId"] = wasmExports["Tc"])();

var _BinaryenRethrowId = Module["_BinaryenRethrowId"] = () => (_BinaryenRethrowId = Module["_BinaryenRethrowId"] = wasmExports["Uc"])();

var _BinaryenThrowRefId = Module["_BinaryenThrowRefId"] = () => (_BinaryenThrowRefId = Module["_BinaryenThrowRefId"] = wasmExports["Vc"])();

var _BinaryenTupleMakeId = Module["_BinaryenTupleMakeId"] = () => (_BinaryenTupleMakeId = Module["_BinaryenTupleMakeId"] = wasmExports["Wc"])();

var _BinaryenTupleExtractId = Module["_BinaryenTupleExtractId"] = () => (_BinaryenTupleExtractId = Module["_BinaryenTupleExtractId"] = wasmExports["Xc"])();

var _BinaryenRefI31Id = Module["_BinaryenRefI31Id"] = () => (_BinaryenRefI31Id = Module["_BinaryenRefI31Id"] = wasmExports["Yc"])();

var _BinaryenI31GetId = Module["_BinaryenI31GetId"] = () => (_BinaryenI31GetId = Module["_BinaryenI31GetId"] = wasmExports["Zc"])();

var _BinaryenCallRefId = Module["_BinaryenCallRefId"] = () => (_BinaryenCallRefId = Module["_BinaryenCallRefId"] = wasmExports["_c"])();

var _BinaryenRefTestId = Module["_BinaryenRefTestId"] = () => (_BinaryenRefTestId = Module["_BinaryenRefTestId"] = wasmExports["$c"])();

var _BinaryenRefCastId = Module["_BinaryenRefCastId"] = () => (_BinaryenRefCastId = Module["_BinaryenRefCastId"] = wasmExports["ad"])();

var _BinaryenBrOnId = Module["_BinaryenBrOnId"] = () => (_BinaryenBrOnId = Module["_BinaryenBrOnId"] = wasmExports["bd"])();

var _BinaryenStructNewId = Module["_BinaryenStructNewId"] = () => (_BinaryenStructNewId = Module["_BinaryenStructNewId"] = wasmExports["cd"])();

var _BinaryenStructGetId = Module["_BinaryenStructGetId"] = () => (_BinaryenStructGetId = Module["_BinaryenStructGetId"] = wasmExports["dd"])();

var _BinaryenStructSetId = Module["_BinaryenStructSetId"] = () => (_BinaryenStructSetId = Module["_BinaryenStructSetId"] = wasmExports["ed"])();

var _BinaryenArrayNewId = Module["_BinaryenArrayNewId"] = () => (_BinaryenArrayNewId = Module["_BinaryenArrayNewId"] = wasmExports["fd"])();

var _BinaryenArrayNewDataId = Module["_BinaryenArrayNewDataId"] = () => (_BinaryenArrayNewDataId = Module["_BinaryenArrayNewDataId"] = wasmExports["gd"])();

var _BinaryenArrayNewElemId = Module["_BinaryenArrayNewElemId"] = () => (_BinaryenArrayNewElemId = Module["_BinaryenArrayNewElemId"] = wasmExports["hd"])();

var _BinaryenArrayNewFixedId = Module["_BinaryenArrayNewFixedId"] = () => (_BinaryenArrayNewFixedId = Module["_BinaryenArrayNewFixedId"] = wasmExports["id"])();

var _BinaryenArrayGetId = Module["_BinaryenArrayGetId"] = () => (_BinaryenArrayGetId = Module["_BinaryenArrayGetId"] = wasmExports["jd"])();

var _BinaryenArraySetId = Module["_BinaryenArraySetId"] = () => (_BinaryenArraySetId = Module["_BinaryenArraySetId"] = wasmExports["kd"])();

var _BinaryenArrayLenId = Module["_BinaryenArrayLenId"] = () => (_BinaryenArrayLenId = Module["_BinaryenArrayLenId"] = wasmExports["ld"])();

var _BinaryenArrayCopyId = Module["_BinaryenArrayCopyId"] = () => (_BinaryenArrayCopyId = Module["_BinaryenArrayCopyId"] = wasmExports["md"])();

var _BinaryenArrayFillId = Module["_BinaryenArrayFillId"] = () => (_BinaryenArrayFillId = Module["_BinaryenArrayFillId"] = wasmExports["nd"])();

var _BinaryenArrayInitDataId = Module["_BinaryenArrayInitDataId"] = () => (_BinaryenArrayInitDataId = Module["_BinaryenArrayInitDataId"] = wasmExports["od"])();

var _BinaryenArrayInitElemId = Module["_BinaryenArrayInitElemId"] = () => (_BinaryenArrayInitElemId = Module["_BinaryenArrayInitElemId"] = wasmExports["pd"])();

var _BinaryenRefAsId = Module["_BinaryenRefAsId"] = () => (_BinaryenRefAsId = Module["_BinaryenRefAsId"] = wasmExports["qd"])();

var _BinaryenStringNewId = Module["_BinaryenStringNewId"] = () => (_BinaryenStringNewId = Module["_BinaryenStringNewId"] = wasmExports["rd"])();

var _BinaryenStringConstId = Module["_BinaryenStringConstId"] = () => (_BinaryenStringConstId = Module["_BinaryenStringConstId"] = wasmExports["sd"])();

var _BinaryenStringMeasureId = Module["_BinaryenStringMeasureId"] = () => (_BinaryenStringMeasureId = Module["_BinaryenStringMeasureId"] = wasmExports["td"])();

var _BinaryenStringEncodeId = Module["_BinaryenStringEncodeId"] = () => (_BinaryenStringEncodeId = Module["_BinaryenStringEncodeId"] = wasmExports["ud"])();

var _BinaryenStringConcatId = Module["_BinaryenStringConcatId"] = () => (_BinaryenStringConcatId = Module["_BinaryenStringConcatId"] = wasmExports["vd"])();

var _BinaryenStringEqId = Module["_BinaryenStringEqId"] = () => (_BinaryenStringEqId = Module["_BinaryenStringEqId"] = wasmExports["wd"])();

var _BinaryenStringAsId = Module["_BinaryenStringAsId"] = () => (_BinaryenStringAsId = Module["_BinaryenStringAsId"] = wasmExports["xd"])();

var _BinaryenStringWTF8AdvanceId = Module["_BinaryenStringWTF8AdvanceId"] = () => (_BinaryenStringWTF8AdvanceId = Module["_BinaryenStringWTF8AdvanceId"] = wasmExports["yd"])();

var _BinaryenStringWTF16GetId = Module["_BinaryenStringWTF16GetId"] = () => (_BinaryenStringWTF16GetId = Module["_BinaryenStringWTF16GetId"] = wasmExports["zd"])();

var _BinaryenStringIterNextId = Module["_BinaryenStringIterNextId"] = () => (_BinaryenStringIterNextId = Module["_BinaryenStringIterNextId"] = wasmExports["Ad"])();

var _BinaryenStringIterMoveId = Module["_BinaryenStringIterMoveId"] = () => (_BinaryenStringIterMoveId = Module["_BinaryenStringIterMoveId"] = wasmExports["Bd"])();

var _BinaryenStringSliceWTFId = Module["_BinaryenStringSliceWTFId"] = () => (_BinaryenStringSliceWTFId = Module["_BinaryenStringSliceWTFId"] = wasmExports["Cd"])();

var _BinaryenStringSliceIterId = Module["_BinaryenStringSliceIterId"] = () => (_BinaryenStringSliceIterId = Module["_BinaryenStringSliceIterId"] = wasmExports["Dd"])();

var _BinaryenResumeId = Module["_BinaryenResumeId"] = () => (_BinaryenResumeId = Module["_BinaryenResumeId"] = wasmExports["Ed"])();

var _BinaryenExternalFunction = Module["_BinaryenExternalFunction"] = () => (_BinaryenExternalFunction = Module["_BinaryenExternalFunction"] = wasmExports["Fd"])();

var _BinaryenExternalTable = Module["_BinaryenExternalTable"] = () => (_BinaryenExternalTable = Module["_BinaryenExternalTable"] = wasmExports["Gd"])();

var _BinaryenExternalMemory = Module["_BinaryenExternalMemory"] = () => (_BinaryenExternalMemory = Module["_BinaryenExternalMemory"] = wasmExports["Hd"])();

var _BinaryenExternalGlobal = Module["_BinaryenExternalGlobal"] = () => (_BinaryenExternalGlobal = Module["_BinaryenExternalGlobal"] = wasmExports["Id"])();

var _BinaryenExternalTag = Module["_BinaryenExternalTag"] = () => (_BinaryenExternalTag = Module["_BinaryenExternalTag"] = wasmExports["Jd"])();

var _BinaryenFeatureMVP = Module["_BinaryenFeatureMVP"] = () => (_BinaryenFeatureMVP = Module["_BinaryenFeatureMVP"] = wasmExports["Kd"])();

var _BinaryenFeatureAtomics = Module["_BinaryenFeatureAtomics"] = () => (_BinaryenFeatureAtomics = Module["_BinaryenFeatureAtomics"] = wasmExports["Ld"])();

var _BinaryenFeatureBulkMemory = Module["_BinaryenFeatureBulkMemory"] = () => (_BinaryenFeatureBulkMemory = Module["_BinaryenFeatureBulkMemory"] = wasmExports["Md"])();

var _BinaryenFeatureMutableGlobals = Module["_BinaryenFeatureMutableGlobals"] = () => (_BinaryenFeatureMutableGlobals = Module["_BinaryenFeatureMutableGlobals"] = wasmExports["Nd"])();

var _BinaryenFeatureNontrappingFPToInt = Module["_BinaryenFeatureNontrappingFPToInt"] = () => (_BinaryenFeatureNontrappingFPToInt = Module["_BinaryenFeatureNontrappingFPToInt"] = wasmExports["Od"])();

var _BinaryenFeatureSignExt = Module["_BinaryenFeatureSignExt"] = () => (_BinaryenFeatureSignExt = Module["_BinaryenFeatureSignExt"] = wasmExports["Pd"])();

var _BinaryenFeatureSIMD128 = Module["_BinaryenFeatureSIMD128"] = () => (_BinaryenFeatureSIMD128 = Module["_BinaryenFeatureSIMD128"] = wasmExports["Qd"])();

var _BinaryenFeatureExceptionHandling = Module["_BinaryenFeatureExceptionHandling"] = () => (_BinaryenFeatureExceptionHandling = Module["_BinaryenFeatureExceptionHandling"] = wasmExports["Rd"])();

var _BinaryenFeatureTailCall = Module["_BinaryenFeatureTailCall"] = () => (_BinaryenFeatureTailCall = Module["_BinaryenFeatureTailCall"] = wasmExports["Sd"])();

var _BinaryenFeatureReferenceTypes = Module["_BinaryenFeatureReferenceTypes"] = () => (_BinaryenFeatureReferenceTypes = Module["_BinaryenFeatureReferenceTypes"] = wasmExports["Td"])();

var _BinaryenFeatureMultivalue = Module["_BinaryenFeatureMultivalue"] = () => (_BinaryenFeatureMultivalue = Module["_BinaryenFeatureMultivalue"] = wasmExports["Ud"])();

var _BinaryenFeatureGC = Module["_BinaryenFeatureGC"] = () => (_BinaryenFeatureGC = Module["_BinaryenFeatureGC"] = wasmExports["Vd"])();

var _BinaryenFeatureMemory64 = Module["_BinaryenFeatureMemory64"] = () => (_BinaryenFeatureMemory64 = Module["_BinaryenFeatureMemory64"] = wasmExports["Wd"])();

var _BinaryenFeatureRelaxedSIMD = Module["_BinaryenFeatureRelaxedSIMD"] = () => (_BinaryenFeatureRelaxedSIMD = Module["_BinaryenFeatureRelaxedSIMD"] = wasmExports["Xd"])();

var _BinaryenFeatureExtendedConst = Module["_BinaryenFeatureExtendedConst"] = () => (_BinaryenFeatureExtendedConst = Module["_BinaryenFeatureExtendedConst"] = wasmExports["Yd"])();

var _BinaryenFeatureStrings = Module["_BinaryenFeatureStrings"] = () => (_BinaryenFeatureStrings = Module["_BinaryenFeatureStrings"] = wasmExports["Zd"])();

var _BinaryenFeatureMultiMemory = Module["_BinaryenFeatureMultiMemory"] = () => (_BinaryenFeatureMultiMemory = Module["_BinaryenFeatureMultiMemory"] = wasmExports["_d"])();

var _BinaryenFeatureAll = Module["_BinaryenFeatureAll"] = () => (_BinaryenFeatureAll = Module["_BinaryenFeatureAll"] = wasmExports["$d"])();

var _BinaryenModuleCreate = Module["_BinaryenModuleCreate"] = () => (_BinaryenModuleCreate = Module["_BinaryenModuleCreate"] = wasmExports["ae"])();

var _BinaryenModuleDispose = Module["_BinaryenModuleDispose"] = a0 => (_BinaryenModuleDispose = Module["_BinaryenModuleDispose"] = wasmExports["be"])(a0);

var _BinaryenLiteralInt32 = Module["_BinaryenLiteralInt32"] = (a0, a1) => (_BinaryenLiteralInt32 = Module["_BinaryenLiteralInt32"] = wasmExports["ce"])(a0, a1);

var _BinaryenLiteralInt64 = Module["_BinaryenLiteralInt64"] = (a0, a1, a2) => (_BinaryenLiteralInt64 = Module["_BinaryenLiteralInt64"] = wasmExports["de"])(a0, a1, a2);

var _BinaryenLiteralFloat32 = Module["_BinaryenLiteralFloat32"] = (a0, a1) => (_BinaryenLiteralFloat32 = Module["_BinaryenLiteralFloat32"] = wasmExports["ee"])(a0, a1);

var _BinaryenLiteralFloat64 = Module["_BinaryenLiteralFloat64"] = (a0, a1) => (_BinaryenLiteralFloat64 = Module["_BinaryenLiteralFloat64"] = wasmExports["fe"])(a0, a1);

var _BinaryenLiteralVec128 = Module["_BinaryenLiteralVec128"] = (a0, a1) => (_BinaryenLiteralVec128 = Module["_BinaryenLiteralVec128"] = wasmExports["ge"])(a0, a1);

var _BinaryenLiteralFloat32Bits = Module["_BinaryenLiteralFloat32Bits"] = (a0, a1) => (_BinaryenLiteralFloat32Bits = Module["_BinaryenLiteralFloat32Bits"] = wasmExports["he"])(a0, a1);

var _BinaryenLiteralFloat64Bits = Module["_BinaryenLiteralFloat64Bits"] = (a0, a1, a2) => (_BinaryenLiteralFloat64Bits = Module["_BinaryenLiteralFloat64Bits"] = wasmExports["ie"])(a0, a1, a2);

var _BinaryenClzInt32 = Module["_BinaryenClzInt32"] = () => (_BinaryenClzInt32 = Module["_BinaryenClzInt32"] = wasmExports["je"])();

var _BinaryenCtzInt32 = Module["_BinaryenCtzInt32"] = () => (_BinaryenCtzInt32 = Module["_BinaryenCtzInt32"] = wasmExports["ke"])();

var _BinaryenPopcntInt32 = Module["_BinaryenPopcntInt32"] = () => (_BinaryenPopcntInt32 = Module["_BinaryenPopcntInt32"] = wasmExports["le"])();

var _BinaryenNegFloat32 = Module["_BinaryenNegFloat32"] = () => (_BinaryenNegFloat32 = Module["_BinaryenNegFloat32"] = wasmExports["me"])();

var _BinaryenAbsFloat32 = Module["_BinaryenAbsFloat32"] = () => (_BinaryenAbsFloat32 = Module["_BinaryenAbsFloat32"] = wasmExports["ne"])();

var _BinaryenCeilFloat32 = Module["_BinaryenCeilFloat32"] = () => (_BinaryenCeilFloat32 = Module["_BinaryenCeilFloat32"] = wasmExports["oe"])();

var _BinaryenFloorFloat32 = Module["_BinaryenFloorFloat32"] = () => (_BinaryenFloorFloat32 = Module["_BinaryenFloorFloat32"] = wasmExports["pe"])();

var _BinaryenTruncFloat32 = Module["_BinaryenTruncFloat32"] = () => (_BinaryenTruncFloat32 = Module["_BinaryenTruncFloat32"] = wasmExports["qe"])();

var _BinaryenNearestFloat32 = Module["_BinaryenNearestFloat32"] = () => (_BinaryenNearestFloat32 = Module["_BinaryenNearestFloat32"] = wasmExports["re"])();

var _BinaryenSqrtFloat32 = Module["_BinaryenSqrtFloat32"] = () => (_BinaryenSqrtFloat32 = Module["_BinaryenSqrtFloat32"] = wasmExports["se"])();

var _BinaryenEqZInt32 = Module["_BinaryenEqZInt32"] = () => (_BinaryenEqZInt32 = Module["_BinaryenEqZInt32"] = wasmExports["te"])();

var _BinaryenClzInt64 = Module["_BinaryenClzInt64"] = () => (_BinaryenClzInt64 = Module["_BinaryenClzInt64"] = wasmExports["ue"])();

var _BinaryenCtzInt64 = Module["_BinaryenCtzInt64"] = () => (_BinaryenCtzInt64 = Module["_BinaryenCtzInt64"] = wasmExports["ve"])();

var _BinaryenPopcntInt64 = Module["_BinaryenPopcntInt64"] = () => (_BinaryenPopcntInt64 = Module["_BinaryenPopcntInt64"] = wasmExports["we"])();

var _BinaryenNegFloat64 = Module["_BinaryenNegFloat64"] = () => (_BinaryenNegFloat64 = Module["_BinaryenNegFloat64"] = wasmExports["xe"])();

var _BinaryenAbsFloat64 = Module["_BinaryenAbsFloat64"] = () => (_BinaryenAbsFloat64 = Module["_BinaryenAbsFloat64"] = wasmExports["ye"])();

var _BinaryenCeilFloat64 = Module["_BinaryenCeilFloat64"] = () => (_BinaryenCeilFloat64 = Module["_BinaryenCeilFloat64"] = wasmExports["ze"])();

var _BinaryenFloorFloat64 = Module["_BinaryenFloorFloat64"] = () => (_BinaryenFloorFloat64 = Module["_BinaryenFloorFloat64"] = wasmExports["Ae"])();

var _BinaryenTruncFloat64 = Module["_BinaryenTruncFloat64"] = () => (_BinaryenTruncFloat64 = Module["_BinaryenTruncFloat64"] = wasmExports["Be"])();

var _BinaryenNearestFloat64 = Module["_BinaryenNearestFloat64"] = () => (_BinaryenNearestFloat64 = Module["_BinaryenNearestFloat64"] = wasmExports["Ce"])();

var _BinaryenSqrtFloat64 = Module["_BinaryenSqrtFloat64"] = () => (_BinaryenSqrtFloat64 = Module["_BinaryenSqrtFloat64"] = wasmExports["De"])();

var _BinaryenEqZInt64 = Module["_BinaryenEqZInt64"] = () => (_BinaryenEqZInt64 = Module["_BinaryenEqZInt64"] = wasmExports["Ee"])();

var _BinaryenExtendSInt32 = Module["_BinaryenExtendSInt32"] = () => (_BinaryenExtendSInt32 = Module["_BinaryenExtendSInt32"] = wasmExports["Fe"])();

var _BinaryenExtendUInt32 = Module["_BinaryenExtendUInt32"] = () => (_BinaryenExtendUInt32 = Module["_BinaryenExtendUInt32"] = wasmExports["Ge"])();

var _BinaryenWrapInt64 = Module["_BinaryenWrapInt64"] = () => (_BinaryenWrapInt64 = Module["_BinaryenWrapInt64"] = wasmExports["He"])();

var _BinaryenTruncSFloat32ToInt32 = Module["_BinaryenTruncSFloat32ToInt32"] = () => (_BinaryenTruncSFloat32ToInt32 = Module["_BinaryenTruncSFloat32ToInt32"] = wasmExports["Ie"])();

var _BinaryenTruncSFloat32ToInt64 = Module["_BinaryenTruncSFloat32ToInt64"] = () => (_BinaryenTruncSFloat32ToInt64 = Module["_BinaryenTruncSFloat32ToInt64"] = wasmExports["Je"])();

var _BinaryenTruncUFloat32ToInt32 = Module["_BinaryenTruncUFloat32ToInt32"] = () => (_BinaryenTruncUFloat32ToInt32 = Module["_BinaryenTruncUFloat32ToInt32"] = wasmExports["Ke"])();

var _BinaryenTruncUFloat32ToInt64 = Module["_BinaryenTruncUFloat32ToInt64"] = () => (_BinaryenTruncUFloat32ToInt64 = Module["_BinaryenTruncUFloat32ToInt64"] = wasmExports["Le"])();

var _BinaryenTruncSFloat64ToInt32 = Module["_BinaryenTruncSFloat64ToInt32"] = () => (_BinaryenTruncSFloat64ToInt32 = Module["_BinaryenTruncSFloat64ToInt32"] = wasmExports["Me"])();

var _BinaryenTruncSFloat64ToInt64 = Module["_BinaryenTruncSFloat64ToInt64"] = () => (_BinaryenTruncSFloat64ToInt64 = Module["_BinaryenTruncSFloat64ToInt64"] = wasmExports["Ne"])();

var _BinaryenTruncUFloat64ToInt32 = Module["_BinaryenTruncUFloat64ToInt32"] = () => (_BinaryenTruncUFloat64ToInt32 = Module["_BinaryenTruncUFloat64ToInt32"] = wasmExports["Oe"])();

var _BinaryenTruncUFloat64ToInt64 = Module["_BinaryenTruncUFloat64ToInt64"] = () => (_BinaryenTruncUFloat64ToInt64 = Module["_BinaryenTruncUFloat64ToInt64"] = wasmExports["Pe"])();

var _BinaryenReinterpretFloat32 = Module["_BinaryenReinterpretFloat32"] = () => (_BinaryenReinterpretFloat32 = Module["_BinaryenReinterpretFloat32"] = wasmExports["Qe"])();

var _BinaryenReinterpretFloat64 = Module["_BinaryenReinterpretFloat64"] = () => (_BinaryenReinterpretFloat64 = Module["_BinaryenReinterpretFloat64"] = wasmExports["Re"])();

var _BinaryenExtendS8Int32 = Module["_BinaryenExtendS8Int32"] = () => (_BinaryenExtendS8Int32 = Module["_BinaryenExtendS8Int32"] = wasmExports["Se"])();

var _BinaryenExtendS16Int32 = Module["_BinaryenExtendS16Int32"] = () => (_BinaryenExtendS16Int32 = Module["_BinaryenExtendS16Int32"] = wasmExports["Te"])();

var _BinaryenExtendS8Int64 = Module["_BinaryenExtendS8Int64"] = () => (_BinaryenExtendS8Int64 = Module["_BinaryenExtendS8Int64"] = wasmExports["Ue"])();

var _BinaryenExtendS16Int64 = Module["_BinaryenExtendS16Int64"] = () => (_BinaryenExtendS16Int64 = Module["_BinaryenExtendS16Int64"] = wasmExports["Ve"])();

var _BinaryenExtendS32Int64 = Module["_BinaryenExtendS32Int64"] = () => (_BinaryenExtendS32Int64 = Module["_BinaryenExtendS32Int64"] = wasmExports["We"])();

var _BinaryenConvertSInt32ToFloat32 = Module["_BinaryenConvertSInt32ToFloat32"] = () => (_BinaryenConvertSInt32ToFloat32 = Module["_BinaryenConvertSInt32ToFloat32"] = wasmExports["Xe"])();

var _BinaryenConvertSInt32ToFloat64 = Module["_BinaryenConvertSInt32ToFloat64"] = () => (_BinaryenConvertSInt32ToFloat64 = Module["_BinaryenConvertSInt32ToFloat64"] = wasmExports["Ye"])();

var _BinaryenConvertUInt32ToFloat32 = Module["_BinaryenConvertUInt32ToFloat32"] = () => (_BinaryenConvertUInt32ToFloat32 = Module["_BinaryenConvertUInt32ToFloat32"] = wasmExports["Ze"])();

var _BinaryenConvertUInt32ToFloat64 = Module["_BinaryenConvertUInt32ToFloat64"] = () => (_BinaryenConvertUInt32ToFloat64 = Module["_BinaryenConvertUInt32ToFloat64"] = wasmExports["_e"])();

var _BinaryenConvertSInt64ToFloat32 = Module["_BinaryenConvertSInt64ToFloat32"] = () => (_BinaryenConvertSInt64ToFloat32 = Module["_BinaryenConvertSInt64ToFloat32"] = wasmExports["$e"])();

var _BinaryenConvertSInt64ToFloat64 = Module["_BinaryenConvertSInt64ToFloat64"] = () => (_BinaryenConvertSInt64ToFloat64 = Module["_BinaryenConvertSInt64ToFloat64"] = wasmExports["af"])();

var _BinaryenConvertUInt64ToFloat32 = Module["_BinaryenConvertUInt64ToFloat32"] = () => (_BinaryenConvertUInt64ToFloat32 = Module["_BinaryenConvertUInt64ToFloat32"] = wasmExports["bf"])();

var _BinaryenConvertUInt64ToFloat64 = Module["_BinaryenConvertUInt64ToFloat64"] = () => (_BinaryenConvertUInt64ToFloat64 = Module["_BinaryenConvertUInt64ToFloat64"] = wasmExports["cf"])();

var _BinaryenPromoteFloat32 = Module["_BinaryenPromoteFloat32"] = () => (_BinaryenPromoteFloat32 = Module["_BinaryenPromoteFloat32"] = wasmExports["df"])();

var _BinaryenDemoteFloat64 = Module["_BinaryenDemoteFloat64"] = () => (_BinaryenDemoteFloat64 = Module["_BinaryenDemoteFloat64"] = wasmExports["ef"])();

var _BinaryenReinterpretInt32 = Module["_BinaryenReinterpretInt32"] = () => (_BinaryenReinterpretInt32 = Module["_BinaryenReinterpretInt32"] = wasmExports["ff"])();

var _BinaryenReinterpretInt64 = Module["_BinaryenReinterpretInt64"] = () => (_BinaryenReinterpretInt64 = Module["_BinaryenReinterpretInt64"] = wasmExports["gf"])();

var _BinaryenAddInt32 = Module["_BinaryenAddInt32"] = () => (_BinaryenAddInt32 = Module["_BinaryenAddInt32"] = wasmExports["hf"])();

var _BinaryenSubInt32 = Module["_BinaryenSubInt32"] = () => (_BinaryenSubInt32 = Module["_BinaryenSubInt32"] = wasmExports["jf"])();

var _BinaryenMulInt32 = Module["_BinaryenMulInt32"] = () => (_BinaryenMulInt32 = Module["_BinaryenMulInt32"] = wasmExports["kf"])();

var _BinaryenDivSInt32 = Module["_BinaryenDivSInt32"] = () => (_BinaryenDivSInt32 = Module["_BinaryenDivSInt32"] = wasmExports["lf"])();

var _BinaryenDivUInt32 = Module["_BinaryenDivUInt32"] = () => (_BinaryenDivUInt32 = Module["_BinaryenDivUInt32"] = wasmExports["mf"])();

var _BinaryenRemSInt32 = Module["_BinaryenRemSInt32"] = () => (_BinaryenRemSInt32 = Module["_BinaryenRemSInt32"] = wasmExports["nf"])();

var _BinaryenRemUInt32 = Module["_BinaryenRemUInt32"] = () => (_BinaryenRemUInt32 = Module["_BinaryenRemUInt32"] = wasmExports["of"])();

var _BinaryenAndInt32 = Module["_BinaryenAndInt32"] = () => (_BinaryenAndInt32 = Module["_BinaryenAndInt32"] = wasmExports["pf"])();

var _BinaryenOrInt32 = Module["_BinaryenOrInt32"] = () => (_BinaryenOrInt32 = Module["_BinaryenOrInt32"] = wasmExports["qf"])();

var _BinaryenXorInt32 = Module["_BinaryenXorInt32"] = () => (_BinaryenXorInt32 = Module["_BinaryenXorInt32"] = wasmExports["rf"])();

var _BinaryenShlInt32 = Module["_BinaryenShlInt32"] = () => (_BinaryenShlInt32 = Module["_BinaryenShlInt32"] = wasmExports["sf"])();

var _BinaryenShrUInt32 = Module["_BinaryenShrUInt32"] = () => (_BinaryenShrUInt32 = Module["_BinaryenShrUInt32"] = wasmExports["tf"])();

var _BinaryenShrSInt32 = Module["_BinaryenShrSInt32"] = () => (_BinaryenShrSInt32 = Module["_BinaryenShrSInt32"] = wasmExports["uf"])();

var _BinaryenRotLInt32 = Module["_BinaryenRotLInt32"] = () => (_BinaryenRotLInt32 = Module["_BinaryenRotLInt32"] = wasmExports["vf"])();

var _BinaryenRotRInt32 = Module["_BinaryenRotRInt32"] = () => (_BinaryenRotRInt32 = Module["_BinaryenRotRInt32"] = wasmExports["wf"])();

var _BinaryenEqInt32 = Module["_BinaryenEqInt32"] = () => (_BinaryenEqInt32 = Module["_BinaryenEqInt32"] = wasmExports["xf"])();

var _BinaryenNeInt32 = Module["_BinaryenNeInt32"] = () => (_BinaryenNeInt32 = Module["_BinaryenNeInt32"] = wasmExports["yf"])();

var _BinaryenLtSInt32 = Module["_BinaryenLtSInt32"] = () => (_BinaryenLtSInt32 = Module["_BinaryenLtSInt32"] = wasmExports["zf"])();

var _BinaryenLtUInt32 = Module["_BinaryenLtUInt32"] = () => (_BinaryenLtUInt32 = Module["_BinaryenLtUInt32"] = wasmExports["Af"])();

var _BinaryenLeSInt32 = Module["_BinaryenLeSInt32"] = () => (_BinaryenLeSInt32 = Module["_BinaryenLeSInt32"] = wasmExports["Bf"])();

var _BinaryenLeUInt32 = Module["_BinaryenLeUInt32"] = () => (_BinaryenLeUInt32 = Module["_BinaryenLeUInt32"] = wasmExports["Cf"])();

var _BinaryenGtSInt32 = Module["_BinaryenGtSInt32"] = () => (_BinaryenGtSInt32 = Module["_BinaryenGtSInt32"] = wasmExports["Df"])();

var _BinaryenGtUInt32 = Module["_BinaryenGtUInt32"] = () => (_BinaryenGtUInt32 = Module["_BinaryenGtUInt32"] = wasmExports["Ef"])();

var _BinaryenGeSInt32 = Module["_BinaryenGeSInt32"] = () => (_BinaryenGeSInt32 = Module["_BinaryenGeSInt32"] = wasmExports["Ff"])();

var _BinaryenGeUInt32 = Module["_BinaryenGeUInt32"] = () => (_BinaryenGeUInt32 = Module["_BinaryenGeUInt32"] = wasmExports["Gf"])();

var _BinaryenAddInt64 = Module["_BinaryenAddInt64"] = () => (_BinaryenAddInt64 = Module["_BinaryenAddInt64"] = wasmExports["Hf"])();

var _BinaryenSubInt64 = Module["_BinaryenSubInt64"] = () => (_BinaryenSubInt64 = Module["_BinaryenSubInt64"] = wasmExports["If"])();

var _BinaryenMulInt64 = Module["_BinaryenMulInt64"] = () => (_BinaryenMulInt64 = Module["_BinaryenMulInt64"] = wasmExports["Jf"])();

var _BinaryenDivSInt64 = Module["_BinaryenDivSInt64"] = () => (_BinaryenDivSInt64 = Module["_BinaryenDivSInt64"] = wasmExports["Kf"])();

var _BinaryenDivUInt64 = Module["_BinaryenDivUInt64"] = () => (_BinaryenDivUInt64 = Module["_BinaryenDivUInt64"] = wasmExports["Lf"])();

var _BinaryenRemSInt64 = Module["_BinaryenRemSInt64"] = () => (_BinaryenRemSInt64 = Module["_BinaryenRemSInt64"] = wasmExports["Mf"])();

var _BinaryenRemUInt64 = Module["_BinaryenRemUInt64"] = () => (_BinaryenRemUInt64 = Module["_BinaryenRemUInt64"] = wasmExports["Nf"])();

var _BinaryenAndInt64 = Module["_BinaryenAndInt64"] = () => (_BinaryenAndInt64 = Module["_BinaryenAndInt64"] = wasmExports["Of"])();

var _BinaryenOrInt64 = Module["_BinaryenOrInt64"] = () => (_BinaryenOrInt64 = Module["_BinaryenOrInt64"] = wasmExports["Pf"])();

var _BinaryenXorInt64 = Module["_BinaryenXorInt64"] = () => (_BinaryenXorInt64 = Module["_BinaryenXorInt64"] = wasmExports["Qf"])();

var _BinaryenShlInt64 = Module["_BinaryenShlInt64"] = () => (_BinaryenShlInt64 = Module["_BinaryenShlInt64"] = wasmExports["Rf"])();

var _BinaryenShrUInt64 = Module["_BinaryenShrUInt64"] = () => (_BinaryenShrUInt64 = Module["_BinaryenShrUInt64"] = wasmExports["Sf"])();

var _BinaryenShrSInt64 = Module["_BinaryenShrSInt64"] = () => (_BinaryenShrSInt64 = Module["_BinaryenShrSInt64"] = wasmExports["Tf"])();

var _BinaryenRotLInt64 = Module["_BinaryenRotLInt64"] = () => (_BinaryenRotLInt64 = Module["_BinaryenRotLInt64"] = wasmExports["Uf"])();

var _BinaryenRotRInt64 = Module["_BinaryenRotRInt64"] = () => (_BinaryenRotRInt64 = Module["_BinaryenRotRInt64"] = wasmExports["Vf"])();

var _BinaryenEqInt64 = Module["_BinaryenEqInt64"] = () => (_BinaryenEqInt64 = Module["_BinaryenEqInt64"] = wasmExports["Wf"])();

var _BinaryenNeInt64 = Module["_BinaryenNeInt64"] = () => (_BinaryenNeInt64 = Module["_BinaryenNeInt64"] = wasmExports["Xf"])();

var _BinaryenLtSInt64 = Module["_BinaryenLtSInt64"] = () => (_BinaryenLtSInt64 = Module["_BinaryenLtSInt64"] = wasmExports["Yf"])();

var _BinaryenLtUInt64 = Module["_BinaryenLtUInt64"] = () => (_BinaryenLtUInt64 = Module["_BinaryenLtUInt64"] = wasmExports["Zf"])();

var _BinaryenLeSInt64 = Module["_BinaryenLeSInt64"] = () => (_BinaryenLeSInt64 = Module["_BinaryenLeSInt64"] = wasmExports["_f"])();

var _BinaryenLeUInt64 = Module["_BinaryenLeUInt64"] = () => (_BinaryenLeUInt64 = Module["_BinaryenLeUInt64"] = wasmExports["$f"])();

var _BinaryenGtSInt64 = Module["_BinaryenGtSInt64"] = () => (_BinaryenGtSInt64 = Module["_BinaryenGtSInt64"] = wasmExports["ag"])();

var _BinaryenGtUInt64 = Module["_BinaryenGtUInt64"] = () => (_BinaryenGtUInt64 = Module["_BinaryenGtUInt64"] = wasmExports["bg"])();

var _BinaryenGeSInt64 = Module["_BinaryenGeSInt64"] = () => (_BinaryenGeSInt64 = Module["_BinaryenGeSInt64"] = wasmExports["cg"])();

var _BinaryenGeUInt64 = Module["_BinaryenGeUInt64"] = () => (_BinaryenGeUInt64 = Module["_BinaryenGeUInt64"] = wasmExports["dg"])();

var _BinaryenAddFloat32 = Module["_BinaryenAddFloat32"] = () => (_BinaryenAddFloat32 = Module["_BinaryenAddFloat32"] = wasmExports["eg"])();

var _BinaryenSubFloat32 = Module["_BinaryenSubFloat32"] = () => (_BinaryenSubFloat32 = Module["_BinaryenSubFloat32"] = wasmExports["fg"])();

var _BinaryenMulFloat32 = Module["_BinaryenMulFloat32"] = () => (_BinaryenMulFloat32 = Module["_BinaryenMulFloat32"] = wasmExports["gg"])();

var _BinaryenDivFloat32 = Module["_BinaryenDivFloat32"] = () => (_BinaryenDivFloat32 = Module["_BinaryenDivFloat32"] = wasmExports["hg"])();

var _BinaryenCopySignFloat32 = Module["_BinaryenCopySignFloat32"] = () => (_BinaryenCopySignFloat32 = Module["_BinaryenCopySignFloat32"] = wasmExports["ig"])();

var _BinaryenMinFloat32 = Module["_BinaryenMinFloat32"] = () => (_BinaryenMinFloat32 = Module["_BinaryenMinFloat32"] = wasmExports["jg"])();

var _BinaryenMaxFloat32 = Module["_BinaryenMaxFloat32"] = () => (_BinaryenMaxFloat32 = Module["_BinaryenMaxFloat32"] = wasmExports["kg"])();

var _BinaryenEqFloat32 = Module["_BinaryenEqFloat32"] = () => (_BinaryenEqFloat32 = Module["_BinaryenEqFloat32"] = wasmExports["lg"])();

var _BinaryenNeFloat32 = Module["_BinaryenNeFloat32"] = () => (_BinaryenNeFloat32 = Module["_BinaryenNeFloat32"] = wasmExports["mg"])();

var _BinaryenLtFloat32 = Module["_BinaryenLtFloat32"] = () => (_BinaryenLtFloat32 = Module["_BinaryenLtFloat32"] = wasmExports["ng"])();

var _BinaryenLeFloat32 = Module["_BinaryenLeFloat32"] = () => (_BinaryenLeFloat32 = Module["_BinaryenLeFloat32"] = wasmExports["og"])();

var _BinaryenGtFloat32 = Module["_BinaryenGtFloat32"] = () => (_BinaryenGtFloat32 = Module["_BinaryenGtFloat32"] = wasmExports["pg"])();

var _BinaryenGeFloat32 = Module["_BinaryenGeFloat32"] = () => (_BinaryenGeFloat32 = Module["_BinaryenGeFloat32"] = wasmExports["qg"])();

var _BinaryenAddFloat64 = Module["_BinaryenAddFloat64"] = () => (_BinaryenAddFloat64 = Module["_BinaryenAddFloat64"] = wasmExports["rg"])();

var _BinaryenSubFloat64 = Module["_BinaryenSubFloat64"] = () => (_BinaryenSubFloat64 = Module["_BinaryenSubFloat64"] = wasmExports["sg"])();

var _BinaryenMulFloat64 = Module["_BinaryenMulFloat64"] = () => (_BinaryenMulFloat64 = Module["_BinaryenMulFloat64"] = wasmExports["tg"])();

var _BinaryenDivFloat64 = Module["_BinaryenDivFloat64"] = () => (_BinaryenDivFloat64 = Module["_BinaryenDivFloat64"] = wasmExports["ug"])();

var _BinaryenCopySignFloat64 = Module["_BinaryenCopySignFloat64"] = () => (_BinaryenCopySignFloat64 = Module["_BinaryenCopySignFloat64"] = wasmExports["vg"])();

var _BinaryenMinFloat64 = Module["_BinaryenMinFloat64"] = () => (_BinaryenMinFloat64 = Module["_BinaryenMinFloat64"] = wasmExports["wg"])();

var _BinaryenMaxFloat64 = Module["_BinaryenMaxFloat64"] = () => (_BinaryenMaxFloat64 = Module["_BinaryenMaxFloat64"] = wasmExports["xg"])();

var _BinaryenEqFloat64 = Module["_BinaryenEqFloat64"] = () => (_BinaryenEqFloat64 = Module["_BinaryenEqFloat64"] = wasmExports["yg"])();

var _BinaryenNeFloat64 = Module["_BinaryenNeFloat64"] = () => (_BinaryenNeFloat64 = Module["_BinaryenNeFloat64"] = wasmExports["zg"])();

var _BinaryenLtFloat64 = Module["_BinaryenLtFloat64"] = () => (_BinaryenLtFloat64 = Module["_BinaryenLtFloat64"] = wasmExports["Ag"])();

var _BinaryenLeFloat64 = Module["_BinaryenLeFloat64"] = () => (_BinaryenLeFloat64 = Module["_BinaryenLeFloat64"] = wasmExports["Bg"])();

var _BinaryenGtFloat64 = Module["_BinaryenGtFloat64"] = () => (_BinaryenGtFloat64 = Module["_BinaryenGtFloat64"] = wasmExports["Cg"])();

var _BinaryenGeFloat64 = Module["_BinaryenGeFloat64"] = () => (_BinaryenGeFloat64 = Module["_BinaryenGeFloat64"] = wasmExports["Dg"])();

var _BinaryenAtomicRMWAdd = Module["_BinaryenAtomicRMWAdd"] = () => (_BinaryenAtomicRMWAdd = Module["_BinaryenAtomicRMWAdd"] = wasmExports["Eg"])();

var _BinaryenAtomicRMWSub = Module["_BinaryenAtomicRMWSub"] = () => (_BinaryenAtomicRMWSub = Module["_BinaryenAtomicRMWSub"] = wasmExports["Fg"])();

var _BinaryenAtomicRMWAnd = Module["_BinaryenAtomicRMWAnd"] = () => (_BinaryenAtomicRMWAnd = Module["_BinaryenAtomicRMWAnd"] = wasmExports["Gg"])();

var _BinaryenAtomicRMWOr = Module["_BinaryenAtomicRMWOr"] = () => (_BinaryenAtomicRMWOr = Module["_BinaryenAtomicRMWOr"] = wasmExports["Hg"])();

var _BinaryenAtomicRMWXor = Module["_BinaryenAtomicRMWXor"] = () => (_BinaryenAtomicRMWXor = Module["_BinaryenAtomicRMWXor"] = wasmExports["Ig"])();

var _BinaryenAtomicRMWXchg = Module["_BinaryenAtomicRMWXchg"] = () => (_BinaryenAtomicRMWXchg = Module["_BinaryenAtomicRMWXchg"] = wasmExports["Jg"])();

var _BinaryenTruncSatSFloat32ToInt32 = Module["_BinaryenTruncSatSFloat32ToInt32"] = () => (_BinaryenTruncSatSFloat32ToInt32 = Module["_BinaryenTruncSatSFloat32ToInt32"] = wasmExports["Kg"])();

var _BinaryenTruncSatSFloat32ToInt64 = Module["_BinaryenTruncSatSFloat32ToInt64"] = () => (_BinaryenTruncSatSFloat32ToInt64 = Module["_BinaryenTruncSatSFloat32ToInt64"] = wasmExports["Lg"])();

var _BinaryenTruncSatUFloat32ToInt32 = Module["_BinaryenTruncSatUFloat32ToInt32"] = () => (_BinaryenTruncSatUFloat32ToInt32 = Module["_BinaryenTruncSatUFloat32ToInt32"] = wasmExports["Mg"])();

var _BinaryenTruncSatUFloat32ToInt64 = Module["_BinaryenTruncSatUFloat32ToInt64"] = () => (_BinaryenTruncSatUFloat32ToInt64 = Module["_BinaryenTruncSatUFloat32ToInt64"] = wasmExports["Ng"])();

var _BinaryenTruncSatSFloat64ToInt32 = Module["_BinaryenTruncSatSFloat64ToInt32"] = () => (_BinaryenTruncSatSFloat64ToInt32 = Module["_BinaryenTruncSatSFloat64ToInt32"] = wasmExports["Og"])();

var _BinaryenTruncSatSFloat64ToInt64 = Module["_BinaryenTruncSatSFloat64ToInt64"] = () => (_BinaryenTruncSatSFloat64ToInt64 = Module["_BinaryenTruncSatSFloat64ToInt64"] = wasmExports["Pg"])();

var _BinaryenTruncSatUFloat64ToInt32 = Module["_BinaryenTruncSatUFloat64ToInt32"] = () => (_BinaryenTruncSatUFloat64ToInt32 = Module["_BinaryenTruncSatUFloat64ToInt32"] = wasmExports["Qg"])();

var _BinaryenTruncSatUFloat64ToInt64 = Module["_BinaryenTruncSatUFloat64ToInt64"] = () => (_BinaryenTruncSatUFloat64ToInt64 = Module["_BinaryenTruncSatUFloat64ToInt64"] = wasmExports["Rg"])();

var _BinaryenSplatVecI8x16 = Module["_BinaryenSplatVecI8x16"] = () => (_BinaryenSplatVecI8x16 = Module["_BinaryenSplatVecI8x16"] = wasmExports["Sg"])();

var _BinaryenExtractLaneSVecI8x16 = Module["_BinaryenExtractLaneSVecI8x16"] = () => (_BinaryenExtractLaneSVecI8x16 = Module["_BinaryenExtractLaneSVecI8x16"] = wasmExports["Tg"])();

var _BinaryenExtractLaneUVecI8x16 = Module["_BinaryenExtractLaneUVecI8x16"] = () => (_BinaryenExtractLaneUVecI8x16 = Module["_BinaryenExtractLaneUVecI8x16"] = wasmExports["Ug"])();

var _BinaryenReplaceLaneVecI8x16 = Module["_BinaryenReplaceLaneVecI8x16"] = () => (_BinaryenReplaceLaneVecI8x16 = Module["_BinaryenReplaceLaneVecI8x16"] = wasmExports["Vg"])();

var _BinaryenSplatVecI16x8 = Module["_BinaryenSplatVecI16x8"] = () => (_BinaryenSplatVecI16x8 = Module["_BinaryenSplatVecI16x8"] = wasmExports["Wg"])();

var _BinaryenExtractLaneSVecI16x8 = Module["_BinaryenExtractLaneSVecI16x8"] = () => (_BinaryenExtractLaneSVecI16x8 = Module["_BinaryenExtractLaneSVecI16x8"] = wasmExports["Xg"])();

var _BinaryenExtractLaneUVecI16x8 = Module["_BinaryenExtractLaneUVecI16x8"] = () => (_BinaryenExtractLaneUVecI16x8 = Module["_BinaryenExtractLaneUVecI16x8"] = wasmExports["Yg"])();

var _BinaryenReplaceLaneVecI16x8 = Module["_BinaryenReplaceLaneVecI16x8"] = () => (_BinaryenReplaceLaneVecI16x8 = Module["_BinaryenReplaceLaneVecI16x8"] = wasmExports["Zg"])();

var _BinaryenSplatVecI32x4 = Module["_BinaryenSplatVecI32x4"] = () => (_BinaryenSplatVecI32x4 = Module["_BinaryenSplatVecI32x4"] = wasmExports["_g"])();

var _BinaryenExtractLaneVecI32x4 = Module["_BinaryenExtractLaneVecI32x4"] = () => (_BinaryenExtractLaneVecI32x4 = Module["_BinaryenExtractLaneVecI32x4"] = wasmExports["$g"])();

var _BinaryenReplaceLaneVecI32x4 = Module["_BinaryenReplaceLaneVecI32x4"] = () => (_BinaryenReplaceLaneVecI32x4 = Module["_BinaryenReplaceLaneVecI32x4"] = wasmExports["ah"])();

var _BinaryenSplatVecI64x2 = Module["_BinaryenSplatVecI64x2"] = () => (_BinaryenSplatVecI64x2 = Module["_BinaryenSplatVecI64x2"] = wasmExports["bh"])();

var _BinaryenExtractLaneVecI64x2 = Module["_BinaryenExtractLaneVecI64x2"] = () => (_BinaryenExtractLaneVecI64x2 = Module["_BinaryenExtractLaneVecI64x2"] = wasmExports["ch"])();

var _BinaryenReplaceLaneVecI64x2 = Module["_BinaryenReplaceLaneVecI64x2"] = () => (_BinaryenReplaceLaneVecI64x2 = Module["_BinaryenReplaceLaneVecI64x2"] = wasmExports["dh"])();

var _BinaryenSplatVecF32x4 = Module["_BinaryenSplatVecF32x4"] = () => (_BinaryenSplatVecF32x4 = Module["_BinaryenSplatVecF32x4"] = wasmExports["eh"])();

var _BinaryenExtractLaneVecF32x4 = Module["_BinaryenExtractLaneVecF32x4"] = () => (_BinaryenExtractLaneVecF32x4 = Module["_BinaryenExtractLaneVecF32x4"] = wasmExports["fh"])();

var _BinaryenReplaceLaneVecF32x4 = Module["_BinaryenReplaceLaneVecF32x4"] = () => (_BinaryenReplaceLaneVecF32x4 = Module["_BinaryenReplaceLaneVecF32x4"] = wasmExports["gh"])();

var _BinaryenSplatVecF64x2 = Module["_BinaryenSplatVecF64x2"] = () => (_BinaryenSplatVecF64x2 = Module["_BinaryenSplatVecF64x2"] = wasmExports["hh"])();

var _BinaryenExtractLaneVecF64x2 = Module["_BinaryenExtractLaneVecF64x2"] = () => (_BinaryenExtractLaneVecF64x2 = Module["_BinaryenExtractLaneVecF64x2"] = wasmExports["ih"])();

var _BinaryenReplaceLaneVecF64x2 = Module["_BinaryenReplaceLaneVecF64x2"] = () => (_BinaryenReplaceLaneVecF64x2 = Module["_BinaryenReplaceLaneVecF64x2"] = wasmExports["jh"])();

var _BinaryenEqVecI8x16 = Module["_BinaryenEqVecI8x16"] = () => (_BinaryenEqVecI8x16 = Module["_BinaryenEqVecI8x16"] = wasmExports["kh"])();

var _BinaryenNeVecI8x16 = Module["_BinaryenNeVecI8x16"] = () => (_BinaryenNeVecI8x16 = Module["_BinaryenNeVecI8x16"] = wasmExports["lh"])();

var _BinaryenLtSVecI8x16 = Module["_BinaryenLtSVecI8x16"] = () => (_BinaryenLtSVecI8x16 = Module["_BinaryenLtSVecI8x16"] = wasmExports["mh"])();

var _BinaryenLtUVecI8x16 = Module["_BinaryenLtUVecI8x16"] = () => (_BinaryenLtUVecI8x16 = Module["_BinaryenLtUVecI8x16"] = wasmExports["nh"])();

var _BinaryenGtSVecI8x16 = Module["_BinaryenGtSVecI8x16"] = () => (_BinaryenGtSVecI8x16 = Module["_BinaryenGtSVecI8x16"] = wasmExports["oh"])();

var _BinaryenGtUVecI8x16 = Module["_BinaryenGtUVecI8x16"] = () => (_BinaryenGtUVecI8x16 = Module["_BinaryenGtUVecI8x16"] = wasmExports["ph"])();

var _BinaryenLeSVecI8x16 = Module["_BinaryenLeSVecI8x16"] = () => (_BinaryenLeSVecI8x16 = Module["_BinaryenLeSVecI8x16"] = wasmExports["qh"])();

var _BinaryenLeUVecI8x16 = Module["_BinaryenLeUVecI8x16"] = () => (_BinaryenLeUVecI8x16 = Module["_BinaryenLeUVecI8x16"] = wasmExports["rh"])();

var _BinaryenGeSVecI8x16 = Module["_BinaryenGeSVecI8x16"] = () => (_BinaryenGeSVecI8x16 = Module["_BinaryenGeSVecI8x16"] = wasmExports["sh"])();

var _BinaryenGeUVecI8x16 = Module["_BinaryenGeUVecI8x16"] = () => (_BinaryenGeUVecI8x16 = Module["_BinaryenGeUVecI8x16"] = wasmExports["th"])();

var _BinaryenEqVecI16x8 = Module["_BinaryenEqVecI16x8"] = () => (_BinaryenEqVecI16x8 = Module["_BinaryenEqVecI16x8"] = wasmExports["uh"])();

var _BinaryenNeVecI16x8 = Module["_BinaryenNeVecI16x8"] = () => (_BinaryenNeVecI16x8 = Module["_BinaryenNeVecI16x8"] = wasmExports["vh"])();

var _BinaryenLtSVecI16x8 = Module["_BinaryenLtSVecI16x8"] = () => (_BinaryenLtSVecI16x8 = Module["_BinaryenLtSVecI16x8"] = wasmExports["wh"])();

var _BinaryenLtUVecI16x8 = Module["_BinaryenLtUVecI16x8"] = () => (_BinaryenLtUVecI16x8 = Module["_BinaryenLtUVecI16x8"] = wasmExports["xh"])();

var _BinaryenGtSVecI16x8 = Module["_BinaryenGtSVecI16x8"] = () => (_BinaryenGtSVecI16x8 = Module["_BinaryenGtSVecI16x8"] = wasmExports["yh"])();

var _BinaryenGtUVecI16x8 = Module["_BinaryenGtUVecI16x8"] = () => (_BinaryenGtUVecI16x8 = Module["_BinaryenGtUVecI16x8"] = wasmExports["zh"])();

var _BinaryenLeSVecI16x8 = Module["_BinaryenLeSVecI16x8"] = () => (_BinaryenLeSVecI16x8 = Module["_BinaryenLeSVecI16x8"] = wasmExports["Ah"])();

var _BinaryenLeUVecI16x8 = Module["_BinaryenLeUVecI16x8"] = () => (_BinaryenLeUVecI16x8 = Module["_BinaryenLeUVecI16x8"] = wasmExports["Bh"])();

var _BinaryenGeSVecI16x8 = Module["_BinaryenGeSVecI16x8"] = () => (_BinaryenGeSVecI16x8 = Module["_BinaryenGeSVecI16x8"] = wasmExports["Ch"])();

var _BinaryenGeUVecI16x8 = Module["_BinaryenGeUVecI16x8"] = () => (_BinaryenGeUVecI16x8 = Module["_BinaryenGeUVecI16x8"] = wasmExports["Dh"])();

var _BinaryenEqVecI32x4 = Module["_BinaryenEqVecI32x4"] = () => (_BinaryenEqVecI32x4 = Module["_BinaryenEqVecI32x4"] = wasmExports["Eh"])();

var _BinaryenNeVecI32x4 = Module["_BinaryenNeVecI32x4"] = () => (_BinaryenNeVecI32x4 = Module["_BinaryenNeVecI32x4"] = wasmExports["Fh"])();

var _BinaryenLtSVecI32x4 = Module["_BinaryenLtSVecI32x4"] = () => (_BinaryenLtSVecI32x4 = Module["_BinaryenLtSVecI32x4"] = wasmExports["Gh"])();

var _BinaryenLtUVecI32x4 = Module["_BinaryenLtUVecI32x4"] = () => (_BinaryenLtUVecI32x4 = Module["_BinaryenLtUVecI32x4"] = wasmExports["Hh"])();

var _BinaryenGtSVecI32x4 = Module["_BinaryenGtSVecI32x4"] = () => (_BinaryenGtSVecI32x4 = Module["_BinaryenGtSVecI32x4"] = wasmExports["Ih"])();

var _BinaryenGtUVecI32x4 = Module["_BinaryenGtUVecI32x4"] = () => (_BinaryenGtUVecI32x4 = Module["_BinaryenGtUVecI32x4"] = wasmExports["Jh"])();

var _BinaryenLeSVecI32x4 = Module["_BinaryenLeSVecI32x4"] = () => (_BinaryenLeSVecI32x4 = Module["_BinaryenLeSVecI32x4"] = wasmExports["Kh"])();

var _BinaryenLeUVecI32x4 = Module["_BinaryenLeUVecI32x4"] = () => (_BinaryenLeUVecI32x4 = Module["_BinaryenLeUVecI32x4"] = wasmExports["Lh"])();

var _BinaryenGeSVecI32x4 = Module["_BinaryenGeSVecI32x4"] = () => (_BinaryenGeSVecI32x4 = Module["_BinaryenGeSVecI32x4"] = wasmExports["Mh"])();

var _BinaryenGeUVecI32x4 = Module["_BinaryenGeUVecI32x4"] = () => (_BinaryenGeUVecI32x4 = Module["_BinaryenGeUVecI32x4"] = wasmExports["Nh"])();

var _BinaryenEqVecI64x2 = Module["_BinaryenEqVecI64x2"] = () => (_BinaryenEqVecI64x2 = Module["_BinaryenEqVecI64x2"] = wasmExports["Oh"])();

var _BinaryenNeVecI64x2 = Module["_BinaryenNeVecI64x2"] = () => (_BinaryenNeVecI64x2 = Module["_BinaryenNeVecI64x2"] = wasmExports["Ph"])();

var _BinaryenLtSVecI64x2 = Module["_BinaryenLtSVecI64x2"] = () => (_BinaryenLtSVecI64x2 = Module["_BinaryenLtSVecI64x2"] = wasmExports["Qh"])();

var _BinaryenGtSVecI64x2 = Module["_BinaryenGtSVecI64x2"] = () => (_BinaryenGtSVecI64x2 = Module["_BinaryenGtSVecI64x2"] = wasmExports["Rh"])();

var _BinaryenLeSVecI64x2 = Module["_BinaryenLeSVecI64x2"] = () => (_BinaryenLeSVecI64x2 = Module["_BinaryenLeSVecI64x2"] = wasmExports["Sh"])();

var _BinaryenGeSVecI64x2 = Module["_BinaryenGeSVecI64x2"] = () => (_BinaryenGeSVecI64x2 = Module["_BinaryenGeSVecI64x2"] = wasmExports["Th"])();

var _BinaryenEqVecF32x4 = Module["_BinaryenEqVecF32x4"] = () => (_BinaryenEqVecF32x4 = Module["_BinaryenEqVecF32x4"] = wasmExports["Uh"])();

var _BinaryenNeVecF32x4 = Module["_BinaryenNeVecF32x4"] = () => (_BinaryenNeVecF32x4 = Module["_BinaryenNeVecF32x4"] = wasmExports["Vh"])();

var _BinaryenLtVecF32x4 = Module["_BinaryenLtVecF32x4"] = () => (_BinaryenLtVecF32x4 = Module["_BinaryenLtVecF32x4"] = wasmExports["Wh"])();

var _BinaryenGtVecF32x4 = Module["_BinaryenGtVecF32x4"] = () => (_BinaryenGtVecF32x4 = Module["_BinaryenGtVecF32x4"] = wasmExports["Xh"])();

var _BinaryenLeVecF32x4 = Module["_BinaryenLeVecF32x4"] = () => (_BinaryenLeVecF32x4 = Module["_BinaryenLeVecF32x4"] = wasmExports["Yh"])();

var _BinaryenGeVecF32x4 = Module["_BinaryenGeVecF32x4"] = () => (_BinaryenGeVecF32x4 = Module["_BinaryenGeVecF32x4"] = wasmExports["Zh"])();

var _BinaryenEqVecF64x2 = Module["_BinaryenEqVecF64x2"] = () => (_BinaryenEqVecF64x2 = Module["_BinaryenEqVecF64x2"] = wasmExports["_h"])();

var _BinaryenNeVecF64x2 = Module["_BinaryenNeVecF64x2"] = () => (_BinaryenNeVecF64x2 = Module["_BinaryenNeVecF64x2"] = wasmExports["$h"])();

var _BinaryenLtVecF64x2 = Module["_BinaryenLtVecF64x2"] = () => (_BinaryenLtVecF64x2 = Module["_BinaryenLtVecF64x2"] = wasmExports["ai"])();

var _BinaryenGtVecF64x2 = Module["_BinaryenGtVecF64x2"] = () => (_BinaryenGtVecF64x2 = Module["_BinaryenGtVecF64x2"] = wasmExports["bi"])();

var _BinaryenLeVecF64x2 = Module["_BinaryenLeVecF64x2"] = () => (_BinaryenLeVecF64x2 = Module["_BinaryenLeVecF64x2"] = wasmExports["ci"])();

var _BinaryenGeVecF64x2 = Module["_BinaryenGeVecF64x2"] = () => (_BinaryenGeVecF64x2 = Module["_BinaryenGeVecF64x2"] = wasmExports["di"])();

var _BinaryenNotVec128 = Module["_BinaryenNotVec128"] = () => (_BinaryenNotVec128 = Module["_BinaryenNotVec128"] = wasmExports["ei"])();

var _BinaryenAndVec128 = Module["_BinaryenAndVec128"] = () => (_BinaryenAndVec128 = Module["_BinaryenAndVec128"] = wasmExports["fi"])();

var _BinaryenOrVec128 = Module["_BinaryenOrVec128"] = () => (_BinaryenOrVec128 = Module["_BinaryenOrVec128"] = wasmExports["gi"])();

var _BinaryenXorVec128 = Module["_BinaryenXorVec128"] = () => (_BinaryenXorVec128 = Module["_BinaryenXorVec128"] = wasmExports["hi"])();

var _BinaryenAndNotVec128 = Module["_BinaryenAndNotVec128"] = () => (_BinaryenAndNotVec128 = Module["_BinaryenAndNotVec128"] = wasmExports["ii"])();

var _BinaryenBitselectVec128 = Module["_BinaryenBitselectVec128"] = () => (_BinaryenBitselectVec128 = Module["_BinaryenBitselectVec128"] = wasmExports["ji"])();

var _BinaryenRelaxedFmaVecF32x4 = Module["_BinaryenRelaxedFmaVecF32x4"] = () => (_BinaryenRelaxedFmaVecF32x4 = Module["_BinaryenRelaxedFmaVecF32x4"] = wasmExports["ki"])();

var _BinaryenRelaxedFmsVecF32x4 = Module["_BinaryenRelaxedFmsVecF32x4"] = () => (_BinaryenRelaxedFmsVecF32x4 = Module["_BinaryenRelaxedFmsVecF32x4"] = wasmExports["li"])();

var _BinaryenRelaxedFmaVecF64x2 = Module["_BinaryenRelaxedFmaVecF64x2"] = () => (_BinaryenRelaxedFmaVecF64x2 = Module["_BinaryenRelaxedFmaVecF64x2"] = wasmExports["mi"])();

var _BinaryenRelaxedFmsVecF64x2 = Module["_BinaryenRelaxedFmsVecF64x2"] = () => (_BinaryenRelaxedFmsVecF64x2 = Module["_BinaryenRelaxedFmsVecF64x2"] = wasmExports["ni"])();

var _BinaryenLaneselectI8x16 = Module["_BinaryenLaneselectI8x16"] = () => (_BinaryenLaneselectI8x16 = Module["_BinaryenLaneselectI8x16"] = wasmExports["oi"])();

var _BinaryenLaneselectI16x8 = Module["_BinaryenLaneselectI16x8"] = () => (_BinaryenLaneselectI16x8 = Module["_BinaryenLaneselectI16x8"] = wasmExports["pi"])();

var _BinaryenLaneselectI32x4 = Module["_BinaryenLaneselectI32x4"] = () => (_BinaryenLaneselectI32x4 = Module["_BinaryenLaneselectI32x4"] = wasmExports["qi"])();

var _BinaryenLaneselectI64x2 = Module["_BinaryenLaneselectI64x2"] = () => (_BinaryenLaneselectI64x2 = Module["_BinaryenLaneselectI64x2"] = wasmExports["ri"])();

var _BinaryenDotI8x16I7x16AddSToVecI32x4 = Module["_BinaryenDotI8x16I7x16AddSToVecI32x4"] = () => (_BinaryenDotI8x16I7x16AddSToVecI32x4 = Module["_BinaryenDotI8x16I7x16AddSToVecI32x4"] = wasmExports["si"])();

var _BinaryenAnyTrueVec128 = Module["_BinaryenAnyTrueVec128"] = () => (_BinaryenAnyTrueVec128 = Module["_BinaryenAnyTrueVec128"] = wasmExports["ti"])();

var _BinaryenAbsVecI8x16 = Module["_BinaryenAbsVecI8x16"] = () => (_BinaryenAbsVecI8x16 = Module["_BinaryenAbsVecI8x16"] = wasmExports["ui"])();

var _BinaryenNegVecI8x16 = Module["_BinaryenNegVecI8x16"] = () => (_BinaryenNegVecI8x16 = Module["_BinaryenNegVecI8x16"] = wasmExports["vi"])();

var _BinaryenAllTrueVecI8x16 = Module["_BinaryenAllTrueVecI8x16"] = () => (_BinaryenAllTrueVecI8x16 = Module["_BinaryenAllTrueVecI8x16"] = wasmExports["wi"])();

var _BinaryenBitmaskVecI8x16 = Module["_BinaryenBitmaskVecI8x16"] = () => (_BinaryenBitmaskVecI8x16 = Module["_BinaryenBitmaskVecI8x16"] = wasmExports["xi"])();

var _BinaryenPopcntVecI8x16 = Module["_BinaryenPopcntVecI8x16"] = () => (_BinaryenPopcntVecI8x16 = Module["_BinaryenPopcntVecI8x16"] = wasmExports["yi"])();

var _BinaryenShlVecI8x16 = Module["_BinaryenShlVecI8x16"] = () => (_BinaryenShlVecI8x16 = Module["_BinaryenShlVecI8x16"] = wasmExports["zi"])();

var _BinaryenShrSVecI8x16 = Module["_BinaryenShrSVecI8x16"] = () => (_BinaryenShrSVecI8x16 = Module["_BinaryenShrSVecI8x16"] = wasmExports["Ai"])();

var _BinaryenShrUVecI8x16 = Module["_BinaryenShrUVecI8x16"] = () => (_BinaryenShrUVecI8x16 = Module["_BinaryenShrUVecI8x16"] = wasmExports["Bi"])();

var _BinaryenAddVecI8x16 = Module["_BinaryenAddVecI8x16"] = () => (_BinaryenAddVecI8x16 = Module["_BinaryenAddVecI8x16"] = wasmExports["Ci"])();

var _BinaryenAddSatSVecI8x16 = Module["_BinaryenAddSatSVecI8x16"] = () => (_BinaryenAddSatSVecI8x16 = Module["_BinaryenAddSatSVecI8x16"] = wasmExports["Di"])();

var _BinaryenAddSatUVecI8x16 = Module["_BinaryenAddSatUVecI8x16"] = () => (_BinaryenAddSatUVecI8x16 = Module["_BinaryenAddSatUVecI8x16"] = wasmExports["Ei"])();

var _BinaryenSubVecI8x16 = Module["_BinaryenSubVecI8x16"] = () => (_BinaryenSubVecI8x16 = Module["_BinaryenSubVecI8x16"] = wasmExports["Fi"])();

var _BinaryenSubSatSVecI8x16 = Module["_BinaryenSubSatSVecI8x16"] = () => (_BinaryenSubSatSVecI8x16 = Module["_BinaryenSubSatSVecI8x16"] = wasmExports["Gi"])();

var _BinaryenSubSatUVecI8x16 = Module["_BinaryenSubSatUVecI8x16"] = () => (_BinaryenSubSatUVecI8x16 = Module["_BinaryenSubSatUVecI8x16"] = wasmExports["Hi"])();

var _BinaryenMinSVecI8x16 = Module["_BinaryenMinSVecI8x16"] = () => (_BinaryenMinSVecI8x16 = Module["_BinaryenMinSVecI8x16"] = wasmExports["Ii"])();

var _BinaryenMinUVecI8x16 = Module["_BinaryenMinUVecI8x16"] = () => (_BinaryenMinUVecI8x16 = Module["_BinaryenMinUVecI8x16"] = wasmExports["Ji"])();

var _BinaryenMaxSVecI8x16 = Module["_BinaryenMaxSVecI8x16"] = () => (_BinaryenMaxSVecI8x16 = Module["_BinaryenMaxSVecI8x16"] = wasmExports["Ki"])();

var _BinaryenMaxUVecI8x16 = Module["_BinaryenMaxUVecI8x16"] = () => (_BinaryenMaxUVecI8x16 = Module["_BinaryenMaxUVecI8x16"] = wasmExports["Li"])();

var _BinaryenAvgrUVecI8x16 = Module["_BinaryenAvgrUVecI8x16"] = () => (_BinaryenAvgrUVecI8x16 = Module["_BinaryenAvgrUVecI8x16"] = wasmExports["Mi"])();

var _BinaryenAbsVecI16x8 = Module["_BinaryenAbsVecI16x8"] = () => (_BinaryenAbsVecI16x8 = Module["_BinaryenAbsVecI16x8"] = wasmExports["Ni"])();

var _BinaryenNegVecI16x8 = Module["_BinaryenNegVecI16x8"] = () => (_BinaryenNegVecI16x8 = Module["_BinaryenNegVecI16x8"] = wasmExports["Oi"])();

var _BinaryenAllTrueVecI16x8 = Module["_BinaryenAllTrueVecI16x8"] = () => (_BinaryenAllTrueVecI16x8 = Module["_BinaryenAllTrueVecI16x8"] = wasmExports["Pi"])();

var _BinaryenBitmaskVecI16x8 = Module["_BinaryenBitmaskVecI16x8"] = () => (_BinaryenBitmaskVecI16x8 = Module["_BinaryenBitmaskVecI16x8"] = wasmExports["Qi"])();

var _BinaryenShlVecI16x8 = Module["_BinaryenShlVecI16x8"] = () => (_BinaryenShlVecI16x8 = Module["_BinaryenShlVecI16x8"] = wasmExports["Ri"])();

var _BinaryenShrSVecI16x8 = Module["_BinaryenShrSVecI16x8"] = () => (_BinaryenShrSVecI16x8 = Module["_BinaryenShrSVecI16x8"] = wasmExports["Si"])();

var _BinaryenShrUVecI16x8 = Module["_BinaryenShrUVecI16x8"] = () => (_BinaryenShrUVecI16x8 = Module["_BinaryenShrUVecI16x8"] = wasmExports["Ti"])();

var _BinaryenAddVecI16x8 = Module["_BinaryenAddVecI16x8"] = () => (_BinaryenAddVecI16x8 = Module["_BinaryenAddVecI16x8"] = wasmExports["Ui"])();

var _BinaryenAddSatSVecI16x8 = Module["_BinaryenAddSatSVecI16x8"] = () => (_BinaryenAddSatSVecI16x8 = Module["_BinaryenAddSatSVecI16x8"] = wasmExports["Vi"])();

var _BinaryenAddSatUVecI16x8 = Module["_BinaryenAddSatUVecI16x8"] = () => (_BinaryenAddSatUVecI16x8 = Module["_BinaryenAddSatUVecI16x8"] = wasmExports["Wi"])();

var _BinaryenSubVecI16x8 = Module["_BinaryenSubVecI16x8"] = () => (_BinaryenSubVecI16x8 = Module["_BinaryenSubVecI16x8"] = wasmExports["Xi"])();

var _BinaryenSubSatSVecI16x8 = Module["_BinaryenSubSatSVecI16x8"] = () => (_BinaryenSubSatSVecI16x8 = Module["_BinaryenSubSatSVecI16x8"] = wasmExports["Yi"])();

var _BinaryenSubSatUVecI16x8 = Module["_BinaryenSubSatUVecI16x8"] = () => (_BinaryenSubSatUVecI16x8 = Module["_BinaryenSubSatUVecI16x8"] = wasmExports["Zi"])();

var _BinaryenMulVecI16x8 = Module["_BinaryenMulVecI16x8"] = () => (_BinaryenMulVecI16x8 = Module["_BinaryenMulVecI16x8"] = wasmExports["_i"])();

var _BinaryenMinSVecI16x8 = Module["_BinaryenMinSVecI16x8"] = () => (_BinaryenMinSVecI16x8 = Module["_BinaryenMinSVecI16x8"] = wasmExports["$i"])();

var _BinaryenMinUVecI16x8 = Module["_BinaryenMinUVecI16x8"] = () => (_BinaryenMinUVecI16x8 = Module["_BinaryenMinUVecI16x8"] = wasmExports["aj"])();

var _BinaryenMaxSVecI16x8 = Module["_BinaryenMaxSVecI16x8"] = () => (_BinaryenMaxSVecI16x8 = Module["_BinaryenMaxSVecI16x8"] = wasmExports["bj"])();

var _BinaryenMaxUVecI16x8 = Module["_BinaryenMaxUVecI16x8"] = () => (_BinaryenMaxUVecI16x8 = Module["_BinaryenMaxUVecI16x8"] = wasmExports["cj"])();

var _BinaryenAvgrUVecI16x8 = Module["_BinaryenAvgrUVecI16x8"] = () => (_BinaryenAvgrUVecI16x8 = Module["_BinaryenAvgrUVecI16x8"] = wasmExports["dj"])();

var _BinaryenQ15MulrSatSVecI16x8 = Module["_BinaryenQ15MulrSatSVecI16x8"] = () => (_BinaryenQ15MulrSatSVecI16x8 = Module["_BinaryenQ15MulrSatSVecI16x8"] = wasmExports["ej"])();

var _BinaryenExtMulLowSVecI16x8 = Module["_BinaryenExtMulLowSVecI16x8"] = () => (_BinaryenExtMulLowSVecI16x8 = Module["_BinaryenExtMulLowSVecI16x8"] = wasmExports["fj"])();

var _BinaryenExtMulHighSVecI16x8 = Module["_BinaryenExtMulHighSVecI16x8"] = () => (_BinaryenExtMulHighSVecI16x8 = Module["_BinaryenExtMulHighSVecI16x8"] = wasmExports["gj"])();

var _BinaryenExtMulLowUVecI16x8 = Module["_BinaryenExtMulLowUVecI16x8"] = () => (_BinaryenExtMulLowUVecI16x8 = Module["_BinaryenExtMulLowUVecI16x8"] = wasmExports["hj"])();

var _BinaryenExtMulHighUVecI16x8 = Module["_BinaryenExtMulHighUVecI16x8"] = () => (_BinaryenExtMulHighUVecI16x8 = Module["_BinaryenExtMulHighUVecI16x8"] = wasmExports["ij"])();

var _BinaryenAbsVecI32x4 = Module["_BinaryenAbsVecI32x4"] = () => (_BinaryenAbsVecI32x4 = Module["_BinaryenAbsVecI32x4"] = wasmExports["jj"])();

var _BinaryenNegVecI32x4 = Module["_BinaryenNegVecI32x4"] = () => (_BinaryenNegVecI32x4 = Module["_BinaryenNegVecI32x4"] = wasmExports["kj"])();

var _BinaryenAllTrueVecI32x4 = Module["_BinaryenAllTrueVecI32x4"] = () => (_BinaryenAllTrueVecI32x4 = Module["_BinaryenAllTrueVecI32x4"] = wasmExports["lj"])();

var _BinaryenBitmaskVecI32x4 = Module["_BinaryenBitmaskVecI32x4"] = () => (_BinaryenBitmaskVecI32x4 = Module["_BinaryenBitmaskVecI32x4"] = wasmExports["mj"])();

var _BinaryenShlVecI32x4 = Module["_BinaryenShlVecI32x4"] = () => (_BinaryenShlVecI32x4 = Module["_BinaryenShlVecI32x4"] = wasmExports["nj"])();

var _BinaryenShrSVecI32x4 = Module["_BinaryenShrSVecI32x4"] = () => (_BinaryenShrSVecI32x4 = Module["_BinaryenShrSVecI32x4"] = wasmExports["oj"])();

var _BinaryenShrUVecI32x4 = Module["_BinaryenShrUVecI32x4"] = () => (_BinaryenShrUVecI32x4 = Module["_BinaryenShrUVecI32x4"] = wasmExports["pj"])();

var _BinaryenAddVecI32x4 = Module["_BinaryenAddVecI32x4"] = () => (_BinaryenAddVecI32x4 = Module["_BinaryenAddVecI32x4"] = wasmExports["qj"])();

var _BinaryenSubVecI32x4 = Module["_BinaryenSubVecI32x4"] = () => (_BinaryenSubVecI32x4 = Module["_BinaryenSubVecI32x4"] = wasmExports["rj"])();

var _BinaryenMulVecI32x4 = Module["_BinaryenMulVecI32x4"] = () => (_BinaryenMulVecI32x4 = Module["_BinaryenMulVecI32x4"] = wasmExports["sj"])();

var _BinaryenMinSVecI32x4 = Module["_BinaryenMinSVecI32x4"] = () => (_BinaryenMinSVecI32x4 = Module["_BinaryenMinSVecI32x4"] = wasmExports["tj"])();

var _BinaryenMinUVecI32x4 = Module["_BinaryenMinUVecI32x4"] = () => (_BinaryenMinUVecI32x4 = Module["_BinaryenMinUVecI32x4"] = wasmExports["uj"])();

var _BinaryenMaxSVecI32x4 = Module["_BinaryenMaxSVecI32x4"] = () => (_BinaryenMaxSVecI32x4 = Module["_BinaryenMaxSVecI32x4"] = wasmExports["vj"])();

var _BinaryenMaxUVecI32x4 = Module["_BinaryenMaxUVecI32x4"] = () => (_BinaryenMaxUVecI32x4 = Module["_BinaryenMaxUVecI32x4"] = wasmExports["wj"])();

var _BinaryenDotSVecI16x8ToVecI32x4 = Module["_BinaryenDotSVecI16x8ToVecI32x4"] = () => (_BinaryenDotSVecI16x8ToVecI32x4 = Module["_BinaryenDotSVecI16x8ToVecI32x4"] = wasmExports["xj"])();

var _BinaryenExtMulLowSVecI32x4 = Module["_BinaryenExtMulLowSVecI32x4"] = () => (_BinaryenExtMulLowSVecI32x4 = Module["_BinaryenExtMulLowSVecI32x4"] = wasmExports["yj"])();

var _BinaryenExtMulHighSVecI32x4 = Module["_BinaryenExtMulHighSVecI32x4"] = () => (_BinaryenExtMulHighSVecI32x4 = Module["_BinaryenExtMulHighSVecI32x4"] = wasmExports["zj"])();

var _BinaryenExtMulLowUVecI32x4 = Module["_BinaryenExtMulLowUVecI32x4"] = () => (_BinaryenExtMulLowUVecI32x4 = Module["_BinaryenExtMulLowUVecI32x4"] = wasmExports["Aj"])();

var _BinaryenExtMulHighUVecI32x4 = Module["_BinaryenExtMulHighUVecI32x4"] = () => (_BinaryenExtMulHighUVecI32x4 = Module["_BinaryenExtMulHighUVecI32x4"] = wasmExports["Bj"])();

var _BinaryenAbsVecI64x2 = Module["_BinaryenAbsVecI64x2"] = () => (_BinaryenAbsVecI64x2 = Module["_BinaryenAbsVecI64x2"] = wasmExports["Cj"])();

var _BinaryenNegVecI64x2 = Module["_BinaryenNegVecI64x2"] = () => (_BinaryenNegVecI64x2 = Module["_BinaryenNegVecI64x2"] = wasmExports["Dj"])();

var _BinaryenAllTrueVecI64x2 = Module["_BinaryenAllTrueVecI64x2"] = () => (_BinaryenAllTrueVecI64x2 = Module["_BinaryenAllTrueVecI64x2"] = wasmExports["Ej"])();

var _BinaryenBitmaskVecI64x2 = Module["_BinaryenBitmaskVecI64x2"] = () => (_BinaryenBitmaskVecI64x2 = Module["_BinaryenBitmaskVecI64x2"] = wasmExports["Fj"])();

var _BinaryenShlVecI64x2 = Module["_BinaryenShlVecI64x2"] = () => (_BinaryenShlVecI64x2 = Module["_BinaryenShlVecI64x2"] = wasmExports["Gj"])();

var _BinaryenShrSVecI64x2 = Module["_BinaryenShrSVecI64x2"] = () => (_BinaryenShrSVecI64x2 = Module["_BinaryenShrSVecI64x2"] = wasmExports["Hj"])();

var _BinaryenShrUVecI64x2 = Module["_BinaryenShrUVecI64x2"] = () => (_BinaryenShrUVecI64x2 = Module["_BinaryenShrUVecI64x2"] = wasmExports["Ij"])();

var _BinaryenAddVecI64x2 = Module["_BinaryenAddVecI64x2"] = () => (_BinaryenAddVecI64x2 = Module["_BinaryenAddVecI64x2"] = wasmExports["Jj"])();

var _BinaryenSubVecI64x2 = Module["_BinaryenSubVecI64x2"] = () => (_BinaryenSubVecI64x2 = Module["_BinaryenSubVecI64x2"] = wasmExports["Kj"])();

var _BinaryenMulVecI64x2 = Module["_BinaryenMulVecI64x2"] = () => (_BinaryenMulVecI64x2 = Module["_BinaryenMulVecI64x2"] = wasmExports["Lj"])();

var _BinaryenExtMulLowSVecI64x2 = Module["_BinaryenExtMulLowSVecI64x2"] = () => (_BinaryenExtMulLowSVecI64x2 = Module["_BinaryenExtMulLowSVecI64x2"] = wasmExports["Mj"])();

var _BinaryenExtMulHighSVecI64x2 = Module["_BinaryenExtMulHighSVecI64x2"] = () => (_BinaryenExtMulHighSVecI64x2 = Module["_BinaryenExtMulHighSVecI64x2"] = wasmExports["Nj"])();

var _BinaryenExtMulLowUVecI64x2 = Module["_BinaryenExtMulLowUVecI64x2"] = () => (_BinaryenExtMulLowUVecI64x2 = Module["_BinaryenExtMulLowUVecI64x2"] = wasmExports["Oj"])();

var _BinaryenExtMulHighUVecI64x2 = Module["_BinaryenExtMulHighUVecI64x2"] = () => (_BinaryenExtMulHighUVecI64x2 = Module["_BinaryenExtMulHighUVecI64x2"] = wasmExports["Pj"])();

var _BinaryenAbsVecF32x4 = Module["_BinaryenAbsVecF32x4"] = () => (_BinaryenAbsVecF32x4 = Module["_BinaryenAbsVecF32x4"] = wasmExports["Qj"])();

var _BinaryenNegVecF32x4 = Module["_BinaryenNegVecF32x4"] = () => (_BinaryenNegVecF32x4 = Module["_BinaryenNegVecF32x4"] = wasmExports["Rj"])();

var _BinaryenSqrtVecF32x4 = Module["_BinaryenSqrtVecF32x4"] = () => (_BinaryenSqrtVecF32x4 = Module["_BinaryenSqrtVecF32x4"] = wasmExports["Sj"])();

var _BinaryenAddVecF32x4 = Module["_BinaryenAddVecF32x4"] = () => (_BinaryenAddVecF32x4 = Module["_BinaryenAddVecF32x4"] = wasmExports["Tj"])();

var _BinaryenSubVecF32x4 = Module["_BinaryenSubVecF32x4"] = () => (_BinaryenSubVecF32x4 = Module["_BinaryenSubVecF32x4"] = wasmExports["Uj"])();

var _BinaryenMulVecF32x4 = Module["_BinaryenMulVecF32x4"] = () => (_BinaryenMulVecF32x4 = Module["_BinaryenMulVecF32x4"] = wasmExports["Vj"])();

var _BinaryenDivVecF32x4 = Module["_BinaryenDivVecF32x4"] = () => (_BinaryenDivVecF32x4 = Module["_BinaryenDivVecF32x4"] = wasmExports["Wj"])();

var _BinaryenMinVecF32x4 = Module["_BinaryenMinVecF32x4"] = () => (_BinaryenMinVecF32x4 = Module["_BinaryenMinVecF32x4"] = wasmExports["Xj"])();

var _BinaryenMaxVecF32x4 = Module["_BinaryenMaxVecF32x4"] = () => (_BinaryenMaxVecF32x4 = Module["_BinaryenMaxVecF32x4"] = wasmExports["Yj"])();

var _BinaryenPMinVecF32x4 = Module["_BinaryenPMinVecF32x4"] = () => (_BinaryenPMinVecF32x4 = Module["_BinaryenPMinVecF32x4"] = wasmExports["Zj"])();

var _BinaryenCeilVecF32x4 = Module["_BinaryenCeilVecF32x4"] = () => (_BinaryenCeilVecF32x4 = Module["_BinaryenCeilVecF32x4"] = wasmExports["_j"])();

var _BinaryenFloorVecF32x4 = Module["_BinaryenFloorVecF32x4"] = () => (_BinaryenFloorVecF32x4 = Module["_BinaryenFloorVecF32x4"] = wasmExports["$j"])();

var _BinaryenTruncVecF32x4 = Module["_BinaryenTruncVecF32x4"] = () => (_BinaryenTruncVecF32x4 = Module["_BinaryenTruncVecF32x4"] = wasmExports["ak"])();

var _BinaryenNearestVecF32x4 = Module["_BinaryenNearestVecF32x4"] = () => (_BinaryenNearestVecF32x4 = Module["_BinaryenNearestVecF32x4"] = wasmExports["bk"])();

var _BinaryenPMaxVecF32x4 = Module["_BinaryenPMaxVecF32x4"] = () => (_BinaryenPMaxVecF32x4 = Module["_BinaryenPMaxVecF32x4"] = wasmExports["ck"])();

var _BinaryenAbsVecF64x2 = Module["_BinaryenAbsVecF64x2"] = () => (_BinaryenAbsVecF64x2 = Module["_BinaryenAbsVecF64x2"] = wasmExports["dk"])();

var _BinaryenNegVecF64x2 = Module["_BinaryenNegVecF64x2"] = () => (_BinaryenNegVecF64x2 = Module["_BinaryenNegVecF64x2"] = wasmExports["ek"])();

var _BinaryenSqrtVecF64x2 = Module["_BinaryenSqrtVecF64x2"] = () => (_BinaryenSqrtVecF64x2 = Module["_BinaryenSqrtVecF64x2"] = wasmExports["fk"])();

var _BinaryenAddVecF64x2 = Module["_BinaryenAddVecF64x2"] = () => (_BinaryenAddVecF64x2 = Module["_BinaryenAddVecF64x2"] = wasmExports["gk"])();

var _BinaryenSubVecF64x2 = Module["_BinaryenSubVecF64x2"] = () => (_BinaryenSubVecF64x2 = Module["_BinaryenSubVecF64x2"] = wasmExports["hk"])();

var _BinaryenMulVecF64x2 = Module["_BinaryenMulVecF64x2"] = () => (_BinaryenMulVecF64x2 = Module["_BinaryenMulVecF64x2"] = wasmExports["ik"])();

var _BinaryenDivVecF64x2 = Module["_BinaryenDivVecF64x2"] = () => (_BinaryenDivVecF64x2 = Module["_BinaryenDivVecF64x2"] = wasmExports["jk"])();

var _BinaryenMinVecF64x2 = Module["_BinaryenMinVecF64x2"] = () => (_BinaryenMinVecF64x2 = Module["_BinaryenMinVecF64x2"] = wasmExports["kk"])();

var _BinaryenMaxVecF64x2 = Module["_BinaryenMaxVecF64x2"] = () => (_BinaryenMaxVecF64x2 = Module["_BinaryenMaxVecF64x2"] = wasmExports["lk"])();

var _BinaryenPMinVecF64x2 = Module["_BinaryenPMinVecF64x2"] = () => (_BinaryenPMinVecF64x2 = Module["_BinaryenPMinVecF64x2"] = wasmExports["mk"])();

var _BinaryenPMaxVecF64x2 = Module["_BinaryenPMaxVecF64x2"] = () => (_BinaryenPMaxVecF64x2 = Module["_BinaryenPMaxVecF64x2"] = wasmExports["nk"])();

var _BinaryenCeilVecF64x2 = Module["_BinaryenCeilVecF64x2"] = () => (_BinaryenCeilVecF64x2 = Module["_BinaryenCeilVecF64x2"] = wasmExports["ok"])();

var _BinaryenFloorVecF64x2 = Module["_BinaryenFloorVecF64x2"] = () => (_BinaryenFloorVecF64x2 = Module["_BinaryenFloorVecF64x2"] = wasmExports["pk"])();

var _BinaryenTruncVecF64x2 = Module["_BinaryenTruncVecF64x2"] = () => (_BinaryenTruncVecF64x2 = Module["_BinaryenTruncVecF64x2"] = wasmExports["qk"])();

var _BinaryenNearestVecF64x2 = Module["_BinaryenNearestVecF64x2"] = () => (_BinaryenNearestVecF64x2 = Module["_BinaryenNearestVecF64x2"] = wasmExports["rk"])();

var _BinaryenExtAddPairwiseSVecI8x16ToI16x8 = Module["_BinaryenExtAddPairwiseSVecI8x16ToI16x8"] = () => (_BinaryenExtAddPairwiseSVecI8x16ToI16x8 = Module["_BinaryenExtAddPairwiseSVecI8x16ToI16x8"] = wasmExports["sk"])();

var _BinaryenExtAddPairwiseUVecI8x16ToI16x8 = Module["_BinaryenExtAddPairwiseUVecI8x16ToI16x8"] = () => (_BinaryenExtAddPairwiseUVecI8x16ToI16x8 = Module["_BinaryenExtAddPairwiseUVecI8x16ToI16x8"] = wasmExports["tk"])();

var _BinaryenExtAddPairwiseSVecI16x8ToI32x4 = Module["_BinaryenExtAddPairwiseSVecI16x8ToI32x4"] = () => (_BinaryenExtAddPairwiseSVecI16x8ToI32x4 = Module["_BinaryenExtAddPairwiseSVecI16x8ToI32x4"] = wasmExports["uk"])();

var _BinaryenExtAddPairwiseUVecI16x8ToI32x4 = Module["_BinaryenExtAddPairwiseUVecI16x8ToI32x4"] = () => (_BinaryenExtAddPairwiseUVecI16x8ToI32x4 = Module["_BinaryenExtAddPairwiseUVecI16x8ToI32x4"] = wasmExports["vk"])();

var _BinaryenTruncSatSVecF32x4ToVecI32x4 = Module["_BinaryenTruncSatSVecF32x4ToVecI32x4"] = () => (_BinaryenTruncSatSVecF32x4ToVecI32x4 = Module["_BinaryenTruncSatSVecF32x4ToVecI32x4"] = wasmExports["wk"])();

var _BinaryenTruncSatUVecF32x4ToVecI32x4 = Module["_BinaryenTruncSatUVecF32x4ToVecI32x4"] = () => (_BinaryenTruncSatUVecF32x4ToVecI32x4 = Module["_BinaryenTruncSatUVecF32x4ToVecI32x4"] = wasmExports["xk"])();

var _BinaryenConvertSVecI32x4ToVecF32x4 = Module["_BinaryenConvertSVecI32x4ToVecF32x4"] = () => (_BinaryenConvertSVecI32x4ToVecF32x4 = Module["_BinaryenConvertSVecI32x4ToVecF32x4"] = wasmExports["yk"])();

var _BinaryenConvertUVecI32x4ToVecF32x4 = Module["_BinaryenConvertUVecI32x4ToVecF32x4"] = () => (_BinaryenConvertUVecI32x4ToVecF32x4 = Module["_BinaryenConvertUVecI32x4ToVecF32x4"] = wasmExports["zk"])();

var _BinaryenLoad8SplatVec128 = Module["_BinaryenLoad8SplatVec128"] = () => (_BinaryenLoad8SplatVec128 = Module["_BinaryenLoad8SplatVec128"] = wasmExports["Ak"])();

var _BinaryenLoad16SplatVec128 = Module["_BinaryenLoad16SplatVec128"] = () => (_BinaryenLoad16SplatVec128 = Module["_BinaryenLoad16SplatVec128"] = wasmExports["Bk"])();

var _BinaryenLoad32SplatVec128 = Module["_BinaryenLoad32SplatVec128"] = () => (_BinaryenLoad32SplatVec128 = Module["_BinaryenLoad32SplatVec128"] = wasmExports["Ck"])();

var _BinaryenLoad64SplatVec128 = Module["_BinaryenLoad64SplatVec128"] = () => (_BinaryenLoad64SplatVec128 = Module["_BinaryenLoad64SplatVec128"] = wasmExports["Dk"])();

var _BinaryenLoad8x8SVec128 = Module["_BinaryenLoad8x8SVec128"] = () => (_BinaryenLoad8x8SVec128 = Module["_BinaryenLoad8x8SVec128"] = wasmExports["Ek"])();

var _BinaryenLoad8x8UVec128 = Module["_BinaryenLoad8x8UVec128"] = () => (_BinaryenLoad8x8UVec128 = Module["_BinaryenLoad8x8UVec128"] = wasmExports["Fk"])();

var _BinaryenLoad16x4SVec128 = Module["_BinaryenLoad16x4SVec128"] = () => (_BinaryenLoad16x4SVec128 = Module["_BinaryenLoad16x4SVec128"] = wasmExports["Gk"])();

var _BinaryenLoad16x4UVec128 = Module["_BinaryenLoad16x4UVec128"] = () => (_BinaryenLoad16x4UVec128 = Module["_BinaryenLoad16x4UVec128"] = wasmExports["Hk"])();

var _BinaryenLoad32x2SVec128 = Module["_BinaryenLoad32x2SVec128"] = () => (_BinaryenLoad32x2SVec128 = Module["_BinaryenLoad32x2SVec128"] = wasmExports["Ik"])();

var _BinaryenLoad32x2UVec128 = Module["_BinaryenLoad32x2UVec128"] = () => (_BinaryenLoad32x2UVec128 = Module["_BinaryenLoad32x2UVec128"] = wasmExports["Jk"])();

var _BinaryenLoad32ZeroVec128 = Module["_BinaryenLoad32ZeroVec128"] = () => (_BinaryenLoad32ZeroVec128 = Module["_BinaryenLoad32ZeroVec128"] = wasmExports["Kk"])();

var _BinaryenLoad64ZeroVec128 = Module["_BinaryenLoad64ZeroVec128"] = () => (_BinaryenLoad64ZeroVec128 = Module["_BinaryenLoad64ZeroVec128"] = wasmExports["Lk"])();

var _BinaryenLoad8LaneVec128 = Module["_BinaryenLoad8LaneVec128"] = () => (_BinaryenLoad8LaneVec128 = Module["_BinaryenLoad8LaneVec128"] = wasmExports["Mk"])();

var _BinaryenLoad16LaneVec128 = Module["_BinaryenLoad16LaneVec128"] = () => (_BinaryenLoad16LaneVec128 = Module["_BinaryenLoad16LaneVec128"] = wasmExports["Nk"])();

var _BinaryenLoad32LaneVec128 = Module["_BinaryenLoad32LaneVec128"] = () => (_BinaryenLoad32LaneVec128 = Module["_BinaryenLoad32LaneVec128"] = wasmExports["Ok"])();

var _BinaryenLoad64LaneVec128 = Module["_BinaryenLoad64LaneVec128"] = () => (_BinaryenLoad64LaneVec128 = Module["_BinaryenLoad64LaneVec128"] = wasmExports["Pk"])();

var _BinaryenStore8LaneVec128 = Module["_BinaryenStore8LaneVec128"] = () => (_BinaryenStore8LaneVec128 = Module["_BinaryenStore8LaneVec128"] = wasmExports["Qk"])();

var _BinaryenStore16LaneVec128 = Module["_BinaryenStore16LaneVec128"] = () => (_BinaryenStore16LaneVec128 = Module["_BinaryenStore16LaneVec128"] = wasmExports["Rk"])();

var _BinaryenStore32LaneVec128 = Module["_BinaryenStore32LaneVec128"] = () => (_BinaryenStore32LaneVec128 = Module["_BinaryenStore32LaneVec128"] = wasmExports["Sk"])();

var _BinaryenStore64LaneVec128 = Module["_BinaryenStore64LaneVec128"] = () => (_BinaryenStore64LaneVec128 = Module["_BinaryenStore64LaneVec128"] = wasmExports["Tk"])();

var _BinaryenNarrowSVecI16x8ToVecI8x16 = Module["_BinaryenNarrowSVecI16x8ToVecI8x16"] = () => (_BinaryenNarrowSVecI16x8ToVecI8x16 = Module["_BinaryenNarrowSVecI16x8ToVecI8x16"] = wasmExports["Uk"])();

var _BinaryenNarrowUVecI16x8ToVecI8x16 = Module["_BinaryenNarrowUVecI16x8ToVecI8x16"] = () => (_BinaryenNarrowUVecI16x8ToVecI8x16 = Module["_BinaryenNarrowUVecI16x8ToVecI8x16"] = wasmExports["Vk"])();

var _BinaryenNarrowSVecI32x4ToVecI16x8 = Module["_BinaryenNarrowSVecI32x4ToVecI16x8"] = () => (_BinaryenNarrowSVecI32x4ToVecI16x8 = Module["_BinaryenNarrowSVecI32x4ToVecI16x8"] = wasmExports["Wk"])();

var _BinaryenNarrowUVecI32x4ToVecI16x8 = Module["_BinaryenNarrowUVecI32x4ToVecI16x8"] = () => (_BinaryenNarrowUVecI32x4ToVecI16x8 = Module["_BinaryenNarrowUVecI32x4ToVecI16x8"] = wasmExports["Xk"])();

var _BinaryenExtendLowSVecI8x16ToVecI16x8 = Module["_BinaryenExtendLowSVecI8x16ToVecI16x8"] = () => (_BinaryenExtendLowSVecI8x16ToVecI16x8 = Module["_BinaryenExtendLowSVecI8x16ToVecI16x8"] = wasmExports["Yk"])();

var _BinaryenExtendHighSVecI8x16ToVecI16x8 = Module["_BinaryenExtendHighSVecI8x16ToVecI16x8"] = () => (_BinaryenExtendHighSVecI8x16ToVecI16x8 = Module["_BinaryenExtendHighSVecI8x16ToVecI16x8"] = wasmExports["Zk"])();

var _BinaryenExtendLowUVecI8x16ToVecI16x8 = Module["_BinaryenExtendLowUVecI8x16ToVecI16x8"] = () => (_BinaryenExtendLowUVecI8x16ToVecI16x8 = Module["_BinaryenExtendLowUVecI8x16ToVecI16x8"] = wasmExports["_k"])();

var _BinaryenExtendHighUVecI8x16ToVecI16x8 = Module["_BinaryenExtendHighUVecI8x16ToVecI16x8"] = () => (_BinaryenExtendHighUVecI8x16ToVecI16x8 = Module["_BinaryenExtendHighUVecI8x16ToVecI16x8"] = wasmExports["$k"])();

var _BinaryenExtendLowSVecI16x8ToVecI32x4 = Module["_BinaryenExtendLowSVecI16x8ToVecI32x4"] = () => (_BinaryenExtendLowSVecI16x8ToVecI32x4 = Module["_BinaryenExtendLowSVecI16x8ToVecI32x4"] = wasmExports["al"])();

var _BinaryenExtendHighSVecI16x8ToVecI32x4 = Module["_BinaryenExtendHighSVecI16x8ToVecI32x4"] = () => (_BinaryenExtendHighSVecI16x8ToVecI32x4 = Module["_BinaryenExtendHighSVecI16x8ToVecI32x4"] = wasmExports["bl"])();

var _BinaryenExtendLowUVecI16x8ToVecI32x4 = Module["_BinaryenExtendLowUVecI16x8ToVecI32x4"] = () => (_BinaryenExtendLowUVecI16x8ToVecI32x4 = Module["_BinaryenExtendLowUVecI16x8ToVecI32x4"] = wasmExports["cl"])();

var _BinaryenExtendHighUVecI16x8ToVecI32x4 = Module["_BinaryenExtendHighUVecI16x8ToVecI32x4"] = () => (_BinaryenExtendHighUVecI16x8ToVecI32x4 = Module["_BinaryenExtendHighUVecI16x8ToVecI32x4"] = wasmExports["dl"])();

var _BinaryenExtendLowSVecI32x4ToVecI64x2 = Module["_BinaryenExtendLowSVecI32x4ToVecI64x2"] = () => (_BinaryenExtendLowSVecI32x4ToVecI64x2 = Module["_BinaryenExtendLowSVecI32x4ToVecI64x2"] = wasmExports["el"])();

var _BinaryenExtendHighSVecI32x4ToVecI64x2 = Module["_BinaryenExtendHighSVecI32x4ToVecI64x2"] = () => (_BinaryenExtendHighSVecI32x4ToVecI64x2 = Module["_BinaryenExtendHighSVecI32x4ToVecI64x2"] = wasmExports["fl"])();

var _BinaryenExtendLowUVecI32x4ToVecI64x2 = Module["_BinaryenExtendLowUVecI32x4ToVecI64x2"] = () => (_BinaryenExtendLowUVecI32x4ToVecI64x2 = Module["_BinaryenExtendLowUVecI32x4ToVecI64x2"] = wasmExports["gl"])();

var _BinaryenExtendHighUVecI32x4ToVecI64x2 = Module["_BinaryenExtendHighUVecI32x4ToVecI64x2"] = () => (_BinaryenExtendHighUVecI32x4ToVecI64x2 = Module["_BinaryenExtendHighUVecI32x4ToVecI64x2"] = wasmExports["hl"])();

var _BinaryenConvertLowSVecI32x4ToVecF64x2 = Module["_BinaryenConvertLowSVecI32x4ToVecF64x2"] = () => (_BinaryenConvertLowSVecI32x4ToVecF64x2 = Module["_BinaryenConvertLowSVecI32x4ToVecF64x2"] = wasmExports["il"])();

var _BinaryenConvertLowUVecI32x4ToVecF64x2 = Module["_BinaryenConvertLowUVecI32x4ToVecF64x2"] = () => (_BinaryenConvertLowUVecI32x4ToVecF64x2 = Module["_BinaryenConvertLowUVecI32x4ToVecF64x2"] = wasmExports["jl"])();

var _BinaryenTruncSatZeroSVecF64x2ToVecI32x4 = Module["_BinaryenTruncSatZeroSVecF64x2ToVecI32x4"] = () => (_BinaryenTruncSatZeroSVecF64x2ToVecI32x4 = Module["_BinaryenTruncSatZeroSVecF64x2ToVecI32x4"] = wasmExports["kl"])();

var _BinaryenTruncSatZeroUVecF64x2ToVecI32x4 = Module["_BinaryenTruncSatZeroUVecF64x2ToVecI32x4"] = () => (_BinaryenTruncSatZeroUVecF64x2ToVecI32x4 = Module["_BinaryenTruncSatZeroUVecF64x2ToVecI32x4"] = wasmExports["ll"])();

var _BinaryenDemoteZeroVecF64x2ToVecF32x4 = Module["_BinaryenDemoteZeroVecF64x2ToVecF32x4"] = () => (_BinaryenDemoteZeroVecF64x2ToVecF32x4 = Module["_BinaryenDemoteZeroVecF64x2ToVecF32x4"] = wasmExports["ml"])();

var _BinaryenPromoteLowVecF32x4ToVecF64x2 = Module["_BinaryenPromoteLowVecF32x4ToVecF64x2"] = () => (_BinaryenPromoteLowVecF32x4ToVecF64x2 = Module["_BinaryenPromoteLowVecF32x4ToVecF64x2"] = wasmExports["nl"])();

var _BinaryenRelaxedTruncSVecF32x4ToVecI32x4 = Module["_BinaryenRelaxedTruncSVecF32x4ToVecI32x4"] = () => (_BinaryenRelaxedTruncSVecF32x4ToVecI32x4 = Module["_BinaryenRelaxedTruncSVecF32x4ToVecI32x4"] = wasmExports["ol"])();

var _BinaryenRelaxedTruncUVecF32x4ToVecI32x4 = Module["_BinaryenRelaxedTruncUVecF32x4ToVecI32x4"] = () => (_BinaryenRelaxedTruncUVecF32x4ToVecI32x4 = Module["_BinaryenRelaxedTruncUVecF32x4ToVecI32x4"] = wasmExports["pl"])();

var _BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4 = Module["_BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4"] = () => (_BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4 = Module["_BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4"] = wasmExports["ql"])();

var _BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4 = Module["_BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4"] = () => (_BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4 = Module["_BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4"] = wasmExports["rl"])();

var _BinaryenSwizzleVecI8x16 = Module["_BinaryenSwizzleVecI8x16"] = () => (_BinaryenSwizzleVecI8x16 = Module["_BinaryenSwizzleVecI8x16"] = wasmExports["sl"])();

var _BinaryenRelaxedSwizzleVecI8x16 = Module["_BinaryenRelaxedSwizzleVecI8x16"] = () => (_BinaryenRelaxedSwizzleVecI8x16 = Module["_BinaryenRelaxedSwizzleVecI8x16"] = wasmExports["tl"])();

var _BinaryenRelaxedMinVecF32x4 = Module["_BinaryenRelaxedMinVecF32x4"] = () => (_BinaryenRelaxedMinVecF32x4 = Module["_BinaryenRelaxedMinVecF32x4"] = wasmExports["ul"])();

var _BinaryenRelaxedMaxVecF32x4 = Module["_BinaryenRelaxedMaxVecF32x4"] = () => (_BinaryenRelaxedMaxVecF32x4 = Module["_BinaryenRelaxedMaxVecF32x4"] = wasmExports["vl"])();

var _BinaryenRelaxedMinVecF64x2 = Module["_BinaryenRelaxedMinVecF64x2"] = () => (_BinaryenRelaxedMinVecF64x2 = Module["_BinaryenRelaxedMinVecF64x2"] = wasmExports["wl"])();

var _BinaryenRelaxedMaxVecF64x2 = Module["_BinaryenRelaxedMaxVecF64x2"] = () => (_BinaryenRelaxedMaxVecF64x2 = Module["_BinaryenRelaxedMaxVecF64x2"] = wasmExports["xl"])();

var _BinaryenRelaxedQ15MulrSVecI16x8 = Module["_BinaryenRelaxedQ15MulrSVecI16x8"] = () => (_BinaryenRelaxedQ15MulrSVecI16x8 = Module["_BinaryenRelaxedQ15MulrSVecI16x8"] = wasmExports["yl"])();

var _BinaryenDotI8x16I7x16SToVecI16x8 = Module["_BinaryenDotI8x16I7x16SToVecI16x8"] = () => (_BinaryenDotI8x16I7x16SToVecI16x8 = Module["_BinaryenDotI8x16I7x16SToVecI16x8"] = wasmExports["zl"])();

var _BinaryenRefAsNonNull = Module["_BinaryenRefAsNonNull"] = () => (_BinaryenRefAsNonNull = Module["_BinaryenRefAsNonNull"] = wasmExports["Al"])();

var _BinaryenRefAsExternInternalize = Module["_BinaryenRefAsExternInternalize"] = () => (_BinaryenRefAsExternInternalize = Module["_BinaryenRefAsExternInternalize"] = wasmExports["Bl"])();

var _BinaryenRefAsExternExternalize = Module["_BinaryenRefAsExternExternalize"] = () => (_BinaryenRefAsExternExternalize = Module["_BinaryenRefAsExternExternalize"] = wasmExports["Cl"])();

var _BinaryenBrOnNull = Module["_BinaryenBrOnNull"] = () => (_BinaryenBrOnNull = Module["_BinaryenBrOnNull"] = wasmExports["Dl"])();

var _BinaryenBrOnNonNull = Module["_BinaryenBrOnNonNull"] = () => (_BinaryenBrOnNonNull = Module["_BinaryenBrOnNonNull"] = wasmExports["El"])();

var _BinaryenBrOnCast = Module["_BinaryenBrOnCast"] = () => (_BinaryenBrOnCast = Module["_BinaryenBrOnCast"] = wasmExports["Fl"])();

var _BinaryenBrOnCastFail = Module["_BinaryenBrOnCastFail"] = () => (_BinaryenBrOnCastFail = Module["_BinaryenBrOnCastFail"] = wasmExports["Gl"])();

var _BinaryenStringNewUTF8 = Module["_BinaryenStringNewUTF8"] = () => (_BinaryenStringNewUTF8 = Module["_BinaryenStringNewUTF8"] = wasmExports["Hl"])();

var _BinaryenStringNewWTF8 = Module["_BinaryenStringNewWTF8"] = () => (_BinaryenStringNewWTF8 = Module["_BinaryenStringNewWTF8"] = wasmExports["Il"])();

var _BinaryenStringNewLossyUTF8 = Module["_BinaryenStringNewLossyUTF8"] = () => (_BinaryenStringNewLossyUTF8 = Module["_BinaryenStringNewLossyUTF8"] = wasmExports["Jl"])();

var _BinaryenStringNewWTF16 = Module["_BinaryenStringNewWTF16"] = () => (_BinaryenStringNewWTF16 = Module["_BinaryenStringNewWTF16"] = wasmExports["Kl"])();

var _BinaryenStringNewUTF8Array = Module["_BinaryenStringNewUTF8Array"] = () => (_BinaryenStringNewUTF8Array = Module["_BinaryenStringNewUTF8Array"] = wasmExports["Ll"])();

var _BinaryenStringNewWTF8Array = Module["_BinaryenStringNewWTF8Array"] = () => (_BinaryenStringNewWTF8Array = Module["_BinaryenStringNewWTF8Array"] = wasmExports["Ml"])();

var _BinaryenStringNewLossyUTF8Array = Module["_BinaryenStringNewLossyUTF8Array"] = () => (_BinaryenStringNewLossyUTF8Array = Module["_BinaryenStringNewLossyUTF8Array"] = wasmExports["Nl"])();

var _BinaryenStringNewWTF16Array = Module["_BinaryenStringNewWTF16Array"] = () => (_BinaryenStringNewWTF16Array = Module["_BinaryenStringNewWTF16Array"] = wasmExports["Ol"])();

var _BinaryenStringNewFromCodePoint = Module["_BinaryenStringNewFromCodePoint"] = () => (_BinaryenStringNewFromCodePoint = Module["_BinaryenStringNewFromCodePoint"] = wasmExports["Pl"])();

var _BinaryenStringMeasureUTF8 = Module["_BinaryenStringMeasureUTF8"] = () => (_BinaryenStringMeasureUTF8 = Module["_BinaryenStringMeasureUTF8"] = wasmExports["Ql"])();

var _BinaryenStringMeasureWTF8 = Module["_BinaryenStringMeasureWTF8"] = () => (_BinaryenStringMeasureWTF8 = Module["_BinaryenStringMeasureWTF8"] = wasmExports["Rl"])();

var _BinaryenStringMeasureWTF16 = Module["_BinaryenStringMeasureWTF16"] = () => (_BinaryenStringMeasureWTF16 = Module["_BinaryenStringMeasureWTF16"] = wasmExports["Sl"])();

var _BinaryenStringMeasureIsUSV = Module["_BinaryenStringMeasureIsUSV"] = () => (_BinaryenStringMeasureIsUSV = Module["_BinaryenStringMeasureIsUSV"] = wasmExports["Tl"])();

var _BinaryenStringMeasureWTF16View = Module["_BinaryenStringMeasureWTF16View"] = () => (_BinaryenStringMeasureWTF16View = Module["_BinaryenStringMeasureWTF16View"] = wasmExports["Ul"])();

var _BinaryenStringEncodeUTF8 = Module["_BinaryenStringEncodeUTF8"] = () => (_BinaryenStringEncodeUTF8 = Module["_BinaryenStringEncodeUTF8"] = wasmExports["Vl"])();

var _BinaryenStringEncodeLossyUTF8 = Module["_BinaryenStringEncodeLossyUTF8"] = () => (_BinaryenStringEncodeLossyUTF8 = Module["_BinaryenStringEncodeLossyUTF8"] = wasmExports["Wl"])();

var _BinaryenStringEncodeWTF8 = Module["_BinaryenStringEncodeWTF8"] = () => (_BinaryenStringEncodeWTF8 = Module["_BinaryenStringEncodeWTF8"] = wasmExports["Xl"])();

var _BinaryenStringEncodeWTF16 = Module["_BinaryenStringEncodeWTF16"] = () => (_BinaryenStringEncodeWTF16 = Module["_BinaryenStringEncodeWTF16"] = wasmExports["Yl"])();

var _BinaryenStringEncodeUTF8Array = Module["_BinaryenStringEncodeUTF8Array"] = () => (_BinaryenStringEncodeUTF8Array = Module["_BinaryenStringEncodeUTF8Array"] = wasmExports["Zl"])();

var _BinaryenStringEncodeLossyUTF8Array = Module["_BinaryenStringEncodeLossyUTF8Array"] = () => (_BinaryenStringEncodeLossyUTF8Array = Module["_BinaryenStringEncodeLossyUTF8Array"] = wasmExports["_l"])();

var _BinaryenStringEncodeWTF8Array = Module["_BinaryenStringEncodeWTF8Array"] = () => (_BinaryenStringEncodeWTF8Array = Module["_BinaryenStringEncodeWTF8Array"] = wasmExports["$l"])();

var _BinaryenStringEncodeWTF16Array = Module["_BinaryenStringEncodeWTF16Array"] = () => (_BinaryenStringEncodeWTF16Array = Module["_BinaryenStringEncodeWTF16Array"] = wasmExports["am"])();

var _BinaryenStringAsWTF8 = Module["_BinaryenStringAsWTF8"] = () => (_BinaryenStringAsWTF8 = Module["_BinaryenStringAsWTF8"] = wasmExports["bm"])();

var _BinaryenStringAsWTF16 = Module["_BinaryenStringAsWTF16"] = () => (_BinaryenStringAsWTF16 = Module["_BinaryenStringAsWTF16"] = wasmExports["cm"])();

var _BinaryenStringAsIter = Module["_BinaryenStringAsIter"] = () => (_BinaryenStringAsIter = Module["_BinaryenStringAsIter"] = wasmExports["dm"])();

var _BinaryenStringIterMoveAdvance = Module["_BinaryenStringIterMoveAdvance"] = () => (_BinaryenStringIterMoveAdvance = Module["_BinaryenStringIterMoveAdvance"] = wasmExports["em"])();

var _BinaryenStringIterMoveRewind = Module["_BinaryenStringIterMoveRewind"] = () => (_BinaryenStringIterMoveRewind = Module["_BinaryenStringIterMoveRewind"] = wasmExports["fm"])();

var _BinaryenStringSliceWTF8 = Module["_BinaryenStringSliceWTF8"] = () => (_BinaryenStringSliceWTF8 = Module["_BinaryenStringSliceWTF8"] = wasmExports["gm"])();

var _BinaryenStringSliceWTF16 = Module["_BinaryenStringSliceWTF16"] = () => (_BinaryenStringSliceWTF16 = Module["_BinaryenStringSliceWTF16"] = wasmExports["hm"])();

var _BinaryenStringEqEqual = Module["_BinaryenStringEqEqual"] = () => (_BinaryenStringEqEqual = Module["_BinaryenStringEqEqual"] = wasmExports["im"])();

var _BinaryenStringEqCompare = Module["_BinaryenStringEqCompare"] = () => (_BinaryenStringEqCompare = Module["_BinaryenStringEqCompare"] = wasmExports["jm"])();

var _BinaryenBlock = Module["_BinaryenBlock"] = (a0, a1, a2, a3, a4) => (_BinaryenBlock = Module["_BinaryenBlock"] = wasmExports["km"])(a0, a1, a2, a3, a4);

var _BinaryenIf = Module["_BinaryenIf"] = (a0, a1, a2, a3) => (_BinaryenIf = Module["_BinaryenIf"] = wasmExports["lm"])(a0, a1, a2, a3);

var _BinaryenLoop = Module["_BinaryenLoop"] = (a0, a1, a2) => (_BinaryenLoop = Module["_BinaryenLoop"] = wasmExports["mm"])(a0, a1, a2);

var _BinaryenBreak = Module["_BinaryenBreak"] = (a0, a1, a2, a3) => (_BinaryenBreak = Module["_BinaryenBreak"] = wasmExports["nm"])(a0, a1, a2, a3);

var _BinaryenSwitch = Module["_BinaryenSwitch"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenSwitch = Module["_BinaryenSwitch"] = wasmExports["om"])(a0, a1, a2, a3, a4, a5);

var _BinaryenCall = Module["_BinaryenCall"] = (a0, a1, a2, a3, a4) => (_BinaryenCall = Module["_BinaryenCall"] = wasmExports["pm"])(a0, a1, a2, a3, a4);

var _BinaryenReturnCall = Module["_BinaryenReturnCall"] = (a0, a1, a2, a3, a4) => (_BinaryenReturnCall = Module["_BinaryenReturnCall"] = wasmExports["qm"])(a0, a1, a2, a3, a4);

var _BinaryenCallIndirect = Module["_BinaryenCallIndirect"] = (a0, a1, a2, a3, a4, a5, a6) => (_BinaryenCallIndirect = Module["_BinaryenCallIndirect"] = wasmExports["rm"])(a0, a1, a2, a3, a4, a5, a6);

var _BinaryenReturnCallIndirect = Module["_BinaryenReturnCallIndirect"] = (a0, a1, a2, a3, a4, a5, a6) => (_BinaryenReturnCallIndirect = Module["_BinaryenReturnCallIndirect"] = wasmExports["sm"])(a0, a1, a2, a3, a4, a5, a6);

var _BinaryenLocalGet = Module["_BinaryenLocalGet"] = (a0, a1, a2) => (_BinaryenLocalGet = Module["_BinaryenLocalGet"] = wasmExports["tm"])(a0, a1, a2);

var _BinaryenLocalSet = Module["_BinaryenLocalSet"] = (a0, a1, a2) => (_BinaryenLocalSet = Module["_BinaryenLocalSet"] = wasmExports["um"])(a0, a1, a2);

var _BinaryenLocalTee = Module["_BinaryenLocalTee"] = (a0, a1, a2, a3) => (_BinaryenLocalTee = Module["_BinaryenLocalTee"] = wasmExports["vm"])(a0, a1, a2, a3);

var _BinaryenGlobalGet = Module["_BinaryenGlobalGet"] = (a0, a1, a2) => (_BinaryenGlobalGet = Module["_BinaryenGlobalGet"] = wasmExports["wm"])(a0, a1, a2);

var _BinaryenGlobalSet = Module["_BinaryenGlobalSet"] = (a0, a1, a2) => (_BinaryenGlobalSet = Module["_BinaryenGlobalSet"] = wasmExports["xm"])(a0, a1, a2);

var _BinaryenLoad = Module["_BinaryenLoad"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_BinaryenLoad = Module["_BinaryenLoad"] = wasmExports["ym"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _BinaryenStore = Module["_BinaryenStore"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_BinaryenStore = Module["_BinaryenStore"] = wasmExports["zm"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _BinaryenConst = Module["_BinaryenConst"] = (a0, a1) => (_BinaryenConst = Module["_BinaryenConst"] = wasmExports["Am"])(a0, a1);

var _BinaryenUnary = Module["_BinaryenUnary"] = (a0, a1, a2) => (_BinaryenUnary = Module["_BinaryenUnary"] = wasmExports["Bm"])(a0, a1, a2);

var _BinaryenBinary = Module["_BinaryenBinary"] = (a0, a1, a2, a3) => (_BinaryenBinary = Module["_BinaryenBinary"] = wasmExports["Cm"])(a0, a1, a2, a3);

var _BinaryenSelect = Module["_BinaryenSelect"] = (a0, a1, a2, a3, a4) => (_BinaryenSelect = Module["_BinaryenSelect"] = wasmExports["Dm"])(a0, a1, a2, a3, a4);

var _BinaryenDrop = Module["_BinaryenDrop"] = (a0, a1) => (_BinaryenDrop = Module["_BinaryenDrop"] = wasmExports["Em"])(a0, a1);

var _BinaryenReturn = Module["_BinaryenReturn"] = (a0, a1) => (_BinaryenReturn = Module["_BinaryenReturn"] = wasmExports["Fm"])(a0, a1);

var _BinaryenMemorySize = Module["_BinaryenMemorySize"] = (a0, a1, a2) => (_BinaryenMemorySize = Module["_BinaryenMemorySize"] = wasmExports["Gm"])(a0, a1, a2);

var _BinaryenMemoryGrow = Module["_BinaryenMemoryGrow"] = (a0, a1, a2, a3) => (_BinaryenMemoryGrow = Module["_BinaryenMemoryGrow"] = wasmExports["Hm"])(a0, a1, a2, a3);

var _BinaryenNop = Module["_BinaryenNop"] = a0 => (_BinaryenNop = Module["_BinaryenNop"] = wasmExports["Im"])(a0);

var _BinaryenUnreachable = Module["_BinaryenUnreachable"] = a0 => (_BinaryenUnreachable = Module["_BinaryenUnreachable"] = wasmExports["Jm"])(a0);

var _BinaryenAtomicLoad = Module["_BinaryenAtomicLoad"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAtomicLoad = Module["_BinaryenAtomicLoad"] = wasmExports["Km"])(a0, a1, a2, a3, a4, a5);

var _BinaryenAtomicStore = Module["_BinaryenAtomicStore"] = (a0, a1, a2, a3, a4, a5, a6) => (_BinaryenAtomicStore = Module["_BinaryenAtomicStore"] = wasmExports["Lm"])(a0, a1, a2, a3, a4, a5, a6);

var _BinaryenAtomicRMW = Module["_BinaryenAtomicRMW"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_BinaryenAtomicRMW = Module["_BinaryenAtomicRMW"] = wasmExports["Mm"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _BinaryenAtomicCmpxchg = Module["_BinaryenAtomicCmpxchg"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_BinaryenAtomicCmpxchg = Module["_BinaryenAtomicCmpxchg"] = wasmExports["Nm"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _BinaryenAtomicWait = Module["_BinaryenAtomicWait"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAtomicWait = Module["_BinaryenAtomicWait"] = wasmExports["Om"])(a0, a1, a2, a3, a4, a5);

var _BinaryenAtomicNotify = Module["_BinaryenAtomicNotify"] = (a0, a1, a2, a3) => (_BinaryenAtomicNotify = Module["_BinaryenAtomicNotify"] = wasmExports["Pm"])(a0, a1, a2, a3);

var _BinaryenAtomicFence = Module["_BinaryenAtomicFence"] = a0 => (_BinaryenAtomicFence = Module["_BinaryenAtomicFence"] = wasmExports["Qm"])(a0);

var _BinaryenSIMDExtract = Module["_BinaryenSIMDExtract"] = (a0, a1, a2, a3) => (_BinaryenSIMDExtract = Module["_BinaryenSIMDExtract"] = wasmExports["Rm"])(a0, a1, a2, a3);

var _BinaryenSIMDReplace = Module["_BinaryenSIMDReplace"] = (a0, a1, a2, a3, a4) => (_BinaryenSIMDReplace = Module["_BinaryenSIMDReplace"] = wasmExports["Sm"])(a0, a1, a2, a3, a4);

var _BinaryenSIMDShuffle = Module["_BinaryenSIMDShuffle"] = (a0, a1, a2, a3) => (_BinaryenSIMDShuffle = Module["_BinaryenSIMDShuffle"] = wasmExports["Tm"])(a0, a1, a2, a3);

var _BinaryenSIMDTernary = Module["_BinaryenSIMDTernary"] = (a0, a1, a2, a3, a4) => (_BinaryenSIMDTernary = Module["_BinaryenSIMDTernary"] = wasmExports["Um"])(a0, a1, a2, a3, a4);

var _BinaryenSIMDShift = Module["_BinaryenSIMDShift"] = (a0, a1, a2, a3) => (_BinaryenSIMDShift = Module["_BinaryenSIMDShift"] = wasmExports["Vm"])(a0, a1, a2, a3);

var _BinaryenSIMDLoad = Module["_BinaryenSIMDLoad"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenSIMDLoad = Module["_BinaryenSIMDLoad"] = wasmExports["Wm"])(a0, a1, a2, a3, a4, a5);

var _BinaryenSIMDLoadStoreLane = Module["_BinaryenSIMDLoadStoreLane"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_BinaryenSIMDLoadStoreLane = Module["_BinaryenSIMDLoadStoreLane"] = wasmExports["Xm"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _BinaryenMemoryInit = Module["_BinaryenMemoryInit"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenMemoryInit = Module["_BinaryenMemoryInit"] = wasmExports["Ym"])(a0, a1, a2, a3, a4, a5);

var _BinaryenDataDrop = Module["_BinaryenDataDrop"] = (a0, a1) => (_BinaryenDataDrop = Module["_BinaryenDataDrop"] = wasmExports["Zm"])(a0, a1);

var _BinaryenMemoryCopy = Module["_BinaryenMemoryCopy"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenMemoryCopy = Module["_BinaryenMemoryCopy"] = wasmExports["_m"])(a0, a1, a2, a3, a4, a5);

var _BinaryenMemoryFill = Module["_BinaryenMemoryFill"] = (a0, a1, a2, a3, a4) => (_BinaryenMemoryFill = Module["_BinaryenMemoryFill"] = wasmExports["$m"])(a0, a1, a2, a3, a4);

var _BinaryenTupleMake = Module["_BinaryenTupleMake"] = (a0, a1, a2) => (_BinaryenTupleMake = Module["_BinaryenTupleMake"] = wasmExports["an"])(a0, a1, a2);

var _BinaryenTupleExtract = Module["_BinaryenTupleExtract"] = (a0, a1, a2) => (_BinaryenTupleExtract = Module["_BinaryenTupleExtract"] = wasmExports["bn"])(a0, a1, a2);

var _BinaryenPop = Module["_BinaryenPop"] = (a0, a1) => (_BinaryenPop = Module["_BinaryenPop"] = wasmExports["cn"])(a0, a1);

var _BinaryenRefNull = Module["_BinaryenRefNull"] = (a0, a1) => (_BinaryenRefNull = Module["_BinaryenRefNull"] = wasmExports["dn"])(a0, a1);

var _BinaryenRefIsNull = Module["_BinaryenRefIsNull"] = (a0, a1) => (_BinaryenRefIsNull = Module["_BinaryenRefIsNull"] = wasmExports["en"])(a0, a1);

var _BinaryenRefAs = Module["_BinaryenRefAs"] = (a0, a1, a2) => (_BinaryenRefAs = Module["_BinaryenRefAs"] = wasmExports["fn"])(a0, a1, a2);

var _BinaryenRefFunc = Module["_BinaryenRefFunc"] = (a0, a1, a2) => (_BinaryenRefFunc = Module["_BinaryenRefFunc"] = wasmExports["gn"])(a0, a1, a2);

var _BinaryenRefEq = Module["_BinaryenRefEq"] = (a0, a1, a2) => (_BinaryenRefEq = Module["_BinaryenRefEq"] = wasmExports["hn"])(a0, a1, a2);

var _BinaryenTableGet = Module["_BinaryenTableGet"] = (a0, a1, a2, a3) => (_BinaryenTableGet = Module["_BinaryenTableGet"] = wasmExports["jn"])(a0, a1, a2, a3);

var _BinaryenTableSet = Module["_BinaryenTableSet"] = (a0, a1, a2, a3) => (_BinaryenTableSet = Module["_BinaryenTableSet"] = wasmExports["kn"])(a0, a1, a2, a3);

var _BinaryenTableSize = Module["_BinaryenTableSize"] = (a0, a1) => (_BinaryenTableSize = Module["_BinaryenTableSize"] = wasmExports["ln"])(a0, a1);

var _BinaryenTableGrow = Module["_BinaryenTableGrow"] = (a0, a1, a2, a3) => (_BinaryenTableGrow = Module["_BinaryenTableGrow"] = wasmExports["mn"])(a0, a1, a2, a3);

var _BinaryenTry = Module["_BinaryenTry"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_BinaryenTry = Module["_BinaryenTry"] = wasmExports["nn"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _BinaryenThrow = Module["_BinaryenThrow"] = (a0, a1, a2, a3) => (_BinaryenThrow = Module["_BinaryenThrow"] = wasmExports["on"])(a0, a1, a2, a3);

var _BinaryenRethrow = Module["_BinaryenRethrow"] = (a0, a1) => (_BinaryenRethrow = Module["_BinaryenRethrow"] = wasmExports["pn"])(a0, a1);

var _BinaryenRefI31 = Module["_BinaryenRefI31"] = (a0, a1) => (_BinaryenRefI31 = Module["_BinaryenRefI31"] = wasmExports["qn"])(a0, a1);

var _BinaryenI31Get = Module["_BinaryenI31Get"] = (a0, a1, a2) => (_BinaryenI31Get = Module["_BinaryenI31Get"] = wasmExports["rn"])(a0, a1, a2);

var _BinaryenCallRef = Module["_BinaryenCallRef"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenCallRef = Module["_BinaryenCallRef"] = wasmExports["sn"])(a0, a1, a2, a3, a4, a5);

var _BinaryenRefTest = Module["_BinaryenRefTest"] = (a0, a1, a2) => (_BinaryenRefTest = Module["_BinaryenRefTest"] = wasmExports["tn"])(a0, a1, a2);

var _BinaryenRefCast = Module["_BinaryenRefCast"] = (a0, a1, a2) => (_BinaryenRefCast = Module["_BinaryenRefCast"] = wasmExports["un"])(a0, a1, a2);

var _BinaryenBrOn = Module["_BinaryenBrOn"] = (a0, a1, a2, a3, a4) => (_BinaryenBrOn = Module["_BinaryenBrOn"] = wasmExports["vn"])(a0, a1, a2, a3, a4);

var _BinaryenStructNew = Module["_BinaryenStructNew"] = (a0, a1, a2, a3) => (_BinaryenStructNew = Module["_BinaryenStructNew"] = wasmExports["wn"])(a0, a1, a2, a3);

var _BinaryenStructGet = Module["_BinaryenStructGet"] = (a0, a1, a2, a3, a4) => (_BinaryenStructGet = Module["_BinaryenStructGet"] = wasmExports["xn"])(a0, a1, a2, a3, a4);

var _BinaryenStructSet = Module["_BinaryenStructSet"] = (a0, a1, a2, a3) => (_BinaryenStructSet = Module["_BinaryenStructSet"] = wasmExports["yn"])(a0, a1, a2, a3);

var _BinaryenArrayNew = Module["_BinaryenArrayNew"] = (a0, a1, a2, a3) => (_BinaryenArrayNew = Module["_BinaryenArrayNew"] = wasmExports["zn"])(a0, a1, a2, a3);

var _BinaryenArrayNewData = Module["_BinaryenArrayNewData"] = (a0, a1, a2, a3, a4) => (_BinaryenArrayNewData = Module["_BinaryenArrayNewData"] = wasmExports["An"])(a0, a1, a2, a3, a4);

var _BinaryenArrayNewFixed = Module["_BinaryenArrayNewFixed"] = (a0, a1, a2, a3) => (_BinaryenArrayNewFixed = Module["_BinaryenArrayNewFixed"] = wasmExports["Bn"])(a0, a1, a2, a3);

var _BinaryenArrayGet = Module["_BinaryenArrayGet"] = (a0, a1, a2, a3, a4) => (_BinaryenArrayGet = Module["_BinaryenArrayGet"] = wasmExports["Cn"])(a0, a1, a2, a3, a4);

var _BinaryenArraySet = Module["_BinaryenArraySet"] = (a0, a1, a2, a3) => (_BinaryenArraySet = Module["_BinaryenArraySet"] = wasmExports["Dn"])(a0, a1, a2, a3);

var _BinaryenArrayLen = Module["_BinaryenArrayLen"] = (a0, a1) => (_BinaryenArrayLen = Module["_BinaryenArrayLen"] = wasmExports["En"])(a0, a1);

var _BinaryenArrayCopy = Module["_BinaryenArrayCopy"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenArrayCopy = Module["_BinaryenArrayCopy"] = wasmExports["Fn"])(a0, a1, a2, a3, a4, a5);

var _BinaryenStringNew = Module["_BinaryenStringNew"] = (a0, a1, a2, a3, a4, a5, a6) => (_BinaryenStringNew = Module["_BinaryenStringNew"] = wasmExports["Gn"])(a0, a1, a2, a3, a4, a5, a6);

var _BinaryenStringConst = Module["_BinaryenStringConst"] = (a0, a1) => (_BinaryenStringConst = Module["_BinaryenStringConst"] = wasmExports["Hn"])(a0, a1);

var _BinaryenStringMeasure = Module["_BinaryenStringMeasure"] = (a0, a1, a2) => (_BinaryenStringMeasure = Module["_BinaryenStringMeasure"] = wasmExports["In"])(a0, a1, a2);

var _BinaryenStringEncode = Module["_BinaryenStringEncode"] = (a0, a1, a2, a3, a4) => (_BinaryenStringEncode = Module["_BinaryenStringEncode"] = wasmExports["Jn"])(a0, a1, a2, a3, a4);

var _BinaryenStringConcat = Module["_BinaryenStringConcat"] = (a0, a1, a2) => (_BinaryenStringConcat = Module["_BinaryenStringConcat"] = wasmExports["Kn"])(a0, a1, a2);

var _BinaryenStringEq = Module["_BinaryenStringEq"] = (a0, a1, a2, a3) => (_BinaryenStringEq = Module["_BinaryenStringEq"] = wasmExports["Ln"])(a0, a1, a2, a3);

var _BinaryenStringAs = Module["_BinaryenStringAs"] = (a0, a1, a2) => (_BinaryenStringAs = Module["_BinaryenStringAs"] = wasmExports["Mn"])(a0, a1, a2);

var _BinaryenStringWTF8Advance = Module["_BinaryenStringWTF8Advance"] = (a0, a1, a2, a3) => (_BinaryenStringWTF8Advance = Module["_BinaryenStringWTF8Advance"] = wasmExports["Nn"])(a0, a1, a2, a3);

var _BinaryenStringWTF16Get = Module["_BinaryenStringWTF16Get"] = (a0, a1, a2) => (_BinaryenStringWTF16Get = Module["_BinaryenStringWTF16Get"] = wasmExports["On"])(a0, a1, a2);

var _BinaryenStringIterNext = Module["_BinaryenStringIterNext"] = (a0, a1) => (_BinaryenStringIterNext = Module["_BinaryenStringIterNext"] = wasmExports["Pn"])(a0, a1);

var _BinaryenStringIterMove = Module["_BinaryenStringIterMove"] = (a0, a1, a2, a3) => (_BinaryenStringIterMove = Module["_BinaryenStringIterMove"] = wasmExports["Qn"])(a0, a1, a2, a3);

var _BinaryenStringSliceWTF = Module["_BinaryenStringSliceWTF"] = (a0, a1, a2, a3, a4) => (_BinaryenStringSliceWTF = Module["_BinaryenStringSliceWTF"] = wasmExports["Rn"])(a0, a1, a2, a3, a4);

var _BinaryenStringSliceIter = Module["_BinaryenStringSliceIter"] = (a0, a1, a2) => (_BinaryenStringSliceIter = Module["_BinaryenStringSliceIter"] = wasmExports["Sn"])(a0, a1, a2);

var _BinaryenExpressionGetId = Module["_BinaryenExpressionGetId"] = a0 => (_BinaryenExpressionGetId = Module["_BinaryenExpressionGetId"] = wasmExports["Tn"])(a0);

var _BinaryenExpressionGetType = Module["_BinaryenExpressionGetType"] = a0 => (_BinaryenExpressionGetType = Module["_BinaryenExpressionGetType"] = wasmExports["Un"])(a0);

var _BinaryenExpressionSetType = Module["_BinaryenExpressionSetType"] = (a0, a1) => (_BinaryenExpressionSetType = Module["_BinaryenExpressionSetType"] = wasmExports["Vn"])(a0, a1);

var _BinaryenExpressionPrint = Module["_BinaryenExpressionPrint"] = a0 => (_BinaryenExpressionPrint = Module["_BinaryenExpressionPrint"] = wasmExports["Wn"])(a0);

var _BinaryenExpressionFinalize = Module["_BinaryenExpressionFinalize"] = a0 => (_BinaryenExpressionFinalize = Module["_BinaryenExpressionFinalize"] = wasmExports["Xn"])(a0);

var _BinaryenExpressionCopy = Module["_BinaryenExpressionCopy"] = (a0, a1) => (_BinaryenExpressionCopy = Module["_BinaryenExpressionCopy"] = wasmExports["Yn"])(a0, a1);

var _BinaryenBlockGetName = Module["_BinaryenBlockGetName"] = a0 => (_BinaryenBlockGetName = Module["_BinaryenBlockGetName"] = wasmExports["Zn"])(a0);

var _BinaryenBlockSetName = Module["_BinaryenBlockSetName"] = (a0, a1) => (_BinaryenBlockSetName = Module["_BinaryenBlockSetName"] = wasmExports["_n"])(a0, a1);

var _BinaryenBlockGetNumChildren = Module["_BinaryenBlockGetNumChildren"] = a0 => (_BinaryenBlockGetNumChildren = Module["_BinaryenBlockGetNumChildren"] = wasmExports["$n"])(a0);

var _BinaryenBlockGetChildAt = Module["_BinaryenBlockGetChildAt"] = (a0, a1) => (_BinaryenBlockGetChildAt = Module["_BinaryenBlockGetChildAt"] = wasmExports["ao"])(a0, a1);

var _BinaryenBlockSetChildAt = Module["_BinaryenBlockSetChildAt"] = (a0, a1, a2) => (_BinaryenBlockSetChildAt = Module["_BinaryenBlockSetChildAt"] = wasmExports["bo"])(a0, a1, a2);

var _BinaryenBlockAppendChild = Module["_BinaryenBlockAppendChild"] = (a0, a1) => (_BinaryenBlockAppendChild = Module["_BinaryenBlockAppendChild"] = wasmExports["co"])(a0, a1);

var _BinaryenBlockInsertChildAt = Module["_BinaryenBlockInsertChildAt"] = (a0, a1, a2) => (_BinaryenBlockInsertChildAt = Module["_BinaryenBlockInsertChildAt"] = wasmExports["eo"])(a0, a1, a2);

var _BinaryenBlockRemoveChildAt = Module["_BinaryenBlockRemoveChildAt"] = (a0, a1) => (_BinaryenBlockRemoveChildAt = Module["_BinaryenBlockRemoveChildAt"] = wasmExports["fo"])(a0, a1);

var _BinaryenIfGetCondition = Module["_BinaryenIfGetCondition"] = a0 => (_BinaryenIfGetCondition = Module["_BinaryenIfGetCondition"] = wasmExports["go"])(a0);

var _BinaryenIfSetCondition = Module["_BinaryenIfSetCondition"] = (a0, a1) => (_BinaryenIfSetCondition = Module["_BinaryenIfSetCondition"] = wasmExports["ho"])(a0, a1);

var _BinaryenIfGetIfTrue = Module["_BinaryenIfGetIfTrue"] = a0 => (_BinaryenIfGetIfTrue = Module["_BinaryenIfGetIfTrue"] = wasmExports["io"])(a0);

var _BinaryenIfSetIfTrue = Module["_BinaryenIfSetIfTrue"] = (a0, a1) => (_BinaryenIfSetIfTrue = Module["_BinaryenIfSetIfTrue"] = wasmExports["jo"])(a0, a1);

var _BinaryenIfGetIfFalse = Module["_BinaryenIfGetIfFalse"] = a0 => (_BinaryenIfGetIfFalse = Module["_BinaryenIfGetIfFalse"] = wasmExports["ko"])(a0);

var _BinaryenIfSetIfFalse = Module["_BinaryenIfSetIfFalse"] = (a0, a1) => (_BinaryenIfSetIfFalse = Module["_BinaryenIfSetIfFalse"] = wasmExports["lo"])(a0, a1);

var _BinaryenLoopGetName = Module["_BinaryenLoopGetName"] = a0 => (_BinaryenLoopGetName = Module["_BinaryenLoopGetName"] = wasmExports["mo"])(a0);

var _BinaryenLoopSetName = Module["_BinaryenLoopSetName"] = (a0, a1) => (_BinaryenLoopSetName = Module["_BinaryenLoopSetName"] = wasmExports["no"])(a0, a1);

var _BinaryenLoopGetBody = Module["_BinaryenLoopGetBody"] = a0 => (_BinaryenLoopGetBody = Module["_BinaryenLoopGetBody"] = wasmExports["oo"])(a0);

var _BinaryenLoopSetBody = Module["_BinaryenLoopSetBody"] = (a0, a1) => (_BinaryenLoopSetBody = Module["_BinaryenLoopSetBody"] = wasmExports["po"])(a0, a1);

var _BinaryenBreakGetName = Module["_BinaryenBreakGetName"] = a0 => (_BinaryenBreakGetName = Module["_BinaryenBreakGetName"] = wasmExports["qo"])(a0);

var _BinaryenBreakSetName = Module["_BinaryenBreakSetName"] = (a0, a1) => (_BinaryenBreakSetName = Module["_BinaryenBreakSetName"] = wasmExports["ro"])(a0, a1);

var _BinaryenBreakGetCondition = Module["_BinaryenBreakGetCondition"] = a0 => (_BinaryenBreakGetCondition = Module["_BinaryenBreakGetCondition"] = wasmExports["so"])(a0);

var _BinaryenBreakSetCondition = Module["_BinaryenBreakSetCondition"] = (a0, a1) => (_BinaryenBreakSetCondition = Module["_BinaryenBreakSetCondition"] = wasmExports["to"])(a0, a1);

var _BinaryenBreakGetValue = Module["_BinaryenBreakGetValue"] = a0 => (_BinaryenBreakGetValue = Module["_BinaryenBreakGetValue"] = wasmExports["uo"])(a0);

var _BinaryenBreakSetValue = Module["_BinaryenBreakSetValue"] = (a0, a1) => (_BinaryenBreakSetValue = Module["_BinaryenBreakSetValue"] = wasmExports["vo"])(a0, a1);

var _BinaryenSwitchGetNumNames = Module["_BinaryenSwitchGetNumNames"] = a0 => (_BinaryenSwitchGetNumNames = Module["_BinaryenSwitchGetNumNames"] = wasmExports["wo"])(a0);

var _BinaryenSwitchGetNameAt = Module["_BinaryenSwitchGetNameAt"] = (a0, a1) => (_BinaryenSwitchGetNameAt = Module["_BinaryenSwitchGetNameAt"] = wasmExports["xo"])(a0, a1);

var _BinaryenSwitchSetNameAt = Module["_BinaryenSwitchSetNameAt"] = (a0, a1, a2) => (_BinaryenSwitchSetNameAt = Module["_BinaryenSwitchSetNameAt"] = wasmExports["yo"])(a0, a1, a2);

var _BinaryenSwitchAppendName = Module["_BinaryenSwitchAppendName"] = (a0, a1) => (_BinaryenSwitchAppendName = Module["_BinaryenSwitchAppendName"] = wasmExports["zo"])(a0, a1);

var _BinaryenSwitchInsertNameAt = Module["_BinaryenSwitchInsertNameAt"] = (a0, a1, a2) => (_BinaryenSwitchInsertNameAt = Module["_BinaryenSwitchInsertNameAt"] = wasmExports["Ao"])(a0, a1, a2);

var _BinaryenSwitchRemoveNameAt = Module["_BinaryenSwitchRemoveNameAt"] = (a0, a1) => (_BinaryenSwitchRemoveNameAt = Module["_BinaryenSwitchRemoveNameAt"] = wasmExports["Bo"])(a0, a1);

var _BinaryenSwitchGetDefaultName = Module["_BinaryenSwitchGetDefaultName"] = a0 => (_BinaryenSwitchGetDefaultName = Module["_BinaryenSwitchGetDefaultName"] = wasmExports["Co"])(a0);

var _BinaryenSwitchSetDefaultName = Module["_BinaryenSwitchSetDefaultName"] = (a0, a1) => (_BinaryenSwitchSetDefaultName = Module["_BinaryenSwitchSetDefaultName"] = wasmExports["Do"])(a0, a1);

var _BinaryenSwitchGetCondition = Module["_BinaryenSwitchGetCondition"] = a0 => (_BinaryenSwitchGetCondition = Module["_BinaryenSwitchGetCondition"] = wasmExports["Eo"])(a0);

var _BinaryenSwitchSetCondition = Module["_BinaryenSwitchSetCondition"] = (a0, a1) => (_BinaryenSwitchSetCondition = Module["_BinaryenSwitchSetCondition"] = wasmExports["Fo"])(a0, a1);

var _BinaryenSwitchGetValue = Module["_BinaryenSwitchGetValue"] = a0 => (_BinaryenSwitchGetValue = Module["_BinaryenSwitchGetValue"] = wasmExports["Go"])(a0);

var _BinaryenSwitchSetValue = Module["_BinaryenSwitchSetValue"] = (a0, a1) => (_BinaryenSwitchSetValue = Module["_BinaryenSwitchSetValue"] = wasmExports["Ho"])(a0, a1);

var _BinaryenCallGetTarget = Module["_BinaryenCallGetTarget"] = a0 => (_BinaryenCallGetTarget = Module["_BinaryenCallGetTarget"] = wasmExports["Io"])(a0);

var _BinaryenCallSetTarget = Module["_BinaryenCallSetTarget"] = (a0, a1) => (_BinaryenCallSetTarget = Module["_BinaryenCallSetTarget"] = wasmExports["Jo"])(a0, a1);

var _BinaryenCallGetNumOperands = Module["_BinaryenCallGetNumOperands"] = a0 => (_BinaryenCallGetNumOperands = Module["_BinaryenCallGetNumOperands"] = wasmExports["Ko"])(a0);

var _BinaryenCallGetOperandAt = Module["_BinaryenCallGetOperandAt"] = (a0, a1) => (_BinaryenCallGetOperandAt = Module["_BinaryenCallGetOperandAt"] = wasmExports["Lo"])(a0, a1);

var _BinaryenCallSetOperandAt = Module["_BinaryenCallSetOperandAt"] = (a0, a1, a2) => (_BinaryenCallSetOperandAt = Module["_BinaryenCallSetOperandAt"] = wasmExports["Mo"])(a0, a1, a2);

var _BinaryenCallAppendOperand = Module["_BinaryenCallAppendOperand"] = (a0, a1) => (_BinaryenCallAppendOperand = Module["_BinaryenCallAppendOperand"] = wasmExports["No"])(a0, a1);

var _BinaryenCallInsertOperandAt = Module["_BinaryenCallInsertOperandAt"] = (a0, a1, a2) => (_BinaryenCallInsertOperandAt = Module["_BinaryenCallInsertOperandAt"] = wasmExports["Oo"])(a0, a1, a2);

var _BinaryenCallRemoveOperandAt = Module["_BinaryenCallRemoveOperandAt"] = (a0, a1) => (_BinaryenCallRemoveOperandAt = Module["_BinaryenCallRemoveOperandAt"] = wasmExports["Po"])(a0, a1);

var _BinaryenCallIsReturn = Module["_BinaryenCallIsReturn"] = a0 => (_BinaryenCallIsReturn = Module["_BinaryenCallIsReturn"] = wasmExports["Qo"])(a0);

var _BinaryenCallSetReturn = Module["_BinaryenCallSetReturn"] = (a0, a1) => (_BinaryenCallSetReturn = Module["_BinaryenCallSetReturn"] = wasmExports["Ro"])(a0, a1);

var _BinaryenCallIndirectGetTarget = Module["_BinaryenCallIndirectGetTarget"] = a0 => (_BinaryenCallIndirectGetTarget = Module["_BinaryenCallIndirectGetTarget"] = wasmExports["So"])(a0);

var _BinaryenCallIndirectSetTarget = Module["_BinaryenCallIndirectSetTarget"] = (a0, a1) => (_BinaryenCallIndirectSetTarget = Module["_BinaryenCallIndirectSetTarget"] = wasmExports["To"])(a0, a1);

var _BinaryenCallIndirectGetTable = Module["_BinaryenCallIndirectGetTable"] = a0 => (_BinaryenCallIndirectGetTable = Module["_BinaryenCallIndirectGetTable"] = wasmExports["Uo"])(a0);

var _BinaryenCallIndirectSetTable = Module["_BinaryenCallIndirectSetTable"] = (a0, a1) => (_BinaryenCallIndirectSetTable = Module["_BinaryenCallIndirectSetTable"] = wasmExports["Vo"])(a0, a1);

var _BinaryenCallIndirectGetNumOperands = Module["_BinaryenCallIndirectGetNumOperands"] = a0 => (_BinaryenCallIndirectGetNumOperands = Module["_BinaryenCallIndirectGetNumOperands"] = wasmExports["Wo"])(a0);

var _BinaryenCallIndirectGetOperandAt = Module["_BinaryenCallIndirectGetOperandAt"] = (a0, a1) => (_BinaryenCallIndirectGetOperandAt = Module["_BinaryenCallIndirectGetOperandAt"] = wasmExports["Xo"])(a0, a1);

var _BinaryenCallIndirectSetOperandAt = Module["_BinaryenCallIndirectSetOperandAt"] = (a0, a1, a2) => (_BinaryenCallIndirectSetOperandAt = Module["_BinaryenCallIndirectSetOperandAt"] = wasmExports["Yo"])(a0, a1, a2);

var _BinaryenCallIndirectAppendOperand = Module["_BinaryenCallIndirectAppendOperand"] = (a0, a1) => (_BinaryenCallIndirectAppendOperand = Module["_BinaryenCallIndirectAppendOperand"] = wasmExports["Zo"])(a0, a1);

var _BinaryenCallIndirectInsertOperandAt = Module["_BinaryenCallIndirectInsertOperandAt"] = (a0, a1, a2) => (_BinaryenCallIndirectInsertOperandAt = Module["_BinaryenCallIndirectInsertOperandAt"] = wasmExports["_o"])(a0, a1, a2);

var _BinaryenCallIndirectRemoveOperandAt = Module["_BinaryenCallIndirectRemoveOperandAt"] = (a0, a1) => (_BinaryenCallIndirectRemoveOperandAt = Module["_BinaryenCallIndirectRemoveOperandAt"] = wasmExports["$o"])(a0, a1);

var _BinaryenCallIndirectIsReturn = Module["_BinaryenCallIndirectIsReturn"] = a0 => (_BinaryenCallIndirectIsReturn = Module["_BinaryenCallIndirectIsReturn"] = wasmExports["ap"])(a0);

var _BinaryenCallIndirectSetReturn = Module["_BinaryenCallIndirectSetReturn"] = (a0, a1) => (_BinaryenCallIndirectSetReturn = Module["_BinaryenCallIndirectSetReturn"] = wasmExports["bp"])(a0, a1);

var _BinaryenCallIndirectGetParams = Module["_BinaryenCallIndirectGetParams"] = a0 => (_BinaryenCallIndirectGetParams = Module["_BinaryenCallIndirectGetParams"] = wasmExports["cp"])(a0);

var _BinaryenCallIndirectSetParams = Module["_BinaryenCallIndirectSetParams"] = (a0, a1) => (_BinaryenCallIndirectSetParams = Module["_BinaryenCallIndirectSetParams"] = wasmExports["dp"])(a0, a1);

var _BinaryenCallIndirectGetResults = Module["_BinaryenCallIndirectGetResults"] = a0 => (_BinaryenCallIndirectGetResults = Module["_BinaryenCallIndirectGetResults"] = wasmExports["ep"])(a0);

var _BinaryenCallIndirectSetResults = Module["_BinaryenCallIndirectSetResults"] = (a0, a1) => (_BinaryenCallIndirectSetResults = Module["_BinaryenCallIndirectSetResults"] = wasmExports["fp"])(a0, a1);

var _BinaryenLocalGetGetIndex = Module["_BinaryenLocalGetGetIndex"] = a0 => (_BinaryenLocalGetGetIndex = Module["_BinaryenLocalGetGetIndex"] = wasmExports["gp"])(a0);

var _BinaryenLocalGetSetIndex = Module["_BinaryenLocalGetSetIndex"] = (a0, a1) => (_BinaryenLocalGetSetIndex = Module["_BinaryenLocalGetSetIndex"] = wasmExports["hp"])(a0, a1);

var _BinaryenLocalSetIsTee = Module["_BinaryenLocalSetIsTee"] = a0 => (_BinaryenLocalSetIsTee = Module["_BinaryenLocalSetIsTee"] = wasmExports["ip"])(a0);

var _BinaryenLocalSetGetIndex = Module["_BinaryenLocalSetGetIndex"] = a0 => (_BinaryenLocalSetGetIndex = Module["_BinaryenLocalSetGetIndex"] = wasmExports["jp"])(a0);

var _BinaryenLocalSetSetIndex = Module["_BinaryenLocalSetSetIndex"] = (a0, a1) => (_BinaryenLocalSetSetIndex = Module["_BinaryenLocalSetSetIndex"] = wasmExports["kp"])(a0, a1);

var _BinaryenLocalSetGetValue = Module["_BinaryenLocalSetGetValue"] = a0 => (_BinaryenLocalSetGetValue = Module["_BinaryenLocalSetGetValue"] = wasmExports["lp"])(a0);

var _BinaryenLocalSetSetValue = Module["_BinaryenLocalSetSetValue"] = (a0, a1) => (_BinaryenLocalSetSetValue = Module["_BinaryenLocalSetSetValue"] = wasmExports["mp"])(a0, a1);

var _BinaryenGlobalGetGetName = Module["_BinaryenGlobalGetGetName"] = a0 => (_BinaryenGlobalGetGetName = Module["_BinaryenGlobalGetGetName"] = wasmExports["np"])(a0);

var _BinaryenGlobalGetSetName = Module["_BinaryenGlobalGetSetName"] = (a0, a1) => (_BinaryenGlobalGetSetName = Module["_BinaryenGlobalGetSetName"] = wasmExports["op"])(a0, a1);

var _BinaryenGlobalSetGetName = Module["_BinaryenGlobalSetGetName"] = a0 => (_BinaryenGlobalSetGetName = Module["_BinaryenGlobalSetGetName"] = wasmExports["pp"])(a0);

var _BinaryenGlobalSetSetName = Module["_BinaryenGlobalSetSetName"] = (a0, a1) => (_BinaryenGlobalSetSetName = Module["_BinaryenGlobalSetSetName"] = wasmExports["qp"])(a0, a1);

var _BinaryenGlobalSetGetValue = Module["_BinaryenGlobalSetGetValue"] = a0 => (_BinaryenGlobalSetGetValue = Module["_BinaryenGlobalSetGetValue"] = wasmExports["rp"])(a0);

var _BinaryenGlobalSetSetValue = Module["_BinaryenGlobalSetSetValue"] = (a0, a1) => (_BinaryenGlobalSetSetValue = Module["_BinaryenGlobalSetSetValue"] = wasmExports["sp"])(a0, a1);

var _BinaryenTableGetGetTable = Module["_BinaryenTableGetGetTable"] = a0 => (_BinaryenTableGetGetTable = Module["_BinaryenTableGetGetTable"] = wasmExports["tp"])(a0);

var _BinaryenTableGetSetTable = Module["_BinaryenTableGetSetTable"] = (a0, a1) => (_BinaryenTableGetSetTable = Module["_BinaryenTableGetSetTable"] = wasmExports["up"])(a0, a1);

var _BinaryenTableGetGetIndex = Module["_BinaryenTableGetGetIndex"] = a0 => (_BinaryenTableGetGetIndex = Module["_BinaryenTableGetGetIndex"] = wasmExports["vp"])(a0);

var _BinaryenTableGetSetIndex = Module["_BinaryenTableGetSetIndex"] = (a0, a1) => (_BinaryenTableGetSetIndex = Module["_BinaryenTableGetSetIndex"] = wasmExports["wp"])(a0, a1);

var _BinaryenTableSetGetTable = Module["_BinaryenTableSetGetTable"] = a0 => (_BinaryenTableSetGetTable = Module["_BinaryenTableSetGetTable"] = wasmExports["xp"])(a0);

var _BinaryenTableSetSetTable = Module["_BinaryenTableSetSetTable"] = (a0, a1) => (_BinaryenTableSetSetTable = Module["_BinaryenTableSetSetTable"] = wasmExports["yp"])(a0, a1);

var _BinaryenTableSetGetIndex = Module["_BinaryenTableSetGetIndex"] = a0 => (_BinaryenTableSetGetIndex = Module["_BinaryenTableSetGetIndex"] = wasmExports["zp"])(a0);

var _BinaryenTableSetSetIndex = Module["_BinaryenTableSetSetIndex"] = (a0, a1) => (_BinaryenTableSetSetIndex = Module["_BinaryenTableSetSetIndex"] = wasmExports["Ap"])(a0, a1);

var _BinaryenTableSetGetValue = Module["_BinaryenTableSetGetValue"] = a0 => (_BinaryenTableSetGetValue = Module["_BinaryenTableSetGetValue"] = wasmExports["Bp"])(a0);

var _BinaryenTableSetSetValue = Module["_BinaryenTableSetSetValue"] = (a0, a1) => (_BinaryenTableSetSetValue = Module["_BinaryenTableSetSetValue"] = wasmExports["Cp"])(a0, a1);

var _BinaryenTableSizeGetTable = Module["_BinaryenTableSizeGetTable"] = a0 => (_BinaryenTableSizeGetTable = Module["_BinaryenTableSizeGetTable"] = wasmExports["Dp"])(a0);

var _BinaryenTableSizeSetTable = Module["_BinaryenTableSizeSetTable"] = (a0, a1) => (_BinaryenTableSizeSetTable = Module["_BinaryenTableSizeSetTable"] = wasmExports["Ep"])(a0, a1);

var _BinaryenTableGrowGetTable = Module["_BinaryenTableGrowGetTable"] = a0 => (_BinaryenTableGrowGetTable = Module["_BinaryenTableGrowGetTable"] = wasmExports["Fp"])(a0);

var _BinaryenTableGrowSetTable = Module["_BinaryenTableGrowSetTable"] = (a0, a1) => (_BinaryenTableGrowSetTable = Module["_BinaryenTableGrowSetTable"] = wasmExports["Gp"])(a0, a1);

var _BinaryenTableGrowGetValue = Module["_BinaryenTableGrowGetValue"] = a0 => (_BinaryenTableGrowGetValue = Module["_BinaryenTableGrowGetValue"] = wasmExports["Hp"])(a0);

var _BinaryenTableGrowSetValue = Module["_BinaryenTableGrowSetValue"] = (a0, a1) => (_BinaryenTableGrowSetValue = Module["_BinaryenTableGrowSetValue"] = wasmExports["Ip"])(a0, a1);

var _BinaryenTableGrowGetDelta = Module["_BinaryenTableGrowGetDelta"] = a0 => (_BinaryenTableGrowGetDelta = Module["_BinaryenTableGrowGetDelta"] = wasmExports["Jp"])(a0);

var _BinaryenTableGrowSetDelta = Module["_BinaryenTableGrowSetDelta"] = (a0, a1) => (_BinaryenTableGrowSetDelta = Module["_BinaryenTableGrowSetDelta"] = wasmExports["Kp"])(a0, a1);

var _BinaryenMemoryGrowGetDelta = Module["_BinaryenMemoryGrowGetDelta"] = a0 => (_BinaryenMemoryGrowGetDelta = Module["_BinaryenMemoryGrowGetDelta"] = wasmExports["Lp"])(a0);

var _BinaryenMemoryGrowSetDelta = Module["_BinaryenMemoryGrowSetDelta"] = (a0, a1) => (_BinaryenMemoryGrowSetDelta = Module["_BinaryenMemoryGrowSetDelta"] = wasmExports["Mp"])(a0, a1);

var _BinaryenLoadIsAtomic = Module["_BinaryenLoadIsAtomic"] = a0 => (_BinaryenLoadIsAtomic = Module["_BinaryenLoadIsAtomic"] = wasmExports["Np"])(a0);

var _BinaryenLoadSetAtomic = Module["_BinaryenLoadSetAtomic"] = (a0, a1) => (_BinaryenLoadSetAtomic = Module["_BinaryenLoadSetAtomic"] = wasmExports["Op"])(a0, a1);

var _BinaryenLoadIsSigned = Module["_BinaryenLoadIsSigned"] = a0 => (_BinaryenLoadIsSigned = Module["_BinaryenLoadIsSigned"] = wasmExports["Pp"])(a0);

var _BinaryenLoadSetSigned = Module["_BinaryenLoadSetSigned"] = (a0, a1) => (_BinaryenLoadSetSigned = Module["_BinaryenLoadSetSigned"] = wasmExports["Qp"])(a0, a1);

var _BinaryenLoadGetBytes = Module["_BinaryenLoadGetBytes"] = a0 => (_BinaryenLoadGetBytes = Module["_BinaryenLoadGetBytes"] = wasmExports["Rp"])(a0);

var _BinaryenLoadSetBytes = Module["_BinaryenLoadSetBytes"] = (a0, a1) => (_BinaryenLoadSetBytes = Module["_BinaryenLoadSetBytes"] = wasmExports["Sp"])(a0, a1);

var _BinaryenLoadGetOffset = Module["_BinaryenLoadGetOffset"] = a0 => (_BinaryenLoadGetOffset = Module["_BinaryenLoadGetOffset"] = wasmExports["Tp"])(a0);

var _BinaryenLoadSetOffset = Module["_BinaryenLoadSetOffset"] = (a0, a1) => (_BinaryenLoadSetOffset = Module["_BinaryenLoadSetOffset"] = wasmExports["Up"])(a0, a1);

var _BinaryenLoadGetAlign = Module["_BinaryenLoadGetAlign"] = a0 => (_BinaryenLoadGetAlign = Module["_BinaryenLoadGetAlign"] = wasmExports["Vp"])(a0);

var _BinaryenLoadSetAlign = Module["_BinaryenLoadSetAlign"] = (a0, a1) => (_BinaryenLoadSetAlign = Module["_BinaryenLoadSetAlign"] = wasmExports["Wp"])(a0, a1);

var _BinaryenLoadGetPtr = Module["_BinaryenLoadGetPtr"] = a0 => (_BinaryenLoadGetPtr = Module["_BinaryenLoadGetPtr"] = wasmExports["Xp"])(a0);

var _BinaryenLoadSetPtr = Module["_BinaryenLoadSetPtr"] = (a0, a1) => (_BinaryenLoadSetPtr = Module["_BinaryenLoadSetPtr"] = wasmExports["Yp"])(a0, a1);

var _BinaryenStoreIsAtomic = Module["_BinaryenStoreIsAtomic"] = a0 => (_BinaryenStoreIsAtomic = Module["_BinaryenStoreIsAtomic"] = wasmExports["Zp"])(a0);

var _BinaryenStoreSetAtomic = Module["_BinaryenStoreSetAtomic"] = (a0, a1) => (_BinaryenStoreSetAtomic = Module["_BinaryenStoreSetAtomic"] = wasmExports["_p"])(a0, a1);

var _BinaryenStoreGetBytes = Module["_BinaryenStoreGetBytes"] = a0 => (_BinaryenStoreGetBytes = Module["_BinaryenStoreGetBytes"] = wasmExports["$p"])(a0);

var _BinaryenStoreSetBytes = Module["_BinaryenStoreSetBytes"] = (a0, a1) => (_BinaryenStoreSetBytes = Module["_BinaryenStoreSetBytes"] = wasmExports["aq"])(a0, a1);

var _BinaryenStoreGetOffset = Module["_BinaryenStoreGetOffset"] = a0 => (_BinaryenStoreGetOffset = Module["_BinaryenStoreGetOffset"] = wasmExports["bq"])(a0);

var _BinaryenStoreSetOffset = Module["_BinaryenStoreSetOffset"] = (a0, a1) => (_BinaryenStoreSetOffset = Module["_BinaryenStoreSetOffset"] = wasmExports["cq"])(a0, a1);

var _BinaryenStoreGetAlign = Module["_BinaryenStoreGetAlign"] = a0 => (_BinaryenStoreGetAlign = Module["_BinaryenStoreGetAlign"] = wasmExports["dq"])(a0);

var _BinaryenStoreSetAlign = Module["_BinaryenStoreSetAlign"] = (a0, a1) => (_BinaryenStoreSetAlign = Module["_BinaryenStoreSetAlign"] = wasmExports["eq"])(a0, a1);

var _BinaryenStoreGetPtr = Module["_BinaryenStoreGetPtr"] = a0 => (_BinaryenStoreGetPtr = Module["_BinaryenStoreGetPtr"] = wasmExports["fq"])(a0);

var _BinaryenStoreSetPtr = Module["_BinaryenStoreSetPtr"] = (a0, a1) => (_BinaryenStoreSetPtr = Module["_BinaryenStoreSetPtr"] = wasmExports["gq"])(a0, a1);

var _BinaryenStoreGetValue = Module["_BinaryenStoreGetValue"] = a0 => (_BinaryenStoreGetValue = Module["_BinaryenStoreGetValue"] = wasmExports["hq"])(a0);

var _BinaryenStoreSetValue = Module["_BinaryenStoreSetValue"] = (a0, a1) => (_BinaryenStoreSetValue = Module["_BinaryenStoreSetValue"] = wasmExports["iq"])(a0, a1);

var _BinaryenStoreGetValueType = Module["_BinaryenStoreGetValueType"] = a0 => (_BinaryenStoreGetValueType = Module["_BinaryenStoreGetValueType"] = wasmExports["jq"])(a0);

var _BinaryenStoreSetValueType = Module["_BinaryenStoreSetValueType"] = (a0, a1) => (_BinaryenStoreSetValueType = Module["_BinaryenStoreSetValueType"] = wasmExports["kq"])(a0, a1);

var _BinaryenConstGetValueI32 = Module["_BinaryenConstGetValueI32"] = a0 => (_BinaryenConstGetValueI32 = Module["_BinaryenConstGetValueI32"] = wasmExports["lq"])(a0);

var _BinaryenConstSetValueI32 = Module["_BinaryenConstSetValueI32"] = (a0, a1) => (_BinaryenConstSetValueI32 = Module["_BinaryenConstSetValueI32"] = wasmExports["mq"])(a0, a1);

var _BinaryenConstGetValueI64 = Module["_BinaryenConstGetValueI64"] = a0 => (_BinaryenConstGetValueI64 = Module["_BinaryenConstGetValueI64"] = wasmExports["nq"])(a0);

var _BinaryenConstSetValueI64 = Module["_BinaryenConstSetValueI64"] = (a0, a1, a2) => (_BinaryenConstSetValueI64 = Module["_BinaryenConstSetValueI64"] = wasmExports["oq"])(a0, a1, a2);

var _BinaryenConstGetValueI64Low = Module["_BinaryenConstGetValueI64Low"] = a0 => (_BinaryenConstGetValueI64Low = Module["_BinaryenConstGetValueI64Low"] = wasmExports["pq"])(a0);

var _BinaryenConstSetValueI64Low = Module["_BinaryenConstSetValueI64Low"] = (a0, a1) => (_BinaryenConstSetValueI64Low = Module["_BinaryenConstSetValueI64Low"] = wasmExports["qq"])(a0, a1);

var _BinaryenConstGetValueI64High = Module["_BinaryenConstGetValueI64High"] = a0 => (_BinaryenConstGetValueI64High = Module["_BinaryenConstGetValueI64High"] = wasmExports["rq"])(a0);

var _BinaryenConstSetValueI64High = Module["_BinaryenConstSetValueI64High"] = (a0, a1) => (_BinaryenConstSetValueI64High = Module["_BinaryenConstSetValueI64High"] = wasmExports["sq"])(a0, a1);

var _BinaryenConstGetValueF32 = Module["_BinaryenConstGetValueF32"] = a0 => (_BinaryenConstGetValueF32 = Module["_BinaryenConstGetValueF32"] = wasmExports["tq"])(a0);

var _BinaryenConstSetValueF32 = Module["_BinaryenConstSetValueF32"] = (a0, a1) => (_BinaryenConstSetValueF32 = Module["_BinaryenConstSetValueF32"] = wasmExports["uq"])(a0, a1);

var _BinaryenConstGetValueF64 = Module["_BinaryenConstGetValueF64"] = a0 => (_BinaryenConstGetValueF64 = Module["_BinaryenConstGetValueF64"] = wasmExports["vq"])(a0);

var _BinaryenConstSetValueF64 = Module["_BinaryenConstSetValueF64"] = (a0, a1) => (_BinaryenConstSetValueF64 = Module["_BinaryenConstSetValueF64"] = wasmExports["wq"])(a0, a1);

var _BinaryenConstGetValueV128 = Module["_BinaryenConstGetValueV128"] = (a0, a1) => (_BinaryenConstGetValueV128 = Module["_BinaryenConstGetValueV128"] = wasmExports["xq"])(a0, a1);

var _BinaryenConstSetValueV128 = Module["_BinaryenConstSetValueV128"] = (a0, a1) => (_BinaryenConstSetValueV128 = Module["_BinaryenConstSetValueV128"] = wasmExports["yq"])(a0, a1);

var _BinaryenUnaryGetOp = Module["_BinaryenUnaryGetOp"] = a0 => (_BinaryenUnaryGetOp = Module["_BinaryenUnaryGetOp"] = wasmExports["zq"])(a0);

var _BinaryenUnarySetOp = Module["_BinaryenUnarySetOp"] = (a0, a1) => (_BinaryenUnarySetOp = Module["_BinaryenUnarySetOp"] = wasmExports["Aq"])(a0, a1);

var _BinaryenUnaryGetValue = Module["_BinaryenUnaryGetValue"] = a0 => (_BinaryenUnaryGetValue = Module["_BinaryenUnaryGetValue"] = wasmExports["Bq"])(a0);

var _BinaryenUnarySetValue = Module["_BinaryenUnarySetValue"] = (a0, a1) => (_BinaryenUnarySetValue = Module["_BinaryenUnarySetValue"] = wasmExports["Cq"])(a0, a1);

var _BinaryenBinaryGetOp = Module["_BinaryenBinaryGetOp"] = a0 => (_BinaryenBinaryGetOp = Module["_BinaryenBinaryGetOp"] = wasmExports["Dq"])(a0);

var _BinaryenBinarySetOp = Module["_BinaryenBinarySetOp"] = (a0, a1) => (_BinaryenBinarySetOp = Module["_BinaryenBinarySetOp"] = wasmExports["Eq"])(a0, a1);

var _BinaryenBinaryGetLeft = Module["_BinaryenBinaryGetLeft"] = a0 => (_BinaryenBinaryGetLeft = Module["_BinaryenBinaryGetLeft"] = wasmExports["Fq"])(a0);

var _BinaryenBinarySetLeft = Module["_BinaryenBinarySetLeft"] = (a0, a1) => (_BinaryenBinarySetLeft = Module["_BinaryenBinarySetLeft"] = wasmExports["Gq"])(a0, a1);

var _BinaryenBinaryGetRight = Module["_BinaryenBinaryGetRight"] = a0 => (_BinaryenBinaryGetRight = Module["_BinaryenBinaryGetRight"] = wasmExports["Hq"])(a0);

var _BinaryenBinarySetRight = Module["_BinaryenBinarySetRight"] = (a0, a1) => (_BinaryenBinarySetRight = Module["_BinaryenBinarySetRight"] = wasmExports["Iq"])(a0, a1);

var _BinaryenSelectGetIfTrue = Module["_BinaryenSelectGetIfTrue"] = a0 => (_BinaryenSelectGetIfTrue = Module["_BinaryenSelectGetIfTrue"] = wasmExports["Jq"])(a0);

var _BinaryenSelectSetIfTrue = Module["_BinaryenSelectSetIfTrue"] = (a0, a1) => (_BinaryenSelectSetIfTrue = Module["_BinaryenSelectSetIfTrue"] = wasmExports["Kq"])(a0, a1);

var _BinaryenSelectGetIfFalse = Module["_BinaryenSelectGetIfFalse"] = a0 => (_BinaryenSelectGetIfFalse = Module["_BinaryenSelectGetIfFalse"] = wasmExports["Lq"])(a0);

var _BinaryenSelectSetIfFalse = Module["_BinaryenSelectSetIfFalse"] = (a0, a1) => (_BinaryenSelectSetIfFalse = Module["_BinaryenSelectSetIfFalse"] = wasmExports["Mq"])(a0, a1);

var _BinaryenSelectGetCondition = Module["_BinaryenSelectGetCondition"] = a0 => (_BinaryenSelectGetCondition = Module["_BinaryenSelectGetCondition"] = wasmExports["Nq"])(a0);

var _BinaryenSelectSetCondition = Module["_BinaryenSelectSetCondition"] = (a0, a1) => (_BinaryenSelectSetCondition = Module["_BinaryenSelectSetCondition"] = wasmExports["Oq"])(a0, a1);

var _BinaryenDropGetValue = Module["_BinaryenDropGetValue"] = a0 => (_BinaryenDropGetValue = Module["_BinaryenDropGetValue"] = wasmExports["Pq"])(a0);

var _BinaryenDropSetValue = Module["_BinaryenDropSetValue"] = (a0, a1) => (_BinaryenDropSetValue = Module["_BinaryenDropSetValue"] = wasmExports["Qq"])(a0, a1);

var _BinaryenReturnGetValue = Module["_BinaryenReturnGetValue"] = a0 => (_BinaryenReturnGetValue = Module["_BinaryenReturnGetValue"] = wasmExports["Rq"])(a0);

var _BinaryenReturnSetValue = Module["_BinaryenReturnSetValue"] = (a0, a1) => (_BinaryenReturnSetValue = Module["_BinaryenReturnSetValue"] = wasmExports["Sq"])(a0, a1);

var _BinaryenAtomicRMWGetOp = Module["_BinaryenAtomicRMWGetOp"] = a0 => (_BinaryenAtomicRMWGetOp = Module["_BinaryenAtomicRMWGetOp"] = wasmExports["Tq"])(a0);

var _BinaryenAtomicRMWSetOp = Module["_BinaryenAtomicRMWSetOp"] = (a0, a1) => (_BinaryenAtomicRMWSetOp = Module["_BinaryenAtomicRMWSetOp"] = wasmExports["Uq"])(a0, a1);

var _BinaryenAtomicRMWGetBytes = Module["_BinaryenAtomicRMWGetBytes"] = a0 => (_BinaryenAtomicRMWGetBytes = Module["_BinaryenAtomicRMWGetBytes"] = wasmExports["Vq"])(a0);

var _BinaryenAtomicRMWSetBytes = Module["_BinaryenAtomicRMWSetBytes"] = (a0, a1) => (_BinaryenAtomicRMWSetBytes = Module["_BinaryenAtomicRMWSetBytes"] = wasmExports["Wq"])(a0, a1);

var _BinaryenAtomicRMWGetOffset = Module["_BinaryenAtomicRMWGetOffset"] = a0 => (_BinaryenAtomicRMWGetOffset = Module["_BinaryenAtomicRMWGetOffset"] = wasmExports["Xq"])(a0);

var _BinaryenAtomicRMWSetOffset = Module["_BinaryenAtomicRMWSetOffset"] = (a0, a1) => (_BinaryenAtomicRMWSetOffset = Module["_BinaryenAtomicRMWSetOffset"] = wasmExports["Yq"])(a0, a1);

var _BinaryenAtomicRMWGetPtr = Module["_BinaryenAtomicRMWGetPtr"] = a0 => (_BinaryenAtomicRMWGetPtr = Module["_BinaryenAtomicRMWGetPtr"] = wasmExports["Zq"])(a0);

var _BinaryenAtomicRMWSetPtr = Module["_BinaryenAtomicRMWSetPtr"] = (a0, a1) => (_BinaryenAtomicRMWSetPtr = Module["_BinaryenAtomicRMWSetPtr"] = wasmExports["_q"])(a0, a1);

var _BinaryenAtomicRMWGetValue = Module["_BinaryenAtomicRMWGetValue"] = a0 => (_BinaryenAtomicRMWGetValue = Module["_BinaryenAtomicRMWGetValue"] = wasmExports["$q"])(a0);

var _BinaryenAtomicRMWSetValue = Module["_BinaryenAtomicRMWSetValue"] = (a0, a1) => (_BinaryenAtomicRMWSetValue = Module["_BinaryenAtomicRMWSetValue"] = wasmExports["ar"])(a0, a1);

var _BinaryenAtomicCmpxchgGetBytes = Module["_BinaryenAtomicCmpxchgGetBytes"] = a0 => (_BinaryenAtomicCmpxchgGetBytes = Module["_BinaryenAtomicCmpxchgGetBytes"] = wasmExports["br"])(a0);

var _BinaryenAtomicCmpxchgSetBytes = Module["_BinaryenAtomicCmpxchgSetBytes"] = (a0, a1) => (_BinaryenAtomicCmpxchgSetBytes = Module["_BinaryenAtomicCmpxchgSetBytes"] = wasmExports["cr"])(a0, a1);

var _BinaryenAtomicCmpxchgGetOffset = Module["_BinaryenAtomicCmpxchgGetOffset"] = a0 => (_BinaryenAtomicCmpxchgGetOffset = Module["_BinaryenAtomicCmpxchgGetOffset"] = wasmExports["dr"])(a0);

var _BinaryenAtomicCmpxchgSetOffset = Module["_BinaryenAtomicCmpxchgSetOffset"] = (a0, a1) => (_BinaryenAtomicCmpxchgSetOffset = Module["_BinaryenAtomicCmpxchgSetOffset"] = wasmExports["er"])(a0, a1);

var _BinaryenAtomicCmpxchgGetPtr = Module["_BinaryenAtomicCmpxchgGetPtr"] = a0 => (_BinaryenAtomicCmpxchgGetPtr = Module["_BinaryenAtomicCmpxchgGetPtr"] = wasmExports["fr"])(a0);

var _BinaryenAtomicCmpxchgSetPtr = Module["_BinaryenAtomicCmpxchgSetPtr"] = (a0, a1) => (_BinaryenAtomicCmpxchgSetPtr = Module["_BinaryenAtomicCmpxchgSetPtr"] = wasmExports["gr"])(a0, a1);

var _BinaryenAtomicCmpxchgGetExpected = Module["_BinaryenAtomicCmpxchgGetExpected"] = a0 => (_BinaryenAtomicCmpxchgGetExpected = Module["_BinaryenAtomicCmpxchgGetExpected"] = wasmExports["hr"])(a0);

var _BinaryenAtomicCmpxchgSetExpected = Module["_BinaryenAtomicCmpxchgSetExpected"] = (a0, a1) => (_BinaryenAtomicCmpxchgSetExpected = Module["_BinaryenAtomicCmpxchgSetExpected"] = wasmExports["ir"])(a0, a1);

var _BinaryenAtomicCmpxchgGetReplacement = Module["_BinaryenAtomicCmpxchgGetReplacement"] = a0 => (_BinaryenAtomicCmpxchgGetReplacement = Module["_BinaryenAtomicCmpxchgGetReplacement"] = wasmExports["jr"])(a0);

var _BinaryenAtomicCmpxchgSetReplacement = Module["_BinaryenAtomicCmpxchgSetReplacement"] = (a0, a1) => (_BinaryenAtomicCmpxchgSetReplacement = Module["_BinaryenAtomicCmpxchgSetReplacement"] = wasmExports["kr"])(a0, a1);

var _BinaryenAtomicWaitGetPtr = Module["_BinaryenAtomicWaitGetPtr"] = a0 => (_BinaryenAtomicWaitGetPtr = Module["_BinaryenAtomicWaitGetPtr"] = wasmExports["lr"])(a0);

var _BinaryenAtomicWaitSetPtr = Module["_BinaryenAtomicWaitSetPtr"] = (a0, a1) => (_BinaryenAtomicWaitSetPtr = Module["_BinaryenAtomicWaitSetPtr"] = wasmExports["mr"])(a0, a1);

var _BinaryenAtomicWaitGetExpected = Module["_BinaryenAtomicWaitGetExpected"] = a0 => (_BinaryenAtomicWaitGetExpected = Module["_BinaryenAtomicWaitGetExpected"] = wasmExports["nr"])(a0);

var _BinaryenAtomicWaitSetExpected = Module["_BinaryenAtomicWaitSetExpected"] = (a0, a1) => (_BinaryenAtomicWaitSetExpected = Module["_BinaryenAtomicWaitSetExpected"] = wasmExports["or"])(a0, a1);

var _BinaryenAtomicWaitGetTimeout = Module["_BinaryenAtomicWaitGetTimeout"] = a0 => (_BinaryenAtomicWaitGetTimeout = Module["_BinaryenAtomicWaitGetTimeout"] = wasmExports["pr"])(a0);

var _BinaryenAtomicWaitSetTimeout = Module["_BinaryenAtomicWaitSetTimeout"] = (a0, a1) => (_BinaryenAtomicWaitSetTimeout = Module["_BinaryenAtomicWaitSetTimeout"] = wasmExports["qr"])(a0, a1);

var _BinaryenAtomicWaitGetExpectedType = Module["_BinaryenAtomicWaitGetExpectedType"] = a0 => (_BinaryenAtomicWaitGetExpectedType = Module["_BinaryenAtomicWaitGetExpectedType"] = wasmExports["rr"])(a0);

var _BinaryenAtomicWaitSetExpectedType = Module["_BinaryenAtomicWaitSetExpectedType"] = (a0, a1) => (_BinaryenAtomicWaitSetExpectedType = Module["_BinaryenAtomicWaitSetExpectedType"] = wasmExports["sr"])(a0, a1);

var _BinaryenAtomicNotifyGetPtr = Module["_BinaryenAtomicNotifyGetPtr"] = a0 => (_BinaryenAtomicNotifyGetPtr = Module["_BinaryenAtomicNotifyGetPtr"] = wasmExports["tr"])(a0);

var _BinaryenAtomicNotifySetPtr = Module["_BinaryenAtomicNotifySetPtr"] = (a0, a1) => (_BinaryenAtomicNotifySetPtr = Module["_BinaryenAtomicNotifySetPtr"] = wasmExports["ur"])(a0, a1);

var _BinaryenAtomicNotifyGetNotifyCount = Module["_BinaryenAtomicNotifyGetNotifyCount"] = a0 => (_BinaryenAtomicNotifyGetNotifyCount = Module["_BinaryenAtomicNotifyGetNotifyCount"] = wasmExports["vr"])(a0);

var _BinaryenAtomicNotifySetNotifyCount = Module["_BinaryenAtomicNotifySetNotifyCount"] = (a0, a1) => (_BinaryenAtomicNotifySetNotifyCount = Module["_BinaryenAtomicNotifySetNotifyCount"] = wasmExports["wr"])(a0, a1);

var _BinaryenAtomicFenceGetOrder = Module["_BinaryenAtomicFenceGetOrder"] = a0 => (_BinaryenAtomicFenceGetOrder = Module["_BinaryenAtomicFenceGetOrder"] = wasmExports["xr"])(a0);

var _BinaryenAtomicFenceSetOrder = Module["_BinaryenAtomicFenceSetOrder"] = (a0, a1) => (_BinaryenAtomicFenceSetOrder = Module["_BinaryenAtomicFenceSetOrder"] = wasmExports["yr"])(a0, a1);

var _BinaryenSIMDExtractGetOp = Module["_BinaryenSIMDExtractGetOp"] = a0 => (_BinaryenSIMDExtractGetOp = Module["_BinaryenSIMDExtractGetOp"] = wasmExports["zr"])(a0);

var _BinaryenSIMDExtractSetOp = Module["_BinaryenSIMDExtractSetOp"] = (a0, a1) => (_BinaryenSIMDExtractSetOp = Module["_BinaryenSIMDExtractSetOp"] = wasmExports["Ar"])(a0, a1);

var _BinaryenSIMDExtractGetVec = Module["_BinaryenSIMDExtractGetVec"] = a0 => (_BinaryenSIMDExtractGetVec = Module["_BinaryenSIMDExtractGetVec"] = wasmExports["Br"])(a0);

var _BinaryenSIMDExtractSetVec = Module["_BinaryenSIMDExtractSetVec"] = (a0, a1) => (_BinaryenSIMDExtractSetVec = Module["_BinaryenSIMDExtractSetVec"] = wasmExports["Cr"])(a0, a1);

var _BinaryenSIMDExtractGetIndex = Module["_BinaryenSIMDExtractGetIndex"] = a0 => (_BinaryenSIMDExtractGetIndex = Module["_BinaryenSIMDExtractGetIndex"] = wasmExports["Dr"])(a0);

var _BinaryenSIMDExtractSetIndex = Module["_BinaryenSIMDExtractSetIndex"] = (a0, a1) => (_BinaryenSIMDExtractSetIndex = Module["_BinaryenSIMDExtractSetIndex"] = wasmExports["Er"])(a0, a1);

var _BinaryenSIMDReplaceGetOp = Module["_BinaryenSIMDReplaceGetOp"] = a0 => (_BinaryenSIMDReplaceGetOp = Module["_BinaryenSIMDReplaceGetOp"] = wasmExports["Fr"])(a0);

var _BinaryenSIMDReplaceSetOp = Module["_BinaryenSIMDReplaceSetOp"] = (a0, a1) => (_BinaryenSIMDReplaceSetOp = Module["_BinaryenSIMDReplaceSetOp"] = wasmExports["Gr"])(a0, a1);

var _BinaryenSIMDReplaceGetVec = Module["_BinaryenSIMDReplaceGetVec"] = a0 => (_BinaryenSIMDReplaceGetVec = Module["_BinaryenSIMDReplaceGetVec"] = wasmExports["Hr"])(a0);

var _BinaryenSIMDReplaceSetVec = Module["_BinaryenSIMDReplaceSetVec"] = (a0, a1) => (_BinaryenSIMDReplaceSetVec = Module["_BinaryenSIMDReplaceSetVec"] = wasmExports["Ir"])(a0, a1);

var _BinaryenSIMDReplaceGetIndex = Module["_BinaryenSIMDReplaceGetIndex"] = a0 => (_BinaryenSIMDReplaceGetIndex = Module["_BinaryenSIMDReplaceGetIndex"] = wasmExports["Jr"])(a0);

var _BinaryenSIMDReplaceSetIndex = Module["_BinaryenSIMDReplaceSetIndex"] = (a0, a1) => (_BinaryenSIMDReplaceSetIndex = Module["_BinaryenSIMDReplaceSetIndex"] = wasmExports["Kr"])(a0, a1);

var _BinaryenSIMDReplaceGetValue = Module["_BinaryenSIMDReplaceGetValue"] = a0 => (_BinaryenSIMDReplaceGetValue = Module["_BinaryenSIMDReplaceGetValue"] = wasmExports["Lr"])(a0);

var _BinaryenSIMDReplaceSetValue = Module["_BinaryenSIMDReplaceSetValue"] = (a0, a1) => (_BinaryenSIMDReplaceSetValue = Module["_BinaryenSIMDReplaceSetValue"] = wasmExports["Mr"])(a0, a1);

var _BinaryenSIMDShuffleGetLeft = Module["_BinaryenSIMDShuffleGetLeft"] = a0 => (_BinaryenSIMDShuffleGetLeft = Module["_BinaryenSIMDShuffleGetLeft"] = wasmExports["Nr"])(a0);

var _BinaryenSIMDShuffleSetLeft = Module["_BinaryenSIMDShuffleSetLeft"] = (a0, a1) => (_BinaryenSIMDShuffleSetLeft = Module["_BinaryenSIMDShuffleSetLeft"] = wasmExports["Or"])(a0, a1);

var _BinaryenSIMDShuffleGetRight = Module["_BinaryenSIMDShuffleGetRight"] = a0 => (_BinaryenSIMDShuffleGetRight = Module["_BinaryenSIMDShuffleGetRight"] = wasmExports["Pr"])(a0);

var _BinaryenSIMDShuffleSetRight = Module["_BinaryenSIMDShuffleSetRight"] = (a0, a1) => (_BinaryenSIMDShuffleSetRight = Module["_BinaryenSIMDShuffleSetRight"] = wasmExports["Qr"])(a0, a1);

var _BinaryenSIMDShuffleGetMask = Module["_BinaryenSIMDShuffleGetMask"] = (a0, a1) => (_BinaryenSIMDShuffleGetMask = Module["_BinaryenSIMDShuffleGetMask"] = wasmExports["Rr"])(a0, a1);

var _BinaryenSIMDShuffleSetMask = Module["_BinaryenSIMDShuffleSetMask"] = (a0, a1) => (_BinaryenSIMDShuffleSetMask = Module["_BinaryenSIMDShuffleSetMask"] = wasmExports["Sr"])(a0, a1);

var _BinaryenSIMDTernaryGetOp = Module["_BinaryenSIMDTernaryGetOp"] = a0 => (_BinaryenSIMDTernaryGetOp = Module["_BinaryenSIMDTernaryGetOp"] = wasmExports["Tr"])(a0);

var _BinaryenSIMDTernarySetOp = Module["_BinaryenSIMDTernarySetOp"] = (a0, a1) => (_BinaryenSIMDTernarySetOp = Module["_BinaryenSIMDTernarySetOp"] = wasmExports["Ur"])(a0, a1);

var _BinaryenSIMDTernaryGetA = Module["_BinaryenSIMDTernaryGetA"] = a0 => (_BinaryenSIMDTernaryGetA = Module["_BinaryenSIMDTernaryGetA"] = wasmExports["Vr"])(a0);

var _BinaryenSIMDTernarySetA = Module["_BinaryenSIMDTernarySetA"] = (a0, a1) => (_BinaryenSIMDTernarySetA = Module["_BinaryenSIMDTernarySetA"] = wasmExports["Wr"])(a0, a1);

var _BinaryenSIMDTernaryGetB = Module["_BinaryenSIMDTernaryGetB"] = a0 => (_BinaryenSIMDTernaryGetB = Module["_BinaryenSIMDTernaryGetB"] = wasmExports["Xr"])(a0);

var _BinaryenSIMDTernarySetB = Module["_BinaryenSIMDTernarySetB"] = (a0, a1) => (_BinaryenSIMDTernarySetB = Module["_BinaryenSIMDTernarySetB"] = wasmExports["Yr"])(a0, a1);

var _BinaryenSIMDTernaryGetC = Module["_BinaryenSIMDTernaryGetC"] = a0 => (_BinaryenSIMDTernaryGetC = Module["_BinaryenSIMDTernaryGetC"] = wasmExports["Zr"])(a0);

var _BinaryenSIMDTernarySetC = Module["_BinaryenSIMDTernarySetC"] = (a0, a1) => (_BinaryenSIMDTernarySetC = Module["_BinaryenSIMDTernarySetC"] = wasmExports["_r"])(a0, a1);

var _BinaryenSIMDShiftGetOp = Module["_BinaryenSIMDShiftGetOp"] = a0 => (_BinaryenSIMDShiftGetOp = Module["_BinaryenSIMDShiftGetOp"] = wasmExports["$r"])(a0);

var _BinaryenSIMDShiftSetOp = Module["_BinaryenSIMDShiftSetOp"] = (a0, a1) => (_BinaryenSIMDShiftSetOp = Module["_BinaryenSIMDShiftSetOp"] = wasmExports["as"])(a0, a1);

var _BinaryenSIMDShiftGetVec = Module["_BinaryenSIMDShiftGetVec"] = a0 => (_BinaryenSIMDShiftGetVec = Module["_BinaryenSIMDShiftGetVec"] = wasmExports["bs"])(a0);

var _BinaryenSIMDShiftSetVec = Module["_BinaryenSIMDShiftSetVec"] = (a0, a1) => (_BinaryenSIMDShiftSetVec = Module["_BinaryenSIMDShiftSetVec"] = wasmExports["cs"])(a0, a1);

var _BinaryenSIMDShiftGetShift = Module["_BinaryenSIMDShiftGetShift"] = a0 => (_BinaryenSIMDShiftGetShift = Module["_BinaryenSIMDShiftGetShift"] = wasmExports["ds"])(a0);

var _BinaryenSIMDShiftSetShift = Module["_BinaryenSIMDShiftSetShift"] = (a0, a1) => (_BinaryenSIMDShiftSetShift = Module["_BinaryenSIMDShiftSetShift"] = wasmExports["es"])(a0, a1);

var _BinaryenSIMDLoadGetOp = Module["_BinaryenSIMDLoadGetOp"] = a0 => (_BinaryenSIMDLoadGetOp = Module["_BinaryenSIMDLoadGetOp"] = wasmExports["fs"])(a0);

var _BinaryenSIMDLoadSetOp = Module["_BinaryenSIMDLoadSetOp"] = (a0, a1) => (_BinaryenSIMDLoadSetOp = Module["_BinaryenSIMDLoadSetOp"] = wasmExports["gs"])(a0, a1);

var _BinaryenSIMDLoadGetOffset = Module["_BinaryenSIMDLoadGetOffset"] = a0 => (_BinaryenSIMDLoadGetOffset = Module["_BinaryenSIMDLoadGetOffset"] = wasmExports["hs"])(a0);

var _BinaryenSIMDLoadSetOffset = Module["_BinaryenSIMDLoadSetOffset"] = (a0, a1) => (_BinaryenSIMDLoadSetOffset = Module["_BinaryenSIMDLoadSetOffset"] = wasmExports["is"])(a0, a1);

var _BinaryenSIMDLoadGetAlign = Module["_BinaryenSIMDLoadGetAlign"] = a0 => (_BinaryenSIMDLoadGetAlign = Module["_BinaryenSIMDLoadGetAlign"] = wasmExports["js"])(a0);

var _BinaryenSIMDLoadSetAlign = Module["_BinaryenSIMDLoadSetAlign"] = (a0, a1) => (_BinaryenSIMDLoadSetAlign = Module["_BinaryenSIMDLoadSetAlign"] = wasmExports["ks"])(a0, a1);

var _BinaryenSIMDLoadGetPtr = Module["_BinaryenSIMDLoadGetPtr"] = a0 => (_BinaryenSIMDLoadGetPtr = Module["_BinaryenSIMDLoadGetPtr"] = wasmExports["ls"])(a0);

var _BinaryenSIMDLoadSetPtr = Module["_BinaryenSIMDLoadSetPtr"] = (a0, a1) => (_BinaryenSIMDLoadSetPtr = Module["_BinaryenSIMDLoadSetPtr"] = wasmExports["ms"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneGetOp = Module["_BinaryenSIMDLoadStoreLaneGetOp"] = a0 => (_BinaryenSIMDLoadStoreLaneGetOp = Module["_BinaryenSIMDLoadStoreLaneGetOp"] = wasmExports["ns"])(a0);

var _BinaryenSIMDLoadStoreLaneSetOp = Module["_BinaryenSIMDLoadStoreLaneSetOp"] = (a0, a1) => (_BinaryenSIMDLoadStoreLaneSetOp = Module["_BinaryenSIMDLoadStoreLaneSetOp"] = wasmExports["os"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneGetOffset = Module["_BinaryenSIMDLoadStoreLaneGetOffset"] = a0 => (_BinaryenSIMDLoadStoreLaneGetOffset = Module["_BinaryenSIMDLoadStoreLaneGetOffset"] = wasmExports["ps"])(a0);

var _BinaryenSIMDLoadStoreLaneSetOffset = Module["_BinaryenSIMDLoadStoreLaneSetOffset"] = (a0, a1) => (_BinaryenSIMDLoadStoreLaneSetOffset = Module["_BinaryenSIMDLoadStoreLaneSetOffset"] = wasmExports["qs"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneGetAlign = Module["_BinaryenSIMDLoadStoreLaneGetAlign"] = a0 => (_BinaryenSIMDLoadStoreLaneGetAlign = Module["_BinaryenSIMDLoadStoreLaneGetAlign"] = wasmExports["rs"])(a0);

var _BinaryenSIMDLoadStoreLaneSetAlign = Module["_BinaryenSIMDLoadStoreLaneSetAlign"] = (a0, a1) => (_BinaryenSIMDLoadStoreLaneSetAlign = Module["_BinaryenSIMDLoadStoreLaneSetAlign"] = wasmExports["ss"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneGetIndex = Module["_BinaryenSIMDLoadStoreLaneGetIndex"] = a0 => (_BinaryenSIMDLoadStoreLaneGetIndex = Module["_BinaryenSIMDLoadStoreLaneGetIndex"] = wasmExports["ts"])(a0);

var _BinaryenSIMDLoadStoreLaneSetIndex = Module["_BinaryenSIMDLoadStoreLaneSetIndex"] = (a0, a1) => (_BinaryenSIMDLoadStoreLaneSetIndex = Module["_BinaryenSIMDLoadStoreLaneSetIndex"] = wasmExports["us"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneGetPtr = Module["_BinaryenSIMDLoadStoreLaneGetPtr"] = a0 => (_BinaryenSIMDLoadStoreLaneGetPtr = Module["_BinaryenSIMDLoadStoreLaneGetPtr"] = wasmExports["vs"])(a0);

var _BinaryenSIMDLoadStoreLaneSetPtr = Module["_BinaryenSIMDLoadStoreLaneSetPtr"] = (a0, a1) => (_BinaryenSIMDLoadStoreLaneSetPtr = Module["_BinaryenSIMDLoadStoreLaneSetPtr"] = wasmExports["ws"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneGetVec = Module["_BinaryenSIMDLoadStoreLaneGetVec"] = a0 => (_BinaryenSIMDLoadStoreLaneGetVec = Module["_BinaryenSIMDLoadStoreLaneGetVec"] = wasmExports["xs"])(a0);

var _BinaryenSIMDLoadStoreLaneSetVec = Module["_BinaryenSIMDLoadStoreLaneSetVec"] = (a0, a1) => (_BinaryenSIMDLoadStoreLaneSetVec = Module["_BinaryenSIMDLoadStoreLaneSetVec"] = wasmExports["ys"])(a0, a1);

var _BinaryenSIMDLoadStoreLaneIsStore = Module["_BinaryenSIMDLoadStoreLaneIsStore"] = a0 => (_BinaryenSIMDLoadStoreLaneIsStore = Module["_BinaryenSIMDLoadStoreLaneIsStore"] = wasmExports["zs"])(a0);

var _BinaryenMemoryInitGetSegment = Module["_BinaryenMemoryInitGetSegment"] = a0 => (_BinaryenMemoryInitGetSegment = Module["_BinaryenMemoryInitGetSegment"] = wasmExports["As"])(a0);

var _BinaryenMemoryInitSetSegment = Module["_BinaryenMemoryInitSetSegment"] = (a0, a1) => (_BinaryenMemoryInitSetSegment = Module["_BinaryenMemoryInitSetSegment"] = wasmExports["Bs"])(a0, a1);

var _BinaryenMemoryInitGetDest = Module["_BinaryenMemoryInitGetDest"] = a0 => (_BinaryenMemoryInitGetDest = Module["_BinaryenMemoryInitGetDest"] = wasmExports["Cs"])(a0);

var _BinaryenMemoryInitSetDest = Module["_BinaryenMemoryInitSetDest"] = (a0, a1) => (_BinaryenMemoryInitSetDest = Module["_BinaryenMemoryInitSetDest"] = wasmExports["Ds"])(a0, a1);

var _BinaryenMemoryInitGetOffset = Module["_BinaryenMemoryInitGetOffset"] = a0 => (_BinaryenMemoryInitGetOffset = Module["_BinaryenMemoryInitGetOffset"] = wasmExports["Es"])(a0);

var _BinaryenMemoryInitSetOffset = Module["_BinaryenMemoryInitSetOffset"] = (a0, a1) => (_BinaryenMemoryInitSetOffset = Module["_BinaryenMemoryInitSetOffset"] = wasmExports["Fs"])(a0, a1);

var _BinaryenMemoryInitGetSize = Module["_BinaryenMemoryInitGetSize"] = a0 => (_BinaryenMemoryInitGetSize = Module["_BinaryenMemoryInitGetSize"] = wasmExports["Gs"])(a0);

var _BinaryenMemoryInitSetSize = Module["_BinaryenMemoryInitSetSize"] = (a0, a1) => (_BinaryenMemoryInitSetSize = Module["_BinaryenMemoryInitSetSize"] = wasmExports["Hs"])(a0, a1);

var _BinaryenDataDropGetSegment = Module["_BinaryenDataDropGetSegment"] = a0 => (_BinaryenDataDropGetSegment = Module["_BinaryenDataDropGetSegment"] = wasmExports["Is"])(a0);

var _BinaryenDataDropSetSegment = Module["_BinaryenDataDropSetSegment"] = (a0, a1) => (_BinaryenDataDropSetSegment = Module["_BinaryenDataDropSetSegment"] = wasmExports["Js"])(a0, a1);

var _BinaryenMemoryCopyGetDest = Module["_BinaryenMemoryCopyGetDest"] = a0 => (_BinaryenMemoryCopyGetDest = Module["_BinaryenMemoryCopyGetDest"] = wasmExports["Ks"])(a0);

var _BinaryenMemoryCopySetDest = Module["_BinaryenMemoryCopySetDest"] = (a0, a1) => (_BinaryenMemoryCopySetDest = Module["_BinaryenMemoryCopySetDest"] = wasmExports["Ls"])(a0, a1);

var _BinaryenMemoryCopyGetSource = Module["_BinaryenMemoryCopyGetSource"] = a0 => (_BinaryenMemoryCopyGetSource = Module["_BinaryenMemoryCopyGetSource"] = wasmExports["Ms"])(a0);

var _BinaryenMemoryCopySetSource = Module["_BinaryenMemoryCopySetSource"] = (a0, a1) => (_BinaryenMemoryCopySetSource = Module["_BinaryenMemoryCopySetSource"] = wasmExports["Ns"])(a0, a1);

var _BinaryenMemoryCopyGetSize = Module["_BinaryenMemoryCopyGetSize"] = a0 => (_BinaryenMemoryCopyGetSize = Module["_BinaryenMemoryCopyGetSize"] = wasmExports["Os"])(a0);

var _BinaryenMemoryCopySetSize = Module["_BinaryenMemoryCopySetSize"] = (a0, a1) => (_BinaryenMemoryCopySetSize = Module["_BinaryenMemoryCopySetSize"] = wasmExports["Ps"])(a0, a1);

var _BinaryenMemoryFillGetDest = Module["_BinaryenMemoryFillGetDest"] = a0 => (_BinaryenMemoryFillGetDest = Module["_BinaryenMemoryFillGetDest"] = wasmExports["Qs"])(a0);

var _BinaryenMemoryFillSetDest = Module["_BinaryenMemoryFillSetDest"] = (a0, a1) => (_BinaryenMemoryFillSetDest = Module["_BinaryenMemoryFillSetDest"] = wasmExports["Rs"])(a0, a1);

var _BinaryenMemoryFillGetValue = Module["_BinaryenMemoryFillGetValue"] = a0 => (_BinaryenMemoryFillGetValue = Module["_BinaryenMemoryFillGetValue"] = wasmExports["Ss"])(a0);

var _BinaryenMemoryFillSetValue = Module["_BinaryenMemoryFillSetValue"] = (a0, a1) => (_BinaryenMemoryFillSetValue = Module["_BinaryenMemoryFillSetValue"] = wasmExports["Ts"])(a0, a1);

var _BinaryenMemoryFillGetSize = Module["_BinaryenMemoryFillGetSize"] = a0 => (_BinaryenMemoryFillGetSize = Module["_BinaryenMemoryFillGetSize"] = wasmExports["Us"])(a0);

var _BinaryenMemoryFillSetSize = Module["_BinaryenMemoryFillSetSize"] = (a0, a1) => (_BinaryenMemoryFillSetSize = Module["_BinaryenMemoryFillSetSize"] = wasmExports["Vs"])(a0, a1);

var _BinaryenRefIsNullGetValue = Module["_BinaryenRefIsNullGetValue"] = a0 => (_BinaryenRefIsNullGetValue = Module["_BinaryenRefIsNullGetValue"] = wasmExports["Ws"])(a0);

var _BinaryenRefIsNullSetValue = Module["_BinaryenRefIsNullSetValue"] = (a0, a1) => (_BinaryenRefIsNullSetValue = Module["_BinaryenRefIsNullSetValue"] = wasmExports["Xs"])(a0, a1);

var _BinaryenRefAsGetOp = Module["_BinaryenRefAsGetOp"] = a0 => (_BinaryenRefAsGetOp = Module["_BinaryenRefAsGetOp"] = wasmExports["Ys"])(a0);

var _BinaryenRefAsSetOp = Module["_BinaryenRefAsSetOp"] = (a0, a1) => (_BinaryenRefAsSetOp = Module["_BinaryenRefAsSetOp"] = wasmExports["Zs"])(a0, a1);

var _BinaryenRefAsGetValue = Module["_BinaryenRefAsGetValue"] = a0 => (_BinaryenRefAsGetValue = Module["_BinaryenRefAsGetValue"] = wasmExports["_s"])(a0);

var _BinaryenRefAsSetValue = Module["_BinaryenRefAsSetValue"] = (a0, a1) => (_BinaryenRefAsSetValue = Module["_BinaryenRefAsSetValue"] = wasmExports["$s"])(a0, a1);

var _BinaryenRefFuncGetFunc = Module["_BinaryenRefFuncGetFunc"] = a0 => (_BinaryenRefFuncGetFunc = Module["_BinaryenRefFuncGetFunc"] = wasmExports["at"])(a0);

var _BinaryenRefFuncSetFunc = Module["_BinaryenRefFuncSetFunc"] = (a0, a1) => (_BinaryenRefFuncSetFunc = Module["_BinaryenRefFuncSetFunc"] = wasmExports["bt"])(a0, a1);

var _BinaryenRefEqGetLeft = Module["_BinaryenRefEqGetLeft"] = a0 => (_BinaryenRefEqGetLeft = Module["_BinaryenRefEqGetLeft"] = wasmExports["ct"])(a0);

var _BinaryenRefEqSetLeft = Module["_BinaryenRefEqSetLeft"] = (a0, a1) => (_BinaryenRefEqSetLeft = Module["_BinaryenRefEqSetLeft"] = wasmExports["dt"])(a0, a1);

var _BinaryenRefEqGetRight = Module["_BinaryenRefEqGetRight"] = a0 => (_BinaryenRefEqGetRight = Module["_BinaryenRefEqGetRight"] = wasmExports["et"])(a0);

var _BinaryenRefEqSetRight = Module["_BinaryenRefEqSetRight"] = (a0, a1) => (_BinaryenRefEqSetRight = Module["_BinaryenRefEqSetRight"] = wasmExports["ft"])(a0, a1);

var _BinaryenTryGetName = Module["_BinaryenTryGetName"] = a0 => (_BinaryenTryGetName = Module["_BinaryenTryGetName"] = wasmExports["gt"])(a0);

var _BinaryenTrySetName = Module["_BinaryenTrySetName"] = (a0, a1) => (_BinaryenTrySetName = Module["_BinaryenTrySetName"] = wasmExports["ht"])(a0, a1);

var _BinaryenTryGetBody = Module["_BinaryenTryGetBody"] = a0 => (_BinaryenTryGetBody = Module["_BinaryenTryGetBody"] = wasmExports["it"])(a0);

var _BinaryenTrySetBody = Module["_BinaryenTrySetBody"] = (a0, a1) => (_BinaryenTrySetBody = Module["_BinaryenTrySetBody"] = wasmExports["jt"])(a0, a1);

var _BinaryenTryGetNumCatchTags = Module["_BinaryenTryGetNumCatchTags"] = a0 => (_BinaryenTryGetNumCatchTags = Module["_BinaryenTryGetNumCatchTags"] = wasmExports["kt"])(a0);

var _BinaryenTryGetNumCatchBodies = Module["_BinaryenTryGetNumCatchBodies"] = a0 => (_BinaryenTryGetNumCatchBodies = Module["_BinaryenTryGetNumCatchBodies"] = wasmExports["lt"])(a0);

var _BinaryenTryGetCatchTagAt = Module["_BinaryenTryGetCatchTagAt"] = (a0, a1) => (_BinaryenTryGetCatchTagAt = Module["_BinaryenTryGetCatchTagAt"] = wasmExports["mt"])(a0, a1);

var _BinaryenTrySetCatchTagAt = Module["_BinaryenTrySetCatchTagAt"] = (a0, a1, a2) => (_BinaryenTrySetCatchTagAt = Module["_BinaryenTrySetCatchTagAt"] = wasmExports["nt"])(a0, a1, a2);

var _BinaryenTryAppendCatchTag = Module["_BinaryenTryAppendCatchTag"] = (a0, a1) => (_BinaryenTryAppendCatchTag = Module["_BinaryenTryAppendCatchTag"] = wasmExports["ot"])(a0, a1);

var _BinaryenTryInsertCatchTagAt = Module["_BinaryenTryInsertCatchTagAt"] = (a0, a1, a2) => (_BinaryenTryInsertCatchTagAt = Module["_BinaryenTryInsertCatchTagAt"] = wasmExports["pt"])(a0, a1, a2);

var _BinaryenTryRemoveCatchTagAt = Module["_BinaryenTryRemoveCatchTagAt"] = (a0, a1) => (_BinaryenTryRemoveCatchTagAt = Module["_BinaryenTryRemoveCatchTagAt"] = wasmExports["qt"])(a0, a1);

var _BinaryenTryGetCatchBodyAt = Module["_BinaryenTryGetCatchBodyAt"] = (a0, a1) => (_BinaryenTryGetCatchBodyAt = Module["_BinaryenTryGetCatchBodyAt"] = wasmExports["rt"])(a0, a1);

var _BinaryenTrySetCatchBodyAt = Module["_BinaryenTrySetCatchBodyAt"] = (a0, a1, a2) => (_BinaryenTrySetCatchBodyAt = Module["_BinaryenTrySetCatchBodyAt"] = wasmExports["st"])(a0, a1, a2);

var _BinaryenTryAppendCatchBody = Module["_BinaryenTryAppendCatchBody"] = (a0, a1) => (_BinaryenTryAppendCatchBody = Module["_BinaryenTryAppendCatchBody"] = wasmExports["tt"])(a0, a1);

var _BinaryenTryInsertCatchBodyAt = Module["_BinaryenTryInsertCatchBodyAt"] = (a0, a1, a2) => (_BinaryenTryInsertCatchBodyAt = Module["_BinaryenTryInsertCatchBodyAt"] = wasmExports["ut"])(a0, a1, a2);

var _BinaryenTryRemoveCatchBodyAt = Module["_BinaryenTryRemoveCatchBodyAt"] = (a0, a1) => (_BinaryenTryRemoveCatchBodyAt = Module["_BinaryenTryRemoveCatchBodyAt"] = wasmExports["vt"])(a0, a1);

var _BinaryenTryHasCatchAll = Module["_BinaryenTryHasCatchAll"] = a0 => (_BinaryenTryHasCatchAll = Module["_BinaryenTryHasCatchAll"] = wasmExports["wt"])(a0);

var _BinaryenTryGetDelegateTarget = Module["_BinaryenTryGetDelegateTarget"] = a0 => (_BinaryenTryGetDelegateTarget = Module["_BinaryenTryGetDelegateTarget"] = wasmExports["xt"])(a0);

var _BinaryenTrySetDelegateTarget = Module["_BinaryenTrySetDelegateTarget"] = (a0, a1) => (_BinaryenTrySetDelegateTarget = Module["_BinaryenTrySetDelegateTarget"] = wasmExports["yt"])(a0, a1);

var _BinaryenTryIsDelegate = Module["_BinaryenTryIsDelegate"] = a0 => (_BinaryenTryIsDelegate = Module["_BinaryenTryIsDelegate"] = wasmExports["zt"])(a0);

var _BinaryenThrowGetTag = Module["_BinaryenThrowGetTag"] = a0 => (_BinaryenThrowGetTag = Module["_BinaryenThrowGetTag"] = wasmExports["At"])(a0);

var _BinaryenThrowSetTag = Module["_BinaryenThrowSetTag"] = (a0, a1) => (_BinaryenThrowSetTag = Module["_BinaryenThrowSetTag"] = wasmExports["Bt"])(a0, a1);

var _BinaryenThrowGetNumOperands = Module["_BinaryenThrowGetNumOperands"] = a0 => (_BinaryenThrowGetNumOperands = Module["_BinaryenThrowGetNumOperands"] = wasmExports["Ct"])(a0);

var _BinaryenThrowGetOperandAt = Module["_BinaryenThrowGetOperandAt"] = (a0, a1) => (_BinaryenThrowGetOperandAt = Module["_BinaryenThrowGetOperandAt"] = wasmExports["Dt"])(a0, a1);

var _BinaryenThrowSetOperandAt = Module["_BinaryenThrowSetOperandAt"] = (a0, a1, a2) => (_BinaryenThrowSetOperandAt = Module["_BinaryenThrowSetOperandAt"] = wasmExports["Et"])(a0, a1, a2);

var _BinaryenThrowAppendOperand = Module["_BinaryenThrowAppendOperand"] = (a0, a1) => (_BinaryenThrowAppendOperand = Module["_BinaryenThrowAppendOperand"] = wasmExports["Ft"])(a0, a1);

var _BinaryenThrowInsertOperandAt = Module["_BinaryenThrowInsertOperandAt"] = (a0, a1, a2) => (_BinaryenThrowInsertOperandAt = Module["_BinaryenThrowInsertOperandAt"] = wasmExports["Gt"])(a0, a1, a2);

var _BinaryenThrowRemoveOperandAt = Module["_BinaryenThrowRemoveOperandAt"] = (a0, a1) => (_BinaryenThrowRemoveOperandAt = Module["_BinaryenThrowRemoveOperandAt"] = wasmExports["Ht"])(a0, a1);

var _BinaryenRethrowGetTarget = Module["_BinaryenRethrowGetTarget"] = a0 => (_BinaryenRethrowGetTarget = Module["_BinaryenRethrowGetTarget"] = wasmExports["It"])(a0);

var _BinaryenRethrowSetTarget = Module["_BinaryenRethrowSetTarget"] = (a0, a1) => (_BinaryenRethrowSetTarget = Module["_BinaryenRethrowSetTarget"] = wasmExports["Jt"])(a0, a1);

var _BinaryenTupleMakeGetNumOperands = Module["_BinaryenTupleMakeGetNumOperands"] = a0 => (_BinaryenTupleMakeGetNumOperands = Module["_BinaryenTupleMakeGetNumOperands"] = wasmExports["Kt"])(a0);

var _BinaryenTupleMakeGetOperandAt = Module["_BinaryenTupleMakeGetOperandAt"] = (a0, a1) => (_BinaryenTupleMakeGetOperandAt = Module["_BinaryenTupleMakeGetOperandAt"] = wasmExports["Lt"])(a0, a1);

var _BinaryenTupleMakeSetOperandAt = Module["_BinaryenTupleMakeSetOperandAt"] = (a0, a1, a2) => (_BinaryenTupleMakeSetOperandAt = Module["_BinaryenTupleMakeSetOperandAt"] = wasmExports["Mt"])(a0, a1, a2);

var _BinaryenTupleMakeAppendOperand = Module["_BinaryenTupleMakeAppendOperand"] = (a0, a1) => (_BinaryenTupleMakeAppendOperand = Module["_BinaryenTupleMakeAppendOperand"] = wasmExports["Nt"])(a0, a1);

var _BinaryenTupleMakeInsertOperandAt = Module["_BinaryenTupleMakeInsertOperandAt"] = (a0, a1, a2) => (_BinaryenTupleMakeInsertOperandAt = Module["_BinaryenTupleMakeInsertOperandAt"] = wasmExports["Ot"])(a0, a1, a2);

var _BinaryenTupleMakeRemoveOperandAt = Module["_BinaryenTupleMakeRemoveOperandAt"] = (a0, a1) => (_BinaryenTupleMakeRemoveOperandAt = Module["_BinaryenTupleMakeRemoveOperandAt"] = wasmExports["Pt"])(a0, a1);

var _BinaryenTupleExtractGetTuple = Module["_BinaryenTupleExtractGetTuple"] = a0 => (_BinaryenTupleExtractGetTuple = Module["_BinaryenTupleExtractGetTuple"] = wasmExports["Qt"])(a0);

var _BinaryenTupleExtractSetTuple = Module["_BinaryenTupleExtractSetTuple"] = (a0, a1) => (_BinaryenTupleExtractSetTuple = Module["_BinaryenTupleExtractSetTuple"] = wasmExports["Rt"])(a0, a1);

var _BinaryenTupleExtractGetIndex = Module["_BinaryenTupleExtractGetIndex"] = a0 => (_BinaryenTupleExtractGetIndex = Module["_BinaryenTupleExtractGetIndex"] = wasmExports["St"])(a0);

var _BinaryenTupleExtractSetIndex = Module["_BinaryenTupleExtractSetIndex"] = (a0, a1) => (_BinaryenTupleExtractSetIndex = Module["_BinaryenTupleExtractSetIndex"] = wasmExports["Tt"])(a0, a1);

var _BinaryenRefI31GetValue = Module["_BinaryenRefI31GetValue"] = a0 => (_BinaryenRefI31GetValue = Module["_BinaryenRefI31GetValue"] = wasmExports["Ut"])(a0);

var _BinaryenRefI31SetValue = Module["_BinaryenRefI31SetValue"] = (a0, a1) => (_BinaryenRefI31SetValue = Module["_BinaryenRefI31SetValue"] = wasmExports["Vt"])(a0, a1);

var _BinaryenI31GetGetI31 = Module["_BinaryenI31GetGetI31"] = a0 => (_BinaryenI31GetGetI31 = Module["_BinaryenI31GetGetI31"] = wasmExports["Wt"])(a0);

var _BinaryenI31GetSetI31 = Module["_BinaryenI31GetSetI31"] = (a0, a1) => (_BinaryenI31GetSetI31 = Module["_BinaryenI31GetSetI31"] = wasmExports["Xt"])(a0, a1);

var _BinaryenI31GetIsSigned = Module["_BinaryenI31GetIsSigned"] = a0 => (_BinaryenI31GetIsSigned = Module["_BinaryenI31GetIsSigned"] = wasmExports["Yt"])(a0);

var _BinaryenI31GetSetSigned = Module["_BinaryenI31GetSetSigned"] = (a0, a1) => (_BinaryenI31GetSetSigned = Module["_BinaryenI31GetSetSigned"] = wasmExports["Zt"])(a0, a1);

var _BinaryenCallRefGetNumOperands = Module["_BinaryenCallRefGetNumOperands"] = a0 => (_BinaryenCallRefGetNumOperands = Module["_BinaryenCallRefGetNumOperands"] = wasmExports["_t"])(a0);

var _BinaryenCallRefGetOperandAt = Module["_BinaryenCallRefGetOperandAt"] = (a0, a1) => (_BinaryenCallRefGetOperandAt = Module["_BinaryenCallRefGetOperandAt"] = wasmExports["$t"])(a0, a1);

var _BinaryenCallRefSetOperandAt = Module["_BinaryenCallRefSetOperandAt"] = (a0, a1, a2) => (_BinaryenCallRefSetOperandAt = Module["_BinaryenCallRefSetOperandAt"] = wasmExports["au"])(a0, a1, a2);

var _BinaryenCallRefAppendOperand = Module["_BinaryenCallRefAppendOperand"] = (a0, a1) => (_BinaryenCallRefAppendOperand = Module["_BinaryenCallRefAppendOperand"] = wasmExports["bu"])(a0, a1);

var _BinaryenCallRefInsertOperandAt = Module["_BinaryenCallRefInsertOperandAt"] = (a0, a1, a2) => (_BinaryenCallRefInsertOperandAt = Module["_BinaryenCallRefInsertOperandAt"] = wasmExports["cu"])(a0, a1, a2);

var _BinaryenCallRefRemoveOperandAt = Module["_BinaryenCallRefRemoveOperandAt"] = (a0, a1) => (_BinaryenCallRefRemoveOperandAt = Module["_BinaryenCallRefRemoveOperandAt"] = wasmExports["du"])(a0, a1);

var _BinaryenCallRefGetTarget = Module["_BinaryenCallRefGetTarget"] = a0 => (_BinaryenCallRefGetTarget = Module["_BinaryenCallRefGetTarget"] = wasmExports["eu"])(a0);

var _BinaryenCallRefSetTarget = Module["_BinaryenCallRefSetTarget"] = (a0, a1) => (_BinaryenCallRefSetTarget = Module["_BinaryenCallRefSetTarget"] = wasmExports["fu"])(a0, a1);

var _BinaryenCallRefIsReturn = Module["_BinaryenCallRefIsReturn"] = a0 => (_BinaryenCallRefIsReturn = Module["_BinaryenCallRefIsReturn"] = wasmExports["gu"])(a0);

var _BinaryenCallRefSetReturn = Module["_BinaryenCallRefSetReturn"] = (a0, a1) => (_BinaryenCallRefSetReturn = Module["_BinaryenCallRefSetReturn"] = wasmExports["hu"])(a0, a1);

var _BinaryenRefTestGetRef = Module["_BinaryenRefTestGetRef"] = a0 => (_BinaryenRefTestGetRef = Module["_BinaryenRefTestGetRef"] = wasmExports["iu"])(a0);

var _BinaryenRefTestSetRef = Module["_BinaryenRefTestSetRef"] = (a0, a1) => (_BinaryenRefTestSetRef = Module["_BinaryenRefTestSetRef"] = wasmExports["ju"])(a0, a1);

var _BinaryenRefTestGetCastType = Module["_BinaryenRefTestGetCastType"] = a0 => (_BinaryenRefTestGetCastType = Module["_BinaryenRefTestGetCastType"] = wasmExports["ku"])(a0);

var _BinaryenRefTestSetCastType = Module["_BinaryenRefTestSetCastType"] = (a0, a1) => (_BinaryenRefTestSetCastType = Module["_BinaryenRefTestSetCastType"] = wasmExports["lu"])(a0, a1);

var _BinaryenRefCastGetRef = Module["_BinaryenRefCastGetRef"] = a0 => (_BinaryenRefCastGetRef = Module["_BinaryenRefCastGetRef"] = wasmExports["mu"])(a0);

var _BinaryenRefCastSetRef = Module["_BinaryenRefCastSetRef"] = (a0, a1) => (_BinaryenRefCastSetRef = Module["_BinaryenRefCastSetRef"] = wasmExports["nu"])(a0, a1);

var _BinaryenBrOnGetOp = Module["_BinaryenBrOnGetOp"] = a0 => (_BinaryenBrOnGetOp = Module["_BinaryenBrOnGetOp"] = wasmExports["ou"])(a0);

var _BinaryenBrOnSetOp = Module["_BinaryenBrOnSetOp"] = (a0, a1) => (_BinaryenBrOnSetOp = Module["_BinaryenBrOnSetOp"] = wasmExports["pu"])(a0, a1);

var _BinaryenBrOnGetName = Module["_BinaryenBrOnGetName"] = a0 => (_BinaryenBrOnGetName = Module["_BinaryenBrOnGetName"] = wasmExports["qu"])(a0);

var _BinaryenBrOnSetName = Module["_BinaryenBrOnSetName"] = (a0, a1) => (_BinaryenBrOnSetName = Module["_BinaryenBrOnSetName"] = wasmExports["ru"])(a0, a1);

var _BinaryenBrOnGetRef = Module["_BinaryenBrOnGetRef"] = a0 => (_BinaryenBrOnGetRef = Module["_BinaryenBrOnGetRef"] = wasmExports["su"])(a0);

var _BinaryenBrOnSetRef = Module["_BinaryenBrOnSetRef"] = (a0, a1) => (_BinaryenBrOnSetRef = Module["_BinaryenBrOnSetRef"] = wasmExports["tu"])(a0, a1);

var _BinaryenBrOnGetCastType = Module["_BinaryenBrOnGetCastType"] = a0 => (_BinaryenBrOnGetCastType = Module["_BinaryenBrOnGetCastType"] = wasmExports["uu"])(a0);

var _BinaryenBrOnSetCastType = Module["_BinaryenBrOnSetCastType"] = (a0, a1) => (_BinaryenBrOnSetCastType = Module["_BinaryenBrOnSetCastType"] = wasmExports["vu"])(a0, a1);

var _BinaryenStructNewGetNumOperands = Module["_BinaryenStructNewGetNumOperands"] = a0 => (_BinaryenStructNewGetNumOperands = Module["_BinaryenStructNewGetNumOperands"] = wasmExports["wu"])(a0);

var _BinaryenStructNewGetOperandAt = Module["_BinaryenStructNewGetOperandAt"] = (a0, a1) => (_BinaryenStructNewGetOperandAt = Module["_BinaryenStructNewGetOperandAt"] = wasmExports["xu"])(a0, a1);

var _BinaryenStructNewSetOperandAt = Module["_BinaryenStructNewSetOperandAt"] = (a0, a1, a2) => (_BinaryenStructNewSetOperandAt = Module["_BinaryenStructNewSetOperandAt"] = wasmExports["yu"])(a0, a1, a2);

var _BinaryenStructNewAppendOperand = Module["_BinaryenStructNewAppendOperand"] = (a0, a1) => (_BinaryenStructNewAppendOperand = Module["_BinaryenStructNewAppendOperand"] = wasmExports["zu"])(a0, a1);

var _BinaryenStructNewInsertOperandAt = Module["_BinaryenStructNewInsertOperandAt"] = (a0, a1, a2) => (_BinaryenStructNewInsertOperandAt = Module["_BinaryenStructNewInsertOperandAt"] = wasmExports["Au"])(a0, a1, a2);

var _BinaryenStructNewRemoveOperandAt = Module["_BinaryenStructNewRemoveOperandAt"] = (a0, a1) => (_BinaryenStructNewRemoveOperandAt = Module["_BinaryenStructNewRemoveOperandAt"] = wasmExports["Bu"])(a0, a1);

var _BinaryenStructGetGetIndex = Module["_BinaryenStructGetGetIndex"] = a0 => (_BinaryenStructGetGetIndex = Module["_BinaryenStructGetGetIndex"] = wasmExports["Cu"])(a0);

var _BinaryenStructGetSetIndex = Module["_BinaryenStructGetSetIndex"] = (a0, a1) => (_BinaryenStructGetSetIndex = Module["_BinaryenStructGetSetIndex"] = wasmExports["Du"])(a0, a1);

var _BinaryenStructGetGetRef = Module["_BinaryenStructGetGetRef"] = a0 => (_BinaryenStructGetGetRef = Module["_BinaryenStructGetGetRef"] = wasmExports["Eu"])(a0);

var _BinaryenStructGetSetRef = Module["_BinaryenStructGetSetRef"] = (a0, a1) => (_BinaryenStructGetSetRef = Module["_BinaryenStructGetSetRef"] = wasmExports["Fu"])(a0, a1);

var _BinaryenStructGetIsSigned = Module["_BinaryenStructGetIsSigned"] = a0 => (_BinaryenStructGetIsSigned = Module["_BinaryenStructGetIsSigned"] = wasmExports["Gu"])(a0);

var _BinaryenStructGetSetSigned = Module["_BinaryenStructGetSetSigned"] = (a0, a1) => (_BinaryenStructGetSetSigned = Module["_BinaryenStructGetSetSigned"] = wasmExports["Hu"])(a0, a1);

var _BinaryenStructSetGetIndex = Module["_BinaryenStructSetGetIndex"] = a0 => (_BinaryenStructSetGetIndex = Module["_BinaryenStructSetGetIndex"] = wasmExports["Iu"])(a0);

var _BinaryenStructSetSetIndex = Module["_BinaryenStructSetSetIndex"] = (a0, a1) => (_BinaryenStructSetSetIndex = Module["_BinaryenStructSetSetIndex"] = wasmExports["Ju"])(a0, a1);

var _BinaryenStructSetGetRef = Module["_BinaryenStructSetGetRef"] = a0 => (_BinaryenStructSetGetRef = Module["_BinaryenStructSetGetRef"] = wasmExports["Ku"])(a0);

var _BinaryenStructSetSetRef = Module["_BinaryenStructSetSetRef"] = (a0, a1) => (_BinaryenStructSetSetRef = Module["_BinaryenStructSetSetRef"] = wasmExports["Lu"])(a0, a1);

var _BinaryenStructSetGetValue = Module["_BinaryenStructSetGetValue"] = a0 => (_BinaryenStructSetGetValue = Module["_BinaryenStructSetGetValue"] = wasmExports["Mu"])(a0);

var _BinaryenStructSetSetValue = Module["_BinaryenStructSetSetValue"] = (a0, a1) => (_BinaryenStructSetSetValue = Module["_BinaryenStructSetSetValue"] = wasmExports["Nu"])(a0, a1);

var _BinaryenArrayNewGetInit = Module["_BinaryenArrayNewGetInit"] = a0 => (_BinaryenArrayNewGetInit = Module["_BinaryenArrayNewGetInit"] = wasmExports["Ou"])(a0);

var _BinaryenArrayNewSetInit = Module["_BinaryenArrayNewSetInit"] = (a0, a1) => (_BinaryenArrayNewSetInit = Module["_BinaryenArrayNewSetInit"] = wasmExports["Pu"])(a0, a1);

var _BinaryenArrayNewGetSize = Module["_BinaryenArrayNewGetSize"] = a0 => (_BinaryenArrayNewGetSize = Module["_BinaryenArrayNewGetSize"] = wasmExports["Qu"])(a0);

var _BinaryenArrayNewSetSize = Module["_BinaryenArrayNewSetSize"] = (a0, a1) => (_BinaryenArrayNewSetSize = Module["_BinaryenArrayNewSetSize"] = wasmExports["Ru"])(a0, a1);

var _BinaryenArrayNewFixedGetNumValues = Module["_BinaryenArrayNewFixedGetNumValues"] = a0 => (_BinaryenArrayNewFixedGetNumValues = Module["_BinaryenArrayNewFixedGetNumValues"] = wasmExports["Su"])(a0);

var _BinaryenArrayNewFixedGetValueAt = Module["_BinaryenArrayNewFixedGetValueAt"] = (a0, a1) => (_BinaryenArrayNewFixedGetValueAt = Module["_BinaryenArrayNewFixedGetValueAt"] = wasmExports["Tu"])(a0, a1);

var _BinaryenArrayNewFixedSetValueAt = Module["_BinaryenArrayNewFixedSetValueAt"] = (a0, a1, a2) => (_BinaryenArrayNewFixedSetValueAt = Module["_BinaryenArrayNewFixedSetValueAt"] = wasmExports["Uu"])(a0, a1, a2);

var _BinaryenArrayNewFixedAppendValue = Module["_BinaryenArrayNewFixedAppendValue"] = (a0, a1) => (_BinaryenArrayNewFixedAppendValue = Module["_BinaryenArrayNewFixedAppendValue"] = wasmExports["Vu"])(a0, a1);

var _BinaryenArrayNewFixedInsertValueAt = Module["_BinaryenArrayNewFixedInsertValueAt"] = (a0, a1, a2) => (_BinaryenArrayNewFixedInsertValueAt = Module["_BinaryenArrayNewFixedInsertValueAt"] = wasmExports["Wu"])(a0, a1, a2);

var _BinaryenArrayNewFixedRemoveValueAt = Module["_BinaryenArrayNewFixedRemoveValueAt"] = (a0, a1) => (_BinaryenArrayNewFixedRemoveValueAt = Module["_BinaryenArrayNewFixedRemoveValueAt"] = wasmExports["Xu"])(a0, a1);

var _BinaryenArrayGetGetRef = Module["_BinaryenArrayGetGetRef"] = a0 => (_BinaryenArrayGetGetRef = Module["_BinaryenArrayGetGetRef"] = wasmExports["Yu"])(a0);

var _BinaryenArrayGetSetRef = Module["_BinaryenArrayGetSetRef"] = (a0, a1) => (_BinaryenArrayGetSetRef = Module["_BinaryenArrayGetSetRef"] = wasmExports["Zu"])(a0, a1);

var _BinaryenArrayGetGetIndex = Module["_BinaryenArrayGetGetIndex"] = a0 => (_BinaryenArrayGetGetIndex = Module["_BinaryenArrayGetGetIndex"] = wasmExports["_u"])(a0);

var _BinaryenArrayGetSetIndex = Module["_BinaryenArrayGetSetIndex"] = (a0, a1) => (_BinaryenArrayGetSetIndex = Module["_BinaryenArrayGetSetIndex"] = wasmExports["$u"])(a0, a1);

var _BinaryenArrayGetIsSigned = Module["_BinaryenArrayGetIsSigned"] = a0 => (_BinaryenArrayGetIsSigned = Module["_BinaryenArrayGetIsSigned"] = wasmExports["av"])(a0);

var _BinaryenArrayGetSetSigned = Module["_BinaryenArrayGetSetSigned"] = (a0, a1) => (_BinaryenArrayGetSetSigned = Module["_BinaryenArrayGetSetSigned"] = wasmExports["bv"])(a0, a1);

var _BinaryenArraySetGetRef = Module["_BinaryenArraySetGetRef"] = a0 => (_BinaryenArraySetGetRef = Module["_BinaryenArraySetGetRef"] = wasmExports["cv"])(a0);

var _BinaryenArraySetSetRef = Module["_BinaryenArraySetSetRef"] = (a0, a1) => (_BinaryenArraySetSetRef = Module["_BinaryenArraySetSetRef"] = wasmExports["dv"])(a0, a1);

var _BinaryenArraySetGetIndex = Module["_BinaryenArraySetGetIndex"] = a0 => (_BinaryenArraySetGetIndex = Module["_BinaryenArraySetGetIndex"] = wasmExports["ev"])(a0);

var _BinaryenArraySetSetIndex = Module["_BinaryenArraySetSetIndex"] = (a0, a1) => (_BinaryenArraySetSetIndex = Module["_BinaryenArraySetSetIndex"] = wasmExports["fv"])(a0, a1);

var _BinaryenArraySetGetValue = Module["_BinaryenArraySetGetValue"] = a0 => (_BinaryenArraySetGetValue = Module["_BinaryenArraySetGetValue"] = wasmExports["gv"])(a0);

var _BinaryenArraySetSetValue = Module["_BinaryenArraySetSetValue"] = (a0, a1) => (_BinaryenArraySetSetValue = Module["_BinaryenArraySetSetValue"] = wasmExports["hv"])(a0, a1);

var _BinaryenArrayLenGetRef = Module["_BinaryenArrayLenGetRef"] = a0 => (_BinaryenArrayLenGetRef = Module["_BinaryenArrayLenGetRef"] = wasmExports["iv"])(a0);

var _BinaryenArrayLenSetRef = Module["_BinaryenArrayLenSetRef"] = (a0, a1) => (_BinaryenArrayLenSetRef = Module["_BinaryenArrayLenSetRef"] = wasmExports["jv"])(a0, a1);

var _BinaryenArrayCopyGetDestRef = Module["_BinaryenArrayCopyGetDestRef"] = a0 => (_BinaryenArrayCopyGetDestRef = Module["_BinaryenArrayCopyGetDestRef"] = wasmExports["kv"])(a0);

var _BinaryenArrayCopySetDestRef = Module["_BinaryenArrayCopySetDestRef"] = (a0, a1) => (_BinaryenArrayCopySetDestRef = Module["_BinaryenArrayCopySetDestRef"] = wasmExports["lv"])(a0, a1);

var _BinaryenArrayCopyGetDestIndex = Module["_BinaryenArrayCopyGetDestIndex"] = a0 => (_BinaryenArrayCopyGetDestIndex = Module["_BinaryenArrayCopyGetDestIndex"] = wasmExports["mv"])(a0);

var _BinaryenArrayCopySetDestIndex = Module["_BinaryenArrayCopySetDestIndex"] = (a0, a1) => (_BinaryenArrayCopySetDestIndex = Module["_BinaryenArrayCopySetDestIndex"] = wasmExports["nv"])(a0, a1);

var _BinaryenArrayCopyGetSrcRef = Module["_BinaryenArrayCopyGetSrcRef"] = a0 => (_BinaryenArrayCopyGetSrcRef = Module["_BinaryenArrayCopyGetSrcRef"] = wasmExports["ov"])(a0);

var _BinaryenArrayCopySetSrcRef = Module["_BinaryenArrayCopySetSrcRef"] = (a0, a1) => (_BinaryenArrayCopySetSrcRef = Module["_BinaryenArrayCopySetSrcRef"] = wasmExports["pv"])(a0, a1);

var _BinaryenArrayCopyGetSrcIndex = Module["_BinaryenArrayCopyGetSrcIndex"] = a0 => (_BinaryenArrayCopyGetSrcIndex = Module["_BinaryenArrayCopyGetSrcIndex"] = wasmExports["qv"])(a0);

var _BinaryenArrayCopySetSrcIndex = Module["_BinaryenArrayCopySetSrcIndex"] = (a0, a1) => (_BinaryenArrayCopySetSrcIndex = Module["_BinaryenArrayCopySetSrcIndex"] = wasmExports["rv"])(a0, a1);

var _BinaryenArrayCopyGetLength = Module["_BinaryenArrayCopyGetLength"] = a0 => (_BinaryenArrayCopyGetLength = Module["_BinaryenArrayCopyGetLength"] = wasmExports["sv"])(a0);

var _BinaryenArrayCopySetLength = Module["_BinaryenArrayCopySetLength"] = (a0, a1) => (_BinaryenArrayCopySetLength = Module["_BinaryenArrayCopySetLength"] = wasmExports["tv"])(a0, a1);

var _BinaryenStringNewGetOp = Module["_BinaryenStringNewGetOp"] = a0 => (_BinaryenStringNewGetOp = Module["_BinaryenStringNewGetOp"] = wasmExports["uv"])(a0);

var _BinaryenStringNewSetOp = Module["_BinaryenStringNewSetOp"] = (a0, a1) => (_BinaryenStringNewSetOp = Module["_BinaryenStringNewSetOp"] = wasmExports["vv"])(a0, a1);

var _BinaryenStringNewGetPtr = Module["_BinaryenStringNewGetPtr"] = a0 => (_BinaryenStringNewGetPtr = Module["_BinaryenStringNewGetPtr"] = wasmExports["wv"])(a0);

var _BinaryenStringNewSetPtr = Module["_BinaryenStringNewSetPtr"] = (a0, a1) => (_BinaryenStringNewSetPtr = Module["_BinaryenStringNewSetPtr"] = wasmExports["xv"])(a0, a1);

var _BinaryenStringNewGetLength = Module["_BinaryenStringNewGetLength"] = a0 => (_BinaryenStringNewGetLength = Module["_BinaryenStringNewGetLength"] = wasmExports["yv"])(a0);

var _BinaryenStringNewSetLength = Module["_BinaryenStringNewSetLength"] = (a0, a1) => (_BinaryenStringNewSetLength = Module["_BinaryenStringNewSetLength"] = wasmExports["zv"])(a0, a1);

var _BinaryenStringNewGetStart = Module["_BinaryenStringNewGetStart"] = a0 => (_BinaryenStringNewGetStart = Module["_BinaryenStringNewGetStart"] = wasmExports["Av"])(a0);

var _BinaryenStringNewSetStart = Module["_BinaryenStringNewSetStart"] = (a0, a1) => (_BinaryenStringNewSetStart = Module["_BinaryenStringNewSetStart"] = wasmExports["Bv"])(a0, a1);

var _BinaryenStringNewGetEnd = Module["_BinaryenStringNewGetEnd"] = a0 => (_BinaryenStringNewGetEnd = Module["_BinaryenStringNewGetEnd"] = wasmExports["Cv"])(a0);

var _BinaryenStringNewSetEnd = Module["_BinaryenStringNewSetEnd"] = (a0, a1) => (_BinaryenStringNewSetEnd = Module["_BinaryenStringNewSetEnd"] = wasmExports["Dv"])(a0, a1);

var _BinaryenStringNewSetTry = Module["_BinaryenStringNewSetTry"] = (a0, a1) => (_BinaryenStringNewSetTry = Module["_BinaryenStringNewSetTry"] = wasmExports["Ev"])(a0, a1);

var _BinaryenStringNewIsTry = Module["_BinaryenStringNewIsTry"] = a0 => (_BinaryenStringNewIsTry = Module["_BinaryenStringNewIsTry"] = wasmExports["Fv"])(a0);

var _BinaryenStringConstGetString = Module["_BinaryenStringConstGetString"] = a0 => (_BinaryenStringConstGetString = Module["_BinaryenStringConstGetString"] = wasmExports["Gv"])(a0);

var _BinaryenStringConstSetString = Module["_BinaryenStringConstSetString"] = (a0, a1) => (_BinaryenStringConstSetString = Module["_BinaryenStringConstSetString"] = wasmExports["Hv"])(a0, a1);

var _BinaryenStringMeasureGetOp = Module["_BinaryenStringMeasureGetOp"] = a0 => (_BinaryenStringMeasureGetOp = Module["_BinaryenStringMeasureGetOp"] = wasmExports["Iv"])(a0);

var _BinaryenStringMeasureSetOp = Module["_BinaryenStringMeasureSetOp"] = (a0, a1) => (_BinaryenStringMeasureSetOp = Module["_BinaryenStringMeasureSetOp"] = wasmExports["Jv"])(a0, a1);

var _BinaryenStringMeasureGetRef = Module["_BinaryenStringMeasureGetRef"] = a0 => (_BinaryenStringMeasureGetRef = Module["_BinaryenStringMeasureGetRef"] = wasmExports["Kv"])(a0);

var _BinaryenStringMeasureSetRef = Module["_BinaryenStringMeasureSetRef"] = (a0, a1) => (_BinaryenStringMeasureSetRef = Module["_BinaryenStringMeasureSetRef"] = wasmExports["Lv"])(a0, a1);

var _BinaryenStringEncodeGetOp = Module["_BinaryenStringEncodeGetOp"] = a0 => (_BinaryenStringEncodeGetOp = Module["_BinaryenStringEncodeGetOp"] = wasmExports["Mv"])(a0);

var _BinaryenStringEncodeSetOp = Module["_BinaryenStringEncodeSetOp"] = (a0, a1) => (_BinaryenStringEncodeSetOp = Module["_BinaryenStringEncodeSetOp"] = wasmExports["Nv"])(a0, a1);

var _BinaryenStringEncodeGetRef = Module["_BinaryenStringEncodeGetRef"] = a0 => (_BinaryenStringEncodeGetRef = Module["_BinaryenStringEncodeGetRef"] = wasmExports["Ov"])(a0);

var _BinaryenStringEncodeSetRef = Module["_BinaryenStringEncodeSetRef"] = (a0, a1) => (_BinaryenStringEncodeSetRef = Module["_BinaryenStringEncodeSetRef"] = wasmExports["Pv"])(a0, a1);

var _BinaryenStringEncodeGetPtr = Module["_BinaryenStringEncodeGetPtr"] = a0 => (_BinaryenStringEncodeGetPtr = Module["_BinaryenStringEncodeGetPtr"] = wasmExports["Qv"])(a0);

var _BinaryenStringEncodeSetPtr = Module["_BinaryenStringEncodeSetPtr"] = (a0, a1) => (_BinaryenStringEncodeSetPtr = Module["_BinaryenStringEncodeSetPtr"] = wasmExports["Rv"])(a0, a1);

var _BinaryenStringEncodeGetStart = Module["_BinaryenStringEncodeGetStart"] = a0 => (_BinaryenStringEncodeGetStart = Module["_BinaryenStringEncodeGetStart"] = wasmExports["Sv"])(a0);

var _BinaryenStringEncodeSetStart = Module["_BinaryenStringEncodeSetStart"] = (a0, a1) => (_BinaryenStringEncodeSetStart = Module["_BinaryenStringEncodeSetStart"] = wasmExports["Tv"])(a0, a1);

var _BinaryenStringConcatGetLeft = Module["_BinaryenStringConcatGetLeft"] = a0 => (_BinaryenStringConcatGetLeft = Module["_BinaryenStringConcatGetLeft"] = wasmExports["Uv"])(a0);

var _BinaryenStringConcatSetLeft = Module["_BinaryenStringConcatSetLeft"] = (a0, a1) => (_BinaryenStringConcatSetLeft = Module["_BinaryenStringConcatSetLeft"] = wasmExports["Vv"])(a0, a1);

var _BinaryenStringConcatGetRight = Module["_BinaryenStringConcatGetRight"] = a0 => (_BinaryenStringConcatGetRight = Module["_BinaryenStringConcatGetRight"] = wasmExports["Wv"])(a0);

var _BinaryenStringConcatSetRight = Module["_BinaryenStringConcatSetRight"] = (a0, a1) => (_BinaryenStringConcatSetRight = Module["_BinaryenStringConcatSetRight"] = wasmExports["Xv"])(a0, a1);

var _BinaryenStringEqGetOp = Module["_BinaryenStringEqGetOp"] = a0 => (_BinaryenStringEqGetOp = Module["_BinaryenStringEqGetOp"] = wasmExports["Yv"])(a0);

var _BinaryenStringEqSetOp = Module["_BinaryenStringEqSetOp"] = (a0, a1) => (_BinaryenStringEqSetOp = Module["_BinaryenStringEqSetOp"] = wasmExports["Zv"])(a0, a1);

var _BinaryenStringEqGetLeft = Module["_BinaryenStringEqGetLeft"] = a0 => (_BinaryenStringEqGetLeft = Module["_BinaryenStringEqGetLeft"] = wasmExports["_v"])(a0);

var _BinaryenStringEqSetLeft = Module["_BinaryenStringEqSetLeft"] = (a0, a1) => (_BinaryenStringEqSetLeft = Module["_BinaryenStringEqSetLeft"] = wasmExports["$v"])(a0, a1);

var _BinaryenStringEqGetRight = Module["_BinaryenStringEqGetRight"] = a0 => (_BinaryenStringEqGetRight = Module["_BinaryenStringEqGetRight"] = wasmExports["aw"])(a0);

var _BinaryenStringEqSetRight = Module["_BinaryenStringEqSetRight"] = (a0, a1) => (_BinaryenStringEqSetRight = Module["_BinaryenStringEqSetRight"] = wasmExports["bw"])(a0, a1);

var _BinaryenStringAsGetOp = Module["_BinaryenStringAsGetOp"] = a0 => (_BinaryenStringAsGetOp = Module["_BinaryenStringAsGetOp"] = wasmExports["cw"])(a0);

var _BinaryenStringAsSetOp = Module["_BinaryenStringAsSetOp"] = (a0, a1) => (_BinaryenStringAsSetOp = Module["_BinaryenStringAsSetOp"] = wasmExports["dw"])(a0, a1);

var _BinaryenStringAsGetRef = Module["_BinaryenStringAsGetRef"] = a0 => (_BinaryenStringAsGetRef = Module["_BinaryenStringAsGetRef"] = wasmExports["ew"])(a0);

var _BinaryenStringAsSetRef = Module["_BinaryenStringAsSetRef"] = (a0, a1) => (_BinaryenStringAsSetRef = Module["_BinaryenStringAsSetRef"] = wasmExports["fw"])(a0, a1);

var _BinaryenStringWTF8AdvanceGetRef = Module["_BinaryenStringWTF8AdvanceGetRef"] = a0 => (_BinaryenStringWTF8AdvanceGetRef = Module["_BinaryenStringWTF8AdvanceGetRef"] = wasmExports["gw"])(a0);

var _BinaryenStringWTF8AdvanceSetRef = Module["_BinaryenStringWTF8AdvanceSetRef"] = (a0, a1) => (_BinaryenStringWTF8AdvanceSetRef = Module["_BinaryenStringWTF8AdvanceSetRef"] = wasmExports["hw"])(a0, a1);

var _BinaryenStringWTF8AdvanceGetPos = Module["_BinaryenStringWTF8AdvanceGetPos"] = a0 => (_BinaryenStringWTF8AdvanceGetPos = Module["_BinaryenStringWTF8AdvanceGetPos"] = wasmExports["iw"])(a0);

var _BinaryenStringWTF8AdvanceSetPos = Module["_BinaryenStringWTF8AdvanceSetPos"] = (a0, a1) => (_BinaryenStringWTF8AdvanceSetPos = Module["_BinaryenStringWTF8AdvanceSetPos"] = wasmExports["jw"])(a0, a1);

var _BinaryenStringWTF8AdvanceGetBytes = Module["_BinaryenStringWTF8AdvanceGetBytes"] = a0 => (_BinaryenStringWTF8AdvanceGetBytes = Module["_BinaryenStringWTF8AdvanceGetBytes"] = wasmExports["kw"])(a0);

var _BinaryenStringWTF8AdvanceSetBytes = Module["_BinaryenStringWTF8AdvanceSetBytes"] = (a0, a1) => (_BinaryenStringWTF8AdvanceSetBytes = Module["_BinaryenStringWTF8AdvanceSetBytes"] = wasmExports["lw"])(a0, a1);

var _BinaryenStringWTF16GetGetRef = Module["_BinaryenStringWTF16GetGetRef"] = a0 => (_BinaryenStringWTF16GetGetRef = Module["_BinaryenStringWTF16GetGetRef"] = wasmExports["mw"])(a0);

var _BinaryenStringWTF16GetSetRef = Module["_BinaryenStringWTF16GetSetRef"] = (a0, a1) => (_BinaryenStringWTF16GetSetRef = Module["_BinaryenStringWTF16GetSetRef"] = wasmExports["nw"])(a0, a1);

var _BinaryenStringWTF16GetGetPos = Module["_BinaryenStringWTF16GetGetPos"] = a0 => (_BinaryenStringWTF16GetGetPos = Module["_BinaryenStringWTF16GetGetPos"] = wasmExports["ow"])(a0);

var _BinaryenStringWTF16GetSetPos = Module["_BinaryenStringWTF16GetSetPos"] = (a0, a1) => (_BinaryenStringWTF16GetSetPos = Module["_BinaryenStringWTF16GetSetPos"] = wasmExports["pw"])(a0, a1);

var _BinaryenStringIterNextGetRef = Module["_BinaryenStringIterNextGetRef"] = a0 => (_BinaryenStringIterNextGetRef = Module["_BinaryenStringIterNextGetRef"] = wasmExports["qw"])(a0);

var _BinaryenStringIterNextSetRef = Module["_BinaryenStringIterNextSetRef"] = (a0, a1) => (_BinaryenStringIterNextSetRef = Module["_BinaryenStringIterNextSetRef"] = wasmExports["rw"])(a0, a1);

var _BinaryenStringIterMoveGetOp = Module["_BinaryenStringIterMoveGetOp"] = a0 => (_BinaryenStringIterMoveGetOp = Module["_BinaryenStringIterMoveGetOp"] = wasmExports["sw"])(a0);

var _BinaryenStringIterMoveSetOp = Module["_BinaryenStringIterMoveSetOp"] = (a0, a1) => (_BinaryenStringIterMoveSetOp = Module["_BinaryenStringIterMoveSetOp"] = wasmExports["tw"])(a0, a1);

var _BinaryenStringIterMoveGetRef = Module["_BinaryenStringIterMoveGetRef"] = a0 => (_BinaryenStringIterMoveGetRef = Module["_BinaryenStringIterMoveGetRef"] = wasmExports["uw"])(a0);

var _BinaryenStringIterMoveSetRef = Module["_BinaryenStringIterMoveSetRef"] = (a0, a1) => (_BinaryenStringIterMoveSetRef = Module["_BinaryenStringIterMoveSetRef"] = wasmExports["vw"])(a0, a1);

var _BinaryenStringIterMoveGetNum = Module["_BinaryenStringIterMoveGetNum"] = a0 => (_BinaryenStringIterMoveGetNum = Module["_BinaryenStringIterMoveGetNum"] = wasmExports["ww"])(a0);

var _BinaryenStringIterMoveSetNum = Module["_BinaryenStringIterMoveSetNum"] = (a0, a1) => (_BinaryenStringIterMoveSetNum = Module["_BinaryenStringIterMoveSetNum"] = wasmExports["xw"])(a0, a1);

var _BinaryenStringSliceWTFGetOp = Module["_BinaryenStringSliceWTFGetOp"] = a0 => (_BinaryenStringSliceWTFGetOp = Module["_BinaryenStringSliceWTFGetOp"] = wasmExports["yw"])(a0);

var _BinaryenStringSliceWTFSetOp = Module["_BinaryenStringSliceWTFSetOp"] = (a0, a1) => (_BinaryenStringSliceWTFSetOp = Module["_BinaryenStringSliceWTFSetOp"] = wasmExports["zw"])(a0, a1);

var _BinaryenStringSliceWTFGetRef = Module["_BinaryenStringSliceWTFGetRef"] = a0 => (_BinaryenStringSliceWTFGetRef = Module["_BinaryenStringSliceWTFGetRef"] = wasmExports["Aw"])(a0);

var _BinaryenStringSliceWTFSetRef = Module["_BinaryenStringSliceWTFSetRef"] = (a0, a1) => (_BinaryenStringSliceWTFSetRef = Module["_BinaryenStringSliceWTFSetRef"] = wasmExports["Bw"])(a0, a1);

var _BinaryenStringSliceWTFGetStart = Module["_BinaryenStringSliceWTFGetStart"] = a0 => (_BinaryenStringSliceWTFGetStart = Module["_BinaryenStringSliceWTFGetStart"] = wasmExports["Cw"])(a0);

var _BinaryenStringSliceWTFSetStart = Module["_BinaryenStringSliceWTFSetStart"] = (a0, a1) => (_BinaryenStringSliceWTFSetStart = Module["_BinaryenStringSliceWTFSetStart"] = wasmExports["Dw"])(a0, a1);

var _BinaryenStringSliceWTFGetEnd = Module["_BinaryenStringSliceWTFGetEnd"] = a0 => (_BinaryenStringSliceWTFGetEnd = Module["_BinaryenStringSliceWTFGetEnd"] = wasmExports["Ew"])(a0);

var _BinaryenStringSliceWTFSetEnd = Module["_BinaryenStringSliceWTFSetEnd"] = (a0, a1) => (_BinaryenStringSliceWTFSetEnd = Module["_BinaryenStringSliceWTFSetEnd"] = wasmExports["Fw"])(a0, a1);

var _BinaryenStringSliceIterGetRef = Module["_BinaryenStringSliceIterGetRef"] = a0 => (_BinaryenStringSliceIterGetRef = Module["_BinaryenStringSliceIterGetRef"] = wasmExports["Gw"])(a0);

var _BinaryenStringSliceIterSetRef = Module["_BinaryenStringSliceIterSetRef"] = (a0, a1) => (_BinaryenStringSliceIterSetRef = Module["_BinaryenStringSliceIterSetRef"] = wasmExports["Hw"])(a0, a1);

var _BinaryenStringSliceIterGetNum = Module["_BinaryenStringSliceIterGetNum"] = a0 => (_BinaryenStringSliceIterGetNum = Module["_BinaryenStringSliceIterGetNum"] = wasmExports["Iw"])(a0);

var _BinaryenStringSliceIterSetNum = Module["_BinaryenStringSliceIterSetNum"] = (a0, a1) => (_BinaryenStringSliceIterSetNum = Module["_BinaryenStringSliceIterSetNum"] = wasmExports["Jw"])(a0, a1);

var _BinaryenAddFunction = Module["_BinaryenAddFunction"] = (a0, a1, a2, a3, a4, a5, a6) => (_BinaryenAddFunction = Module["_BinaryenAddFunction"] = wasmExports["Kw"])(a0, a1, a2, a3, a4, a5, a6);

var _BinaryenAddFunctionWithHeapType = Module["_BinaryenAddFunctionWithHeapType"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAddFunctionWithHeapType = Module["_BinaryenAddFunctionWithHeapType"] = wasmExports["Lw"])(a0, a1, a2, a3, a4, a5);

var _BinaryenGetFunction = Module["_BinaryenGetFunction"] = (a0, a1) => (_BinaryenGetFunction = Module["_BinaryenGetFunction"] = wasmExports["Mw"])(a0, a1);

var _BinaryenRemoveFunction = Module["_BinaryenRemoveFunction"] = (a0, a1) => (_BinaryenRemoveFunction = Module["_BinaryenRemoveFunction"] = wasmExports["Nw"])(a0, a1);

var _BinaryenGetNumFunctions = Module["_BinaryenGetNumFunctions"] = a0 => (_BinaryenGetNumFunctions = Module["_BinaryenGetNumFunctions"] = wasmExports["Ow"])(a0);

var _BinaryenGetFunctionByIndex = Module["_BinaryenGetFunctionByIndex"] = (a0, a1) => (_BinaryenGetFunctionByIndex = Module["_BinaryenGetFunctionByIndex"] = wasmExports["Pw"])(a0, a1);

var _BinaryenAddGlobal = Module["_BinaryenAddGlobal"] = (a0, a1, a2, a3, a4) => (_BinaryenAddGlobal = Module["_BinaryenAddGlobal"] = wasmExports["Qw"])(a0, a1, a2, a3, a4);

var _BinaryenGetGlobal = Module["_BinaryenGetGlobal"] = (a0, a1) => (_BinaryenGetGlobal = Module["_BinaryenGetGlobal"] = wasmExports["Rw"])(a0, a1);

var _BinaryenRemoveGlobal = Module["_BinaryenRemoveGlobal"] = (a0, a1) => (_BinaryenRemoveGlobal = Module["_BinaryenRemoveGlobal"] = wasmExports["Sw"])(a0, a1);

var _BinaryenGetNumGlobals = Module["_BinaryenGetNumGlobals"] = a0 => (_BinaryenGetNumGlobals = Module["_BinaryenGetNumGlobals"] = wasmExports["Tw"])(a0);

var _BinaryenGetGlobalByIndex = Module["_BinaryenGetGlobalByIndex"] = (a0, a1) => (_BinaryenGetGlobalByIndex = Module["_BinaryenGetGlobalByIndex"] = wasmExports["Uw"])(a0, a1);

var _BinaryenAddTag = Module["_BinaryenAddTag"] = (a0, a1, a2, a3) => (_BinaryenAddTag = Module["_BinaryenAddTag"] = wasmExports["Vw"])(a0, a1, a2, a3);

var _BinaryenGetTag = Module["_BinaryenGetTag"] = (a0, a1) => (_BinaryenGetTag = Module["_BinaryenGetTag"] = wasmExports["Ww"])(a0, a1);

var _BinaryenRemoveTag = Module["_BinaryenRemoveTag"] = (a0, a1) => (_BinaryenRemoveTag = Module["_BinaryenRemoveTag"] = wasmExports["Xw"])(a0, a1);

var _BinaryenAddFunctionImport = Module["_BinaryenAddFunctionImport"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAddFunctionImport = Module["_BinaryenAddFunctionImport"] = wasmExports["Yw"])(a0, a1, a2, a3, a4, a5);

var _BinaryenAddTableImport = Module["_BinaryenAddTableImport"] = (a0, a1, a2, a3) => (_BinaryenAddTableImport = Module["_BinaryenAddTableImport"] = wasmExports["Zw"])(a0, a1, a2, a3);

var _BinaryenAddMemoryImport = Module["_BinaryenAddMemoryImport"] = (a0, a1, a2, a3, a4) => (_BinaryenAddMemoryImport = Module["_BinaryenAddMemoryImport"] = wasmExports["_w"])(a0, a1, a2, a3, a4);

var _BinaryenAddGlobalImport = Module["_BinaryenAddGlobalImport"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAddGlobalImport = Module["_BinaryenAddGlobalImport"] = wasmExports["$w"])(a0, a1, a2, a3, a4, a5);

var _BinaryenAddTagImport = Module["_BinaryenAddTagImport"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAddTagImport = Module["_BinaryenAddTagImport"] = wasmExports["ax"])(a0, a1, a2, a3, a4, a5);

var _BinaryenAddFunctionExport = Module["_BinaryenAddFunctionExport"] = (a0, a1, a2) => (_BinaryenAddFunctionExport = Module["_BinaryenAddFunctionExport"] = wasmExports["bx"])(a0, a1, a2);

var _BinaryenAddTableExport = Module["_BinaryenAddTableExport"] = (a0, a1, a2) => (_BinaryenAddTableExport = Module["_BinaryenAddTableExport"] = wasmExports["cx"])(a0, a1, a2);

var _BinaryenAddMemoryExport = Module["_BinaryenAddMemoryExport"] = (a0, a1, a2) => (_BinaryenAddMemoryExport = Module["_BinaryenAddMemoryExport"] = wasmExports["dx"])(a0, a1, a2);

var _BinaryenAddGlobalExport = Module["_BinaryenAddGlobalExport"] = (a0, a1, a2) => (_BinaryenAddGlobalExport = Module["_BinaryenAddGlobalExport"] = wasmExports["ex"])(a0, a1, a2);

var _BinaryenAddTagExport = Module["_BinaryenAddTagExport"] = (a0, a1, a2) => (_BinaryenAddTagExport = Module["_BinaryenAddTagExport"] = wasmExports["fx"])(a0, a1, a2);

var _BinaryenGetExport = Module["_BinaryenGetExport"] = (a0, a1) => (_BinaryenGetExport = Module["_BinaryenGetExport"] = wasmExports["gx"])(a0, a1);

var _BinaryenRemoveExport = Module["_BinaryenRemoveExport"] = (a0, a1) => (_BinaryenRemoveExport = Module["_BinaryenRemoveExport"] = wasmExports["hx"])(a0, a1);

var _BinaryenGetNumExports = Module["_BinaryenGetNumExports"] = a0 => (_BinaryenGetNumExports = Module["_BinaryenGetNumExports"] = wasmExports["ix"])(a0);

var _BinaryenGetExportByIndex = Module["_BinaryenGetExportByIndex"] = (a0, a1) => (_BinaryenGetExportByIndex = Module["_BinaryenGetExportByIndex"] = wasmExports["jx"])(a0, a1);

var _BinaryenAddTable = Module["_BinaryenAddTable"] = (a0, a1, a2, a3, a4) => (_BinaryenAddTable = Module["_BinaryenAddTable"] = wasmExports["kx"])(a0, a1, a2, a3, a4);

var _BinaryenRemoveTable = Module["_BinaryenRemoveTable"] = (a0, a1) => (_BinaryenRemoveTable = Module["_BinaryenRemoveTable"] = wasmExports["lx"])(a0, a1);

var _BinaryenGetNumTables = Module["_BinaryenGetNumTables"] = a0 => (_BinaryenGetNumTables = Module["_BinaryenGetNumTables"] = wasmExports["mx"])(a0);

var _BinaryenGetTable = Module["_BinaryenGetTable"] = (a0, a1) => (_BinaryenGetTable = Module["_BinaryenGetTable"] = wasmExports["nx"])(a0, a1);

var _BinaryenGetTableByIndex = Module["_BinaryenGetTableByIndex"] = (a0, a1) => (_BinaryenGetTableByIndex = Module["_BinaryenGetTableByIndex"] = wasmExports["ox"])(a0, a1);

var _BinaryenAddActiveElementSegment = Module["_BinaryenAddActiveElementSegment"] = (a0, a1, a2, a3, a4, a5) => (_BinaryenAddActiveElementSegment = Module["_BinaryenAddActiveElementSegment"] = wasmExports["px"])(a0, a1, a2, a3, a4, a5);

var _BinaryenAddPassiveElementSegment = Module["_BinaryenAddPassiveElementSegment"] = (a0, a1, a2, a3) => (_BinaryenAddPassiveElementSegment = Module["_BinaryenAddPassiveElementSegment"] = wasmExports["qx"])(a0, a1, a2, a3);

var _BinaryenRemoveElementSegment = Module["_BinaryenRemoveElementSegment"] = (a0, a1) => (_BinaryenRemoveElementSegment = Module["_BinaryenRemoveElementSegment"] = wasmExports["rx"])(a0, a1);

var _BinaryenGetElementSegment = Module["_BinaryenGetElementSegment"] = (a0, a1) => (_BinaryenGetElementSegment = Module["_BinaryenGetElementSegment"] = wasmExports["sx"])(a0, a1);

var _BinaryenGetElementSegmentByIndex = Module["_BinaryenGetElementSegmentByIndex"] = (a0, a1) => (_BinaryenGetElementSegmentByIndex = Module["_BinaryenGetElementSegmentByIndex"] = wasmExports["tx"])(a0, a1);

var _BinaryenGetNumElementSegments = Module["_BinaryenGetNumElementSegments"] = a0 => (_BinaryenGetNumElementSegments = Module["_BinaryenGetNumElementSegments"] = wasmExports["ux"])(a0);

var _BinaryenElementSegmentGetOffset = Module["_BinaryenElementSegmentGetOffset"] = a0 => (_BinaryenElementSegmentGetOffset = Module["_BinaryenElementSegmentGetOffset"] = wasmExports["vx"])(a0);

var _BinaryenElementSegmentGetLength = Module["_BinaryenElementSegmentGetLength"] = a0 => (_BinaryenElementSegmentGetLength = Module["_BinaryenElementSegmentGetLength"] = wasmExports["wx"])(a0);

var _BinaryenElementSegmentGetData = Module["_BinaryenElementSegmentGetData"] = (a0, a1) => (_BinaryenElementSegmentGetData = Module["_BinaryenElementSegmentGetData"] = wasmExports["xx"])(a0, a1);

var _BinaryenSetMemory = Module["_BinaryenSetMemory"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (_BinaryenSetMemory = Module["_BinaryenSetMemory"] = wasmExports["yx"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);

var _BinaryenGetNumMemorySegments = Module["_BinaryenGetNumMemorySegments"] = a0 => (_BinaryenGetNumMemorySegments = Module["_BinaryenGetNumMemorySegments"] = wasmExports["zx"])(a0);

var _BinaryenGetMemorySegmentByteOffset = Module["_BinaryenGetMemorySegmentByteOffset"] = (a0, a1) => (_BinaryenGetMemorySegmentByteOffset = Module["_BinaryenGetMemorySegmentByteOffset"] = wasmExports["Ax"])(a0, a1);

var _BinaryenHasMemory = Module["_BinaryenHasMemory"] = a0 => (_BinaryenHasMemory = Module["_BinaryenHasMemory"] = wasmExports["Bx"])(a0);

var _BinaryenMemoryGetInitial = Module["_BinaryenMemoryGetInitial"] = (a0, a1) => (_BinaryenMemoryGetInitial = Module["_BinaryenMemoryGetInitial"] = wasmExports["Cx"])(a0, a1);

var _BinaryenMemoryHasMax = Module["_BinaryenMemoryHasMax"] = (a0, a1) => (_BinaryenMemoryHasMax = Module["_BinaryenMemoryHasMax"] = wasmExports["Dx"])(a0, a1);

var _BinaryenMemoryGetMax = Module["_BinaryenMemoryGetMax"] = (a0, a1) => (_BinaryenMemoryGetMax = Module["_BinaryenMemoryGetMax"] = wasmExports["Ex"])(a0, a1);

var _BinaryenMemoryImportGetModule = Module["_BinaryenMemoryImportGetModule"] = (a0, a1) => (_BinaryenMemoryImportGetModule = Module["_BinaryenMemoryImportGetModule"] = wasmExports["Fx"])(a0, a1);

var _BinaryenMemoryImportGetBase = Module["_BinaryenMemoryImportGetBase"] = (a0, a1) => (_BinaryenMemoryImportGetBase = Module["_BinaryenMemoryImportGetBase"] = wasmExports["Gx"])(a0, a1);

var _BinaryenMemoryIsShared = Module["_BinaryenMemoryIsShared"] = (a0, a1) => (_BinaryenMemoryIsShared = Module["_BinaryenMemoryIsShared"] = wasmExports["Hx"])(a0, a1);

var _BinaryenMemoryIs64 = Module["_BinaryenMemoryIs64"] = (a0, a1) => (_BinaryenMemoryIs64 = Module["_BinaryenMemoryIs64"] = wasmExports["Ix"])(a0, a1);

var _BinaryenGetMemorySegmentByteLength = Module["_BinaryenGetMemorySegmentByteLength"] = (a0, a1) => (_BinaryenGetMemorySegmentByteLength = Module["_BinaryenGetMemorySegmentByteLength"] = wasmExports["Jx"])(a0, a1);

var _BinaryenGetMemorySegmentPassive = Module["_BinaryenGetMemorySegmentPassive"] = (a0, a1) => (_BinaryenGetMemorySegmentPassive = Module["_BinaryenGetMemorySegmentPassive"] = wasmExports["Kx"])(a0, a1);

var _BinaryenCopyMemorySegmentData = Module["_BinaryenCopyMemorySegmentData"] = (a0, a1, a2) => (_BinaryenCopyMemorySegmentData = Module["_BinaryenCopyMemorySegmentData"] = wasmExports["Lx"])(a0, a1, a2);

var _BinaryenSetStart = Module["_BinaryenSetStart"] = (a0, a1) => (_BinaryenSetStart = Module["_BinaryenSetStart"] = wasmExports["Mx"])(a0, a1);

var _BinaryenModuleGetFeatures = Module["_BinaryenModuleGetFeatures"] = a0 => (_BinaryenModuleGetFeatures = Module["_BinaryenModuleGetFeatures"] = wasmExports["Nx"])(a0);

var _BinaryenModuleSetFeatures = Module["_BinaryenModuleSetFeatures"] = (a0, a1) => (_BinaryenModuleSetFeatures = Module["_BinaryenModuleSetFeatures"] = wasmExports["Ox"])(a0, a1);

var _BinaryenModuleParse = Module["_BinaryenModuleParse"] = a0 => (_BinaryenModuleParse = Module["_BinaryenModuleParse"] = wasmExports["Px"])(a0);

var _BinaryenModulePrint = Module["_BinaryenModulePrint"] = a0 => (_BinaryenModulePrint = Module["_BinaryenModulePrint"] = wasmExports["Qx"])(a0);

var _BinaryenModulePrintStackIR = Module["_BinaryenModulePrintStackIR"] = (a0, a1) => (_BinaryenModulePrintStackIR = Module["_BinaryenModulePrintStackIR"] = wasmExports["Rx"])(a0, a1);

var _BinaryenModulePrintAsmjs = Module["_BinaryenModulePrintAsmjs"] = a0 => (_BinaryenModulePrintAsmjs = Module["_BinaryenModulePrintAsmjs"] = wasmExports["Sx"])(a0);

var _BinaryenModuleValidate = Module["_BinaryenModuleValidate"] = a0 => (_BinaryenModuleValidate = Module["_BinaryenModuleValidate"] = wasmExports["Tx"])(a0);

var _BinaryenModuleOptimize = Module["_BinaryenModuleOptimize"] = a0 => (_BinaryenModuleOptimize = Module["_BinaryenModuleOptimize"] = wasmExports["Ux"])(a0);

var _BinaryenModuleUpdateMaps = Module["_BinaryenModuleUpdateMaps"] = a0 => (_BinaryenModuleUpdateMaps = Module["_BinaryenModuleUpdateMaps"] = wasmExports["Vx"])(a0);

var _BinaryenGetOptimizeLevel = Module["_BinaryenGetOptimizeLevel"] = () => (_BinaryenGetOptimizeLevel = Module["_BinaryenGetOptimizeLevel"] = wasmExports["Wx"])();

var _BinaryenSetOptimizeLevel = Module["_BinaryenSetOptimizeLevel"] = a0 => (_BinaryenSetOptimizeLevel = Module["_BinaryenSetOptimizeLevel"] = wasmExports["Xx"])(a0);

var _BinaryenGetShrinkLevel = Module["_BinaryenGetShrinkLevel"] = () => (_BinaryenGetShrinkLevel = Module["_BinaryenGetShrinkLevel"] = wasmExports["Yx"])();

var _BinaryenSetShrinkLevel = Module["_BinaryenSetShrinkLevel"] = a0 => (_BinaryenSetShrinkLevel = Module["_BinaryenSetShrinkLevel"] = wasmExports["Zx"])(a0);

var _BinaryenGetDebugInfo = Module["_BinaryenGetDebugInfo"] = () => (_BinaryenGetDebugInfo = Module["_BinaryenGetDebugInfo"] = wasmExports["_x"])();

var _BinaryenSetDebugInfo = Module["_BinaryenSetDebugInfo"] = a0 => (_BinaryenSetDebugInfo = Module["_BinaryenSetDebugInfo"] = wasmExports["$x"])(a0);

var _BinaryenGetLowMemoryUnused = Module["_BinaryenGetLowMemoryUnused"] = () => (_BinaryenGetLowMemoryUnused = Module["_BinaryenGetLowMemoryUnused"] = wasmExports["ay"])();

var _BinaryenSetLowMemoryUnused = Module["_BinaryenSetLowMemoryUnused"] = a0 => (_BinaryenSetLowMemoryUnused = Module["_BinaryenSetLowMemoryUnused"] = wasmExports["by"])(a0);

var _BinaryenGetZeroFilledMemory = Module["_BinaryenGetZeroFilledMemory"] = () => (_BinaryenGetZeroFilledMemory = Module["_BinaryenGetZeroFilledMemory"] = wasmExports["cy"])();

var _BinaryenSetZeroFilledMemory = Module["_BinaryenSetZeroFilledMemory"] = a0 => (_BinaryenSetZeroFilledMemory = Module["_BinaryenSetZeroFilledMemory"] = wasmExports["dy"])(a0);

var _BinaryenGetFastMath = Module["_BinaryenGetFastMath"] = () => (_BinaryenGetFastMath = Module["_BinaryenGetFastMath"] = wasmExports["ey"])();

var _BinaryenSetFastMath = Module["_BinaryenSetFastMath"] = a0 => (_BinaryenSetFastMath = Module["_BinaryenSetFastMath"] = wasmExports["fy"])(a0);

var _BinaryenGetPassArgument = Module["_BinaryenGetPassArgument"] = a0 => (_BinaryenGetPassArgument = Module["_BinaryenGetPassArgument"] = wasmExports["gy"])(a0);

var _BinaryenSetPassArgument = Module["_BinaryenSetPassArgument"] = (a0, a1) => (_BinaryenSetPassArgument = Module["_BinaryenSetPassArgument"] = wasmExports["hy"])(a0, a1);

var _BinaryenClearPassArguments = Module["_BinaryenClearPassArguments"] = () => (_BinaryenClearPassArguments = Module["_BinaryenClearPassArguments"] = wasmExports["iy"])();

var _BinaryenGetAlwaysInlineMaxSize = Module["_BinaryenGetAlwaysInlineMaxSize"] = () => (_BinaryenGetAlwaysInlineMaxSize = Module["_BinaryenGetAlwaysInlineMaxSize"] = wasmExports["jy"])();

var _BinaryenSetAlwaysInlineMaxSize = Module["_BinaryenSetAlwaysInlineMaxSize"] = a0 => (_BinaryenSetAlwaysInlineMaxSize = Module["_BinaryenSetAlwaysInlineMaxSize"] = wasmExports["ky"])(a0);

var _BinaryenGetFlexibleInlineMaxSize = Module["_BinaryenGetFlexibleInlineMaxSize"] = () => (_BinaryenGetFlexibleInlineMaxSize = Module["_BinaryenGetFlexibleInlineMaxSize"] = wasmExports["ly"])();

var _BinaryenSetFlexibleInlineMaxSize = Module["_BinaryenSetFlexibleInlineMaxSize"] = a0 => (_BinaryenSetFlexibleInlineMaxSize = Module["_BinaryenSetFlexibleInlineMaxSize"] = wasmExports["my"])(a0);

var _BinaryenGetOneCallerInlineMaxSize = Module["_BinaryenGetOneCallerInlineMaxSize"] = () => (_BinaryenGetOneCallerInlineMaxSize = Module["_BinaryenGetOneCallerInlineMaxSize"] = wasmExports["ny"])();

var _BinaryenSetOneCallerInlineMaxSize = Module["_BinaryenSetOneCallerInlineMaxSize"] = a0 => (_BinaryenSetOneCallerInlineMaxSize = Module["_BinaryenSetOneCallerInlineMaxSize"] = wasmExports["oy"])(a0);

var _BinaryenGetAllowInliningFunctionsWithLoops = Module["_BinaryenGetAllowInliningFunctionsWithLoops"] = () => (_BinaryenGetAllowInliningFunctionsWithLoops = Module["_BinaryenGetAllowInliningFunctionsWithLoops"] = wasmExports["py"])();

var _BinaryenSetAllowInliningFunctionsWithLoops = Module["_BinaryenSetAllowInliningFunctionsWithLoops"] = a0 => (_BinaryenSetAllowInliningFunctionsWithLoops = Module["_BinaryenSetAllowInliningFunctionsWithLoops"] = wasmExports["qy"])(a0);

var _BinaryenModuleRunPasses = Module["_BinaryenModuleRunPasses"] = (a0, a1, a2) => (_BinaryenModuleRunPasses = Module["_BinaryenModuleRunPasses"] = wasmExports["ry"])(a0, a1, a2);

var _BinaryenModuleAutoDrop = Module["_BinaryenModuleAutoDrop"] = a0 => (_BinaryenModuleAutoDrop = Module["_BinaryenModuleAutoDrop"] = wasmExports["sy"])(a0);

var _BinaryenModuleWrite = Module["_BinaryenModuleWrite"] = (a0, a1, a2) => (_BinaryenModuleWrite = Module["_BinaryenModuleWrite"] = wasmExports["ty"])(a0, a1, a2);

var _BinaryenModuleWriteText = Module["_BinaryenModuleWriteText"] = (a0, a1, a2) => (_BinaryenModuleWriteText = Module["_BinaryenModuleWriteText"] = wasmExports["uy"])(a0, a1, a2);

var _BinaryenModuleWriteStackIR = Module["_BinaryenModuleWriteStackIR"] = (a0, a1, a2, a3) => (_BinaryenModuleWriteStackIR = Module["_BinaryenModuleWriteStackIR"] = wasmExports["vy"])(a0, a1, a2, a3);

var _BinaryenModuleWriteWithSourceMap = Module["_BinaryenModuleWriteWithSourceMap"] = (a0, a1, a2, a3, a4, a5, a6) => (_BinaryenModuleWriteWithSourceMap = Module["_BinaryenModuleWriteWithSourceMap"] = wasmExports["wy"])(a0, a1, a2, a3, a4, a5, a6);

var _BinaryenModuleAllocateAndWrite = Module["_BinaryenModuleAllocateAndWrite"] = (a0, a1, a2) => (_BinaryenModuleAllocateAndWrite = Module["_BinaryenModuleAllocateAndWrite"] = wasmExports["xy"])(a0, a1, a2);

var _malloc = Module["_malloc"] = a0 => (_malloc = Module["_malloc"] = wasmExports["yy"])(a0);

var _BinaryenModuleAllocateAndWriteText = Module["_BinaryenModuleAllocateAndWriteText"] = a0 => (_BinaryenModuleAllocateAndWriteText = Module["_BinaryenModuleAllocateAndWriteText"] = wasmExports["zy"])(a0);

var _BinaryenModuleAllocateAndWriteStackIR = Module["_BinaryenModuleAllocateAndWriteStackIR"] = (a0, a1) => (_BinaryenModuleAllocateAndWriteStackIR = Module["_BinaryenModuleAllocateAndWriteStackIR"] = wasmExports["Ay"])(a0, a1);

var _BinaryenModuleRead = Module["_BinaryenModuleRead"] = (a0, a1) => (_BinaryenModuleRead = Module["_BinaryenModuleRead"] = wasmExports["By"])(a0, a1);

var _BinaryenModuleInterpret = Module["_BinaryenModuleInterpret"] = a0 => (_BinaryenModuleInterpret = Module["_BinaryenModuleInterpret"] = wasmExports["Cy"])(a0);

var _BinaryenModuleAddDebugInfoFileName = Module["_BinaryenModuleAddDebugInfoFileName"] = (a0, a1) => (_BinaryenModuleAddDebugInfoFileName = Module["_BinaryenModuleAddDebugInfoFileName"] = wasmExports["Dy"])(a0, a1);

var _BinaryenModuleGetDebugInfoFileName = Module["_BinaryenModuleGetDebugInfoFileName"] = (a0, a1) => (_BinaryenModuleGetDebugInfoFileName = Module["_BinaryenModuleGetDebugInfoFileName"] = wasmExports["Ey"])(a0, a1);

var _BinaryenFunctionGetName = Module["_BinaryenFunctionGetName"] = a0 => (_BinaryenFunctionGetName = Module["_BinaryenFunctionGetName"] = wasmExports["Fy"])(a0);

var _BinaryenFunctionGetParams = Module["_BinaryenFunctionGetParams"] = a0 => (_BinaryenFunctionGetParams = Module["_BinaryenFunctionGetParams"] = wasmExports["Gy"])(a0);

var _BinaryenFunctionGetResults = Module["_BinaryenFunctionGetResults"] = a0 => (_BinaryenFunctionGetResults = Module["_BinaryenFunctionGetResults"] = wasmExports["Hy"])(a0);

var _BinaryenFunctionGetNumVars = Module["_BinaryenFunctionGetNumVars"] = a0 => (_BinaryenFunctionGetNumVars = Module["_BinaryenFunctionGetNumVars"] = wasmExports["Iy"])(a0);

var _BinaryenFunctionGetVar = Module["_BinaryenFunctionGetVar"] = (a0, a1) => (_BinaryenFunctionGetVar = Module["_BinaryenFunctionGetVar"] = wasmExports["Jy"])(a0, a1);

var _BinaryenFunctionAddVar = Module["_BinaryenFunctionAddVar"] = (a0, a1) => (_BinaryenFunctionAddVar = Module["_BinaryenFunctionAddVar"] = wasmExports["Ky"])(a0, a1);

var _BinaryenFunctionGetNumLocals = Module["_BinaryenFunctionGetNumLocals"] = a0 => (_BinaryenFunctionGetNumLocals = Module["_BinaryenFunctionGetNumLocals"] = wasmExports["Ly"])(a0);

var _BinaryenFunctionHasLocalName = Module["_BinaryenFunctionHasLocalName"] = (a0, a1) => (_BinaryenFunctionHasLocalName = Module["_BinaryenFunctionHasLocalName"] = wasmExports["My"])(a0, a1);

var _BinaryenFunctionGetLocalName = Module["_BinaryenFunctionGetLocalName"] = (a0, a1) => (_BinaryenFunctionGetLocalName = Module["_BinaryenFunctionGetLocalName"] = wasmExports["Ny"])(a0, a1);

var _BinaryenFunctionSetLocalName = Module["_BinaryenFunctionSetLocalName"] = (a0, a1, a2) => (_BinaryenFunctionSetLocalName = Module["_BinaryenFunctionSetLocalName"] = wasmExports["Oy"])(a0, a1, a2);

var _BinaryenFunctionGetBody = Module["_BinaryenFunctionGetBody"] = a0 => (_BinaryenFunctionGetBody = Module["_BinaryenFunctionGetBody"] = wasmExports["Py"])(a0);

var _BinaryenFunctionSetBody = Module["_BinaryenFunctionSetBody"] = (a0, a1) => (_BinaryenFunctionSetBody = Module["_BinaryenFunctionSetBody"] = wasmExports["Qy"])(a0, a1);

var _BinaryenFunctionOptimize = Module["_BinaryenFunctionOptimize"] = (a0, a1) => (_BinaryenFunctionOptimize = Module["_BinaryenFunctionOptimize"] = wasmExports["Ry"])(a0, a1);

var _BinaryenFunctionRunPasses = Module["_BinaryenFunctionRunPasses"] = (a0, a1, a2, a3) => (_BinaryenFunctionRunPasses = Module["_BinaryenFunctionRunPasses"] = wasmExports["Sy"])(a0, a1, a2, a3);

var _BinaryenFunctionSetDebugLocation = Module["_BinaryenFunctionSetDebugLocation"] = (a0, a1, a2, a3, a4) => (_BinaryenFunctionSetDebugLocation = Module["_BinaryenFunctionSetDebugLocation"] = wasmExports["Ty"])(a0, a1, a2, a3, a4);

var _BinaryenTableGetName = Module["_BinaryenTableGetName"] = a0 => (_BinaryenTableGetName = Module["_BinaryenTableGetName"] = wasmExports["Uy"])(a0);

var _BinaryenTableSetName = Module["_BinaryenTableSetName"] = (a0, a1) => (_BinaryenTableSetName = Module["_BinaryenTableSetName"] = wasmExports["Vy"])(a0, a1);

var _BinaryenTableGetInitial = Module["_BinaryenTableGetInitial"] = a0 => (_BinaryenTableGetInitial = Module["_BinaryenTableGetInitial"] = wasmExports["Wy"])(a0);

var _BinaryenTableSetInitial = Module["_BinaryenTableSetInitial"] = (a0, a1) => (_BinaryenTableSetInitial = Module["_BinaryenTableSetInitial"] = wasmExports["Xy"])(a0, a1);

var _BinaryenTableHasMax = Module["_BinaryenTableHasMax"] = a0 => (_BinaryenTableHasMax = Module["_BinaryenTableHasMax"] = wasmExports["Yy"])(a0);

var _BinaryenTableGetMax = Module["_BinaryenTableGetMax"] = a0 => (_BinaryenTableGetMax = Module["_BinaryenTableGetMax"] = wasmExports["Zy"])(a0);

var _BinaryenTableSetMax = Module["_BinaryenTableSetMax"] = (a0, a1) => (_BinaryenTableSetMax = Module["_BinaryenTableSetMax"] = wasmExports["_y"])(a0, a1);

var _BinaryenTableGetType = Module["_BinaryenTableGetType"] = a0 => (_BinaryenTableGetType = Module["_BinaryenTableGetType"] = wasmExports["$y"])(a0);

var _BinaryenTableSetType = Module["_BinaryenTableSetType"] = (a0, a1) => (_BinaryenTableSetType = Module["_BinaryenTableSetType"] = wasmExports["az"])(a0, a1);

var _BinaryenElementSegmentGetName = Module["_BinaryenElementSegmentGetName"] = a0 => (_BinaryenElementSegmentGetName = Module["_BinaryenElementSegmentGetName"] = wasmExports["bz"])(a0);

var _BinaryenElementSegmentSetName = Module["_BinaryenElementSegmentSetName"] = (a0, a1) => (_BinaryenElementSegmentSetName = Module["_BinaryenElementSegmentSetName"] = wasmExports["cz"])(a0, a1);

var _BinaryenElementSegmentGetTable = Module["_BinaryenElementSegmentGetTable"] = a0 => (_BinaryenElementSegmentGetTable = Module["_BinaryenElementSegmentGetTable"] = wasmExports["dz"])(a0);

var _BinaryenElementSegmentSetTable = Module["_BinaryenElementSegmentSetTable"] = (a0, a1) => (_BinaryenElementSegmentSetTable = Module["_BinaryenElementSegmentSetTable"] = wasmExports["ez"])(a0, a1);

var _BinaryenElementSegmentIsPassive = Module["_BinaryenElementSegmentIsPassive"] = a0 => (_BinaryenElementSegmentIsPassive = Module["_BinaryenElementSegmentIsPassive"] = wasmExports["fz"])(a0);

var _BinaryenGlobalGetName = Module["_BinaryenGlobalGetName"] = a0 => (_BinaryenGlobalGetName = Module["_BinaryenGlobalGetName"] = wasmExports["gz"])(a0);

var _BinaryenGlobalGetType = Module["_BinaryenGlobalGetType"] = a0 => (_BinaryenGlobalGetType = Module["_BinaryenGlobalGetType"] = wasmExports["hz"])(a0);

var _BinaryenGlobalIsMutable = Module["_BinaryenGlobalIsMutable"] = a0 => (_BinaryenGlobalIsMutable = Module["_BinaryenGlobalIsMutable"] = wasmExports["iz"])(a0);

var _BinaryenGlobalGetInitExpr = Module["_BinaryenGlobalGetInitExpr"] = a0 => (_BinaryenGlobalGetInitExpr = Module["_BinaryenGlobalGetInitExpr"] = wasmExports["jz"])(a0);

var _BinaryenTagGetName = Module["_BinaryenTagGetName"] = a0 => (_BinaryenTagGetName = Module["_BinaryenTagGetName"] = wasmExports["kz"])(a0);

var _BinaryenTagGetParams = Module["_BinaryenTagGetParams"] = a0 => (_BinaryenTagGetParams = Module["_BinaryenTagGetParams"] = wasmExports["lz"])(a0);

var _BinaryenTagGetResults = Module["_BinaryenTagGetResults"] = a0 => (_BinaryenTagGetResults = Module["_BinaryenTagGetResults"] = wasmExports["mz"])(a0);

var _BinaryenFunctionImportGetModule = Module["_BinaryenFunctionImportGetModule"] = a0 => (_BinaryenFunctionImportGetModule = Module["_BinaryenFunctionImportGetModule"] = wasmExports["nz"])(a0);

var _BinaryenTableImportGetModule = Module["_BinaryenTableImportGetModule"] = a0 => (_BinaryenTableImportGetModule = Module["_BinaryenTableImportGetModule"] = wasmExports["oz"])(a0);

var _BinaryenGlobalImportGetModule = Module["_BinaryenGlobalImportGetModule"] = a0 => (_BinaryenGlobalImportGetModule = Module["_BinaryenGlobalImportGetModule"] = wasmExports["pz"])(a0);

var _BinaryenTagImportGetModule = Module["_BinaryenTagImportGetModule"] = a0 => (_BinaryenTagImportGetModule = Module["_BinaryenTagImportGetModule"] = wasmExports["qz"])(a0);

var _BinaryenFunctionImportGetBase = Module["_BinaryenFunctionImportGetBase"] = a0 => (_BinaryenFunctionImportGetBase = Module["_BinaryenFunctionImportGetBase"] = wasmExports["rz"])(a0);

var _BinaryenTableImportGetBase = Module["_BinaryenTableImportGetBase"] = a0 => (_BinaryenTableImportGetBase = Module["_BinaryenTableImportGetBase"] = wasmExports["sz"])(a0);

var _BinaryenGlobalImportGetBase = Module["_BinaryenGlobalImportGetBase"] = a0 => (_BinaryenGlobalImportGetBase = Module["_BinaryenGlobalImportGetBase"] = wasmExports["tz"])(a0);

var _BinaryenTagImportGetBase = Module["_BinaryenTagImportGetBase"] = a0 => (_BinaryenTagImportGetBase = Module["_BinaryenTagImportGetBase"] = wasmExports["uz"])(a0);

var _BinaryenExportGetKind = Module["_BinaryenExportGetKind"] = a0 => (_BinaryenExportGetKind = Module["_BinaryenExportGetKind"] = wasmExports["vz"])(a0);

var _BinaryenExportGetName = Module["_BinaryenExportGetName"] = a0 => (_BinaryenExportGetName = Module["_BinaryenExportGetName"] = wasmExports["wz"])(a0);

var _BinaryenExportGetValue = Module["_BinaryenExportGetValue"] = a0 => (_BinaryenExportGetValue = Module["_BinaryenExportGetValue"] = wasmExports["xz"])(a0);

var _BinaryenAddCustomSection = Module["_BinaryenAddCustomSection"] = (a0, a1, a2, a3) => (_BinaryenAddCustomSection = Module["_BinaryenAddCustomSection"] = wasmExports["yz"])(a0, a1, a2, a3);

var _BinaryenSideEffectNone = Module["_BinaryenSideEffectNone"] = () => (_BinaryenSideEffectNone = Module["_BinaryenSideEffectNone"] = wasmExports["zz"])();

var _BinaryenSideEffectBranches = Module["_BinaryenSideEffectBranches"] = () => (_BinaryenSideEffectBranches = Module["_BinaryenSideEffectBranches"] = wasmExports["Az"])();

var _BinaryenSideEffectCalls = Module["_BinaryenSideEffectCalls"] = () => (_BinaryenSideEffectCalls = Module["_BinaryenSideEffectCalls"] = wasmExports["Bz"])();

var _BinaryenSideEffectReadsLocal = Module["_BinaryenSideEffectReadsLocal"] = () => (_BinaryenSideEffectReadsLocal = Module["_BinaryenSideEffectReadsLocal"] = wasmExports["Cz"])();

var _BinaryenSideEffectWritesLocal = Module["_BinaryenSideEffectWritesLocal"] = () => (_BinaryenSideEffectWritesLocal = Module["_BinaryenSideEffectWritesLocal"] = wasmExports["Dz"])();

var _BinaryenSideEffectReadsGlobal = Module["_BinaryenSideEffectReadsGlobal"] = () => (_BinaryenSideEffectReadsGlobal = Module["_BinaryenSideEffectReadsGlobal"] = wasmExports["Ez"])();

var _BinaryenSideEffectWritesGlobal = Module["_BinaryenSideEffectWritesGlobal"] = () => (_BinaryenSideEffectWritesGlobal = Module["_BinaryenSideEffectWritesGlobal"] = wasmExports["Fz"])();

var _BinaryenSideEffectReadsMemory = Module["_BinaryenSideEffectReadsMemory"] = () => (_BinaryenSideEffectReadsMemory = Module["_BinaryenSideEffectReadsMemory"] = wasmExports["Gz"])();

var _BinaryenSideEffectWritesMemory = Module["_BinaryenSideEffectWritesMemory"] = () => (_BinaryenSideEffectWritesMemory = Module["_BinaryenSideEffectWritesMemory"] = wasmExports["Hz"])();

var _BinaryenSideEffectReadsTable = Module["_BinaryenSideEffectReadsTable"] = () => (_BinaryenSideEffectReadsTable = Module["_BinaryenSideEffectReadsTable"] = wasmExports["Iz"])();

var _BinaryenSideEffectWritesTable = Module["_BinaryenSideEffectWritesTable"] = () => (_BinaryenSideEffectWritesTable = Module["_BinaryenSideEffectWritesTable"] = wasmExports["Jz"])();

var _BinaryenSideEffectImplicitTrap = Module["_BinaryenSideEffectImplicitTrap"] = () => (_BinaryenSideEffectImplicitTrap = Module["_BinaryenSideEffectImplicitTrap"] = wasmExports["Kz"])();

var _BinaryenSideEffectTrapsNeverHappen = Module["_BinaryenSideEffectTrapsNeverHappen"] = () => (_BinaryenSideEffectTrapsNeverHappen = Module["_BinaryenSideEffectTrapsNeverHappen"] = wasmExports["Lz"])();

var _BinaryenSideEffectIsAtomic = Module["_BinaryenSideEffectIsAtomic"] = () => (_BinaryenSideEffectIsAtomic = Module["_BinaryenSideEffectIsAtomic"] = wasmExports["Mz"])();

var _BinaryenSideEffectThrows = Module["_BinaryenSideEffectThrows"] = () => (_BinaryenSideEffectThrows = Module["_BinaryenSideEffectThrows"] = wasmExports["Nz"])();

var _BinaryenSideEffectDanglingPop = Module["_BinaryenSideEffectDanglingPop"] = () => (_BinaryenSideEffectDanglingPop = Module["_BinaryenSideEffectDanglingPop"] = wasmExports["Oz"])();

var _BinaryenSideEffectAny = Module["_BinaryenSideEffectAny"] = () => (_BinaryenSideEffectAny = Module["_BinaryenSideEffectAny"] = wasmExports["Pz"])();

var _BinaryenExpressionGetSideEffects = Module["_BinaryenExpressionGetSideEffects"] = (a0, a1) => (_BinaryenExpressionGetSideEffects = Module["_BinaryenExpressionGetSideEffects"] = wasmExports["Qz"])(a0, a1);

var _RelooperCreate = Module["_RelooperCreate"] = a0 => (_RelooperCreate = Module["_RelooperCreate"] = wasmExports["Rz"])(a0);

var _RelooperAddBlock = Module["_RelooperAddBlock"] = (a0, a1) => (_RelooperAddBlock = Module["_RelooperAddBlock"] = wasmExports["Sz"])(a0, a1);

var _RelooperAddBranch = Module["_RelooperAddBranch"] = (a0, a1, a2, a3) => (_RelooperAddBranch = Module["_RelooperAddBranch"] = wasmExports["Tz"])(a0, a1, a2, a3);

var _RelooperAddBlockWithSwitch = Module["_RelooperAddBlockWithSwitch"] = (a0, a1, a2) => (_RelooperAddBlockWithSwitch = Module["_RelooperAddBlockWithSwitch"] = wasmExports["Uz"])(a0, a1, a2);

var _RelooperAddBranchForSwitch = Module["_RelooperAddBranchForSwitch"] = (a0, a1, a2, a3, a4) => (_RelooperAddBranchForSwitch = Module["_RelooperAddBranchForSwitch"] = wasmExports["Vz"])(a0, a1, a2, a3, a4);

var _RelooperRenderAndDispose = Module["_RelooperRenderAndDispose"] = (a0, a1, a2) => (_RelooperRenderAndDispose = Module["_RelooperRenderAndDispose"] = wasmExports["Wz"])(a0, a1, a2);

var _ExpressionRunnerFlagsDefault = Module["_ExpressionRunnerFlagsDefault"] = () => (_ExpressionRunnerFlagsDefault = Module["_ExpressionRunnerFlagsDefault"] = wasmExports["Xz"])();

var _ExpressionRunnerFlagsPreserveSideeffects = Module["_ExpressionRunnerFlagsPreserveSideeffects"] = () => (_ExpressionRunnerFlagsPreserveSideeffects = Module["_ExpressionRunnerFlagsPreserveSideeffects"] = wasmExports["Yz"])();

var _ExpressionRunnerFlagsTraverseCalls = Module["_ExpressionRunnerFlagsTraverseCalls"] = () => (_ExpressionRunnerFlagsTraverseCalls = Module["_ExpressionRunnerFlagsTraverseCalls"] = wasmExports["Zz"])();

var _ExpressionRunnerCreate = Module["_ExpressionRunnerCreate"] = (a0, a1, a2, a3) => (_ExpressionRunnerCreate = Module["_ExpressionRunnerCreate"] = wasmExports["_z"])(a0, a1, a2, a3);

var _ExpressionRunnerSetLocalValue = Module["_ExpressionRunnerSetLocalValue"] = (a0, a1, a2) => (_ExpressionRunnerSetLocalValue = Module["_ExpressionRunnerSetLocalValue"] = wasmExports["$z"])(a0, a1, a2);

var _ExpressionRunnerSetGlobalValue = Module["_ExpressionRunnerSetGlobalValue"] = (a0, a1, a2) => (_ExpressionRunnerSetGlobalValue = Module["_ExpressionRunnerSetGlobalValue"] = wasmExports["aA"])(a0, a1, a2);

var _ExpressionRunnerRunAndDispose = Module["_ExpressionRunnerRunAndDispose"] = (a0, a1) => (_ExpressionRunnerRunAndDispose = Module["_ExpressionRunnerRunAndDispose"] = wasmExports["bA"])(a0, a1);

var _TypeBuilderErrorReasonSelfSupertype = Module["_TypeBuilderErrorReasonSelfSupertype"] = () => (_TypeBuilderErrorReasonSelfSupertype = Module["_TypeBuilderErrorReasonSelfSupertype"] = wasmExports["cA"])();

var _TypeBuilderErrorReasonInvalidSupertype = Module["_TypeBuilderErrorReasonInvalidSupertype"] = () => (_TypeBuilderErrorReasonInvalidSupertype = Module["_TypeBuilderErrorReasonInvalidSupertype"] = wasmExports["dA"])();

var _TypeBuilderErrorReasonForwardSupertypeReference = Module["_TypeBuilderErrorReasonForwardSupertypeReference"] = () => (_TypeBuilderErrorReasonForwardSupertypeReference = Module["_TypeBuilderErrorReasonForwardSupertypeReference"] = wasmExports["eA"])();

var _TypeBuilderErrorReasonForwardChildReference = Module["_TypeBuilderErrorReasonForwardChildReference"] = () => (_TypeBuilderErrorReasonForwardChildReference = Module["_TypeBuilderErrorReasonForwardChildReference"] = wasmExports["fA"])();

var _TypeBuilderCreate = Module["_TypeBuilderCreate"] = a0 => (_TypeBuilderCreate = Module["_TypeBuilderCreate"] = wasmExports["gA"])(a0);

var _TypeBuilderGrow = Module["_TypeBuilderGrow"] = (a0, a1) => (_TypeBuilderGrow = Module["_TypeBuilderGrow"] = wasmExports["hA"])(a0, a1);

var _TypeBuilderGetSize = Module["_TypeBuilderGetSize"] = a0 => (_TypeBuilderGetSize = Module["_TypeBuilderGetSize"] = wasmExports["iA"])(a0);

var _TypeBuilderSetSignatureType = Module["_TypeBuilderSetSignatureType"] = (a0, a1, a2, a3) => (_TypeBuilderSetSignatureType = Module["_TypeBuilderSetSignatureType"] = wasmExports["jA"])(a0, a1, a2, a3);

var _TypeBuilderSetStructType = Module["_TypeBuilderSetStructType"] = (a0, a1, a2, a3, a4, a5) => (_TypeBuilderSetStructType = Module["_TypeBuilderSetStructType"] = wasmExports["kA"])(a0, a1, a2, a3, a4, a5);

var _TypeBuilderSetArrayType = Module["_TypeBuilderSetArrayType"] = (a0, a1, a2, a3, a4) => (_TypeBuilderSetArrayType = Module["_TypeBuilderSetArrayType"] = wasmExports["lA"])(a0, a1, a2, a3, a4);

var _TypeBuilderGetTempHeapType = Module["_TypeBuilderGetTempHeapType"] = (a0, a1) => (_TypeBuilderGetTempHeapType = Module["_TypeBuilderGetTempHeapType"] = wasmExports["mA"])(a0, a1);

var _TypeBuilderGetTempTupleType = Module["_TypeBuilderGetTempTupleType"] = (a0, a1, a2) => (_TypeBuilderGetTempTupleType = Module["_TypeBuilderGetTempTupleType"] = wasmExports["nA"])(a0, a1, a2);

var _TypeBuilderGetTempRefType = Module["_TypeBuilderGetTempRefType"] = (a0, a1, a2) => (_TypeBuilderGetTempRefType = Module["_TypeBuilderGetTempRefType"] = wasmExports["oA"])(a0, a1, a2);

var _TypeBuilderSetSubType = Module["_TypeBuilderSetSubType"] = (a0, a1, a2) => (_TypeBuilderSetSubType = Module["_TypeBuilderSetSubType"] = wasmExports["pA"])(a0, a1, a2);

var _TypeBuilderSetOpen = Module["_TypeBuilderSetOpen"] = (a0, a1) => (_TypeBuilderSetOpen = Module["_TypeBuilderSetOpen"] = wasmExports["qA"])(a0, a1);

var _TypeBuilderCreateRecGroup = Module["_TypeBuilderCreateRecGroup"] = (a0, a1, a2) => (_TypeBuilderCreateRecGroup = Module["_TypeBuilderCreateRecGroup"] = wasmExports["rA"])(a0, a1, a2);

var _TypeBuilderBuildAndDispose = Module["_TypeBuilderBuildAndDispose"] = (a0, a1, a2, a3) => (_TypeBuilderBuildAndDispose = Module["_TypeBuilderBuildAndDispose"] = wasmExports["sA"])(a0, a1, a2, a3);

var _BinaryenModuleSetTypeName = Module["_BinaryenModuleSetTypeName"] = (a0, a1, a2) => (_BinaryenModuleSetTypeName = Module["_BinaryenModuleSetTypeName"] = wasmExports["tA"])(a0, a1, a2);

var _BinaryenModuleSetFieldName = Module["_BinaryenModuleSetFieldName"] = (a0, a1, a2, a3) => (_BinaryenModuleSetFieldName = Module["_BinaryenModuleSetFieldName"] = wasmExports["uA"])(a0, a1, a2, a3);

var _BinaryenSetColorsEnabled = Module["_BinaryenSetColorsEnabled"] = a0 => (_BinaryenSetColorsEnabled = Module["_BinaryenSetColorsEnabled"] = wasmExports["vA"])(a0);

var _BinaryenAreColorsEnabled = Module["_BinaryenAreColorsEnabled"] = () => (_BinaryenAreColorsEnabled = Module["_BinaryenAreColorsEnabled"] = wasmExports["wA"])();

var _BinaryenSizeofLiteral = Module["_BinaryenSizeofLiteral"] = () => (_BinaryenSizeofLiteral = Module["_BinaryenSizeofLiteral"] = wasmExports["xA"])();

var _BinaryenSizeofAllocateAndWriteResult = Module["_BinaryenSizeofAllocateAndWriteResult"] = () => (_BinaryenSizeofAllocateAndWriteResult = Module["_BinaryenSizeofAllocateAndWriteResult"] = wasmExports["yA"])();

var __i32_store8 = Module["__i32_store8"] = (a0, a1) => (__i32_store8 = Module["__i32_store8"] = wasmExports["zA"])(a0, a1);

var __i32_store16 = Module["__i32_store16"] = (a0, a1) => (__i32_store16 = Module["__i32_store16"] = wasmExports["AA"])(a0, a1);

var __i32_store = Module["__i32_store"] = (a0, a1) => (__i32_store = Module["__i32_store"] = wasmExports["BA"])(a0, a1);

var __f32_store = Module["__f32_store"] = (a0, a1) => (__f32_store = Module["__f32_store"] = wasmExports["CA"])(a0, a1);

var __f64_store = Module["__f64_store"] = (a0, a1) => (__f64_store = Module["__f64_store"] = wasmExports["DA"])(a0, a1);

var __i32_load8_s = Module["__i32_load8_s"] = a0 => (__i32_load8_s = Module["__i32_load8_s"] = wasmExports["EA"])(a0);

var __i32_load8_u = Module["__i32_load8_u"] = a0 => (__i32_load8_u = Module["__i32_load8_u"] = wasmExports["FA"])(a0);

var __i32_load16_s = Module["__i32_load16_s"] = a0 => (__i32_load16_s = Module["__i32_load16_s"] = wasmExports["GA"])(a0);

var __i32_load16_u = Module["__i32_load16_u"] = a0 => (__i32_load16_u = Module["__i32_load16_u"] = wasmExports["HA"])(a0);

var __i32_load = Module["__i32_load"] = a0 => (__i32_load = Module["__i32_load"] = wasmExports["IA"])(a0);

var __f32_load = Module["__f32_load"] = a0 => (__f32_load = Module["__f32_load"] = wasmExports["JA"])(a0);

var __f64_load = Module["__f64_load"] = a0 => (__f64_load = Module["__f64_load"] = wasmExports["KA"])(a0);

var _free = Module["_free"] = a0 => (_free = Module["_free"] = wasmExports["LA"])(a0);

var ___cxa_free_exception = a0 => (___cxa_free_exception = wasmExports["__cxa_free_exception"])(a0);

var ___errno_location = () => (___errno_location = wasmExports["MA"])();

var _setThrew = (a0, a1) => (_setThrew = wasmExports["OA"])(a0, a1);

var setTempRet0 = a0 => (setTempRet0 = wasmExports["PA"])(a0);

var stackSave = () => (stackSave = wasmExports["QA"])();

var stackRestore = a0 => (stackRestore = wasmExports["RA"])(a0);

var stackAlloc = a0 => (stackAlloc = wasmExports["SA"])(a0);

var ___cxa_decrement_exception_refcount = a0 => (___cxa_decrement_exception_refcount = wasmExports["TA"])(a0);

var ___cxa_increment_exception_refcount = a0 => (___cxa_increment_exception_refcount = wasmExports["UA"])(a0);

var ___cxa_can_catch = (a0, a1, a2) => (___cxa_can_catch = wasmExports["VA"])(a0, a1, a2);

var ___cxa_is_pointer_type = a0 => (___cxa_is_pointer_type = wasmExports["WA"])(a0);

var dynCall_viij = Module["dynCall_viij"] = (a0, a1, a2, a3, a4) => (dynCall_viij = Module["dynCall_viij"] = wasmExports["XA"])(a0, a1, a2, a3, a4);

var dynCall_iij = Module["dynCall_iij"] = (a0, a1, a2, a3) => (dynCall_iij = Module["dynCall_iij"] = wasmExports["YA"])(a0, a1, a2, a3);

var dynCall_viiij = Module["dynCall_viiij"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiij = Module["dynCall_viiij"] = wasmExports["ZA"])(a0, a1, a2, a3, a4, a5);

var dynCall_iiij = Module["dynCall_iiij"] = (a0, a1, a2, a3, a4) => (dynCall_iiij = Module["dynCall_iiij"] = wasmExports["_A"])(a0, a1, a2, a3, a4);

var dynCall_viiji = Module["dynCall_viiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiji = Module["dynCall_viiji"] = wasmExports["$A"])(a0, a1, a2, a3, a4, a5);

var dynCall_jii = Module["dynCall_jii"] = (a0, a1, a2) => (dynCall_jii = Module["dynCall_jii"] = wasmExports["aB"])(a0, a1, a2);

var dynCall_vjii = Module["dynCall_vjii"] = (a0, a1, a2, a3, a4) => (dynCall_vjii = Module["dynCall_vjii"] = wasmExports["bB"])(a0, a1, a2, a3, a4);

var dynCall_vij = Module["dynCall_vij"] = (a0, a1, a2, a3) => (dynCall_vij = Module["dynCall_vij"] = wasmExports["cB"])(a0, a1, a2, a3);

var dynCall_ijiii = Module["dynCall_ijiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_ijiii = Module["dynCall_ijiii"] = wasmExports["dB"])(a0, a1, a2, a3, a4, a5);

var dynCall_iji = Module["dynCall_iji"] = (a0, a1, a2, a3) => (dynCall_iji = Module["dynCall_iji"] = wasmExports["eB"])(a0, a1, a2, a3);

var dynCall_iiiiij = Module["dynCall_iiiiij"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiij = Module["dynCall_iiiiij"] = wasmExports["fB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viiiiij = Module["dynCall_viiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiij = Module["dynCall_viiiiij"] = wasmExports["gB"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiijii = Module["dynCall_iiijii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiijii = Module["dynCall_iiijii"] = wasmExports["hB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_iiiij = Module["dynCall_iiiij"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiij = Module["dynCall_iiiij"] = wasmExports["iB"])(a0, a1, a2, a3, a4, a5);

var dynCall_vijji = Module["dynCall_vijji"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_vijji = Module["dynCall_vijji"] = wasmExports["jB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_ji = Module["dynCall_ji"] = (a0, a1) => (dynCall_ji = Module["dynCall_ji"] = wasmExports["kB"])(a0, a1);

var dynCall_viijj = Module["dynCall_viijj"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viijj = Module["dynCall_viijj"] = wasmExports["lB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viijji = Module["dynCall_viijji"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viijji = Module["dynCall_viijji"] = wasmExports["mB"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_viijiijj = Module["dynCall_viijiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (dynCall_viijiijj = Module["dynCall_viijiijj"] = wasmExports["nB"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);

var dynCall_vijiijj = Module["dynCall_vijiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_vijiijj = Module["dynCall_vijiijj"] = wasmExports["oB"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_jiiiij = Module["dynCall_jiiiij"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_jiiiij = Module["dynCall_jiiiij"] = wasmExports["pB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viji = Module["dynCall_viji"] = (a0, a1, a2, a3, a4) => (dynCall_viji = Module["dynCall_viji"] = wasmExports["qB"])(a0, a1, a2, a3, a4);

var dynCall_ijiiii = Module["dynCall_ijiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_ijiiii = Module["dynCall_ijiiii"] = wasmExports["rB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_jiii = Module["dynCall_jiii"] = (a0, a1, a2, a3) => (dynCall_jiii = Module["dynCall_jiii"] = wasmExports["sB"])(a0, a1, a2, a3);

var dynCall_j = Module["dynCall_j"] = a0 => (dynCall_j = Module["dynCall_j"] = wasmExports["tB"])(a0);

var dynCall_vijii = Module["dynCall_vijii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_vijii = Module["dynCall_vijii"] = wasmExports["uB"])(a0, a1, a2, a3, a4, a5);

var dynCall_vijiii = Module["dynCall_vijiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_vijiii = Module["dynCall_vijiii"] = wasmExports["vB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_iiji = Module["dynCall_iiji"] = (a0, a1, a2, a3, a4) => (dynCall_iiji = Module["dynCall_iiji"] = wasmExports["wB"])(a0, a1, a2, a3, a4);

var dynCall_iijiiii = Module["dynCall_iijiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iijiiii = Module["dynCall_iijiiii"] = wasmExports["xB"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iijii = Module["dynCall_iijii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iijii = Module["dynCall_iijii"] = wasmExports["yB"])(a0, a1, a2, a3, a4, a5);

var dynCall_viiijiiii = Module["dynCall_viiijiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_viiijiiii = Module["dynCall_viiijiiii"] = wasmExports["zB"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_viiiij = Module["dynCall_viiiij"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiij = Module["dynCall_viiiij"] = wasmExports["AB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_iiiiiiij = Module["dynCall_iiiiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_iiiiiiij = Module["dynCall_iiiiiiij"] = wasmExports["BB"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_iijiiiij = Module["dynCall_iijiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_iijiiiij = Module["dynCall_iijiiiij"] = wasmExports["CB"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_iiiiiij = Module["dynCall_iiiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiiiij = Module["dynCall_iiiiiij"] = wasmExports["DB"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiiji = Module["dynCall_iiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiji = Module["dynCall_iiiji"] = wasmExports["EB"])(a0, a1, a2, a3, a4, a5);

var dynCall_jiji = Module["dynCall_jiji"] = (a0, a1, a2, a3, a4) => (dynCall_jiji = Module["dynCall_jiji"] = wasmExports["FB"])(a0, a1, a2, a3, a4);

var dynCall_iiijj = Module["dynCall_iiijj"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiijj = Module["dynCall_iiijj"] = wasmExports["GB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viiiji = Module["dynCall_viiiji"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiji = Module["dynCall_viiiji"] = wasmExports["HB"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viijii = Module["dynCall_viijii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viijii = Module["dynCall_viijii"] = wasmExports["IB"])(a0, a1, a2, a3, a4, a5, a6);

function invoke_vii(index, a1, a2) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iii(index, a1, a2) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ii(index, a1) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_v(index) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)();
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vi(index, a1) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vidi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_i(index) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)();
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vid(index, a1, a2) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iid(index, a1, a2) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viij(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viij(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiij(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiij(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vij(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_vij(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iij(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iij(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiij(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiij(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ji(index, a1) {
 var sp = stackSave();
 try {
  return dynCall_ji(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ijiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_ijiii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iji(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iji(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijj(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viijj(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijji(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_vijji(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiji(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiji(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viijii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  dynCall_viijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  dynCall_vijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiiiij(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_jiiiij(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiji(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiji(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiji(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_jiji(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_vijii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viji(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viji(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiijj(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iiijj(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijji(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_viijji(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_viiiiij(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_jii(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_jii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vjii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_vjii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ijiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_ijiiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiijii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iiijii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiij(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iiiij(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_vijiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return dynCall_iijiiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iijii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  dynCall_viiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiij(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiij(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return dynCall_iijiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiij(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iiiji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_j(index) {
 var sp = stackSave();
 try {
  return dynCall_j(index);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_jiii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

Module["addRunDependency"] = addRunDependency;

Module["removeRunDependency"] = removeRunDependency;

Module["FS_createPath"] = FS.createPath;

Module["FS_createLazyFile"] = FS.createLazyFile;

Module["FS_createDevice"] = FS.createDevice;

Module["stackAlloc"] = stackAlloc;

Module["stackSave"] = stackSave;

Module["stackRestore"] = stackRestore;

Module["UTF8ToString"] = UTF8ToString;

Module["stringToAscii"] = stringToAscii;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_unlink"] = FS.unlink;

Module["allocateUTF8OnStack"] = allocateUTF8OnStack;

var calledRun;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function run() {
 if (runDependencies > 0) {
  return;
 }
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

run();

function swapOut(writer) {
 const saved = out;
 out = writer;
 return saved;
}

function swapErr(writer) {
 const saved = err;
 err = writer;
 return saved;
}

Module["utils"] = {
 "out": out,
 "err": err,
 "swapOut": swapOut,
 "swapErr": swapErr,
 "_BinaryenSizeofLiteral": _BinaryenSizeofLiteral,
 "_BinaryenSizeofAllocateAndWriteResult": _BinaryenSizeofAllocateAndWriteResult
};


  return moduleArg.ready
}
);
})();
;
export default Binaryen;