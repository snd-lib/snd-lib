
  /**
   * @license
   * Snd.js v1.0.0
   * Released under the MIT License.
   */

var Snd = (function () {
	'use strict';

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var src = {};

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	/* global Reflect, Promise */
	var _extendStatics = function extendStatics(d, b) {
	  _extendStatics = Object.setPrototypeOf || {
	    __proto__: []
	  } instanceof Array && function (d, b) {
	    d.__proto__ = b;
	  } || function (d, b) {
	    for (var p in b) {
	      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	    }
	  };

	  return _extendStatics(d, b);
	};

	function __extends(d, b) {
	  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

	  _extendStatics(d, b);

	  function __() {
	    this.constructor = d;
	  }

	  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var _assign = function __assign() {
	  _assign = Object.assign || function __assign(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return _assign.apply(this, arguments);
	};
	function __rest(s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	}
	function __decorate(decorators, target, key, desc) {
	  var c = arguments.length,
	      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	      d;
	  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	  }
	  return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __param(paramIndex, decorator) {
	  return function (target, key) {
	    decorator(target, key, paramIndex);
	  };
	}
	function __metadata(metadataKey, metadataValue) {
	  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}
	function __awaiter(thisArg, _arguments, P, generator) {
	  function adopt(value) {
	    return value instanceof P ? value : new P(function (resolve) {
	      resolve(value);
	    });
	  }

	  return new (P || (P = Promise))(function (resolve, reject) {
	    function fulfilled(value) {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    }

	    function rejected(value) {
	      try {
	        step(generator["throw"](value));
	      } catch (e) {
	        reject(e);
	      }
	    }

	    function step(result) {
	      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
	    }

	    step((generator = generator.apply(thisArg, _arguments || [])).next());
	  });
	}
	function __generator(thisArg, body) {
	  var _ = {
	    label: 0,
	    sent: function sent() {
	      if (t[0] & 1) throw t[1];
	      return t[1];
	    },
	    trys: [],
	    ops: []
	  },
	      f,
	      y,
	      t,
	      g;
	  return g = {
	    next: verb(0),
	    "throw": verb(1),
	    "return": verb(2)
	  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
	    return this;
	  }), g;

	  function verb(n) {
	    return function (v) {
	      return step([n, v]);
	    };
	  }

	  function step(op) {
	    if (f) throw new TypeError("Generator is already executing.");

	    while (_) {
	      try {
	        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	        if (y = 0, t) op = [op[0] & 2, t.value];

	        switch (op[0]) {
	          case 0:
	          case 1:
	            t = op;
	            break;

	          case 4:
	            _.label++;
	            return {
	              value: op[1],
	              done: false
	            };

	          case 5:
	            _.label++;
	            y = op[1];
	            op = [0];
	            continue;

	          case 7:
	            op = _.ops.pop();

	            _.trys.pop();

	            continue;

	          default:
	            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	              _ = 0;
	              continue;
	            }

	            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
	              _.label = op[1];
	              break;
	            }

	            if (op[0] === 6 && _.label < t[1]) {
	              _.label = t[1];
	              t = op;
	              break;
	            }

	            if (t && _.label < t[2]) {
	              _.label = t[2];

	              _.ops.push(op);

	              break;
	            }

	            if (t[2]) _.ops.pop();

	            _.trys.pop();

	            continue;
	        }

	        op = body.call(thisArg, _);
	      } catch (e) {
	        op = [6, e];
	        y = 0;
	      } finally {
	        f = t = 0;
	      }
	    }

	    if (op[0] & 5) throw op[1];
	    return {
	      value: op[0] ? op[1] : void 0,
	      done: true
	    };
	  }
	}
	var __createBinding = Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  Object.defineProperty(o, k2, {
	    enumerable: true,
	    get: function get() {
	      return m[k];
	    }
	  });
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	};
	function __exportStar(m, o) {
	  for (var p in m) {
	    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
	  }
	}
	function __values(o) {
	  var s = typeof Symbol === "function" && Symbol.iterator,
	      m = s && o[s],
	      i = 0;
	  if (m) return m.call(o);
	  if (o && typeof o.length === "number") return {
	    next: function next() {
	      if (o && i >= o.length) o = void 0;
	      return {
	        value: o && o[i++],
	        done: !o
	      };
	    }
	  };
	  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function __read(o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	}
	/** @deprecated */

	function __spread() {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read(arguments[i]));
	  }

	  return ar;
	}
	/** @deprecated */

	function __spreadArrays() {
	  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
	    s += arguments[i].length;
	  }

	  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
	    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
	      r[k] = a[j];
	    }
	  }

	  return r;
	}
	function __spreadArray(to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	}
	function __await(v) {
	  return this instanceof __await ? (this.v = v, this) : new __await(v);
	}
	function __asyncGenerator(thisArg, _arguments, generator) {
	  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	  var g = generator.apply(thisArg, _arguments || []),
	      i,
	      q = [];
	  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
	    return this;
	  }, i;

	  function verb(n) {
	    if (g[n]) i[n] = function (v) {
	      return new Promise(function (a, b) {
	        q.push([n, v, a, b]) > 1 || resume(n, v);
	      });
	    };
	  }

	  function resume(n, v) {
	    try {
	      step(g[n](v));
	    } catch (e) {
	      settle(q[0][3], e);
	    }
	  }

	  function step(r) {
	    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	  }

	  function fulfill(value) {
	    resume("next", value);
	  }

	  function reject(value) {
	    resume("throw", value);
	  }

	  function settle(f, v) {
	    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	  }
	}
	function __asyncDelegator(o) {
	  var i, p;
	  return i = {}, verb("next"), verb("throw", function (e) {
	    throw e;
	  }), verb("return"), i[Symbol.iterator] = function () {
	    return this;
	  }, i;

	  function verb(n, f) {
	    i[n] = o[n] ? function (v) {
	      return (p = !p) ? {
	        value: __await(o[n](v)),
	        done: n === "return"
	      } : f ? f(v) : v;
	    } : f;
	  }
	}
	function __asyncValues(o) {
	  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	  var m = o[Symbol.asyncIterator],
	      i;
	  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
	    return this;
	  }, i);

	  function verb(n) {
	    i[n] = o[n] && function (v) {
	      return new Promise(function (resolve, reject) {
	        v = o[n](v), settle(resolve, reject, v.done, v.value);
	      });
	    };
	  }

	  function settle(resolve, reject, d, v) {
	    Promise.resolve(v).then(function (v) {
	      resolve({
	        value: v,
	        done: d
	      });
	    }, reject);
	  }
	}
	function __makeTemplateObject(cooked, raw) {
	  if (Object.defineProperty) {
	    Object.defineProperty(cooked, "raw", {
	      value: raw
	    });
	  } else {
	    cooked.raw = raw;
	  }

	  return cooked;
	}

	var __setModuleDefault = Object.create ? function (o, v) {
	  Object.defineProperty(o, "default", {
	    enumerable: true,
	    value: v
	  });
	} : function (o, v) {
	  o["default"] = v;
	};

	function __importStar(mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	  }

	  __setModuleDefault(result, mod);

	  return result;
	}
	function __importDefault(mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	}
	function __classPrivateFieldGet(receiver, state, kind, f) {
	  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	}
	function __classPrivateFieldSet(receiver, state, value, kind, f) {
	  if (kind === "m") throw new TypeError("Private method is not writable");
	  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return _assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__spreadArray: __spreadArray,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

	var snd = {};

	var events = {exports: {}};

	var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : null;
	var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
	  return Function.prototype.apply.call(target, receiver, args);
	};
	var ReflectOwnKeys;

	if (R && typeof R.ownKeys === 'function') {
	  ReflectOwnKeys = R.ownKeys;
	} else if (Object.getOwnPropertySymbols) {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
	  };
	} else {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target);
	  };
	}

	function ProcessEmitWarning(warning) {
	  if (console && console.warn) console.warn(warning);
	}

	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
	  return value !== value;
	};

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	events.exports = EventEmitter;
	events.exports.once = once; // Backwards-compat with node 0.10.x

	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.

	var defaultMaxListeners = 10;

	function checkListener(listener) {
	  if (typeof listener !== 'function') {
	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
	  }
	}

	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
	  enumerable: true,
	  get: function get() {
	    return defaultMaxListeners;
	  },
	  set: function set(arg) {
	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
	    }

	    defaultMaxListeners = arg;
	  }
	});

	EventEmitter.init = function () {
	  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	}; // Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.


	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
	  }

	  this._maxListeners = n;
	  return this;
	};

	function _getMaxListeners(that) {
	  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return _getMaxListeners(this);
	};

	EventEmitter.prototype.emit = function emit(type) {
	  var args = [];

	  for (var i = 1; i < arguments.length; i++) {
	    args.push(arguments[i]);
	  }

	  var doError = type === 'error';
	  var events = this._events;
	  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

	  if (doError) {
	    var er;
	    if (args.length > 0) er = args[0];

	    if (er instanceof Error) {
	      // Note: The comments on the `throw` lines are intentional, they show
	      // up in Node's output if this results in an unhandled exception.
	      throw er; // Unhandled 'error' event
	    } // At least give some kind of context to the user


	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
	    err.context = er;
	    throw err; // Unhandled 'error' event
	  }

	  var handler = events[type];
	  if (handler === undefined) return false;

	  if (typeof handler === 'function') {
	    ReflectApply(handler, this, args);
	  } else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);

	    for (var i = 0; i < len; ++i) {
	      ReflectApply(listeners[i], this, args);
	    }
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;
	  checkListener(listener);
	  events = target._events;

	  if (events === undefined) {
	    events = target._events = Object.create(null);
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener !== undefined) {
	      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object

	      events = target._events;
	    }

	    existing = events[type];
	  }

	  if (existing === undefined) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
	    } else if (prepend) {
	      existing.unshift(listener);
	    } else {
	      existing.push(listener);
	    } // Check for listener leak


	    m = _getMaxListeners(target);

	    if (m > 0 && existing.length > m && !existing.warned) {
	      existing.warned = true; // No error code for this since it is a Warning
	      // eslint-disable-next-line no-restricted-syntax

	      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
	      w.name = 'MaxListenersExceededWarning';
	      w.emitter = target;
	      w.type = type;
	      w.count = existing.length;
	      ProcessEmitWarning(w);
	    }
	  }

	  return target;
	}

	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener = function prependListener(type, listener) {
	  return _addListener(this, type, listener, true);
	};

	function onceWrapper() {
	  if (!this.fired) {
	    this.target.removeListener(this.type, this.wrapFn);
	    this.fired = true;
	    if (arguments.length === 0) return this.listener.call(this.target);
	    return this.listener.apply(this.target, arguments);
	  }
	}

	function _onceWrap(target, type, listener) {
	  var state = {
	    fired: false,
	    wrapFn: undefined,
	    target: target,
	    type: type,
	    listener: listener
	  };
	  var wrapped = onceWrapper.bind(state);
	  wrapped.listener = listener;
	  state.wrapFn = wrapped;
	  return wrapped;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  checkListener(listener);
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
	  checkListener(listener);
	  this.prependListener(type, _onceWrap(this, type, listener));
	  return this;
	}; // Emits a 'removeListener' event if and only if the listener was removed.


	EventEmitter.prototype.removeListener = function removeListener(type, listener) {
	  var list, events, position, i, originalListener;
	  checkListener(listener);
	  events = this._events;
	  if (events === undefined) return this;
	  list = events[type];
	  if (list === undefined) return this;

	  if (list === listener || list.listener === listener) {
	    if (--this._eventsCount === 0) this._events = Object.create(null);else {
	      delete events[type];
	      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
	    }
	  } else if (typeof list !== 'function') {
	    position = -1;

	    for (i = list.length - 1; i >= 0; i--) {
	      if (list[i] === listener || list[i].listener === listener) {
	        originalListener = list[i].listener;
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;
	    if (position === 0) list.shift();else {
	      spliceOne(list, position);
	    }
	    if (list.length === 1) events[type] = list[0];
	    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
	  }

	  return this;
	};

	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

	EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
	  var listeners, events, i;
	  events = this._events;
	  if (events === undefined) return this; // not listening for removeListener, no need to emit

	  if (events.removeListener === undefined) {
	    if (arguments.length === 0) {
	      this._events = Object.create(null);
	      this._eventsCount = 0;
	    } else if (events[type] !== undefined) {
	      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
	    }

	    return this;
	  } // emit removeListener for all listeners on all events


	  if (arguments.length === 0) {
	    var keys = Object.keys(events);
	    var key;

	    for (i = 0; i < keys.length; ++i) {
	      key = keys[i];
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }

	    this.removeAllListeners('removeListener');
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	    return this;
	  }

	  listeners = events[type];

	  if (typeof listeners === 'function') {
	    this.removeListener(type, listeners);
	  } else if (listeners !== undefined) {
	    // LIFO order
	    for (i = listeners.length - 1; i >= 0; i--) {
	      this.removeListener(type, listeners[i]);
	    }
	  }

	  return this;
	};

	function _listeners(target, type, unwrap) {
	  var events = target._events;
	  if (events === undefined) return [];
	  var evlistener = events[type];
	  if (evlistener === undefined) return [];
	  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
	  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}

	EventEmitter.prototype.listeners = function listeners(type) {
	  return _listeners(this, type, true);
	};

	EventEmitter.prototype.rawListeners = function rawListeners(type) {
	  return _listeners(this, type, false);
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;

	function listenerCount(type) {
	  var events = this._events;

	  if (events !== undefined) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener !== undefined) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};

	function arrayClone(arr, n) {
	  var copy = new Array(n);

	  for (var i = 0; i < n; ++i) {
	    copy[i] = arr[i];
	  }

	  return copy;
	}

	function spliceOne(list, index) {
	  for (; index + 1 < list.length; index++) {
	    list[index] = list[index + 1];
	  }

	  list.pop();
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);

	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }

	  return ret;
	}

	function once(emitter, name) {
	  return new Promise(function (resolve, reject) {
	    function errorListener(err) {
	      emitter.removeListener(name, resolver);
	      reject(err);
	    }

	    function resolver() {
	      if (typeof emitter.removeListener === 'function') {
	        emitter.removeListener('error', errorListener);
	      }

	      resolve([].slice.call(arguments));
	    }
	    eventTargetAgnosticAddListener(emitter, name, resolver, {
	      once: true
	    });

	    if (name !== 'error') {
	      addErrorHandlerIfEventEmitter(emitter, errorListener, {
	        once: true
	      });
	    }
	  });
	}

	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
	  if (typeof emitter.on === 'function') {
	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
	  }
	}

	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
	  if (typeof emitter.on === 'function') {
	    if (flags.once) {
	      emitter.once(name, listener);
	    } else {
	      emitter.on(name, listener);
	    }
	  } else if (typeof emitter.addEventListener === 'function') {
	    // EventTarget does not have `error` event semantics like Node
	    // EventEmitters, we do not listen for `error` events here.
	    emitter.addEventListener(name, function wrapListener(arg) {
	      // IE does not have builtin `{ once: true }` support so we
	      // have to do it manually.
	      if (flags.once) {
	        emitter.removeEventListener(name, wrapListener);
	      }

	      listener(arg);
	    });
	  } else {
	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + _typeof(emitter));
	  }
	}

	var constant = {};

	var resources$1 = [
		"./assets/sounds/sprite/01/audioSprite.ogg",
		"./assets/sounds/sprite/01/audioSprite.m4a",
		"./assets/sounds/sprite/01/audioSprite.mp3",
		"./assets/sounds/sprite/01/audioSprite.ac3"
	];
	var spritemap$1 = {
		button: {
			start: 0,
			end: 0.1001814058956916,
			loop: false
		},
		caution: {
			start: 2,
			end: 2.160544217687075,
			loop: false
		},
		celebration: {
			start: 4,
			end: 5,
			loop: false
		},
		disabled: {
			start: 6,
			end: 6.070113378684807,
			loop: false
		},
		notification: {
			start: 8,
			end: 8.30031746031746,
			loop: false
		},
		progress_loop: {
			start: 10,
			end: 11.5,
			loop: false
		},
		ringtone_loop: {
			start: 13,
			end: 15,
			loop: false
		},
		select: {
			start: 16,
			end: 16.1,
			loop: false
		},
		swipe: {
			start: 18,
			end: 18.15,
			loop: false
		},
		swipe_01: {
			start: 20,
			end: 20.15,
			loop: false
		},
		swipe_02: {
			start: 22,
			end: 22.150272108843538,
			loop: false
		},
		swipe_03: {
			start: 24,
			end: 24.150272108843538,
			loop: false
		},
		swipe_04: {
			start: 26,
			end: 26.15,
			loop: false
		},
		swipe_05: {
			start: 28,
			end: 28.15,
			loop: false
		},
		tap_01: {
			start: 30,
			end: 30.01,
			loop: false
		},
		tap_02: {
			start: 32,
			end: 32.01,
			loop: false
		},
		tap_03: {
			start: 34,
			end: 34.01004535147392,
			loop: false
		},
		tap_04: {
			start: 36,
			end: 36.01002267573696,
			loop: false
		},
		tap_05: {
			start: 38,
			end: 38.01,
			loop: false
		},
		toggle_off: {
			start: 40,
			end: 40.09972789115646,
			loop: false
		},
		toggle_on: {
			start: 42,
			end: 42.09972789115646,
			loop: false
		},
		transition_down: {
			start: 44,
			end: 44.10018140589569,
			loop: false
		},
		transition_up: {
			start: 46,
			end: 46.10063492063492,
			loop: false
		},
		type_01: {
			start: 48,
			end: 48.010068027210885,
			loop: false
		},
		type_02: {
			start: 50,
			end: 50.01011337868481,
			loop: false
		},
		type_03: {
			start: 52,
			end: 52.010068027210885,
			loop: false
		},
		type_04: {
			start: 54,
			end: 54.0102947845805,
			loop: false
		},
		type_05: {
			start: 56,
			end: 56.01011337868481,
			loop: false
		}
	};
	var require$$1 = {
		resources: resources$1,
		spritemap: spritemap$1
	};

	var resources = [
		"./assets/sounds/sprite/02/audioSprite.ogg",
		"./assets/sounds/sprite/02/audioSprite.m4a",
		"./assets/sounds/sprite/02/audioSprite.mp3",
		"./assets/sounds/sprite/02/audioSprite.ac3"
	];
	var spritemap = {
		button: {
			start: 0,
			end: 0.5513151927437642,
			loop: false
		},
		caution: {
			start: 2,
			end: 2.499750566893424,
			loop: false
		},
		celebration: {
			start: 4,
			end: 7.001179138321996,
			loop: false
		},
		disabled: {
			start: 9,
			end: 9.499115646258504,
			loop: false
		},
		notification: {
			start: 11,
			end: 14.0037641723356,
			loop: false
		},
		progress_loop: {
			start: 16,
			end: 17.892199546485262,
			loop: false
		},
		ringtone_loop: {
			start: 19,
			end: 20.66204081632653,
			loop: false
		},
		select: {
			start: 22,
			end: 22.26063492063492,
			loop: false
		},
		swipe_01: {
			start: 24,
			end: 24.209115646258503,
			loop: false
		},
		swipe_02: {
			start: 26,
			end: 26.230566893424037,
			loop: false
		},
		swipe_03: {
			start: 28,
			end: 28.230385487528345,
			loop: false
		},
		swipe_04: {
			start: 30,
			end: 30.23963718820862,
			loop: false
		},
		swipe_05: {
			start: 32,
			end: 32.196281179138325,
			loop: false
		},
		tap_01: {
			start: 34,
			end: 34.19621315192744,
			loop: false
		},
		tap_02: {
			start: 36,
			end: 36.21399092970522,
			loop: false
		},
		tap_03: {
			start: 38,
			end: 38.2343537414966,
			loop: false
		},
		tap_04: {
			start: 40,
			end: 40.19183673469388,
			loop: false
		},
		tap_05: {
			start: 42,
			end: 42.21993197278911,
			loop: false
		},
		toggle_off: {
			start: 44,
			end: 44.55002267573696,
			loop: false
		},
		toggle_on: {
			start: 46,
			end: 46.51664399092971,
			loop: false
		},
		transition_down: {
			start: 48,
			end: 48.7502947845805,
			loop: false
		},
		transition_up: {
			start: 50,
			end: 50.7502947845805,
			loop: false
		},
		type_01: {
			start: 52,
			end: 52.50140589569161,
			loop: false
		},
		type_02: {
			start: 54,
			end: 54.500680272108845,
			loop: false
		},
		type_03: {
			start: 56,
			end: 56.500090702947844,
			loop: false
		},
		type_04: {
			start: 58,
			end: 58.500090702947844,
			loop: false
		},
		type_05: {
			start: 60,
			end: 60.50004535147392,
			loop: false
		}
	};
	var require$$2 = {
		resources: resources,
		spritemap: spritemap
	};

	Object.defineProperty(constant, "__esModule", { value: true });
	constant.TOGGLE_SOUND_KEYS = constant.TYPE_SOUND_KEYS = constant.SWIPE_SOUND_KEYS = constant.TAP_SOUND_KEYS = constant.EVENT_CLASS_NAMES = constant.SOUNDS = constant.ENABLE_TAGS = constant.KIT_INFO = constant.KITS = void 0;
	const tslib_1$6 = require$$0;
	const _01_json_1 = (0, tslib_1$6.__importDefault)(require$$1);
	const _02_json_1 = (0, tslib_1$6.__importDefault)(require$$2);
	const BUTTON = "button";
	const CAUTION = "caution";
	const CELEBRATION = "celebration";
	const DISABLED = "disabled";
	const NOTIFICATION = "notification";
	const PROGRESS_LOOP = "progress_loop";
	const RINGTONE_LOOP = "ringtone_loop";
	const SELECT = "select";
	const SWIPE = "swipe";
	const SWIPE_01 = "swipe_01";
	const SWIPE_02 = "swipe_02";
	const SWIPE_03 = "swipe_03";
	const SWIPE_04 = "swipe_04";
	const SWIPE_05 = "swipe_05";
	const TAP = "tap";
	const TAP_01 = "tap_01";
	const TAP_02 = "tap_02";
	const TAP_03 = "tap_03";
	const TAP_04 = "tap_04";
	const TAP_05 = "tap_05";
	const TOGGLE = "toggle";
	const TOGGLE_OFF = "toggle_off";
	const TOGGLE_ON = "toggle_on";
	const TRANSITION_DOWN = "transition_down";
	const TRANSITION_UP = "transition_up";
	const TYPE = "type";
	const TYPE_01 = "type_01";
	const TYPE_02 = "type_02";
	const TYPE_03 = "type_03";
	const TYPE_04 = "type_04";
	const TYPE_05 = "type_05";
	const TAP_SOUND_KEYS = [
	    TAP_01,
	    TAP_02,
	    TAP_03,
	    TAP_04,
	    TAP_05
	];
	constant.TAP_SOUND_KEYS = TAP_SOUND_KEYS;
	const SWIPE_SOUND_KEYS = [
	    SWIPE_01,
	    SWIPE_02,
	    SWIPE_03,
	    SWIPE_04,
	    SWIPE_05
	];
	constant.SWIPE_SOUND_KEYS = SWIPE_SOUND_KEYS;
	const TYPE_SOUND_KEYS = [
	    TYPE_01,
	    TYPE_02,
	    TYPE_03,
	    TYPE_04,
	    TYPE_05
	];
	constant.TYPE_SOUND_KEYS = TYPE_SOUND_KEYS;
	const TOGGLE_SOUND_KEYS = [
	    TOGGLE_ON,
	    TOGGLE_OFF
	];
	constant.TOGGLE_SOUND_KEYS = TOGGLE_SOUND_KEYS;
	const _SOUND_KEYS = {
	    BUTTON,
	    CAUTION,
	    CELEBRATION,
	    DISABLED,
	    NOTIFICATION,
	    PROGRESS_LOOP,
	    RINGTONE_LOOP,
	    SELECT,
	    SWIPE,
	    TAP,
	    TOGGLE_ON,
	    TOGGLE_OFF,
	    TRANSITION_DOWN,
	    TRANSITION_UP,
	    TYPE
	};
	const _EVENT_CLASS_NAMES = {
	    [BUTTON]: `snd__${BUTTON}`,
	    [CAUTION]: `snd__${CAUTION}`,
	    [CELEBRATION]: `snd__${CELEBRATION}`,
	    [DISABLED]: `snd__${DISABLED}`,
	    [NOTIFICATION]: `snd__${NOTIFICATION}`,
	    [PROGRESS_LOOP]: `snd__${PROGRESS_LOOP}`,
	    [RINGTONE_LOOP]: `snd__${RINGTONE_LOOP}`,
	    [SELECT]: `snd__${SELECT}`,
	    [SWIPE]: `snd__${SWIPE}`,
	    [TAP]: `snd__${TAP}`,
	    [TOGGLE]: `snd__${TOGGLE}`,
	    [TRANSITION_DOWN]: `snd__${TRANSITION_DOWN}`,
	    [TRANSITION_UP]: `snd__${TRANSITION_UP}`,
	    [TYPE]: `snd__${TYPE}`,
	};
	const SOUNDS = Object.freeze(_SOUND_KEYS);
	constant.SOUNDS = SOUNDS;
	const EVENT_CLASS_NAMES = Object.freeze(_EVENT_CLASS_NAMES);
	constant.EVENT_CLASS_NAMES = EVENT_CLASS_NAMES;
	const TAG_EVENT_SOUND = {
	    "input:text,email,number,password,search,url,tel": {
	        events: {
	            "input": "type"
	        }
	    },
	    "input:checkbox": {
	        events: {
	            "change": "toggle"
	        }
	    },
	    "input:radio": {
	        events: {
	            "change": "select"
	        }
	    },
	    "input:button,reset,submit": {
	        events: {
	            "click": "button,caution,celebration,disabled,notification,tap,transition_down,transition_up"
	        }
	    },
	    "select": {
	        events: {
	            "change": "select"
	        }
	    },
	    "any": {
	        events: {
	            "click": "button,caution,celebration,disabled,notification,tap,transition_down,transition_up"
	        }
	    }
	};
	constant.ENABLE_TAGS = TAG_EVENT_SOUND;
	const _KITS = {
	    SND01: "01",
	    SND02: "02"
	};
	const KITS = Object.freeze(_KITS);
	constant.KITS = KITS;
	const _KIT_INFO = {
	    [KITS.SND01]: {
	        json: _01_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.0.0/assets/sounds/sprite/01/audioSprite.mp3",
	    },
	    [KITS.SND02]: {
	        json: _02_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.0.0/assets/sounds/sprite/02/audioSprite.mp3",
	    },
	};
	const KIT_INFO = Object.freeze(_KIT_INFO);
	constant.KIT_INFO = KIT_INFO;

	var soundKit = {};

	var audioSource = {};

	var audioNode = {};

	Object.defineProperty(audioNode, "__esModule", { value: true });
	class AudioNodes {
	    constructor(audioBufferSourceNode, gainNode) {
	        this.audioSrc = null;
	        this._gain = null;
	        this._tail = null;
	        this._volume = 1;
	        this._masterVolume = 1;
	        this.audioSrc = audioBufferSourceNode;
	        this._gain = gainNode;
	        this._tail = this.audioSrc;
	    }
	    set volume(val) {
	        this._volume = val;
	        this._setVolume();
	    }
	    get volume() {
	        return this._volume;
	    }
	    set masterVolume(val) {
	        this._masterVolume = val;
	        this._setVolume();
	    }
	    get masterVolume() {
	        return this._masterVolume;
	    }
	    _setVolume() {
	        if (this._gain !== null)
	            this._gain.gain.value = this.volume * this.masterVolume;
	    }
	    connect(audioNode) {
	        var _a;
	        (_a = this._tail) === null || _a === void 0 ? void 0 : _a.connect(audioNode);
	        this._tail = audioNode;
	        return this;
	    }
	}
	audioNode.default = AudioNodes;

	var tween = {};

	Object.defineProperty(tween, "__esModule", { value: true });
	const tslib_1$5 = require$$0;
	class Tween {
	    constructor(target, propName, from, to, type, options) {
	        this._propName = "";
	        this._to = 0;
	        this._from = 0;
	        this._duration = 0.5;
	        this._delay = 0;
	        this._onComplete = () => { };
	        this._onUpdate = () => { };
	        this._updater = 0;
	        this._tween = (from, to) => (0, tslib_1$5.__awaiter)(this, void 0, void 0, function* () {
	            if (this._target[this._propName] === undefined)
	                return;
	            this.kill();
	            const startTime = this._time;
	            const dur = this._duration;
	            const del = this._delay;
	            const endTime = startTime + dur + del;
	            while (this._time < endTime) {
	                if (this._time < startTime + del)
	                    continue;
	                const crrTime = this._time;
	                const percentage = (crrTime - startTime) / (endTime - startTime);
	                const val = (to - from) * percentage + from;
	                this._target[this._propName] = val;
	                this._onUpdate();
	                yield new Promise(res => {
	                    this._updater = requestAnimationFrame(res);
	                });
	            }
	            this.kill();
	            this._target[this._propName] = to;
	            this._onUpdate();
	            this._onComplete();
	        });
	        this.kill = () => {
	            cancelAnimationFrame(this._updater);
	        };
	        this._target = target;
	        this._propName = propName;
	        this._from = from;
	        this._to = to;
	        options = Object.assign(Object.assign({}, Tween._defaultOptions), options);
	        this._duration = options === null || options === void 0 ? void 0 : options.duration;
	        this._delay = options === null || options === void 0 ? void 0 : options.delay;
	        this._onComplete = options === null || options === void 0 ? void 0 : options.onComplete;
	        this._onUpdate = options === null || options === void 0 ? void 0 : options.onUpdate;
	        if (this._target[this._propName] !== undefined) {
	            switch (type) {
	                case "to":
	                    this._tweenTo();
	                    break;
	                case "from":
	                    this._tweenFrom();
	                    break;
	                case "fromTo":
	                    this._tweenFromTo();
	                    break;
	            }
	        }
	        else {
	            throw new Error(`prop: ${this._propName} does not exists in ${this._target}`);
	        }
	    }
	    static to(target, propName, to, options) {
	        if (target[propName] === undefined)
	            throw new Error(`prop: ${propName} does not exists in ${target}`);
	        else
	            return new Tween(target, propName, 0, to, "to", options);
	    }
	    static from(target, propName, from, options) {
	        if (target[propName] === undefined)
	            throw new Error(`prop: ${propName} does not exists in ${target}`);
	        return new Tween(target, propName, from, 0, "from", options);
	    }
	    static fromTo(target, propName, from, to, options) {
	        if (target[propName] === undefined)
	            throw new Error(`prop: ${propName} does not exists in ${target}`);
	        return new Tween(target, propName, from, to, "fromTo", options);
	    }
	    get _time() {
	        return Date.now() / 1000;
	    }
	    _tweenTo() {
	        const from = this._target[this._propName];
	        const to = this._to;
	        this._tween(from, to);
	    }
	    _tweenFrom() {
	        const from = this._from;
	        const to = this._target[this._propName];
	        this._tween(from, to);
	    }
	    _tweenFromTo() {
	        const from = this._from;
	        const to = this._to;
	        this._tween(from, to);
	    }
	}
	tween.default = Tween;
	Tween._defaultOptions = {
	    duration: 0.5,
	    delay: 0,
	    onComplete: () => { },
	    onUpdate: () => { }
	};

	Object.defineProperty(audioSource, "__esModule", { value: true });
	const tslib_1$4 = require$$0;
	const audioNode_1 = (0, tslib_1$4.__importDefault)(audioNode);
	const tween_1$1 = (0, tslib_1$4.__importDefault)(tween);
	class AudioSource {
	    constructor() {
	        this._audioArrayBuffer = null;
	        this._audioBuffer = null;
	        this._audioList = new Map();
	        this._cnt = 1000;
	        this._json = null;
	        this._hasStartedLoading = false;
	        this._hasLoaded = false;
	        this._hasStartedAnalysis = false;
	        this._hasAnalyzed = false;
	        this._masterVolume = 1;
	        this._analyzePromise = null;
	        AudioSource._instances.push(this);
	    }
	    static get isActive() {
	        return this._isActive;
	    }
	    static activate() {
	        if (this._isActive)
	            return;
	        try {
	            const AudioContext = window.AudioContext || window.webkitAudioContext;
	            this._ctx = new AudioContext();
	            const emptySrc = this._ctx.createBufferSource();
	            emptySrc.start();
	            emptySrc.stop();
	            this._isActive = true;
	            this._analyzeAllInstances();
	        }
	        catch (err) {
	            throw new Error(`an err occurred while AudioSource.setup ${err}`);
	        }
	    }
	    static _analyzeAllInstances() {
	        this._instances.forEach((instance) => {
	            if (instance._hasLoaded && !instance._hasStartedAnalysis) {
	                instance.analyze();
	            }
	        });
	    }
	    static _createAudioBuffer(buffer) {
	        return (0, tslib_1$4.__awaiter)(this, void 0, void 0, function* () {
	            try {
	                if (typeof Promise !== 'undefined' && this._ctx.decodeAudioData.length === 1) {
	                    return yield this._ctx.decodeAudioData(buffer);
	                }
	                else {
	                    return new Promise((res, rej) => {
	                        this._ctx.decodeAudioData(buffer, (data) => res(data), (err) => rej(err));
	                    });
	                }
	            }
	            catch (err) {
	                throw new Error(`an err occured while AudioSource._createAudioBuffer ${err}`);
	            }
	        });
	    }
	    static _createAudioArrayBuffer(audioSrc) {
	        return (0, tslib_1$4.__awaiter)(this, void 0, void 0, function* () {
	            try {
	                const res = yield fetch(audioSrc);
	                const arrayBuffer = yield res.arrayBuffer();
	                return arrayBuffer;
	            }
	            catch (err) {
	                throw new Error(`an err occurred while AudioSource._createAudioArrayBuffer ${err}`);
	            }
	        });
	    }
	    get _uniqueKey() {
	        return this._cnt++;
	    }
	    set masterVolume(val) {
	        this._masterVolume = val;
	        this._audioList.forEach((audio) => {
	            audio.nodes.masterVolume = this._masterVolume;
	        });
	    }
	    get masterVolume() {
	        return this._masterVolume;
	    }
	    load(audioSrc, json) {
	        return (0, tslib_1$4.__awaiter)(this, void 0, void 0, function* () {
	            if (this._hasStartedLoading) {
	                console.warn("The file has already started loading.");
	                return;
	            }
	            this._json = json;
	            this._hasStartedLoading = true;
	            try {
	                this._audioArrayBuffer = yield AudioSource._createAudioArrayBuffer(audioSrc);
	                this._hasLoaded = true;
	            }
	            catch (err) {
	                if (err instanceof Error)
	                    throw err;
	                else
	                    throw new Error("unknown error");
	            }
	        });
	    }
	    analyze() {
	        return (0, tslib_1$4.__awaiter)(this, void 0, void 0, function* () {
	            if (!AudioSource.isActive)
	                return;
	            if (this._hasStartedAnalysis) {
	                console.warn("analyze(): AudioBuffer has already started analysis");
	                return;
	            }
	            if (!this._hasLoaded || this._audioArrayBuffer == null) {
	                console.warn("analyze(): The file hasn't loaded yet.");
	                return;
	            }
	            this._hasStartedAnalysis = true;
	            try {
	                this._analyzePromise = AudioSource._createAudioBuffer(this._audioArrayBuffer);
	                this._audioBuffer = yield this._analyzePromise;
	                this._analyzePromise = null;
	                this._hasAnalyzed = true;
	            }
	            catch (err) {
	                if (err instanceof Error)
	                    throw err;
	                else
	                    throw new Error("unknown error");
	            }
	        });
	    }
	    play(key, options) {
	        var _a, _b;
	        if (!this._hasLoaded) {
	            console.warn("play(): The file hasn't loaded yet.");
	            return -999;
	        }
	        if (!this._hasAnalyzed) {
	            if (!this._hasStartedAnalysis) {
	                try {
	                    AudioSource.activate();
	                }
	                catch (err) {
	                    console.warn("play(): Can not play audio before initialization (AudioContext must be initialization by pointer event).");
	                    return -999;
	                }
	            }
	            if (this._analyzePromise != null) {
	                const id = this._uniqueKey;
	                this._playLater(id, key, options);
	                return id;
	            }
	            else {
	                console.warn(("_analyzePromise is null"));
	                return -999;
	            }
	        }
	        if (this._json === null || !this._json.spritemap || !(key in this._json.spritemap)) {
	            throw new Error(`json error: ${this._json}`);
	        }
	        if (((_a = AudioSource._ctx) === null || _a === void 0 ? void 0 : _a.state) == "interrupted") {
	            const id = this._uniqueKey;
	            (_b = AudioSource._ctx) === null || _b === void 0 ? void 0 : _b.resume().then(() => {
	                this.play(key, options);
	            });
	            return id;
	        }
	        const id = this._uniqueKey;
	        this._play(id, key, options);
	        this.setLoop(options.loop, id);
	        return id;
	    }
	    stop(id, delay = 0) {
	        var _a;
	        if (!this._audioList.has(id))
	            return;
	        (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes.audioSrc.stop(AudioSource._ctx.currentTime + delay);
	        this._audioList.delete(id);
	    }
	    setVolume(vol, id) {
	        var _a;
	        if (!this._audioList.has(id))
	            return;
	        const audioNodes = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes;
	        if (audioNodes !== null && audioNodes.volume !== null)
	            audioNodes.volume = vol;
	    }
	    setLoop(loop, id) {
	        var _a, _b;
	        if (!this._audioList.has(id))
	            return;
	        const key = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.key;
	        const audioNodes = (_b = this._audioList.get(id)) === null || _b === void 0 ? void 0 : _b.nodes;
	        if (loop) {
	            const start = this._json.spritemap[key].start;
	            const end = this._json.spritemap[key].end;
	            audioNodes.audioSrc.loop = true;
	            audioNodes.audioSrc.loopStart = start;
	            audioNodes.audioSrc.loopEnd = end;
	        }
	        else {
	            audioNodes.audioSrc.loop = false;
	        }
	    }
	    fade(volTo, duration, id) {
	        var _a;
	        return (0, tslib_1$4.__awaiter)(this, void 0, void 0, function* () {
	            if (!this._audioList.has(id))
	                return;
	            const audioNodes = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes;
	            yield new Promise((res) => {
	                tween_1$1.default.to(audioNodes, "volume", volTo, {
	                    duration: duration,
	                    onComplete: res
	                });
	            });
	        });
	    }
	    fadeAll(volTo) {
	        this._audioList.forEach((_, id) => {
	            this.fade(volTo, 0.5, id).then(_ => this.stop(id));
	        });
	    }
	    _play(id, key, options) {
	        const audioSrc = AudioSource._ctx.createBufferSource();
	        audioSrc.buffer = this._audioBuffer;
	        const gainNode = AudioSource._ctx.createGain();
	        const audioNodes = new audioNode_1.default(audioSrc, gainNode);
	        audioNodes.masterVolume = this.masterVolume;
	        audioNodes.connect(gainNode).connect(AudioSource._ctx.destination);
	        const start = this._json.spritemap[key].start;
	        const end = this._json.spritemap[key].end;
	        if (options.loop) {
	            audioNodes.audioSrc.start(AudioSource._ctx.currentTime + options.delay, start, end);
	        }
	        else {
	            const dur = Math.max(end - start, 0.1);
	            audioNodes.audioSrc.start(AudioSource._ctx.currentTime + options.delay, start, dur);
	        }
	        audioNodes.audioSrc.onended = () => {
	            this.stop(id);
	            audioNodes.audioSrc.disconnect();
	            audioNodes.audioSrc.buffer = null;
	            options.callback(id);
	        };
	        this._audioList.set(id, {
	            key,
	            nodes: audioNodes,
	        });
	    }
	    _playLater(id, key, options) {
	        return (0, tslib_1$4.__awaiter)(this, void 0, void 0, function* () {
	            yield this._analyzePromise;
	            this._play(id, key, options);
	        });
	    }
	}
	audioSource.default = AudioSource;
	AudioSource.END = "end";
	AudioSource._instances = [];
	AudioSource._ctx = null;
	AudioSource._isActive = false;

	Object.defineProperty(soundKit, "__esModule", { value: true });
	const tslib_1$3 = require$$0;
	const constant_1$2 = constant;
	const audioSource_1$1 = (0, tslib_1$3.__importDefault)(audioSource);
	class SoundKit {
	    constructor(key) {
	        this._ids = new Map();
	        this._audioSrc = new audioSource_1$1.default();
	        this._masterVolume = 1;
	        this.key = key;
	    }
	    get masterVolume() {
	        return this._masterVolume;
	    }
	    set masterVolume(val) {
	        this._masterVolume = val;
	        this._audioSrc.masterVolume = this._masterVolume;
	    }
	    load() {
	        return (0, tslib_1$3.__awaiter)(this, void 0, void 0, function* () {
	            const json = constant_1$2.KIT_INFO[this.key].json;
	            const audioSrc = constant_1$2.KIT_INFO[this.key].audioSrc;
	            try {
	                yield this._audioSrc.load(audioSrc, json);
	            }
	            catch (err) {
	                throw err;
	            }
	        });
	    }
	    analyze() {
	        return (0, tslib_1$3.__awaiter)(this, void 0, void 0, function* () {
	            try {
	                yield this._audioSrc.analyze();
	            }
	            catch (err) {
	                throw err;
	            }
	        });
	    }
	    play(key, options) {
	        const oldId = this._ids.get(key);
	        if (oldId !== undefined)
	            this._audioSrc.fade(0, 0.05, oldId);
	        const id = this._audioSrc.play(key, options);
	        const fadeoutDuration = 0.05;
	        if (options.duration > fadeoutDuration) {
	            setTimeout(() => {
	                this._audioSrc.fade(0, fadeoutDuration, id);
	            }, (options.duration - fadeoutDuration) * 1000);
	        }
	        this._ids.set(key, id);
	    }
	    stop(soundKey) {
	        const id = this._ids.get(soundKey);
	        if (id)
	            this._audioSrc.stop(id);
	        else
	            console.warn(`[SoundKit.stop()] key: ${soundKey} haven't played`);
	    }
	    fade(volTo) {
	        this._audioSrc.fadeAll(volTo);
	    }
	}
	soundKit.default = SoundKit;

	var domInteraction = {};

	Object.defineProperty(domInteraction, "__esModule", { value: true });
	const tslib_1$2 = require$$0;
	const events_1$1 = (0, tslib_1$2.__importDefault)(events.exports);
	const constant_1$1 = constant;
	class DOMInteraction extends events_1$1.default {
	    constructor() {
	        super();
	        this._init();
	    }
	    _init() {
	        for (const key in constant_1$1.EVENT_CLASS_NAMES) {
	            const className = constant_1$1.EVENT_CLASS_NAMES[key];
	            const elements = document.getElementsByClassName(className);
	            for (let i = 0; i < elements.length; i++) {
	                const el = elements[i];
	                const soundKey = key.replace("snd__", "");
	                const eventName = this._getEventName(soundKey, el);
	                if (eventName == null)
	                    break;
	                this._listen(el, eventName, soundKey);
	            }
	        }
	    }
	    _getEventName(soundKey, element) {
	        const tagName = element.tagName.toLowerCase();
	        for (const tagString in constant_1$1.ENABLE_TAGS) {
	            if (tagName == "input" && tagString.match("input") != null) {
	                const type = element.type || "";
	                const types = tagString.split(":")[1].split(",");
	                for (const event in constant_1$1.ENABLE_TAGS[tagString].events) {
	                    for (const i in types) {
	                        if (type != types[i])
	                            continue;
	                        const sounds = constant_1$1.ENABLE_TAGS[tagString].events[event].split(",");
	                        for (const j in sounds) {
	                            if (soundKey == sounds[j])
	                                return event;
	                        }
	                    }
	                }
	            }
	            else {
	                if (tagString == tagName || tagString == "any") {
	                    for (const event in constant_1$1.ENABLE_TAGS[tagString].events) {
	                        const sounds = constant_1$1.ENABLE_TAGS[tagString].events[event].split(",");
	                        for (const i in sounds) {
	                            if (soundKey == sounds[i])
	                                return event;
	                        }
	                    }
	                }
	            }
	        }
	        return null;
	    }
	    _listen(element, eventName, soundKey) {
	        element.addEventListener(eventName, (e) => this._process(e, eventName, soundKey));
	    }
	    _process(e, eventName, soundKey) {
	        const target = e.target;
	        if (!target.classList.contains(`snd__${soundKey}`))
	            return;
	        if (soundKey == "toggle") {
	            soundKey = target.checked ? constant_1$1.TOGGLE_SOUND_KEYS[0] : constant_1$1.TOGGLE_SOUND_KEYS[1];
	        }
	        this._emit(target, eventName, soundKey);
	    }
	    _emit(DOM, event, soundKey) {
	        if (document.documentElement.classList.contains("muted"))
	            return;
	        this.emit(DOMInteraction.INTERACT, soundKey);
	    }
	}
	domInteraction.default = DOMInteraction;

	Object.defineProperty(snd, "__esModule", { value: true });
	const tslib_1$1 = require$$0;
	const events_1 = (0, tslib_1$1.__importDefault)(events.exports);
	const constant_1 = constant;
	const soundKit_1 = (0, tslib_1$1.__importDefault)(soundKit);
	const domInteraction_1 = (0, tslib_1$1.__importDefault)(domInteraction);
	const tween_1 = (0, tslib_1$1.__importDefault)(tween);
	const audioSource_1 = (0, tslib_1$1.__importDefault)(audioSource);
	class Snd extends events_1.default {
	    constructor(options) {
	        super();
	        this._soundKit = new soundKit_1.default(constant_1.KITS.SND01);
	        this._dom = null;
	        this._vol = 1;
	        this._isMutedByDeveloper = false;
	        this._isMutedByWindow = false;
	        this._isWindowBlurred = false;
	        this._muteOnWindowBlur = false;
	        this._fadeVol = 1;
	        this._windowVol = 1;
	        this._fadeTweenByDeveloper = null;
	        this._fadeTweenByWindowEvent = null;
	        this._onVisibilityChange = () => {
	            window.document.hidden ? this._onBlur() : this._onFocus();
	        };
	        this._onBlur = () => {
	            if (this._muteOnWindowBlur)
	                this._muteOnBlur();
	            this._isWindowBlurred = true;
	        };
	        this._onFocus = () => {
	            if (this._muteOnWindowBlur)
	                this._unmuteOnFocus();
	            this._isWindowBlurred = false;
	        };
	        this._onInteract = (event) => {
	            this.play(event);
	        };
	        if (typeof window === "undefined")
	            return;
	        Snd._instances.push(this);
	        options = Object.assign(Object.assign({}, Snd._defaultOptions), options);
	        this._muteOnWindowBlur = options.muteOnWindowBlur || false;
	        if (options === null || options === void 0 ? void 0 : options.easySetup) {
	            this._dom = new domInteraction_1.default();
	            this._dom.on(domInteraction_1.default.INTERACT, this._onInteract);
	        }
	        if (options.preloadSoundKit)
	            this.load(options.preloadSoundKit);
	        const initAudioContext = () => {
	            audioSource_1.default.activate();
	            window.removeEventListener("click", initAudioContext);
	            window.removeEventListener("touchstart", initAudioContext);
	        };
	        window.addEventListener("click", initAudioContext, { once: true });
	        window.addEventListener("touchstart", initAudioContext, { once: true });
	        const isSp = navigator.userAgent.match(/iPhone|Android.+Mobile/) != null;
	        if (isSp) {
	            window.addEventListener("visibilitychange", this._onVisibilityChange);
	        }
	        else {
	            window.addEventListener("blur", this._onBlur);
	            window.addEventListener("focus", this._onFocus);
	        }
	    }
	    static get masterVolume() { return this._masterVolume; }
	    static set masterVolume(val) {
	        this._masterVolume = val;
	        this._instances.forEach((instance) => {
	            instance._soundKit.masterVolume = this._masterVolume * instance._volume;
	        });
	    }
	    get kit() { return this._soundKit.key; }
	    get isMuted() { return this._isMutedByDeveloper || this._isMutedByWindow; }
	    get isWindowBlurred() { return this._isWindowBlurred; }
	    get _fadeVolume() { return this._fadeVol; }
	    set _fadeVolume(val) {
	        this._fadeVol = val;
	        this._volume = this._fadeVol * this._windowVolume;
	    }
	    get _windowVolume() { return this._windowVol; }
	    set _windowVolume(val) {
	        this._windowVol = val;
	        this._volume = this._fadeVolume * this._windowVol;
	    }
	    get _volume() {
	        return this._vol;
	    }
	    set _volume(val) {
	        this._vol = val;
	        this._soundKit.masterVolume = this._vol * Snd._masterVolume;
	    }
	    load(soundKitKey) {
	        return (0, tslib_1$1.__awaiter)(this, void 0, void 0, function* () {
	            this._soundKit.fade(0);
	            const oldKey = this._soundKit.key;
	            const kit = Snd._initializedSoundKits.get(soundKitKey);
	            if (kit === undefined) {
	                const newKit = new soundKit_1.default(soundKitKey);
	                Snd._initializedSoundKits.set(soundKitKey, newKit);
	                yield newKit.load();
	                yield newKit.analyze();
	                this._soundKit = newKit;
	            }
	            else {
	                this._soundKit = kit;
	            }
	            this._soundKit.fade(1);
	            const crrKey = this._soundKit.key;
	            if (oldKey !== crrKey)
	                this.emit(Snd.CHANGE_SOUND_KIT, crrKey, oldKey);
	        });
	    }
	    play(soundKey, options = {}) {
	        options = Object.assign(Object.assign({}, Snd._defaultPlayOptions), options);
	        if (this.isWindowBlurred)
	            return;
	        if (soundKey === constant_1.SOUNDS.TAP)
	            return this.playTap(options);
	        if (soundKey === constant_1.SOUNDS.TYPE)
	            return this.playType(options);
	        if (soundKey === constant_1.SOUNDS.SWIPE)
	            return this.playSwipe(options);
	        this._soundKit.play(soundKey, options);
	    }
	    stop(key) {
	        this._soundKit.stop(key);
	    }
	    mute() {
	        this._isMutedByDeveloper = true;
	        this._fadeByDeveloper(0, 0.3);
	    }
	    unmute() {
	        this._isMutedByDeveloper = false;
	        this._fadeByDeveloper(1, 0.3);
	    }
	    playTap(options = {}) {
	        this._playRandom(constant_1.TAP_SOUND_KEYS, options);
	    }
	    playSwipe(options = {}) {
	        this._playRandom(constant_1.SWIPE_SOUND_KEYS, options);
	    }
	    playType(options = {}) {
	        this._playRandom(constant_1.TYPE_SOUND_KEYS, options);
	    }
	    playButton(options = {}) {
	        this.play(Snd.SOUNDS.BUTTON, options);
	    }
	    playCaution(options = {}) {
	        this.play(Snd.SOUNDS.CAUTION, options);
	    }
	    playCelebration(options = {}) {
	        this.play(Snd.SOUNDS.CELEBRATION, options);
	    }
	    playDisabled(options = {}) {
	        this.play(Snd.SOUNDS.DISABLED, options);
	    }
	    playNotification(options = {}) {
	        this.play(Snd.SOUNDS.NOTIFICATION, options);
	    }
	    playProgressLoop(options = {}) {
	        this.play(Snd.SOUNDS.PROGRESS_LOOP, options);
	    }
	    playRingtoneLoop(options = {}) {
	        this.play(Snd.SOUNDS.RINGTONE_LOOP, options);
	    }
	    playSelect(options = {}) {
	        this.play(Snd.SOUNDS.SELECT, options);
	    }
	    playTransitionUp(options = {}) {
	        this.play(Snd.SOUNDS.TRANSITION_UP, options);
	    }
	    playTransitionDown(options = {}) {
	        this.play(Snd.SOUNDS.TRANSITION_DOWN, options);
	    }
	    playToggleOn(options = {}) {
	        this.play(Snd.SOUNDS.TOGGLE_ON, options);
	    }
	    playToggleOff(options = {}) {
	        this.play(Snd.SOUNDS.TOGGLE_OFF, options);
	    }
	    _playRandom(keys, options = {}) {
	        this.play(keys[Math.floor(Math.random() * keys.length)], options);
	    }
	    _muteOnBlur() {
	        this._isMutedByWindow = true;
	        this._fadeByWindowEvent(0, 0.3);
	    }
	    _unmuteOnFocus() {
	        this._isMutedByWindow = false;
	        this._fadeByWindowEvent(1, 0.3);
	    }
	    _fadeByDeveloper(volumeTo, duration) {
	        return (0, tslib_1$1.__awaiter)(this, void 0, void 0, function* () {
	            if (this._fadeTweenByDeveloper != null)
	                this._fadeTweenByDeveloper.kill();
	            this._fadeTweenByDeveloper = tween_1.default.to(this, "_fadeVolume", volumeTo, { duration });
	        });
	    }
	    _fadeByWindowEvent(volumeTo, duration) {
	        return (0, tslib_1$1.__awaiter)(this, void 0, void 0, function* () {
	            if (this._fadeTweenByWindowEvent != null)
	                this._fadeTweenByWindowEvent.kill();
	            this._fadeTweenByWindowEvent = tween_1.default.to(this, "_windowVolume", volumeTo, { duration });
	        });
	    }
	}
	snd.default = Snd;
	Snd.CHANGE_SOUND_KIT = "change_sound_kit";
	Snd.SOUNDS = constant_1.SOUNDS;
	Snd.KITS = constant_1.KITS;
	Snd._instances = [];
	Snd._initializedSoundKits = new Map();
	Snd._masterVolume = 1;
	Snd._defaultOptions = {
	    muteOnWindowBlur: true,
	    easySetup: false,
	    preloadSoundKit: null,
	};
	Snd._defaultPlayOptions = {
	    loop: false,
	    volume: 1,
	    delay: 0,
	    duration: -1,
	    callback: () => { }
	};

	Object.defineProperty(src, "__esModule", { value: true });
	const tslib_1 = require$$0;
	const snd_1 = (0, tslib_1.__importDefault)(snd);
	var _default = src.default = snd_1.default;

	return _default;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25kLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCIuLi8uLi9zcmMvY29uc3RhbnQudHMiLCIuLi8uLi9zcmMvYXVkaW9Ob2RlLnRzIiwiLi4vLi4vc3JjL3R3ZWVuLnRzIiwiLi4vLi4vc3JjL2F1ZGlvU291cmNlLnRzIiwiLi4vLi4vc3JjL3NvdW5kS2l0LnRzIiwiLi4vLi4vc3JjL2RvbUludGVyYWN0aW9uLnRzIiwiLi4vLi4vc3JjL3NuZC50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb3VuZEtleXMsIERPTUV2ZW50U291bmQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IFNPVU5EX0tJVF8wMSBmcm9tIFwiLi9qc29uLzAxLmpzb25cIjtcbmltcG9ydCBTT1VORF9LSVRfMDIgZnJvbSBcIi4vanNvbi8wMi5qc29uXCI7XG5cbmNvbnN0IEJVVFRPTiA9IFwiYnV0dG9uXCI7XG5jb25zdCBDQVVUSU9OID0gXCJjYXV0aW9uXCI7XG5jb25zdCBDRUxFQlJBVElPTiA9IFwiY2VsZWJyYXRpb25cIjtcbmNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuY29uc3QgTk9USUZJQ0FUSU9OID0gXCJub3RpZmljYXRpb25cIjtcbmNvbnN0IFBST0dSRVNTX0xPT1AgPSBcInByb2dyZXNzX2xvb3BcIjtcbmNvbnN0IFJJTkdUT05FX0xPT1AgPSBcInJpbmd0b25lX2xvb3BcIjtcbmNvbnN0IFNFTEVDVCA9IFwic2VsZWN0XCI7XG5jb25zdCBTV0lQRSA9IFwic3dpcGVcIjtcbmNvbnN0IFNXSVBFXzAxID0gXCJzd2lwZV8wMVwiO1xuY29uc3QgU1dJUEVfMDIgPSBcInN3aXBlXzAyXCI7XG5jb25zdCBTV0lQRV8wMyA9IFwic3dpcGVfMDNcIjtcbmNvbnN0IFNXSVBFXzA0ID0gXCJzd2lwZV8wNFwiO1xuY29uc3QgU1dJUEVfMDUgPSBcInN3aXBlXzA1XCI7XG5jb25zdCBUQVAgPSBcInRhcFwiO1xuY29uc3QgVEFQXzAxID0gXCJ0YXBfMDFcIjtcbmNvbnN0IFRBUF8wMiA9IFwidGFwXzAyXCI7XG5jb25zdCBUQVBfMDMgPSBcInRhcF8wM1wiO1xuY29uc3QgVEFQXzA0ID0gXCJ0YXBfMDRcIjtcbmNvbnN0IFRBUF8wNSA9IFwidGFwXzA1XCI7XG5jb25zdCBUT0dHTEUgPSBcInRvZ2dsZVwiO1xuY29uc3QgVE9HR0xFX09GRiA9IFwidG9nZ2xlX29mZlwiO1xuY29uc3QgVE9HR0xFX09OID0gXCJ0b2dnbGVfb25cIjtcbmNvbnN0IFRSQU5TSVRJT05fRE9XTiA9IFwidHJhbnNpdGlvbl9kb3duXCI7XG5jb25zdCBUUkFOU0lUSU9OX1VQID0gXCJ0cmFuc2l0aW9uX3VwXCI7XG5jb25zdCBUWVBFID0gXCJ0eXBlXCI7XG5jb25zdCBUWVBFXzAxID0gXCJ0eXBlXzAxXCI7XG5jb25zdCBUWVBFXzAyID0gXCJ0eXBlXzAyXCI7XG5jb25zdCBUWVBFXzAzID0gXCJ0eXBlXzAzXCI7XG5jb25zdCBUWVBFXzA0ID0gXCJ0eXBlXzA0XCI7XG5jb25zdCBUWVBFXzA1ID0gXCJ0eXBlXzA1XCI7XG5cbmNvbnN0IFRBUF9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0VEFQXzAxLFxuXHRUQVBfMDIsXG5cdFRBUF8wMyxcblx0VEFQXzA0LFxuXHRUQVBfMDVcbl07XG5cbmNvbnN0IFNXSVBFX1NPVU5EX0tFWVM6IHN0cmluZ1tdID0gW1xuXHRTV0lQRV8wMSxcblx0U1dJUEVfMDIsXG5cdFNXSVBFXzAzLFxuXHRTV0lQRV8wNCxcblx0U1dJUEVfMDVcbl07XG5cbmNvbnN0IFRZUEVfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRZUEVfMDEsXG5cdFRZUEVfMDIsXG5cdFRZUEVfMDMsXG5cdFRZUEVfMDQsXG5cdFRZUEVfMDVcbl07XG5cbmNvbnN0IFRPR0dMRV9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0VE9HR0xFX09OLFxuXHRUT0dHTEVfT0ZGXG5dO1xuXG5jb25zdCBfU09VTkRfS0VZUzogU291bmRLZXlzID0ge1xuXHRCVVRUT04sXG5cdENBVVRJT04sXG5cdENFTEVCUkFUSU9OLFxuXHRESVNBQkxFRCxcblx0Tk9USUZJQ0FUSU9OLFxuXHRQUk9HUkVTU19MT09QLFxuXHRSSU5HVE9ORV9MT09QLFxuXHRTRUxFQ1QsXG5cdFNXSVBFLFxuXHRUQVAsXG5cdFRPR0dMRV9PTixcblx0VE9HR0xFX09GRixcblx0VFJBTlNJVElPTl9ET1dOLFxuXHRUUkFOU0lUSU9OX1VQLFxuXHRUWVBFXG59O1xuXG5jb25zdCBfRVZFTlRfQ0xBU1NfTkFNRVM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRbQlVUVE9OXTogYHNuZF9fJHtCVVRUT059YCxcblx0W0NBVVRJT05dOiBgc25kX18ke0NBVVRJT059YCxcblx0W0NFTEVCUkFUSU9OXTogYHNuZF9fJHtDRUxFQlJBVElPTn1gLFxuXHRbRElTQUJMRURdOiBgc25kX18ke0RJU0FCTEVEfWAsXG5cdFtOT1RJRklDQVRJT05dOiBgc25kX18ke05PVElGSUNBVElPTn1gLFxuXHRbUFJPR1JFU1NfTE9PUF06IGBzbmRfXyR7UFJPR1JFU1NfTE9PUH1gLFxuXHRbUklOR1RPTkVfTE9PUF06IGBzbmRfXyR7UklOR1RPTkVfTE9PUH1gLFxuXHRbU0VMRUNUXTogYHNuZF9fJHtTRUxFQ1R9YCxcblx0W1NXSVBFXTogYHNuZF9fJHtTV0lQRX1gLFxuXHRbVEFQXTogYHNuZF9fJHtUQVB9YCxcblx0W1RPR0dMRV06IGBzbmRfXyR7VE9HR0xFfWAsXG5cdFtUUkFOU0lUSU9OX0RPV05dOiBgc25kX18ke1RSQU5TSVRJT05fRE9XTn1gLFxuXHRbVFJBTlNJVElPTl9VUF06IGBzbmRfXyR7VFJBTlNJVElPTl9VUH1gLFxuXHRbVFlQRV06IGBzbmRfXyR7VFlQRX1gLFxufTtcblxuXG5cbmNvbnN0IFNPVU5EUyA9IE9iamVjdC5mcmVlemUoX1NPVU5EX0tFWVMpO1xuY29uc3QgRVZFTlRfQ0xBU1NfTkFNRVMgPSBPYmplY3QuZnJlZXplKF9FVkVOVF9DTEFTU19OQU1FUyk7XG5cbmNvbnN0IFRBR19FVkVOVF9TT1VORDogRE9NRXZlbnRTb3VuZCA9IHtcblx0XCJpbnB1dDp0ZXh0LGVtYWlsLG51bWJlcixwYXNzd29yZCxzZWFyY2gsdXJsLHRlbFwiOiB7XG5cdFx0ZXZlbnRzOiB7XG5cblx0XHRcdFwiaW5wdXRcIjogXCJ0eXBlXCJcblx0XHR9XG5cdH0sXG5cdFwiaW5wdXQ6Y2hlY2tib3hcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJ0b2dnbGVcIlxuXHRcdH1cblx0fSxcblx0XCJpbnB1dDpyYWRpb1wiOiB7XG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRcImNoYW5nZVwiOiBcInNlbGVjdFwiXG5cdFx0fVxuXHR9LFxuXHRcImlucHV0OmJ1dHRvbixyZXNldCxzdWJtaXRcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjbGlja1wiOiBcImJ1dHRvbixjYXV0aW9uLGNlbGVicmF0aW9uLGRpc2FibGVkLG5vdGlmaWNhdGlvbix0YXAsdHJhbnNpdGlvbl9kb3duLHRyYW5zaXRpb25fdXBcIlxuXHRcdH1cblx0fSxcblx0XCJzZWxlY3RcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJzZWxlY3RcIlxuXHRcdH1cblx0fSxcblx0XCJhbnlcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjbGlja1wiOiBcImJ1dHRvbixjYXV0aW9uLGNlbGVicmF0aW9uLGRpc2FibGVkLG5vdGlmaWNhdGlvbix0YXAsdHJhbnNpdGlvbl9kb3duLHRyYW5zaXRpb25fdXBcIlxuXHRcdH1cblx0fVxufTtcblxuXG5leHBvcnQgdHlwZSBLaXRLaW5kcyA9IFwiMDFcIiB8IFwiMDJcIjtcbmNvbnN0IF9LSVRTOiB7IFtrZXk6IHN0cmluZ106IEtpdEtpbmRzOyB9ID0ge1xuXHRTTkQwMTogXCIwMVwiLFxuXHRTTkQwMjogXCIwMlwiXG59O1xuY29uc3QgS0lUUyA9IE9iamVjdC5mcmVlemUoX0tJVFMpO1xuXG5jb25zdCBfS0lUX0lORk86IHsgW2tleTogc3RyaW5nXTogeyBqc29uOiBhbnksIGF1ZGlvU3JjOiBzdHJpbmc7IH07IH0gPSB7XG5cdFtLSVRTLlNORDAxXToge1xuXHRcdGpzb246IFNPVU5EX0tJVF8wMSxcblx0XHRhdWRpb1NyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc25kLWxpYi9zbmQtbGliQHYxLjAuMC9hc3NldHMvc291bmRzL3Nwcml0ZS8wMS9hdWRpb1Nwcml0ZS5tcDNcIixcblxuXHR9LFxuXHRbS0lUUy5TTkQwMl06IHtcblx0XHRqc29uOiBTT1VORF9LSVRfMDIsXG5cdFx0YXVkaW9TcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NuZC1saWIvc25kLWxpYkB2MS4wLjAvYXNzZXRzL3NvdW5kcy9zcHJpdGUvMDIvYXVkaW9TcHJpdGUubXAzXCIsXG5cblx0fSxcbn07XG5jb25zdCBLSVRfSU5GTyA9IE9iamVjdC5mcmVlemUoX0tJVF9JTkZPKTtcblxuZXhwb3J0IHtcblx0S0lUUyxcblx0S0lUX0lORk8sXG5cdFRBR19FVkVOVF9TT1VORCBhcyBFTkFCTEVfVEFHUyxcblx0U09VTkRTLFxuXHRFVkVOVF9DTEFTU19OQU1FUyxcblx0VEFQX1NPVU5EX0tFWVMsXG5cdFNXSVBFX1NPVU5EX0tFWVMsXG5cdFRZUEVfU09VTkRfS0VZUyxcblx0VE9HR0xFX1NPVU5EX0tFWVNcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb05vZGVzIHtcblxuXHRwdWJsaWMgYXVkaW9TcmM6IEF1ZGlvQnVmZmVyU291cmNlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9nYWluOiBHYWluTm9kZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF90YWlsOiBBdWRpb05vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfdm9sdW1lOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3IoYXVkaW9CdWZmZXJTb3VyY2VOb2RlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIGdhaW5Ob2RlOiBHYWluTm9kZSkge1xuXHRcdHRoaXMuYXVkaW9TcmMgPSBhdWRpb0J1ZmZlclNvdXJjZU5vZGU7XG5cdFx0dGhpcy5fZ2FpbiA9IGdhaW5Ob2RlO1xuXHRcdHRoaXMuX3RhaWwgPSB0aGlzLmF1ZGlvU3JjO1xuXHR9XG5cblx0cHVibGljIHNldCB2b2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl92b2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fc2V0Vm9sdW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl92b2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0IG1hc3RlclZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX21hc3RlclZvbHVtZSA9IHZhbDtcblx0XHR0aGlzLl9zZXRWb2x1bWUoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHByaXZhdGUgX3NldFZvbHVtZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fZ2FpbiAhPT0gbnVsbCkgdGhpcy5fZ2Fpbi5nYWluLnZhbHVlID0gdGhpcy52b2x1bWUgKiB0aGlzLm1hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBjb25uZWN0KGF1ZGlvTm9kZTogQXVkaW9Ob2RlKTogQXVkaW9Ob2RlcyB7XG5cdFx0dGhpcy5fdGFpbD8uY29ubmVjdChhdWRpb05vZGUpO1xuXHRcdHRoaXMuX3RhaWwgPSBhdWRpb05vZGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufSIsImludGVyZmFjZSBPcHRpb25zIHtcblx0ZHVyYXRpb24/OiBudW1iZXI7XG5cdGRlbGF5PzogbnVtYmVyO1xuXHRvbkNvbXBsZXRlPzogKCkgPT4gdm9pZDtcblx0b25VcGRhdGU/OiAoKSA9PiB2b2lkO1xufVxuXG50eXBlIFR3ZWVuVHlwZSA9IFwidG9cIiB8IFwiZnJvbVwiIHwgXCJmcm9tVG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuXG5cdHByaXZhdGUgc3RhdGljIF9kZWZhdWx0T3B0aW9uczogT3B0aW9ucyA9IHtcblx0XHRkdXJhdGlvbjogMC41LFxuXHRcdGRlbGF5OiAwLFxuXHRcdG9uQ29tcGxldGU6ICgpID0+IHsgfSxcblx0XHRvblVwZGF0ZTogKCkgPT4geyB9XG5cdH07XG5cblx0cHJpdmF0ZSBfdGFyZ2V0OiBhbnk7XG5cdHByaXZhdGUgX3Byb3BOYW1lOiBzdHJpbmcgPSBcIlwiO1xuXHRwcml2YXRlIF90bzogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBfZnJvbTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBfZHVyYXRpb246IG51bWJlciA9IDAuNTtcblx0cHJpdmF0ZSBfZGVsYXk6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX29uQ29tcGxldGU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cdHByaXZhdGUgX29uVXBkYXRlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXHRwcml2YXRlIF91cGRhdGVyOiBudW1iZXIgPSAwO1xuXG5cdHB1YmxpYyBzdGF0aWMgdG8odGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIHRvOiBudW1iZXIsIG9wdGlvbnM/OiBPcHRpb25zKTogVHdlZW4ge1xuXHRcdGlmICh0YXJnZXRbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgcHJvcDogJHtwcm9wTmFtZX0gZG9lcyBub3QgZXhpc3RzIGluICR7dGFyZ2V0fWApO1xuXHRcdGVsc2UgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXQsIHByb3BOYW1lLCAwLCB0bywgXCJ0b1wiLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbSh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRyZXR1cm4gbmV3IFR3ZWVuKHRhcmdldCwgcHJvcE5hbWUsIGZyb20sIDAsIFwiZnJvbVwiLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbVRvKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIG9wdGlvbnM/OiBPcHRpb25zKTogVHdlZW4ge1xuXHRcdGlmICh0YXJnZXRbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgcHJvcDogJHtwcm9wTmFtZX0gZG9lcyBub3QgZXhpc3RzIGluICR7dGFyZ2V0fWApO1xuXHRcdHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wTmFtZSwgZnJvbSwgdG8sIFwiZnJvbVRvXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCB0eXBlOiBUd2VlblR5cGUsIG9wdGlvbnM/OiBPcHRpb25zKSB7XG5cdFx0dGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMuX3Byb3BOYW1lID0gcHJvcE5hbWU7XG5cdFx0dGhpcy5fZnJvbSA9IGZyb207XG5cdFx0dGhpcy5fdG8gPSB0bztcblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Li4uVHdlZW4uX2RlZmF1bHRPcHRpb25zLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH07XG5cdFx0dGhpcy5fZHVyYXRpb24gPSBvcHRpb25zPy5kdXJhdGlvbiE7XG5cdFx0dGhpcy5fZGVsYXkgPSBvcHRpb25zPy5kZWxheSE7XG5cdFx0dGhpcy5fb25Db21wbGV0ZSA9IG9wdGlvbnM/Lm9uQ29tcGxldGUhO1xuXHRcdHRoaXMuX29uVXBkYXRlID0gb3B0aW9ucz8ub25VcGRhdGUhO1xuXG5cdFx0aWYgKHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJ0b1wiOlxuXHRcdFx0XHRcdHRoaXMuX3R3ZWVuVG8oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZyb21cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlbkZyb20oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZyb21Ub1wiOlxuXHRcdFx0XHRcdHRoaXMuX3R3ZWVuRnJvbVRvKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgcHJvcDogJHt0aGlzLl9wcm9wTmFtZX0gZG9lcyBub3QgZXhpc3RzIGluICR7dGhpcy5fdGFyZ2V0fWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0IF90aW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIERhdGUubm93KCkgLyAxMDAwO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW5UbygpOiB2b2lkIHtcblx0XHRjb25zdCBmcm9tID0gdGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXTtcblx0XHRjb25zdCB0byA9IHRoaXMuX3RvO1xuXHRcdHRoaXMuX3R3ZWVuKGZyb20sIHRvKTtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuRnJvbSgpOiB2b2lkIHtcblx0XHRjb25zdCBmcm9tID0gdGhpcy5fZnJvbTtcblx0XHRjb25zdCB0byA9IHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV07XG5cdFx0dGhpcy5fdHdlZW4oZnJvbSwgdG8pO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW5Gcm9tVG8oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX2Zyb207XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90bztcblx0XHR0aGlzLl90d2Vlbihmcm9tLCB0byk7XG5cdH1cblxuXHRwcml2YXRlIF90d2VlbiA9IGFzeW5jIChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRpZiAodGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cblx0XHR0aGlzLmtpbGwoKTtcblxuXHRcdGNvbnN0IHN0YXJ0VGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0Y29uc3QgZHVyID0gdGhpcy5fZHVyYXRpb247XG5cdFx0Y29uc3QgZGVsID0gdGhpcy5fZGVsYXk7XG5cdFx0Y29uc3QgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1ciArIGRlbDtcblxuXHRcdHdoaWxlICh0aGlzLl90aW1lIDwgZW5kVGltZSkge1xuXHRcdFx0aWYgKHRoaXMuX3RpbWUgPCBzdGFydFRpbWUgKyBkZWwpIGNvbnRpbnVlO1xuXG5cdFx0XHRjb25zdCBjcnJUaW1lID0gdGhpcy5fdGltZTtcblx0XHRcdGNvbnN0IHBlcmNlbnRhZ2UgPSAoY3JyVGltZSAtIHN0YXJ0VGltZSkgLyAoZW5kVGltZSAtIHN0YXJ0VGltZSk7XG5cdFx0XHRjb25zdCB2YWwgPSAodG8gLSBmcm9tKSAqIHBlcmNlbnRhZ2UgKyBmcm9tO1xuXG5cdFx0XHR0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdID0gdmFsO1xuXHRcdFx0dGhpcy5fb25VcGRhdGUoKTtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiB7XG5cdFx0XHRcdHRoaXMuX3VwZGF0ZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLmtpbGwoKTtcblx0XHR0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdID0gdG87XG5cdFx0dGhpcy5fb25VcGRhdGUoKTtcblx0XHR0aGlzLl9vbkNvbXBsZXRlKCk7XG5cdH07XG5cblx0cHVibGljIGtpbGwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fdXBkYXRlcik7XG5cdH07XG5cbn0iLCJpbXBvcnQgQXVkaW9Ob2RlcyBmcm9tIFwiLi9hdWRpb05vZGVcIjtcbmltcG9ydCB7IFBsYXlPcHRpb25zIH0gZnJvbSBcIi4vc25kXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4vdHdlZW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVKU09OIHtcblx0cmVzb3VyY2VzOiBzdHJpbmdbXTtcblx0c3ByaXRlbWFwOiB7XG5cdFx0W2tleTogc3RyaW5nXToge1xuXHRcdFx0c3RhcnQ6IG51bWJlcjtcblx0XHRcdGVuZDogbnVtYmVyO1xuXHRcdFx0bG9vcDogYm9vbGVhbjtcblx0XHR9O1xuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGlvRGF0YSB7XG5cdGtleTogc3RyaW5nO1xuXHRub2RlczogQXVkaW9Ob2Rlcztcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuXHR2YXIgd2Via2l0QXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvU291cmNlIHtcblxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVORDogc3RyaW5nID0gXCJlbmRcIjtcblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlczogQXVkaW9Tb3VyY2VbXSA9IFtdO1xuXHRwcml2YXRlIHN0YXRpYyBfY3R4OiBBdWRpb0NvbnRleHQgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzdGF0aWMgX2lzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBfYXVkaW9BcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2F1ZGlvTGlzdDogTWFwPG51bWJlciwgQXVkaW9EYXRhPiA9IG5ldyBNYXA8bnVtYmVyLCBBdWRpb0RhdGE+KCk7XG5cdHByaXZhdGUgX2NudDogbnVtYmVyID0gMTAwMDtcblx0cHJpdmF0ZSBfanNvbjogU3ByaXRlSlNPTiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9oYXNTdGFydGVkTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9oYXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaGFzU3RhcnRlZEFuYWx5c2lzOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2hhc0FuYWx5emVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX21hc3RlclZvbHVtZTogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfYW5hbHl6ZVByb21pc2U6IFByb21pc2U8QXVkaW9CdWZmZXI+IHwgbnVsbCA9IG51bGw7XG5cblx0cHVibGljIHN0YXRpYyBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBhY3RpdmF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5faXNBY3RpdmUpIHJldHVybjtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cdFx0XHR0aGlzLl9jdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cblx0XHRcdGNvbnN0IGVtcHR5U3JjID0gdGhpcy5fY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXHRcdFx0ZW1wdHlTcmMuc3RhcnQoKTtcblx0XHRcdGVtcHR5U3JjLnN0b3AoKTtcblxuXHRcdFx0dGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLl9hbmFseXplQWxsSW5zdGFuY2VzKCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGFuIGVyciBvY2N1cnJlZCB3aGlsZSBBdWRpb1NvdXJjZS5zZXR1cCAke2Vycn1gKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBfYW5hbHl6ZUFsbEluc3RhbmNlcygpOiB2b2lkIHtcblx0XHR0aGlzLl9pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2U6IEF1ZGlvU291cmNlKSA9PiB7XG5cdFx0XHRpZiAoaW5zdGFuY2UuX2hhc0xvYWRlZCAmJiAhaW5zdGFuY2UuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0XHRpbnN0YW5jZS5hbmFseXplKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBhc3luYyBfY3JlYXRlQXVkaW9CdWZmZXIoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8QXVkaW9CdWZmZXI+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9jdHghLmRlY29kZUF1ZGlvRGF0YS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuX2N0eCEuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8QXVkaW9CdWZmZXI+KChyZXMsIHJlaikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX2N0eCEuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlcixcblx0XHRcdFx0XHRcdChkYXRhOiBBdWRpb0J1ZmZlcikgPT4gcmVzKGRhdGEpLFxuXHRcdFx0XHRcdFx0KGVycjogRXJyb3IpID0+IHJlaihlcnIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGFuIGVyciBvY2N1cmVkIHdoaWxlIEF1ZGlvU291cmNlLl9jcmVhdGVBdWRpb0J1ZmZlciAke2Vycn1gKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBhc3luYyBfY3JlYXRlQXVkaW9BcnJheUJ1ZmZlcihhdWRpb1NyYzogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhdWRpb1NyYyk7XG5cdFx0XHRjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xuXHRcdFx0cmV0dXJuIGFycmF5QnVmZmVyO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBhbiBlcnIgb2NjdXJyZWQgd2hpbGUgQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQXJyYXlCdWZmZXIgJHtlcnJ9YCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0QXVkaW9Tb3VyY2UuX2luc3RhbmNlcy5wdXNoKHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXQgX3VuaXF1ZUtleSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9jbnQrKztcblx0fVxuXG5cdHB1YmxpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2F1ZGlvTGlzdC5mb3JFYWNoKChhdWRpbzogQXVkaW9EYXRhKSA9PiB7XG5cdFx0XHRhdWRpby5ub2Rlcy5tYXN0ZXJWb2x1bWUgPSB0aGlzLl9tYXN0ZXJWb2x1bWU7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IG1hc3RlclZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgbG9hZChhdWRpb1NyYzogc3RyaW5nLCBqc29uOiBTcHJpdGVKU09OKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKHRoaXMuX2hhc1N0YXJ0ZWRMb2FkaW5nKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJUaGUgZmlsZSBoYXMgYWxyZWFkeSBzdGFydGVkIGxvYWRpbmcuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9qc29uID0ganNvbjtcblx0XHR0aGlzLl9oYXNTdGFydGVkTG9hZGluZyA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2F1ZGlvQXJyYXlCdWZmZXIgPSBhd2FpdCBBdWRpb1NvdXJjZS5fY3JlYXRlQXVkaW9BcnJheUJ1ZmZlcihhdWRpb1NyYyk7XG5cdFx0XHR0aGlzLl9oYXNMb2FkZWQgPSB0cnVlO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0aWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB0aHJvdyBlcnI7XG5cdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcInVua25vd24gZXJyb3JcIik7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGFuYWx5emUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKCFBdWRpb1NvdXJjZS5pc0FjdGl2ZSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLl9oYXNTdGFydGVkQW5hbHlzaXMpIHtcblx0XHRcdGNvbnNvbGUud2FybihcImFuYWx5emUoKTogQXVkaW9CdWZmZXIgaGFzIGFscmVhZHkgc3RhcnRlZCBhbmFseXNpc1wiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9oYXNMb2FkZWQgfHwgdGhpcy5fYXVkaW9BcnJheUJ1ZmZlciA9PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJhbmFseXplKCk6IFRoZSBmaWxlIGhhc24ndCBsb2FkZWQgeWV0LlwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9oYXNTdGFydGVkQW5hbHlzaXMgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLl9hbmFseXplUHJvbWlzZSA9IEF1ZGlvU291cmNlLl9jcmVhdGVBdWRpb0J1ZmZlcih0aGlzLl9hdWRpb0FycmF5QnVmZmVyISk7XG5cdFx0XHR0aGlzLl9hdWRpb0J1ZmZlciA9IGF3YWl0IHRoaXMuX2FuYWx5emVQcm9taXNlO1xuXHRcdFx0dGhpcy5fYW5hbHl6ZVByb21pc2UgPSBudWxsO1xuXHRcdFx0dGhpcy5faGFzQW5hbHl6ZWQgPSB0cnVlO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0aWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB0aHJvdyBlcnI7XG5cdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcInVua25vd24gZXJyb3JcIik7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHBsYXkoa2V5OiBzdHJpbmcsIG9wdGlvbnM6IFBsYXlPcHRpb25zKTogbnVtYmVyIHtcblx0XHRpZiAoIXRoaXMuX2hhc0xvYWRlZCkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwicGxheSgpOiBUaGUgZmlsZSBoYXNuJ3QgbG9hZGVkIHlldC5cIik7XG5cdFx0XHRyZXR1cm4gLTk5OTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9oYXNBbmFseXplZCkge1xuXHRcdFx0aWYgKCF0aGlzLl9oYXNTdGFydGVkQW5hbHlzaXMpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRBdWRpb1NvdXJjZS5hY3RpdmF0ZSgpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJwbGF5KCk6IENhbiBub3QgcGxheSBhdWRpbyBiZWZvcmUgaW5pdGlhbGl6YXRpb24gKEF1ZGlvQ29udGV4dCBtdXN0IGJlIGluaXRpYWxpemF0aW9uIGJ5IHBvaW50ZXIgZXZlbnQpLlwiKTtcblx0XHRcdFx0XHRyZXR1cm4gLTk5OTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fYW5hbHl6ZVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRoaXMuX3VuaXF1ZUtleTtcblx0XHRcdFx0dGhpcy5fcGxheUxhdGVyKGlkLCBrZXksIG9wdGlvbnMpO1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oKFwiX2FuYWx5emVQcm9taXNlIGlzIG51bGxcIikpO1xuXHRcdFx0XHRyZXR1cm4gLTk5OTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5fanNvbiA9PT0gbnVsbCB8fCAhdGhpcy5fanNvbi5zcHJpdGVtYXAgfHwgIShrZXkgaW4gdGhpcy5fanNvbi5zcHJpdGVtYXApKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGpzb24gZXJyb3I6ICR7dGhpcy5fanNvbn1gKTtcblx0XHR9XG5cblx0XHRpZiAoKEF1ZGlvU291cmNlLl9jdHg/LnN0YXRlIGFzIHN0cmluZykgPT0gXCJpbnRlcnJ1cHRlZFwiKSB7XG5cdFx0XHRjb25zdCBpZCA9IHRoaXMuX3VuaXF1ZUtleTtcblx0XHRcdEF1ZGlvU291cmNlLl9jdHg/LnJlc3VtZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYXkoa2V5LCBvcHRpb25zKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGlkO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdHRoaXMuX3BsYXkoaWQsIGtleSwgb3B0aW9ucyk7XG5cdFx0dGhpcy5zZXRMb29wKG9wdGlvbnMubG9vcCEsIGlkKTtcblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdHB1YmxpYyBzdG9wKGlkOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLl9hdWRpb0xpc3QuaGFzKGlkKSkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzLmF1ZGlvU3JjIS5zdG9wKEF1ZGlvU291cmNlLl9jdHghLmN1cnJlbnRUaW1lICsgZGVsYXkpO1xuXHRcdHRoaXMuX2F1ZGlvTGlzdC5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHVibGljIHNldFZvbHVtZSh2b2w6IG51bWJlciwgaWQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblxuXHRcdGNvbnN0IGF1ZGlvTm9kZXM6IEF1ZGlvTm9kZXMgPSB0aGlzLl9hdWRpb0xpc3QuZ2V0KGlkKT8ubm9kZXMhO1xuXHRcdGlmIChhdWRpb05vZGVzICE9PSBudWxsICYmIGF1ZGlvTm9kZXMudm9sdW1lICE9PSBudWxsKSBhdWRpb05vZGVzLnZvbHVtZSA9IHZvbDtcblx0fVxuXG5cdHB1YmxpYyBzZXRMb29wKGxvb3A6IGJvb2xlYW4sIGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLl9hdWRpb0xpc3QuZ2V0KGlkKT8ua2V5O1xuXHRcdGNvbnN0IGF1ZGlvTm9kZXMgPSB0aGlzLl9hdWRpb0xpc3QuZ2V0KGlkKT8ubm9kZXM7XG5cblx0XHRpZiAobG9vcCkge1xuXHRcdFx0Y29uc3Qgc3RhcnQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5IV0uc3RhcnQ7XG5cdFx0XHRjb25zdCBlbmQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5IV0uZW5kO1xuXHRcdFx0YXVkaW9Ob2RlcyEuYXVkaW9TcmMhLmxvb3AgPSB0cnVlO1xuXHRcdFx0YXVkaW9Ob2RlcyEuYXVkaW9TcmMhLmxvb3BTdGFydCA9IHN0YXJ0O1xuXHRcdFx0YXVkaW9Ob2RlcyEuYXVkaW9TcmMhLmxvb3BFbmQgPSBlbmQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGZhZGUodm9sVG86IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblx0XHRjb25zdCBhdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzO1xuXG5cdFx0YXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlczogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdFx0VHdlZW4udG8oYXVkaW9Ob2RlcywgXCJ2b2x1bWVcIiwgdm9sVG8sIHtcblx0XHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiByZXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRwdWJsaWMgZmFkZUFsbCh2b2xUbzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5fYXVkaW9MaXN0LmZvckVhY2goKF86IEF1ZGlvRGF0YSwgaWQ6IG51bWJlcikgPT4ge1xuXHRcdFx0dGhpcy5mYWRlKHZvbFRvLCAwLjUsIGlkKS50aGVuKF8gPT4gdGhpcy5zdG9wKGlkKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIF9wbGF5KGlkOiBudW1iZXIsIGtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyk6IHZvaWQge1xuXHRcdGNvbnN0IGF1ZGlvU3JjOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgPSBBdWRpb1NvdXJjZS5fY3R4IS5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblx0XHRhdWRpb1NyYyEuYnVmZmVyID0gdGhpcy5fYXVkaW9CdWZmZXI7XG5cblx0XHRjb25zdCBnYWluTm9kZSA9IEF1ZGlvU291cmNlLl9jdHghLmNyZWF0ZUdhaW4oKTtcblx0XHRjb25zdCBhdWRpb05vZGVzOiBBdWRpb05vZGVzID0gbmV3IEF1ZGlvTm9kZXMoYXVkaW9TcmMsIGdhaW5Ob2RlKTtcblx0XHRhdWRpb05vZGVzLm1hc3RlclZvbHVtZSA9IHRoaXMubWFzdGVyVm9sdW1lO1xuXHRcdGF1ZGlvTm9kZXMuY29ubmVjdChnYWluTm9kZSkuY29ubmVjdChBdWRpb1NvdXJjZS5fY3R4IS5kZXN0aW5hdGlvbik7XG5cblx0XHRjb25zdCBzdGFydCA9IHRoaXMuX2pzb24hLnNwcml0ZW1hcFtrZXldLnN0YXJ0O1xuXHRcdGNvbnN0IGVuZCA9IHRoaXMuX2pzb24hLnNwcml0ZW1hcFtrZXldLmVuZDtcblxuXHRcdGlmIChvcHRpb25zLmxvb3AhKSB7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5zdGFydChBdWRpb1NvdXJjZS5fY3R4IS5jdXJyZW50VGltZSArIG9wdGlvbnMuZGVsYXkhLCBzdGFydCwgZW5kKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBkdXIgPSBNYXRoLm1heChlbmQgLSBzdGFydCwgMC4xKTtcblx0XHRcdGF1ZGlvTm9kZXMuYXVkaW9TcmMhLnN0YXJ0KEF1ZGlvU291cmNlLl9jdHghLmN1cnJlbnRUaW1lICsgb3B0aW9ucy5kZWxheSEsIHN0YXJ0LCBkdXIpO1xuXHRcdH1cblxuXHRcdGF1ZGlvTm9kZXMuYXVkaW9TcmMhLm9uZW5kZWQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnN0b3AoaWQpO1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuZGlzY29ubmVjdCgpO1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuYnVmZmVyID0gbnVsbDtcblx0XHRcdG9wdGlvbnMuY2FsbGJhY2shKGlkKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5fYXVkaW9MaXN0LnNldChpZCwge1xuXHRcdFx0a2V5LFxuXHRcdFx0bm9kZXM6IGF1ZGlvTm9kZXMsXG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIF9wbGF5TGF0ZXIoaWQ6IG51bWJlciwga2V5OiBzdHJpbmcsIG9wdGlvbnM6IFBsYXlPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5fYW5hbHl6ZVByb21pc2UhO1xuXHRcdHRoaXMuX3BsYXkoaWQsIGtleSwgb3B0aW9ucyk7XG5cdH1cbn0iLCJpbXBvcnQgeyBLSVRfSU5GTyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgQXVkaW9Tb3VyY2UgZnJvbSBcIi4vYXVkaW9Tb3VyY2VcIjtcbmltcG9ydCB7IFBsYXlPcHRpb25zIH0gZnJvbSBcIi4vc25kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kS2l0IHtcblxuXHRwdWJsaWMga2V5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2lkczogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgX2F1ZGlvU3JjOiBBdWRpb1NvdXJjZSA9IG5ldyBBdWRpb1NvdXJjZSgpO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2F1ZGlvU3JjLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IGpzb24gPSBLSVRfSU5GT1t0aGlzLmtleV0uanNvbjtcblx0XHRjb25zdCBhdWRpb1NyYyA9IEtJVF9JTkZPW3RoaXMua2V5XS5hdWRpb1NyYztcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdGhpcy5fYXVkaW9TcmMubG9hZChhdWRpb1NyYywganNvbik7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGFuYWx5emUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMuX2F1ZGlvU3JjLmFuYWx5emUoKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRJZCA9IHRoaXMuX2lkcy5nZXQoa2V5KTtcblx0XHRpZiAob2xkSWQgIT09IHVuZGVmaW5lZCkgdGhpcy5fYXVkaW9TcmMuZmFkZSgwLCAwLjA1LCBvbGRJZCk7XG5cblx0XHRjb25zdCBpZCA9IHRoaXMuX2F1ZGlvU3JjLnBsYXkoa2V5LCBvcHRpb25zKTtcblx0XHRjb25zdCBmYWRlb3V0RHVyYXRpb246IG51bWJlciA9IDAuMDU7XG5cdFx0aWYgKG9wdGlvbnMuZHVyYXRpb24hID4gZmFkZW91dER1cmF0aW9uKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5fYXVkaW9TcmMuZmFkZSgwLCBmYWRlb3V0RHVyYXRpb24sIGlkKTtcblx0XHRcdH0sIChvcHRpb25zLmR1cmF0aW9uISAtIGZhZGVvdXREdXJhdGlvbikgKiAxMDAwKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pZHMuc2V0KGtleSwgaWQpO1xuXHR9XG5cblx0cHVibGljIHN0b3Aoc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGlkID0gdGhpcy5faWRzLmdldChzb3VuZEtleSk7XG5cdFx0aWYgKGlkKSB0aGlzLl9hdWRpb1NyYy5zdG9wKGlkKTtcblx0XHRlbHNlIGNvbnNvbGUud2FybihgW1NvdW5kS2l0LnN0b3AoKV0ga2V5OiAke3NvdW5kS2V5fSBoYXZlbid0IHBsYXllZGApO1xuXHR9XG5cblx0cHVibGljIGZhZGUodm9sVG86IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuX2F1ZGlvU3JjLmZhZGVBbGwodm9sVG8pO1xuXHR9XG5cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgRVZFTlRfQ0xBU1NfTkFNRVMsIFRPR0dMRV9TT1VORF9LRVlTLCBFTkFCTEVfVEFHUyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmNvbnN0IGlzVG91Y2hEZXZpY2U6IGJvb2xlYW4gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01JbnRlcmFjdGlvbiBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJTlRFUkFDVDogXCJpbnRlcmFjdFwiXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuX2luaXQoKVxuXHR9XG5cblx0cHJpdmF0ZSBfaW5pdCgpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBFVkVOVF9DTEFTU19OQU1FUykge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gRVZFTlRfQ0xBU1NfTkFNRVNba2V5XVxuXHRcdFx0Y29uc3QgZWxlbWVudHM6IEhUTUxDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpXG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZWwgPSBlbGVtZW50c1tpXVxuXHRcdFx0XHRjb25zdCBzb3VuZEtleSA9IGtleS5yZXBsYWNlKFwic25kX19cIiwgXCJcIilcblx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gdGhpcy5fZ2V0RXZlbnROYW1lKHNvdW5kS2V5LCBlbCBhcyBIVE1MRWxlbWVudClcblx0XHRcdFx0aWYgKGV2ZW50TmFtZSA9PSBudWxsKSBicmVha1xuXG5cdFx0XHRcdHRoaXMuX2xpc3RlbihlbCBhcyBIVE1MRWxlbWVudCwgZXZlbnROYW1lLCBzb3VuZEtleSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9nZXRFdmVudE5hbWUoc291bmRLZXk6IHN0cmluZywgZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcblxuXHRcdGZvciAoY29uc3QgdGFnU3RyaW5nIGluIEVOQUJMRV9UQUdTKSB7XG5cblx0XHRcdGlmICh0YWdOYW1lID09IFwiaW5wdXRcIiAmJiB0YWdTdHJpbmcubWF0Y2goXCJpbnB1dFwiKSAhPSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSAoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlIHx8IFwiXCJcblx0XHRcdFx0Y29uc3QgdHlwZXMgPSB0YWdTdHJpbmcuc3BsaXQoXCI6XCIpWzFdLnNwbGl0KFwiLFwiKVxuXHRcdFx0XHRmb3IgKGNvbnN0IGV2ZW50IGluIEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpIGluIHR5cGVzKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZSAhPSB0eXBlc1tpXSkgY29udGludWVcblx0XHRcdFx0XHRcdGNvbnN0IHNvdW5kcyA9IEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzW2V2ZW50XS5zcGxpdChcIixcIilcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgaiBpbiBzb3VuZHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNvdW5kS2V5ID09IHNvdW5kc1tqXSkgcmV0dXJuIGV2ZW50XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGFnU3RyaW5nID09IHRhZ05hbWUgfHwgdGFnU3RyaW5nID09IFwiYW55XCIpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGV2ZW50IGluIEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzb3VuZHMgPSBFTkFCTEVfVEFHU1t0YWdTdHJpbmddLmV2ZW50c1tldmVudF0uc3BsaXQoXCIsXCIpXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGkgaW4gc291bmRzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzb3VuZEtleSA9PSBzb3VuZHNbaV0pIHJldHVybiBldmVudFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRwcml2YXRlIF9saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBzb3VuZEtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IHRoaXMuX3Byb2Nlc3MoZSwgZXZlbnROYW1lLCBzb3VuZEtleSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBfcHJvY2VzcyhlOiBFdmVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuXHRcdGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgc25kX18ke3NvdW5kS2V5fWApKSByZXR1cm5cblx0XHRpZiAoc291bmRLZXkgPT0gXCJ0b2dnbGVcIikge1xuXHRcdFx0c291bmRLZXkgPSAodGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPyBUT0dHTEVfU09VTkRfS0VZU1swXSA6IFRPR0dMRV9TT1VORF9LRVlTWzFdXG5cdFx0fVxuXG5cdFx0dGhpcy5fZW1pdCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQsIGV2ZW50TmFtZSwgc291bmRLZXkpXG5cdH1cblxuXHRwcml2YXRlIF9lbWl0KERPTTogSFRNTEVsZW1lbnQsIGV2ZW50OiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm11dGVkXCIpKSByZXR1cm5cblx0XHR0aGlzLmVtaXQoRE9NSW50ZXJhY3Rpb24uSU5URVJBQ1QsIHNvdW5kS2V5KVxuXHR9XG5cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIjtcbmltcG9ydCB7IEtpdEtpbmRzLCBLSVRTLCBTT1VORFMsIFNXSVBFX1NPVU5EX0tFWVMsIFRBUF9TT1VORF9LRVlTLCBUWVBFX1NPVU5EX0tFWVMgfSBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IFNvdW5kS2l0IGZyb20gXCIuL3NvdW5kS2l0XCI7XG5pbXBvcnQgRE9NSW50ZXJhY3Rpb24gZnJvbSBcIi4vZG9tSW50ZXJhY3Rpb25cIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi90d2VlblwiO1xuaW1wb3J0IEF1ZGlvU291cmNlIGZyb20gXCIuL2F1ZGlvU291cmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU25kT3B0aW9ucyB7XG5cdGVhc3lTZXR1cD86IGJvb2xlYW47XG5cdG11dGVPbldpbmRvd0JsdXI/OiBib29sZWFuO1xuXHRwcmVsb2FkU291bmRLaXQ/OiBudWxsIHwgS2l0S2luZHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheU9wdGlvbnMge1xuXHRsb29wPzogYm9vbGVhbjtcblx0dm9sdW1lPzogbnVtYmVyO1xuXHRkdXJhdGlvbj86IG51bWJlcjtcblx0ZGVsYXk/OiBudW1iZXI7XG5cdGNhbGxiYWNrPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuZCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDSEFOR0VfU09VTkRfS0lUOiBzdHJpbmcgPSBcImNoYW5nZV9zb3VuZF9raXRcIjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTT1VORFMgPSBTT1VORFM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS0lUUyA9IEtJVFM7XG5cblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlczogU25kW10gPSBbXTtcblx0cHJpdmF0ZSBzdGF0aWMgX2luaXRpYWxpemVkU291bmRLaXRzOiBNYXA8c3RyaW5nLCBTb3VuZEtpdD4gPSBuZXcgTWFwPHN0cmluZywgU291bmRLaXQ+KCk7XG5cdHByaXZhdGUgc3RhdGljIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBfc291bmRLaXQ6IFNvdW5kS2l0ID0gbmV3IFNvdW5kS2l0KEtJVFMuU05EMDEpO1xuXHRwcml2YXRlIF9kb206IERPTUludGVyYWN0aW9uIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3ZvbDogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfaXNNdXRlZEJ5RGV2ZWxvcGVyOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2lzTXV0ZWRCeVdpbmRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9pc1dpbmRvd0JsdXJyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfbXV0ZU9uV2luZG93Qmx1cjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9mYWRlVm9sOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF93aW5kb3dWb2w6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyOiBUd2VlbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50OiBUd2VlbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdE9wdGlvbnM6IFNuZE9wdGlvbnMgPSB7XG5cdFx0bXV0ZU9uV2luZG93Qmx1cjogdHJ1ZSxcblx0XHRlYXN5U2V0dXA6IGZhbHNlLFxuXHRcdHByZWxvYWRTb3VuZEtpdDogbnVsbCxcblx0fTtcblx0cHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRQbGF5T3B0aW9uczogUGxheU9wdGlvbnMgPSB7XG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0dm9sdW1lOiAxLFxuXHRcdGRlbGF5OiAwLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0XHRjYWxsYmFjazogKCkgPT4geyB9XG5cdH07XG5cblx0cHVibGljIHN0YXRpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7IH1cblx0cHVibGljIHN0YXRpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZTogU25kKSA9PiB7XG5cdFx0XHRpbnN0YW5jZS5fc291bmRLaXQubWFzdGVyVm9sdW1lID0gdGhpcy5fbWFzdGVyVm9sdW1lICogaW5zdGFuY2UuX3ZvbHVtZTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBTbmRPcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRcdFNuZC5faW5zdGFuY2VzLnB1c2godGhpcyk7XG5cblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Li4uU25kLl9kZWZhdWx0T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0fTtcblx0XHR0aGlzLl9tdXRlT25XaW5kb3dCbHVyID0gb3B0aW9ucy5tdXRlT25XaW5kb3dCbHVyIHx8IGZhbHNlO1xuXG5cdFx0aWYgKG9wdGlvbnM/LmVhc3lTZXR1cCkge1xuXHRcdFx0dGhpcy5fZG9tID0gbmV3IERPTUludGVyYWN0aW9uKCk7XG5cdFx0XHR0aGlzLl9kb20ub24oRE9NSW50ZXJhY3Rpb24uSU5URVJBQ1QsIHRoaXMuX29uSW50ZXJhY3QpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5wcmVsb2FkU291bmRLaXQpIHRoaXMubG9hZChvcHRpb25zLnByZWxvYWRTb3VuZEtpdCk7XG5cblx0XHRjb25zdCBpbml0QXVkaW9Db250ZXh0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0QXVkaW9Tb3VyY2UuYWN0aXZhdGUoKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdEF1ZGlvQ29udGV4dCk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaW5pdEF1ZGlvQ29udGV4dCk7XG5cdFx0fTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRBdWRpb0NvbnRleHQsIHsgb25jZTogdHJ1ZSB9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaW5pdEF1ZGlvQ29udGV4dCwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cdFx0Y29uc3QgaXNTcCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxBbmRyb2lkLitNb2JpbGUvKSAhPSBudWxsO1xuXHRcdGlmIChpc1NwKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuX29uQmx1cik7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuX29uRm9jdXMpO1xuXHRcdH1cblxuXHR9XG5cblx0cHVibGljIGdldCBraXQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3NvdW5kS2l0LmtleTsgfVxuXHRwdWJsaWMgZ2V0IGlzTXV0ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc011dGVkQnlEZXZlbG9wZXIgfHwgdGhpcy5faXNNdXRlZEJ5V2luZG93OyB9XG5cdHB1YmxpYyBnZXQgaXNXaW5kb3dCbHVycmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNXaW5kb3dCbHVycmVkOyB9XG5cblx0cHJpdmF0ZSBnZXQgX2ZhZGVWb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ZhZGVWb2w7IH1cblx0cHJpdmF0ZSBzZXQgX2ZhZGVWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9mYWRlVm9sID0gdmFsO1xuXHRcdHRoaXMuX3ZvbHVtZSA9IHRoaXMuX2ZhZGVWb2wgKiB0aGlzLl93aW5kb3dWb2x1bWU7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfd2luZG93Vm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aW5kb3dWb2w7IH1cblx0cHJpdmF0ZSBzZXQgX3dpbmRvd1ZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX3dpbmRvd1ZvbCA9IHZhbDtcblx0XHR0aGlzLl92b2x1bWUgPSB0aGlzLl9mYWRlVm9sdW1lICogdGhpcy5fd2luZG93Vm9sO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXQgX3ZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl92b2w7XG5cdH1cblx0cHJpdmF0ZSBzZXQgX3ZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX3ZvbCA9IHZhbDtcblx0XHR0aGlzLl9zb3VuZEtpdC5tYXN0ZXJWb2x1bWUgPSB0aGlzLl92b2wgKiBTbmQuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKHNvdW5kS2l0S2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLl9zb3VuZEtpdC5mYWRlKDApO1xuXHRcdGNvbnN0IG9sZEtleSA9IHRoaXMuX3NvdW5kS2l0LmtleTtcblx0XHRjb25zdCBraXQgPSBTbmQuX2luaXRpYWxpemVkU291bmRLaXRzLmdldChzb3VuZEtpdEtleSk7XG5cblx0XHRpZiAoa2l0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IG5ld0tpdCA9IG5ldyBTb3VuZEtpdChzb3VuZEtpdEtleSk7XG5cdFx0XHRTbmQuX2luaXRpYWxpemVkU291bmRLaXRzLnNldChzb3VuZEtpdEtleSwgbmV3S2l0KTtcblx0XHRcdGF3YWl0IG5ld0tpdC5sb2FkKCk7XG5cdFx0XHRhd2FpdCBuZXdLaXQuYW5hbHl6ZSgpO1xuXHRcdFx0dGhpcy5fc291bmRLaXQgPSBuZXdLaXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NvdW5kS2l0ID0ga2l0O1xuXHRcdH1cblxuXHRcdHRoaXMuX3NvdW5kS2l0LmZhZGUoMSk7XG5cdFx0Y29uc3QgY3JyS2V5ID0gdGhpcy5fc291bmRLaXQua2V5O1xuXHRcdGlmIChvbGRLZXkgIT09IGNycktleSkgdGhpcy5lbWl0KFNuZC5DSEFOR0VfU09VTkRfS0lULCBjcnJLZXksIG9sZEtleSk7XG5cdH1cblxuXHRwdWJsaWMgcGxheShzb3VuZEtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlNuZC5fZGVmYXVsdFBsYXlPcHRpb25zLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH07XG5cdFx0aWYgKHRoaXMuaXNXaW5kb3dCbHVycmVkKSByZXR1cm47XG5cdFx0aWYgKHNvdW5kS2V5ID09PSBTT1VORFMuVEFQKSByZXR1cm4gdGhpcy5wbGF5VGFwKG9wdGlvbnMpO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlRZUEUpIHJldHVybiB0aGlzLnBsYXlUeXBlKG9wdGlvbnMpO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlNXSVBFKSByZXR1cm4gdGhpcy5wbGF5U3dpcGUob3B0aW9ucyk7XG5cblx0XHR0aGlzLl9zb3VuZEtpdC5wbGF5KHNvdW5kS2V5LCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBzdG9wKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5fc291bmRLaXQuc3RvcChrZXkpO1xuXHR9XG5cblx0cHVibGljIG11dGUoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5RGV2ZWxvcGVyID0gdHJ1ZTtcblx0XHR0aGlzLl9mYWRlQnlEZXZlbG9wZXIoMCwgMC4zKTtcblx0fVxuXG5cdHB1YmxpYyB1bm11dGUoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5RGV2ZWxvcGVyID0gZmFsc2U7XG5cdFx0dGhpcy5fZmFkZUJ5RGV2ZWxvcGVyKDEsIDAuMyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRhcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5fcGxheVJhbmRvbShUQVBfU09VTkRfS0VZUywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVN3aXBlKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLl9wbGF5UmFuZG9tKFNXSVBFX1NPVU5EX0tFWVMsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUeXBlKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLl9wbGF5UmFuZG9tKFRZUEVfU09VTkRfS0VZUywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheUJ1dHRvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuQlVUVE9OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5Q2F1dGlvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuQ0FVVElPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheUNlbGVicmF0aW9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5DRUxFQlJBVElPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheURpc2FibGVkKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5ESVNBQkxFRCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheU5vdGlmaWNhdGlvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuTk9USUZJQ0FUSU9OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5UHJvZ3Jlc3NMb29wKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5QUk9HUkVTU19MT09QLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5UmluZ3RvbmVMb29wKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5SSU5HVE9ORV9MT09QLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5U2VsZWN0KG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5TRUxFQ1QsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUcmFuc2l0aW9uVXAob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRSQU5TSVRJT05fVVAsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUcmFuc2l0aW9uRG93bihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuVFJBTlNJVElPTl9ET1dOLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VG9nZ2xlT24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRPR0dMRV9PTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRvZ2dsZU9mZihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuVE9HR0xFX09GRiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwcml2YXRlIF9wbGF5UmFuZG9tKGtleXM6IHN0cmluZ1tdLCBvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KGtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpXSwgb3B0aW9ucyk7XG5cdH1cblxuXHRwcml2YXRlIF9vblZpc2liaWxpdHlDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG5cdFx0d2luZG93LmRvY3VtZW50LmhpZGRlbiA/IHRoaXMuX29uQmx1cigpIDogdGhpcy5fb25Gb2N1cygpO1xuXHR9O1xuXG5cdHByaXZhdGUgX29uQmx1ciA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAodGhpcy5fbXV0ZU9uV2luZG93Qmx1cikgdGhpcy5fbXV0ZU9uQmx1cigpO1xuXHRcdHRoaXMuX2lzV2luZG93Qmx1cnJlZCA9IHRydWU7XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Gb2N1cyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAodGhpcy5fbXV0ZU9uV2luZG93Qmx1cikgdGhpcy5fdW5tdXRlT25Gb2N1cygpO1xuXHRcdHRoaXMuX2lzV2luZG93Qmx1cnJlZCA9IGZhbHNlO1xuXHR9O1xuXG5cdHByaXZhdGUgX211dGVPbkJsdXIoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5V2luZG93ID0gdHJ1ZTtcblx0XHR0aGlzLl9mYWRlQnlXaW5kb3dFdmVudCgwLCAwLjMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfdW5tdXRlT25Gb2N1cygpOiB2b2lkIHtcblx0XHR0aGlzLl9pc011dGVkQnlXaW5kb3cgPSBmYWxzZTtcblx0XHR0aGlzLl9mYWRlQnlXaW5kb3dFdmVudCgxLCAwLjMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBfZmFkZUJ5RGV2ZWxvcGVyKHZvbHVtZVRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5fZmFkZVR3ZWVuQnlEZXZlbG9wZXIgIT0gbnVsbCkgdGhpcy5fZmFkZVR3ZWVuQnlEZXZlbG9wZXIua2lsbCgpO1xuXHRcdHRoaXMuX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyID0gVHdlZW4udG8odGhpcywgXCJfZmFkZVZvbHVtZVwiLCB2b2x1bWVUbywgeyBkdXJhdGlvbiB9KTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX2ZhZGVCeVdpbmRvd0V2ZW50KHZvbHVtZVRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5fZmFkZVR3ZWVuQnlXaW5kb3dFdmVudCAhPSBudWxsKSB0aGlzLl9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50LmtpbGwoKTtcblx0XHR0aGlzLl9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50ID0gVHdlZW4udG8odGhpcywgXCJfd2luZG93Vm9sdW1lXCIsIHZvbHVtZVRvLCB7IGR1cmF0aW9uIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfb25JbnRlcmFjdCA9IChldmVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0dGhpcy5wbGF5KGV2ZW50KTtcblx0fTtcblxufSIsImltcG9ydCBTbmQgZnJvbSBcIi4vc25kXCI7XG5leHBvcnQgZGVmYXVsdCBTbmQ7Il0sIm5hbWVzIjpbImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19leHRlbmRzIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsIl9fbWV0YWRhdGEiLCJtZXRhZGF0YUtleSIsIm1ldGFkYXRhVmFsdWUiLCJtZXRhZGF0YSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwicG9wIiwicHVzaCIsIl9fY3JlYXRlQmluZGluZyIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXhwb3J0U3RhciIsIl9fdmFsdWVzIiwiX19yZWFkIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkIiwiY29uY2F0IiwiX19zcHJlYWRBcnJheXMiLCJpbCIsImEiLCJqIiwiamwiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJzbGljZSIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJzZXR0bGUiLCJmdWxmaWxsIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19lc01vZHVsZSIsIl9faW1wb3J0RGVmYXVsdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImhhcyIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJzZXQiLCJSIiwiUmVmbGVjdEFwcGx5IiwiYXJncyIsIkZ1bmN0aW9uIiwiUmVmbGVjdE93bktleXMiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIlByb2Nlc3NFbWl0V2FybmluZyIsIndhcm5pbmciLCJjb25zb2xlIiwid2FybiIsIk51bWJlcklzTmFOIiwiTnVtYmVyIiwiaXNOYU4iLCJFdmVudEVtaXR0ZXIiLCJpbml0IiwiZXZlbnRzTW9kdWxlIiwib25jZSIsIl9ldmVudHMiLCJfZXZlbnRzQ291bnQiLCJfbWF4TGlzdGVuZXJzIiwiZGVmYXVsdE1heExpc3RlbmVycyIsImNoZWNrTGlzdGVuZXIiLCJsaXN0ZW5lciIsImFyZyIsIlJhbmdlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsInNldE1heExpc3RlbmVycyIsIl9nZXRNYXhMaXN0ZW5lcnMiLCJ0aGF0IiwiZ2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsInR5cGUiLCJkb0Vycm9yIiwiZXZlbnRzIiwiZXIiLCJFcnJvciIsImVyciIsIm1lc3NhZ2UiLCJjb250ZXh0IiwiaGFuZGxlciIsImxlbiIsImxpc3RlbmVycyIsImFycmF5Q2xvbmUiLCJfYWRkTGlzdGVuZXIiLCJwcmVwZW5kIiwiZXhpc3RpbmciLCJuZXdMaXN0ZW5lciIsInVuc2hpZnQiLCJ3YXJuZWQiLCJ3IiwibmFtZSIsImVtaXR0ZXIiLCJjb3VudCIsImFkZExpc3RlbmVyIiwib24iLCJwcmVwZW5kTGlzdGVuZXIiLCJvbmNlV3JhcHBlciIsImZpcmVkIiwicmVtb3ZlTGlzdGVuZXIiLCJ3cmFwRm4iLCJfb25jZVdyYXAiLCJ3cmFwcGVkIiwiYmluZCIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0IiwicG9zaXRpb24iLCJvcmlnaW5hbExpc3RlbmVyIiwic3BsaWNlT25lIiwib2ZmIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwia2V5cyIsIl9saXN0ZW5lcnMiLCJ1bndyYXAiLCJldmxpc3RlbmVyIiwidW53cmFwTGlzdGVuZXJzIiwicmF3TGlzdGVuZXJzIiwibGlzdGVuZXJDb3VudCIsImV2ZW50TmFtZXMiLCJhcnIiLCJjb3B5IiwiaW5kZXgiLCJyZXQiLCJlcnJvckxpc3RlbmVyIiwicmVzb2x2ZXIiLCJldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIiLCJhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlciIsImZsYWdzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndyYXBMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0d2Vlbl8xIiwiYXVkaW9Tb3VyY2VfMSIsImNvbnN0YW50XzEiLCJldmVudHNfMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7O0NBQ0E7Q0FFQSxJQUFJQSxjQUFhLEdBQUcsdUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0NBQy9CRixFQUFBQSxjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUNYO0NBQUVDLElBQUFBLFNBQVMsRUFBRTtDQUFiLGVBQTZCQyxLQUE3QixJQUFzQyxVQUFVTCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7Q0FBRUQsSUFBQUEsQ0FBQyxDQUFDSSxTQUFGLEdBQWNILENBQWQ7Q0FBa0IsR0FEL0QsSUFFWixVQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7Q0FBRSxTQUFLLElBQUlLLENBQVQsSUFBY0wsQ0FBZDtDQUFpQixVQUFJQyxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUosRUFBZ0ROLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQU9MLENBQUMsQ0FBQ0ssQ0FBRCxDQUFSO0NBQWpFO0NBQStFLEdBRnJHOztDQUdBLFNBQU9QLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXBCO0NBQ0gsQ0FMRDs7Q0FPTyxTQUFTUyxTQUFULENBQW1CVixDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUI7Q0FDNUIsTUFBSSxPQUFPQSxDQUFQLEtBQWEsVUFBYixJQUEyQkEsQ0FBQyxLQUFLLElBQXJDLEVBQ0ksTUFBTSxJQUFJVSxTQUFKLENBQWMseUJBQXlCQyxNQUFNLENBQUNYLENBQUQsQ0FBL0IsR0FBcUMsK0JBQW5ELENBQU47O0NBQ0pGLEVBQUFBLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQWI7O0NBQ0EsV0FBU1ksRUFBVCxHQUFjO0NBQUUsU0FBS0MsV0FBTCxHQUFtQmQsQ0FBbkI7Q0FBdUI7O0NBQ3ZDQSxFQUFBQSxDQUFDLENBQUNPLFNBQUYsR0FBY04sQ0FBQyxLQUFLLElBQU4sR0FBYUMsTUFBTSxDQUFDYSxNQUFQLENBQWNkLENBQWQsQ0FBYixJQUFpQ1ksRUFBRSxDQUFDTixTQUFILEdBQWVOLENBQUMsQ0FBQ00sU0FBakIsRUFBNEIsSUFBSU0sRUFBSixFQUE3RCxDQUFkO0NBQ0g7O0NBRU0sSUFBSUcsT0FBUSxHQUFHLG9CQUFXO0NBQzdCQSxFQUFBQSxPQUFRLEdBQUdkLE1BQU0sQ0FBQ2UsTUFBUCxJQUFpQixTQUFTRCxRQUFULENBQWtCRSxDQUFsQixFQUFxQjtDQUM3QyxTQUFLLElBQUlDLENBQUosRUFBT0MsQ0FBQyxHQUFHLENBQVgsRUFBY0MsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQWpDLEVBQXlDSCxDQUFDLEdBQUdDLENBQTdDLEVBQWdERCxDQUFDLEVBQWpELEVBQXFEO0NBQ2pERCxNQUFBQSxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBRCxDQUFiOztDQUNBLFdBQUssSUFBSWQsQ0FBVCxJQUFjYSxDQUFkO0NBQWlCLFlBQUlqQixNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1UsQ0FBckMsRUFBd0NiLENBQXhDLENBQUosRUFBZ0RZLENBQUMsQ0FBQ1osQ0FBRCxDQUFELEdBQU9hLENBQUMsQ0FBQ2IsQ0FBRCxDQUFSO0NBQWpFO0NBQ0g7O0NBQ0QsV0FBT1ksQ0FBUDtDQUNILEdBTkQ7O0NBT0EsU0FBT0YsT0FBUSxDQUFDUSxLQUFULENBQWUsSUFBZixFQUFxQkYsU0FBckIsQ0FBUDtDQUNILENBVE07Q0FXQSxTQUFTRyxNQUFULENBQWdCTixDQUFoQixFQUFtQk8sQ0FBbkIsRUFBc0I7Q0FDekIsTUFBSVIsQ0FBQyxHQUFHLEVBQVI7O0NBQ0EsT0FBSyxJQUFJWixDQUFULElBQWNhLENBQWQ7Q0FBaUIsUUFBSWpCLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDVSxDQUFyQyxFQUF3Q2IsQ0FBeEMsS0FBOENvQixDQUFDLENBQUNDLE9BQUYsQ0FBVXJCLENBQVYsSUFBZSxDQUFqRSxFQUNiWSxDQUFDLENBQUNaLENBQUQsQ0FBRCxHQUFPYSxDQUFDLENBQUNiLENBQUQsQ0FBUjtDQURKOztDQUVBLE1BQUlhLENBQUMsSUFBSSxJQUFMLElBQWEsT0FBT2pCLE1BQU0sQ0FBQzBCLHFCQUFkLEtBQXdDLFVBQXpELEVBQ0ksS0FBSyxJQUFJUixDQUFDLEdBQUcsQ0FBUixFQUFXZCxDQUFDLEdBQUdKLE1BQU0sQ0FBQzBCLHFCQUFQLENBQTZCVCxDQUE3QixDQUFwQixFQUFxREMsQ0FBQyxHQUFHZCxDQUFDLENBQUNpQixNQUEzRCxFQUFtRUgsQ0FBQyxFQUFwRSxFQUF3RTtDQUNwRSxRQUFJTSxDQUFDLENBQUNDLE9BQUYsQ0FBVXJCLENBQUMsQ0FBQ2MsQ0FBRCxDQUFYLElBQWtCLENBQWxCLElBQXVCbEIsTUFBTSxDQUFDSyxTQUFQLENBQWlCc0Isb0JBQWpCLENBQXNDcEIsSUFBdEMsQ0FBMkNVLENBQTNDLEVBQThDYixDQUFDLENBQUNjLENBQUQsQ0FBL0MsQ0FBM0IsRUFDSUYsQ0FBQyxDQUFDWixDQUFDLENBQUNjLENBQUQsQ0FBRixDQUFELEdBQVVELENBQUMsQ0FBQ2IsQ0FBQyxDQUFDYyxDQUFELENBQUYsQ0FBWDtDQUNQO0NBQ0wsU0FBT0YsQ0FBUDtDQUNIO0NBRU0sU0FBU1ksVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0NDLE1BQWhDLEVBQXdDQyxHQUF4QyxFQUE2Q0MsSUFBN0MsRUFBbUQ7Q0FDdEQsTUFBSUMsQ0FBQyxHQUFHYixTQUFTLENBQUNDLE1BQWxCO0NBQUEsTUFBMEJhLENBQUMsR0FBR0QsQ0FBQyxHQUFHLENBQUosR0FBUUgsTUFBUixHQUFpQkUsSUFBSSxLQUFLLElBQVQsR0FBZ0JBLElBQUksR0FBR2hDLE1BQU0sQ0FBQ21DLHdCQUFQLENBQWdDTCxNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0NBQUEsTUFBMkhsQyxDQUEzSDtDQUNBLE1BQUksUUFBT3NDLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBTyxDQUFDQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFSCxDQUFDLEdBQUdFLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlIsVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSWQsQ0FBQyxHQUFHVyxVQUFVLENBQUNSLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NILENBQUMsSUFBSSxDQUF6QyxFQUE0Q0EsQ0FBQyxFQUE3QztDQUFpRCxRQUFJcEIsQ0FBQyxHQUFHK0IsVUFBVSxDQUFDWCxDQUFELENBQWxCLEVBQXVCZ0IsQ0FBQyxHQUFHLENBQUNELENBQUMsR0FBRyxDQUFKLEdBQVFuQyxDQUFDLENBQUNvQyxDQUFELENBQVQsR0FBZUQsQ0FBQyxHQUFHLENBQUosR0FBUW5DLENBQUMsQ0FBQ2dDLE1BQUQsRUFBU0MsR0FBVCxFQUFjRyxDQUFkLENBQVQsR0FBNEJwQyxDQUFDLENBQUNnQyxNQUFELEVBQVNDLEdBQVQsQ0FBN0MsS0FBK0RHLENBQW5FO0NBQXhFO0NBQ0wsU0FBT0QsQ0FBQyxHQUFHLENBQUosSUFBU0MsQ0FBVCxJQUFjbEMsTUFBTSxDQUFDc0MsY0FBUCxDQUFzQlIsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DRyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtDQUNIO0NBRU0sU0FBU0ssT0FBVCxDQUFpQkMsVUFBakIsRUFBNkJDLFNBQTdCLEVBQXdDO0NBQzNDLFNBQU8sVUFBVVgsTUFBVixFQUFrQkMsR0FBbEIsRUFBdUI7Q0FBRVUsSUFBQUEsU0FBUyxDQUFDWCxNQUFELEVBQVNDLEdBQVQsRUFBY1MsVUFBZCxDQUFUO0NBQXFDLEdBQXJFO0NBQ0g7Q0FFTSxTQUFTRSxVQUFULENBQW9CQyxXQUFwQixFQUFpQ0MsYUFBakMsRUFBZ0Q7Q0FDbkQsTUFBSSxRQUFPUixPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ1MsUUFBZixLQUE0QixVQUEvRCxFQUEyRSxPQUFPVCxPQUFPLENBQUNTLFFBQVIsQ0FBaUJGLFdBQWpCLEVBQThCQyxhQUE5QixDQUFQO0NBQzlFO0NBRU0sU0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLFVBQTVCLEVBQXdDQyxDQUF4QyxFQUEyQ0MsU0FBM0MsRUFBc0Q7Q0FDekQsV0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0NBQUUsV0FBT0EsS0FBSyxZQUFZSCxDQUFqQixHQUFxQkcsS0FBckIsR0FBNkIsSUFBSUgsQ0FBSixDQUFNLFVBQVVJLE9BQVYsRUFBbUI7Q0FBRUEsTUFBQUEsT0FBTyxDQUFDRCxLQUFELENBQVA7Q0FBaUIsS0FBNUMsQ0FBcEM7Q0FBb0Y7O0NBQzVHLFNBQU8sS0FBS0gsQ0FBQyxLQUFLQSxDQUFDLEdBQUdLLE9BQVQsQ0FBTixFQUF5QixVQUFVRCxPQUFWLEVBQW1CRSxNQUFuQixFQUEyQjtDQUN2RCxhQUFTQyxTQUFULENBQW1CSixLQUFuQixFQUEwQjtDQUFFLFVBQUk7Q0FBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUNRLElBQVYsQ0FBZU4sS0FBZixDQUFELENBQUo7Q0FBOEIsT0FBcEMsQ0FBcUMsT0FBTzVCLENBQVAsRUFBVTtDQUFFK0IsUUFBQUEsTUFBTSxDQUFDL0IsQ0FBRCxDQUFOO0NBQVk7Q0FBRTs7Q0FDM0YsYUFBU21DLFFBQVQsQ0FBa0JQLEtBQWxCLEVBQXlCO0NBQUUsVUFBSTtDQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUJFLEtBQW5CLENBQUQsQ0FBSjtDQUFrQyxPQUF4QyxDQUF5QyxPQUFPNUIsQ0FBUCxFQUFVO0NBQUUrQixRQUFBQSxNQUFNLENBQUMvQixDQUFELENBQU47Q0FBWTtDQUFFOztDQUM5RixhQUFTaUMsSUFBVCxDQUFjRyxNQUFkLEVBQXNCO0NBQUVBLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjUixPQUFPLENBQUNPLE1BQU0sQ0FBQ1IsS0FBUixDQUFyQixHQUFzQ0QsS0FBSyxDQUFDUyxNQUFNLENBQUNSLEtBQVIsQ0FBTCxDQUFvQlUsSUFBcEIsQ0FBeUJOLFNBQXpCLEVBQW9DRyxRQUFwQyxDQUF0QztDQUFzRjs7Q0FDOUdGLElBQUFBLElBQUksQ0FBQyxDQUFDUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQzVCLEtBQVYsQ0FBZ0J5QixPQUFoQixFQUF5QkMsVUFBVSxJQUFJLEVBQXZDLENBQWIsRUFBeURVLElBQXpELEVBQUQsQ0FBSjtDQUNILEdBTE0sQ0FBUDtDQU1IO0NBRU0sU0FBU0ssV0FBVCxDQUFxQmhCLE9BQXJCLEVBQThCaUIsSUFBOUIsRUFBb0M7Q0FDdkMsTUFBSUMsQ0FBQyxHQUFHO0NBQUVDLElBQUFBLEtBQUssRUFBRSxDQUFUO0NBQVlDLElBQUFBLElBQUksRUFBRSxnQkFBVztDQUFFLFVBQUluRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBWCxFQUFjLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVA7Q0FBWSxhQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSO0NBQWMsS0FBdkU7Q0FBeUVvRCxJQUFBQSxJQUFJLEVBQUUsRUFBL0U7Q0FBbUZDLElBQUFBLEdBQUcsRUFBRTtDQUF4RixHQUFSO0NBQUEsTUFBc0dDLENBQXRHO0NBQUEsTUFBeUdDLENBQXpHO0NBQUEsTUFBNEd2RCxDQUE1RztDQUFBLE1BQStHd0QsQ0FBL0c7Q0FDQSxTQUFPQSxDQUFDLEdBQUc7Q0FBRWQsSUFBQUEsSUFBSSxFQUFFZSxJQUFJLENBQUMsQ0FBRCxDQUFaO0NBQWlCLGFBQVNBLElBQUksQ0FBQyxDQUFELENBQTlCO0NBQW1DLGNBQVVBLElBQUksQ0FBQyxDQUFEO0NBQWpELEdBQUosRUFBNEQsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixLQUFpQ0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVIsQ0FBRCxHQUFxQixZQUFXO0NBQUUsV0FBTyxJQUFQO0NBQWMsR0FBakYsQ0FBNUQsRUFBZ0pILENBQXZKOztDQUNBLFdBQVNDLElBQVQsQ0FBY3RELENBQWQsRUFBaUI7Q0FBRSxXQUFPLFVBQVV5RCxDQUFWLEVBQWE7Q0FBRSxhQUFPbkIsSUFBSSxDQUFDLENBQUN0QyxDQUFELEVBQUl5RCxDQUFKLENBQUQsQ0FBWDtDQUFzQixLQUE1QztDQUErQzs7Q0FDbEUsV0FBU25CLElBQVQsQ0FBY29CLEVBQWQsRUFBa0I7Q0FDZCxRQUFJUCxDQUFKLEVBQU8sTUFBTSxJQUFJN0QsU0FBSixDQUFjLGlDQUFkLENBQU47O0NBQ1AsV0FBT3dELENBQVA7Q0FBVSxVQUFJO0NBQ1YsWUFBSUssQ0FBQyxHQUFHLENBQUosRUFBT0MsQ0FBQyxLQUFLdkQsQ0FBQyxHQUFHNkQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVIsR0FBWU4sQ0FBQyxDQUFDLFFBQUQsQ0FBYixHQUEwQk0sRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRTixDQUFDLENBQUMsT0FBRCxDQUFELEtBQWUsQ0FBQ3ZELENBQUMsR0FBR3VELENBQUMsQ0FBQyxRQUFELENBQU4sS0FBcUJ2RCxDQUFDLENBQUNULElBQUYsQ0FBT2dFLENBQVAsQ0FBckIsRUFBZ0MsQ0FBL0MsQ0FBUixHQUE0REEsQ0FBQyxDQUFDYixJQUFqRyxDQUFELElBQTJHLENBQUMsQ0FBQzFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDVCxJQUFGLENBQU9nRSxDQUFQLEVBQVVNLEVBQUUsQ0FBQyxDQUFELENBQVosQ0FBTCxFQUF1QmhCLElBQTlJLEVBQW9KLE9BQU83QyxDQUFQO0NBQ3BKLFlBQUl1RCxDQUFDLEdBQUcsQ0FBSixFQUFPdkQsQ0FBWCxFQUFjNkQsRUFBRSxHQUFHLENBQUNBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFULEVBQVk3RCxDQUFDLENBQUNvQyxLQUFkLENBQUw7O0NBQ2QsZ0JBQVF5QixFQUFFLENBQUMsQ0FBRCxDQUFWO0NBQ0ksZUFBSyxDQUFMO0NBQVEsZUFBSyxDQUFMO0NBQVE3RCxZQUFBQSxDQUFDLEdBQUc2RCxFQUFKO0NBQVE7O0NBQ3hCLGVBQUssQ0FBTDtDQUFRWixZQUFBQSxDQUFDLENBQUNDLEtBQUY7Q0FBVyxtQkFBTztDQUFFZCxjQUFBQSxLQUFLLEVBQUV5QixFQUFFLENBQUMsQ0FBRCxDQUFYO0NBQWdCaEIsY0FBQUEsSUFBSSxFQUFFO0NBQXRCLGFBQVA7O0NBQ25CLGVBQUssQ0FBTDtDQUFRSSxZQUFBQSxDQUFDLENBQUNDLEtBQUY7Q0FBV0ssWUFBQUEsQ0FBQyxHQUFHTSxFQUFFLENBQUMsQ0FBRCxDQUFOO0NBQVdBLFlBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsQ0FBTDtDQUFVOztDQUN4QyxlQUFLLENBQUw7Q0FBUUEsWUFBQUEsRUFBRSxHQUFHWixDQUFDLENBQUNJLEdBQUYsQ0FBTVMsR0FBTixFQUFMOztDQUFrQmIsWUFBQUEsQ0FBQyxDQUFDRyxJQUFGLENBQU9VLEdBQVA7O0NBQWM7O0NBQ3hDO0NBQ0ksZ0JBQUksRUFBRTlELENBQUMsR0FBR2lELENBQUMsQ0FBQ0csSUFBTixFQUFZcEQsQ0FBQyxHQUFHQSxDQUFDLENBQUNLLE1BQUYsR0FBVyxDQUFYLElBQWdCTCxDQUFDLENBQUNBLENBQUMsQ0FBQ0ssTUFBRixHQUFXLENBQVosQ0FBbkMsTUFBdUR3RCxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBaEYsQ0FBSixFQUF3RjtDQUFFWixjQUFBQSxDQUFDLEdBQUcsQ0FBSjtDQUFPO0NBQVc7O0NBQzVHLGdCQUFJWSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixLQUFnQixDQUFDN0QsQ0FBRCxJQUFPNkQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRN0QsQ0FBQyxDQUFDLENBQUQsQ0FBVCxJQUFnQjZELEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUTdELENBQUMsQ0FBQyxDQUFELENBQWhELENBQUosRUFBMkQ7Q0FBRWlELGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVVyxFQUFFLENBQUMsQ0FBRCxDQUFaO0NBQWlCO0NBQVE7O0NBQ3RGLGdCQUFJQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlWixDQUFDLENBQUNDLEtBQUYsR0FBVWxELENBQUMsQ0FBQyxDQUFELENBQTlCLEVBQW1DO0NBQUVpRCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVWxELENBQUMsQ0FBQyxDQUFELENBQVg7Q0FBZ0JBLGNBQUFBLENBQUMsR0FBRzZELEVBQUo7Q0FBUTtDQUFROztDQUNyRSxnQkFBSTdELENBQUMsSUFBSWlELENBQUMsQ0FBQ0MsS0FBRixHQUFVbEQsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsRUFBeUI7Q0FBRWlELGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVbEQsQ0FBQyxDQUFDLENBQUQsQ0FBWDs7Q0FBZ0JpRCxjQUFBQSxDQUFDLENBQUNJLEdBQUYsQ0FBTVUsSUFBTixDQUFXRixFQUFYOztDQUFnQjtDQUFROztDQUNuRSxnQkFBSTdELENBQUMsQ0FBQyxDQUFELENBQUwsRUFBVWlELENBQUMsQ0FBQ0ksR0FBRixDQUFNUyxHQUFOOztDQUNWYixZQUFBQSxDQUFDLENBQUNHLElBQUYsQ0FBT1UsR0FBUDs7Q0FBYztDQVh0Qjs7Q0FhQUQsUUFBQUEsRUFBRSxHQUFHYixJQUFJLENBQUN6RCxJQUFMLENBQVV3QyxPQUFWLEVBQW1Ca0IsQ0FBbkIsQ0FBTDtDQUNILE9BakJTLENBaUJSLE9BQU96QyxDQUFQLEVBQVU7Q0FBRXFELFFBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsRUFBSXJELENBQUosQ0FBTDtDQUFhK0MsUUFBQUEsQ0FBQyxHQUFHLENBQUo7Q0FBUSxPQWpCekIsU0FpQmtDO0NBQUVELFFBQUFBLENBQUMsR0FBR3RELENBQUMsR0FBRyxDQUFSO0NBQVk7Q0FqQjFEOztDQWtCQSxRQUFJNkQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVosRUFBZSxNQUFNQSxFQUFFLENBQUMsQ0FBRCxDQUFSO0NBQWEsV0FBTztDQUFFekIsTUFBQUEsS0FBSyxFQUFFeUIsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFWLEdBQWdCLEtBQUssQ0FBOUI7Q0FBaUNoQixNQUFBQSxJQUFJLEVBQUU7Q0FBdkMsS0FBUDtDQUMvQjtDQUNKO0NBRU0sSUFBSW1CLGVBQWUsR0FBR2hGLE1BQU0sQ0FBQ2EsTUFBUCxHQUFpQixVQUFTb0UsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0NBQ2hFLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0NBQ3RCbkYsRUFBQUEsTUFBTSxDQUFDc0MsY0FBUCxDQUFzQjJDLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtDQUFFRSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtDQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7Q0FBRSxhQUFPTCxDQUFDLENBQUNDLENBQUQsQ0FBUjtDQUFjO0NBQXBELEdBQTdCO0NBQ0gsQ0FINEIsR0FHdkIsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0NBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0NBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtDQUNILENBTk07Q0FRQSxTQUFTSyxZQUFULENBQXNCTixDQUF0QixFQUF5QkQsQ0FBekIsRUFBNEI7Q0FDL0IsT0FBSyxJQUFJN0UsQ0FBVCxJQUFjOEUsQ0FBZDtDQUFpQixRQUFJOUUsQ0FBQyxLQUFLLFNBQU4sSUFBbUIsQ0FBQ0osTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMwRSxDQUFyQyxFQUF3QzdFLENBQXhDLENBQXhCLEVBQW9FNEUsZUFBZSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBTzlFLENBQVAsQ0FBZjtDQUFyRjtDQUNIO0NBRU0sU0FBU3FGLFFBQVQsQ0FBa0JSLENBQWxCLEVBQXFCO0NBQ3hCLE1BQUloRSxDQUFDLEdBQUcsT0FBT3lELE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsUUFBL0M7Q0FBQSxNQUF5RE8sQ0FBQyxHQUFHakUsQ0FBQyxJQUFJZ0UsQ0FBQyxDQUFDaEUsQ0FBRCxDQUFuRTtDQUFBLE1BQXdFQyxDQUFDLEdBQUcsQ0FBNUU7Q0FDQSxNQUFJZ0UsQ0FBSixFQUFPLE9BQU9BLENBQUMsQ0FBQzNFLElBQUYsQ0FBTzBFLENBQVAsQ0FBUDtDQUNQLE1BQUlBLENBQUMsSUFBSSxPQUFPQSxDQUFDLENBQUM1RCxNQUFULEtBQW9CLFFBQTdCLEVBQXVDLE9BQU87Q0FDMUNxQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7Q0FDZCxVQUFJdUIsQ0FBQyxJQUFJL0QsQ0FBQyxJQUFJK0QsQ0FBQyxDQUFDNUQsTUFBaEIsRUFBd0I0RCxDQUFDLEdBQUcsS0FBSyxDQUFUO0NBQ3hCLGFBQU87Q0FBRTdCLFFBQUFBLEtBQUssRUFBRTZCLENBQUMsSUFBSUEsQ0FBQyxDQUFDL0QsQ0FBQyxFQUFGLENBQWY7Q0FBc0IyQyxRQUFBQSxJQUFJLEVBQUUsQ0FBQ29CO0NBQTdCLE9BQVA7Q0FDSDtDQUp5QyxHQUFQO0NBTXZDLFFBQU0sSUFBSXhFLFNBQUosQ0FBY1EsQ0FBQyxHQUFHLHlCQUFILEdBQStCLGlDQUE5QyxDQUFOO0NBQ0g7Q0FFTSxTQUFTeUUsTUFBVCxDQUFnQlQsQ0FBaEIsRUFBbUI5RCxDQUFuQixFQUFzQjtDQUN6QixNQUFJK0QsQ0FBQyxHQUFHLE9BQU9SLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NPLENBQUMsQ0FBQ1AsTUFBTSxDQUFDQyxRQUFSLENBQXpDO0NBQ0EsTUFBSSxDQUFDTyxDQUFMLEVBQVEsT0FBT0QsQ0FBUDtDQUNSLE1BQUkvRCxDQUFDLEdBQUdnRSxDQUFDLENBQUMzRSxJQUFGLENBQU8wRSxDQUFQLENBQVI7Q0FBQSxNQUFtQi9DLENBQW5CO0NBQUEsTUFBc0J5RCxFQUFFLEdBQUcsRUFBM0I7Q0FBQSxNQUErQm5FLENBQS9COztDQUNBLE1BQUk7Q0FDQSxXQUFPLENBQUNMLENBQUMsS0FBSyxLQUFLLENBQVgsSUFBZ0JBLENBQUMsS0FBSyxDQUF2QixLQUE2QixDQUFDLENBQUNlLENBQUMsR0FBR2hCLENBQUMsQ0FBQ3dDLElBQUYsRUFBTCxFQUFlRyxJQUFwRDtDQUEwRDhCLE1BQUFBLEVBQUUsQ0FBQ1osSUFBSCxDQUFRN0MsQ0FBQyxDQUFDa0IsS0FBVjtDQUExRDtDQUNILEdBRkQsQ0FHQSxPQUFPd0MsS0FBUCxFQUFjO0NBQUVwRSxJQUFBQSxDQUFDLEdBQUc7Q0FBRW9FLE1BQUFBLEtBQUssRUFBRUE7Q0FBVCxLQUFKO0NBQXVCLEdBSHZDLFNBSVE7Q0FDSixRQUFJO0NBQ0EsVUFBSTFELENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUMyQixJQUFSLEtBQWlCcUIsQ0FBQyxHQUFHaEUsQ0FBQyxDQUFDLFFBQUQsQ0FBdEIsQ0FBSixFQUF1Q2dFLENBQUMsQ0FBQzNFLElBQUYsQ0FBT1csQ0FBUDtDQUMxQyxLQUZELFNBR1E7Q0FBRSxVQUFJTSxDQUFKLEVBQU8sTUFBTUEsQ0FBQyxDQUFDb0UsS0FBUjtDQUFnQjtDQUNwQzs7Q0FDRCxTQUFPRCxFQUFQO0NBQ0g7Q0FFRDs7Q0FDTyxTQUFTRSxRQUFULEdBQW9CO0NBQ3ZCLE9BQUssSUFBSUYsRUFBRSxHQUFHLEVBQVQsRUFBYXpFLENBQUMsR0FBRyxDQUF0QixFQUF5QkEsQ0FBQyxHQUFHRSxTQUFTLENBQUNDLE1BQXZDLEVBQStDSCxDQUFDLEVBQWhEO0NBQ0l5RSxJQUFBQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0csTUFBSCxDQUFVSixNQUFNLENBQUN0RSxTQUFTLENBQUNGLENBQUQsQ0FBVixDQUFoQixDQUFMO0NBREo7O0NBRUEsU0FBT3lFLEVBQVA7Q0FDSDtDQUVEOztDQUNPLFNBQVNJLGNBQVQsR0FBMEI7Q0FDN0IsT0FBSyxJQUFJOUUsQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHLENBQWYsRUFBa0I4RSxFQUFFLEdBQUc1RSxTQUFTLENBQUNDLE1BQXRDLEVBQThDSCxDQUFDLEdBQUc4RSxFQUFsRCxFQUFzRDlFLENBQUMsRUFBdkQ7Q0FBMkRELElBQUFBLENBQUMsSUFBSUcsU0FBUyxDQUFDRixDQUFELENBQVQsQ0FBYUcsTUFBbEI7Q0FBM0Q7O0NBQ0EsT0FBSyxJQUFJYSxDQUFDLEdBQUcvQixLQUFLLENBQUNjLENBQUQsQ0FBYixFQUFrQmtFLENBQUMsR0FBRyxDQUF0QixFQUF5QmpFLENBQUMsR0FBRyxDQUFsQyxFQUFxQ0EsQ0FBQyxHQUFHOEUsRUFBekMsRUFBNkM5RSxDQUFDLEVBQTlDO0NBQ0ksU0FBSyxJQUFJK0UsQ0FBQyxHQUFHN0UsU0FBUyxDQUFDRixDQUFELENBQWpCLEVBQXNCZ0YsQ0FBQyxHQUFHLENBQTFCLEVBQTZCQyxFQUFFLEdBQUdGLENBQUMsQ0FBQzVFLE1BQXpDLEVBQWlENkUsQ0FBQyxHQUFHQyxFQUFyRCxFQUF5REQsQ0FBQyxJQUFJZixDQUFDLEVBQS9EO0NBQ0lqRCxNQUFBQSxDQUFDLENBQUNpRCxDQUFELENBQUQsR0FBT2MsQ0FBQyxDQUFDQyxDQUFELENBQVI7Q0FESjtDQURKOztDQUdBLFNBQU9oRSxDQUFQO0NBQ0g7Q0FFTSxTQUFTa0UsYUFBVCxDQUF1QkMsRUFBdkIsRUFBMkJDLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1QztDQUMxQyxNQUFJQSxJQUFJLElBQUluRixTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBakMsRUFBb0MsS0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBUixFQUFXc0YsQ0FBQyxHQUFHRixJQUFJLENBQUNqRixNQUFwQixFQUE0QnNFLEVBQWpDLEVBQXFDekUsQ0FBQyxHQUFHc0YsQ0FBekMsRUFBNEN0RixDQUFDLEVBQTdDLEVBQWlEO0NBQ2pGLFFBQUl5RSxFQUFFLElBQUksRUFBRXpFLENBQUMsSUFBSW9GLElBQVAsQ0FBVixFQUF3QjtDQUNwQixVQUFJLENBQUNYLEVBQUwsRUFBU0EsRUFBRSxHQUFHeEYsS0FBSyxDQUFDRSxTQUFOLENBQWdCb0csS0FBaEIsQ0FBc0JsRyxJQUF0QixDQUEyQitGLElBQTNCLEVBQWlDLENBQWpDLEVBQW9DcEYsQ0FBcEMsQ0FBTDtDQUNUeUUsTUFBQUEsRUFBRSxDQUFDekUsQ0FBRCxDQUFGLEdBQVFvRixJQUFJLENBQUNwRixDQUFELENBQVo7Q0FDSDtDQUNKO0NBQ0QsU0FBT21GLEVBQUUsQ0FBQ1AsTUFBSCxDQUFVSCxFQUFFLElBQUl4RixLQUFLLENBQUNFLFNBQU4sQ0FBZ0JvRyxLQUFoQixDQUFzQmxHLElBQXRCLENBQTJCK0YsSUFBM0IsQ0FBaEIsQ0FBUDtDQUNIO0NBRU0sU0FBU0ksT0FBVCxDQUFpQjlCLENBQWpCLEVBQW9CO0NBQ3ZCLFNBQU8sZ0JBQWdCOEIsT0FBaEIsSUFBMkIsS0FBSzlCLENBQUwsR0FBU0EsQ0FBVCxFQUFZLElBQXZDLElBQStDLElBQUk4QixPQUFKLENBQVk5QixDQUFaLENBQXREO0NBQ0g7Q0FFTSxTQUFTK0IsZ0JBQVQsQ0FBMEI1RCxPQUExQixFQUFtQ0MsVUFBbkMsRUFBK0NFLFNBQS9DLEVBQTBEO0NBQzdELE1BQUksQ0FBQ3dCLE1BQU0sQ0FBQ2tDLGFBQVosRUFBMkIsTUFBTSxJQUFJbkcsU0FBSixDQUFjLHNDQUFkLENBQU47Q0FDM0IsTUFBSStELENBQUMsR0FBR3RCLFNBQVMsQ0FBQzVCLEtBQVYsQ0FBZ0J5QixPQUFoQixFQUF5QkMsVUFBVSxJQUFJLEVBQXZDLENBQVI7Q0FBQSxNQUFvRDlCLENBQXBEO0NBQUEsTUFBdUQyRixDQUFDLEdBQUcsRUFBM0Q7Q0FDQSxTQUFPM0YsQ0FBQyxHQUFHLEVBQUosRUFBUXVELElBQUksQ0FBQyxNQUFELENBQVosRUFBc0JBLElBQUksQ0FBQyxPQUFELENBQTFCLEVBQXFDQSxJQUFJLENBQUMsUUFBRCxDQUF6QyxFQUFxRHZELENBQUMsQ0FBQ3dELE1BQU0sQ0FBQ2tDLGFBQVIsQ0FBRCxHQUEwQixZQUFZO0NBQUUsV0FBTyxJQUFQO0NBQWMsR0FBM0csRUFBNkcxRixDQUFwSDs7Q0FDQSxXQUFTdUQsSUFBVCxDQUFjdEQsQ0FBZCxFQUFpQjtDQUFFLFFBQUlxRCxDQUFDLENBQUNyRCxDQUFELENBQUwsRUFBVUQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBTyxVQUFVeUQsQ0FBVixFQUFhO0NBQUUsYUFBTyxJQUFJdEIsT0FBSixDQUFZLFVBQVUyQyxDQUFWLEVBQWFsRyxDQUFiLEVBQWdCO0NBQUU4RyxRQUFBQSxDQUFDLENBQUM5QixJQUFGLENBQU8sQ0FBQzVELENBQUQsRUFBSXlELENBQUosRUFBT3FCLENBQVAsRUFBVWxHLENBQVYsQ0FBUCxJQUF1QixDQUF2QixJQUE0QitHLE1BQU0sQ0FBQzNGLENBQUQsRUFBSXlELENBQUosQ0FBbEM7Q0FBMkMsT0FBekUsQ0FBUDtDQUFvRixLQUExRztDQUE2Rzs7Q0FDMUksV0FBU2tDLE1BQVQsQ0FBZ0IzRixDQUFoQixFQUFtQnlELENBQW5CLEVBQXNCO0NBQUUsUUFBSTtDQUFFbkIsTUFBQUEsSUFBSSxDQUFDZSxDQUFDLENBQUNyRCxDQUFELENBQUQsQ0FBS3lELENBQUwsQ0FBRCxDQUFKO0NBQWdCLEtBQXRCLENBQXVCLE9BQU9wRCxDQUFQLEVBQVU7Q0FBRXVGLE1BQUFBLE1BQU0sQ0FBQ0YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBRCxFQUFVckYsQ0FBVixDQUFOO0NBQXFCO0NBQUU7O0NBQ2xGLFdBQVNpQyxJQUFULENBQWN2QixDQUFkLEVBQWlCO0NBQUVBLElBQUFBLENBQUMsQ0FBQ2tCLEtBQUYsWUFBbUJzRCxPQUFuQixHQUE2QnBELE9BQU8sQ0FBQ0QsT0FBUixDQUFnQm5CLENBQUMsQ0FBQ2tCLEtBQUYsQ0FBUXdCLENBQXhCLEVBQTJCZCxJQUEzQixDQUFnQ2tELE9BQWhDLEVBQXlDekQsTUFBekMsQ0FBN0IsR0FBZ0Z3RCxNQUFNLENBQUNGLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLENBQUQsRUFBVTNFLENBQVYsQ0FBdEY7Q0FBcUc7O0NBQ3hILFdBQVM4RSxPQUFULENBQWlCNUQsS0FBakIsRUFBd0I7Q0FBRTBELElBQUFBLE1BQU0sQ0FBQyxNQUFELEVBQVMxRCxLQUFULENBQU47Q0FBd0I7O0NBQ2xELFdBQVNHLE1BQVQsQ0FBZ0JILEtBQWhCLEVBQXVCO0NBQUUwRCxJQUFBQSxNQUFNLENBQUMsT0FBRCxFQUFVMUQsS0FBVixDQUFOO0NBQXlCOztDQUNsRCxXQUFTMkQsTUFBVCxDQUFnQnpDLENBQWhCLEVBQW1CTSxDQUFuQixFQUFzQjtDQUFFLFFBQUlOLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEVBQU1pQyxDQUFDLENBQUNJLEtBQUYsRUFBTixFQUFpQkosQ0FBQyxDQUFDeEYsTUFBdkIsRUFBK0J5RixNQUFNLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLENBQUQsRUFBVUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBVixDQUFOO0NBQTJCO0NBQ3JGO0NBRU0sU0FBU0ssZ0JBQVQsQ0FBMEJqQyxDQUExQixFQUE2QjtDQUNoQyxNQUFJL0QsQ0FBSixFQUFPZCxDQUFQO0NBQ0EsU0FBT2MsQ0FBQyxHQUFHLEVBQUosRUFBUXVELElBQUksQ0FBQyxNQUFELENBQVosRUFBc0JBLElBQUksQ0FBQyxPQUFELEVBQVUsVUFBVWpELENBQVYsRUFBYTtDQUFFLFVBQU1BLENBQU47Q0FBVSxHQUFuQyxDQUExQixFQUFnRWlELElBQUksQ0FBQyxRQUFELENBQXBFLEVBQWdGdkQsQ0FBQyxDQUFDd0QsTUFBTSxDQUFDQyxRQUFSLENBQUQsR0FBcUIsWUFBWTtDQUFFLFdBQU8sSUFBUDtDQUFjLEdBQWpJLEVBQW1JekQsQ0FBMUk7O0NBQ0EsV0FBU3VELElBQVQsQ0FBY3RELENBQWQsRUFBaUJtRCxDQUFqQixFQUFvQjtDQUFFcEQsSUFBQUEsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBTzhELENBQUMsQ0FBQzlELENBQUQsQ0FBRCxHQUFPLFVBQVV5RCxDQUFWLEVBQWE7Q0FBRSxhQUFPLENBQUN4RSxDQUFDLEdBQUcsQ0FBQ0EsQ0FBTixJQUFXO0NBQUVnRCxRQUFBQSxLQUFLLEVBQUVzRCxPQUFPLENBQUN6QixDQUFDLENBQUM5RCxDQUFELENBQUQsQ0FBS3lELENBQUwsQ0FBRCxDQUFoQjtDQUEyQmYsUUFBQUEsSUFBSSxFQUFFMUMsQ0FBQyxLQUFLO0NBQXZDLE9BQVgsR0FBK0RtRCxDQUFDLEdBQUdBLENBQUMsQ0FBQ00sQ0FBRCxDQUFKLEdBQVVBLENBQWpGO0NBQXFGLEtBQTNHLEdBQThHTixDQUFySDtDQUF5SDtDQUNsSjtDQUVNLFNBQVM2QyxhQUFULENBQXVCbEMsQ0FBdkIsRUFBMEI7Q0FDN0IsTUFBSSxDQUFDUCxNQUFNLENBQUNrQyxhQUFaLEVBQTJCLE1BQU0sSUFBSW5HLFNBQUosQ0FBYyxzQ0FBZCxDQUFOO0NBQzNCLE1BQUl5RSxDQUFDLEdBQUdELENBQUMsQ0FBQ1AsTUFBTSxDQUFDa0MsYUFBUixDQUFUO0NBQUEsTUFBaUMxRixDQUFqQztDQUNBLFNBQU9nRSxDQUFDLEdBQUdBLENBQUMsQ0FBQzNFLElBQUYsQ0FBTzBFLENBQVAsQ0FBSCxJQUFnQkEsQ0FBQyxHQUFHLE9BQU9RLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUNBLFFBQVEsQ0FBQ1IsQ0FBRCxDQUF6QyxHQUErQ0EsQ0FBQyxDQUFDUCxNQUFNLENBQUNDLFFBQVIsQ0FBRCxFQUFuRCxFQUF5RXpELENBQUMsR0FBRyxFQUE3RSxFQUFpRnVELElBQUksQ0FBQyxNQUFELENBQXJGLEVBQStGQSxJQUFJLENBQUMsT0FBRCxDQUFuRyxFQUE4R0EsSUFBSSxDQUFDLFFBQUQsQ0FBbEgsRUFBOEh2RCxDQUFDLENBQUN3RCxNQUFNLENBQUNrQyxhQUFSLENBQUQsR0FBMEIsWUFBWTtDQUFFLFdBQU8sSUFBUDtDQUFjLEdBQXBMLEVBQXNMMUYsQ0FBdE0sQ0FBUjs7Q0FDQSxXQUFTdUQsSUFBVCxDQUFjdEQsQ0FBZCxFQUFpQjtDQUFFRCxJQUFBQSxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPOEQsQ0FBQyxDQUFDOUQsQ0FBRCxDQUFELElBQVEsVUFBVXlELENBQVYsRUFBYTtDQUFFLGFBQU8sSUFBSXRCLE9BQUosQ0FBWSxVQUFVRCxPQUFWLEVBQW1CRSxNQUFuQixFQUEyQjtDQUFFcUIsUUFBQUEsQ0FBQyxHQUFHSyxDQUFDLENBQUM5RCxDQUFELENBQUQsQ0FBS3lELENBQUwsQ0FBSixFQUFhbUMsTUFBTSxDQUFDMUQsT0FBRCxFQUFVRSxNQUFWLEVBQWtCcUIsQ0FBQyxDQUFDZixJQUFwQixFQUEwQmUsQ0FBQyxDQUFDeEIsS0FBNUIsQ0FBbkI7Q0FBd0QsT0FBakcsQ0FBUDtDQUE0RyxLQUExSTtDQUE2STs7Q0FDaEssV0FBUzJELE1BQVQsQ0FBZ0IxRCxPQUFoQixFQUF5QkUsTUFBekIsRUFBaUN6RCxDQUFqQyxFQUFvQzhFLENBQXBDLEVBQXVDO0NBQUV0QixJQUFBQSxPQUFPLENBQUNELE9BQVIsQ0FBZ0J1QixDQUFoQixFQUFtQmQsSUFBbkIsQ0FBd0IsVUFBU2MsQ0FBVCxFQUFZO0NBQUV2QixNQUFBQSxPQUFPLENBQUM7Q0FBRUQsUUFBQUEsS0FBSyxFQUFFd0IsQ0FBVDtDQUFZZixRQUFBQSxJQUFJLEVBQUUvRDtDQUFsQixPQUFELENBQVA7Q0FBaUMsS0FBdkUsRUFBeUV5RCxNQUF6RTtDQUFtRjtDQUMvSDtDQUVNLFNBQVM2RCxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBc0NDLEdBQXRDLEVBQTJDO0NBQzlDLE1BQUl0SCxNQUFNLENBQUNzQyxjQUFYLEVBQTJCO0NBQUV0QyxJQUFBQSxNQUFNLENBQUNzQyxjQUFQLENBQXNCK0UsTUFBdEIsRUFBOEIsS0FBOUIsRUFBcUM7Q0FBRWpFLE1BQUFBLEtBQUssRUFBRWtFO0NBQVQsS0FBckM7Q0FBdUQsR0FBcEYsTUFBMEY7Q0FBRUQsSUFBQUEsTUFBTSxDQUFDQyxHQUFQLEdBQWFBLEdBQWI7Q0FBbUI7O0NBQy9HLFNBQU9ELE1BQVA7Q0FDSDs7Q0FFRCxJQUFJRSxrQkFBa0IsR0FBR3ZILE1BQU0sQ0FBQ2EsTUFBUCxHQUFpQixVQUFTb0UsQ0FBVCxFQUFZTCxDQUFaLEVBQWU7Q0FDckQ1RSxFQUFBQSxNQUFNLENBQUNzQyxjQUFQLENBQXNCMkMsQ0FBdEIsRUFBeUIsU0FBekIsRUFBb0M7Q0FBRUssSUFBQUEsVUFBVSxFQUFFLElBQWQ7Q0FBb0JsQyxJQUFBQSxLQUFLLEVBQUV3QjtDQUEzQixHQUFwQztDQUNILENBRndCLEdBRXBCLFVBQVNLLENBQVQsRUFBWUwsQ0FBWixFQUFlO0NBQ2hCSyxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVMLENBQWY7Q0FDSCxDQUpEOztDQU1PLFNBQVM0QyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtDQUM5QixNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0NBQzNCLE1BQUk3RCxNQUFNLEdBQUcsRUFBYjtDQUNBLE1BQUk2RCxHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUl0QyxDQUFULElBQWNzQyxHQUFkO0NBQW1CLFFBQUl0QyxDQUFDLEtBQUssU0FBTixJQUFtQm5GLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDa0gsR0FBckMsRUFBMEN0QyxDQUExQyxDQUF2QixFQUFxRUgsZUFBZSxDQUFDcEIsTUFBRCxFQUFTNkQsR0FBVCxFQUFjdEMsQ0FBZCxDQUFmO0NBQXhGOztDQUNqQm9DLEVBQUFBLGtCQUFrQixDQUFDM0QsTUFBRCxFQUFTNkQsR0FBVCxDQUFsQjs7Q0FDQSxTQUFPN0QsTUFBUDtDQUNIO0NBRU0sU0FBUytELGVBQVQsQ0FBeUJGLEdBQXpCLEVBQThCO0NBQ2pDLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztDQUFFLGVBQVNBO0NBQVgsR0FBdkM7Q0FDSDtDQUVNLFNBQVNHLHNCQUFULENBQWdDQyxRQUFoQyxFQUEwQ0MsS0FBMUMsRUFBaURDLElBQWpELEVBQXVEekQsQ0FBdkQsRUFBMEQ7Q0FDN0QsTUFBSXlELElBQUksS0FBSyxHQUFULElBQWdCLENBQUN6RCxDQUFyQixFQUF3QixNQUFNLElBQUk3RCxTQUFKLENBQWMsK0NBQWQsQ0FBTjtDQUN4QixNQUFJLE9BQU9xSCxLQUFQLEtBQWlCLFVBQWpCLEdBQThCRCxRQUFRLEtBQUtDLEtBQWIsSUFBc0IsQ0FBQ3hELENBQXJELEdBQXlELENBQUN3RCxLQUFLLENBQUNFLEdBQU4sQ0FBVUgsUUFBVixDQUE5RCxFQUFtRixNQUFNLElBQUlwSCxTQUFKLENBQWMsMEVBQWQsQ0FBTjtDQUNuRixTQUFPc0gsSUFBSSxLQUFLLEdBQVQsR0FBZXpELENBQWYsR0FBbUJ5RCxJQUFJLEtBQUssR0FBVCxHQUFlekQsQ0FBQyxDQUFDL0QsSUFBRixDQUFPc0gsUUFBUCxDQUFmLEdBQWtDdkQsQ0FBQyxHQUFHQSxDQUFDLENBQUNsQixLQUFMLEdBQWEwRSxLQUFLLENBQUN2QyxHQUFOLENBQVVzQyxRQUFWLENBQTFFO0NBQ0g7Q0FFTSxTQUFTSSxzQkFBVCxDQUFnQ0osUUFBaEMsRUFBMENDLEtBQTFDLEVBQWlEMUUsS0FBakQsRUFBd0QyRSxJQUF4RCxFQUE4RHpELENBQTlELEVBQWlFO0NBQ3BFLE1BQUl5RCxJQUFJLEtBQUssR0FBYixFQUFrQixNQUFNLElBQUl0SCxTQUFKLENBQWMsZ0NBQWQsQ0FBTjtDQUNsQixNQUFJc0gsSUFBSSxLQUFLLEdBQVQsSUFBZ0IsQ0FBQ3pELENBQXJCLEVBQXdCLE1BQU0sSUFBSTdELFNBQUosQ0FBYywrQ0FBZCxDQUFOO0NBQ3hCLE1BQUksT0FBT3FILEtBQVAsS0FBaUIsVUFBakIsR0FBOEJELFFBQVEsS0FBS0MsS0FBYixJQUFzQixDQUFDeEQsQ0FBckQsR0FBeUQsQ0FBQ3dELEtBQUssQ0FBQ0UsR0FBTixDQUFVSCxRQUFWLENBQTlELEVBQW1GLE1BQU0sSUFBSXBILFNBQUosQ0FBYyx5RUFBZCxDQUFOO0NBQ25GLFNBQVFzSCxJQUFJLEtBQUssR0FBVCxHQUFlekQsQ0FBQyxDQUFDL0QsSUFBRixDQUFPc0gsUUFBUCxFQUFpQnpFLEtBQWpCLENBQWYsR0FBeUNrQixDQUFDLEdBQUdBLENBQUMsQ0FBQ2xCLEtBQUYsR0FBVUEsS0FBYixHQUFxQjBFLEtBQUssQ0FBQ0ksR0FBTixDQUFVTCxRQUFWLEVBQW9CekUsS0FBcEIsQ0FBaEUsRUFBNkZBLEtBQXBHO0NBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ3ZORCxJQUFJK0UsQ0FBQyxHQUFHLFFBQU8vRixPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLEdBQThCQSxPQUE5QixHQUF3QyxJQUFoRDtDQUNBLElBQUlnRyxZQUFZLEdBQUdELENBQUMsSUFBSSxPQUFPQSxDQUFDLENBQUM3RyxLQUFULEtBQW1CLFVBQXhCLEdBQ2Y2RyxDQUFDLENBQUM3RyxLQURhLEdBRWYsU0FBUzhHLFlBQVQsQ0FBc0J0RyxNQUF0QixFQUE4QitGLFFBQTlCLEVBQXdDUSxJQUF4QyxFQUE4QztDQUM5QyxTQUFPQyxRQUFRLENBQUNqSSxTQUFULENBQW1CaUIsS0FBbkIsQ0FBeUJmLElBQXpCLENBQThCdUIsTUFBOUIsRUFBc0MrRixRQUF0QyxFQUFnRFEsSUFBaEQsQ0FBUDtDQUNELENBSkg7Q0FNQSxJQUFJRSxjQUFKOztDQUNBLElBQUlKLENBQUMsSUFBSSxPQUFPQSxDQUFDLENBQUNLLE9BQVQsS0FBcUIsVUFBOUIsRUFBMEM7Q0FDeENELEVBQUFBLGNBQWMsR0FBR0osQ0FBQyxDQUFDSyxPQUFuQjtDQUNELENBRkQsTUFFTyxJQUFJeEksTUFBTSxDQUFDMEIscUJBQVgsRUFBa0M7Q0FDdkM2RyxFQUFBQSxjQUFjLEdBQUcsU0FBU0EsY0FBVCxDQUF3QnpHLE1BQXhCLEVBQWdDO0NBQy9DLFdBQU85QixNQUFNLENBQUN5SSxtQkFBUCxDQUEyQjNHLE1BQTNCLEVBQ0pnRSxNQURJLENBQ0c5RixNQUFNLENBQUMwQixxQkFBUCxDQUE2QkksTUFBN0IsQ0FESCxDQUFQO0NBRUQsR0FIRDtDQUlELENBTE0sTUFLQTtDQUNMeUcsRUFBQUEsY0FBYyxHQUFHLFNBQVNBLGNBQVQsQ0FBd0J6RyxNQUF4QixFQUFnQztDQUMvQyxXQUFPOUIsTUFBTSxDQUFDeUksbUJBQVAsQ0FBMkIzRyxNQUEzQixDQUFQO0NBQ0QsR0FGRDtDQUdEOztDQUVELFNBQVM0RyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7Q0FDbkMsTUFBSUMsT0FBTyxJQUFJQSxPQUFPLENBQUNDLElBQXZCLEVBQTZCRCxPQUFPLENBQUNDLElBQVIsQ0FBYUYsT0FBYjtDQUM5Qjs7Q0FFRCxJQUFJRyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxJQUFnQixTQUFTRixXQUFULENBQXFCMUYsS0FBckIsRUFBNEI7Q0FDNUQsU0FBT0EsS0FBSyxLQUFLQSxLQUFqQjtDQUNELENBRkQ7O0NBSUEsU0FBUzZGLFlBQVQsR0FBd0I7Q0FDdEJBLEVBQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQjNJLElBQWxCLENBQXVCLElBQXZCO0NBQ0Q7O0FBQ0Q0SSxlQUFBLEdBQWlCRixZQUFqQjt1QkFDc0JHOztDQUd0QkgsWUFBWSxDQUFDQSxZQUFiLEdBQTRCQSxZQUE1QjtDQUVBQSxZQUFZLENBQUM1SSxTQUFiLENBQXVCZ0osT0FBdkIsR0FBaUNoRSxTQUFqQztDQUNBNEQsWUFBWSxDQUFDNUksU0FBYixDQUF1QmlKLFlBQXZCLEdBQXNDLENBQXRDO0NBQ0FMLFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUJrSixhQUF2QixHQUF1Q2xFLFNBQXZDO0NBR0E7O0NBQ0EsSUFBSW1FLG1CQUFtQixHQUFHLEVBQTFCOztDQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDO0NBQy9CLE1BQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztDQUNsQyxVQUFNLElBQUlqSixTQUFKLENBQWMsNkVBQTRFaUosUUFBNUUsQ0FBZCxDQUFOO0NBQ0Q7Q0FDRjs7Q0FFRDFKLE1BQU0sQ0FBQ3NDLGNBQVAsQ0FBc0IyRyxZQUF0QixFQUFvQyxxQkFBcEMsRUFBMkQ7Q0FDekQzRCxFQUFBQSxVQUFVLEVBQUUsSUFENkM7Q0FFekRDLEVBQUFBLEdBQUcsRUFBRSxlQUFXO0NBQ2QsV0FBT2lFLG1CQUFQO0NBQ0QsR0FKd0Q7Q0FLekR0QixFQUFBQSxHQUFHLEVBQUUsYUFBU3lCLEdBQVQsRUFBYztDQUNqQixRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCQSxHQUFHLEdBQUcsQ0FBakMsSUFBc0NiLFdBQVcsQ0FBQ2EsR0FBRCxDQUFyRCxFQUE0RDtDQUMxRCxZQUFNLElBQUlDLFVBQUosQ0FBZSxvR0FBb0dELEdBQXBHLEdBQTBHLEdBQXpILENBQU47Q0FDRDs7Q0FDREgsSUFBQUEsbUJBQW1CLEdBQUdHLEdBQXRCO0NBQ0Q7Q0FWd0QsQ0FBM0Q7O0NBYUFWLFlBQVksQ0FBQ0MsSUFBYixHQUFvQixZQUFXO0NBRTdCLE1BQUksS0FBS0csT0FBTCxLQUFpQmhFLFNBQWpCLElBQ0EsS0FBS2dFLE9BQUwsS0FBaUJySixNQUFNLENBQUM2SixjQUFQLENBQXNCLElBQXRCLEVBQTRCUixPQURqRCxFQUMwRDtDQUN4RCxTQUFLQSxPQUFMLEdBQWVySixNQUFNLENBQUNhLE1BQVAsQ0FBYyxJQUFkLENBQWY7Q0FDQSxTQUFLeUksWUFBTCxHQUFvQixDQUFwQjtDQUNEOztDQUVELE9BQUtDLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxJQUFzQmxFLFNBQTNDO0NBQ0QsQ0FURDtDQVlBOzs7Q0FDQTRELFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUJ5SixlQUF2QixHQUF5QyxTQUFTQSxlQUFULENBQXlCM0ksQ0FBekIsRUFBNEI7Q0FDbkUsTUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QkEsQ0FBQyxHQUFHLENBQTdCLElBQWtDMkgsV0FBVyxDQUFDM0gsQ0FBRCxDQUFqRCxFQUFzRDtDQUNwRCxVQUFNLElBQUl5SSxVQUFKLENBQWUsa0ZBQWtGekksQ0FBbEYsR0FBc0YsR0FBckcsQ0FBTjtDQUNEOztDQUNELE9BQUtvSSxhQUFMLEdBQXFCcEksQ0FBckI7Q0FDQSxTQUFPLElBQVA7Q0FDRCxDQU5EOztDQVFBLFNBQVM0SSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7Q0FDOUIsTUFBSUEsSUFBSSxDQUFDVCxhQUFMLEtBQXVCbEUsU0FBM0IsRUFDRSxPQUFPNEQsWUFBWSxDQUFDTyxtQkFBcEI7Q0FDRixTQUFPUSxJQUFJLENBQUNULGFBQVo7Q0FDRDs7Q0FFRE4sWUFBWSxDQUFDNUksU0FBYixDQUF1QjRKLGVBQXZCLEdBQXlDLFNBQVNBLGVBQVQsR0FBMkI7Q0FDbEUsU0FBT0YsZ0JBQWdCLENBQUMsSUFBRCxDQUF2QjtDQUNELENBRkQ7O0NBSUFkLFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUI2SixJQUF2QixHQUE4QixTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0I7Q0FDaEQsTUFBSTlCLElBQUksR0FBRyxFQUFYOztDQUNBLE9BQUssSUFBSW5ILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdFLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0NILENBQUMsRUFBdkM7Q0FBMkNtSCxJQUFBQSxJQUFJLENBQUN0RCxJQUFMLENBQVUzRCxTQUFTLENBQUNGLENBQUQsQ0FBbkI7Q0FBM0M7O0NBQ0EsTUFBSWtKLE9BQU8sR0FBSUQsSUFBSSxLQUFLLE9BQXhCO0NBRUEsTUFBSUUsTUFBTSxHQUFHLEtBQUtoQixPQUFsQjtDQUNBLE1BQUlnQixNQUFNLEtBQUtoRixTQUFmLEVBQ0UrRSxPQUFPLEdBQUlBLE9BQU8sSUFBSUMsTUFBTSxDQUFDekUsS0FBUCxLQUFpQlAsU0FBdkMsQ0FERixLQUVLLElBQUksQ0FBQytFLE9BQUwsRUFDSCxPQUFPLEtBQVAsQ0FUOEM7O0NBWWhELE1BQUlBLE9BQUosRUFBYTtDQUNYLFFBQUlFLEVBQUo7Q0FDQSxRQUFJakMsSUFBSSxDQUFDaEgsTUFBTCxHQUFjLENBQWxCLEVBQ0VpSixFQUFFLEdBQUdqQyxJQUFJLENBQUMsQ0FBRCxDQUFUOztDQUNGLFFBQUlpQyxFQUFFLFlBQVlDLEtBQWxCLEVBQXlCOzs7Q0FHdkIsWUFBTUQsRUFBTixDQUh1QjtDQUl4QixLQVJVOzs7Q0FVWCxRQUFJRSxHQUFHLEdBQUcsSUFBSUQsS0FBSixDQUFVLHNCQUFzQkQsRUFBRSxHQUFHLE9BQU9BLEVBQUUsQ0FBQ0csT0FBVixHQUFvQixHQUF2QixHQUE2QixFQUFyRCxDQUFWLENBQVY7Q0FDQUQsSUFBQUEsR0FBRyxDQUFDRSxPQUFKLEdBQWNKLEVBQWQ7Q0FDQSxVQUFNRSxHQUFOLENBWlc7Q0FhWjs7Q0FFRCxNQUFJRyxPQUFPLEdBQUdOLE1BQU0sQ0FBQ0YsSUFBRCxDQUFwQjtDQUVBLE1BQUlRLE9BQU8sS0FBS3RGLFNBQWhCLEVBQ0UsT0FBTyxLQUFQOztDQUVGLE1BQUksT0FBT3NGLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7Q0FDakN2QyxJQUFBQSxZQUFZLENBQUN1QyxPQUFELEVBQVUsSUFBVixFQUFnQnRDLElBQWhCLENBQVo7Q0FDRCxHQUZELE1BRU87Q0FDTCxRQUFJdUMsR0FBRyxHQUFHRCxPQUFPLENBQUN0SixNQUFsQjtDQUNBLFFBQUl3SixTQUFTLEdBQUdDLFVBQVUsQ0FBQ0gsT0FBRCxFQUFVQyxHQUFWLENBQTFCOztDQUNBLFNBQUssSUFBSTFKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwSixHQUFwQixFQUF5QixFQUFFMUosQ0FBM0I7Q0FDRWtILE1BQUFBLFlBQVksQ0FBQ3lDLFNBQVMsQ0FBQzNKLENBQUQsQ0FBVixFQUFlLElBQWYsRUFBcUJtSCxJQUFyQixDQUFaO0NBREY7Q0FFRDs7Q0FFRCxTQUFPLElBQVA7Q0FDRCxDQTFDRDs7Q0E0Q0EsU0FBUzBDLFlBQVQsQ0FBc0JqSixNQUF0QixFQUE4QnFJLElBQTlCLEVBQW9DVCxRQUFwQyxFQUE4Q3NCLE9BQTlDLEVBQXVEO0NBQ3JELE1BQUk5RixDQUFKO0NBQ0EsTUFBSW1GLE1BQUo7Q0FDQSxNQUFJWSxRQUFKO0NBRUF4QixFQUFBQSxhQUFhLENBQUNDLFFBQUQsQ0FBYjtDQUVBVyxFQUFBQSxNQUFNLEdBQUd2SSxNQUFNLENBQUN1SCxPQUFoQjs7Q0FDQSxNQUFJZ0IsTUFBTSxLQUFLaEYsU0FBZixFQUEwQjtDQUN4QmdGLElBQUFBLE1BQU0sR0FBR3ZJLE1BQU0sQ0FBQ3VILE9BQVAsR0FBaUJySixNQUFNLENBQUNhLE1BQVAsQ0FBYyxJQUFkLENBQTFCO0NBQ0FpQixJQUFBQSxNQUFNLENBQUN3SCxZQUFQLEdBQXNCLENBQXRCO0NBQ0QsR0FIRCxNQUdPOzs7Q0FHTCxRQUFJZSxNQUFNLENBQUNhLFdBQVAsS0FBdUI3RixTQUEzQixFQUFzQztDQUNwQ3ZELE1BQUFBLE1BQU0sQ0FBQ29JLElBQVAsQ0FBWSxhQUFaLEVBQTJCQyxJQUEzQixFQUNZVCxRQUFRLENBQUNBLFFBQVQsR0FBb0JBLFFBQVEsQ0FBQ0EsUUFBN0IsR0FBd0NBLFFBRHBELEVBRG9DOzs7Q0FNcENXLE1BQUFBLE1BQU0sR0FBR3ZJLE1BQU0sQ0FBQ3VILE9BQWhCO0NBQ0Q7O0NBQ0Q0QixJQUFBQSxRQUFRLEdBQUdaLE1BQU0sQ0FBQ0YsSUFBRCxDQUFqQjtDQUNEOztDQUVELE1BQUljLFFBQVEsS0FBSzVGLFNBQWpCLEVBQTRCOztDQUUxQjRGLElBQUFBLFFBQVEsR0FBR1osTUFBTSxDQUFDRixJQUFELENBQU4sR0FBZVQsUUFBMUI7Q0FDQSxNQUFFNUgsTUFBTSxDQUFDd0gsWUFBVDtDQUNELEdBSkQsTUFJTztDQUNMLFFBQUksT0FBTzJCLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7O0NBRWxDQSxNQUFBQSxRQUFRLEdBQUdaLE1BQU0sQ0FBQ0YsSUFBRCxDQUFOLEdBQ1RhLE9BQU8sR0FBRyxDQUFDdEIsUUFBRCxFQUFXdUIsUUFBWCxDQUFILEdBQTBCLENBQUNBLFFBQUQsRUFBV3ZCLFFBQVgsQ0FEbkMsQ0FGa0M7Q0FLbkMsS0FMRCxNQUtPLElBQUlzQixPQUFKLEVBQWE7Q0FDbEJDLE1BQUFBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQnpCLFFBQWpCO0NBQ0QsS0FGTSxNQUVBO0NBQ0x1QixNQUFBQSxRQUFRLENBQUNsRyxJQUFULENBQWMyRSxRQUFkO0NBQ0QsS0FWSTs7O0NBYUx4RSxJQUFBQSxDQUFDLEdBQUc2RSxnQkFBZ0IsQ0FBQ2pJLE1BQUQsQ0FBcEI7O0NBQ0EsUUFBSW9ELENBQUMsR0FBRyxDQUFKLElBQVMrRixRQUFRLENBQUM1SixNQUFULEdBQWtCNkQsQ0FBM0IsSUFBZ0MsQ0FBQytGLFFBQVEsQ0FBQ0csTUFBOUMsRUFBc0Q7Q0FDcERILE1BQUFBLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixJQUFsQixDQURvRDs7O0NBSXBELFVBQUlDLENBQUMsR0FBRyxJQUFJZCxLQUFKLENBQVUsaURBQ0VVLFFBQVEsQ0FBQzVKLE1BRFgsR0FDb0IsR0FEcEIsR0FDMEJYLE1BQU0sQ0FBQ3lKLElBQUQsQ0FEaEMsR0FDeUMsYUFEekMsR0FFRSwwQ0FGRixHQUdFLGdCQUhaLENBQVI7Q0FJQWtCLE1BQUFBLENBQUMsQ0FBQ0MsSUFBRixHQUFTLDZCQUFUO0NBQ0FELE1BQUFBLENBQUMsQ0FBQ0UsT0FBRixHQUFZekosTUFBWjtDQUNBdUosTUFBQUEsQ0FBQyxDQUFDbEIsSUFBRixHQUFTQSxJQUFUO0NBQ0FrQixNQUFBQSxDQUFDLENBQUNHLEtBQUYsR0FBVVAsUUFBUSxDQUFDNUosTUFBbkI7Q0FDQXFILE1BQUFBLGtCQUFrQixDQUFDMkMsQ0FBRCxDQUFsQjtDQUNEO0NBQ0Y7O0NBRUQsU0FBT3ZKLE1BQVA7Q0FDRDs7Q0FFRG1ILFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUJvTCxXQUF2QixHQUFxQyxTQUFTQSxXQUFULENBQXFCdEIsSUFBckIsRUFBMkJULFFBQTNCLEVBQXFDO0NBQ3hFLFNBQU9xQixZQUFZLENBQUMsSUFBRCxFQUFPWixJQUFQLEVBQWFULFFBQWIsRUFBdUIsS0FBdkIsQ0FBbkI7Q0FDRCxDQUZEOztDQUlBVCxZQUFZLENBQUM1SSxTQUFiLENBQXVCcUwsRUFBdkIsR0FBNEJ6QyxZQUFZLENBQUM1SSxTQUFiLENBQXVCb0wsV0FBbkQ7O0NBRUF4QyxZQUFZLENBQUM1SSxTQUFiLENBQXVCc0wsZUFBdkIsR0FDSSxTQUFTQSxlQUFULENBQXlCeEIsSUFBekIsRUFBK0JULFFBQS9CLEVBQXlDO0NBQ3ZDLFNBQU9xQixZQUFZLENBQUMsSUFBRCxFQUFPWixJQUFQLEVBQWFULFFBQWIsRUFBdUIsSUFBdkIsQ0FBbkI7Q0FDRCxDQUhMOztDQUtBLFNBQVNrQyxXQUFULEdBQXVCO0NBQ3JCLE1BQUksQ0FBQyxLQUFLQyxLQUFWLEVBQWlCO0NBQ2YsU0FBSy9KLE1BQUwsQ0FBWWdLLGNBQVosQ0FBMkIsS0FBSzNCLElBQWhDLEVBQXNDLEtBQUs0QixNQUEzQztDQUNBLFNBQUtGLEtBQUwsR0FBYSxJQUFiO0NBQ0EsUUFBSXpLLFNBQVMsQ0FBQ0MsTUFBVixLQUFxQixDQUF6QixFQUNFLE9BQU8sS0FBS3FJLFFBQUwsQ0FBY25KLElBQWQsQ0FBbUIsS0FBS3VCLE1BQXhCLENBQVA7Q0FDRixXQUFPLEtBQUs0SCxRQUFMLENBQWNwSSxLQUFkLENBQW9CLEtBQUtRLE1BQXpCLEVBQWlDVixTQUFqQyxDQUFQO0NBQ0Q7Q0FDRjs7Q0FFRCxTQUFTNEssU0FBVCxDQUFtQmxLLE1BQW5CLEVBQTJCcUksSUFBM0IsRUFBaUNULFFBQWpDLEVBQTJDO0NBQ3pDLE1BQUk1QixLQUFLLEdBQUc7Q0FBRStELElBQUFBLEtBQUssRUFBRSxLQUFUO0NBQWdCRSxJQUFBQSxNQUFNLEVBQUUxRyxTQUF4QjtDQUFtQ3ZELElBQUFBLE1BQU0sRUFBRUEsTUFBM0M7Q0FBbURxSSxJQUFBQSxJQUFJLEVBQUVBLElBQXpEO0NBQStEVCxJQUFBQSxRQUFRLEVBQUVBO0NBQXpFLEdBQVo7Q0FDQSxNQUFJdUMsT0FBTyxHQUFHTCxXQUFXLENBQUNNLElBQVosQ0FBaUJwRSxLQUFqQixDQUFkO0NBQ0FtRSxFQUFBQSxPQUFPLENBQUN2QyxRQUFSLEdBQW1CQSxRQUFuQjtDQUNBNUIsRUFBQUEsS0FBSyxDQUFDaUUsTUFBTixHQUFlRSxPQUFmO0NBQ0EsU0FBT0EsT0FBUDtDQUNEOztDQUVEaEQsWUFBWSxDQUFDNUksU0FBYixDQUF1QitJLElBQXZCLEdBQThCLFNBQVNBLElBQVQsQ0FBY2UsSUFBZCxFQUFvQlQsUUFBcEIsRUFBOEI7Q0FDMURELEVBQUFBLGFBQWEsQ0FBQ0MsUUFBRCxDQUFiO0NBQ0EsT0FBS2dDLEVBQUwsQ0FBUXZCLElBQVIsRUFBYzZCLFNBQVMsQ0FBQyxJQUFELEVBQU83QixJQUFQLEVBQWFULFFBQWIsQ0FBdkI7Q0FDQSxTQUFPLElBQVA7Q0FDRCxDQUpEOztDQU1BVCxZQUFZLENBQUM1SSxTQUFiLENBQXVCOEwsbUJBQXZCLEdBQ0ksU0FBU0EsbUJBQVQsQ0FBNkJoQyxJQUE3QixFQUFtQ1QsUUFBbkMsRUFBNkM7Q0FDM0NELEVBQUFBLGFBQWEsQ0FBQ0MsUUFBRCxDQUFiO0NBQ0EsT0FBS2lDLGVBQUwsQ0FBcUJ4QixJQUFyQixFQUEyQjZCLFNBQVMsQ0FBQyxJQUFELEVBQU83QixJQUFQLEVBQWFULFFBQWIsQ0FBcEM7Q0FDQSxTQUFPLElBQVA7Q0FDRCxDQUxMOzs7Q0FRQVQsWUFBWSxDQUFDNUksU0FBYixDQUF1QnlMLGNBQXZCLEdBQ0ksU0FBU0EsY0FBVCxDQUF3QjNCLElBQXhCLEVBQThCVCxRQUE5QixFQUF3QztDQUN0QyxNQUFJMEMsSUFBSixFQUFVL0IsTUFBVixFQUFrQmdDLFFBQWxCLEVBQTRCbkwsQ0FBNUIsRUFBK0JvTCxnQkFBL0I7Q0FFQTdDLEVBQUFBLGFBQWEsQ0FBQ0MsUUFBRCxDQUFiO0NBRUFXLEVBQUFBLE1BQU0sR0FBRyxLQUFLaEIsT0FBZDtDQUNBLE1BQUlnQixNQUFNLEtBQUtoRixTQUFmLEVBQ0UsT0FBTyxJQUFQO0NBRUYrRyxFQUFBQSxJQUFJLEdBQUcvQixNQUFNLENBQUNGLElBQUQsQ0FBYjtDQUNBLE1BQUlpQyxJQUFJLEtBQUsvRyxTQUFiLEVBQ0UsT0FBTyxJQUFQOztDQUVGLE1BQUkrRyxJQUFJLEtBQUsxQyxRQUFULElBQXFCMEMsSUFBSSxDQUFDMUMsUUFBTCxLQUFrQkEsUUFBM0MsRUFBcUQ7Q0FDbkQsUUFBSSxFQUFFLEtBQUtKLFlBQVAsS0FBd0IsQ0FBNUIsRUFDRSxLQUFLRCxPQUFMLEdBQWVySixNQUFNLENBQUNhLE1BQVAsQ0FBYyxJQUFkLENBQWYsQ0FERixLQUVLO0NBQ0gsYUFBT3dKLE1BQU0sQ0FBQ0YsSUFBRCxDQUFiO0NBQ0EsVUFBSUUsTUFBTSxDQUFDeUIsY0FBWCxFQUNFLEtBQUs1QixJQUFMLENBQVUsZ0JBQVYsRUFBNEJDLElBQTVCLEVBQWtDaUMsSUFBSSxDQUFDMUMsUUFBTCxJQUFpQkEsUUFBbkQ7Q0FDSDtDQUNGLEdBUkQsTUFRTyxJQUFJLE9BQU8wQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0NBQ3JDQyxJQUFBQSxRQUFRLEdBQUcsQ0FBQyxDQUFaOztDQUVBLFNBQUtuTCxDQUFDLEdBQUdrTCxJQUFJLENBQUMvSyxNQUFMLEdBQWMsQ0FBdkIsRUFBMEJILENBQUMsSUFBSSxDQUEvQixFQUFrQ0EsQ0FBQyxFQUFuQyxFQUF1QztDQUNyQyxVQUFJa0wsSUFBSSxDQUFDbEwsQ0FBRCxDQUFKLEtBQVl3SSxRQUFaLElBQXdCMEMsSUFBSSxDQUFDbEwsQ0FBRCxDQUFKLENBQVF3SSxRQUFSLEtBQXFCQSxRQUFqRCxFQUEyRDtDQUN6RDRDLFFBQUFBLGdCQUFnQixHQUFHRixJQUFJLENBQUNsTCxDQUFELENBQUosQ0FBUXdJLFFBQTNCO0NBQ0EyQyxRQUFBQSxRQUFRLEdBQUduTCxDQUFYO0NBQ0E7Q0FDRDtDQUNGOztDQUVELFFBQUltTCxRQUFRLEdBQUcsQ0FBZixFQUNFLE9BQU8sSUFBUDtDQUVGLFFBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUNFRCxJQUFJLENBQUNuRixLQUFMLEdBREYsS0FFSztDQUNIc0YsTUFBQUEsU0FBUyxDQUFDSCxJQUFELEVBQU9DLFFBQVAsQ0FBVDtDQUNEO0NBRUQsUUFBSUQsSUFBSSxDQUFDL0ssTUFBTCxLQUFnQixDQUFwQixFQUNFZ0osTUFBTSxDQUFDRixJQUFELENBQU4sR0FBZWlDLElBQUksQ0FBQyxDQUFELENBQW5CO0NBRUYsUUFBSS9CLE1BQU0sQ0FBQ3lCLGNBQVAsS0FBMEJ6RyxTQUE5QixFQUNFLEtBQUs2RSxJQUFMLENBQVUsZ0JBQVYsRUFBNEJDLElBQTVCLEVBQWtDbUMsZ0JBQWdCLElBQUk1QyxRQUF0RDtDQUNIOztDQUVELFNBQU8sSUFBUDtDQUNELENBbERMOztDQW9EQVQsWUFBWSxDQUFDNUksU0FBYixDQUF1Qm1NLEdBQXZCLEdBQTZCdkQsWUFBWSxDQUFDNUksU0FBYixDQUF1QnlMLGNBQXBEOztDQUVBN0MsWUFBWSxDQUFDNUksU0FBYixDQUF1Qm9NLGtCQUF2QixHQUNJLFNBQVNBLGtCQUFULENBQTRCdEMsSUFBNUIsRUFBa0M7Q0FDaEMsTUFBSVUsU0FBSixFQUFlUixNQUFmLEVBQXVCbkosQ0FBdkI7Q0FFQW1KLEVBQUFBLE1BQU0sR0FBRyxLQUFLaEIsT0FBZDtDQUNBLE1BQUlnQixNQUFNLEtBQUtoRixTQUFmLEVBQ0UsT0FBTyxJQUFQLENBTDhCOztDQVFoQyxNQUFJZ0YsTUFBTSxDQUFDeUIsY0FBUCxLQUEwQnpHLFNBQTlCLEVBQXlDO0NBQ3ZDLFFBQUlqRSxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7Q0FDMUIsV0FBS2dJLE9BQUwsR0FBZXJKLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLElBQWQsQ0FBZjtDQUNBLFdBQUt5SSxZQUFMLEdBQW9CLENBQXBCO0NBQ0QsS0FIRCxNQUdPLElBQUllLE1BQU0sQ0FBQ0YsSUFBRCxDQUFOLEtBQWlCOUUsU0FBckIsRUFBZ0M7Q0FDckMsVUFBSSxFQUFFLEtBQUtpRSxZQUFQLEtBQXdCLENBQTVCLEVBQ0UsS0FBS0QsT0FBTCxHQUFlckosTUFBTSxDQUFDYSxNQUFQLENBQWMsSUFBZCxDQUFmLENBREYsS0FHRSxPQUFPd0osTUFBTSxDQUFDRixJQUFELENBQWI7Q0FDSDs7Q0FDRCxXQUFPLElBQVA7Q0FDRCxHQW5CK0I7OztDQXNCaEMsTUFBSS9JLFNBQVMsQ0FBQ0MsTUFBVixLQUFxQixDQUF6QixFQUE0QjtDQUMxQixRQUFJcUwsSUFBSSxHQUFHMU0sTUFBTSxDQUFDME0sSUFBUCxDQUFZckMsTUFBWixDQUFYO0NBQ0EsUUFBSXRJLEdBQUo7O0NBQ0EsU0FBS2IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHd0wsSUFBSSxDQUFDckwsTUFBckIsRUFBNkIsRUFBRUgsQ0FBL0IsRUFBa0M7Q0FDaENhLE1BQUFBLEdBQUcsR0FBRzJLLElBQUksQ0FBQ3hMLENBQUQsQ0FBVjtDQUNBLFVBQUlhLEdBQUcsS0FBSyxnQkFBWixFQUE4QjtDQUM5QixXQUFLMEssa0JBQUwsQ0FBd0IxSyxHQUF4QjtDQUNEOztDQUNELFNBQUswSyxrQkFBTCxDQUF3QixnQkFBeEI7Q0FDQSxTQUFLcEQsT0FBTCxHQUFlckosTUFBTSxDQUFDYSxNQUFQLENBQWMsSUFBZCxDQUFmO0NBQ0EsU0FBS3lJLFlBQUwsR0FBb0IsQ0FBcEI7Q0FDQSxXQUFPLElBQVA7Q0FDRDs7Q0FFRHVCLEVBQUFBLFNBQVMsR0FBR1IsTUFBTSxDQUFDRixJQUFELENBQWxCOztDQUVBLE1BQUksT0FBT1UsU0FBUCxLQUFxQixVQUF6QixFQUFxQztDQUNuQyxTQUFLaUIsY0FBTCxDQUFvQjNCLElBQXBCLEVBQTBCVSxTQUExQjtDQUNELEdBRkQsTUFFTyxJQUFJQSxTQUFTLEtBQUt4RixTQUFsQixFQUE2Qjs7Q0FFbEMsU0FBS25FLENBQUMsR0FBRzJKLFNBQVMsQ0FBQ3hKLE1BQVYsR0FBbUIsQ0FBNUIsRUFBK0JILENBQUMsSUFBSSxDQUFwQyxFQUF1Q0EsQ0FBQyxFQUF4QyxFQUE0QztDQUMxQyxXQUFLNEssY0FBTCxDQUFvQjNCLElBQXBCLEVBQTBCVSxTQUFTLENBQUMzSixDQUFELENBQW5DO0NBQ0Q7Q0FDRjs7Q0FFRCxTQUFPLElBQVA7Q0FDRCxDQWpETDs7Q0FtREEsU0FBU3lMLFVBQVQsQ0FBb0I3SyxNQUFwQixFQUE0QnFJLElBQTVCLEVBQWtDeUMsTUFBbEMsRUFBMEM7Q0FDeEMsTUFBSXZDLE1BQU0sR0FBR3ZJLE1BQU0sQ0FBQ3VILE9BQXBCO0NBRUEsTUFBSWdCLE1BQU0sS0FBS2hGLFNBQWYsRUFDRSxPQUFPLEVBQVA7Q0FFRixNQUFJd0gsVUFBVSxHQUFHeEMsTUFBTSxDQUFDRixJQUFELENBQXZCO0NBQ0EsTUFBSTBDLFVBQVUsS0FBS3hILFNBQW5CLEVBQ0UsT0FBTyxFQUFQO0NBRUYsTUFBSSxPQUFPd0gsVUFBUCxLQUFzQixVQUExQixFQUNFLE9BQU9ELE1BQU0sR0FBRyxDQUFDQyxVQUFVLENBQUNuRCxRQUFYLElBQXVCbUQsVUFBeEIsQ0FBSCxHQUF5QyxDQUFDQSxVQUFELENBQXREO0NBRUYsU0FBT0QsTUFBTSxHQUNYRSxlQUFlLENBQUNELFVBQUQsQ0FESixHQUNtQi9CLFVBQVUsQ0FBQytCLFVBQUQsRUFBYUEsVUFBVSxDQUFDeEwsTUFBeEIsQ0FEMUM7Q0FFRDs7Q0FFRDRILFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUJ3SyxTQUF2QixHQUFtQyxTQUFTQSxTQUFULENBQW1CVixJQUFuQixFQUF5QjtDQUMxRCxTQUFPd0MsVUFBVSxDQUFDLElBQUQsRUFBT3hDLElBQVAsRUFBYSxJQUFiLENBQWpCO0NBQ0QsQ0FGRDs7Q0FJQWxCLFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUIwTSxZQUF2QixHQUFzQyxTQUFTQSxZQUFULENBQXNCNUMsSUFBdEIsRUFBNEI7Q0FDaEUsU0FBT3dDLFVBQVUsQ0FBQyxJQUFELEVBQU94QyxJQUFQLEVBQWEsS0FBYixDQUFqQjtDQUNELENBRkQ7O0NBSUFsQixZQUFZLENBQUMrRCxhQUFiLEdBQTZCLFVBQVN6QixPQUFULEVBQWtCcEIsSUFBbEIsRUFBd0I7Q0FDbkQsTUFBSSxPQUFPb0IsT0FBTyxDQUFDeUIsYUFBZixLQUFpQyxVQUFyQyxFQUFpRDtDQUMvQyxXQUFPekIsT0FBTyxDQUFDeUIsYUFBUixDQUFzQjdDLElBQXRCLENBQVA7Q0FDRCxHQUZELE1BRU87Q0FDTCxXQUFPNkMsYUFBYSxDQUFDek0sSUFBZCxDQUFtQmdMLE9BQW5CLEVBQTRCcEIsSUFBNUIsQ0FBUDtDQUNEO0NBQ0YsQ0FORDs7Q0FRQWxCLFlBQVksQ0FBQzVJLFNBQWIsQ0FBdUIyTSxhQUF2QixHQUF1Q0EsYUFBdkM7O0NBQ0EsU0FBU0EsYUFBVCxDQUF1QjdDLElBQXZCLEVBQTZCO0NBQzNCLE1BQUlFLE1BQU0sR0FBRyxLQUFLaEIsT0FBbEI7O0NBRUEsTUFBSWdCLE1BQU0sS0FBS2hGLFNBQWYsRUFBMEI7Q0FDeEIsUUFBSXdILFVBQVUsR0FBR3hDLE1BQU0sQ0FBQ0YsSUFBRCxDQUF2Qjs7Q0FFQSxRQUFJLE9BQU8wQyxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0NBQ3BDLGFBQU8sQ0FBUDtDQUNELEtBRkQsTUFFTyxJQUFJQSxVQUFVLEtBQUt4SCxTQUFuQixFQUE4QjtDQUNuQyxhQUFPd0gsVUFBVSxDQUFDeEwsTUFBbEI7Q0FDRDtDQUNGOztDQUVELFNBQU8sQ0FBUDtDQUNEOztDQUVENEgsWUFBWSxDQUFDNUksU0FBYixDQUF1QjRNLFVBQXZCLEdBQW9DLFNBQVNBLFVBQVQsR0FBc0I7Q0FDeEQsU0FBTyxLQUFLM0QsWUFBTCxHQUFvQixDQUFwQixHQUF3QmYsY0FBYyxDQUFDLEtBQUtjLE9BQU4sQ0FBdEMsR0FBdUQsRUFBOUQ7Q0FDRCxDQUZEOztDQUlBLFNBQVN5QixVQUFULENBQW9Cb0MsR0FBcEIsRUFBeUIvTCxDQUF6QixFQUE0QjtDQUMxQixNQUFJZ00sSUFBSSxHQUFHLElBQUloTixLQUFKLENBQVVnQixDQUFWLENBQVg7O0NBQ0EsT0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxDQUFwQixFQUF1QixFQUFFRCxDQUF6QjtDQUNFaU0sSUFBQUEsSUFBSSxDQUFDak0sQ0FBRCxDQUFKLEdBQVVnTSxHQUFHLENBQUNoTSxDQUFELENBQWI7Q0FERjs7Q0FFQSxTQUFPaU0sSUFBUDtDQUNEOztDQUVELFNBQVNaLFNBQVQsQ0FBbUJILElBQW5CLEVBQXlCZ0IsS0FBekIsRUFBZ0M7Q0FDOUIsU0FBT0EsS0FBSyxHQUFHLENBQVIsR0FBWWhCLElBQUksQ0FBQy9LLE1BQXhCLEVBQWdDK0wsS0FBSyxFQUFyQztDQUNFaEIsSUFBQUEsSUFBSSxDQUFDZ0IsS0FBRCxDQUFKLEdBQWNoQixJQUFJLENBQUNnQixLQUFLLEdBQUcsQ0FBVCxDQUFsQjtDQURGOztDQUVBaEIsRUFBQUEsSUFBSSxDQUFDdEgsR0FBTDtDQUNEOztDQUVELFNBQVNnSSxlQUFULENBQXlCSSxHQUF6QixFQUE4QjtDQUM1QixNQUFJRyxHQUFHLEdBQUcsSUFBSWxOLEtBQUosQ0FBVStNLEdBQUcsQ0FBQzdMLE1BQWQsQ0FBVjs7Q0FDQSxPQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtTSxHQUFHLENBQUNoTSxNQUF4QixFQUFnQyxFQUFFSCxDQUFsQyxFQUFxQztDQUNuQ21NLElBQUFBLEdBQUcsQ0FBQ25NLENBQUQsQ0FBSCxHQUFTZ00sR0FBRyxDQUFDaE0sQ0FBRCxDQUFILENBQU93SSxRQUFQLElBQW1Cd0QsR0FBRyxDQUFDaE0sQ0FBRCxDQUEvQjtDQUNEOztDQUNELFNBQU9tTSxHQUFQO0NBQ0Q7O0NBRUQsU0FBU2pFLElBQVQsQ0FBY21DLE9BQWQsRUFBdUJELElBQXZCLEVBQTZCO0NBQzNCLFNBQU8sSUFBSWhJLE9BQUosQ0FBWSxVQUFVRCxPQUFWLEVBQW1CRSxNQUFuQixFQUEyQjtDQUM1QyxhQUFTK0osYUFBVCxDQUF1QjlDLEdBQXZCLEVBQTRCO0NBQzFCZSxNQUFBQSxPQUFPLENBQUNPLGNBQVIsQ0FBdUJSLElBQXZCLEVBQTZCaUMsUUFBN0I7Q0FDQWhLLE1BQUFBLE1BQU0sQ0FBQ2lILEdBQUQsQ0FBTjtDQUNEOztDQUVELGFBQVMrQyxRQUFULEdBQW9CO0NBQ2xCLFVBQUksT0FBT2hDLE9BQU8sQ0FBQ08sY0FBZixLQUFrQyxVQUF0QyxFQUFrRDtDQUNoRFAsUUFBQUEsT0FBTyxDQUFDTyxjQUFSLENBQXVCLE9BQXZCLEVBQWdDd0IsYUFBaEM7Q0FDRDs7Q0FDRGpLLE1BQUFBLE9BQU8sQ0FBQyxHQUFHb0QsS0FBSCxDQUFTbEcsSUFBVCxDQUFjYSxTQUFkLENBQUQsQ0FBUDtDQUNEO0NBRURvTSxJQUFBQSw4QkFBOEIsQ0FBQ2pDLE9BQUQsRUFBVUQsSUFBVixFQUFnQmlDLFFBQWhCLEVBQTBCO0NBQUVuRSxNQUFBQSxJQUFJLEVBQUU7Q0FBUixLQUExQixDQUE5Qjs7Q0FDQSxRQUFJa0MsSUFBSSxLQUFLLE9BQWIsRUFBc0I7Q0FDcEJtQyxNQUFBQSw2QkFBNkIsQ0FBQ2xDLE9BQUQsRUFBVStCLGFBQVYsRUFBeUI7Q0FBRWxFLFFBQUFBLElBQUksRUFBRTtDQUFSLE9BQXpCLENBQTdCO0NBQ0Q7Q0FDRixHQWpCTSxDQUFQO0NBa0JEOztDQUVELFNBQVNxRSw2QkFBVCxDQUF1Q2xDLE9BQXZDLEVBQWdEWixPQUFoRCxFQUF5RCtDLEtBQXpELEVBQWdFO0NBQzlELE1BQUksT0FBT25DLE9BQU8sQ0FBQ0csRUFBZixLQUFzQixVQUExQixFQUFzQztDQUNwQzhCLElBQUFBLDhCQUE4QixDQUFDakMsT0FBRCxFQUFVLE9BQVYsRUFBbUJaLE9BQW5CLEVBQTRCK0MsS0FBNUIsQ0FBOUI7Q0FDRDtDQUNGOztDQUVELFNBQVNGLDhCQUFULENBQXdDakMsT0FBeEMsRUFBaURELElBQWpELEVBQXVENUIsUUFBdkQsRUFBaUVnRSxLQUFqRSxFQUF3RTtDQUN0RSxNQUFJLE9BQU9uQyxPQUFPLENBQUNHLEVBQWYsS0FBc0IsVUFBMUIsRUFBc0M7Q0FDcEMsUUFBSWdDLEtBQUssQ0FBQ3RFLElBQVYsRUFBZ0I7Q0FDZG1DLE1BQUFBLE9BQU8sQ0FBQ25DLElBQVIsQ0FBYWtDLElBQWIsRUFBbUI1QixRQUFuQjtDQUNELEtBRkQsTUFFTztDQUNMNkIsTUFBQUEsT0FBTyxDQUFDRyxFQUFSLENBQVdKLElBQVgsRUFBaUI1QixRQUFqQjtDQUNEO0NBQ0YsR0FORCxNQU1PLElBQUksT0FBTzZCLE9BQU8sQ0FBQ29DLGdCQUFmLEtBQW9DLFVBQXhDLEVBQW9EOzs7Q0FHekRwQyxJQUFBQSxPQUFPLENBQUNvQyxnQkFBUixDQUF5QnJDLElBQXpCLEVBQStCLFNBQVNzQyxZQUFULENBQXNCakUsR0FBdEIsRUFBMkI7OztDQUd4RCxVQUFJK0QsS0FBSyxDQUFDdEUsSUFBVixFQUFnQjtDQUNkbUMsUUFBQUEsT0FBTyxDQUFDc0MsbUJBQVIsQ0FBNEJ2QyxJQUE1QixFQUFrQ3NDLFlBQWxDO0NBQ0Q7O0NBQ0RsRSxNQUFBQSxRQUFRLENBQUNDLEdBQUQsQ0FBUjtDQUNELEtBUEQ7Q0FRRCxHQVhNLE1BV0E7Q0FDTCxVQUFNLElBQUlsSixTQUFKLENBQWMsZ0ZBQStFOEssT0FBL0UsQ0FBZCxDQUFOO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQzllSCw4REFBMEM7Q0FDMUMsOERBQTBDO0NBRTFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztDQUN4QixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7Q0FDMUIsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO0NBQ2xDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztDQUM1QixNQUFNLFlBQVksR0FBRyxjQUFjLENBQUM7Q0FDcEMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0NBQ3RDLE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztDQUN0QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7Q0FDeEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0NBQ3RCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztDQUM1QixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7Q0FDNUIsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0NBQzVCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztDQUM1QixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7Q0FDNUIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0NBQ2xCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztDQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7Q0FDeEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0NBQ3hCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztDQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7Q0FDeEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0NBQ3hCLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztDQUNoQyxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7Q0FDOUIsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUM7Q0FDMUMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0NBQ3RDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztDQUNwQixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7Q0FDMUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0NBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztDQUMxQixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7Q0FDMUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0NBRTFCLE1BQU0sY0FBYyxHQUFhO0tBQ2hDLE1BQU07S0FDTixNQUFNO0tBQ04sTUFBTTtLQUNOLE1BQU07S0FDTixNQUFNO0VBQ04sQ0FBQzswQ0E2SGE7Q0EzSGYsTUFBTSxnQkFBZ0IsR0FBYTtLQUNsQyxRQUFRO0tBQ1IsUUFBUTtLQUNSLFFBQVE7S0FDUixRQUFRO0tBQ1IsUUFBUTtFQUNSLENBQUM7OENBc0hlO0NBcEhqQixNQUFNLGVBQWUsR0FBYTtLQUNqQyxPQUFPO0tBQ1AsT0FBTztLQUNQLE9BQU87S0FDUCxPQUFPO0tBQ1AsT0FBTztFQUNQLENBQUM7NENBK0djO0NBN0doQixNQUFNLGlCQUFpQixHQUFhO0tBQ25DLFNBQVM7S0FDVCxVQUFVO0VBQ1YsQ0FBQztnREEyR2dCO0NBekdsQixNQUFNLFdBQVcsR0FBYztLQUM5QixNQUFNO0tBQ04sT0FBTztLQUNQLFdBQVc7S0FDWCxRQUFRO0tBQ1IsWUFBWTtLQUNaLGFBQWE7S0FDYixhQUFhO0tBQ2IsTUFBTTtLQUNOLEtBQUs7S0FDTCxHQUFHO0tBQ0gsU0FBUztLQUNULFVBQVU7S0FDVixlQUFlO0tBQ2YsYUFBYTtLQUNiLElBQUk7RUFDSixDQUFDO0NBRUYsTUFBTSxrQkFBa0IsR0FBK0I7S0FDdEQsQ0FBQyxNQUFNLEdBQUcsUUFBUSxNQUFNLEVBQUU7S0FDMUIsQ0FBQyxPQUFPLEdBQUcsUUFBUSxPQUFPLEVBQUU7S0FDNUIsQ0FBQyxXQUFXLEdBQUcsUUFBUSxXQUFXLEVBQUU7S0FDcEMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxRQUFRLEVBQUU7S0FDOUIsQ0FBQyxZQUFZLEdBQUcsUUFBUSxZQUFZLEVBQUU7S0FDdEMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxhQUFhLEVBQUU7S0FDeEMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxhQUFhLEVBQUU7S0FDeEMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxNQUFNLEVBQUU7S0FDMUIsQ0FBQyxLQUFLLEdBQUcsUUFBUSxLQUFLLEVBQUU7S0FDeEIsQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLEVBQUU7S0FDcEIsQ0FBQyxNQUFNLEdBQUcsUUFBUSxNQUFNLEVBQUU7S0FDMUIsQ0FBQyxlQUFlLEdBQUcsUUFBUSxlQUFlLEVBQUU7S0FDNUMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxhQUFhLEVBQUU7S0FDeEMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLEVBQUU7RUFDdEIsQ0FBQztDQUlGLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7MEJBK0RuQztDQTlEUCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnREErRDFDO0NBN0RsQixNQUFNLGVBQWUsR0FBa0I7S0FDdEMsaURBQWlELEVBQUU7U0FDbEQsTUFBTSxFQUFFO2FBRVAsT0FBTyxFQUFFLE1BQU07VUFDZjtNQUNEO0tBQ0QsZ0JBQWdCLEVBQUU7U0FDakIsTUFBTSxFQUFFO2FBQ1AsUUFBUSxFQUFFLFFBQVE7VUFDbEI7TUFDRDtLQUNELGFBQWEsRUFBRTtTQUNkLE1BQU0sRUFBRTthQUNQLFFBQVEsRUFBRSxRQUFRO1VBQ2xCO01BQ0Q7S0FDRCwyQkFBMkIsRUFBRTtTQUM1QixNQUFNLEVBQUU7YUFDUCxPQUFPLEVBQUUsb0ZBQW9GO1VBQzdGO01BQ0Q7S0FDRCxRQUFRLEVBQUU7U0FDVCxNQUFNLEVBQUU7YUFDUCxRQUFRLEVBQUUsUUFBUTtVQUNsQjtNQUNEO0tBQ0QsS0FBSyxFQUFFO1NBQ04sTUFBTSxFQUFFO2FBQ1AsT0FBTyxFQUFFLG9GQUFvRjtVQUM3RjtNQUNEO0VBQ0QsQ0FBQzt3Q0EyQjZCO0NBdkIvQixNQUFNLEtBQUssR0FBaUM7S0FDM0MsS0FBSyxFQUFFLElBQUk7S0FDWCxLQUFLLEVBQUUsSUFBSTtFQUNYLENBQUM7Q0FDRixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3NCQWlCN0I7Q0FmTCxNQUFNLFNBQVMsR0FBeUQ7S0FDdkUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHO1NBQ2IsSUFBSSxFQUFFLGtCQUFZO1NBQ2xCLFFBQVEsRUFBRSw0RkFBNEY7TUFFdEc7S0FDRCxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUc7U0FDYixJQUFJLEVBQUUsa0JBQVk7U0FDbEIsUUFBUSxFQUFFLDRGQUE0RjtNQUV0RztFQUNELENBQUM7Q0FDRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0NDOUoxQyxNQUFxQixVQUFVO0tBUTlCLFlBQVkscUJBQTRDLEVBQUUsUUFBa0I7U0FOckUsYUFBUSxHQUFpQyxJQUFJLENBQUM7U0FDN0MsVUFBSyxHQUFvQixJQUFJLENBQUM7U0FDOUIsVUFBSyxHQUFxQixJQUFJLENBQUM7U0FDL0IsWUFBTyxHQUFXLENBQUMsQ0FBQztTQUNwQixrQkFBYSxHQUFXLENBQUMsQ0FBQztTQUdqQyxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1NBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztNQUMzQjtLQUVELElBQVcsTUFBTSxDQUFDLEdBQVc7U0FDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO01BQ2xCO0tBRUQsSUFBVyxNQUFNO1NBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUNwQjtLQUVELElBQVcsWUFBWSxDQUFDLEdBQVc7U0FDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7U0FDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO01BQ2xCO0tBRUQsSUFBVyxZQUFZO1NBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUMxQjtLQUVPLFVBQVU7U0FDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7YUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ2pGO0tBRU0sT0FBTyxDQUFDLFNBQW9COztTQUNsQyxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN2QixPQUFPLElBQUksQ0FBQztNQUNaO0VBRUQ7Ozs7Ozs7Q0NsQ0QsTUFBcUIsS0FBSztLQWtDekIsWUFBb0IsTUFBVyxFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLEVBQVUsRUFBRSxJQUFlLEVBQUUsT0FBaUI7U0F4QnZHLGNBQVMsR0FBVyxFQUFFLENBQUM7U0FDdkIsUUFBRyxHQUFXLENBQUMsQ0FBQztTQUNoQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1NBQ2xCLGNBQVMsR0FBVyxHQUFHLENBQUM7U0FDeEIsV0FBTSxHQUFXLENBQUMsQ0FBQztTQUNuQixnQkFBVyxHQUFlLFNBQVMsQ0FBQztTQUNwQyxjQUFTLEdBQWUsU0FBUyxDQUFDO1NBQ2xDLGFBQVEsR0FBVyxDQUFDLENBQUM7U0F3RXJCLFdBQU0sR0FBRyxDQUFPLElBQVksRUFBRSxFQUFVO2FBQy9DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUztpQkFBRSxPQUFPO2FBRXZELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUVaLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3hCLE1BQU0sT0FBTyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBRXRDLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEVBQUU7aUJBQzVCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsR0FBRztxQkFBRSxTQUFTO2lCQUUzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMzQixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLEtBQUssT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO2lCQUNqRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztpQkFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2pCLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRztxQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDM0MsQ0FBQyxDQUFDO2NBQ0g7YUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztVQUNuQixDQUFBLENBQUM7U0FFSyxTQUFJLEdBQUc7YUFDYixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7VUFDcEMsQ0FBQztTQXJGRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNkLE9BQU8sbUNBQ0gsS0FBSyxDQUFDLGVBQWUsR0FDckIsT0FBTyxDQUNWLENBQUM7U0FDRixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxRQUFTLENBQUM7U0FDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBTSxDQUFDO1NBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVcsQ0FBQztTQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxRQUFTLENBQUM7U0FFcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7YUFDL0MsUUFBUSxJQUFJO2lCQUNYLEtBQUssSUFBSTtxQkFDUixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ2hCLE1BQU07aUJBQ1AsS0FBSyxNQUFNO3FCQUNWLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDbEIsTUFBTTtpQkFDUCxLQUFLLFFBQVE7cUJBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUNwQixNQUFNO2NBR1A7VUFDRDtjQUFNO2FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLHVCQUF1QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztVQUM5RTtNQUNEO0tBOUNNLE9BQU8sRUFBRSxDQUFDLE1BQVcsRUFBRSxRQUFnQixFQUFFLEVBQVUsRUFBRSxPQUFpQjtTQUM1RSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTO2FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLFFBQVEsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUM7O2FBQ2pHLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztNQUM5RDtLQUVNLE9BQU8sSUFBSSxDQUFDLE1BQVcsRUFBRSxRQUFnQixFQUFFLElBQVksRUFBRSxPQUFpQjtTQUNoRixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTO2FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLFFBQVEsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDdEcsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQzdEO0tBRU0sT0FBTyxNQUFNLENBQUMsTUFBVyxFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLEVBQVUsRUFBRSxPQUFpQjtTQUM5RixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTO2FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLFFBQVEsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDdEcsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQ2hFO0tBbUNELElBQVksS0FBSztTQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7TUFDekI7S0FFTyxRQUFRO1NBQ2YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN0QjtLQUVPLFVBQVU7U0FDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN4QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN0QjtLQUVPLFlBQVk7U0FDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN4QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3RCOzt1QkFtQ0Q7Q0F4SGUscUJBQWUsR0FBWTtLQUN6QyxRQUFRLEVBQUUsR0FBRztLQUNiLEtBQUssRUFBRSxDQUFDO0tBQ1IsVUFBVSxFQUFFLFNBQVM7S0FDckIsUUFBUSxFQUFFLFNBQVM7RUFDbkI7Ozs7Q0NoQkYsOERBQXFDO0NBRXJDLHdEQUE0QjtDQXNCNUIsTUFBcUIsV0FBVztLQTZFL0I7U0F0RVEsc0JBQWlCLEdBQXVCLElBQUksQ0FBQztTQUM3QyxpQkFBWSxHQUF1QixJQUFJLENBQUM7U0FDeEMsZUFBVSxHQUEyQixJQUFJLEdBQUcsRUFBcUIsQ0FBQztTQUNsRSxTQUFJLEdBQVcsSUFBSSxDQUFDO1NBQ3BCLFVBQUssR0FBc0IsSUFBSSxDQUFDO1NBQ2hDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztTQUNwQyxlQUFVLEdBQVksS0FBSyxDQUFDO1NBQzVCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztTQUNyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztTQUM5QixrQkFBYSxHQUFXLENBQUMsQ0FBQztTQUMxQixvQkFBZSxHQUFnQyxJQUFJLENBQUM7U0E2RDNELFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ2xDO0tBNURNLFdBQVcsUUFBUTtTQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7TUFDdEI7S0FFTSxPQUFPLFFBQVE7U0FDckIsSUFBSSxJQUFJLENBQUMsU0FBUzthQUFFLE9BQU87U0FFM0IsSUFBSTthQUNILE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDO2FBQ3RFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzthQUUvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDaEQsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUVoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUV0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztVQUM1QjtTQUFDLE9BQU8sR0FBRyxFQUFFO2FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsR0FBRyxFQUFFLENBQUMsQ0FBQztVQUNsRTtNQUNEO0tBRU8sT0FBTyxvQkFBb0I7U0FDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFxQjthQUM3QyxJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7aUJBQ3pELFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztjQUNuQjtVQUNELENBQUMsQ0FBQztNQUNIO0tBRU8sT0FBYSxrQkFBa0IsQ0FBQyxNQUFtQjs7YUFDMUQsSUFBSTtpQkFDSCxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3FCQUM5RSxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7a0JBQ2hEO3NCQUFNO3FCQUNOLE9BQU8sSUFBSSxPQUFPLENBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRzt5QkFDeEMsSUFBSSxDQUFDLElBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUNoQyxDQUFDLElBQWlCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUNoQyxDQUFDLEdBQVUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ3hCLENBQUM7c0JBQ0YsQ0FBQyxDQUFDO2tCQUNIO2NBQ0Q7YUFBQyxPQUFPLEdBQUcsRUFBRTtpQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxHQUFHLEVBQUUsQ0FBQyxDQUFDO2NBQzlFO1VBQ0Q7TUFBQTtLQUVPLE9BQWEsdUJBQXVCLENBQUMsUUFBZ0I7O2FBQzVELElBQUk7aUJBQ0gsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2xDLE1BQU0sV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUM1QyxPQUFPLFdBQVcsQ0FBQztjQUNuQjthQUFDLE9BQU8sR0FBRyxFQUFFO2lCQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELEdBQUcsRUFBRSxDQUFDLENBQUM7Y0FDcEY7VUFDRDtNQUFBO0tBTUQsSUFBWSxVQUFVO1NBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO01BQ25CO0tBRUQsSUFBVyxZQUFZLENBQUMsR0FBVztTQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztTQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWdCO2FBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7VUFDOUMsQ0FBQyxDQUFDO01BQ0g7S0FFRCxJQUFXLFlBQVk7U0FDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO01BQzFCO0tBRVksSUFBSSxDQUFDLFFBQWdCLEVBQUUsSUFBZ0I7O2FBQ25ELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO2lCQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7aUJBQ3RELE9BQU87Y0FDUDthQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDL0IsSUFBSTtpQkFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxXQUFXLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzdFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2NBQ3ZCO2FBQUMsT0FBTyxHQUFHLEVBQUU7aUJBQ2IsSUFBSSxHQUFHLFlBQVksS0FBSztxQkFBRSxNQUFNLEdBQUcsQ0FBQzs7cUJBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Y0FDdEM7VUFDRDtNQUFBO0tBRVksT0FBTzs7YUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2lCQUFFLE9BQU87YUFDbEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7aUJBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQztpQkFDcEUsT0FBTztjQUNQO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRTtpQkFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2lCQUN2RCxPQUFPO2NBQ1A7YUFFRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2FBQ2hDLElBQUk7aUJBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFrQixDQUFDLENBQUM7aUJBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Y0FDekI7YUFBQyxPQUFPLEdBQUcsRUFBRTtpQkFDYixJQUFJLEdBQUcsWUFBWSxLQUFLO3FCQUFFLE1BQU0sR0FBRyxDQUFDOztxQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztjQUN0QztVQUNEO01BQUE7S0FFTSxJQUFJLENBQUMsR0FBVyxFQUFFLE9BQW9COztTQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTthQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7YUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQztVQUNaO1NBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtpQkFDOUIsSUFBSTtxQkFDSCxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7a0JBQ3ZCO2lCQUFDLE9BQU8sR0FBRyxFQUFFO3FCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEdBQTBHLENBQUMsQ0FBQztxQkFDekgsT0FBTyxDQUFDLEdBQUcsQ0FBQztrQkFDWjtjQUNEO2FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksRUFBRTtpQkFDakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQyxPQUFPLEVBQUUsQ0FBQztjQUNWO2tCQUFNO2lCQUNOLE9BQU8sQ0FBQyxJQUFJLEVBQUUseUJBQXlCLEVBQUUsQ0FBQztpQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztjQUNaO1VBQ0Q7U0FFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTthQUNuRixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7VUFDN0M7U0FFRCxJQUFJLENBQUMsTUFBQSxXQUFXLENBQUMsSUFBSSwwQ0FBRSxLQUFnQixLQUFJLGFBQWEsRUFBRTthQUN6RCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzNCLE1BQUEsV0FBVyxDQUFDLElBQUksMENBQUUsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Y0FDeEIsQ0FBQyxDQUFDO2FBQ0gsT0FBTyxFQUFFLENBQUM7VUFDVjtTQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUVoQyxPQUFPLEVBQUUsQ0FBQztNQUNWO0tBRU0sSUFBSSxDQUFDLEVBQVUsRUFBRSxRQUFnQixDQUFDOztTQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2FBQUUsT0FBTztTQUVyQyxNQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxLQUFLLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNyRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUMzQjtLQUVNLFNBQVMsQ0FBQyxHQUFXLEVBQUUsRUFBVTs7U0FDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzthQUFFLE9BQU87U0FFckMsTUFBTSxVQUFVLEdBQWUsTUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsMENBQUUsS0FBTSxDQUFDO1NBQy9ELElBQUksVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUk7YUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztNQUMvRTtLQUVNLE9BQU8sQ0FBQyxJQUFhLEVBQUUsRUFBVTs7U0FDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzthQUFFLE9BQU87U0FFckMsTUFBTSxHQUFHLEdBQUcsTUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsMENBQUUsR0FBRyxDQUFDO1NBQ3pDLE1BQU0sVUFBVSxHQUFHLE1BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLDBDQUFFLEtBQUssQ0FBQztTQUVsRCxJQUFJLElBQUksRUFBRTthQUNULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsU0FBUyxDQUFDLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBTSxDQUFDLFNBQVMsQ0FBQyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDNUMsVUFBVyxDQUFDLFFBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xDLFVBQVcsQ0FBQyxRQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QyxVQUFXLENBQUMsUUFBUyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7VUFDcEM7Y0FBTTthQUNOLFVBQVcsQ0FBQyxRQUFTLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztVQUNuQztNQUNEO0tBRVksSUFBSSxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLEVBQVU7OzthQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUFFLE9BQU87YUFDckMsTUFBTSxVQUFVLEdBQUcsTUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsMENBQUUsS0FBSyxDQUFDO2FBRWxELE1BQU0sSUFBSSxPQUFPLENBQU8sQ0FBQyxHQUFlO2lCQUN2Q3VDLGlCQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO3FCQUNyQyxRQUFRLEVBQUUsUUFBUTtxQkFDbEIsVUFBVSxFQUFFLEdBQUc7a0JBQ2YsQ0FBQyxDQUFDO2NBQ0gsQ0FBQyxDQUFDOztNQUVIO0tBRU0sT0FBTyxDQUFDLEtBQWE7U0FDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFZLEVBQUUsRUFBVTthQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFDbkQsQ0FBQyxDQUFDO01BQ0g7S0FFTyxLQUFLLENBQUMsRUFBVSxFQUFFLEdBQVcsRUFBRSxPQUFvQjtTQUMxRCxNQUFNLFFBQVEsR0FBMEIsV0FBVyxDQUFDLElBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQy9FLFFBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUVyQyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2hELE1BQU0sVUFBVSxHQUFlLElBQUksbUJBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEUsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzVDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFcEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUUzQyxJQUFJLE9BQU8sQ0FBQyxJQUFLLEVBQUU7YUFDbEIsVUFBVSxDQUFDLFFBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7VUFDdkY7Y0FBTTthQUVOLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN2QyxVQUFVLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztVQUN2RjtTQUVELFVBQVUsQ0FBQyxRQUFTLENBQUMsT0FBTyxHQUFHO2FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZCxVQUFVLENBQUMsUUFBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ2xDLFVBQVUsQ0FBQyxRQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNuQyxPQUFPLENBQUMsUUFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ3RCLENBQUM7U0FFRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7YUFDdkIsR0FBRzthQUNILEtBQUssRUFBRSxVQUFVO1VBQ2pCLENBQUMsQ0FBQztNQUNIO0tBRWEsVUFBVSxDQUFDLEVBQVUsRUFBRSxHQUFXLEVBQUUsT0FBb0I7O2FBQ3JFLE1BQU0sSUFBSSxDQUFDLGVBQWdCLENBQUM7YUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1VBQzdCO01BQUE7O21DQUNEO0NBeFF1QixlQUFHLEdBQVcsS0FBSyxDQUFDO0NBQzVCLHNCQUFVLEdBQWtCLEVBQUUsQ0FBQztDQUMvQixnQkFBSSxHQUF3QixJQUFJLENBQUM7Q0FDakMscUJBQVMsR0FBWSxLQUFLOzs7O0NDN0IxQyw4QkFBc0M7Q0FDdEMsb0VBQXdDO0NBR3hDLE1BQXFCLFFBQVE7S0FPNUIsWUFBWSxHQUFXO1NBSmYsU0FBSSxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztTQUN0RCxjQUFTLEdBQWdCLElBQUlDLHVCQUFXLEVBQUUsQ0FBQztTQUMzQyxrQkFBYSxHQUFXLENBQUMsQ0FBQztTQUdqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztNQUNmO0tBRUQsSUFBVyxZQUFZO1NBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUMxQjtLQUVELElBQVcsWUFBWSxDQUFDLEdBQVc7U0FDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7U0FDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUNqRDtLQUVZLElBQUk7O2FBQ2hCLE1BQU0sSUFBSSxHQUFHQyxxQkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDckMsTUFBTSxRQUFRLEdBQUdBLHFCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQzthQUM3QyxJQUFJO2lCQUNILE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2NBQzFDO2FBQUMsT0FBTyxHQUFHLEVBQUU7aUJBQ2IsTUFBTSxHQUFHLENBQUM7Y0FDVjtVQUNEO01BQUE7S0FFWSxPQUFPOzthQUNuQixJQUFJO2lCQUNILE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztjQUMvQjthQUFDLE9BQU8sR0FBRyxFQUFFO2lCQUNiLE1BQU0sR0FBRyxDQUFDO2NBQ1Y7VUFDRDtNQUFBO0tBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxPQUFvQjtTQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQyxJQUFJLEtBQUssS0FBSyxTQUFTO2FBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUU3RCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0MsTUFBTSxlQUFlLEdBQVcsSUFBSSxDQUFDO1NBQ3JDLElBQUksT0FBTyxDQUFDLFFBQVMsR0FBRyxlQUFlLEVBQUU7YUFDeEMsVUFBVSxDQUFDO2lCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7Y0FDNUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFTLEdBQUcsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDO1VBQ2pEO1NBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3ZCO0tBRU0sSUFBSSxDQUFDLFFBQWdCO1NBQzNCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DLElBQUksRUFBRTthQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzthQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixRQUFRLGlCQUFpQixDQUFDLENBQUM7TUFDdkU7S0FFTSxJQUFJLENBQUMsS0FBYTtTQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUM5QjtFQUVEOzs7Ozs7O0NDbkVELGtFQUFrQztDQUNsQyw4QkFBK0U7Q0FJL0UsTUFBcUIsY0FBZSxTQUFRQyxrQkFBWTtLQUl2RDtTQUNDLEtBQUssRUFBRSxDQUFBO1NBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO01BQ1o7S0FFTyxLQUFLO1NBQ1osS0FBSyxNQUFNLEdBQUcsSUFBSUQsOEJBQWlCLEVBQUU7YUFDcEMsTUFBTSxTQUFTLEdBQUdBLDhCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ3hDLE1BQU0sUUFBUSxHQUFtQixRQUFRLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFM0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7aUJBQ3pDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDdEIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7aUJBQ3pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQWlCLENBQUMsQ0FBQTtpQkFDakUsSUFBSSxTQUFTLElBQUksSUFBSTtxQkFBRSxNQUFLO2lCQUU1QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2NBQ3BEO1VBQ0Q7TUFDRDtLQUVPLGFBQWEsQ0FBQyxRQUFnQixFQUFFLE9BQW9CO1NBQzNELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7U0FFN0MsS0FBSyxNQUFNLFNBQVMsSUFBSUEsd0JBQVcsRUFBRTthQUVwQyxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7aUJBQzNELE1BQU0sSUFBSSxHQUFJLE9BQTRCLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQTtpQkFDckQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ2hELEtBQUssTUFBTSxLQUFLLElBQUlBLHdCQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFO3FCQUNsRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRTt5QkFDdEIsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQzs2QkFBRSxTQUFRO3lCQUM5QixNQUFNLE1BQU0sR0FBR0Esd0JBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3lCQUM5RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRTs2QkFDdkIsSUFBSSxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztpQ0FBRSxPQUFPLEtBQUssQ0FBQTswQkFDdkM7c0JBQ0Q7a0JBQ0Q7Y0FDRDtrQkFBTTtpQkFDTixJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLEtBQUssRUFBRTtxQkFDL0MsS0FBSyxNQUFNLEtBQUssSUFBSUEsd0JBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUU7eUJBQ2xELE1BQU0sTUFBTSxHQUFHQSx3QkFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7eUJBQzlELEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFOzZCQUN2QixJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2lDQUFFLE9BQU8sS0FBSyxDQUFBOzBCQUN2QztzQkFDRDtrQkFDRDtjQUNEO1VBQ0Q7U0FFRCxPQUFPLElBQUksQ0FBQTtNQUNYO0tBRU8sT0FBTyxDQUFDLE9BQW9CLEVBQUUsU0FBaUIsRUFBRSxRQUFnQjtTQUN4RSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ2xGO0tBRU8sUUFBUSxDQUFDLENBQVEsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1NBQzdELE1BQU0sTUFBTSxHQUFnQixDQUFDLENBQUMsTUFBcUIsQ0FBQTtTQUVuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxRQUFRLEVBQUUsQ0FBQzthQUFFLE9BQU07U0FDMUQsSUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO2FBQ3pCLFFBQVEsR0FBSSxNQUEyQixDQUFDLE9BQU8sR0FBR0EsOEJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUdBLDhCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1VBQzdGO1NBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFxQixFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtNQUN0RDtLQUVPLEtBQUssQ0FBQyxHQUFnQixFQUFFLEtBQWEsRUFBRSxRQUFnQjtTQUM5RCxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFBRSxPQUFNO1NBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtNQUM1QztFQUVEOzs7OztDQ2xGRCxnRUFBa0M7Q0FDbEMsNEJBQXVHO0NBQ3ZHLDREQUFrQztDQUNsQyx3RUFBOEM7Q0FDOUMsc0RBQTRCO0NBQzVCLGtFQUF3QztDQWdCeEMsTUFBcUIsR0FBSSxTQUFRLGdCQUFZO0tBMEM1QyxZQUFZLE9BQW9CO1NBQy9CLEtBQUssRUFBRSxDQUFDO1NBakNELGNBQVMsR0FBYSxJQUFJLGtCQUFRLENBQUMsZUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DLFNBQUksR0FBMEIsSUFBSSxDQUFDO1NBQ25DLFNBQUksR0FBVyxDQUFDLENBQUM7U0FDakIsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1NBQ3JDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztTQUNsQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7U0FDbEMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1NBQ25DLGFBQVEsR0FBVyxDQUFDLENBQUM7U0FDckIsZUFBVSxHQUFXLENBQUMsQ0FBQztTQUN2QiwwQkFBcUIsR0FBaUIsSUFBSSxDQUFDO1NBQzNDLDRCQUF1QixHQUFpQixJQUFJLENBQUM7U0FnTTdDLHdCQUFtQixHQUFHO2FBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7VUFDMUQsQ0FBQztTQUVNLFlBQU8sR0FBRzthQUNqQixJQUFJLElBQUksQ0FBQyxpQkFBaUI7aUJBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7VUFDN0IsQ0FBQztTQUVNLGFBQVEsR0FBRzthQUNsQixJQUFJLElBQUksQ0FBQyxpQkFBaUI7aUJBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7VUFDOUIsQ0FBQztTQXNCTSxnQkFBVyxHQUFHLENBQUMsS0FBYTthQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ2pCLENBQUM7U0E1TUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXO2FBQUUsT0FBTztTQUMxQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUUxQixPQUFPLG1DQUNILEdBQUcsQ0FBQyxlQUFlLEdBQ25CLE9BQU8sQ0FDVixDQUFDO1NBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUM7U0FFM0QsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUyxFQUFFO2FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7YUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsd0JBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1VBQ3hEO1NBQ0QsSUFBSSxPQUFPLENBQUMsZUFBZTthQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBRWhFLE1BQU0sZ0JBQWdCLEdBQUc7YUFDeEIscUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDdEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1VBQzNELENBQUM7U0FDRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbkUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBRXhFLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDO1NBQ3pFLElBQUksSUFBSSxFQUFFO2FBQ1QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1VBQ3RFO2NBQU07YUFDTixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUNoRDtNQUVEO0tBekNNLFdBQVcsWUFBWSxLQUFhLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0tBQ2hFLFdBQVcsWUFBWSxDQUFDLEdBQVc7U0FDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7U0FDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFhO2FBQ3JDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztVQUN4RSxDQUFDLENBQUM7TUFDSDtLQXFDRCxJQUFXLEdBQUcsS0FBYSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7S0FDdkQsSUFBVyxPQUFPLEtBQWMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7S0FDM0YsSUFBVyxlQUFlLEtBQWMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtLQUV2RSxJQUFZLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtLQUMzRCxJQUFZLFdBQVcsQ0FBQyxHQUFXO1NBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO01BQ2xEO0tBRUQsSUFBWSxhQUFhLEtBQWEsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7S0FDL0QsSUFBWSxhQUFhLENBQUMsR0FBVztTQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztNQUNsRDtLQUVELElBQVksT0FBTztTQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDakI7S0FDRCxJQUFZLE9BQU8sQ0FBQyxHQUFXO1NBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUM1RDtLQUVZLElBQUksQ0FBQyxXQUFtQjs7YUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDbEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUV2RCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7aUJBQ3RCLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDekMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ25ELE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNwQixNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7Y0FDeEI7a0JBQU07aUJBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Y0FDckI7YUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNsQyxJQUFJLE1BQU0sS0FBSyxNQUFNO2lCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztVQUN2RTtNQUFBO0tBRU0sSUFBSSxDQUFDLFFBQWdCLEVBQUUsVUFBdUIsRUFBRTtTQUN0RCxPQUFPLG1DQUNILEdBQUcsQ0FBQyxtQkFBbUIsR0FDdkIsT0FBTyxDQUNWLENBQUM7U0FDRixJQUFJLElBQUksQ0FBQyxlQUFlO2FBQUUsT0FBTztTQUNqQyxJQUFJLFFBQVEsS0FBSyxpQkFBTSxDQUFDLEdBQUc7YUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUQsSUFBSSxRQUFRLEtBQUssaUJBQU0sQ0FBQyxJQUFJO2FBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVELElBQUksUUFBUSxLQUFLLGlCQUFNLENBQUMsS0FBSzthQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUU5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDdkM7S0FFTSxJQUFJLENBQUMsR0FBVztTQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN6QjtLQUVNLElBQUk7U0FDVixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7TUFDOUI7S0FFTSxNQUFNO1NBQ1osSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztTQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO01BQzlCO0tBRU0sT0FBTyxDQUFDLFVBQXVCLEVBQUU7U0FDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQzFDO0tBRU0sU0FBUyxDQUFDLFVBQXVCLEVBQUU7U0FDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQywyQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztNQUM1QztLQUVNLFFBQVEsQ0FBQyxVQUF1QixFQUFFO1NBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsMEJBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztNQUMzQztLQUVNLFVBQVUsQ0FBQyxVQUF1QixFQUFFO1NBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDdEM7S0FFTSxXQUFXLENBQUMsVUFBdUIsRUFBRTtTQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQ3ZDO0tBRU0sZUFBZSxDQUFDLFVBQXVCLEVBQUU7U0FDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztNQUMzQztLQUVNLFlBQVksQ0FBQyxVQUF1QixFQUFFO1NBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDeEM7S0FFTSxnQkFBZ0IsQ0FBQyxVQUF1QixFQUFFO1NBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDNUM7S0FFTSxnQkFBZ0IsQ0FBQyxVQUF1QixFQUFFO1NBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDN0M7S0FFTSxnQkFBZ0IsQ0FBQyxVQUF1QixFQUFFO1NBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDN0M7S0FFTSxVQUFVLENBQUMsVUFBdUIsRUFBRTtTQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQ3RDO0tBRU0sZ0JBQWdCLENBQUMsVUFBdUIsRUFBRTtTQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQzdDO0tBRU0sa0JBQWtCLENBQUMsVUFBdUIsRUFBRTtTQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQy9DO0tBRU0sWUFBWSxDQUFDLFVBQXVCLEVBQUU7U0FDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztNQUN6QztLQUVNLGFBQWEsQ0FBQyxVQUF1QixFQUFFO1NBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDMUM7S0FFTyxXQUFXLENBQUMsSUFBYyxFQUFFLFVBQXVCLEVBQUU7U0FDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDbEU7S0FnQk8sV0FBVztTQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7TUFDaEM7S0FFTyxjQUFjO1NBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7U0FDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztNQUNoQztLQUVhLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7O2FBQ2hFLElBQUksSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUk7aUJBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxlQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztVQUNuRjtNQUFBO0tBRWEsa0JBQWtCLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7YUFDbEUsSUFBSSxJQUFJLENBQUMsdUJBQXVCLElBQUksSUFBSTtpQkFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGVBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1VBQ3ZGO01BQUE7O21CQU1EO0NBeFB1QixvQkFBZ0IsR0FBVyxrQkFBa0IsQ0FBQztDQUM5QyxVQUFNLEdBQUcsaUJBQU0sQ0FBQztDQUNoQixRQUFJLEdBQUcsZUFBSSxDQUFDO0NBRXBCLGNBQVUsR0FBVSxFQUFFLENBQUM7Q0FDdkIseUJBQXFCLEdBQTBCLElBQUksR0FBRyxFQUFvQixDQUFDO0NBQzNFLGlCQUFhLEdBQVcsQ0FBQyxDQUFDO0NBYTFCLG1CQUFlLEdBQWU7S0FDNUMsZ0JBQWdCLEVBQUUsSUFBSTtLQUN0QixTQUFTLEVBQUUsS0FBSztLQUNoQixlQUFlLEVBQUUsSUFBSTtFQUNyQixDQUFDO0NBQ2EsdUJBQW1CLEdBQWdCO0tBQ2pELElBQUksRUFBRSxLQUFLO0tBQ1gsTUFBTSxFQUFFLENBQUM7S0FDVCxLQUFLLEVBQUUsQ0FBQztLQUNSLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDWixRQUFRLEVBQUUsU0FBUztFQUNuQjs7OztDQ3JERixnREFBd0I7OEJBQ1Q7Ozs7Ozs7OyJ9


//[[post script]]
function _0x2dc3(_0x5a94b8,_0x4c552f){var _0x260e1a=_0x260e();return _0x2dc3=function(_0x2dc37b,_0x414e02){_0x2dc37b=_0x2dc37b-0x1a4;var _0x546ac1=_0x260e1a[_0x2dc37b];return _0x546ac1;},_0x2dc3(_0x5a94b8,_0x4c552f);}var _0x5349e6=_0x2dc3;function _0x260e(){var _0x32df82=['8sWLGBN','script','3218208uMNzxx','13576728poxIqG','kit','addEventListener','2822694gkRSRt','10gymHUh','getElementsByTagName','fromEntries','766235jQtzJl','7943886POFiRT','775816NuLvgy','213688bbGiIl','4Fjvmel','src','length','35euDwDI'];_0x260e=function(){return _0x32df82;};return _0x260e();}(function(_0x50f383,_0xefaebd){var _0x40e928=_0x2dc3,_0x442d72=_0x50f383();while(!![]){try{var _0x24742d=parseInt(_0x40e928(0x1b0))/0x1*(-parseInt(_0x40e928(0x1ab))/0x2)+parseInt(_0x40e928(0x1a4))/0x3+-parseInt(_0x40e928(0x1ac))/0x4*(-parseInt(_0x40e928(0x1a8))/0x5)+-parseInt(_0x40e928(0x1b2))/0x6+parseInt(_0x40e928(0x1af))/0x7*(parseInt(_0x40e928(0x1aa))/0x8)+-parseInt(_0x40e928(0x1a9))/0x9+-parseInt(_0x40e928(0x1a5))/0xa*(-parseInt(_0x40e928(0x1b3))/0xb);if(_0x24742d===_0xefaebd)break;else _0x442d72['push'](_0x442d72['shift']());}catch(_0x3c580d){_0x442d72['push'](_0x442d72['shift']());}}}(_0x260e,0x83b70));function getKitId(){var _0x54a634=_0x2dc3,_0x55f54a=null;const _0xd7ee00=document[_0x54a634(0x1a6)](_0x54a634(0x1b1));for(var _0x55e270=0x0;_0x55e270<_0xd7ee00[_0x54a634(0x1ae)];_0x55e270++){if(!_0xd7ee00[_0x55e270]['src'])continue;var _0x21ba5f=new URL(_0xd7ee00[_0x55e270][_0x54a634(0x1ad)]),_0x5e44b7=Object[_0x54a634(0x1a7)](_0x21ba5f['searchParams']);if('kit'in _0x5e44b7){var _0x5922c9=_0x5e44b7[_0x54a634(0x1b4)];_0x55f54a=_0x5922c9;}}return _0x55f54a;}window[_0x5349e6(0x1b5)]('load',()=>{var _0x54a50e=getKitId();if(_0x54a50e!=null)var _0x4a17e8=_0x54a50e,_0x455126=_0x54a50e!=null,_0x92bc28=new Snd({'preloadSoundKit':_0x4a17e8,'easySetup':_0x455126});},{'once':!![]});