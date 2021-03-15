// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.language = exports.conf = void 0;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }]
};
exports.conf = conf;
var language = {
  tokenPostfix: '.julia',
  keywords: ['begin', 'while', 'if', 'for', 'try', 'return', 'break', 'continue', 'function', 'macro', 'quote', 'let', 'local', 'global', 'const', 'do', 'struct', 'module', 'baremodule', 'using', 'import', 'export', 'end', 'else', 'elseif', 'catch', 'finally', 'mutable', 'primitive', 'abstract', 'type', 'in', 'isa', 'where', 'new'],
  types: ['LinRange', 'LineNumberNode', 'LinearIndices', 'LoadError', 'MIME', 'Matrix', 'Method', 'MethodError', 'Missing', 'MissingException', 'Module', 'NTuple', 'NamedTuple', 'Nothing', 'Number', 'OrdinalRange', 'OutOfMemoryError', 'OverflowError', 'Pair', 'PartialQuickSort', 'PermutedDimsArray', 'Pipe', 'Ptr', 'QuoteNode', 'Rational', 'RawFD', 'ReadOnlyMemoryError', 'Real', 'ReentrantLock', 'Ref', 'Regex', 'RegexMatch', 'RoundingMode', 'SegmentationFault', 'Set', 'Signed', 'Some', 'StackOverflowError', 'StepRange', 'StepRangeLen', 'StridedArray', 'StridedMatrix', 'StridedVecOrMat', 'StridedVector', 'String', 'StringIndexError', 'SubArray', 'SubString', 'SubstitutionString', 'Symbol', 'SystemError', 'Task', 'Text', 'TextDisplay', 'Timer', 'Tuple', 'Type', 'TypeError', 'TypeVar', 'UInt', 'UInt128', 'UInt16', 'UInt32', 'UInt64', 'UInt8', 'UndefInitializer', 'AbstractArray', 'UndefKeywordError', 'AbstractChannel', 'UndefRefError', 'AbstractChar', 'UndefVarError', 'AbstractDict', 'Union', 'AbstractDisplay', 'UnionAll', 'AbstractFloat', 'UnitRange', 'AbstractIrrational', 'Unsigned', 'AbstractMatrix', 'AbstractRange', 'Val', 'AbstractSet', 'Vararg', 'AbstractString', 'VecElement', 'AbstractUnitRange', 'VecOrMat', 'AbstractVecOrMat', 'Vector', 'AbstractVector', 'VersionNumber', 'Any', 'WeakKeyDict', 'ArgumentError', 'WeakRef', 'Array', 'AssertionError', 'BigFloat', 'BigInt', 'BitArray', 'BitMatrix', 'BitSet', 'BitVector', 'Bool', 'BoundsError', 'CapturedException', 'CartesianIndex', 'CartesianIndices', 'Cchar', 'Cdouble', 'Cfloat', 'Channel', 'Char', 'Cint', 'Cintmax_t', 'Clong', 'Clonglong', 'Cmd', 'Colon', 'Complex', 'ComplexF16', 'ComplexF32', 'ComplexF64', 'CompositeException', 'Condition', 'Cptrdiff_t', 'Cshort', 'Csize_t', 'Cssize_t', 'Cstring', 'Cuchar', 'Cuint', 'Cuintmax_t', 'Culong', 'Culonglong', 'Cushort', 'Cvoid', 'Cwchar_t', 'Cwstring', 'DataType', 'DenseArray', 'DenseMatrix', 'DenseVecOrMat', 'DenseVector', 'Dict', 'DimensionMismatch', 'Dims', 'DivideError', 'DomainError', 'EOFError', 'Enum', 'ErrorException', 'Exception', 'ExponentialBackOff', 'Expr', 'Float16', 'Float32', 'Float64', 'Function', 'GlobalRef', 'HTML', 'IO', 'IOBuffer', 'IOContext', 'IOStream', 'IdDict', 'IndexCartesian', 'IndexLinear', 'IndexStyle', 'InexactError', 'InitError', 'Int', 'Int128', 'Int16', 'Int32', 'Int64', 'Int8', 'Integer', 'InterruptException', 'InvalidStateException', 'Irrational', 'KeyError'],
  keywordops: ['<:', '>:', ':', '=>', '...', '.', '->', '?'],
  allops: /[^\w\d\s()\[\]{}"'#]+/,
  constants: ['true', 'false', 'nothing', 'missing', 'undef', 'Inf', 'pi', 'NaN', 'π', 'ℯ', 'ans', 'PROGRAM_FILE', 'ARGS', 'C_NULL', 'VERSION', 'DEPOT_PATH', 'LOAD_PATH'],
  operators: ['!', '!=', '!==', '%', '&', '*', '+', '-', '/', '//', '<', '<<', '<=', '==', '===', '=>', '>', '>=', '>>', '>>>', '\\', '^', '|', '|>', '~', '÷', '∈', '∉', '∋', '∌', '∘', '√', '∛', '∩', '∪', '≈', '≉', '≠', '≡', '≢', '≤', '≥', '⊆', '⊇', '⊈', '⊉', '⊊', '⊋', '⊻'],
  brackets: [{
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }, {
    open: '{',
    close: '}',
    token: 'delimiter.curly'
  }, {
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }],
  ident: /π|ℯ|\b(?!\d)\w+\b/,
  // escape sequences
  escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
  escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
  // The main tokenizer for our languages
  tokenizer: {
    root: [[/(::)\s*|\b(isa)\s+/, 'keyword', '@typeanno'], [/\b(isa)(\s*\(@ident\s*,\s*)/, ['keyword', {
      token: '',
      next: '@typeanno'
    }]], [/\b(type|struct)[ \t]+/, 'keyword', '@typeanno'], // symbols
    [/^\s*:@ident[!?]?/, 'metatag'], [/(return)(\s*:@ident[!?]?)/, ['keyword', 'metatag']], [/(\(|\[|\{|@allops)(\s*:@ident[!?]?)/, ['', 'metatag']], [/:\(/, 'metatag', '@quote'], // regular expressions
    [/r"""/, 'regexp.delim', '@tregexp'], [/r"/, 'regexp.delim', '@sregexp'], // strings
    [/raw"""/, 'string.delim', '@rtstring'], [/[bv]?"""/, 'string.delim', '@dtstring'], [/raw"/, 'string.delim', '@rsstring'], [/[bv]?"/, 'string.delim', '@dsstring'], [/(@ident)\{/, {
      cases: {
        '$1@types': {
          token: 'type',
          next: '@gen'
        },
        '@default': {
          token: 'type',
          next: '@gen'
        }
      }
    }], [/@ident[!?'']?(?=\.?\()/, {
      cases: {
        '@types': 'type',
        '@keywords': 'keyword',
        '@constants': 'variable',
        '@default': 'keyword.flow'
      }
    }], [/@ident[!?']?/, {
      cases: {
        '@types': 'type',
        '@keywords': 'keyword',
        '@constants': 'variable',
        '@default': 'identifier'
      }
    }], [/\$\w+/, 'key'], [/\$\(/, 'key', '@paste'], [/@@ident/, 'annotation'], // whitespace
    {
      include: '@whitespace'
    }, // characters
    [/'(?:@escapes|.)'/, 'string.character'], // delimiters and operators
    [/[()\[\]{}]/, '@brackets'], [/@allops/, {
      cases: {
        '@keywordops': 'keyword',
        '@operators': 'operator'
      }
    }], [/[;,]/, 'delimiter'], // numbers
    [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'], [/0[_oO][0-7](_?[0-7])*/, 'number.octal'], [/0[bB][01](_?[01])*/, 'number.binary'], [/[+\-]?\d+(\.\d+)?(im?|[eE][+\-]?\d+(\.\d+)?)?/, 'number']],
    // type
    typeanno: [[/[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*\{/, 'type', '@gen'], [/([a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*)(\s*<:\s*)/, ['type', 'keyword']], [/[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*/, 'type', '@pop'], ['', '', '@pop']],
    // generic type
    gen: [[/[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*\{/, 'type', '@push'], [/[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*/, 'type'], [/<:/, 'keyword'], [/(\})(\s*<:\s*)/, ['type', {
      token: 'keyword',
      next: '@pop'
    }]], [/\}/, 'type', '@pop'], {
      include: '@root'
    }],
    // $(...)
    quote: [[/\$\(/, 'key', '@paste'], [/\(/, '@brackets', '@paren'], [/\)/, 'metatag', '@pop'], {
      include: '@root'
    }],
    // :(...)
    paste: [[/:\(/, 'metatag', '@quote'], [/\(/, '@brackets', '@paren'], [/\)/, 'key', '@pop'], {
      include: '@root'
    }],
    // (...)
    paren: [[/\$\(/, 'key', '@paste'], [/:\(/, 'metatag', '@quote'], [/\(/, '@brackets', '@push'], [/\)/, '@brackets', '@pop'], {
      include: '@root'
    }],
    // r"egex string"
    sregexp: [[/^.*/, 'invalid'], [/[^\\"()\[\]{}]/, 'regexp'], [/[()\[\]{}]/, '@brackets'], [/\\./, 'operator.scss'], [/"[imsx]*/, 'regexp.delim', '@pop']],
    tregexp: [[/[^\\"()\[\]{}]/, 'regexp'], [/[()\[\]{}]/, '@brackets'], [/\\./, 'operator.scss'], [/"(?!"")/, 'string'], [/"""[imsx]*/, 'regexp.delim', '@pop']],
    // raw"string"
    rsstring: [[/^.*/, 'invalid'], [/[^\\"]/, 'string'], [/\\./, 'string.escape'], [/"/, 'string.delim', '@pop']],
    rtstring: [[/[^\\"]/, 'string'], [/\\./, 'string.escape'], [/"(?!"")/, 'string'], [/"""/, 'string.delim', '@pop']],
    // "string".
    dsstring: [[/^.*/, 'invalid'], [/[^\\"\$]/, 'string'], [/\$/, '', '@interpolated'], [/@escapes/, 'string.escape'], [/\\./, 'string.escape.invalid'], [/"/, 'string.delim', '@pop']],
    dtstring: [[/[^\\"\$]/, 'string'], [/\$/, '', '@interpolated'], [/@escapes/, 'string.escape'], [/\\./, 'string.escape.invalid'], [/"(?!"")/, 'string'], [/"""/, 'string.delim', '@pop']],
    // interpolated sequence
    interpolated: [[/\(/, {
      token: '',
      switchTo: '@interpolated_compound'
    }], [/[a-zA-Z_]\w*/, 'identifier'], ['', '', '@pop'] // just a $ is interpreted as a $
    ],
    // any code
    interpolated_compound: [[/\)/, '', '@pop'], {
      include: '@root'
    }],
    // whitespace & comments
    whitespace: [[/[ \t\r\n]+/, ''], [/#=/, 'comment', '@multi_comment'], [/#.*$/, 'comment']],
    multi_comment: [[/#=/, 'comment', '@push'], [/=#/, 'comment', '@pop'], [/=(?!#)|#(?!=)/, 'comment'], [/[^#=]+/, 'comment']]
  }
};
exports.language = language;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1235" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js"], null)
//# sourceMappingURL=/julia.f36ced86.js.map