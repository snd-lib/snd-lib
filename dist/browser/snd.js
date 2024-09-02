
  /**
   * @license
   * Snd.js v1.1.2
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

	var resources$2 = [
		"./assets/sounds/sprite/01/audioSprite.ogg",
		"./assets/sounds/sprite/01/audioSprite.m4a",
		"./assets/sounds/sprite/01/audioSprite.mp3",
		"./assets/sounds/sprite/01/audioSprite.ac3"
	];
	var spritemap$2 = {
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
		resources: resources$2,
		spritemap: spritemap$2
	};

	var resources$1 = [
		"./assets/sounds/sprite/02/audioSprite.ogg",
		"./assets/sounds/sprite/02/audioSprite.m4a",
		"./assets/sounds/sprite/02/audioSprite.mp3",
		"./assets/sounds/sprite/02/audioSprite.ac3"
	];
	var spritemap$1 = {
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
		resources: resources$1,
		spritemap: spritemap$1
	};

	var resources = [
		"./assets/sounds/sprite/03/audioSprite.ogg",
		"./assets/sounds/sprite/03/audioSprite.m4a",
		"./assets/sounds/sprite/03/audioSprite.mp3",
		"./assets/sounds/sprite/03/audioSprite.ac3"
	];
	var spritemap = {
		button: {
			start: 0,
			end: 0.4033333333333333,
			loop: false
		},
		caution: {
			start: 2,
			end: 2.2503854875283444,
			loop: false
		},
		celebration: {
			start: 4,
			end: 5.0561224489795915,
			loop: false
		},
		disabled: {
			start: 7,
			end: 7.1000680272108845,
			loop: false
		},
		notification: {
			start: 9,
			end: 9.753197278911564,
			loop: false
		},
		progress_loop: {
			start: 11,
			end: 12.701383219954648,
			loop: false
		},
		ringtone_loop: {
			start: 14,
			end: 16.085532879818594,
			loop: false
		},
		select: {
			start: 18,
			end: 18.199909297052155,
			loop: false
		},
		swipe_01: {
			start: 20,
			end: 20.138639455782315,
			loop: false
		},
		swipe_02: {
			start: 22,
			end: 22.14278911564626,
			loop: false
		},
		swipe_03: {
			start: 24,
			end: 24.14666666666667,
			loop: false
		},
		swipe_04: {
			start: 26,
			end: 26.158798185941045,
			loop: false
		},
		swipe_05: {
			start: 28,
			end: 28.142585034013607,
			loop: false
		},
		tap_01: {
			start: 30,
			end: 30.03,
			loop: false
		},
		tap_02: {
			start: 32,
			end: 32.030589569160995,
			loop: false
		},
		tap_03: {
			start: 34,
			end: 34.03022675736961,
			loop: false
		},
		tap_04: {
			start: 36,
			end: 36.034013605442176,
			loop: false
		},
		tap_05: {
			start: 38,
			end: 38.037120181405896,
			loop: false
		},
		toggle_off: {
			start: 40,
			end: 40.22455782312925,
			loop: false
		},
		toggle_on: {
			start: 42,
			end: 42.2743537414966,
			loop: false
		},
		transition_down: {
			start: 44,
			end: 44.60936507936508,
			loop: false
		},
		transition_up: {
			start: 46,
			end: 46.62498866213152,
			loop: false
		},
		type_01: {
			start: 48,
			end: 48.04462585034014,
			loop: false
		},
		type_02: {
			start: 50,
			end: 50.03868480725624,
			loop: false
		},
		type_03: {
			start: 52,
			end: 52.07,
			loop: false
		},
		type_04: {
			start: 54,
			end: 54.04698412698413,
			loop: false
		},
		type_05: {
			start: 56,
			end: 56.045034013605445,
			loop: false
		}
	};
	var require$$3 = {
		resources: resources,
		spritemap: spritemap
	};

	Object.defineProperty(constant, "__esModule", { value: true });
	constant.TOGGLE_SOUND_KEYS = constant.TYPE_SOUND_KEYS = constant.SWIPE_SOUND_KEYS = constant.TAP_SOUND_KEYS = constant.EVENT_CLASS_NAMES = constant.SOUNDS = constant.ENABLE_TAGS = constant.KIT_INFO = constant.KITS = void 0;
	const tslib_1$6 = require$$0;
	const _01_json_1 = (0, tslib_1$6.__importDefault)(require$$1);
	const _02_json_1 = (0, tslib_1$6.__importDefault)(require$$2);
	const _03_json_1 = (0, tslib_1$6.__importDefault)(require$$3);
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
	    SND02: "02",
	    SND03: "03",
	};
	const KITS = Object.freeze(_KITS);
	constant.KITS = KITS;
	const _KIT_INFO = {
	    [KITS.SND01]: {
	        json: _01_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.2.1/assets/sounds/sprite/01/audioSprite.mp3",
	    },
	    [KITS.SND02]: {
	        json: _02_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.2.1/assets/sounds/sprite/02/audioSprite.mp3",
	    },
	    [KITS.SND03]: {
	        json: _03_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.2.1/assets/sounds/sprite//03/audioSprite.mp3",
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
	            try {
	                emptySrc.stop();
	            }
	            catch (e) {
	                console.warn(e);
	            }
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
	        this.setVolume(options.volume, id);
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
	            this.setLoop(options.loop, id);
	            this.setVolume(options.volume, id);
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
	        this._ids.set(key.replace(/_[0-9][0-9]/, ""), id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25kLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCIuLi8uLi9zcmMvY29uc3RhbnQudHMiLCIuLi8uLi9zcmMvYXVkaW9Ob2RlLnRzIiwiLi4vLi4vc3JjL3R3ZWVuLnRzIiwiLi4vLi4vc3JjL2F1ZGlvU291cmNlLnRzIiwiLi4vLi4vc3JjL3NvdW5kS2l0LnRzIiwiLi4vLi4vc3JjL2RvbUludGVyYWN0aW9uLnRzIiwiLi4vLi4vc3JjL3NuZC50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb3VuZEtleXMsIERPTUV2ZW50U291bmQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IFNPVU5EX0tJVF8wMSBmcm9tIFwiLi9qc29uLzAxLmpzb25cIjtcbmltcG9ydCBTT1VORF9LSVRfMDIgZnJvbSBcIi4vanNvbi8wMi5qc29uXCI7XG5pbXBvcnQgU09VTkRfS0lUXzAzIGZyb20gXCIuL2pzb24vMDMuanNvblwiO1xuXG5jb25zdCBCVVRUT04gPSBcImJ1dHRvblwiO1xuY29uc3QgQ0FVVElPTiA9IFwiY2F1dGlvblwiO1xuY29uc3QgQ0VMRUJSQVRJT04gPSBcImNlbGVicmF0aW9uXCI7XG5jb25zdCBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbmNvbnN0IE5PVElGSUNBVElPTiA9IFwibm90aWZpY2F0aW9uXCI7XG5jb25zdCBQUk9HUkVTU19MT09QID0gXCJwcm9ncmVzc19sb29wXCI7XG5jb25zdCBSSU5HVE9ORV9MT09QID0gXCJyaW5ndG9uZV9sb29wXCI7XG5jb25zdCBTRUxFQ1QgPSBcInNlbGVjdFwiO1xuY29uc3QgU1dJUEUgPSBcInN3aXBlXCI7XG5jb25zdCBTV0lQRV8wMSA9IFwic3dpcGVfMDFcIjtcbmNvbnN0IFNXSVBFXzAyID0gXCJzd2lwZV8wMlwiO1xuY29uc3QgU1dJUEVfMDMgPSBcInN3aXBlXzAzXCI7XG5jb25zdCBTV0lQRV8wNCA9IFwic3dpcGVfMDRcIjtcbmNvbnN0IFNXSVBFXzA1ID0gXCJzd2lwZV8wNVwiO1xuY29uc3QgVEFQID0gXCJ0YXBcIjtcbmNvbnN0IFRBUF8wMSA9IFwidGFwXzAxXCI7XG5jb25zdCBUQVBfMDIgPSBcInRhcF8wMlwiO1xuY29uc3QgVEFQXzAzID0gXCJ0YXBfMDNcIjtcbmNvbnN0IFRBUF8wNCA9IFwidGFwXzA0XCI7XG5jb25zdCBUQVBfMDUgPSBcInRhcF8wNVwiO1xuY29uc3QgVE9HR0xFID0gXCJ0b2dnbGVcIjtcbmNvbnN0IFRPR0dMRV9PRkYgPSBcInRvZ2dsZV9vZmZcIjtcbmNvbnN0IFRPR0dMRV9PTiA9IFwidG9nZ2xlX29uXCI7XG5jb25zdCBUUkFOU0lUSU9OX0RPV04gPSBcInRyYW5zaXRpb25fZG93blwiO1xuY29uc3QgVFJBTlNJVElPTl9VUCA9IFwidHJhbnNpdGlvbl91cFwiO1xuY29uc3QgVFlQRSA9IFwidHlwZVwiO1xuY29uc3QgVFlQRV8wMSA9IFwidHlwZV8wMVwiO1xuY29uc3QgVFlQRV8wMiA9IFwidHlwZV8wMlwiO1xuY29uc3QgVFlQRV8wMyA9IFwidHlwZV8wM1wiO1xuY29uc3QgVFlQRV8wNCA9IFwidHlwZV8wNFwiO1xuY29uc3QgVFlQRV8wNSA9IFwidHlwZV8wNVwiO1xuXG5jb25zdCBUQVBfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRBUF8wMSxcblx0VEFQXzAyLFxuXHRUQVBfMDMsXG5cdFRBUF8wNCxcblx0VEFQXzA1XG5dO1xuXG5jb25zdCBTV0lQRV9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0U1dJUEVfMDEsXG5cdFNXSVBFXzAyLFxuXHRTV0lQRV8wMyxcblx0U1dJUEVfMDQsXG5cdFNXSVBFXzA1XG5dO1xuXG5jb25zdCBUWVBFX1NPVU5EX0tFWVM6IHN0cmluZ1tdID0gW1xuXHRUWVBFXzAxLFxuXHRUWVBFXzAyLFxuXHRUWVBFXzAzLFxuXHRUWVBFXzA0LFxuXHRUWVBFXzA1XG5dO1xuXG5jb25zdCBUT0dHTEVfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRPR0dMRV9PTixcblx0VE9HR0xFX09GRlxuXTtcblxuY29uc3QgX1NPVU5EX0tFWVM6IFNvdW5kS2V5cyA9IHtcblx0QlVUVE9OLFxuXHRDQVVUSU9OLFxuXHRDRUxFQlJBVElPTixcblx0RElTQUJMRUQsXG5cdE5PVElGSUNBVElPTixcblx0UFJPR1JFU1NfTE9PUCxcblx0UklOR1RPTkVfTE9PUCxcblx0U0VMRUNULFxuXHRTV0lQRSxcblx0VEFQLFxuXHRUT0dHTEVfT04sXG5cdFRPR0dMRV9PRkYsXG5cdFRSQU5TSVRJT05fRE9XTixcblx0VFJBTlNJVElPTl9VUCxcblx0VFlQRVxufTtcblxuY29uc3QgX0VWRU5UX0NMQVNTX05BTUVTOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0W0JVVFRPTl06IGBzbmRfXyR7QlVUVE9OfWAsXG5cdFtDQVVUSU9OXTogYHNuZF9fJHtDQVVUSU9OfWAsXG5cdFtDRUxFQlJBVElPTl06IGBzbmRfXyR7Q0VMRUJSQVRJT059YCxcblx0W0RJU0FCTEVEXTogYHNuZF9fJHtESVNBQkxFRH1gLFxuXHRbTk9USUZJQ0FUSU9OXTogYHNuZF9fJHtOT1RJRklDQVRJT059YCxcblx0W1BST0dSRVNTX0xPT1BdOiBgc25kX18ke1BST0dSRVNTX0xPT1B9YCxcblx0W1JJTkdUT05FX0xPT1BdOiBgc25kX18ke1JJTkdUT05FX0xPT1B9YCxcblx0W1NFTEVDVF06IGBzbmRfXyR7U0VMRUNUfWAsXG5cdFtTV0lQRV06IGBzbmRfXyR7U1dJUEV9YCxcblx0W1RBUF06IGBzbmRfXyR7VEFQfWAsXG5cdFtUT0dHTEVdOiBgc25kX18ke1RPR0dMRX1gLFxuXHRbVFJBTlNJVElPTl9ET1dOXTogYHNuZF9fJHtUUkFOU0lUSU9OX0RPV059YCxcblx0W1RSQU5TSVRJT05fVVBdOiBgc25kX18ke1RSQU5TSVRJT05fVVB9YCxcblx0W1RZUEVdOiBgc25kX18ke1RZUEV9YCxcbn07XG5cblxuXG5jb25zdCBTT1VORFMgPSBPYmplY3QuZnJlZXplKF9TT1VORF9LRVlTKTtcbmNvbnN0IEVWRU5UX0NMQVNTX05BTUVTID0gT2JqZWN0LmZyZWV6ZShfRVZFTlRfQ0xBU1NfTkFNRVMpO1xuXG5jb25zdCBUQUdfRVZFTlRfU09VTkQ6IERPTUV2ZW50U291bmQgPSB7XG5cdFwiaW5wdXQ6dGV4dCxlbWFpbCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLHVybCx0ZWxcIjoge1xuXHRcdGV2ZW50czoge1xuXG5cdFx0XHRcImlucHV0XCI6IFwidHlwZVwiXG5cdFx0fVxuXHR9LFxuXHRcImlucHV0OmNoZWNrYm94XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2hhbmdlXCI6IFwidG9nZ2xlXCJcblx0XHR9XG5cdH0sXG5cdFwiaW5wdXQ6cmFkaW9cIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJzZWxlY3RcIlxuXHRcdH1cblx0fSxcblx0XCJpbnB1dDpidXR0b24scmVzZXQsc3VibWl0XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2xpY2tcIjogXCJidXR0b24sY2F1dGlvbixjZWxlYnJhdGlvbixkaXNhYmxlZCxub3RpZmljYXRpb24sdGFwLHRyYW5zaXRpb25fZG93bix0cmFuc2l0aW9uX3VwXCJcblx0XHR9XG5cdH0sXG5cdFwic2VsZWN0XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2hhbmdlXCI6IFwic2VsZWN0XCJcblx0XHR9XG5cdH0sXG5cdFwiYW55XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2xpY2tcIjogXCJidXR0b24sY2F1dGlvbixjZWxlYnJhdGlvbixkaXNhYmxlZCxub3RpZmljYXRpb24sdGFwLHRyYW5zaXRpb25fZG93bix0cmFuc2l0aW9uX3VwXCJcblx0XHR9XG5cdH1cbn07XG5cblxuZXhwb3J0IHR5cGUgS2l0S2luZHMgPSBcIjAxXCIgfCBcIjAyXCIgfCBcIjAzXCI7XG5jb25zdCBfS0lUUzogeyBba2V5OiBzdHJpbmddOiBLaXRLaW5kczsgfSA9IHtcblx0U05EMDE6IFwiMDFcIixcblx0U05EMDI6IFwiMDJcIixcblx0U05EMDM6IFwiMDNcIixcbn07XG5jb25zdCBLSVRTID0gT2JqZWN0LmZyZWV6ZShfS0lUUyk7XG5cbmNvbnN0IF9LSVRfSU5GTzogeyBba2V5OiBzdHJpbmddOiB7IGpzb246IGFueSwgYXVkaW9TcmM6IHN0cmluZzsgfTsgfSA9IHtcblx0W0tJVFMuU05EMDFdOiB7XG5cdFx0anNvbjogU09VTkRfS0lUXzAxLFxuXHRcdGF1ZGlvU3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zbmQtbGliL3NuZC1saWJAdjEuMS4yL2Fzc2V0cy9zb3VuZHMvc3ByaXRlLzAxL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG5cdFtLSVRTLlNORDAyXToge1xuXHRcdGpzb246IFNPVU5EX0tJVF8wMixcblx0XHRhdWRpb1NyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc25kLWxpYi9zbmQtbGliQHYxLjEuMi9hc3NldHMvc291bmRzL3Nwcml0ZS8wMi9hdWRpb1Nwcml0ZS5tcDNcIixcblxuXHR9LFxuXHRbS0lUUy5TTkQwM106IHtcblx0XHRqc29uOiBTT1VORF9LSVRfMDMsXG5cdFx0YXVkaW9TcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NuZC1saWIvc25kLWxpYkB2MS4xLjIvYXNzZXRzL3NvdW5kcy9zcHJpdGUvLzAzL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG59O1xuY29uc3QgS0lUX0lORk8gPSBPYmplY3QuZnJlZXplKF9LSVRfSU5GTyk7XG5cbmV4cG9ydCB7XG5cdEtJVFMsXG5cdEtJVF9JTkZPLFxuXHRUQUdfRVZFTlRfU09VTkQgYXMgRU5BQkxFX1RBR1MsXG5cdFNPVU5EUyxcblx0RVZFTlRfQ0xBU1NfTkFNRVMsXG5cdFRBUF9TT1VORF9LRVlTLFxuXHRTV0lQRV9TT1VORF9LRVlTLFxuXHRUWVBFX1NPVU5EX0tFWVMsXG5cdFRPR0dMRV9TT1VORF9LRVlTXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Ob2RlcyB7XG5cblx0cHVibGljIGF1ZGlvU3JjOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfZ2FpbjogR2Fpbk5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfdGFpbDogQXVkaW9Ob2RlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3ZvbHVtZTogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfbWFzdGVyVm9sdW1lOiBudW1iZXIgPSAxO1xuXG5cdGNvbnN0cnVjdG9yKGF1ZGlvQnVmZmVyU291cmNlTm9kZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBnYWluTm9kZTogR2Fpbk5vZGUpIHtcblx0XHR0aGlzLmF1ZGlvU3JjID0gYXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xuXHRcdHRoaXMuX2dhaW4gPSBnYWluTm9kZTtcblx0XHR0aGlzLl90YWlsID0gdGhpcy5hdWRpb1NyYztcblx0fVxuXG5cdHB1YmxpYyBzZXQgdm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fdm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX3NldFZvbHVtZSgpO1xuXHR9XG5cblx0cHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fdm9sdW1lO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fc2V0Vm9sdW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IG1hc3RlclZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwcml2YXRlIF9zZXRWb2x1bWUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2dhaW4gIT09IG51bGwpIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMudm9sdW1lICogdGhpcy5tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgY29ubmVjdChhdWRpb05vZGU6IEF1ZGlvTm9kZSk6IEF1ZGlvTm9kZXMge1xuXHRcdHRoaXMuX3RhaWw/LmNvbm5lY3QoYXVkaW9Ob2RlKTtcblx0XHR0aGlzLl90YWlsID0gYXVkaW9Ob2RlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn0iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XG5cdGR1cmF0aW9uPzogbnVtYmVyO1xuXHRkZWxheT86IG51bWJlcjtcblx0b25Db21wbGV0ZT86ICgpID0+IHZvaWQ7XG5cdG9uVXBkYXRlPzogKCkgPT4gdm9pZDtcbn1cblxudHlwZSBUd2VlblR5cGUgPSBcInRvXCIgfCBcImZyb21cIiB8IFwiZnJvbVRvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIHtcblxuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdE9wdGlvbnM6IE9wdGlvbnMgPSB7XG5cdFx0ZHVyYXRpb246IDAuNSxcblx0XHRkZWxheTogMCxcblx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7IH0sXG5cdFx0b25VcGRhdGU6ICgpID0+IHsgfVxuXHR9O1xuXG5cdHByaXZhdGUgX3RhcmdldDogYW55O1xuXHRwcml2YXRlIF9wcm9wTmFtZTogc3RyaW5nID0gXCJcIjtcblx0cHJpdmF0ZSBfdG86IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2Zyb206IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG5cdHByaXZhdGUgX2RlbGF5OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIF9vbkNvbXBsZXRlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXHRwcml2YXRlIF9vblVwZGF0ZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblx0cHJpdmF0ZSBfdXBkYXRlcjogbnVtYmVyID0gMDtcblxuXHRwdWJsaWMgc3RhdGljIHRvKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCB0bzogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRlbHNlIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wTmFtZSwgMCwgdG8sIFwidG9cIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGZyb20odGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIGZyb206IG51bWJlciwgb3B0aW9ucz86IE9wdGlvbnMpOiBUd2VlbiB7XG5cdFx0aWYgKHRhcmdldFtwcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGBwcm9wOiAke3Byb3BOYW1lfSBkb2VzIG5vdCBleGlzdHMgaW4gJHt0YXJnZXR9YCk7XG5cdFx0cmV0dXJuIG5ldyBUd2Vlbih0YXJnZXQsIHByb3BOYW1lLCBmcm9tLCAwLCBcImZyb21cIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGZyb21Ubyh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRyZXR1cm4gbmV3IFR3ZWVuKHRhcmdldCwgcHJvcE5hbWUsIGZyb20sIHRvLCBcImZyb21Ub1wiLCBvcHRpb25zKTtcblx0fVxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIGZyb206IG51bWJlciwgdG86IG51bWJlciwgdHlwZTogVHdlZW5UeXBlLCBvcHRpb25zPzogT3B0aW9ucykge1xuXHRcdHRoaXMuX3RhcmdldCA9IHRhcmdldDtcblx0XHR0aGlzLl9wcm9wTmFtZSA9IHByb3BOYW1lO1xuXHRcdHRoaXMuX2Zyb20gPSBmcm9tO1xuXHRcdHRoaXMuX3RvID0gdG87XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlR3ZWVuLl9kZWZhdWx0T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9O1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gb3B0aW9ucz8uZHVyYXRpb24hO1xuXHRcdHRoaXMuX2RlbGF5ID0gb3B0aW9ucz8uZGVsYXkhO1xuXHRcdHRoaXMuX29uQ29tcGxldGUgPSBvcHRpb25zPy5vbkNvbXBsZXRlITtcblx0XHR0aGlzLl9vblVwZGF0ZSA9IG9wdGlvbnM/Lm9uVXBkYXRlITtcblxuXHRcdGlmICh0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlIFwidG9cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlblRvKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmcm9tXCI6XG5cdFx0XHRcdFx0dGhpcy5fdHdlZW5Gcm9tKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmcm9tVG9cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlbkZyb21UbygpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7dGhpcy5fcHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RoaXMuX3RhcmdldH1gKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdGltZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiBEYXRlLm5vdygpIC8gMTAwMDtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuVG8oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV07XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90bztcblx0XHR0aGlzLl90d2Vlbihmcm9tLCB0byk7XG5cdH1cblxuXHRwcml2YXRlIF90d2VlbkZyb20oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX2Zyb207XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdO1xuXHRcdHRoaXMuX3R3ZWVuKGZyb20sIHRvKTtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuRnJvbVRvKCk6IHZvaWQge1xuXHRcdGNvbnN0IGZyb20gPSB0aGlzLl9mcm9tO1xuXHRcdGNvbnN0IHRvID0gdGhpcy5fdG87XG5cdFx0dGhpcy5fdHdlZW4oZnJvbSwgdG8pO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW4gPSBhc3luYyAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0aWYgKHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5raWxsKCk7XG5cblx0XHRjb25zdCBzdGFydFRpbWUgPSB0aGlzLl90aW1lO1xuXHRcdGNvbnN0IGR1ciA9IHRoaXMuX2R1cmF0aW9uO1xuXHRcdGNvbnN0IGRlbCA9IHRoaXMuX2RlbGF5O1xuXHRcdGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUgKyBkdXIgKyBkZWw7XG5cblx0XHR3aGlsZSAodGhpcy5fdGltZSA8IGVuZFRpbWUpIHtcblx0XHRcdGlmICh0aGlzLl90aW1lIDwgc3RhcnRUaW1lICsgZGVsKSBjb250aW51ZTtcblxuXHRcdFx0Y29uc3QgY3JyVGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHRjb25zdCBwZXJjZW50YWdlID0gKGNyclRpbWUgLSBzdGFydFRpbWUpIC8gKGVuZFRpbWUgLSBzdGFydFRpbWUpO1xuXHRcdFx0Y29uc3QgdmFsID0gKHRvIC0gZnJvbSkgKiBwZXJjZW50YWdlICsgZnJvbTtcblxuXHRcdFx0dGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9IHZhbDtcblx0XHRcdHRoaXMuX29uVXBkYXRlKCk7XG5cdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4ge1xuXHRcdFx0XHR0aGlzLl91cGRhdGVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5raWxsKCk7XG5cdFx0dGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9IHRvO1xuXHRcdHRoaXMuX29uVXBkYXRlKCk7XG5cdFx0dGhpcy5fb25Db21wbGV0ZSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBraWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3VwZGF0ZXIpO1xuXHR9O1xuXG59IiwiaW1wb3J0IEF1ZGlvTm9kZXMgZnJvbSBcIi4vYXVkaW9Ob2RlXCI7XG5pbXBvcnQgeyBQbGF5T3B0aW9ucyB9IGZyb20gXCIuL3NuZFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL3R3ZWVuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ByaXRlSlNPTiB7XG5cdHJlc291cmNlczogc3RyaW5nW107XG5cdHNwcml0ZW1hcDoge1xuXHRcdFtrZXk6IHN0cmluZ106IHtcblx0XHRcdHN0YXJ0OiBudW1iZXI7XG5cdFx0XHRlbmQ6IG51bWJlcjtcblx0XHRcdGxvb3A6IGJvb2xlYW47XG5cdFx0fTtcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWRpb0RhdGEge1xuXHRrZXk6IHN0cmluZztcblx0bm9kZXM6IEF1ZGlvTm9kZXM7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0dmFyIHdlYmtpdEF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb1NvdXJjZSB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBFTkQ6IHN0cmluZyA9IFwiZW5kXCI7XG5cdHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZXM6IEF1ZGlvU291cmNlW10gPSBbXTtcblx0cHJpdmF0ZSBzdGF0aWMgX2N0eDogQXVkaW9Db250ZXh0IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3RhdGljIF9pc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgX2F1ZGlvQXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2F1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlciB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9hdWRpb0xpc3Q6IE1hcDxudW1iZXIsIEF1ZGlvRGF0YT4gPSBuZXcgTWFwPG51bWJlciwgQXVkaW9EYXRhPigpO1xuXHRwcml2YXRlIF9jbnQ6IG51bWJlciA9IDEwMDA7XG5cdHByaXZhdGUgX2pzb246IFNwcml0ZUpTT04gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfaGFzU3RhcnRlZExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaGFzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2hhc1N0YXJ0ZWRBbmFseXNpczogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9oYXNBbmFseXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2FuYWx5emVQcm9taXNlOiBQcm9taXNlPEF1ZGlvQnVmZmVyPiB8IG51bGwgPSBudWxsO1xuXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYWN0aXZhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2lzQWN0aXZlKSByZXR1cm47XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXHRcdFx0dGhpcy5fY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG5cdFx0XHRjb25zdCBlbXB0eVNyYyA9IHRoaXMuX2N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblx0XHRcdGVtcHR5U3JjLnN0YXJ0KCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRlbXB0eVNyYy5zdG9wKCk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLl9hbmFseXplQWxsSW5zdGFuY2VzKCk7XG5cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VycmVkIHdoaWxlIEF1ZGlvU291cmNlLnNldHVwICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIF9hbmFseXplQWxsSW5zdGFuY2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZTogQXVkaW9Tb3VyY2UpID0+IHtcblx0XHRcdGlmIChpbnN0YW5jZS5faGFzTG9hZGVkICYmICFpbnN0YW5jZS5faGFzU3RhcnRlZEFuYWx5c2lzKSB7XG5cdFx0XHRcdGluc3RhbmNlLmFuYWx5emUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGFzeW5jIF9jcmVhdGVBdWRpb0J1ZmZlcihidWZmZXI6IEFycmF5QnVmZmVyKTogUHJvbWlzZTxBdWRpb0J1ZmZlcj4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2N0eCEuZGVjb2RlQXVkaW9EYXRhLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxBdWRpb0J1ZmZlcj4oKHJlcywgcmVqKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyLFxuXHRcdFx0XHRcdFx0KGRhdGE6IEF1ZGlvQnVmZmVyKSA9PiByZXMoZGF0YSksXG5cdFx0XHRcdFx0XHQoZXJyOiBFcnJvcikgPT4gcmVqKGVycilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VyZWQgd2hpbGUgQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQnVmZmVyICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGFzeW5jIF9jcmVhdGVBdWRpb0FycmF5QnVmZmVyKGF1ZGlvU3JjOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGF1ZGlvU3JjKTtcblx0XHRcdGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzLmFycmF5QnVmZmVyKCk7XG5cdFx0XHRyZXR1cm4gYXJyYXlCdWZmZXI7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGFuIGVyciBvY2N1cnJlZCB3aGlsZSBBdWRpb1NvdXJjZS5fY3JlYXRlQXVkaW9BcnJheUJ1ZmZlciAke2Vycn1gKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRBdWRpb1NvdXJjZS5faW5zdGFuY2VzLnB1c2godGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdW5pcXVlS2V5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2NudCsrO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fYXVkaW9MaXN0LmZvckVhY2goKGF1ZGlvOiBBdWRpb0RhdGEpID0+IHtcblx0XHRcdGF1ZGlvLm5vZGVzLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKGF1ZGlvU3JjOiBzdHJpbmcsIGpzb246IFNwcml0ZUpTT04pOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5faGFzU3RhcnRlZExvYWRpbmcpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIlRoZSBmaWxlIGhhcyBhbHJlYWR5IHN0YXJ0ZWQgbG9hZGluZy5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX2pzb24gPSBqc29uO1xuXHRcdHRoaXMuX2hhc1N0YXJ0ZWRMb2FkaW5nID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5fYXVkaW9BcnJheUJ1ZmZlciA9IGF3YWl0IEF1ZGlvU291cmNlLl9jcmVhdGVBdWRpb0FycmF5QnVmZmVyKGF1ZGlvU3JjKTtcblx0XHRcdHRoaXMuX2hhc0xvYWRlZCA9IHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IGVycjtcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBlcnJvclwiKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgYW5hbHl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoIUF1ZGlvU291cmNlLmlzQWN0aXZlKSByZXR1cm47XG5cdFx0aWYgKHRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiYW5hbHl6ZSgpOiBBdWRpb0J1ZmZlciBoYXMgYWxyZWFkeSBzdGFydGVkIGFuYWx5c2lzXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuX2hhc0xvYWRlZCB8fCB0aGlzLl9hdWRpb0FycmF5QnVmZmVyID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUud2FybihcImFuYWx5emUoKTogVGhlIGZpbGUgaGFzbid0IGxvYWRlZCB5ZXQuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcyA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2FuYWx5emVQcm9taXNlID0gQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQnVmZmVyKHRoaXMuX2F1ZGlvQXJyYXlCdWZmZXIhKTtcblx0XHRcdHRoaXMuX2F1ZGlvQnVmZmVyID0gYXdhaXQgdGhpcy5fYW5hbHl6ZVByb21pc2U7XG5cdFx0XHR0aGlzLl9hbmFseXplUHJvbWlzZSA9IG51bGw7XG5cdFx0XHR0aGlzLl9oYXNBbmFseXplZCA9IHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IGVycjtcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBlcnJvclwiKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5faGFzTG9hZGVkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJwbGF5KCk6IFRoZSBmaWxlIGhhc24ndCBsb2FkZWQgeWV0LlwiKTtcblx0XHRcdHJldHVybiAtOTk5O1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuX2hhc0FuYWx5emVkKSB7XG5cdFx0XHRpZiAoIXRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdEF1ZGlvU291cmNlLmFjdGl2YXRlKCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcInBsYXkoKTogQ2FuIG5vdCBwbGF5IGF1ZGlvIGJlZm9yZSBpbml0aWFsaXphdGlvbiAoQXVkaW9Db250ZXh0IG11c3QgYmUgaW5pdGlhbGl6YXRpb24gYnkgcG9pbnRlciBldmVudCkuXCIpO1xuXHRcdFx0XHRcdHJldHVybiAtOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9hbmFseXplUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdFx0XHR0aGlzLl9wbGF5TGF0ZXIoaWQsIGtleSwgb3B0aW9ucyk7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybigoXCJfYW5hbHl6ZVByb21pc2UgaXMgbnVsbFwiKSk7XG5cdFx0XHRcdHJldHVybiAtOTk5O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9qc29uID09PSBudWxsIHx8ICF0aGlzLl9qc29uLnNwcml0ZW1hcCB8fCAhKGtleSBpbiB0aGlzLl9qc29uLnNwcml0ZW1hcCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihganNvbiBlcnJvcjogJHt0aGlzLl9qc29ufWApO1xuXHRcdH1cblxuXHRcdGlmICgoQXVkaW9Tb3VyY2UuX2N0eD8uc3RhdGUgYXMgc3RyaW5nKSA9PSBcImludGVycnVwdGVkXCIpIHtcblx0XHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdFx0QXVkaW9Tb3VyY2UuX2N0eD8ucmVzdW1lKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMucGxheShrZXksIG9wdGlvbnMpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gaWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWQgPSB0aGlzLl91bmlxdWVLZXk7XG5cdFx0dGhpcy5fcGxheShpZCwga2V5LCBvcHRpb25zKTtcblx0XHR0aGlzLnNldExvb3Aob3B0aW9ucy5sb29wISwgaWQpO1xuXHRcdHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lISwgaWQpXG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChpZDogbnVtYmVyLCBkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblxuXHRcdHRoaXMuX2F1ZGlvTGlzdC5nZXQoaWQpPy5ub2Rlcy5hdWRpb1NyYyEuc3RvcChBdWRpb1NvdXJjZS5fY3R4IS5jdXJyZW50VGltZSArIGRlbGF5KTtcblx0XHR0aGlzLl9hdWRpb0xpc3QuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRWb2x1bWUodm9sOiBudW1iZXIsIGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cblx0XHRjb25zdCBhdWRpb05vZGVzOiBBdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzITtcblx0XHRpZiAoYXVkaW9Ob2RlcyAhPT0gbnVsbCAmJiBhdWRpb05vZGVzLnZvbHVtZSAhPT0gbnVsbCkgYXVkaW9Ob2Rlcy52b2x1bWUgPSB2b2w7XG5cdH1cblxuXHRwdWJsaWMgc2V0TG9vcChsb29wOiBib29sZWFuLCBpZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLl9hdWRpb0xpc3QuaGFzKGlkKSkgcmV0dXJuO1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/LmtleTtcblx0XHRjb25zdCBhdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzO1xuXG5cdFx0aWYgKGxvb3ApIHtcblx0XHRcdGNvbnN0IHN0YXJ0ID0gdGhpcy5fanNvbiEuc3ByaXRlbWFwW2tleSFdLnN0YXJ0O1xuXHRcdFx0Y29uc3QgZW5kID0gdGhpcy5fanNvbiEuc3ByaXRlbWFwW2tleSFdLmVuZDtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wID0gdHJ1ZTtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wU3RhcnQgPSBzdGFydDtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wRW5kID0gZW5kO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdWRpb05vZGVzIS5hdWRpb1NyYyEubG9vcCA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBmYWRlKHZvbFRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cdFx0Y29uc3QgYXVkaW9Ob2RlcyA9IHRoaXMuX2F1ZGlvTGlzdC5nZXQoaWQpPy5ub2RlcztcblxuXHRcdGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXM6ICgpID0+IHZvaWQpID0+IHtcblx0XHRcdFR3ZWVuLnRvKGF1ZGlvTm9kZXMsIFwidm9sdW1lXCIsIHZvbFRvLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdFx0b25Db21wbGV0ZTogcmVzXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0cHVibGljIGZhZGVBbGwodm9sVG86IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuX2F1ZGlvTGlzdC5mb3JFYWNoKChfOiBBdWRpb0RhdGEsIGlkOiBudW1iZXIpID0+IHtcblx0XHRcdHRoaXMuZmFkZSh2b2xUbywgMC41LCBpZCkudGhlbihfID0+IHRoaXMuc3RvcChpZCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfcGxheShpZDogbnVtYmVyLCBrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBhdWRpb1NyYzogQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gQXVkaW9Tb3VyY2UuX2N0eCEuY3JlYXRlQnVmZmVyU291cmNlKCk7XG5cdFx0YXVkaW9TcmMhLmJ1ZmZlciA9IHRoaXMuX2F1ZGlvQnVmZmVyO1xuXG5cdFx0Y29uc3QgZ2Fpbk5vZGUgPSBBdWRpb1NvdXJjZS5fY3R4IS5jcmVhdGVHYWluKCk7XG5cdFx0Y29uc3QgYXVkaW9Ob2RlczogQXVkaW9Ob2RlcyA9IG5ldyBBdWRpb05vZGVzKGF1ZGlvU3JjLCBnYWluTm9kZSk7XG5cdFx0YXVkaW9Ob2Rlcy5tYXN0ZXJWb2x1bWUgPSB0aGlzLm1hc3RlclZvbHVtZTtcblx0XHRhdWRpb05vZGVzLmNvbm5lY3QoZ2Fpbk5vZGUpLmNvbm5lY3QoQXVkaW9Tb3VyY2UuX2N0eCEuZGVzdGluYXRpb24pO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5XS5zdGFydDtcblx0XHRjb25zdCBlbmQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5XS5lbmQ7XG5cblx0XHRpZiAob3B0aW9ucy5sb29wISkge1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuc3RhcnQoQXVkaW9Tb3VyY2UuX2N0eCEuY3VycmVudFRpbWUgKyBvcHRpb25zLmRlbGF5ISwgc3RhcnQsIGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGR1ciA9IE1hdGgubWF4KGVuZCAtIHN0YXJ0LCAwLjEpO1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuc3RhcnQoQXVkaW9Tb3VyY2UuX2N0eCEuY3VycmVudFRpbWUgKyBvcHRpb25zLmRlbGF5ISwgc3RhcnQsIGR1cik7XG5cdFx0fVxuXG5cdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEub25lbmRlZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuc3RvcChpZCk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5kaXNjb25uZWN0KCk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5idWZmZXIgPSBudWxsO1xuXHRcdFx0b3B0aW9ucy5jYWxsYmFjayEoaWQpO1xuXHRcdH07XG5cblx0XHR0aGlzLl9hdWRpb0xpc3Quc2V0KGlkLCB7XG5cdFx0XHRrZXksXG5cdFx0XHRub2RlczogYXVkaW9Ob2Rlcyxcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX3BsYXlMYXRlcihpZDogbnVtYmVyLCBrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLl9hbmFseXplUHJvbWlzZSE7XG5cdFx0dGhpcy5fcGxheShpZCwga2V5LCBvcHRpb25zKTtcblx0XHR0aGlzLnNldExvb3Aob3B0aW9ucy5sb29wISwgaWQpO1xuXHRcdHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lISwgaWQpXG5cdH1cbn0iLCJpbXBvcnQgeyBLSVRfSU5GTyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgQXVkaW9Tb3VyY2UgZnJvbSBcIi4vYXVkaW9Tb3VyY2VcIjtcbmltcG9ydCB7IFBsYXlPcHRpb25zIH0gZnJvbSBcIi4vc25kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kS2l0IHtcblxuXHRwdWJsaWMga2V5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2lkczogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgX2F1ZGlvU3JjOiBBdWRpb1NvdXJjZSA9IG5ldyBBdWRpb1NvdXJjZSgpO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2F1ZGlvU3JjLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IGpzb24gPSBLSVRfSU5GT1t0aGlzLmtleV0uanNvbjtcblx0XHRjb25zdCBhdWRpb1NyYyA9IEtJVF9JTkZPW3RoaXMua2V5XS5hdWRpb1NyYztcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdGhpcy5fYXVkaW9TcmMubG9hZChhdWRpb1NyYywganNvbik7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGFuYWx5emUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMuX2F1ZGlvU3JjLmFuYWx5emUoKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRJZCA9IHRoaXMuX2lkcy5nZXQoa2V5KTtcblx0XHRpZiAob2xkSWQgIT09IHVuZGVmaW5lZCkgdGhpcy5fYXVkaW9TcmMuZmFkZSgwLCAwLjA1LCBvbGRJZCk7XG5cblx0XHRjb25zdCBpZCA9IHRoaXMuX2F1ZGlvU3JjLnBsYXkoa2V5LCBvcHRpb25zKTtcblx0XHRjb25zdCBmYWRlb3V0RHVyYXRpb246IG51bWJlciA9IDAuMDU7XG5cdFx0aWYgKG9wdGlvbnMuZHVyYXRpb24hID4gZmFkZW91dER1cmF0aW9uKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5fYXVkaW9TcmMuZmFkZSgwLCBmYWRlb3V0RHVyYXRpb24sIGlkKTtcblx0XHRcdH0sIChvcHRpb25zLmR1cmF0aW9uISAtIGZhZGVvdXREdXJhdGlvbikgKiAxMDAwKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pZHMuc2V0KGtleS5yZXBsYWNlKC9fWzAtOV1bMC05XS8sIFwiXCIpLCBpZCk7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChzb3VuZEtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLl9pZHMuZ2V0KHNvdW5kS2V5KTtcblx0XHRpZiAoaWQpIHRoaXMuX2F1ZGlvU3JjLnN0b3AoaWQpO1xuXHRcdGVsc2UgY29uc29sZS53YXJuKGBbU291bmRLaXQuc3RvcCgpXSBrZXk6ICR7c291bmRLZXl9IGhhdmVuJ3QgcGxheWVkYCk7XG5cdH1cblxuXHRwdWJsaWMgZmFkZSh2b2xUbzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5fYXVkaW9TcmMuZmFkZUFsbCh2b2xUbyk7XG5cdH1cblxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgeyBFVkVOVF9DTEFTU19OQU1FUywgVE9HR0xFX1NPVU5EX0tFWVMsIEVOQUJMRV9UQUdTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuY29uc3QgaXNUb3VjaERldmljZTogYm9vbGVhbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUludGVyYWN0aW9uIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOVEVSQUNUOiBcImludGVyYWN0XCJcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5faW5pdCgpXG5cdH1cblxuXHRwcml2YXRlIF9pbml0KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qga2V5IGluIEVWRU5UX0NMQVNTX05BTUVTKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBFVkVOVF9DTEFTU19OQU1FU1trZXldXG5cdFx0XHRjb25zdCBlbGVtZW50czogSFRNTENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG5cdFx0XHRcdGNvbnN0IHNvdW5kS2V5ID0ga2V5LnJlcGxhY2UoXCJzbmRfX1wiLCBcIlwiKVxuXHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSB0aGlzLl9nZXRFdmVudE5hbWUoc291bmRLZXksIGVsIGFzIEhUTUxFbGVtZW50KVxuXHRcdFx0XHRpZiAoZXZlbnROYW1lID09IG51bGwpIGJyZWFrXG5cblx0XHRcdFx0dGhpcy5fbGlzdGVuKGVsIGFzIEhUTUxFbGVtZW50LCBldmVudE5hbWUsIHNvdW5kS2V5KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX2dldEV2ZW50TmFtZShzb3VuZEtleTogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB8IG51bGwge1xuXHRcdGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXG5cdFx0Zm9yIChjb25zdCB0YWdTdHJpbmcgaW4gRU5BQkxFX1RBR1MpIHtcblxuXHRcdFx0aWYgKHRhZ05hbWUgPT0gXCJpbnB1dFwiICYmIHRhZ1N0cmluZy5tYXRjaChcImlucHV0XCIpICE9IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgfHwgXCJcIlxuXHRcdFx0XHRjb25zdCB0eXBlcyA9IHRhZ1N0cmluZy5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCIsXCIpXG5cdFx0XHRcdGZvciAoY29uc3QgZXZlbnQgaW4gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGkgaW4gdHlwZXMpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlICE9IHR5cGVzW2ldKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0Y29uc3Qgc291bmRzID0gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHNbZXZlbnRdLnNwbGl0KFwiLFwiKVxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBqIGluIHNvdW5kcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoc291bmRLZXkgPT0gc291bmRzW2pdKSByZXR1cm4gZXZlbnRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0YWdTdHJpbmcgPT0gdGFnTmFtZSB8fCB0YWdTdHJpbmcgPT0gXCJhbnlcIikge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZXZlbnQgaW4gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHNvdW5kcyA9IEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzW2V2ZW50XS5zcGxpdChcIixcIilcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgaSBpbiBzb3VuZHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNvdW5kS2V5ID09IHNvdW5kc1tpXSkgcmV0dXJuIGV2ZW50XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdHByaXZhdGUgX2xpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4gdGhpcy5fcHJvY2VzcyhlLCBldmVudE5hbWUsIHNvdW5kS2V5KSk7XG5cdH1cblxuXHRwcml2YXRlIF9wcm9jZXNzKGU6IEV2ZW50LCBldmVudE5hbWU6IHN0cmluZywgc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXG5cdFx0aWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBzbmRfXyR7c291bmRLZXl9YCkpIHJldHVyblxuXHRcdGlmIChzb3VuZEtleSA9PSBcInRvZ2dsZVwiKSB7XG5cdFx0XHRzb3VuZEtleSA9ICh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA/IFRPR0dMRV9TT1VORF9LRVlTWzBdIDogVE9HR0xFX1NPVU5EX0tFWVNbMV1cblx0XHR9XG5cblx0XHR0aGlzLl9lbWl0KHRhcmdldCBhcyBIVE1MRWxlbWVudCwgZXZlbnROYW1lLCBzb3VuZEtleSlcblx0fVxuXG5cdHByaXZhdGUgX2VtaXQoRE9NOiBIVE1MRWxlbWVudCwgZXZlbnQ6IHN0cmluZywgc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibXV0ZWRcIikpIHJldHVyblxuXHRcdHRoaXMuZW1pdChET01JbnRlcmFjdGlvbi5JTlRFUkFDVCwgc291bmRLZXkpXG5cdH1cblxufSIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgS2l0S2luZHMsIEtJVFMsIFNPVU5EUywgU1dJUEVfU09VTkRfS0VZUywgVEFQX1NPVU5EX0tFWVMsIFRZUEVfU09VTkRfS0VZUyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgU291bmRLaXQgZnJvbSBcIi4vc291bmRLaXRcIjtcbmltcG9ydCBET01JbnRlcmFjdGlvbiBmcm9tIFwiLi9kb21JbnRlcmFjdGlvblwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL3R3ZWVuXCI7XG5pbXBvcnQgQXVkaW9Tb3VyY2UgZnJvbSBcIi4vYXVkaW9Tb3VyY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTbmRPcHRpb25zIHtcblx0ZWFzeVNldHVwPzogYm9vbGVhbjtcblx0bXV0ZU9uV2luZG93Qmx1cj86IGJvb2xlYW47XG5cdHByZWxvYWRTb3VuZEtpdD86IG51bGwgfCBLaXRLaW5kcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5T3B0aW9ucyB7XG5cdGxvb3A/OiBib29sZWFuO1xuXHR2b2x1bWU/OiBudW1iZXI7XG5cdGR1cmF0aW9uPzogbnVtYmVyO1xuXHRkZWxheT86IG51bWJlcjtcblx0Y2FsbGJhY2s/OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25kIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9TT1VORF9LSVQ6IHN0cmluZyA9IFwiY2hhbmdlX3NvdW5kX2tpdFwiO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNPVU5EUyA9IFNPVU5EUztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBLSVRTID0gS0lUUztcblxuXHRwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2VzOiBTbmRbXSA9IFtdO1xuXHRwcml2YXRlIHN0YXRpYyBfaW5pdGlhbGl6ZWRTb3VuZEtpdHM6IE1hcDxzdHJpbmcsIFNvdW5kS2l0PiA9IG5ldyBNYXA8c3RyaW5nLCBTb3VuZEtpdD4oKTtcblx0cHJpdmF0ZSBzdGF0aWMgX21hc3RlclZvbHVtZTogbnVtYmVyID0gMTtcblxuXHRwcml2YXRlIF9zb3VuZEtpdDogU291bmRLaXQgPSBuZXcgU291bmRLaXQoS0lUUy5TTkQwMSk7XG5cdHByaXZhdGUgX2RvbTogRE9NSW50ZXJhY3Rpb24gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfdm9sOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF9pc011dGVkQnlEZXZlbG9wZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaXNNdXRlZEJ5V2luZG93OiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2lzV2luZG93Qmx1cnJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9tdXRlT25XaW5kb3dCbHVyOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2ZhZGVWb2w6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX3dpbmRvd1ZvbDogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfZmFkZVR3ZWVuQnlEZXZlbG9wZXI6IFR3ZWVuIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2ZhZGVUd2VlbkJ5V2luZG93RXZlbnQ6IFR3ZWVuIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3RhdGljIF9kZWZhdWx0T3B0aW9uczogU25kT3B0aW9ucyA9IHtcblx0XHRtdXRlT25XaW5kb3dCbHVyOiB0cnVlLFxuXHRcdGVhc3lTZXR1cDogZmFsc2UsXG5cdFx0cHJlbG9hZFNvdW5kS2l0OiBudWxsLFxuXHR9O1xuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdFBsYXlPcHRpb25zOiBQbGF5T3B0aW9ucyA9IHtcblx0XHRsb29wOiBmYWxzZSxcblx0XHR2b2x1bWU6IDEsXG5cdFx0ZGVsYXk6IDAsXG5cdFx0ZHVyYXRpb246IC0xLFxuXHRcdGNhbGxiYWNrOiAoKSA9PiB7IH1cblx0fTtcblxuXHRwdWJsaWMgc3RhdGljIGdldCBtYXN0ZXJWb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTsgfVxuXHRwdWJsaWMgc3RhdGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5faW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlOiBTbmQpID0+IHtcblx0XHRcdGluc3RhbmNlLl9zb3VuZEtpdC5tYXN0ZXJWb2x1bWUgPSB0aGlzLl9tYXN0ZXJWb2x1bWUgKiBpbnN0YW5jZS5fdm9sdW1lO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFNuZE9wdGlvbnMpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdFx0U25kLl9pbnN0YW5jZXMucHVzaCh0aGlzKTtcblxuXHRcdG9wdGlvbnMgPSB7XG5cdFx0XHQuLi5TbmQuX2RlZmF1bHRPcHRpb25zLFxuXHRcdFx0Li4ub3B0aW9ucyxcblx0XHR9O1xuXHRcdHRoaXMuX211dGVPbldpbmRvd0JsdXIgPSBvcHRpb25zLm11dGVPbldpbmRvd0JsdXIgfHwgZmFsc2U7XG5cblx0XHRpZiAob3B0aW9ucz8uZWFzeVNldHVwKSB7XG5cdFx0XHR0aGlzLl9kb20gPSBuZXcgRE9NSW50ZXJhY3Rpb24oKTtcblx0XHRcdHRoaXMuX2RvbS5vbihET01JbnRlcmFjdGlvbi5JTlRFUkFDVCwgdGhpcy5fb25JbnRlcmFjdCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLnByZWxvYWRTb3VuZEtpdCkgdGhpcy5sb2FkKG9wdGlvbnMucHJlbG9hZFNvdW5kS2l0KTtcblxuXHRcdGNvbnN0IGluaXRBdWRpb0NvbnRleHQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRBdWRpb1NvdXJjZS5hY3RpdmF0ZSgpO1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0QXVkaW9Db250ZXh0KTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBpbml0QXVkaW9Db250ZXh0KTtcblx0XHR9O1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdEF1ZGlvQ29udGV4dCwgeyBvbmNlOiB0cnVlIH0pO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBpbml0QXVkaW9Db250ZXh0LCB7IG9uY2U6IHRydWUgfSk7XG5cblx0XHRjb25zdCBpc1NwID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfEFuZHJvaWQuK01vYmlsZS8pICE9IG51bGw7XG5cdFx0aWYgKGlzU3ApIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5fb25CbHVyKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5fb25Gb2N1cyk7XG5cdFx0fVxuXG5cdH1cblxuXHRwdWJsaWMgZ2V0IGtpdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc291bmRLaXQua2V5OyB9XG5cdHB1YmxpYyBnZXQgaXNNdXRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzTXV0ZWRCeURldmVsb3BlciB8fCB0aGlzLl9pc011dGVkQnlXaW5kb3c7IH1cblx0cHVibGljIGdldCBpc1dpbmRvd0JsdXJyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc1dpbmRvd0JsdXJyZWQ7IH1cblxuXHRwcml2YXRlIGdldCBfZmFkZVZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fZmFkZVZvbDsgfVxuXHRwcml2YXRlIHNldCBfZmFkZVZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX2ZhZGVWb2wgPSB2YWw7XG5cdFx0dGhpcy5fdm9sdW1lID0gdGhpcy5fZmFkZVZvbCAqIHRoaXMuX3dpbmRvd1ZvbHVtZTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0IF93aW5kb3dWb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpbmRvd1ZvbDsgfVxuXHRwcml2YXRlIHNldCBfd2luZG93Vm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fd2luZG93Vm9sID0gdmFsO1xuXHRcdHRoaXMuX3ZvbHVtZSA9IHRoaXMuX2ZhZGVWb2x1bWUgKiB0aGlzLl93aW5kb3dWb2w7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZvbDtcblx0fVxuXHRwcml2YXRlIHNldCBfdm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fdm9sID0gdmFsO1xuXHRcdHRoaXMuX3NvdW5kS2l0Lm1hc3RlclZvbHVtZSA9IHRoaXMuX3ZvbCAqIFNuZC5fbWFzdGVyVm9sdW1lO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGxvYWQoc291bmRLaXRLZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRoaXMuX3NvdW5kS2l0LmZhZGUoMCk7XG5cdFx0Y29uc3Qgb2xkS2V5ID0gdGhpcy5fc291bmRLaXQua2V5O1xuXHRcdGNvbnN0IGtpdCA9IFNuZC5faW5pdGlhbGl6ZWRTb3VuZEtpdHMuZ2V0KHNvdW5kS2l0S2V5KTtcblxuXHRcdGlmIChraXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uc3QgbmV3S2l0ID0gbmV3IFNvdW5kS2l0KHNvdW5kS2l0S2V5KTtcblx0XHRcdFNuZC5faW5pdGlhbGl6ZWRTb3VuZEtpdHMuc2V0KHNvdW5kS2l0S2V5LCBuZXdLaXQpO1xuXHRcdFx0YXdhaXQgbmV3S2l0LmxvYWQoKTtcblx0XHRcdGF3YWl0IG5ld0tpdC5hbmFseXplKCk7XG5cdFx0XHR0aGlzLl9zb3VuZEtpdCA9IG5ld0tpdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc291bmRLaXQgPSBraXQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc291bmRLaXQuZmFkZSgxKTtcblx0XHRjb25zdCBjcnJLZXkgPSB0aGlzLl9zb3VuZEtpdC5rZXk7XG5cdFx0aWYgKG9sZEtleSAhPT0gY3JyS2V5KSB0aGlzLmVtaXQoU25kLkNIQU5HRV9TT1VORF9LSVQsIGNycktleSwgb2xkS2V5KTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5KHNvdW5kS2V5OiBzdHJpbmcsIG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Li4uU25kLl9kZWZhdWx0UGxheU9wdGlvbnMsXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fTtcblx0XHRpZiAodGhpcy5pc1dpbmRvd0JsdXJyZWQpIHJldHVybjtcblx0XHRpZiAoc291bmRLZXkgPT09IFNPVU5EUy5UQVApIHJldHVybiB0aGlzLnBsYXlUYXAob3B0aW9ucyk7XG5cdFx0aWYgKHNvdW5kS2V5ID09PSBTT1VORFMuVFlQRSkgcmV0dXJuIHRoaXMucGxheVR5cGUob3B0aW9ucyk7XG5cdFx0aWYgKHNvdW5kS2V5ID09PSBTT1VORFMuU1dJUEUpIHJldHVybiB0aGlzLnBsYXlTd2lwZShvcHRpb25zKTtcblxuXHRcdHRoaXMuX3NvdW5kS2l0LnBsYXkoc291bmRLZXksIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHN0b3Aoa2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLl9zb3VuZEtpdC5zdG9wKGtleSk7XG5cdH1cblxuXHRwdWJsaWMgbXV0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLl9pc011dGVkQnlEZXZlbG9wZXIgPSB0cnVlO1xuXHRcdHRoaXMuX2ZhZGVCeURldmVsb3BlcigwLCAwLjMpO1xuXHR9XG5cblx0cHVibGljIHVubXV0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLl9pc011dGVkQnlEZXZlbG9wZXIgPSBmYWxzZTtcblx0XHR0aGlzLl9mYWRlQnlEZXZlbG9wZXIoMSwgMC4zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VGFwKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLl9wbGF5UmFuZG9tKFRBUF9TT1VORF9LRVlTLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5U3dpcGUob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMuX3BsYXlSYW5kb20oU1dJUEVfU09VTkRfS0VZUywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVR5cGUob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMuX3BsYXlSYW5kb20oVFlQRV9TT1VORF9LRVlTLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5QnV0dG9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5CVVRUT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlDYXV0aW9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5DQVVUSU9OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5Q2VsZWJyYXRpb24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLkNFTEVCUkFUSU9OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5RGlzYWJsZWQob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLkRJU0FCTEVELCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5Tm90aWZpY2F0aW9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5OT1RJRklDQVRJT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlQcm9ncmVzc0xvb3Aob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlBST0dSRVNTX0xPT1AsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlSaW5ndG9uZUxvb3Aob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlJJTkdUT05FX0xPT1AsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlTZWxlY3Qob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlNFTEVDVCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRyYW5zaXRpb25VcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuVFJBTlNJVElPTl9VUCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRyYW5zaXRpb25Eb3duKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5UUkFOU0lUSU9OX0RPV04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUb2dnbGVPbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuVE9HR0xFX09OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VG9nZ2xlT2ZmKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5UT0dHTEVfT0ZGLCBvcHRpb25zKTtcblx0fVxuXG5cdHByaXZhdGUgX3BsYXlSYW5kb20oa2V5czogc3RyaW5nW10sIG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoa2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBrZXlzLmxlbmd0aCldLCBvcHRpb25zKTtcblx0fVxuXG5cdHByaXZhdGUgX29uVmlzaWJpbGl0eUNoYW5nZSA9ICgpOiB2b2lkID0+IHtcblx0XHR3aW5kb3cuZG9jdW1lbnQuaGlkZGVuID8gdGhpcy5fb25CbHVyKCkgOiB0aGlzLl9vbkZvY3VzKCk7XG5cdH07XG5cblx0cHJpdmF0ZSBfb25CbHVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmICh0aGlzLl9tdXRlT25XaW5kb3dCbHVyKSB0aGlzLl9tdXRlT25CbHVyKCk7XG5cdFx0dGhpcy5faXNXaW5kb3dCbHVycmVkID0gdHJ1ZTtcblx0fTtcblxuXHRwcml2YXRlIF9vbkZvY3VzID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmICh0aGlzLl9tdXRlT25XaW5kb3dCbHVyKSB0aGlzLl91bm11dGVPbkZvY3VzKCk7XG5cdFx0dGhpcy5faXNXaW5kb3dCbHVycmVkID0gZmFsc2U7XG5cdH07XG5cblx0cHJpdmF0ZSBfbXV0ZU9uQmx1cigpOiB2b2lkIHtcblx0XHR0aGlzLl9pc011dGVkQnlXaW5kb3cgPSB0cnVlO1xuXHRcdHRoaXMuX2ZhZGVCeVdpbmRvd0V2ZW50KDAsIDAuMyk7XG5cdH1cblxuXHRwcml2YXRlIF91bm11dGVPbkZvY3VzKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeVdpbmRvdyA9IGZhbHNlO1xuXHRcdHRoaXMuX2ZhZGVCeVdpbmRvd0V2ZW50KDEsIDAuMyk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIF9mYWRlQnlEZXZlbG9wZXIodm9sdW1lVG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICh0aGlzLl9mYWRlVHdlZW5CeURldmVsb3BlciAhPSBudWxsKSB0aGlzLl9mYWRlVHdlZW5CeURldmVsb3Blci5raWxsKCk7XG5cdFx0dGhpcy5fZmFkZVR3ZWVuQnlEZXZlbG9wZXIgPSBUd2Vlbi50byh0aGlzLCBcIl9mYWRlVm9sdW1lXCIsIHZvbHVtZVRvLCB7IGR1cmF0aW9uIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBfZmFkZUJ5V2luZG93RXZlbnQodm9sdW1lVG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICh0aGlzLl9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50ICE9IG51bGwpIHRoaXMuX2ZhZGVUd2VlbkJ5V2luZG93RXZlbnQua2lsbCgpO1xuXHRcdHRoaXMuX2ZhZGVUd2VlbkJ5V2luZG93RXZlbnQgPSBUd2Vlbi50byh0aGlzLCBcIl93aW5kb3dWb2x1bWVcIiwgdm9sdW1lVG8sIHsgZHVyYXRpb24gfSk7XG5cdH1cblxuXHRwcml2YXRlIF9vbkludGVyYWN0ID0gKGV2ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHR0aGlzLnBsYXkoZXZlbnQpO1xuXHR9O1xuXG59IiwiaW1wb3J0IFNuZCBmcm9tIFwiLi9zbmRcIjtcbmV4cG9ydCBkZWZhdWx0IFNuZDsiXSwibmFtZXMiOlsiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2V4dGVuZHMiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fcGFyYW0iLCJwYXJhbUluZGV4IiwiZGVjb3JhdG9yIiwiX19tZXRhZGF0YSIsIm1ldGFkYXRhS2V5IiwibWV0YWRhdGFWYWx1ZSIsIm1ldGFkYXRhIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJwb3AiLCJwdXNoIiwiX19jcmVhdGVCaW5kaW5nIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwiX192YWx1ZXMiLCJfX3JlYWQiLCJhciIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJfX3NwcmVhZEFycmF5cyIsImlsIiwiYSIsImoiLCJqbCIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwibCIsInNsaWNlIiwiX19hd2FpdCIsIl9fYXN5bmNHZW5lcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwicSIsInJlc3VtZSIsInNldHRsZSIsImZ1bGZpbGwiLCJzaGlmdCIsIl9fYXN5bmNEZWxlZ2F0b3IiLCJfX2FzeW5jVmFsdWVzIiwiX19tYWtlVGVtcGxhdGVPYmplY3QiLCJjb29rZWQiLCJyYXciLCJfX3NldE1vZHVsZURlZmF1bHQiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJfX2VzTW9kdWxlIiwiX19pbXBvcnREZWZhdWx0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiaGFzIiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsInNldCIsIlIiLCJSZWZsZWN0QXBwbHkiLCJhcmdzIiwiRnVuY3Rpb24iLCJSZWZsZWN0T3duS2V5cyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiUHJvY2Vzc0VtaXRXYXJuaW5nIiwid2FybmluZyIsImNvbnNvbGUiLCJ3YXJuIiwiTnVtYmVySXNOYU4iLCJOdW1iZXIiLCJpc05hTiIsIkV2ZW50RW1pdHRlciIsImluaXQiLCJldmVudHNNb2R1bGUiLCJvbmNlIiwiX2V2ZW50cyIsIl9ldmVudHNDb3VudCIsIl9tYXhMaXN0ZW5lcnMiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwiY2hlY2tMaXN0ZW5lciIsImxpc3RlbmVyIiwiYXJnIiwiUmFuZ2VFcnJvciIsImdldFByb3RvdHlwZU9mIiwic2V0TWF4TGlzdGVuZXJzIiwiX2dldE1heExpc3RlbmVycyIsInRoYXQiLCJnZXRNYXhMaXN0ZW5lcnMiLCJlbWl0IiwidHlwZSIsImRvRXJyb3IiLCJldmVudHMiLCJlciIsIkVycm9yIiwiZXJyIiwibWVzc2FnZSIsImNvbnRleHQiLCJoYW5kbGVyIiwibGVuIiwibGlzdGVuZXJzIiwiYXJyYXlDbG9uZSIsIl9hZGRMaXN0ZW5lciIsInByZXBlbmQiLCJleGlzdGluZyIsIm5ld0xpc3RlbmVyIiwidW5zaGlmdCIsIndhcm5lZCIsInciLCJuYW1lIiwiZW1pdHRlciIsImNvdW50IiwiYWRkTGlzdGVuZXIiLCJvbiIsInByZXBlbmRMaXN0ZW5lciIsIm9uY2VXcmFwcGVyIiwiZmlyZWQiLCJyZW1vdmVMaXN0ZW5lciIsIndyYXBGbiIsIl9vbmNlV3JhcCIsIndyYXBwZWQiLCJiaW5kIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3QiLCJwb3NpdGlvbiIsIm9yaWdpbmFsTGlzdGVuZXIiLCJzcGxpY2VPbmUiLCJvZmYiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJrZXlzIiwiX2xpc3RlbmVycyIsInVud3JhcCIsImV2bGlzdGVuZXIiLCJ1bndyYXBMaXN0ZW5lcnMiLCJyYXdMaXN0ZW5lcnMiLCJsaXN0ZW5lckNvdW50IiwiZXZlbnROYW1lcyIsImFyciIsImNvcHkiLCJpbmRleCIsInJldCIsImVycm9yTGlzdGVuZXIiLCJyZXNvbHZlciIsImV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lciIsImFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyIiwiZmxhZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwid3JhcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInR3ZWVuXzEiLCJhdWRpb1NvdXJjZV8xIiwiY29uc3RhbnRfMSIsImV2ZW50c18xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTs7Q0FDQTtDQUVBLElBQUlBLGNB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


//[[post script]]
function _0x3a6b(_0x575114,_0x52a96e){var _0x497e1a=_0x497e();return _0x3a6b=function(_0x3a6b1d,_0x5746cf){_0x3a6b1d=_0x3a6b1d-0x87;var _0x2a1efd=_0x497e1a[_0x3a6b1d];return _0x2a1efd;},_0x3a6b(_0x575114,_0x52a96e);}var _0x2b0027=_0x3a6b;(function(_0x5219a9,_0x4619f4){var _0x2fed5e=_0x3a6b,_0x15d464=_0x5219a9();while(!![]){try{var _0x2fa96c=parseInt(_0x2fed5e(0x95))/0x1+parseInt(_0x2fed5e(0x96))/0x2*(-parseInt(_0x2fed5e(0x8d))/0x3)+parseInt(_0x2fed5e(0x89))/0x4+parseInt(_0x2fed5e(0x8a))/0x5+-parseInt(_0x2fed5e(0x8c))/0x6+parseInt(_0x2fed5e(0x87))/0x7*(-parseInt(_0x2fed5e(0x93))/0x8)+-parseInt(_0x2fed5e(0x97))/0x9*(-parseInt(_0x2fed5e(0x91))/0xa);if(_0x2fa96c===_0x4619f4)break;else _0x15d464['push'](_0x15d464['shift']());}catch(_0x1fe98a){_0x15d464['push'](_0x15d464['shift']());}}}(_0x497e,0xaeb31));function getKitId(){var _0x144a31=_0x3a6b,_0x19a1cd=null;const _0x48430c=document[_0x144a31(0x92)](_0x144a31(0x94));for(var _0x46c786=0x0;_0x46c786<_0x48430c[_0x144a31(0x8b)];_0x46c786++){if(!_0x48430c[_0x46c786][_0x144a31(0x8e)])continue;var _0x3eef70=new URL(_0x48430c[_0x46c786][_0x144a31(0x8e)]),_0x2232e2=Object[_0x144a31(0x8f)](_0x3eef70['searchParams']);if(_0x144a31(0x90)in _0x2232e2){var _0x28d05d=_0x2232e2['kit'];_0x19a1cd=_0x28d05d;}}return _0x19a1cd;}window[_0x2b0027(0x88)]('load',()=>{var _0x1d61d0=getKitId();if(_0x1d61d0!=null)var _0x124995=_0x1d61d0,_0x427dc4=_0x1d61d0!=null,_0xdc4636=new Snd({'preloadSoundKit':_0x124995,'easySetup':_0x427dc4});},{'once':!![]});function _0x497e(){var _0x3d9e07=['4620888AufkZD','2803233VtySZe','src','fromEntries','kit','20JduPQu','getElementsByTagName','8392BdQHQW','script','942919YjRKVL','2pNRSzP','6944517HOpcax','4991BthClj','addEventListener','1953388SiTIye','967865dPUVGK','length'];_0x497e=function(){return _0x3d9e07;};return _0x497e();}