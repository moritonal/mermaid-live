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
})({"node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js":[function(require,module,exports) {
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
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/']
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['begin', 'end'], ['case', 'endcase'], ['casex', 'endcase'], ['casez', 'endcase'], ['checker', 'endchecker'], ['class', 'endclass'], ['clocking', 'endclocking'], ['config', 'endconfig'], ['function', 'endfunction'], ['generate', 'endgenerate'], ['group', 'endgroup'], ['interface', 'endinterface'], ['module', 'endmodule'], ['package', 'endpackage'], ['primitive', 'endprimitive'], ['program', 'endprogram'], ['property', 'endproperty'], ['specify', 'endspecify'], ['sequence', 'endsequence'], ['table', 'endtable'], ['task', 'endtask']],
  autoClosingPairs: [{
    open: '[',
    close: ']'
  }, {
    open: '{',
    close: '}'
  }, {
    open: '(',
    close: ')'
  }, {
    open: "'",
    close: "'",
    notIn: ['string', 'comment']
  }, {
    open: '"',
    close: '"',
    notIn: ['string']
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
  }],
  folding: {
    offSide: false,
    markers: {
      start: new RegExp('^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b'),
      end: new RegExp('^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b')
    }
  }
};
exports.conf = conf;
var language = {
  defaultToken: '',
  tokenPostfix: '.sv',
  brackets: [{
    token: 'delimiter.curly',
    open: '{',
    close: '}'
  }, {
    token: 'delimiter.parenthesis',
    open: '(',
    close: ')'
  }, {
    token: 'delimiter.square',
    open: '[',
    close: ']'
  }, {
    token: 'delimiter.angle',
    open: '<',
    close: '>'
  }],
  keywords: ['accept_on', 'alias', 'always', 'always_comb', 'always_ff', 'always_latch', 'and', 'assert', 'assign', 'assume', 'automatic', 'before', 'begin', 'bind', 'bins', 'binsof', 'bit', 'break', 'buf', 'bufif0', 'bufif1', 'byte', 'case', 'casex', 'casez', 'cell', 'chandle', 'checker', 'class', 'clocking', 'cmos', 'config', 'const', 'constraint', 'context', 'continue', 'cover', 'covergroup', 'coverpoint', 'cross', 'deassign', 'default', 'defparam', 'design', 'disable', 'dist', 'do', 'edge', 'else', 'end', 'endcase', 'endchecker', 'endclass', 'endclocking', 'endconfig', 'endfunction', 'endgenerate', 'endgroup', 'endinterface', 'endmodule', 'endpackage', 'endprimitive', 'endprogram', 'endproperty', 'endspecify', 'endsequence', 'endtable', 'endtask', 'enum', 'event', 'eventually', 'expect', 'export', 'extends', 'extern', 'final', 'first_match', 'for', 'force', 'foreach', 'forever', 'fork', 'forkjoin', 'function', 'generate', 'genvar', 'global', 'highz0', 'highz1', 'if', 'iff', 'ifnone', 'ignore_bins', 'illegal_bins', 'implements', 'implies', 'import', 'incdir', 'include', 'initial', 'inout', 'input', 'inside', 'instance', 'int', 'integer', 'interconnect', 'interface', 'intersect', 'join', 'join_any', 'join_none', 'large', 'let', 'liblist', 'library', 'local', 'localparam', 'logic', 'longint', 'macromodule', 'matches', 'medium', 'modport', 'module', 'nand', 'negedge', 'nettype', 'new', 'nexttime', 'nmos', 'nor', 'noshowcancelled', 'not', 'notif0', 'notif1', 'null', 'or', 'output', 'package', 'packed', 'parameter', 'pmos', 'posedge', 'primitive', 'priority', 'program', 'property', 'protected', 'pull0', 'pull1', 'pulldown', 'pullup', 'pulsestyle_ondetect', 'pulsestyle_onevent', 'pure', 'rand', 'randc', 'randcase', 'randsequence', 'rcmos', 'real', 'realtime', 'ref', 'reg', 'reject_on', 'release', 'repeat', 'restrict', 'return', 'rnmos', 'rpmos', 'rtran', 'rtranif0', 'rtranif1', 's_always', 's_eventually', 's_nexttime', 's_until', 's_until_with', 'scalared', 'sequence', 'shortint', 'shortreal', 'showcancelled', 'signed', 'small', 'soft', 'solve', 'specify', 'specparam', 'static', 'string', 'strong', 'strong0', 'strong1', 'struct', 'super', 'supply0', 'supply1', 'sync_accept_on', 'sync_reject_on', 'table', 'tagged', 'task', 'this', 'throughout', 'time', 'timeprecision', 'timeunit', 'tran', 'tranif0', 'tranif1', 'tri', 'tri0', 'tri1', 'triand', 'trior', 'trireg', 'type', 'typedef', 'union', 'unique', 'unique0', 'unsigned', 'until', 'until_with', 'untyped', 'use', 'uwire', 'var', 'vectored', 'virtual', 'void', 'wait', 'wait_order', 'wand', 'weak', 'weak0', 'weak1', 'while', 'wildcard', 'wire', 'with', 'within', 'wor', 'xnor', 'xor'],
  builtin_gates: ['and', 'nand', 'nor', 'or', 'xor', 'xnor', 'buf', 'not', 'bufif0', 'bufif1', 'notif1', 'notif0', 'cmos', 'nmos', 'pmos', 'rcmos', 'rnmos', 'rpmos', 'tran', 'tranif1', 'tranif0', 'rtran', 'rtranif1', 'rtranif0'],
  operators: [// assignment operators
  '=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>+', '<<<=', '>>>=', // conditional expression
  '?', ':', // Unary operators
  '+', '-', '!', '~', '&', '~&', '|', '~|', '^', '~^', '^~', //binary operators
  '+', '-', '*', '/', '%', '==', '!=', '===', '!==', '==?', '!=?', '&&', '||', '**', '<', '<=', '>', '>=', '&', '|', '^', '>>', '<<', '>>>', '<<<', // increment or decrement operator
  '++', '--', //binary logical operator
  '->', '<->', // binary set membership operator
  'inside', // binary distrubution operator
  'dist', '::', '+:', '-:', '*>', '&&&', '|->', '|=>', '#=#'],
  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%#]+/,
  escapes: /%%|\\(?:[antvf\\"']|x[0-9A-Fa-f]{1,2}|[0-7]{1,3})/,
  identifier: /(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,
  systemcall: /[$][a-zA-Z0-9_]+/,
  timeunits: /s|ms|us|ns|ps|fs/,
  // The main tokenizer for our languages
  tokenizer: {
    root: [// module instances
    [/^(\s*)(@identifier)/, ['', {
      cases: {
        '@builtin_gates': {
          token: 'keyword.$2',
          next: '@module_instance'
        },
        '@keywords': {
          token: 'keyword.$2'
        },
        '@default': {
          token: 'identifier',
          next: '@module_instance'
        }
      }
    }]], // include statements
    [/^\s*`include/, {
      token: 'keyword.directive.include',
      next: '@include'
    }], // Preprocessor directives
    [/^\s*`\s*\w+/, 'keyword'], // identifiers and keywords
    {
      include: '@identifier_or_keyword'
    }, // whitespace
    {
      include: '@whitespace'
    }, // (* attributes *).
    [/\(\*.*\*\)/, 'annotation'], // Systemcall
    [/@systemcall/, 'variable.predefined'], // delimiters and operators
    [/[{}()\[\]]/, '@brackets'], [/[<>](?!@symbols)/, '@brackets'], [/@symbols/, {
      cases: {
        '@operators': 'delimiter',
        '@default': ''
      }
    }], // numbers
    {
      include: '@numbers'
    }, // delimiter: after number because of .\d floats
    [/[;,.]/, 'delimiter'], // strings
    {
      include: '@strings'
    }],
    identifier_or_keyword: [[/@identifier/, {
      cases: {
        '@keywords': {
          token: 'keyword.$0'
        },
        '@default': 'identifier'
      }
    }]],
    numbers: [[/\d+?[\d_]*(?:\.[\d_]+)?[eE][\-+]?\d+/, 'number.float'], [/\d+?[\d_]*\.[\d_]+(?:\s*@timeunits)?/, 'number.float'], [/(?:\d+?[\d_]*\s*)?'[sS]?[dD]\s*[0-9xXzZ?]+?[0-9xXzZ?_]*/, 'number'], [/(?:\d+?[\d_]*\s*)?'[sS]?[bB]\s*[0-1xXzZ?]+?[0-1xXzZ?_]*/, 'number.binary'], [/(?:\d+?[\d_]*\s*)?'[sS]?[oO]\s*[0-7xXzZ?]+?[0-7xXzZ?_]*/, 'number.octal'], [/(?:\d+?[\d_]*\s*)?'[sS]?[hH]\s*[0-9a-fA-FxXzZ?]+?[0-9a-fA-FxXzZ?_]*/, 'number.hex'], [/1step/, 'number'], [/[\dxXzZ]+?[\dxXzZ_]*(?:\s*@timeunits)?/, 'number'], [/'[01xXzZ]+/, 'number']],
    module_instance: [{
      include: '@whitespace'
    }, [/(#?)(\()/, ['', {
      token: '@brackets',
      next: '@port_connection'
    }]], [/@identifier\s*[;={}\[\],]/, {
      token: '@rematch',
      next: '@pop'
    }], [/@symbols|[;={}\[\],]/, {
      token: '@rematch',
      next: '@pop'
    }], [/@identifier/, 'type'], [/;/, 'delimiter', '@pop']],
    port_connection: [{
      include: '@identifier_or_keyword'
    }, {
      include: '@whitespace'
    }, [/@systemcall/, 'variable.predefined'], {
      include: '@numbers'
    }, {
      include: '@strings'
    }, [/[,]/, 'delimiter'], [/\(/, '@brackets', '@port_connection'], [/\)/, '@brackets', '@pop']],
    whitespace: [[/[ \t\r\n]+/, ''], [/\/\*/, 'comment', '@comment'], [/\/\/.*$/, 'comment']],
    comment: [[/[^\/*]+/, 'comment'], [/\*\//, 'comment', '@pop'], [/[\/*]/, 'comment']],
    strings: [[/"([^"\\]|\\.)*$/, 'string.invalid'], [/"/, 'string', '@string']],
    string: [[/[^\\"]+/, 'string'], [/@escapes/, 'string.escape'], [/\\./, 'string.escape.invalid'], [/"/, 'string', '@pop']],
    include: [[/(\s*)(")([\w*\/*]*)(.\w*)(")/, ['', 'string.include.identifier', 'string.include.identifier', 'string.include.identifier', {
      token: 'string.include.identifier',
      next: '@pop'
    }]], [/(\s*)(<)([\w*\/*]*)(.\w*)(>)/, ['', 'string.include.identifier', 'string.include.identifier', 'string.include.identifier', {
      token: 'string.include.identifier',
      next: '@pop'
    }]]]
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js"], null)
//# sourceMappingURL=/systemverilog.53424070.js.map