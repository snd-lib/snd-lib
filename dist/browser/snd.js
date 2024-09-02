
  /**
   * @license
   * Snd.js v1.2.2
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
	        if (options.index !== null && options.index !== undefined && options.index !== 0) {
	            throw ("Index out of range");
	        }
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
	        if (options.index !== null && options.index !== undefined) {
	            if (options.index < 0 && options.index >= keys.length) {
	                throw ("Index out of range");
	            }
	            this.play(keys[options.index], options);
	            return;
	        }
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
	    index: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25kLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCIuLi8uLi9zcmMvY29uc3RhbnQudHMiLCIuLi8uLi9zcmMvYXVkaW9Ob2RlLnRzIiwiLi4vLi4vc3JjL3R3ZWVuLnRzIiwiLi4vLi4vc3JjL2F1ZGlvU291cmNlLnRzIiwiLi4vLi4vc3JjL3NvdW5kS2l0LnRzIiwiLi4vLi4vc3JjL2RvbUludGVyYWN0aW9uLnRzIiwiLi4vLi4vc3JjL3NuZC50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb3VuZEtleXMsIERPTUV2ZW50U291bmQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IFNPVU5EX0tJVF8wMSBmcm9tIFwiLi9qc29uLzAxLmpzb25cIjtcbmltcG9ydCBTT1VORF9LSVRfMDIgZnJvbSBcIi4vanNvbi8wMi5qc29uXCI7XG5pbXBvcnQgU09VTkRfS0lUXzAzIGZyb20gXCIuL2pzb24vMDMuanNvblwiO1xuXG5jb25zdCBCVVRUT04gPSBcImJ1dHRvblwiO1xuY29uc3QgQ0FVVElPTiA9IFwiY2F1dGlvblwiO1xuY29uc3QgQ0VMRUJSQVRJT04gPSBcImNlbGVicmF0aW9uXCI7XG5jb25zdCBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbmNvbnN0IE5PVElGSUNBVElPTiA9IFwibm90aWZpY2F0aW9uXCI7XG5jb25zdCBQUk9HUkVTU19MT09QID0gXCJwcm9ncmVzc19sb29wXCI7XG5jb25zdCBSSU5HVE9ORV9MT09QID0gXCJyaW5ndG9uZV9sb29wXCI7XG5jb25zdCBTRUxFQ1QgPSBcInNlbGVjdFwiO1xuY29uc3QgU1dJUEUgPSBcInN3aXBlXCI7XG5jb25zdCBTV0lQRV8wMSA9IFwic3dpcGVfMDFcIjtcbmNvbnN0IFNXSVBFXzAyID0gXCJzd2lwZV8wMlwiO1xuY29uc3QgU1dJUEVfMDMgPSBcInN3aXBlXzAzXCI7XG5jb25zdCBTV0lQRV8wNCA9IFwic3dpcGVfMDRcIjtcbmNvbnN0IFNXSVBFXzA1ID0gXCJzd2lwZV8wNVwiO1xuY29uc3QgVEFQID0gXCJ0YXBcIjtcbmNvbnN0IFRBUF8wMSA9IFwidGFwXzAxXCI7XG5jb25zdCBUQVBfMDIgPSBcInRhcF8wMlwiO1xuY29uc3QgVEFQXzAzID0gXCJ0YXBfMDNcIjtcbmNvbnN0IFRBUF8wNCA9IFwidGFwXzA0XCI7XG5jb25zdCBUQVBfMDUgPSBcInRhcF8wNVwiO1xuY29uc3QgVE9HR0xFID0gXCJ0b2dnbGVcIjtcbmNvbnN0IFRPR0dMRV9PRkYgPSBcInRvZ2dsZV9vZmZcIjtcbmNvbnN0IFRPR0dMRV9PTiA9IFwidG9nZ2xlX29uXCI7XG5jb25zdCBUUkFOU0lUSU9OX0RPV04gPSBcInRyYW5zaXRpb25fZG93blwiO1xuY29uc3QgVFJBTlNJVElPTl9VUCA9IFwidHJhbnNpdGlvbl91cFwiO1xuY29uc3QgVFlQRSA9IFwidHlwZVwiO1xuY29uc3QgVFlQRV8wMSA9IFwidHlwZV8wMVwiO1xuY29uc3QgVFlQRV8wMiA9IFwidHlwZV8wMlwiO1xuY29uc3QgVFlQRV8wMyA9IFwidHlwZV8wM1wiO1xuY29uc3QgVFlQRV8wNCA9IFwidHlwZV8wNFwiO1xuY29uc3QgVFlQRV8wNSA9IFwidHlwZV8wNVwiO1xuXG5jb25zdCBUQVBfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRBUF8wMSxcblx0VEFQXzAyLFxuXHRUQVBfMDMsXG5cdFRBUF8wNCxcblx0VEFQXzA1XG5dO1xuXG5jb25zdCBTV0lQRV9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0U1dJUEVfMDEsXG5cdFNXSVBFXzAyLFxuXHRTV0lQRV8wMyxcblx0U1dJUEVfMDQsXG5cdFNXSVBFXzA1XG5dO1xuXG5jb25zdCBUWVBFX1NPVU5EX0tFWVM6IHN0cmluZ1tdID0gW1xuXHRUWVBFXzAxLFxuXHRUWVBFXzAyLFxuXHRUWVBFXzAzLFxuXHRUWVBFXzA0LFxuXHRUWVBFXzA1XG5dO1xuXG5jb25zdCBUT0dHTEVfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRPR0dMRV9PTixcblx0VE9HR0xFX09GRlxuXTtcblxuY29uc3QgX1NPVU5EX0tFWVM6IFNvdW5kS2V5cyA9IHtcblx0QlVUVE9OLFxuXHRDQVVUSU9OLFxuXHRDRUxFQlJBVElPTixcblx0RElTQUJMRUQsXG5cdE5PVElGSUNBVElPTixcblx0UFJPR1JFU1NfTE9PUCxcblx0UklOR1RPTkVfTE9PUCxcblx0U0VMRUNULFxuXHRTV0lQRSxcblx0VEFQLFxuXHRUT0dHTEVfT04sXG5cdFRPR0dMRV9PRkYsXG5cdFRSQU5TSVRJT05fRE9XTixcblx0VFJBTlNJVElPTl9VUCxcblx0VFlQRVxufTtcblxuY29uc3QgX0VWRU5UX0NMQVNTX05BTUVTOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0W0JVVFRPTl06IGBzbmRfXyR7QlVUVE9OfWAsXG5cdFtDQVVUSU9OXTogYHNuZF9fJHtDQVVUSU9OfWAsXG5cdFtDRUxFQlJBVElPTl06IGBzbmRfXyR7Q0VMRUJSQVRJT059YCxcblx0W0RJU0FCTEVEXTogYHNuZF9fJHtESVNBQkxFRH1gLFxuXHRbTk9USUZJQ0FUSU9OXTogYHNuZF9fJHtOT1RJRklDQVRJT059YCxcblx0W1BST0dSRVNTX0xPT1BdOiBgc25kX18ke1BST0dSRVNTX0xPT1B9YCxcblx0W1JJTkdUT05FX0xPT1BdOiBgc25kX18ke1JJTkdUT05FX0xPT1B9YCxcblx0W1NFTEVDVF06IGBzbmRfXyR7U0VMRUNUfWAsXG5cdFtTV0lQRV06IGBzbmRfXyR7U1dJUEV9YCxcblx0W1RBUF06IGBzbmRfXyR7VEFQfWAsXG5cdFtUT0dHTEVdOiBgc25kX18ke1RPR0dMRX1gLFxuXHRbVFJBTlNJVElPTl9ET1dOXTogYHNuZF9fJHtUUkFOU0lUSU9OX0RPV059YCxcblx0W1RSQU5TSVRJT05fVVBdOiBgc25kX18ke1RSQU5TSVRJT05fVVB9YCxcblx0W1RZUEVdOiBgc25kX18ke1RZUEV9YCxcbn07XG5cblxuXG5jb25zdCBTT1VORFMgPSBPYmplY3QuZnJlZXplKF9TT1VORF9LRVlTKTtcbmNvbnN0IEVWRU5UX0NMQVNTX05BTUVTID0gT2JqZWN0LmZyZWV6ZShfRVZFTlRfQ0xBU1NfTkFNRVMpO1xuXG5jb25zdCBUQUdfRVZFTlRfU09VTkQ6IERPTUV2ZW50U291bmQgPSB7XG5cdFwiaW5wdXQ6dGV4dCxlbWFpbCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLHVybCx0ZWxcIjoge1xuXHRcdGV2ZW50czoge1xuXG5cdFx0XHRcImlucHV0XCI6IFwidHlwZVwiXG5cdFx0fVxuXHR9LFxuXHRcImlucHV0OmNoZWNrYm94XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2hhbmdlXCI6IFwidG9nZ2xlXCJcblx0XHR9XG5cdH0sXG5cdFwiaW5wdXQ6cmFkaW9cIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJzZWxlY3RcIlxuXHRcdH1cblx0fSxcblx0XCJpbnB1dDpidXR0b24scmVzZXQsc3VibWl0XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2xpY2tcIjogXCJidXR0b24sY2F1dGlvbixjZWxlYnJhdGlvbixkaXNhYmxlZCxub3RpZmljYXRpb24sdGFwLHRyYW5zaXRpb25fZG93bix0cmFuc2l0aW9uX3VwXCJcblx0XHR9XG5cdH0sXG5cdFwic2VsZWN0XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2hhbmdlXCI6IFwic2VsZWN0XCJcblx0XHR9XG5cdH0sXG5cdFwiYW55XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2xpY2tcIjogXCJidXR0b24sY2F1dGlvbixjZWxlYnJhdGlvbixkaXNhYmxlZCxub3RpZmljYXRpb24sdGFwLHRyYW5zaXRpb25fZG93bix0cmFuc2l0aW9uX3VwXCJcblx0XHR9XG5cdH1cbn07XG5cblxuZXhwb3J0IHR5cGUgS2l0S2luZHMgPSBcIjAxXCIgfCBcIjAyXCIgfCBcIjAzXCI7XG5jb25zdCBfS0lUUzogeyBba2V5OiBzdHJpbmddOiBLaXRLaW5kczsgfSA9IHtcblx0U05EMDE6IFwiMDFcIixcblx0U05EMDI6IFwiMDJcIixcblx0U05EMDM6IFwiMDNcIixcbn07XG5jb25zdCBLSVRTID0gT2JqZWN0LmZyZWV6ZShfS0lUUyk7XG5cbmNvbnN0IF9LSVRfSU5GTzogeyBba2V5OiBzdHJpbmddOiB7IGpzb246IGFueSwgYXVkaW9TcmM6IHN0cmluZzsgfTsgfSA9IHtcblx0W0tJVFMuU05EMDFdOiB7XG5cdFx0anNvbjogU09VTkRfS0lUXzAxLFxuXHRcdGF1ZGlvU3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zbmQtbGliL3NuZC1saWJAdjEuMi4xL2Fzc2V0cy9zb3VuZHMvc3ByaXRlLzAxL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG5cdFtLSVRTLlNORDAyXToge1xuXHRcdGpzb246IFNPVU5EX0tJVF8wMixcblx0XHRhdWRpb1NyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc25kLWxpYi9zbmQtbGliQHYxLjIuMS9hc3NldHMvc291bmRzL3Nwcml0ZS8wMi9hdWRpb1Nwcml0ZS5tcDNcIixcblxuXHR9LFxuXHRbS0lUUy5TTkQwM106IHtcblx0XHRqc29uOiBTT1VORF9LSVRfMDMsXG5cdFx0YXVkaW9TcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NuZC1saWIvc25kLWxpYkB2MS4yLjEvYXNzZXRzL3NvdW5kcy9zcHJpdGUvLzAzL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG59O1xuY29uc3QgS0lUX0lORk8gPSBPYmplY3QuZnJlZXplKF9LSVRfSU5GTyk7XG5cbmV4cG9ydCB7XG5cdEtJVFMsXG5cdEtJVF9JTkZPLFxuXHRUQUdfRVZFTlRfU09VTkQgYXMgRU5BQkxFX1RBR1MsXG5cdFNPVU5EUyxcblx0RVZFTlRfQ0xBU1NfTkFNRVMsXG5cdFRBUF9TT1VORF9LRVlTLFxuXHRTV0lQRV9TT1VORF9LRVlTLFxuXHRUWVBFX1NPVU5EX0tFWVMsXG5cdFRPR0dMRV9TT1VORF9LRVlTXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Ob2RlcyB7XG5cblx0cHVibGljIGF1ZGlvU3JjOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfZ2FpbjogR2Fpbk5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfdGFpbDogQXVkaW9Ob2RlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3ZvbHVtZTogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfbWFzdGVyVm9sdW1lOiBudW1iZXIgPSAxO1xuXG5cdGNvbnN0cnVjdG9yKGF1ZGlvQnVmZmVyU291cmNlTm9kZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBnYWluTm9kZTogR2Fpbk5vZGUpIHtcblx0XHR0aGlzLmF1ZGlvU3JjID0gYXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xuXHRcdHRoaXMuX2dhaW4gPSBnYWluTm9kZTtcblx0XHR0aGlzLl90YWlsID0gdGhpcy5hdWRpb1NyYztcblx0fVxuXG5cdHB1YmxpYyBzZXQgdm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fdm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX3NldFZvbHVtZSgpO1xuXHR9XG5cblx0cHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fdm9sdW1lO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fc2V0Vm9sdW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IG1hc3RlclZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwcml2YXRlIF9zZXRWb2x1bWUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2dhaW4gIT09IG51bGwpIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMudm9sdW1lICogdGhpcy5tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgY29ubmVjdChhdWRpb05vZGU6IEF1ZGlvTm9kZSk6IEF1ZGlvTm9kZXMge1xuXHRcdHRoaXMuX3RhaWw/LmNvbm5lY3QoYXVkaW9Ob2RlKTtcblx0XHR0aGlzLl90YWlsID0gYXVkaW9Ob2RlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn0iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XG5cdGR1cmF0aW9uPzogbnVtYmVyO1xuXHRkZWxheT86IG51bWJlcjtcblx0b25Db21wbGV0ZT86ICgpID0+IHZvaWQ7XG5cdG9uVXBkYXRlPzogKCkgPT4gdm9pZDtcbn1cblxudHlwZSBUd2VlblR5cGUgPSBcInRvXCIgfCBcImZyb21cIiB8IFwiZnJvbVRvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIHtcblxuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdE9wdGlvbnM6IE9wdGlvbnMgPSB7XG5cdFx0ZHVyYXRpb246IDAuNSxcblx0XHRkZWxheTogMCxcblx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7IH0sXG5cdFx0b25VcGRhdGU6ICgpID0+IHsgfVxuXHR9O1xuXG5cdHByaXZhdGUgX3RhcmdldDogYW55O1xuXHRwcml2YXRlIF9wcm9wTmFtZTogc3RyaW5nID0gXCJcIjtcblx0cHJpdmF0ZSBfdG86IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2Zyb206IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG5cdHByaXZhdGUgX2RlbGF5OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIF9vbkNvbXBsZXRlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXHRwcml2YXRlIF9vblVwZGF0ZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblx0cHJpdmF0ZSBfdXBkYXRlcjogbnVtYmVyID0gMDtcblxuXHRwdWJsaWMgc3RhdGljIHRvKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCB0bzogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRlbHNlIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wTmFtZSwgMCwgdG8sIFwidG9cIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGZyb20odGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIGZyb206IG51bWJlciwgb3B0aW9ucz86IE9wdGlvbnMpOiBUd2VlbiB7XG5cdFx0aWYgKHRhcmdldFtwcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGBwcm9wOiAke3Byb3BOYW1lfSBkb2VzIG5vdCBleGlzdHMgaW4gJHt0YXJnZXR9YCk7XG5cdFx0cmV0dXJuIG5ldyBUd2Vlbih0YXJnZXQsIHByb3BOYW1lLCBmcm9tLCAwLCBcImZyb21cIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGZyb21Ubyh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRyZXR1cm4gbmV3IFR3ZWVuKHRhcmdldCwgcHJvcE5hbWUsIGZyb20sIHRvLCBcImZyb21Ub1wiLCBvcHRpb25zKTtcblx0fVxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIGZyb206IG51bWJlciwgdG86IG51bWJlciwgdHlwZTogVHdlZW5UeXBlLCBvcHRpb25zPzogT3B0aW9ucykge1xuXHRcdHRoaXMuX3RhcmdldCA9IHRhcmdldDtcblx0XHR0aGlzLl9wcm9wTmFtZSA9IHByb3BOYW1lO1xuXHRcdHRoaXMuX2Zyb20gPSBmcm9tO1xuXHRcdHRoaXMuX3RvID0gdG87XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlR3ZWVuLl9kZWZhdWx0T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9O1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gb3B0aW9ucz8uZHVyYXRpb24hO1xuXHRcdHRoaXMuX2RlbGF5ID0gb3B0aW9ucz8uZGVsYXkhO1xuXHRcdHRoaXMuX29uQ29tcGxldGUgPSBvcHRpb25zPy5vbkNvbXBsZXRlITtcblx0XHR0aGlzLl9vblVwZGF0ZSA9IG9wdGlvbnM/Lm9uVXBkYXRlITtcblxuXHRcdGlmICh0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlIFwidG9cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlblRvKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmcm9tXCI6XG5cdFx0XHRcdFx0dGhpcy5fdHdlZW5Gcm9tKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmcm9tVG9cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlbkZyb21UbygpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7dGhpcy5fcHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RoaXMuX3RhcmdldH1gKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdGltZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiBEYXRlLm5vdygpIC8gMTAwMDtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuVG8oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV07XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90bztcblx0XHR0aGlzLl90d2Vlbihmcm9tLCB0byk7XG5cdH1cblxuXHRwcml2YXRlIF90d2VlbkZyb20oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX2Zyb207XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdO1xuXHRcdHRoaXMuX3R3ZWVuKGZyb20sIHRvKTtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuRnJvbVRvKCk6IHZvaWQge1xuXHRcdGNvbnN0IGZyb20gPSB0aGlzLl9mcm9tO1xuXHRcdGNvbnN0IHRvID0gdGhpcy5fdG87XG5cdFx0dGhpcy5fdHdlZW4oZnJvbSwgdG8pO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW4gPSBhc3luYyAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0aWYgKHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5raWxsKCk7XG5cblx0XHRjb25zdCBzdGFydFRpbWUgPSB0aGlzLl90aW1lO1xuXHRcdGNvbnN0IGR1ciA9IHRoaXMuX2R1cmF0aW9uO1xuXHRcdGNvbnN0IGRlbCA9IHRoaXMuX2RlbGF5O1xuXHRcdGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUgKyBkdXIgKyBkZWw7XG5cblx0XHR3aGlsZSAodGhpcy5fdGltZSA8IGVuZFRpbWUpIHtcblx0XHRcdGlmICh0aGlzLl90aW1lIDwgc3RhcnRUaW1lICsgZGVsKSBjb250aW51ZTtcblxuXHRcdFx0Y29uc3QgY3JyVGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHRjb25zdCBwZXJjZW50YWdlID0gKGNyclRpbWUgLSBzdGFydFRpbWUpIC8gKGVuZFRpbWUgLSBzdGFydFRpbWUpO1xuXHRcdFx0Y29uc3QgdmFsID0gKHRvIC0gZnJvbSkgKiBwZXJjZW50YWdlICsgZnJvbTtcblxuXHRcdFx0dGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9IHZhbDtcblx0XHRcdHRoaXMuX29uVXBkYXRlKCk7XG5cdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4ge1xuXHRcdFx0XHR0aGlzLl91cGRhdGVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5raWxsKCk7XG5cdFx0dGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9IHRvO1xuXHRcdHRoaXMuX29uVXBkYXRlKCk7XG5cdFx0dGhpcy5fb25Db21wbGV0ZSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBraWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3VwZGF0ZXIpO1xuXHR9O1xuXG59IiwiaW1wb3J0IEF1ZGlvTm9kZXMgZnJvbSBcIi4vYXVkaW9Ob2RlXCI7XG5pbXBvcnQgeyBQbGF5T3B0aW9ucyB9IGZyb20gXCIuL3NuZFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL3R3ZWVuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ByaXRlSlNPTiB7XG5cdHJlc291cmNlczogc3RyaW5nW107XG5cdHNwcml0ZW1hcDoge1xuXHRcdFtrZXk6IHN0cmluZ106IHtcblx0XHRcdHN0YXJ0OiBudW1iZXI7XG5cdFx0XHRlbmQ6IG51bWJlcjtcblx0XHRcdGxvb3A6IGJvb2xlYW47XG5cdFx0fTtcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWRpb0RhdGEge1xuXHRrZXk6IHN0cmluZztcblx0bm9kZXM6IEF1ZGlvTm9kZXM7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0dmFyIHdlYmtpdEF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb1NvdXJjZSB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBFTkQ6IHN0cmluZyA9IFwiZW5kXCI7XG5cdHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZXM6IEF1ZGlvU291cmNlW10gPSBbXTtcblx0cHJpdmF0ZSBzdGF0aWMgX2N0eDogQXVkaW9Db250ZXh0IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3RhdGljIF9pc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgX2F1ZGlvQXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2F1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlciB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9hdWRpb0xpc3Q6IE1hcDxudW1iZXIsIEF1ZGlvRGF0YT4gPSBuZXcgTWFwPG51bWJlciwgQXVkaW9EYXRhPigpO1xuXHRwcml2YXRlIF9jbnQ6IG51bWJlciA9IDEwMDA7XG5cdHByaXZhdGUgX2pzb246IFNwcml0ZUpTT04gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfaGFzU3RhcnRlZExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaGFzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2hhc1N0YXJ0ZWRBbmFseXNpczogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9oYXNBbmFseXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2FuYWx5emVQcm9taXNlOiBQcm9taXNlPEF1ZGlvQnVmZmVyPiB8IG51bGwgPSBudWxsO1xuXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYWN0aXZhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2lzQWN0aXZlKSByZXR1cm47XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXHRcdFx0dGhpcy5fY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG5cdFx0XHRjb25zdCBlbXB0eVNyYyA9IHRoaXMuX2N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblx0XHRcdGVtcHR5U3JjLnN0YXJ0KCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRlbXB0eVNyYy5zdG9wKCk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLl9hbmFseXplQWxsSW5zdGFuY2VzKCk7XG5cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VycmVkIHdoaWxlIEF1ZGlvU291cmNlLnNldHVwICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIF9hbmFseXplQWxsSW5zdGFuY2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZTogQXVkaW9Tb3VyY2UpID0+IHtcblx0XHRcdGlmIChpbnN0YW5jZS5faGFzTG9hZGVkICYmICFpbnN0YW5jZS5faGFzU3RhcnRlZEFuYWx5c2lzKSB7XG5cdFx0XHRcdGluc3RhbmNlLmFuYWx5emUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGFzeW5jIF9jcmVhdGVBdWRpb0J1ZmZlcihidWZmZXI6IEFycmF5QnVmZmVyKTogUHJvbWlzZTxBdWRpb0J1ZmZlcj4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2N0eCEuZGVjb2RlQXVkaW9EYXRhLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxBdWRpb0J1ZmZlcj4oKHJlcywgcmVqKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyLFxuXHRcdFx0XHRcdFx0KGRhdGE6IEF1ZGlvQnVmZmVyKSA9PiByZXMoZGF0YSksXG5cdFx0XHRcdFx0XHQoZXJyOiBFcnJvcikgPT4gcmVqKGVycilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VyZWQgd2hpbGUgQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQnVmZmVyICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGFzeW5jIF9jcmVhdGVBdWRpb0FycmF5QnVmZmVyKGF1ZGlvU3JjOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGF1ZGlvU3JjKTtcblx0XHRcdGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzLmFycmF5QnVmZmVyKCk7XG5cdFx0XHRyZXR1cm4gYXJyYXlCdWZmZXI7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGFuIGVyciBvY2N1cnJlZCB3aGlsZSBBdWRpb1NvdXJjZS5fY3JlYXRlQXVkaW9BcnJheUJ1ZmZlciAke2Vycn1gKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRBdWRpb1NvdXJjZS5faW5zdGFuY2VzLnB1c2godGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdW5pcXVlS2V5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2NudCsrO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fYXVkaW9MaXN0LmZvckVhY2goKGF1ZGlvOiBBdWRpb0RhdGEpID0+IHtcblx0XHRcdGF1ZGlvLm5vZGVzLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKGF1ZGlvU3JjOiBzdHJpbmcsIGpzb246IFNwcml0ZUpTT04pOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5faGFzU3RhcnRlZExvYWRpbmcpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIlRoZSBmaWxlIGhhcyBhbHJlYWR5IHN0YXJ0ZWQgbG9hZGluZy5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX2pzb24gPSBqc29uO1xuXHRcdHRoaXMuX2hhc1N0YXJ0ZWRMb2FkaW5nID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5fYXVkaW9BcnJheUJ1ZmZlciA9IGF3YWl0IEF1ZGlvU291cmNlLl9jcmVhdGVBdWRpb0FycmF5QnVmZmVyKGF1ZGlvU3JjKTtcblx0XHRcdHRoaXMuX2hhc0xvYWRlZCA9IHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IGVycjtcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBlcnJvclwiKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgYW5hbHl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoIUF1ZGlvU291cmNlLmlzQWN0aXZlKSByZXR1cm47XG5cdFx0aWYgKHRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiYW5hbHl6ZSgpOiBBdWRpb0J1ZmZlciBoYXMgYWxyZWFkeSBzdGFydGVkIGFuYWx5c2lzXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuX2hhc0xvYWRlZCB8fCB0aGlzLl9hdWRpb0FycmF5QnVmZmVyID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUud2FybihcImFuYWx5emUoKTogVGhlIGZpbGUgaGFzbid0IGxvYWRlZCB5ZXQuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcyA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2FuYWx5emVQcm9taXNlID0gQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQnVmZmVyKHRoaXMuX2F1ZGlvQXJyYXlCdWZmZXIhKTtcblx0XHRcdHRoaXMuX2F1ZGlvQnVmZmVyID0gYXdhaXQgdGhpcy5fYW5hbHl6ZVByb21pc2U7XG5cdFx0XHR0aGlzLl9hbmFseXplUHJvbWlzZSA9IG51bGw7XG5cdFx0XHR0aGlzLl9oYXNBbmFseXplZCA9IHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IGVycjtcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBlcnJvclwiKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5faGFzTG9hZGVkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJwbGF5KCk6IFRoZSBmaWxlIGhhc24ndCBsb2FkZWQgeWV0LlwiKTtcblx0XHRcdHJldHVybiAtOTk5O1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuX2hhc0FuYWx5emVkKSB7XG5cdFx0XHRpZiAoIXRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdEF1ZGlvU291cmNlLmFjdGl2YXRlKCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcInBsYXkoKTogQ2FuIG5vdCBwbGF5IGF1ZGlvIGJlZm9yZSBpbml0aWFsaXphdGlvbiAoQXVkaW9Db250ZXh0IG11c3QgYmUgaW5pdGlhbGl6YXRpb24gYnkgcG9pbnRlciBldmVudCkuXCIpO1xuXHRcdFx0XHRcdHJldHVybiAtOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9hbmFseXplUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdFx0XHR0aGlzLl9wbGF5TGF0ZXIoaWQsIGtleSwgb3B0aW9ucyk7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybigoXCJfYW5hbHl6ZVByb21pc2UgaXMgbnVsbFwiKSk7XG5cdFx0XHRcdHJldHVybiAtOTk5O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9qc29uID09PSBudWxsIHx8ICF0aGlzLl9qc29uLnNwcml0ZW1hcCB8fCAhKGtleSBpbiB0aGlzLl9qc29uLnNwcml0ZW1hcCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihganNvbiBlcnJvcjogJHt0aGlzLl9qc29ufWApO1xuXHRcdH1cblxuXHRcdGlmICgoQXVkaW9Tb3VyY2UuX2N0eD8uc3RhdGUgYXMgc3RyaW5nKSA9PSBcImludGVycnVwdGVkXCIpIHtcblx0XHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdFx0QXVkaW9Tb3VyY2UuX2N0eD8ucmVzdW1lKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMucGxheShrZXksIG9wdGlvbnMpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gaWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWQgPSB0aGlzLl91bmlxdWVLZXk7XG5cdFx0dGhpcy5fcGxheShpZCwga2V5LCBvcHRpb25zKTtcblx0XHR0aGlzLnNldExvb3Aob3B0aW9ucy5sb29wISwgaWQpO1xuXHRcdHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lISwgaWQpXG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChpZDogbnVtYmVyLCBkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblxuXHRcdHRoaXMuX2F1ZGlvTGlzdC5nZXQoaWQpPy5ub2Rlcy5hdWRpb1NyYyEuc3RvcChBdWRpb1NvdXJjZS5fY3R4IS5jdXJyZW50VGltZSArIGRlbGF5KTtcblx0XHR0aGlzLl9hdWRpb0xpc3QuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRWb2x1bWUodm9sOiBudW1iZXIsIGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cblx0XHRjb25zdCBhdWRpb05vZGVzOiBBdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzITtcblx0XHRpZiAoYXVkaW9Ob2RlcyAhPT0gbnVsbCAmJiBhdWRpb05vZGVzLnZvbHVtZSAhPT0gbnVsbCkgYXVkaW9Ob2Rlcy52b2x1bWUgPSB2b2w7XG5cdH1cblxuXHRwdWJsaWMgc2V0TG9vcChsb29wOiBib29sZWFuLCBpZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLl9hdWRpb0xpc3QuaGFzKGlkKSkgcmV0dXJuO1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/LmtleTtcblx0XHRjb25zdCBhdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzO1xuXG5cdFx0aWYgKGxvb3ApIHtcblx0XHRcdGNvbnN0IHN0YXJ0ID0gdGhpcy5fanNvbiEuc3ByaXRlbWFwW2tleSFdLnN0YXJ0O1xuXHRcdFx0Y29uc3QgZW5kID0gdGhpcy5fanNvbiEuc3ByaXRlbWFwW2tleSFdLmVuZDtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wID0gdHJ1ZTtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wU3RhcnQgPSBzdGFydDtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wRW5kID0gZW5kO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdWRpb05vZGVzIS5hdWRpb1NyYyEubG9vcCA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBmYWRlKHZvbFRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cdFx0Y29uc3QgYXVkaW9Ob2RlcyA9IHRoaXMuX2F1ZGlvTGlzdC5nZXQoaWQpPy5ub2RlcztcblxuXHRcdGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXM6ICgpID0+IHZvaWQpID0+IHtcblx0XHRcdFR3ZWVuLnRvKGF1ZGlvTm9kZXMsIFwidm9sdW1lXCIsIHZvbFRvLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdFx0b25Db21wbGV0ZTogcmVzXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0cHVibGljIGZhZGVBbGwodm9sVG86IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuX2F1ZGlvTGlzdC5mb3JFYWNoKChfOiBBdWRpb0RhdGEsIGlkOiBudW1iZXIpID0+IHtcblx0XHRcdHRoaXMuZmFkZSh2b2xUbywgMC41LCBpZCkudGhlbihfID0+IHRoaXMuc3RvcChpZCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfcGxheShpZDogbnVtYmVyLCBrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBhdWRpb1NyYzogQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gQXVkaW9Tb3VyY2UuX2N0eCEuY3JlYXRlQnVmZmVyU291cmNlKCk7XG5cdFx0YXVkaW9TcmMhLmJ1ZmZlciA9IHRoaXMuX2F1ZGlvQnVmZmVyO1xuXG5cdFx0Y29uc3QgZ2Fpbk5vZGUgPSBBdWRpb1NvdXJjZS5fY3R4IS5jcmVhdGVHYWluKCk7XG5cdFx0Y29uc3QgYXVkaW9Ob2RlczogQXVkaW9Ob2RlcyA9IG5ldyBBdWRpb05vZGVzKGF1ZGlvU3JjLCBnYWluTm9kZSk7XG5cdFx0YXVkaW9Ob2Rlcy5tYXN0ZXJWb2x1bWUgPSB0aGlzLm1hc3RlclZvbHVtZTtcblx0XHRhdWRpb05vZGVzLmNvbm5lY3QoZ2Fpbk5vZGUpLmNvbm5lY3QoQXVkaW9Tb3VyY2UuX2N0eCEuZGVzdGluYXRpb24pO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5XS5zdGFydDtcblx0XHRjb25zdCBlbmQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5XS5lbmQ7XG5cblx0XHRpZiAob3B0aW9ucy5sb29wISkge1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuc3RhcnQoQXVkaW9Tb3VyY2UuX2N0eCEuY3VycmVudFRpbWUgKyBvcHRpb25zLmRlbGF5ISwgc3RhcnQsIGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGR1ciA9IE1hdGgubWF4KGVuZCAtIHN0YXJ0LCAwLjEpO1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuc3RhcnQoQXVkaW9Tb3VyY2UuX2N0eCEuY3VycmVudFRpbWUgKyBvcHRpb25zLmRlbGF5ISwgc3RhcnQsIGR1cik7XG5cdFx0fVxuXG5cdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEub25lbmRlZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuc3RvcChpZCk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5kaXNjb25uZWN0KCk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5idWZmZXIgPSBudWxsO1xuXHRcdFx0b3B0aW9ucy5jYWxsYmFjayEoaWQpO1xuXHRcdH07XG5cblx0XHR0aGlzLl9hdWRpb0xpc3Quc2V0KGlkLCB7XG5cdFx0XHRrZXksXG5cdFx0XHRub2RlczogYXVkaW9Ob2Rlcyxcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX3BsYXlMYXRlcihpZDogbnVtYmVyLCBrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLl9hbmFseXplUHJvbWlzZSE7XG5cdFx0dGhpcy5fcGxheShpZCwga2V5LCBvcHRpb25zKTtcblx0XHR0aGlzLnNldExvb3Aob3B0aW9ucy5sb29wISwgaWQpO1xuXHRcdHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lISwgaWQpXG5cdH1cbn0iLCJpbXBvcnQgeyBLSVRfSU5GTyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgQXVkaW9Tb3VyY2UgZnJvbSBcIi4vYXVkaW9Tb3VyY2VcIjtcbmltcG9ydCB7IFBsYXlPcHRpb25zIH0gZnJvbSBcIi4vc25kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kS2l0IHtcblxuXHRwdWJsaWMga2V5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2lkczogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgX2F1ZGlvU3JjOiBBdWRpb1NvdXJjZSA9IG5ldyBBdWRpb1NvdXJjZSgpO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2F1ZGlvU3JjLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IGpzb24gPSBLSVRfSU5GT1t0aGlzLmtleV0uanNvbjtcblx0XHRjb25zdCBhdWRpb1NyYyA9IEtJVF9JTkZPW3RoaXMua2V5XS5hdWRpb1NyYztcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdGhpcy5fYXVkaW9TcmMubG9hZChhdWRpb1NyYywganNvbik7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGFuYWx5emUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMuX2F1ZGlvU3JjLmFuYWx5emUoKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRJZCA9IHRoaXMuX2lkcy5nZXQoa2V5KTtcblx0XHRpZiAob2xkSWQgIT09IHVuZGVmaW5lZCkgdGhpcy5fYXVkaW9TcmMuZmFkZSgwLCAwLjA1LCBvbGRJZCk7XG5cblx0XHRjb25zdCBpZCA9IHRoaXMuX2F1ZGlvU3JjLnBsYXkoa2V5LCBvcHRpb25zKTtcblx0XHRjb25zdCBmYWRlb3V0RHVyYXRpb246IG51bWJlciA9IDAuMDU7XG5cdFx0aWYgKG9wdGlvbnMuZHVyYXRpb24hID4gZmFkZW91dER1cmF0aW9uKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5fYXVkaW9TcmMuZmFkZSgwLCBmYWRlb3V0RHVyYXRpb24sIGlkKTtcblx0XHRcdH0sIChvcHRpb25zLmR1cmF0aW9uISAtIGZhZGVvdXREdXJhdGlvbikgKiAxMDAwKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pZHMuc2V0KGtleS5yZXBsYWNlKC9fWzAtOV1bMC05XS8sIFwiXCIpLCBpZCk7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChzb3VuZEtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLl9pZHMuZ2V0KHNvdW5kS2V5KTtcblx0XHRpZiAoaWQpIHRoaXMuX2F1ZGlvU3JjLnN0b3AoaWQpO1xuXHRcdGVsc2UgY29uc29sZS53YXJuKGBbU291bmRLaXQuc3RvcCgpXSBrZXk6ICR7c291bmRLZXl9IGhhdmVuJ3QgcGxheWVkYCk7XG5cdH1cblxuXHRwdWJsaWMgZmFkZSh2b2xUbzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5fYXVkaW9TcmMuZmFkZUFsbCh2b2xUbyk7XG5cdH1cblxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgeyBFVkVOVF9DTEFTU19OQU1FUywgVE9HR0xFX1NPVU5EX0tFWVMsIEVOQUJMRV9UQUdTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuY29uc3QgaXNUb3VjaERldmljZTogYm9vbGVhbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUludGVyYWN0aW9uIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOVEVSQUNUOiBcImludGVyYWN0XCJcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5faW5pdCgpXG5cdH1cblxuXHRwcml2YXRlIF9pbml0KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qga2V5IGluIEVWRU5UX0NMQVNTX05BTUVTKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBFVkVOVF9DTEFTU19OQU1FU1trZXldXG5cdFx0XHRjb25zdCBlbGVtZW50czogSFRNTENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG5cdFx0XHRcdGNvbnN0IHNvdW5kS2V5ID0ga2V5LnJlcGxhY2UoXCJzbmRfX1wiLCBcIlwiKVxuXHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSB0aGlzLl9nZXRFdmVudE5hbWUoc291bmRLZXksIGVsIGFzIEhUTUxFbGVtZW50KVxuXHRcdFx0XHRpZiAoZXZlbnROYW1lID09IG51bGwpIGJyZWFrXG5cblx0XHRcdFx0dGhpcy5fbGlzdGVuKGVsIGFzIEhUTUxFbGVtZW50LCBldmVudE5hbWUsIHNvdW5kS2V5KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX2dldEV2ZW50TmFtZShzb3VuZEtleTogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB8IG51bGwge1xuXHRcdGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXG5cdFx0Zm9yIChjb25zdCB0YWdTdHJpbmcgaW4gRU5BQkxFX1RBR1MpIHtcblxuXHRcdFx0aWYgKHRhZ05hbWUgPT0gXCJpbnB1dFwiICYmIHRhZ1N0cmluZy5tYXRjaChcImlucHV0XCIpICE9IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgfHwgXCJcIlxuXHRcdFx0XHRjb25zdCB0eXBlcyA9IHRhZ1N0cmluZy5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCIsXCIpXG5cdFx0XHRcdGZvciAoY29uc3QgZXZlbnQgaW4gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGkgaW4gdHlwZXMpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlICE9IHR5cGVzW2ldKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0Y29uc3Qgc291bmRzID0gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHNbZXZlbnRdLnNwbGl0KFwiLFwiKVxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBqIGluIHNvdW5kcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoc291bmRLZXkgPT0gc291bmRzW2pdKSByZXR1cm4gZXZlbnRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0YWdTdHJpbmcgPT0gdGFnTmFtZSB8fCB0YWdTdHJpbmcgPT0gXCJhbnlcIikge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZXZlbnQgaW4gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHNvdW5kcyA9IEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzW2V2ZW50XS5zcGxpdChcIixcIilcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgaSBpbiBzb3VuZHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNvdW5kS2V5ID09IHNvdW5kc1tpXSkgcmV0dXJuIGV2ZW50XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdHByaXZhdGUgX2xpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4gdGhpcy5fcHJvY2VzcyhlLCBldmVudE5hbWUsIHNvdW5kS2V5KSk7XG5cdH1cblxuXHRwcml2YXRlIF9wcm9jZXNzKGU6IEV2ZW50LCBldmVudE5hbWU6IHN0cmluZywgc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXG5cdFx0aWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBzbmRfXyR7c291bmRLZXl9YCkpIHJldHVyblxuXHRcdGlmIChzb3VuZEtleSA9PSBcInRvZ2dsZVwiKSB7XG5cdFx0XHRzb3VuZEtleSA9ICh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA/IFRPR0dMRV9TT1VORF9LRVlTWzBdIDogVE9HR0xFX1NPVU5EX0tFWVNbMV1cblx0XHR9XG5cblx0XHR0aGlzLl9lbWl0KHRhcmdldCBhcyBIVE1MRWxlbWVudCwgZXZlbnROYW1lLCBzb3VuZEtleSlcblx0fVxuXG5cdHByaXZhdGUgX2VtaXQoRE9NOiBIVE1MRWxlbWVudCwgZXZlbnQ6IHN0cmluZywgc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibXV0ZWRcIikpIHJldHVyblxuXHRcdHRoaXMuZW1pdChET01JbnRlcmFjdGlvbi5JTlRFUkFDVCwgc291bmRLZXkpXG5cdH1cblxufSIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgS2l0S2luZHMsIEtJVFMsIFNPVU5EUywgU1dJUEVfU09VTkRfS0VZUywgVEFQX1NPVU5EX0tFWVMsIFRZUEVfU09VTkRfS0VZUyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgU291bmRLaXQgZnJvbSBcIi4vc291bmRLaXRcIjtcbmltcG9ydCBET01JbnRlcmFjdGlvbiBmcm9tIFwiLi9kb21JbnRlcmFjdGlvblwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL3R3ZWVuXCI7XG5pbXBvcnQgQXVkaW9Tb3VyY2UgZnJvbSBcIi4vYXVkaW9Tb3VyY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTbmRPcHRpb25zIHtcblx0ZWFzeVNldHVwPzogYm9vbGVhbjtcblx0bXV0ZU9uV2luZG93Qmx1cj86IGJvb2xlYW47XG5cdHByZWxvYWRTb3VuZEtpdD86IG51bGwgfCBLaXRLaW5kcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5T3B0aW9ucyB7XG5cdGluZGV4PzogbnVsbCB8IDAgfCAxIHwgMiB8IDMgfCA0O1xuXHRsb29wPzogYm9vbGVhbjtcblx0dm9sdW1lPzogbnVtYmVyO1xuXHRkdXJhdGlvbj86IG51bWJlcjtcblx0ZGVsYXk/OiBudW1iZXI7XG5cdGNhbGxiYWNrPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuZCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDSEFOR0VfU09VTkRfS0lUOiBzdHJpbmcgPSBcImNoYW5nZV9zb3VuZF9raXRcIjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTT1VORFMgPSBTT1VORFM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS0lUUyA9IEtJVFM7XG5cblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlczogU25kW10gPSBbXTtcblx0cHJpdmF0ZSBzdGF0aWMgX2luaXRpYWxpemVkU291bmRLaXRzOiBNYXA8c3RyaW5nLCBTb3VuZEtpdD4gPSBuZXcgTWFwPHN0cmluZywgU291bmRLaXQ+KCk7XG5cdHByaXZhdGUgc3RhdGljIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBfc291bmRLaXQ6IFNvdW5kS2l0ID0gbmV3IFNvdW5kS2l0KEtJVFMuU05EMDEpO1xuXHRwcml2YXRlIF9kb206IERPTUludGVyYWN0aW9uIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3ZvbDogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfaXNNdXRlZEJ5RGV2ZWxvcGVyOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2lzTXV0ZWRCeVdpbmRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9pc1dpbmRvd0JsdXJyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfbXV0ZU9uV2luZG93Qmx1cjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9mYWRlVm9sOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF93aW5kb3dWb2w6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyOiBUd2VlbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50OiBUd2VlbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdE9wdGlvbnM6IFNuZE9wdGlvbnMgPSB7XG5cdFx0bXV0ZU9uV2luZG93Qmx1cjogdHJ1ZSxcblx0XHRlYXN5U2V0dXA6IGZhbHNlLFxuXHRcdHByZWxvYWRTb3VuZEtpdDogbnVsbCxcblx0fTtcblx0cHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRQbGF5T3B0aW9uczogUGxheU9wdGlvbnMgPSB7XG5cdFx0aW5kZXg6IG51bGwsXG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0dm9sdW1lOiAxLFxuXHRcdGRlbGF5OiAwLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0XHRjYWxsYmFjazogKCkgPT4geyB9XG5cdH07XG5cblx0cHVibGljIHN0YXRpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7IH1cblx0cHVibGljIHN0YXRpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZTogU25kKSA9PiB7XG5cdFx0XHRpbnN0YW5jZS5fc291bmRLaXQubWFzdGVyVm9sdW1lID0gdGhpcy5fbWFzdGVyVm9sdW1lICogaW5zdGFuY2UuX3ZvbHVtZTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBTbmRPcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRcdFNuZC5faW5zdGFuY2VzLnB1c2godGhpcyk7XG5cblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Li4uU25kLl9kZWZhdWx0T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0fTtcblx0XHR0aGlzLl9tdXRlT25XaW5kb3dCbHVyID0gb3B0aW9ucy5tdXRlT25XaW5kb3dCbHVyIHx8IGZhbHNlO1xuXG5cdFx0aWYgKG9wdGlvbnM/LmVhc3lTZXR1cCkge1xuXHRcdFx0dGhpcy5fZG9tID0gbmV3IERPTUludGVyYWN0aW9uKCk7XG5cdFx0XHR0aGlzLl9kb20ub24oRE9NSW50ZXJhY3Rpb24uSU5URVJBQ1QsIHRoaXMuX29uSW50ZXJhY3QpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5wcmVsb2FkU291bmRLaXQpIHRoaXMubG9hZChvcHRpb25zLnByZWxvYWRTb3VuZEtpdCk7XG5cblx0XHRjb25zdCBpbml0QXVkaW9Db250ZXh0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0QXVkaW9Tb3VyY2UuYWN0aXZhdGUoKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdEF1ZGlvQ29udGV4dCk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaW5pdEF1ZGlvQ29udGV4dCk7XG5cdFx0fTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRBdWRpb0NvbnRleHQsIHsgb25jZTogdHJ1ZSB9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaW5pdEF1ZGlvQ29udGV4dCwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cdFx0Y29uc3QgaXNTcCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxBbmRyb2lkLitNb2JpbGUvKSAhPSBudWxsO1xuXHRcdGlmIChpc1NwKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuX29uQmx1cik7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuX29uRm9jdXMpO1xuXHRcdH1cblxuXHR9XG5cblx0cHVibGljIGdldCBraXQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3NvdW5kS2l0LmtleTsgfVxuXHRwdWJsaWMgZ2V0IGlzTXV0ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc011dGVkQnlEZXZlbG9wZXIgfHwgdGhpcy5faXNNdXRlZEJ5V2luZG93OyB9XG5cdHB1YmxpYyBnZXQgaXNXaW5kb3dCbHVycmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNXaW5kb3dCbHVycmVkOyB9XG5cblx0cHJpdmF0ZSBnZXQgX2ZhZGVWb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ZhZGVWb2w7IH1cblx0cHJpdmF0ZSBzZXQgX2ZhZGVWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9mYWRlVm9sID0gdmFsO1xuXHRcdHRoaXMuX3ZvbHVtZSA9IHRoaXMuX2ZhZGVWb2wgKiB0aGlzLl93aW5kb3dWb2x1bWU7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfd2luZG93Vm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aW5kb3dWb2w7IH1cblx0cHJpdmF0ZSBzZXQgX3dpbmRvd1ZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX3dpbmRvd1ZvbCA9IHZhbDtcblx0XHR0aGlzLl92b2x1bWUgPSB0aGlzLl9mYWRlVm9sdW1lICogdGhpcy5fd2luZG93Vm9sO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXQgX3ZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl92b2w7XG5cdH1cblx0cHJpdmF0ZSBzZXQgX3ZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX3ZvbCA9IHZhbDtcblx0XHR0aGlzLl9zb3VuZEtpdC5tYXN0ZXJWb2x1bWUgPSB0aGlzLl92b2wgKiBTbmQuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKHNvdW5kS2l0S2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLl9zb3VuZEtpdC5mYWRlKDApO1xuXHRcdGNvbnN0IG9sZEtleSA9IHRoaXMuX3NvdW5kS2l0LmtleTtcblx0XHRjb25zdCBraXQgPSBTbmQuX2luaXRpYWxpemVkU291bmRLaXRzLmdldChzb3VuZEtpdEtleSk7XG5cblx0XHRpZiAoa2l0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IG5ld0tpdCA9IG5ldyBTb3VuZEtpdChzb3VuZEtpdEtleSk7XG5cdFx0XHRTbmQuX2luaXRpYWxpemVkU291bmRLaXRzLnNldChzb3VuZEtpdEtleSwgbmV3S2l0KTtcblx0XHRcdGF3YWl0IG5ld0tpdC5sb2FkKCk7XG5cdFx0XHRhd2FpdCBuZXdLaXQuYW5hbHl6ZSgpO1xuXHRcdFx0dGhpcy5fc291bmRLaXQgPSBuZXdLaXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NvdW5kS2l0ID0ga2l0O1xuXHRcdH1cblxuXHRcdHRoaXMuX3NvdW5kS2l0LmZhZGUoMSk7XG5cdFx0Y29uc3QgY3JyS2V5ID0gdGhpcy5fc291bmRLaXQua2V5O1xuXHRcdGlmIChvbGRLZXkgIT09IGNycktleSkgdGhpcy5lbWl0KFNuZC5DSEFOR0VfU09VTkRfS0lULCBjcnJLZXksIG9sZEtleSk7XG5cdH1cblxuXHRwdWJsaWMgcGxheShzb3VuZEtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlNuZC5fZGVmYXVsdFBsYXlPcHRpb25zLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH07XG5cdFx0aWYgKHRoaXMuaXNXaW5kb3dCbHVycmVkKSByZXR1cm47XG5cdFx0aWYgKHNvdW5kS2V5ID09PSBTT1VORFMuVEFQKSByZXR1cm4gdGhpcy5wbGF5VGFwKG9wdGlvbnMpO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlRZUEUpIHJldHVybiB0aGlzLnBsYXlUeXBlKG9wdGlvbnMpO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlNXSVBFKSByZXR1cm4gdGhpcy5wbGF5U3dpcGUob3B0aW9ucyk7XG5cdFx0aWYgKCBvcHRpb25zLmluZGV4ICE9PSBudWxsICYmIG9wdGlvbnMuaW5kZXggIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmluZGV4ICE9PSAwICl7XG5cdFx0XHR0aHJvdyhcIkluZGV4IG91dCBvZiByYW5nZVwiKTtcblx0XHR9XG5cdFx0dGhpcy5fc291bmRLaXQucGxheShzb3VuZEtleSwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChrZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuX3NvdW5kS2l0LnN0b3Aoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBtdXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeURldmVsb3BlciA9IHRydWU7XG5cdFx0dGhpcy5fZmFkZUJ5RGV2ZWxvcGVyKDAsIDAuMyk7XG5cdH1cblxuXHRwdWJsaWMgdW5tdXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeURldmVsb3BlciA9IGZhbHNlO1xuXHRcdHRoaXMuX2ZhZGVCeURldmVsb3BlcigxLCAwLjMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUYXAob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMuX3BsYXlSYW5kb20oVEFQX1NPVU5EX0tFWVMsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlTd2lwZShvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5fcGxheVJhbmRvbShTV0lQRV9TT1VORF9LRVlTLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VHlwZShvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5fcGxheVJhbmRvbShUWVBFX1NPVU5EX0tFWVMsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlCdXR0b24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLkJVVFRPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheUNhdXRpb24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLkNBVVRJT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlDZWxlYnJhdGlvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuQ0VMRUJSQVRJT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlEaXNhYmxlZChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuRElTQUJMRUQsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlOb3RpZmljYXRpb24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLk5PVElGSUNBVElPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVByb2dyZXNzTG9vcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuUFJPR1JFU1NfTE9PUCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVJpbmd0b25lTG9vcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuUklOR1RPTkVfTE9PUCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVNlbGVjdChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuU0VMRUNULCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VHJhbnNpdGlvblVwKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5UUkFOU0lUSU9OX1VQLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VHJhbnNpdGlvbkRvd24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRSQU5TSVRJT05fRE9XTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRvZ2dsZU9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5UT0dHTEVfT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUb2dnbGVPZmYob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRPR0dMRV9PRkYsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfcGxheVJhbmRvbShrZXlzOiBzdHJpbmdbXSwgb3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdGlmKG9wdGlvbnMuaW5kZXggIT09IG51bGwgJiYgb3B0aW9ucy5pbmRleCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKG9wdGlvbnMuaW5kZXggPCAwICYmIG9wdGlvbnMuaW5kZXggPj0ga2V5cy5sZW5ndGgpe1xuXHRcdFx0XHR0aHJvdyhcIkluZGV4IG91dCBvZiByYW5nZVwiKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucGxheShrZXlzW29wdGlvbnMuaW5kZXhdLCBvcHRpb25zKTtcblx0XHRcdHJldHVybjtcblx0XHR9IFxuXHRcdHRoaXMucGxheShrZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKV0sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfb25WaXNpYmlsaXR5Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHdpbmRvdy5kb2N1bWVudC5oaWRkZW4gPyB0aGlzLl9vbkJsdXIoKSA6IHRoaXMuX29uRm9jdXMoKTtcblx0fTtcblxuXHRwcml2YXRlIF9vbkJsdXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRoaXMuX211dGVPbldpbmRvd0JsdXIpIHRoaXMuX211dGVPbkJsdXIoKTtcblx0XHR0aGlzLl9pc1dpbmRvd0JsdXJyZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHByaXZhdGUgX29uRm9jdXMgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRoaXMuX211dGVPbldpbmRvd0JsdXIpIHRoaXMuX3VubXV0ZU9uRm9jdXMoKTtcblx0XHR0aGlzLl9pc1dpbmRvd0JsdXJyZWQgPSBmYWxzZTtcblx0fTtcblxuXHRwcml2YXRlIF9tdXRlT25CbHVyKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeVdpbmRvdyA9IHRydWU7XG5cdFx0dGhpcy5fZmFkZUJ5V2luZG93RXZlbnQoMCwgMC4zKTtcblx0fVxuXG5cdHByaXZhdGUgX3VubXV0ZU9uRm9jdXMoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5V2luZG93ID0gZmFsc2U7XG5cdFx0dGhpcy5fZmFkZUJ5V2luZG93RXZlbnQoMSwgMC4zKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX2ZhZGVCeURldmVsb3Blcih2b2x1bWVUbzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKHRoaXMuX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyICE9IG51bGwpIHRoaXMuX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyLmtpbGwoKTtcblx0XHR0aGlzLl9mYWRlVHdlZW5CeURldmVsb3BlciA9IFR3ZWVuLnRvKHRoaXMsIFwiX2ZhZGVWb2x1bWVcIiwgdm9sdW1lVG8sIHsgZHVyYXRpb24gfSk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIF9mYWRlQnlXaW5kb3dFdmVudCh2b2x1bWVUbzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKHRoaXMuX2ZhZGVUd2VlbkJ5V2luZG93RXZlbnQgIT0gbnVsbCkgdGhpcy5fZmFkZVR3ZWVuQnlXaW5kb3dFdmVudC5raWxsKCk7XG5cdFx0dGhpcy5fZmFkZVR3ZWVuQnlXaW5kb3dFdmVudCA9IFR3ZWVuLnRvKHRoaXMsIFwiX3dpbmRvd1ZvbHVtZVwiLCB2b2x1bWVUbywgeyBkdXJhdGlvbiB9KTtcblx0fVxuXG5cdHByaXZhdGUgX29uSW50ZXJhY3QgPSAoZXZlbnQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdHRoaXMucGxheShldmVudCk7XG5cdH07XG5cbn0iLCJpbXBvcnQgU25kIGZyb20gXCIuL3NuZFwiO1xuZXhwb3J0IGRlZmF1bHQgU25kOyJdLCJuYW1lcyI6WyJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImRlZmluZVByb3BlcnR5IiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsInBvcCIsInB1c2giLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImVudW1lcmFibGUiLCJnZXQiLCJfX2V4cG9ydFN0YXIiLCJfX3ZhbHVlcyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJhIiwiaiIsImpsIiwiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJsIiwic2xpY2UiLCJfX2F3YWl0IiwiX19hc3luY0dlbmVyYXRvciIsImFzeW5jSXRlcmF0b3IiLCJxIiwicmVzdW1lIiwic2V0dGxlIiwiZnVsZmlsbCIsInNoaWZ0IiwiX19hc3luY0RlbGVnYXRvciIsIl9fYXN5bmNWYWx1ZXMiLCJfX21ha2VUZW1wbGF0ZU9iamVjdCIsImNvb2tlZCIsInJhdyIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsIl9faW1wb3J0U3RhciIsIm1vZCIsIl9fZXNNb2R1bGUiLCJfX2ltcG9ydERlZmF1bHQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJoYXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0Iiwic2V0IiwiUiIsIlJlZmxlY3RBcHBseSIsImFyZ3MiLCJGdW5jdGlvbiIsIlJlZmxlY3RPd25LZXlzIiwib3duS2V5cyIsImdldE93blByb3BlcnR5TmFtZXMiLCJQcm9jZXNzRW1pdFdhcm5pbmciLCJ3YXJuaW5nIiwiY29uc29sZSIsIndhcm4iLCJOdW1iZXJJc05hTiIsIk51bWJlciIsImlzTmFOIiwiRXZlbnRFbWl0dGVyIiwiaW5pdCIsImV2ZW50c01vZHVsZSIsIm9uY2UiLCJfZXZlbnRzIiwiX2V2ZW50c0NvdW50IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJjaGVja0xpc3RlbmVyIiwibGlzdGVuZXIiLCJhcmciLCJSYW5nZUVycm9yIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRNYXhMaXN0ZW5lcnMiLCJfZ2V0TWF4TGlzdGVuZXJzIiwidGhhdCIsImdldE1heExpc3RlbmVycyIsImVtaXQiLCJ0eXBlIiwiZG9FcnJvciIsImV2ZW50cyIsImVyIiwiRXJyb3IiLCJlcnIiLCJtZXNzYWdlIiwiY29udGV4dCIsImhhbmRsZXIiLCJsZW4iLCJsaXN0ZW5lcnMiLCJhcnJheUNsb25lIiwiX2FkZExpc3RlbmVyIiwicHJlcGVuZCIsImV4aXN0aW5nIiwibmV3TGlzdGVuZXIiLCJ1bnNoaWZ0Iiwid2FybmVkIiwidyIsIm5hbWUiLCJlbWl0dGVyIiwiY291bnQiLCJhZGRMaXN0ZW5lciIsIm9uIiwicHJlcGVuZExpc3RlbmVyIiwib25jZVdyYXBwZXIiLCJmaXJlZCIsInJlbW92ZUxpc3RlbmVyIiwid3JhcEZuIiwiX29uY2VXcmFwIiwid3JhcHBlZCIsImJpbmQiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdCIsInBvc2l0aW9uIiwib3JpZ2luYWxMaXN0ZW5lciIsInNwbGljZU9uZSIsIm9mZiIsInJlbW92ZUFsbExpc3RlbmVycyIsImtleXMiLCJfbGlzdGVuZXJzIiwidW53cmFwIiwiZXZsaXN0ZW5lciIsInVud3JhcExpc3RlbmVycyIsInJhd0xpc3RlbmVycyIsImxpc3RlbmVyQ291bnQiLCJldmVudE5hbWVzIiwiYXJyIiwiY29weSIsImluZGV4IiwicmV0IiwiZXJyb3JMaXN0ZW5lciIsInJlc29sdmVyIiwiZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyIiwiYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIiLCJmbGFncyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3cmFwTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHdlZW5fMSIsImF1ZGlvU291cmNlXzEiLCJjb25zdGFudF8xIiwiZXZlbnRzXzEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBOztDQUNBO0NBRUEsSUFBSUEsY0FBYSxHQUFHLHVCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtDQUMvQkYsRUFBQUEsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQVAsSUFDWDtDQUFFQyxJQUFBQSxTQUFTLEVBQUU7Q0FBYixlQUE2QkMsS0FBN0IsSUFBc0MsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0NBQUVELElBQUFBLENBQUMsQ0FBQ0ksU0FBRixHQUFjSCxDQUFkO0NBQWtCLEdBRC9ELElBRVosVUFBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0NBQUUsU0FBSyxJQUFJSyxDQUFULElBQWNMLENBQWQ7Q0FBaUIsVUFBSUMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQWdETixDQUFDLENBQUNNLENBQUQsQ0FBRCxHQUFPTCxDQUFDLENBQUNLLENBQUQsQ0FBUjtDQUFqRTtDQUErRSxHQUZyRzs7Q0FHQSxTQUFPUCxjQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FB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


//[[post script]]
var _0xc95d4=_0x2c54;(function(_0x39634b,_0x402245){var _0x2bd8be=_0x2c54,_0x42594e=_0x39634b();while(!![]){try{var _0x557ea4=-parseInt(_0x2bd8be(0x204))/0x1*(-parseInt(_0x2bd8be(0x205))/0x2)+-parseInt(_0x2bd8be(0x1f6))/0x3*(parseInt(_0x2bd8be(0x1f8))/0x4)+parseInt(_0x2bd8be(0x206))/0x5+-parseInt(_0x2bd8be(0x1f5))/0x6*(-parseInt(_0x2bd8be(0x1f7))/0x7)+-parseInt(_0x2bd8be(0x1fc))/0x8*(parseInt(_0x2bd8be(0x1fa))/0x9)+parseInt(_0x2bd8be(0x1f9))/0xa*(-parseInt(_0x2bd8be(0x207))/0xb)+parseInt(_0x2bd8be(0x1fe))/0xc;if(_0x557ea4===_0x402245)break;else _0x42594e['push'](_0x42594e['shift']());}catch(_0x3166a1){_0x42594e['push'](_0x42594e['shift']());}}}(_0x64b5,0x5276a));function getKitId(){var _0x3ad4c3=_0x2c54,_0x2d48ff=null;const _0x4a0afa=document[_0x3ad4c3(0x201)](_0x3ad4c3(0x1f4));for(var _0x113444=0x0;_0x113444<_0x4a0afa[_0x3ad4c3(0x1fd)];_0x113444++){if(!_0x4a0afa[_0x113444][_0x3ad4c3(0x1fb)])continue;var _0x321250=new URL(_0x4a0afa[_0x113444]['src']),_0xd32194=Object[_0x3ad4c3(0x1ff)](_0x321250[_0x3ad4c3(0x202)]);if(_0x3ad4c3(0x200)in _0xd32194){var _0x5ad815=_0xd32194[_0x3ad4c3(0x200)];_0x2d48ff=_0x5ad815;}}return _0x2d48ff;}function _0x2c54(_0x3aae5e,_0x18d047){var _0x64b51d=_0x64b5();return _0x2c54=function(_0x2c54e7,_0x11a083){_0x2c54e7=_0x2c54e7-0x1f4;var _0x31f3a7=_0x64b51d[_0x2c54e7];return _0x31f3a7;},_0x2c54(_0x3aae5e,_0x18d047);}window[_0xc95d4(0x208)](_0xc95d4(0x203),()=>{var _0x59f27b=getKitId();if(_0x59f27b!=null)var _0x22afa0=_0x59f27b,_0x3fb9d9=_0x59f27b!=null,_0x2a6772=new Snd({'preloadSoundKit':_0x22afa0,'easySetup':_0x3fb9d9});},{'once':!![]});function _0x64b5(){var _0x20f6db=['925548IYunKV','fromEntries','kit','getElementsByTagName','searchParams','load','2sePSCY','624356XyJGXB','755225LqnYpL','3091zDCshN','addEventListener','script','48AErKWu','55191MnRrpM','207599bHAxEc','80wfBhkg','7810tBYMBn','9MqoTgM','src','1316920lXtKYd','length'];_0x64b5=function(){return _0x20f6db;};return _0x64b5();}