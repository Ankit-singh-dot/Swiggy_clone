// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4c6NY":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"react-refresh/runtime","f490fb404efab291":"react-error-overlay"}],"5DKsq":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a1ca44b122233762";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "15dc14af6b074ea4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8bz9w":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c1f1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c1f1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _client = require("react-dom/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _reactDefault = parcelHelpers.interopDefault(_react);
var _bodyJs = require("./Body.js");
var _bodyJsDefault = parcelHelpers.interopDefault(_bodyJs);
var _reactRouterDom = require("react-router-dom");
var _aboutJs = require("./About.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _contactJs = require("./contact.js");
var _contactJsDefault = parcelHelpers.interopDefault(_contactJs);
var _errorJs = require("./error.js");
var _errorJsDefault = parcelHelpers.interopDefault(_errorJs);
var _restaurantJs = require("./restaurant .js");
var _restaurantJsDefault = parcelHelpers.interopDefault(_restaurantJs);
var _useonilneStatusJs = require("./useonilneStatus.js");
var _useonilneStatusJsDefault = parcelHelpers.interopDefault(_useonilneStatusJs);
var _userContextJs = require("../utils/UserContext.js");
var _userContextJsDefault = parcelHelpers.interopDefault(_userContextJs);
var _reactRedux = require("react-redux");
var _appStoreJs = require("../utils/appStore.js");
var _appStoreJsDefault = parcelHelpers.interopDefault(_appStoreJs);
var _cartJs = require("./cart.js");
var _cartJsDefault = parcelHelpers.interopDefault(_cartJs);
var _s = $RefreshSig$(), _s1 = $RefreshSig$();
const Header = ()=>{
    _s();
    const [btnNameReact, setBtnNameReact] = (0, _react.useState)("login");
    const OnlineStatus = (0, _useonilneStatusJsDefault.default)();
    const { LoggedInUser } = (0, _react.useContext)((0, _userContextJsDefault.default));
    console.log(LoggedInUser);
    const cartItems = (0, _reactRedux.useSelector)((store)=>store.cart.items);
    console.log(cartItems);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex justify-between bg-white shadow-md",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "logo-container",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    src: "https://as1.ftcdn.net/v2/jpg/02/36/29/56/1000_F_236295604_5cTJm2Ksy8F4l2iIo9QrCmc5O1tbs8yo.jpg",
                    className: "logo size-28 rounded-xl shadow-md mt-1 ml-2 mb-1 shadow-gray-400 transition-transform duration-100 ease-in-out hover:scale-110 "
                }, void 0, false, {
                    fileName: "src/app.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/app.js",
                lineNumber: 27,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex items-center px-4 mt-4 ",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                    className: "flex ",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            className: "px-4",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "src/app.js",
                                lineNumber: 36,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/app.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            className: "px-4",
                            children: [
                                "Online status :",
                                OnlineStatus ? "\u2705" : "\uD83D\uDD34"
                            ]
                        }, void 0, true, {
                            fileName: "src/app.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            className: "px-4",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/about",
                                children: "About us"
                            }, void 0, false, {
                                fileName: "src/app.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/app.js",
                            lineNumber: 39,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            className: "px-4",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/contact",
                                children: "contact us"
                            }, void 0, false, {
                                fileName: "src/app.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/app.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            className: "px-4 font-bold flex",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                    to: "/cart",
                                    children: [
                                        " Cart-(",
                                        cartItems.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/app.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    className: "size-8 my-0",
                                    src: "https://t4.ftcdn.net/jpg/02/66/71/71/360_F_266717164_J8Fqw4OcXRkKtNwFyHD02zIEsxPI7qHH.jpg"
                                }, void 0, false, {
                                    fileName: "src/app.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/app.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "login mb-5",
                            onClick: ()=>{
                                setBtnNameReact((preview)=>preview === "login" ? "logout" : "login");
                            },
                            children: btnNameReact
                        }, void 0, false, {
                            fileName: "src/app.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            className: "font-bold",
                            children: [
                                ": ",
                                LoggedInUser
                            ]
                        }, void 0, true, {
                            fileName: "src/app.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/app.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/app.js",
                lineNumber: 33,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/app.js",
        lineNumber: 26,
        columnNumber: 5
    }, undefined);
};
_s(Header, "reLOCQW4eAfvTP7VGA5WkcN3Rss=", false, function() {
    return [
        (0, _useonilneStatusJsDefault.default),
        (0, _reactRedux.useSelector)
    ];
});
_c = Header;
const AppLayout = ()=>{
    _s1();
    const [userData, setUserData] = (0, _react.useState)();
    (0, _react.useEffect)(()=>{
        const data = {
            name: "Ankit $ingh"
        };
        setUserData(data.name);
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRedux.Provider), {
        store: (0, _appStoreJsDefault.default),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _userContextJsDefault.default).Provider, {
            value: {
                LoggedInUser: userData,
                setUserData
            },
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "App",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Header, {}, void 0, false, {
                        fileName: "src/app.js",
                        lineNumber: 82,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Outlet), {}, void 0, false, {
                        fileName: "src/app.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/app.js",
                lineNumber: 81,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "src/app.js",
            lineNumber: 80,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/app.js",
        lineNumber: 79,
        columnNumber: 5
    }, undefined);
};
_s1(AppLayout, "tERHXWxgYrpKbyUdeoLOEUzdSJo=");
_c1 = AppLayout;
const appRouter = (0, _reactRouterDom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(AppLayout, {}, void 0, false, {
            fileName: "src/app.js",
            lineNumber: 92,
            columnNumber: 14
        }, undefined),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _bodyJsDefault.default), {}, void 0, false, {
                    fileName: "src/app.js",
                    lineNumber: 96,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: "/about",
                element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _aboutJsDefault.default), {}, void 0, false, {
                    fileName: "src/app.js",
                    lineNumber: 100,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: "contact",
                element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _contactJsDefault.default), {}, void 0, false, {
                    fileName: "src/app.js",
                    lineNumber: 104,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: "/restaurants/:resId",
                element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantJsDefault.default), {}, void 0, false, {
                    fileName: "src/app.js",
                    lineNumber: 108,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: "/cart",
                element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cartJsDefault.default), {}, void 0, false, {
                    fileName: "src/app.js",
                    lineNumber: 112,
                    columnNumber: 18
                }, undefined)
            }
        ],
        errorElement: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _errorJsDefault.default), {}, void 0, false, {
            fileName: "src/app.js",
            lineNumber: 115,
            columnNumber: 19
        }, undefined)
    }
]);
const root = (0, _clientDefault.default).createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.RouterProvider), {
    router: appRouter
}, void 0, false, {
    fileName: "src/app.js",
    lineNumber: 119,
    columnNumber: 13
}, undefined));
var _c, _c1;
$RefreshReg$(_c, "Header");
$RefreshReg$(_c1, "AppLayout");

  $parcel$ReactRefreshHelpers$c1f1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-dom/client":"react-dom/client","./Body.js":"4qfwE","react-router-dom":"react-router-dom","./About.js":"kFtMO","./contact.js":"iSSBT","./error.js":"gkFM9","./restaurant .js":"4i9fD","./useonilneStatus.js":"aWwDe","../utils/UserContext.js":"5zXd4","react-redux":"react-redux","../utils/appStore.js":"43Iw8","./cart.js":"7TW6p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"4qfwE":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$8be2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8be2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _restaurentCard = require("./restaurentCard");
var _restaurentCardDefault = parcelHelpers.interopDefault(_restaurentCard);
var _shimmerCards = require("./shimmer_cards");
var _shimmerCardsDefault = parcelHelpers.interopDefault(_shimmerCards);
var _reactRouterDom = require("react-router-dom");
var _useonilneStatus = require("./useonilneStatus");
var _useonilneStatusDefault = parcelHelpers.interopDefault(_useonilneStatus);
var _userContext = require("../utils/UserContext");
var _userContextDefault = parcelHelpers.interopDefault(_userContext);
var _s = $RefreshSig$();
const Body = ()=>{
    _s();
    const [ListofRestaurent, setListofRestaurent] = (0, _react.useState)([]);
    const [searchText, setsearchText] = (0, _react.useState)("");
    const [filterRestaurants, setfilterRestaurants] = (0, _react.useState)([]);
    const RestaurentCardPromoted = (0, _restaurentCard.withPromotedLabel)((0, _restaurentCardDefault.default));
    const { LoggedInUser, setUserData } = (0, _react.useContext)((0, _userContextDefault.default));
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.478139&lng=77.5181394&str=North%20Indian&trackingId=6691dc88-5cb4-e4e4-f8ac-1ac12b1214c5&submitAction=ENTER&queryUniqueId=6eb9415e-8793-f2dc-6544-70e6001e4b96");
        const json = await data.json();
        console.log(json);
        setListofRestaurent(json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
        setfilterRestaurants(json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    };
    (0, _react.useEffect)(()=>{
        fetchData();
    }, []);
    const OnlineStatus = (0, _useonilneStatusDefault.default)();
    if (OnlineStatus == false) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
        children: " oops! we are disconnected ,please check your network"
    }, void 0, false, {
        fileName: "src/Body.js",
        lineNumber: 34,
        columnNumber: 12
    }, undefined);
    if (ListofRestaurent.length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerCardsDefault.default), {}, void 0, false, {
        fileName: "src/Body.js",
        lineNumber: 37,
        columnNumber: 12
    }, undefined);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "filter",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "search-box mt-2 mb-3 pl-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                            type: "text",
                            className: "search-txt mb-4 mt-2 ml-4  border-2 border-l-pink-400-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all hover:border-blue-500 hover:shadow-lg",
                            placeholder: "Type to Search",
                            value: searchText,
                            onChange: (e)=>{
                                setsearchText(e.target.value);
                            }
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "px-4 py-1 ml-2 rounded-lg bg-yellow-200 ",
                            onClick: ()=>{
                                const filterRestaurent = ListofRestaurent.filter((restaurent)=>restaurent.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setfilterRestaurants(filterRestaurent);
                            },
                            children: "search"
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "filter-btn  bg-slate-400 ml-9 rounded-md px-3 py-1",
                            onClick: ()=>{
                                const filteredList = filterRestaurants.filter((restaurant)=>restaurant.card.card.info.avgRating > 4);
                                setfilterRestaurants(filteredList);
                            },
                            children: "Top rated restaurant"
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                            className: "ml-8",
                            children: "UserName :"
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                            className: "ml-2 border border-black rounded-md p-1",
                            value: LoggedInUser,
                            onChange: (e)=>{
                                setUserData(e.target.value);
                            }
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Body.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/Body.js",
                lineNumber: 41,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-wrap ml-14",
                children: filterRestaurants.map((restaurant)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: "/restaurants/" + restaurant.card.card.info.id,
                        children: restaurant.card.card.info.promoted ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RestaurentCardPromoted, {
                            resData: restaurant.card.card
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 90,
                            columnNumber: 15
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurentCardDefault.default), {
                            resData: restaurant.card.card
                        }, void 0, false, {
                            fileName: "src/Body.js",
                            lineNumber: 92,
                            columnNumber: 15
                        }, undefined)
                    }, restaurant.card.card.info.id, false, {
                        fileName: "src/Body.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, undefined))
            }, void 0, false, {
                fileName: "src/Body.js",
                lineNumber: 83,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Body.js",
        lineNumber: 40,
        columnNumber: 5
    }, undefined);
};
_s(Body, "jZ0EvdPwM3qnS3lHLZIgCxOIE2c=", false, function() {
    return [
        (0, _useonilneStatusDefault.default)
    ];
});
_c = Body;
exports.default = Body;
var _c;
$RefreshReg$(_c, "Body");

  $parcel$ReactRefreshHelpers$8be2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./restaurentCard":"kVbO9","./shimmer_cards":"fwpfP","react-router-dom":"react-router-dom","./useonilneStatus":"aWwDe","../utils/UserContext":"5zXd4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"kVbO9":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4f9b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4f9b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withPromotedLabel", ()=>withPromotedLabel);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const RestaurantCard = (props)=>{
    const { resData } = props;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-[300px] m-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out bg-white hover:-translate-y-1 overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                className: "w-full h-48 object-cover rounded-t-xl",
                src: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.info.cloudinaryImageId}`,
                alt: resData.info.name
            }, void 0, false, {
                fileName: "src/restaurentCard.js",
                lineNumber: 6,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        className: "text-lg font-semibold text-gray-800 truncate mb-2",
                        children: resData.info.name
                    }, void 0, false, {
                        fileName: "src/restaurentCard.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex justify-between items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "bg-green-600 text-white px-2 py-1 rounded flex items-center gap-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "\u2B50"
                                    }, void 0, false, {
                                        fileName: "src/restaurentCard.js",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, undefined),
                                    resData.info.avgRating
                                ]
                            }, void 0, true, {
                                fileName: "src/restaurentCard.js",
                                lineNumber: 17,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-gray-600 text-sm truncate max-w-[60%]",
                                children: resData.info.cuisines.join(", ")
                            }, void 0, false, {
                                fileName: "src/restaurentCard.js",
                                lineNumber: 21,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/restaurentCard.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex justify-between text-gray-600 text-sm",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "before:content-['\u20B9'] before:mr-1",
                                children: resData.info.costForTwo / 100
                            }, void 0, false, {
                                fileName: "src/restaurentCard.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "before:content-['\uD83D\uDD52'] before:mr-2",
                                children: [
                                    resData.info.sla.deliveryTime,
                                    " mins"
                                ]
                            }, void 0, true, {
                                fileName: "src/restaurentCard.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/restaurentCard.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/restaurentCard.js",
                lineNumber: 11,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/restaurentCard.js",
        lineNumber: 5,
        columnNumber: 5
    }, undefined);
};
_c = RestaurantCard;
const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                    className: "absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded z-10",
                    children: "Promoted"
                }, void 0, false, {
                    fileName: "src/restaurentCard.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RestaurantCard, {
                    ...props
                }, void 0, false, {
                    fileName: "src/restaurentCard.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/restaurentCard.js",
            lineNumber: 42,
            columnNumber: 7
        }, undefined);
    };
};
exports.default = RestaurantCard;
var _c;
$RefreshReg$(_c, "RestaurantCard");

  $parcel$ReactRefreshHelpers$4f9b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fwpfP":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$810e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$810e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const Shimmer = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "shimmer-container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 4,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 5,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 6,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 8,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 9,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 10,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 11,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 12,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 14,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 15,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 16,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 17,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 18,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 19,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 20,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 21,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 22,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "shimmer-cards"
            }, void 0, false, {
                fileName: "src/shimmer_cards.js",
                lineNumber: 23,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/shimmer_cards.js",
        lineNumber: 3,
        columnNumber: 5
    }, undefined);
};
_c = Shimmer;
exports.default = Shimmer;
var _c;
$RefreshReg$(_c, "Shimmer");

  $parcel$ReactRefreshHelpers$810e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"aWwDe":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$ef45 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ef45.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _s = $RefreshSig$();
const useOnlineStatus = ()=>{
    _s();
    const [Onlinestatus, setOnlineStatus] = (0, _react.useState)(true);
    (0, _react.useEffect)(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    });
    return Onlinestatus;
};
_s(useOnlineStatus, "pcYIgyr5ENyj8hPpBQ9IQpxqBkE=");
exports.default = useOnlineStatus;

  $parcel$ReactRefreshHelpers$ef45.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"5zXd4":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3790 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3790.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
const UserContext = /*#__PURE__*/ (0, _react.createContext)({
    LoggedInUser: "Default user"
});
exports.default = UserContext;

  $parcel$ReactRefreshHelpers$3790.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"kFtMO":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$90ff = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$90ff.prelude(module);

try {
// import User from "./user";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _userClassJs = require("./UserClass.js");
var _userClassJsDefault = parcelHelpers.interopDefault(_userClassJs);
const About = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                children: "About"
            }, void 0, false, {
                fileName: "src/About.js",
                lineNumber: 6,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                children: "Say my name "
            }, void 0, false, {
                fileName: "src/About.js",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _userClassJsDefault.default), {
                class: "this is class-based component"
            }, void 0, false, {
                fileName: "src/About.js",
                lineNumber: 8,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/About.js",
        lineNumber: 5,
        columnNumber: 5
    }, undefined);
};
_c = About;
exports.default = About;
var _c;
$RefreshReg$(_c, "About");

  $parcel$ReactRefreshHelpers$90ff.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","./UserClass.js":"hMASd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"hMASd":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$74f1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$74f1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
class UserClass extends (0, _reactDefault.default).Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            userName: {
                login: "dummy",
                id: "dummy",
                avatar_url: "dummy"
            }
        };
        console.log(this.props.name + "child constructor");
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Ankit-singh-dot");
        const json = await data.json();
        console.log(json);
        this.setState({
            userName: json
        });
    }
    render() {
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "user-card",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    src: this.state.userName.avatar_url
                }, void 0, false, {
                    fileName: "src/UserClass.js",
                    lineNumber: 26,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                    children: [
                        "name:",
                        this.state.userName.login
                    ]
                }, void 0, true, {
                    fileName: "src/UserClass.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                    children: [
                        "id:",
                        this.state.userName.id
                    ]
                }, void 0, true, {
                    fileName: "src/UserClass.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/UserClass.js",
            lineNumber: 25,
            columnNumber: 9
        }, this);
    }
}
exports.default = UserClass;

  $parcel$ReactRefreshHelpers$74f1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"iSSBT":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$d5f3 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d5f3.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const Contact = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
            children: "email:DollarSignOneTime@gmail.com"
        }, void 0, false, {
            fileName: "src/contact.js",
            lineNumber: 4,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/contact.js",
        lineNumber: 3,
        columnNumber: 5
    }, undefined);
};
_c = Contact;
exports.default = Contact;
var _c;
$RefreshReg$(_c, "Contact");

  $parcel$ReactRefreshHelpers$d5f3.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"gkFM9":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9e4c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9e4c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Error = ()=>{
    _s();
    const err = (0, _reactRouterDom.useRouteError)();
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                src: "https://i.imgflip.com/8s7ktm.jpg"
            }, void 0, false, {
                fileName: "src/error.js",
                lineNumber: 6,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "font-bold ml-4 text-xl"
            }, void 0, false, {
                fileName: "src/error.js",
                lineNumber: 9,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/error.js",
        lineNumber: 5,
        columnNumber: 5
    }, undefined);
};
_s(Error, "U5GmGaAmh0j0MVy+E8WdBnjlm7s=", false, function() {
    return [
        (0, _reactRouterDom.useRouteError)
    ];
});
_c = Error;
exports.default = Error;
var _c;
$RefreshReg$(_c, "Error");

  $parcel$ReactRefreshHelpers$9e4c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router-dom":"react-router-dom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"4i9fD":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$af6a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$af6a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _useRestaurant = require("./useRestaurant");
var _useRestaurantDefault = parcelHelpers.interopDefault(_useRestaurant);
var _shimmerCards = require("./shimmer_cards");
var _shimmerCardsDefault = parcelHelpers.interopDefault(_shimmerCards);
var _reactRouter = require("react-router");
// import useRestaurantMenu from "./useRestaurant";
var _constant = require("./constant");
var _restaurantCategory = require("./restaurantCategory");
var _restaurantCategoryDefault = parcelHelpers.interopDefault(_restaurantCategory);
var _s = $RefreshSig$();
// import { useState } from "react";
const RestaurantMenu = ()=>{
    _s();
    // const [resInfo, setresinfo] = useState();
    const [ShowIndex, setShowIndex] = (0, _react.useState)(null);
    const { resId } = (0, _reactRouter.useParams)();
    console.log(resId);
    const resInfo = (0, _useRestaurantDefault.default)(resId);
    // const fetchmenu = async () => {
    //   const data = await fetch(
    //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.478139&lng=77.5181394&restaurantId=" +
    //       resId +
    //       "&catalog_qa=undefined&submitAction=ENTER"
    //   );
    //   const json = await data.json();
    //   console.log(json);
    //   setresinfo(json.data);
    // };
    // useEffect(() => {
    //   fetchmenu();
    // }, []);
    console.log(resInfo);
    if (resInfo === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerCardsDefault.default), {}, void 0, false, {
        fileName: "src/restaurant .js",
        lineNumber: 30,
        columnNumber: 29
    }, undefined);
    const { name = "Loading...", cuisines = [] } = resInfo?.cards?.[2]?.card?.card?.info || {};
    // const { itemCards =[] } =
    //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
    //     ?.card || {};
    const menuData = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR || {};
    const { cards = [] } = menuData;
    console.log(menuData);
    console.log(cards);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: " text-center",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        className: "font-bold my-6 text-2xl",
                        children: name
                    }, void 0, false, {
                        fileName: "src/restaurant .js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "font-bold",
                        children: cuisines.join(",")
                    }, void 0, false, {
                        fileName: "src/restaurant .js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, undefined),
                    cards.map((category, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantCategoryDefault.default), {
                            data: category?.card?.card,
                            ShowItems: index === ShowIndex && true,
                            setShowIndex: ()=>setShowIndex((probIndex)=>probIndex === index ? null : index)
                        }, index, false, {
                            fileName: "src/restaurant .js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, undefined))
                ]
            }, void 0, true, {
                fileName: "src/restaurant .js",
                lineNumber: 45,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                fileName: "src/restaurant .js",
                lineNumber: 68,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/restaurant .js",
        lineNumber: 44,
        columnNumber: 5
    }, undefined);
};
_s(RestaurantMenu, "ePrplO3Xt8FyujNlQYTBEwZ00RA=", false, function() {
    return [
        (0, _reactRouter.useParams),
        (0, _useRestaurantDefault.default)
    ];
});
_c = RestaurantMenu;
exports.default = RestaurantMenu;
var _c;
$RefreshReg$(_c, "RestaurantMenu");

  $parcel$ReactRefreshHelpers$af6a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./useRestaurant":"gYcMP","./shimmer_cards":"fwpfP","react-router":"react-router","./constant":"cS98W","./restaurantCategory":"7NOhQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"gYcMP":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$f632 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f632.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const useRestaurantMenu = (resId)=>{
    _s();
    (0, _react.useEffect)(()=>{
        fetchmenu();
    }, []);
    const [resInfo, setresInfo] = (0, _react.useState)(null);
    const fetchmenu = async ()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.478139&lng=77.5181394&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    };
    return resInfo;
};
_s(useRestaurantMenu, "1EToSaEjhw1tg2Kd7f70KBvBHVY=");
exports.default = useRestaurantMenu;

  $parcel$ReactRefreshHelpers$f632.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"react","react-router-dom":"react-router-dom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"cS98W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MENU_API", ()=>MENU_API);
const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.478139&lng=77.5181394&restaurantId=";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NOhQ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$abd6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$abd6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _itemList = require("./ItemList");
var _itemListDefault = parcelHelpers.interopDefault(_itemList);
var _react = require("react");
const RestaurantCategory = ({ data, ShowItems, setShowIndex })=>{
    console.log(data);
    const handleClick = ()=>{
        setShowIndex();
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between cursor-pointer ",
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "font-bold ",
                        children: [
                            data.title,
                            " (",
                            Array.isArray(data.itemCards) ? data.itemCards.length : 0,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "src/restaurantCategory.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: `transform transition-transform duration-300 ${ShowItems ? "rotate-180" : ""}`,
                        children: "\u2B07\uFE0F"
                    }, void 0, false, {
                        fileName: "src/restaurantCategory.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/restaurantCategory.js",
                lineNumber: 11,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: `overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${ShowItems ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`
            }, void 0, false, {
                fileName: "src/restaurantCategory.js",
                lineNumber: 27,
                columnNumber: 7
            }, undefined),
            ShowItems && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _itemListDefault.default), {
                items: data.itemCards
            }, void 0, false, {
                fileName: "src/restaurantCategory.js",
                lineNumber: 32,
                columnNumber: 21
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/restaurantCategory.js",
        lineNumber: 10,
        columnNumber: 5
    }, undefined);
};
_c = RestaurantCategory;
exports.default = RestaurantCategory;
var _c;
$RefreshReg$(_c, "RestaurantCategory");

  $parcel$ReactRefreshHelpers$abd6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","./ItemList":"geuBj","react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"geuBj":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c4de = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c4de.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _cardSlice = require("../utils/cardSlice");
var _s = $RefreshSig$();
const ItemList = ({ items })=>{
    _s();
    if (!Array.isArray(items)) {
        console.log("Error: items is not an array", items);
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "p-8 text-xl text-center text-gray-500",
            children: "No items available"
        }, void 0, false, {
            fileName: "src/ItemList.js",
            lineNumber: 7,
            columnNumber: 7
        }, undefined);
    }
    const dispatch = (0, _reactRedux.useDispatch)();
    const handleAddItem = (item)=>{
        dispatch((0, _cardSlice.addItems)(item));
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "space-y-4",
        children: items.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex items-center justify-between p-4 border-b border-gray-300",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "relative w-24 h-24",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                src: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId || "not"}`,
                                className: "rounded-lg object-cover w-full h-full",
                                alt: item?.card?.info?.name || "Food item"
                            }, void 0, false, {
                                fileName: "src/ItemList.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: "absolute bottom-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-tl-lg rounded-br-lg hover:bg-blue-600 transition duration-200 shadow-md",
                                onClick: ()=>handleAddItem(item),
                                children: "Add"
                            }, void 0, false, {
                                fileName: "src/ItemList.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/ItemList.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex-1 ml-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-lg font-semibold",
                                        children: item?.card?.info?.name
                                    }, void 0, false, {
                                        fileName: "src/ItemList.js",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-md font-medium text-gray-700",
                                        children: [
                                            "\u20B9",
                                            " ",
                                            item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/ItemList.js",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/ItemList.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-sm text-gray-600 mt-1",
                                children: item?.card?.info?.description
                            }, void 0, false, {
                                fileName: "src/ItemList.js",
                                lineNumber: 51,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/ItemList.js",
                        lineNumber: 40,
                        columnNumber: 11
                    }, undefined)
                ]
            }, item?.card?.info?.id || index, true, {
                fileName: "src/ItemList.js",
                lineNumber: 19,
                columnNumber: 9
            }, undefined))
    }, void 0, false, {
        fileName: "src/ItemList.js",
        lineNumber: 17,
        columnNumber: 5
    }, undefined);
};
_s(ItemList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        (0, _reactRedux.useDispatch)
    ];
});
_c = ItemList;
exports.default = ItemList;
var _c;
$RefreshReg$(_c, "ItemList");

  $parcel$ReactRefreshHelpers$c4de.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","../utils/cardSlice":"85Dje","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"85Dje":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItems", ()=>addItems);
parcelHelpers.export(exports, "removeItems", ()=>removeItems);
parcelHelpers.export(exports, "clearCart", ()=>clearCart);
var _toolkit = require("@reduxjs/toolkit");
const cardSlice = (0, _toolkit.createSlice)({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItems: (state, action)=>{
            state.items.pop();
        },
        clearCart: (state, action)=>{
            state.items.length = 0;
        }
    }
});
const { addItems, removeItems, clearCart } = cardSlice.actions;
exports.default = cardSlice.reducer;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43Iw8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toolkit = require("@reduxjs/toolkit");
var _cardSlice = require("./cardSlice");
var _cardSliceDefault = parcelHelpers.interopDefault(_cardSlice);
const appStore = (0, _toolkit.configureStore)({
    reducer: {
        cart: (0, _cardSliceDefault.default)
    }
});
exports.default = appStore;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","./cardSlice":"85Dje","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TW6p":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$2a65 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$2a65.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _itemList = require("./ItemList");
var _itemListDefault = parcelHelpers.interopDefault(_itemList);
var _cardSlice = require("../utils/cardSlice");
var _s = $RefreshSig$();
const Cart = ()=>{
    _s();
    const cartItems = (0, _reactRedux.useSelector)((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch = (0, _reactRedux.useDispatch)();
    const handleclearcart = ()=>dispatch((0, _cardSlice.clearCart)());
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "text-center m-10 p-10",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "text-2xl font-bold ",
                children: "Cart"
            }, void 0, false, {
                fileName: "src/cart.js",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-6/12 m-auto",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "bg-black text-white p-1 rounded-lg hover:bg-slate-300 mt-2 mb-2",
                        onClick: handleclearcart,
                        children: "clear cart"
                    }, void 0, false, {
                        fileName: "src/cart.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, undefined),
                    cartItems.length === 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        children: "Cart is empty add item to the cart!"
                    }, void 0, false, {
                        fileName: "src/cart.js",
                        lineNumber: 21,
                        columnNumber: 36
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _itemListDefault.default), {
                        items: cartItems
                    }, void 0, false, {
                        fileName: "src/cart.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/cart.js",
                lineNumber: 14,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/cart.js",
        lineNumber: 12,
        columnNumber: 5
    }, undefined);
};
_s(Cart, "ClsVU7OzYQ50hVvtHIih2dVFL+s=", false, function() {
    return [
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useDispatch)
    ];
});
_c = Cart;
exports.default = Cart;
var _c;
$RefreshReg$(_c, "Cart");

  $parcel$ReactRefreshHelpers$2a65.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","./ItemList":"geuBj","../utils/cardSlice":"85Dje","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}]},["4c6NY","5DKsq","8bz9w"], "8bz9w", "parcelRequire94c2")

//# sourceMappingURL=index.6b074ea4.js.map
