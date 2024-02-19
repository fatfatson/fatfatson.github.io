/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Box.ts":
/*!****************!*\
  !*** ./Box.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Main_1 = __webpack_require__(/*! ./Main */ "./Main.ts");
var util_1 = __webpack_require__(/*! ./util */ "./util.ts");
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(game, r, c) {
        var _this = _super.call(this) || this;
        _this.game = game;
        if (Box.width == 0)
            Box.init();
        _this.touchEnabled = false;
        _this.row = r;
        _this.col = c;
        _this.width = Box.width;
        _this.height = Box.height;
        // this.graphics.beginFill(0xff00ff);
        // this.graphics.drawRect(0, 0, this.width, this.height);
        // this.graphics.endFill();
        var imgBackground = new egret.Bitmap();
        _this.imgBackground = imgBackground;
        _this.imgBackground.width = _this.width;
        _this.imgBackground.height = _this.height;
        _this.addChild(imgBackground);
        var imgIcon = new egret.Bitmap();
        _this.addChild(imgIcon);
        _this.imgIcon = imgIcon;
        _this.imgIcon.x = _this.width / 2;
        _this.imgIcon.y = 90;
        var textfield = new egret.TextField();
        _this.addChild(textfield);
        textfield.x = _this.width / 2;
        textfield.y = 0;
        textfield.size = 40;
        textfield.text = '2';
        _this.labTitle = textfield;
        // this.createRing();
        // if (this.row == 1 && this.col == 1)
        _this.game.ebus.addEventListener(util_1.GameEvent.DragEnd, function () {
            _this.imgRing.scaleY = 0;
        }, _this);
        _this.game.ebus.addEventListener(util_1.GameEvent.Drag, function (e) {
            // console.log('drag', e.data.offset);
            var offset = e.data.offset;
            // if (Math.abs(offset.x) > Math.abs(offset.y)) {
            if (util_1.getMoveDirType(game.moveDirection) == util_1.MoveDirType.Horizone) {
                _this.imgRing.y = _this.height / 2;
                _this.imgRing.scaleX = _this.height / _this.width;
                if (offset.x > 0) {
                    _this.imgRing.x = _this.width;
                    _this.imgRing.rotation = 90;
                    _this.imgRing.scaleY = util_1.lerp(0, 0.2, Math.abs(offset.x) / 150);
                }
                else if (offset.x < 0) {
                    _this.imgRing.x = 0;
                    _this.imgRing.rotation = -90;
                    _this.imgRing.scaleY = util_1.lerp(0, 0.2, Math.abs(offset.x) / 150);
                }
                else {
                    _this.imgRing.scaleY = 0;
                }
            }
            else {
                _this.imgRing.rotation = 0;
                _this.imgRing.x = _this.width / 2;
                _this.imgRing.scaleX = 1;
                if (offset.y < 0) {
                    _this.imgRing.scaleY = util_1.lerp(0, 0.2, Math.abs(offset.y) / 150);
                    _this.imgRing.y = 0;
                }
                else if (offset.y > 0) {
                    _this.imgRing.scaleY = -util_1.lerp(0, 0.2, Math.abs(offset.y) / 150);
                    _this.imgRing.y = Box.height - 2;
                }
                else {
                    _this.imgRing.scaleY = 0;
                }
            }
        }, _this);
        return _this;
    }
    Box.init = function () {
        var stage = egret.MainContext.instance.stage;
        var stageWidth = stage.stageWidth;
        var stageHeight = stage.stageHeight;
        Box.width = (stageWidth - (Main_1.Main.boxCol + 1) * Box.intervalX) / Main_1.Main.boxCol;
        Box.height = Box.width + 30;
        Box.offsetX = Box.intervalX;
        Box.offsetY = stageHeight - Box.height * Main_1.Main.boxRow - Box.intervalY * (Main_1.Main.boxRow + 1);
    };
    Box.prototype.createRing = function (c) {
        if (!this.imgRing) {
            this.imgRing = new egret.Sprite();
            this.addChild(this.imgRing);
            this.imgRing.x = this.width / 2;
            this.imgRing.scaleY = 0;
            this.imgRing.scaleY = 0;
            var shape = this.imgRing.graphics;
            var r = Box.width;
            // shape.beginFill(c);
            shape.beginFill(0xffffff);
            shape.drawArc(0, 0, this.width / 2 - 3, -(180 * Math.PI) / 180, 0, false); // 从起始点顺时针画弧到终点
            shape.endFill();
        }
        this.imgRing.tint = c;
    };
    Box.prototype.perform = function (smode, nmode) {
        var game = this.game;
        var tw;
        if (smode['move'] == -1) {
            tw = egret.Tween.get(this).to({ alpha: 0 }, 80);
            game.lockMove++;
        }
        else if (smode['move'] == 1) {
            tw = egret.Tween.get(this).to({ x: smode['x'], y: smode['y'] }, 120);
            game.lockMove++;
        }
        if (nmode['new'] == -1) {
            tw.call(function () {
                this.reset();
                egret.Tween.get(this)
                    .to({ alpha: 1 }, 150)
                    .call(function () {
                    game.lockMove--;
                });
            }, this);
        }
        else if (nmode['new'] == 1) {
            tw.call(function () {
                this.level = nmode['level'];
                this.side = nmode['side'];
                this.alpha = 1;
                this.rebuild();
                game.lockMove--;
            }, this);
        }
    };
    Box.prototype.reset = function (level, side) {
        if (level === void 0) { level = null; }
        if (side === void 0) { side = null; }
        this.side = side != null ? side : Math.floor(Math.random() * 3);
        this.level = level != null ? level : Math.pow(2, Math.floor(Math.random() * 2) + 1);
        // this.level = 2;
        this.rebuild();
        // console.log("reset", this.row, this.col, this.level);
    };
    Box.prototype.rebuild = function () {
        var color = this.side == 0 ? 0xffffff : 0x0;
        this.labTitle.textColor = color;
        this.labTitle.text = this.level.toString();
        this.labTitle.anchorOffsetX = this.labTitle.width / 2;
        var bkres = this.side == 0 ? 'bkcn' : 'bkjp';
        var texture = RES.getRes(bkres);
        this.imgBackground.texture = texture;
        var icres = this.level.toString();
        icres += this.side == 0 ? 'c' : 'j';
        this.imgIcon.texture = RES.getRes(icres);
        this.imgIcon.anchorOffsetX = this.imgIcon.anchorOffsetY = this.imgIcon.width / 2;
        this.x = Box.intervalX + this.col * (Box.width + Box.intervalX);
        this.y = Box.offsetY + this.row * (Box.height + Box.intervalY);
        var bkc = this.side == 0 ? 0x0340ad : 0xf6a517;
        this.createRing(bkc);
    };
    Box.width = 0;
    Box.height = 0;
    Box.intervalX = 20;
    Box.intervalY = 20;
    Box.offsetX = 0;
    Box.offsetY = 0;
    return Box;
}(egret.Sprite));
exports.Box = Box;


/***/ }),

/***/ "./LoadingUI.ts":
/*!**********************!*\
  !*** ./LoadingUI.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var testVersionCheck = 45;
var util_1 = __webpack_require__(/*! ./util */ "./util.ts");
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI(md) {
        var _this = _super.call(this) || this;
        _this.loadFinished = false;
        _this.mainDoc = md;
        _this.createView();
        return _this;
    }
    LoadingUI.isSoundOn = function () {
        var cso = util_1.readCookie('soundOn');
        return cso == null || cso == '1';
    };
    LoadingUI.isMusicOn = function () {
        var mso = util_1.readCookie('musicOn');
        return mso == null || mso == '1';
    };
    LoadingUI.prototype.enableSound = function (b) {
        this.labSound.text = !b ? '音效：关' : '音效：开';
        this.labSound.backgroundColor = !b ? 0xee3300 : 0x00ee33;
        util_1.createCookie('soundOn', !b ? '0' : '1', 10);
    };
    LoadingUI.prototype.enableMusic = function (b) {
        this.labMusic.text = !b ? '音乐：关' : '音乐：开';
        this.labMusic.backgroundColor = !b ? 0xee3300 : 0x00ee33;
        util_1.createCookie('musicOn', !b ? '0' : '1', 10);
    };
    LoadingUI.prototype.createView = function () {
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        this.graphics.beginFill(0x333333, 0.9);
        this.graphics.drawRect(0, 0, stageW, stageH);
        this.graphics.endFill();
        this.labProgress = new egret.TextField();
        this.labProgress.y = 50;
        this.labProgress.width = stageW;
        this.labProgress.size = 50;
        this.labProgress.text = '加载中，请稍等...';
        this.labProgress.textAlign = 'center';
        this.addChild(this.labProgress);
        var soundOn = LoadingUI.isSoundOn();
        var labSound = new egret.TextField();
        labSound.x = 80;
        labSound.y = 130;
        labSound.width = 200;
        labSound.height = 60;
        labSound.size = 40;
        labSound.textAlign = 'center';
        labSound.verticalAlign = 'middle';
        labSound.background = true;
        labSound.stroke = 2;
        labSound.strokeColor = 0;
        labSound.touchEnabled = true;
        labSound.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            e.stopPropagation();
            soundOn = !soundOn;
            console.log(soundOn);
            this.enableSound(soundOn);
        }, this);
        this.labSound = labSound;
        this.addChild(labSound);
        this.enableSound(soundOn);
        var musicOn = LoadingUI.isMusicOn();
        var labMusic = new egret.TextField();
        labMusic.x = 360;
        labMusic.y = 130;
        labMusic.width = 200;
        labMusic.height = 60;
        labMusic.size = 40;
        labMusic.textAlign = 'center';
        labMusic.verticalAlign = 'middle';
        labMusic.background = true;
        labMusic.stroke = 2;
        labMusic.strokeColor = 0;
        labMusic.touchEnabled = true;
        labMusic.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            e.stopPropagation();
            musicOn = !musicOn;
            console.log(musicOn);
            this.enableMusic(musicOn);
        }, this);
        this.labMusic = labMusic;
        this.addChild(labMusic);
        this.enableMusic(musicOn);
        var labGuide = new egret.TextField();
        labGuide.y = 180;
        labGuide.width = stageW;
        labGuide.size = 35;
        labGuide.textAlign = 'center';
        this.addChild(labGuide);
        var parser = new egret.HtmlTextParser();
        var text = '\n';
        text += '<font color=#ff0000 size=70 stroke=2><b>玩法说明</b></font>';
        text += '\n\n';
        text += '1、上下左右滑动，类似于2048';
        text += '\n\n';
        text +=
            '2、<font color=#0000ff stroke=2 strokeColor=0xff0000>蓝色</font>是我军，<font color=#ffff00 stroke=2>黄色</font>是日军！';
        text += '\n\n';
        text += '3、相同数字碰撞即合并叠加，\n颜色变为<font color=0xff0000>主动撞击者</font>颜色';
        text += '\n\n';
        text += '4、只有我军消灭日军才计分！';
        labGuide.textFlow = parser.parser(text);
        var y = 750;
        text = util_1.readCookie('lastGame');
        if (text != null) {
            var labLoad = new egret.TextField();
            y = 650;
            labLoad.y = y;
            labLoad.width = stageW;
            labLoad.height = 100;
            labLoad.size = 40;
            labLoad.textAlign = 'center';
            labLoad.verticalAlign = 'middle';
            labLoad.text = '发现你上局没有玩完，\n点此继续游戏';
            labLoad.backgroundColor = 0xee3300;
            labLoad.background = true;
            labLoad.touchEnabled = true;
            labLoad.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                if (!this.loadFinished)
                    return;
                this.close();
                e.stopPropagation();
            }, this);
            this.addChild(labLoad);
            y += 150;
        }
        var bv = util_1.getBrowserVersion();
        var labBegin = new egret.TextField();
        labBegin.y = y;
        labBegin.width = stageW;
        labBegin.size = 40;
        labBegin.textAlign = 'center';
        labBegin.text = '点击开始新游戏';
        // labBegin.text += bv["android"];
        this.addChild(labBegin);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            if (!this.loadFinished)
                return;
            util_1.createCookie('lastGame', '', -1);
            this.mainDoc.resetGame();
            this.close();
        }, this);
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        this.labProgress.text = '加载中：' + current + '/' + total;
        if (current >= total) {
            this.labProgress.text = '加载已完成！';
            this.labProgress.text += '(版本' + testVersionCheck + ')';
            this.loadFinished = true;
        }
    };
    LoadingUI.prototype.close = function () {
        this.parent.removeChild(this);
        if (LoadingUI.isMusicOn())
            this.mainDoc.playMusic();
    };
    return LoadingUI;
}(egret.Sprite));
exports.LoadingUI = LoadingUI;


/***/ }),

/***/ "./Main.ts":
/*!*****************!*\
  !*** ./Main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingUI_1 = __webpack_require__(/*! ./LoadingUI */ "./LoadingUI.ts");
var Box_1 = __webpack_require__(/*! ./Box */ "./Box.ts");
var util_1 = __webpack_require__(/*! ./util */ "./util.ts");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.killEnemy = 0;
        _this._lockMove = 0;
        _this.browserVersion = util_1.getBrowserVersion();
        _this.saveLimit = 5;
        _this.ebus = new egret.EventDispatcher();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.saveHistory = [];
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingView = new LoadingUI_1.LoadingUI(this);
                        this.stage.addChild(this.loadingView);
                        this.touchEnabled = true;
                        this.width = this.stage.stageWidth;
                        this.height = this.stage.stageHeight;
                        this.graphics.beginFill(0x666666, 0.95);
                        this.graphics.drawRect(0, 0, this.width, this.height);
                        this.graphics.endFill();
                        // console.log("add to stage", this.width, this.height, this.touchEnabled);
                        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                        return [4 /*yield*/, RES.loadConfig('resource/all.res.json', 'resource/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup('all')];
                    case 2:
                        _a.sent();
                        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                        Box_1.Box.init();
                        this.loadingView.close();
                        this.createUI();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.onResourceProgress = function (e) {
        var event = e;
        // console.log('prg', event.resItem);
        this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
    };
    Main.prototype.playMusic = function () {
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            var sound = loader.data;
            sound.play();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        loader.load(new egret.URLRequest('http://xjh.19v5.com:5000/bkmusic.mp3'));
    };
    Main.prototype.playMusic2 = function () {
        RES.getResAsync('bkmusic', function (data, key) {
            var sound = data;
            sound.play(0, 3).volume = 0.5;
        }, this);
    };
    Object.defineProperty(Main.prototype, "lockMove", {
        get: function () {
            return this._lockMove;
        },
        set: function (v) {
            if (this._lockMove > 0 && v == 0) {
                this.saveGame();
            }
            this._lockMove = v;
            // console.log(v)
        },
        enumerable: true,
        configurable: true
    });
    Main.prototype.mouseDownHandle = function (event) {
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
        this.addEventListener(egret.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
        this.downPoint = this.globalToLocal(event.stageX, event.stageY);
        this.moveDirection = util_1.MoveDir.NONE;
    };
    Main.prototype.stage_mouseMoveHandler = function (event) {
        if (!this.movePoint)
            this.movePoint = new egret.Point();
        this.movePoint.x = event.stageX;
        this.movePoint.y = event.stageY;
        var newDir = this.getMoveDir();
        if (this.moveDirection == util_1.MoveDir.NONE)
            this.moveDirection = newDir;
        else if (util_1.getMoveDirType(this.moveDirection) == util_1.getMoveDirType(newDir)) {
            this.moveDirection = newDir;
        }
        this.ebus.dispatchEventWith(util_1.GameEvent.Drag, false, {
            offset: this.movePoint.subtract(this.downPoint),
        });
    };
    Main.prototype.stage_mouseUpHandler = function (event) {
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
        this.addEventListener(egret.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
        if (this.moveDirection != util_1.MoveDir.NONE) {
            console.log('moveoffset', this.moveOffset);
            if (Math.abs(this.moveOffset) > 2 * 50) {
                this.doMove(this.moveDirection);
            }
        }
        this.ebus.dispatchEventWith(util_1.GameEvent.DragEnd);
    };
    Main.prototype.getMoveDir = function () {
        var p = this.globalToLocal(this.movePoint.x, this.movePoint.y);
        var offSetX = p.x - this.downPoint.x;
        var offSetY = p.y - this.downPoint.y;
        if (offSetY < 0 && Math.abs(offSetY) > Math.abs(offSetX)) {
            this.moveOffset = offSetY;
            return util_1.MoveDir.UP;
        }
        else if (offSetX > 0 && offSetX > Math.abs(offSetY)) {
            this.moveOffset = offSetX;
            return util_1.MoveDir.RIGHT;
        }
        else if (offSetY > 0 && offSetY > Math.abs(offSetX)) {
            this.moveOffset = offSetY;
            return util_1.MoveDir.DOWN;
        }
        else if (offSetX < 0 && Math.abs(offSetX) > Math.abs(offSetY)) {
            this.moveOffset = offSetX;
            return util_1.MoveDir.LEFT;
        }
    };
    Main.prototype.getRank = function () {
        var urlloader = new egret.URLLoader();
        var urlreq;
        urlreq = new egret.URLRequest();
        urlreq.url = 'http://ali.19v5.com:10020/api/get_rank?score=';
        urlreq.url += this.killEnemy;
        urlloader.load(urlreq);
        urlloader.addEventListener(egret.Event.COMPLETE, function (event) {
            if (this.curState != 'showResult')
                return;
            console.log(urlloader.data);
            var data = urlloader.data;
            var txt = data.toString();
            var obj = JSON.parse(txt);
            this.showOver(obj.rank, obj.percent);
        }, this);
    };
    Main.prototype.showOver = function (iRank, iPercent) {
        if (iRank === void 0) { iRank = 0; }
        if (iPercent === void 0) { iPercent = 0; }
        this.textfield.text = '分享给更多抗日小伙伴吧~';
        var parser = new egret.HtmlTextParser();
        if (this.panResult == null) {
            var pan_1 = new egret.Sprite();
            pan_1.y = Box_1.Box.offsetY - 10;
            pan_1.width = this.width;
            pan_1.height = this.height - pan_1.y;
            pan_1.graphics.beginFill(0x003366, 0.8);
            pan_1.graphics.drawRect(0, 0, pan_1.width, pan_1.height);
            pan_1.graphics.endFill();
            pan_1.touchEnabled = true;
            pan_1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                e.stopPropagation();
            }, this);
            this.panResult = pan_1;
            this.addChild(pan_1);
            var tf = new egret.TextField();
            tf.size = 60;
            tf.width = pan_1.width;
            tf.height = tf.size * 2;
            tf.y = pan_1.height - tf.height;
            tf.verticalAlign = 'middle';
            tf.textAlign = 'center';
            tf.text = '再玩一次！';
            tf.background = true;
            tf.backgroundColor = 0x000033;
            tf.textColor = 0xffff00;
            tf.touchEnabled = true;
            tf.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                e.stopPropagation();
                this.panResult = null;
                this.removeChild(pan_1);
                this.resetGame();
            }, this);
            pan_1.addChild(tf);
            tf = new egret.TextField();
            tf.size = 50;
            tf.width = pan_1.width;
            tf.height = pan_1.height;
            tf.textAlign = 'center';
            var text = '\n';
            text += '<font color=#ff0000 size=70 stroke=2><b>致敬！抗日勇士！</b></font>';
            text += '\n\n';
            text += "你消灭了<font color='#ff0000' size=80>" + this.killEnemy + '</font>个鬼子';
            text += '\n\n排名获取中，请稍候...';
            tf.textFlow = parser.parser(text);
            this.labResult = tf;
            pan_1.addChild(tf);
        }
        if (iRank > 0) {
            var rankd = this.killEnemy;
            if (rankd < 100)
                rankd = 0;
            var rank = (rankd / 1500) * 100;
            var text = '\n';
            text += '<font color=#ff0000 size=70 stroke=2><b>致敬！抗日勇士！</b></font>';
            text += '\n\n';
            text += "你消灭了<font color='#ff0000' size=80>" + this.killEnemy + '</font>个鬼子';
            text += '\n\n';
            if (iRank < 100)
                text += "排名第<font color='#ff0000' size=80>" + iRank + '</font>名';
            else
                text += '还排不上号，继续努力～';
            text += '\n\n';
            text += "超过了<font color='#ff0000' size=80>" + iPercent + '%</font>的小伙伴';
            this.labResult.textFlow = parser.parser(text);
            document.title =
                '为抗战阅兵点赞！我消灭了' +
                    this.killEnemy +
                    '个鬼子！超过了' +
                    iPercent +
                    '%的小伙伴！不服来战！';
        }
    };
    Main.prototype.checkOver = function () {
        for (var c = 0; c < Main.boxCol; c++) {
            var dataList1 = [];
            var dataList2 = [];
            for (var r = 0; r < Main.boxRow; r++) {
                var n1 = Main.boxRow - r - 1;
                var n2 = r;
                dataList1[n1] = this.boxes[r][c];
                dataList2[n1] = this.boxes[r][c];
            }
            if (this.getLineResult(dataList1)['moved'] > 0 || this.getLineResult(dataList2)['moved'] > 0)
                return false;
        }
        for (var r = 0; r < Main.boxRow; r++) {
            var dataList1 = [];
            var dataList2 = [];
            for (var c = 0; c < Main.boxCol; c++) {
                var n1 = c;
                var n2 = Main.boxCol - c - 1;
                dataList1[n1] = this.boxes[r][c];
                dataList2[n2] = this.boxes[r][c];
            }
            if (this.getLineResult(dataList1)['moved'] > 0 || this.getLineResult(dataList2)['moved'] > 0)
                return false;
        }
        return true;
    };
    Main.prototype.doMove = function (direction) {
        if (this.lockMove > 0) {
            console.log('lockMove', this.lockMove);
            return;
        }
        var oldKillEnemy = this.killEnemy;
        var moved = 0;
        if (direction == util_1.MoveDir.UP || direction == util_1.MoveDir.DOWN) {
            for (var c = 0; c < Main.boxCol; c++) {
                var dataList = [];
                for (var r = 0; r < Main.boxRow; r++) {
                    var n = direction == util_1.MoveDir.UP ? r : Main.boxRow - r - 1;
                    dataList[n] = this.boxes[r][c];
                }
                // console.log("check move in col:", c);
                moved += this.processLine(dataList);
            }
        }
        else {
            for (var r = 0; r < Main.boxRow; r++) {
                var dataList = [];
                for (var c = 0; c < Main.boxCol; c++) {
                    var n = direction == util_1.MoveDir.LEFT ? c : Main.boxCol - c - 1;
                    dataList[n] = this.boxes[r][c];
                }
                // console.log("check move in row:", r);
                moved += this.processLine(dataList);
            }
        }
        if (moved > 0) {
            this.moveCount++;
            this.ebus.dispatchEventWith('gameMove');
            var parser = new egret.HtmlTextParser();
            this.textfield.textFlow = parser.parser('你消灭了<font color=#ff0000 size=70>' + this.killEnemy + '</font>个鬼子');
            // document.title = '为抗战阅兵点赞！我消灭了' + this.killEnemy + '个鬼子！不服来战！';
            this.playSound(this.killEnemy > oldKillEnemy ? this.soundGood : this.soundBad);
        }
        if (this.checkOver()) {
            this.playSound(RES.getRes('sound_over'));
            this.curState = 'showResult';
            this.showOver();
            // this.getRank();
            util_1.eraseCookie('lastGame');
        }
    };
    Main.prototype.playSound = function (sound) {
        if (!LoadingUI_1.LoadingUI.isSoundOn())
            return;
        sound.play(0, 1);
    };
    Main.prototype.saveGame = function () {
        var gameState = {};
        for (var r = 0; r < Main.boxRow; r++) {
            gameState[r] = [];
            for (var c = 0; c < Main.boxCol; c++) {
                var box = this.boxes[r][c];
                gameState[r][c] = [box.level, box.side];
            }
        }
        var save = {
            state: gameState,
            killEnemy: this.killEnemy,
            moveCount: this.moveCount,
        };
        if (this.saveHistory.length >= this.saveLimit) {
            this.saveHistory.splice(0, 1);
            // console.log('splice history');
        }
        this.saveHistory.push(save);
        var ss = JSON.stringify(this.saveHistory);
        // createCookie('lastGame', ss, 1);
        // console.log('save', this.moveCount);
        this.ebus.dispatchEventWith(util_1.GameEvent.Save);
    };
    Main.prototype.processLine = function (dataList) {
        var ret = this.getLineResult(dataList);
        this.performChanges(dataList, ret['changes']);
        this.killEnemy += ret['killEnemy'];
        return ret.moved;
    };
    Main.prototype.getLineResult = function (dataList) {
        var moved = 0;
        var changes = [];
        var killEnemy = 0;
        for (var r = 0; r < dataList.length; r++) {
            var b = dataList[r];
            var bn = r < dataList.length - 1 ? dataList[r + 1] : undefined;
            if (bn == undefined) {
                changes[r] = r - moved;
                // console.log(r, "->", changes[r]);
            }
            else if (b.level == bn.level) {
                if (b.side != bn.side && bn.side == 0)
                    killEnemy += b.level;
                changes[r] = -1;
                changes[r + 1] = r - moved;
                // console.log(r, "->", -1);
                // console.log(r+1, "->", changes[r+1], "=", 2*b.level);
                moved++;
                r++;
            }
            else {
                changes[r] = r - moved;
                // console.log(r, "->", changes[r]);
            }
        }
        var ret = {
            changes: changes,
            killEnemy: killEnemy,
            moved: moved,
        };
        return ret;
    };
    Main.prototype.performChanges = function (dataList, changes) {
        var source = [];
        for (var r = 0; r < dataList.length; r++)
            source[r] = -1;
        for (var r = 0; r < dataList.length; r++) {
            if (changes[r] != -1)
                source[changes[r]] = r;
        }
        for (var r = 0; r < changes.length; r++) {
            var smode = {}; // 检查自己的变化
            if (changes[r] == r) {
                // 不动
                smode['move'] = 0;
            }
            else if (changes[r] == -1) {
                // 消失
                smode['move'] = -1;
            } // 移走
            else {
                var bt = dataList[changes[r]];
                smode['move'] = 1;
                smode['x'] = bt.x;
                smode['y'] = bt.y;
            }
            var nmode = {}; // 检查新来的
            if (source[r] == r) {
                // 不动
                nmode['new'] = 0;
            }
            else if (source[r] == -1) {
                // 没有
                nmode['new'] = -1;
            } // 有新来的
            else {
                var bs = dataList[source[r]];
                var up = changes[source[r] - 1] == -1;
                nmode['new'] = 1;
                nmode['level'] = bs.level * (up ? 2 : 1);
                nmode['side'] = bs.side;
            }
            dataList[r].perform(smode, nmode);
        }
    };
    Main.prototype.createUI = function () {
        var _this = this;
        var tf = new egret.TextField();
        var updateText = function () {
            tf.text = "\u6094\u68CB[" + _this.moveCount + "][" + _this.saveHistory.length + "]";
        };
        tf.x = 10;
        tf.y = Box_1.Box.offsetY - 90;
        tf.verticalAlign = 'middle';
        tf.textAlign = 'center';
        tf.size = 50;
        tf.stroke = 2;
        tf.strokeColor = 0x000000;
        tf.text = '悔棋';
        tf.background = true;
        tf.backgroundColor = 0x00ffff;
        tf.touchEnabled = true;
        tf.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (this.saveHistory.length < 2)
                return;
            this.saveHistory.pop();
            var ar = this.saveHistory.pop();
            console.log('click hq', this.saveHistory.length, ar);
            this.resetGame(ar);
            if (this.panResult) {
                this.removeChild(this.panResult);
                this.panResult = null;
                this.curState = 'playing';
            }
        }, this);
        this.ebus.addEventListener('gameReset', function (ar) {
            // console.log('check reset');
            updateText();
        }, this);
        this.ebus.addEventListener('gameMove', function (ar) {
            // console.log('check move');
            updateText();
        }, this);
        this.ebus.addEventListener(util_1.GameEvent.Save, function (ar) {
            // console.log('check save');
            updateText();
        }, this);
        this.addChild(tf);
    };
    Main.prototype.createGameScene = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDownHandle, this);
        this.soundGood = RES.getRes('sound_good');
        this.soundBad = RES.getRes('sound_bad');
        this.boxes = [];
        for (var r = 0; r < Main.boxRow; r++) {
            this.boxes[r] = [];
            for (var c = 0; c < Main.boxCol; c++) {
                var box = new Box_1.Box(this, r, c);
                this.addChild(box);
                this.boxes[r][c] = box;
            }
        }
        var imgTitle = new egret.Bitmap();
        imgTitle.texture = RES.getRes('title');
        imgTitle.alpha = 0.5;
        this.addChild(imgTitle);
        var textfield = new egret.TextField();
        textfield.width = this.width;
        textfield.height = Box_1.Box.offsetY - 5;
        textfield.verticalAlign = 'middle';
        textfield.textAlign = 'center';
        textfield.size = 50;
        textfield.stroke = 2;
        textfield.strokeColor = 0x000000;
        // textfield.background = true;
        textfield.backgroundColor = 0x00ff00;
        // textfield.touchEnabled = true;
        // textfield.addEventListener(
        // 	egret.TouchEvent.TOUCH_TAP,
        // 	function(e) {
        // 		e.stopPropagation();
        // 	},
        // 	this,
        // );
        this.textfield = textfield;
        this.addChild(textfield);
        console.log('tfheight', textfield.height);
        var ar = null;
        // let lastGame = readCookie('lastGame');
        // if (lastGame) {
        // 	console.log('load', lastGame);
        // 	ar = JSON.parse(lastGame);
        // 	ar = ar[ar.length - 1];
        // }
        this.resetGame(ar);
    };
    Main.prototype.resetGame = function (ar) {
        if (ar === void 0) { ar = null; }
        if (ar) {
            var parser = new egret.HtmlTextParser();
            var state = ar['state'];
            for (var r = 0; r < Main.boxRow; r++) {
                for (var c = 0; c < Main.boxCol; c++) {
                    var box = this.boxes[r][c];
                    var bs = state[r][c];
                    box.reset(bs[0], bs[1]);
                }
            }
            this.moveCount = ar.moveCount;
            this.killEnemy = ar.killEnemy;
            this.textfield.textFlow = parser.parser('你消灭了<font color=#ff0000 size=70>' + this.killEnemy + '</font>个鬼子');
        }
        else {
            for (var r = 0; r < Main.boxRow; r++) {
                for (var c = 0; c < Main.boxCol; c++) {
                    var box = this.boxes[r][c];
                    box.reset();
                }
            }
            this.moveCount = 0;
            this.killEnemy = 0;
            this.textfield.text = '准备好消灭鬼子了吗？\n指挥我军，撞死它们！';
        }
        this.curState = 'playing';
        util_1.eraseCookie('lastGame');
        this.saveGame();
        this.ebus.dispatchEventWith('gameReset');
    };
    Main.prototype.isAndroidQQ = function () {
        return (this.browserVersion['android'] && (this.browserVersion['qq'] || this.browserVersion['weixin']));
    };
    Main.boxRow = 5;
    Main.boxCol = 5;
    return Main;
}(egret.Sprite));
exports.Main = Main;
// console.log('1!main');
window.Main = Main;


/***/ }),

/***/ "./util.ts":
/*!*****************!*\
  !*** ./util.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createCookie(name, value, days) {
    egret.localStorage.setItem(name, value);
}
exports.createCookie = createCookie;
function readCookie(name) {
    return egret.localStorage.getItem(name);
}
exports.readCookie = readCookie;
function eraseCookie(name) {
    egret.localStorage.removeItem(name);
}
exports.eraseCookie = eraseCookie;
function getBrowserVersion() {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {
        trident: u.indexOf('Trident') > -1,
        presto: u.indexOf('Presto') > -1,
        webKit: u.indexOf('AppleWebKit') > -1,
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        iPhone: u.indexOf('iPhone') > -1,
        iPad: u.indexOf('iPad') > -1,
        webApp: u.indexOf('Safari') == -1,
        weixin: u.indexOf('MicroMessenger') > -1,
        qq: u.indexOf('qq') > -1 || u.indexOf('QQ') > -1,
    };
}
exports.getBrowserVersion = getBrowserVersion;
var hideADS = function () {
    try {
        var ifr = document.getElementsByTagName('iframe')[0];
        var div = ifr.parentNode;
        // ifr.style.display = "none";
        div.style.right = '20%';
        div.style.bottom = '20%';
    }
    catch (e) {
        console.log('hideads error', e);
    }
};
function lerp(start, end, amt) {
    if (amt > 1)
        amt = 1;
    else if (amt < 0)
        amt = 0;
    return (1 - amt) * start + amt * end;
}
exports.lerp = lerp;
var MoveDir;
(function (MoveDir) {
    MoveDir[MoveDir["NONE"] = 0] = "NONE";
    MoveDir[MoveDir["UP"] = 1] = "UP";
    MoveDir[MoveDir["LEFT"] = 2] = "LEFT";
    MoveDir[MoveDir["DOWN"] = 3] = "DOWN";
    MoveDir[MoveDir["RIGHT"] = 4] = "RIGHT";
})(MoveDir = exports.MoveDir || (exports.MoveDir = {}));
var MoveDirType;
(function (MoveDirType) {
    MoveDirType[MoveDirType["Horizone"] = 0] = "Horizone";
    MoveDirType[MoveDirType["Vertical"] = 1] = "Vertical";
})(MoveDirType = exports.MoveDirType || (exports.MoveDirType = {}));
exports.getMoveDirType = function (md) {
    if (md == MoveDir.UP || md == MoveDir.DOWN)
        return MoveDirType.Vertical;
    else
        return MoveDirType.Horizone;
};
exports.GameEvent = {
    Reset: 'Reset',
    Move: 'Move',
    Save: 'Save',
    Drag: 'Drag',
    DragEnd: 'DragEnd',
};


/***/ })

/******/ });
//# sourceMappingURL=eplib.js.map