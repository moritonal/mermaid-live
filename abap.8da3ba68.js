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
})({"node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js":[function(require,module,exports) {
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
    lineComment: '*'
  },
  brackets: [['[', ']'], ['(', ')']]
};
exports.conf = conf;
var abapKeywords = [// words
'abap-source', 'abbreviated', 'abstract', 'accept', 'accepting', 'according', 'activation', 'actual', 'add', 'add-corresponding', 'adjacent', 'after', 'alias', 'aliases', 'align', 'all', 'allocate', 'alpha', 'analysis', 'analyzer', 'append', 'appendage', 'appending', 'application', 'archive', 'area', 'arithmetic', 'as', 'ascending', 'aspect', 'assert', 'assign', 'assigned', 'assigning', 'association', 'asynchronous', 'at', 'attributes', 'authority', 'authority-check', 'avg', 'back', 'background', 'backup', 'backward', 'badi', 'base', 'before', 'begin', 'big', 'binary', 'bintohex', 'bit', 'black', 'blank', 'blanks', 'blob', 'block', 'blocks', 'blue', 'bound', 'boundaries', 'bounds', 'boxed', 'break-point', 'buffer', 'by', 'bypassing', 'byte', 'byte-order', 'call', 'calling', 'case', 'cast', 'casting', 'catch', 'center', 'centered', 'chain', 'chain-input', 'chain-request', 'change', 'changing', 'channels', 'character', 'char-to-hex', 'check', 'checkbox', 'ci_', 'circular', 'class', 'class-coding', 'class-data', 'class-events', 'class-methods', 'class-pool', 'cleanup', 'clear', 'client', 'clob', 'clock', 'close', 'coalesce', 'code', 'coding', 'col_background', 'col_group', 'col_heading', 'col_key', 'col_negative', 'col_normal', 'col_positive', 'col_total', 'collect', 'color', 'column', 'columns', 'comment', 'comments', 'commit', 'common', 'communication', 'comparing', 'component', 'components', 'compression', 'compute', 'concat', 'concat_with_space', 'concatenate', 'cond', 'condition', 'connect', 'connection', 'constants', 'context', 'contexts', 'continue', 'control', 'controls', 'conv', 'conversion', 'convert', 'copies', 'copy', 'corresponding', 'country', 'cover', 'cpi', 'create', 'creating', 'critical', 'currency', 'currency_conversion', 'current', 'cursor', 'cursor-selection', 'customer', 'customer-function', 'dangerous', 'data', 'database', 'datainfo', 'dataset', 'date', 'dats_add_days', 'dats_add_months', 'dats_days_between', 'dats_is_valid', 'daylight', 'dd/mm/yy', 'dd/mm/yyyy', 'ddmmyy', 'deallocate', 'decimal_shift', 'decimals', 'declarations', 'deep', 'default', 'deferred', 'define', 'defining', 'definition', 'delete', 'deleting', 'demand', 'department', 'descending', 'describe', 'destination', 'detail', 'dialog', 'directory', 'disconnect', 'display', 'display-mode', 'distinct', 'divide', 'divide-corresponding', 'division', 'do', 'dummy', 'duplicate', 'duplicates', 'duration', 'during', 'dynamic', 'dynpro', 'edit', 'editor-call', 'else', 'elseif', 'empty', 'enabled', 'enabling', 'encoding', 'end', 'endat', 'endcase', 'endcatch', 'endchain', 'endclass', 'enddo', 'endenhancement', 'end-enhancement-section', 'endexec', 'endform', 'endfunction', 'endian', 'endif', 'ending', 'endinterface', 'end-lines', 'endloop', 'endmethod', 'endmodule', 'end-of-definition', 'end-of-editing', 'end-of-file', 'end-of-page', 'end-of-selection', 'endon', 'endprovide', 'endselect', 'end-test-injection', 'end-test-seam', 'endtry', 'endwhile', 'endwith', 'engineering', 'enhancement', 'enhancement-point', 'enhancements', 'enhancement-section', 'entries', 'entry', 'enum', 'environment', 'errormessage', 'errors', 'escaping', 'event', 'events', 'exact', 'except', 'exception', 'exceptions', 'exception-table', 'exclude', 'excluding', 'exec', 'execute', 'exists', 'exit', 'exit-command', 'expand', 'expanding', 'expiration', 'explicit', 'exponent', 'export', 'exporting', 'extend', 'extended', 'extension', 'extract', 'fail', 'fetch', 'field', 'field-groups', 'fields', 'field-symbol', 'field-symbols', 'file', 'filter', 'filters', 'filter-table', 'final', 'first', 'first-line', 'fixed-point', 'fkeq', 'fkge', 'flush', 'font', 'for', 'form', 'format', 'forward', 'found', 'frame', 'frames', 'free', 'friends', 'from', 'function', 'functionality', 'function-pool', 'further', 'gaps', 'generate', 'get', 'giving', 'gkeq', 'gkge', 'global', 'grant', 'green', 'group', 'groups', 'handle', 'handler', 'harmless', 'hashed', 'having', 'hdb', 'header', 'headers', 'heading', 'head-lines', 'help-id', 'help-request', 'hextobin', 'hide', 'high', 'hint', 'hold', 'hotspot', 'icon', 'id', 'identification', 'identifier', 'ids', 'if', 'ignore', 'ignoring', 'immediately', 'implementation', 'implementations', 'implemented', 'implicit', 'import', 'importing', 'inactive', 'incl', 'include', 'includes', 'including', 'increment', 'index', 'index-line', 'infotypes', 'inheriting', 'init', 'initial', 'initialization', 'inner', 'inout', 'input', 'instance', 'instances', 'instr', 'intensified', 'interface', 'interface-pool', 'interfaces', 'internal', 'intervals', 'into', 'inverse', 'inverted-date', 'is', 'iso', 'job', 'join', 'keep', 'keeping', 'kernel', 'key', 'keys', 'keywords', 'kind', 'language', 'last', 'late', 'layout', 'leading', 'leave', 'left', 'left-justified', 'leftplus', 'leftspace', 'legacy', 'length', 'let', 'level', 'levels', 'like', 'line', 'line-count', 'linefeed', 'line-selection', 'line-size', 'list', 'listbox', 'list-processing', 'little', 'llang', 'load', 'load-of-program', 'lob', 'local', 'locale', 'locator', 'logfile', 'logical', 'log-point', 'long', 'loop', 'low', 'lower', 'lpad', 'lpi', 'ltrim', 'mail', 'main', 'major-id', 'mapping', 'margin', 'mark', 'mask', 'matchcode', 'max', 'maximum', 'medium', 'members', 'memory', 'mesh', 'message', 'message-id', 'messages', 'messaging', 'method', 'methods', 'min', 'minimum', 'minor-id', 'mm/dd/yy', 'mm/dd/yyyy', 'mmddyy', 'mode', 'modif', 'modifier', 'modify', 'module', 'move', 'move-corresponding', 'multiply', 'multiply-corresponding', 'name', 'nametab', 'native', 'nested', 'nesting', 'new', 'new-line', 'new-page', 'new-section', 'next', 'no', 'node', 'nodes', 'no-display', 'no-extension', 'no-gap', 'no-gaps', 'no-grouping', 'no-heading', 'non-unicode', 'non-unique', 'no-scrolling', 'no-sign', 'no-title', 'no-topofpage', 'no-zero', 'null', 'number', 'object', 'objects', 'obligatory', 'occurrence', 'occurrences', 'occurs', 'of', 'off', 'offset', 'ole', 'on', 'only', 'open', 'option', 'optional', 'options', 'order', 'other', 'others', 'out', 'outer', 'output', 'output-length', 'overflow', 'overlay', 'pack', 'package', 'pad', 'padding', 'page', 'pages', 'parameter', 'parameters', 'parameter-table', 'part', 'partially', 'pattern', 'percentage', 'perform', 'performing', 'person', 'pf1', 'pf10', 'pf11', 'pf12', 'pf13', 'pf14', 'pf15', 'pf2', 'pf3', 'pf4', 'pf5', 'pf6', 'pf7', 'pf8', 'pf9', 'pf-status', 'pink', 'places', 'pool', 'pos_high', 'pos_low', 'position', 'pragmas', 'precompiled', 'preferred', 'preserving', 'primary', 'print', 'print-control', 'priority', 'private', 'procedure', 'process', 'program', 'property', 'protected', 'provide', 'public', 'push', 'pushbutton', 'put', 'queue-only', 'quickinfo', 'radiobutton', 'raise', 'raising', 'range', 'ranges', 'read', 'reader', 'read-only', 'receive', 'received', 'receiver', 'receiving', 'red', 'redefinition', 'reduce', 'reduced', 'ref', 'reference', 'refresh', 'regex', 'reject', 'remote', 'renaming', 'replacement', 'replacing', 'report', 'request', 'requested', 'reserve', 'reset', 'resolution', 'respecting', 'responsible', 'result', 'results', 'resumable', 'resume', 'retry', 'return', 'returncode', 'returning', 'returns', 'right', 'right-justified', 'rightplus', 'rightspace', 'risk', 'rmc_communication_failure', 'rmc_invalid_status', 'rmc_system_failure', 'role', 'rollback', 'rows', 'rpad', 'rtrim', 'run', 'sap', 'sap-spool', 'saving', 'scale_preserving', 'scale_preserving_scientific', 'scan', 'scientific', 'scientific_with_leading_zero', 'scroll', 'scroll-boundary', 'scrolling', 'search', 'secondary', 'seconds', 'section', 'select', 'selection', 'selections', 'selection-screen', 'selection-set', 'selection-sets', 'selection-table', 'select-options', 'send', 'separate', 'separated', 'set', 'shared', 'shift', 'short', 'shortdump-id', 'sign_as_postfix', 'single', 'size', 'skip', 'skipping', 'smart', 'some', 'sort', 'sortable', 'sorted', 'source', 'specified', 'split', 'spool', 'spots', 'sql', 'sqlscript', 'stable', 'stamp', 'standard', 'starting', 'start-of-editing', 'start-of-selection', 'state', 'statement', 'statements', 'static', 'statics', 'statusinfo', 'step-loop', 'stop', 'structure', 'structures', 'style', 'subkey', 'submatches', 'submit', 'subroutine', 'subscreen', 'subtract', 'subtract-corresponding', 'suffix', 'sum', 'summary', 'summing', 'supplied', 'supply', 'suppress', 'switch', 'switchstates', 'symbol', 'syncpoints', 'syntax', 'syntax-check', 'syntax-trace', 'system-call', 'system-exceptions', 'system-exit', 'tab', 'tabbed', 'tables', 'tableview', 'tabstrip', 'target', 'task', 'tasks', 'test', 'testing', 'test-injection', 'test-seam', 'text', 'textpool', 'then', 'throw', 'time', 'times', 'timestamp', 'timezone', 'tims_is_valid', 'title', 'titlebar', 'title-lines', 'to', 'tokenization', 'tokens', 'top-lines', 'top-of-page', 'trace-file', 'trace-table', 'trailing', 'transaction', 'transfer', 'transformation', 'transporting', 'trmac', 'truncate', 'truncation', 'try', 'tstmp_add_seconds', 'tstmp_current_utctimestamp', 'tstmp_is_valid', 'tstmp_seconds_between', 'type', 'type-pool', 'type-pools', 'types', 'uline', 'unassign', 'under', 'unicode', 'union', 'unique', 'unit_conversion', 'unix', 'unpack', 'until', 'unwind', 'up', 'update', 'upper', 'user', 'user-command', 'using', 'utf-8', 'valid', 'value', 'value-request', 'values', 'vary', 'varying', 'verification-message', 'version', 'via', 'view', 'visible', 'wait', 'warning', 'when', 'whenever', 'where', 'while', 'width', 'window', 'windows', 'with', 'with-heading', 'without', 'with-title', 'word', 'work', 'write', 'writer', 'xml', 'xsd', 'yellow', 'yes', 'yymmdd', 'zero', 'zone', // built-ins
'abs', 'acos', 'asin', 'atan', 'bit-set', 'boolc', 'boolx', 'ceil', 'char_off', 'charlen', 'cmax', 'cmin', 'concat_lines_of', 'condense', 'contains', 'contains_any_not_of', 'contains_any_of', 'cos', 'cosh', 'count', 'count_any_not_of', 'count_any_of', 'dbmaxlen', 'distance', 'escape', 'exp', 'find', 'find_any_not_of', 'find_any_of', 'find_end', 'floor', 'frac', 'from_mixed', 'insert', 'ipow', 'line_exists', 'line_index', 'lines', 'log', 'log10', 'match', 'matches', 'nmax', 'nmin', 'numofchar', 'repeat', 'replace', 'rescale', 'reverse', 'round', 'segment', 'shift_left', 'shift_right', 'sign', 'sin', 'sinh', 'sqrt', 'strlen', 'substring', 'substring_after', 'substring_before', 'substring_from', 'substring_to', 'tan', 'tanh', 'to_lower', 'to_mixed', 'to_upper', 'translate', 'trunc', 'utclong_add', 'utclong_current', 'utclong_diff', 'xsdbool', 'xstrlen'];
var language = {
  defaultToken: 'invalid',
  ignoreCase: true,
  tokenPostfix: '.abap',
  keywords: abapKeywords,
  typeKeywords: [// built-in data types
  'b', 'c', 'd', 'decfloat16', 'decfloat34', 'f', 'i', 'int8', 'n', 'p', 's', 'string', 't', 'utclong', 'x', 'xstring', // generic data types
  'any', 'clike', 'csequence', 'decfloat', 'numeric', 'simple', 'xsequence', // generic table types
  'table', // 'any table',
  'hashed', 'index', 'sorted', 'standard', // ddic data types
  'accp', 'char', 'clnt', 'cuky', 'curr', 'dats', 'dec', 'df16_dec', 'df16_raw', 'df34_dec', 'df34_raw', 'fltp', 'int1', 'int2', 'int4', // 'int8', built-in since 7.54
  'lang', 'lchr', 'lraw', 'numc', 'quan', 'raw', 'rawstring', 'sstring', 'tims', 'unit', // ddic  data types (obsolete)
  'df16_scl', 'df34_scl', 'prec', 'varc', // special data types
  'abap_bool', 'space', 'me', 'syst', 'sy', 'screen'],
  operators: [// arithmetic operators
  ' +', ' -', '/', '*', '**', 'div', 'mod', // assignment operators
  '=', '#', '@', // concat operators
  '&', '&&', // bit operators
  'bit-and', 'bit-not', 'bit-or', 'bit-xor', 'm', 'o', 'z', // boolean operators
  'and', 'equiv', 'not', 'or', // comparison operators
  ' < ', ' > ', '<=', '>=', '<>', '><', '=<', '=>', 'between', 'bt', 'byte-ca', 'byte-cn', 'byte-co', 'byte-cs', 'byte-na', 'byte-ns', 'ca', 'cn', 'co', 'cp', 'cs', 'eq', 'ge', 'gt', 'in', 'le', 'lt', 'na', 'nb', 'ne', 'np', 'ns'],
  symbols: /[=><!~?&+\-*\/\^%#@]+/,
  tokenizer: {
    root: [[/[a-z_$][\w-$]*/, {
      cases: {
        '@typeKeywords': 'keyword',
        '@keywords': 'keyword',
        '@operators': 'operator',
        '@default': 'identifier'
      }
    }], [/<[\w]+>/, 'identifier'], {
      include: '@whitespace'
    }, [/[:,.]/, 'delimiter'], [/[{}()\[\]]/, '@brackets'], [/@symbols/, {
      cases: {
        '@operators': 'operator',
        '@default': ''
      }
    }], [/'/, {
      token: 'string',
      bracket: '@open',
      next: '@stringquote'
    }], [/`/, {
      token: 'string',
      bracket: '@open',
      next: '@stringping'
    }], [/\|/, {
      token: 'string',
      bracket: '@open',
      next: '@stringtemplate'
    }], [/\d+/, 'number']],
    stringtemplate: [[/[^\\\|]+/, 'string'], [/\\\|/, 'string'], [/\|/, {
      token: 'string',
      bracket: '@close',
      next: '@pop'
    }]],
    stringping: [[/[^\\`]+/, 'string'], [/`/, {
      token: 'string',
      bracket: '@close',
      next: '@pop'
    }]],
    stringquote: [[/[^\\']+/, 'string'], [/'/, {
      token: 'string',
      bracket: '@close',
      next: '@pop'
    }]],
    whitespace: [[/[ \t\r\n]+/, ''], [/^\*.*$/, 'comment'], [/\".*$/, 'comment']]
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js"], null)
//# sourceMappingURL=/abap.8da3ba68.js.map