webpackJsonp([0,3],{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: "<quill-project></quill-project>",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/app.component.js.map

/***/ },

/***/ 378:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 378;


/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(433);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_25" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=E:/Node.js/ng2-example/src/main.js.map

/***/ },

/***/ 420:
/***/ function(module, exports) {

module.exports = "article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n.md2-input {\n  margin: 8px 0;\n  line-height: 26px;\n  border: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.md2-input:focus {\n  margin-bottom: 7px;\n  border-bottom: 2px solid #106CC8;\n  outline: none; }\n\na {\n  color: #106CC8;\n  text-decoration: none; }\n\na:hover, a:focus {\n  color: #0f64ba;\n  text-decoration: underline; }\n\nhr {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n\n[button] {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: middle;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 0 16px;\n  margin: 6px 8px;\n  min-width: 88px;\n  line-height: 36px;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  color: rgba(0, 0, 0, 0.9);\n  background-color: #fafafa; }\n\n[button]:hover, [button]:focus {\n  text-decoration: none; }\n\n[button]:active {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); }\n\n[button][disabled] {\n  pointer-events: none;\n  cursor: default;\n  opacity: 0.8;\n  box-shadow: none; }\n\n[button][button=\"primary\"] {\n  color: #ffffff;\n  background: #106CC8; }\n\n[button][class*=\"block\"] {\n  width: 100%; }\n\n[button][class*=\"large\"] {\n  font-size: 16px;\n  padding: 0 12px;\n  min-width: 128px;\n  line-height: 48px;\n  border-radius: 4px; }\n\n.text-center {\n  text-align: center; }\n\nhtml, body {\n  position: relative;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto-Regular\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: rgba(0, 0, 0, 0.7);\n  background-color: #ffffff;\n  -webkit-tap-highlight-color: #ffffff;\n  -webkit-touch-callout: none; }\n\n.main {\n  position: relative;\n  padding: 0 30px 80px;\n  min-height: 100%;\n  box-sizing: border-box; }\n\n.main .toolbar {\n  position: relative;\n  margin: 0 -30px;\n  padding: 0 30px;\n  color: #ffffff;\n  background: rgba(16, 108, 200, 0.9);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); }\n\n.main .toolbar .sidenav-toggle {\n  position: relative;\n  float: left;\n  display: none;\n  min-width: initial;\n  outline: none;\n  padding: 16px;\n  margin: 4px 0 0 -16px;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 16px;\n  color: #ffffff;\n  line-height: normal;\n  cursor: pointer;\n  box-shadow: none; }\n\n.main .toolbar h3 {\n  margin: 0;\n  padding: 16px 0;\n  line-height: 28px; }\n\n.main .toolbar .source-code {\n  float: right;\n  fill: currentColor;\n  color: #ffffff; }\n\n.main .container {\n  margin: 0 -30px; }\n  .main .container > .banner > .logo {\n    margin-top: 20px; }\n\n.main .footer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 80px;\n  line-height: 80px;\n  margin-top: 30px;\n  background: #106CC8;\n  color: #ffffff;\n  box-sizing: border-box;\n  overflow: hidden; }\n\n.main .footer .footer-container {\n  text-align: center;\n  width: 100%;\n  box-sizing: border-box; }\n\n.main .footer a {\n  color: rgba(255, 255, 255, 0.87);\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.main .footer a:hover, .main .footer a:focus {\n  color: #ffffff;\n  text-decoration: underline; }\n\n.banner {\n  height: 450px;\n  width: 100%;\n  display: block;\n  text-align: center;\n  background: url(../assets/images/super-hero-large.png) no-repeat bottom center, -webkit-linear-gradient(305deg, #0D47A1, #42A5F5);\n  background: url(../assets/images/super-hero-large.png) no-repeat bottom center, linear-gradient(145deg, #0D47A1, #42A5F5);\n  background-blend-mode: multiply;\n  background-size: 100%; }\n  .banner > .logo {\n    width: 240px; }\n  .banner > .title {\n    color: white; }\n  .banner > .actions {\n    margin-top: 45px; }\n\n.content {\n  margin: 30px auto;\n  width: 1024px; }\n"

/***/ },

/***/ 421:
/***/ function(module, exports) {

module.exports = ".ql-container .ql-editor {\n  min-height: 200px;\n  padding-bottom: 1rem\n}\n"

/***/ },

/***/ 422:
/***/ function(module, exports) {

module.exports = "<main class=\"main\">\n  <header class=\"toolbar\">\n    <button type=\"button\" (click)=\"sidenavToggle()\" class=\"sidenav-toggle\"><em class=\"fa fa-bars\"></em></button>\n    <h3>\n      <span>Anguklar2 Quill Editor</span>\n      <a href=\"https://github.com/surmon-china/ng2-quill-editor\" target=\"_blank\" class=\"source-code\">\n        <svg class=\"source-code\" width=\"28\" height=\"28\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path>\n        </svg>\n      </a>\n    </h3>\n  </header>\n  <section class=\"container\">\n    <div class=\"banner\">\n      <img src=\"../assets/angular.svg\" class=\"logo\">\n      <h1 class=\"title\">Quill editor component for Angular2</h1>\n      <p class=\"actions\">\n        <a href=\"https://github.com/surmon-china/ng2-quill-editor\" target=\"_blank\" button=\"default\">View on GitHub</a>\n        <a href=\"https://github.com/surmon-china/ng2-quill-editor/tree/master/examples\" target=\"_blank\" button=\"default\">Example Code</a>\n        <a href=\"https://quilljs.com/docs/quickstart/\" target=\"_blank\" button=\"default\">DOCUMENTATION</a>\n        <button button=\"default\">HI! Star~</button>\n      </p>\n    </div>\n    <div class=\"content\">\n      <quill-example-01></quill-example-01>\n      <br>\n      <br>\n      <quill-example-02></quill-example-02>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"footer-container\">\n      <span><a href=\"https://github.com/surmon-china/ng2-quill-editor\">Ng2-Quill-Editor</a> is maintained by <a href=\"https://github.com/surmon-china\">surmon-china</a>.</span>\n    </div>\n  </footer>\n</main>\n"

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_md2__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ng2_quill_editor__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_ng2_quill_editor__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ng2_quill_editor_examples_01_example_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ng2_quill_editor_examples_02_example_component__ = __webpack_require__(429);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__projects_ng2_quill_editor__["a" /* QuillEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_ng2_quill_editor_examples_01_example_component__["a" /* QuillEditorComponentExample01 */],
                __WEBPACK_IMPORTED_MODULE_10__components_ng2_quill_editor_examples_02_example_component__["a" /* QuillEditorComponentExample02 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__components_ng2_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/app.module.js.map

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuillEditorComponentExample01; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuillEditorComponentExample01 = (function () {
    function QuillEditorComponentExample01() {
        this.editorContent = "<p>I am Example 01</p>";
        this.editorConfig = {
            placeholder: "输入公告内容，支持html"
        };
    }
    QuillEditorComponentExample01.prototype.onEditorCreated = function (quill) {
        console.log('this is quill object', quill);
    };
    QuillEditorComponentExample01.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        console.log(quill, html, text);
    };
    QuillEditorComponentExample01.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editorContent = '<h1>i am changed!</h1>';
        }, 1800);
    };
    QuillEditorComponentExample01 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'quill-example-01',
            template: "<quill-editor [(ngModel)]=\"editorContent\"\n                           [config]=\"editorConfig\"\n                           (ready)=\"onEditorCreated($event)\">\n                           (change)=\"onContentChanged($event)\">\n            </quill-editor>\n            <br>\n            <div class=\"ql-editor\" [innerHTML]=\"editorContent\"></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], QuillEditorComponentExample01);
    return QuillEditorComponentExample01;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/01-example.component.js.map

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuillEditorComponentExample02; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuillEditorComponentExample02 = (function () {
    function QuillEditorComponentExample02(_fb) {
        this._fb = _fb;
        this.editorConfig = {
            theme: 'bubble',
            placeholder: "输入任何内容，支持html",
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['link', 'image'],
                    ['clean']
                ]
            }
        };
        this.form = _fb.group({
            'content': ['<p>I am Example 02</p>', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])],
        });
        this.content = this.form.controls['content'];
    }
    ;
    QuillEditorComponentExample02.prototype.submitAnnouncement = function (values) {
        if (this.form.valid) {
            console.log('Submit!', values);
        }
    };
    QuillEditorComponentExample02 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'quill-example-02',
            styles: [".form-group { border: 1px solid #ccc; } .has-error { border-color: red; } .has-success { border-color: green; }"],
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error': (!content.valid && content.touched), 'has-success': (content.valid && content.touched)}\">\n                <quill-editor class=\"form-control\" [formControl]=\"content\" [config]=\"editorConfig\"></quill-editor>\n              </div>\n            </form>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object])
    ], QuillEditorComponentExample02);
    return QuillEditorComponentExample02;
    var _a;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/02-example.component.js.map

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quillEditor_module__ = __webpack_require__(432);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__quillEditor_module__["a"]; });

//# sourceMappingURL=E:/Node.js/ng2-example/src/index.js.map

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuillEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Quill = __webpack_require__(425);
var QuillEditorComponent = (function () {
    // 注入Dom
    function QuillEditorComponent(elementRef) {
        this.elementRef = elementRef;
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        // 派发事件
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        // ...
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    // 视图加载完成后执行初始化
    QuillEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editorElem = this.elementRef.nativeElement.children[0];
        this.quillEditor = new Quill(this.editorElem, Object.assign({
            modules: this.defaultModules,
            placeholder: 'Insert text here ...',
            readOnly: false,
            theme: 'snow',
            boundary: document.body
        }, this.config || {}));
        // 写入内容
        if (this.content) {
            this.quillEditor.pasteHTML(this.content);
        }
        // 广播事件
        this.ready.emit(this.quillEditor);
        // mark model as touched if editor lost focus
        this.quillEditor.on('selection-change', function (range) {
            if (!range) {
                _this.onModelTouched();
            }
        });
        // update model if text changes
        this.quillEditor.on('text-change', function (delta, oldDelta, source) {
            var html = _this.editorElem.children[0].innerHTML;
            var text = _this.quillEditor.getText();
            if (html === '<p><br></p>')
                html = null;
            _this.onModelChange(html);
            _this.change.emit({
                editor: _this.quillEditor,
                html: html,
                text: text
            });
        });
    };
    // 数据变更时
    QuillEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['readOnly'] && this.quillEditor) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
        }
    };
    // 写数据
    QuillEditorComponent.prototype.writeValue = function (currentValue) {
        this.content = currentValue;
        if (this.quillEditor) {
            if (currentValue) {
                this.quillEditor.pasteHTML(currentValue);
                return;
            }
            this.quillEditor.setText('');
        }
    };
    // 注册事件
    QuillEditorComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    // 注册事件
    QuillEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], QuillEditorComponent.prototype, "config", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]) === 'function' && _a) || Object)
    ], QuillEditorComponent.prototype, "ready", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]) === 'function' && _b) || Object)
    ], QuillEditorComponent.prototype, "change", void 0);
    QuillEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'quill-editor',
            template: "<div></div>",
            styles: [
                __webpack_require__(421),
                __webpack_require__(419),
                __webpack_require__(417),
                __webpack_require__(418)
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
                    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* forwardRef */])(function () { return QuillEditorComponent; }),
                    multi: true
                }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _c) || Object])
    ], QuillEditorComponent);
    return QuillEditorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/quillEditor.component.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quillEditor_component__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuillEditorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuillEditorModule = (function () {
    function QuillEditorModule() {
    }
    QuillEditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__quillEditor_component__["a" /* QuillEditorComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__quillEditor_component__["a" /* QuillEditorComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], QuillEditorModule);
    return QuillEditorModule;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/quillEditor.module.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=E:/Node.js/ng2-example/src/index.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quill_component__ = __webpack_require__(435);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__quill_component__["a"]; });

//# sourceMappingURL=E:/Node.js/ng2-example/src/index.js.map

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuillEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuillEditorComponent = (function () {
    function QuillEditorComponent() {
        this.isSidenavOpened = false;
        this.footerNav = { prev: null, next: null };
        this.navItems = [
            { name: 'Accordion', route: 'accordion' },
            { name: 'Autocomplete', route: 'autocomplete' },
            { name: 'Chips', route: 'chips' },
            { name: 'Collapse', route: 'collapse' },
            { name: 'Colorpicker', route: 'colorpicker' },
            { name: 'Data Table', route: 'datatable' },
            { name: 'Datepicker', route: 'datepicker' },
            { name: 'Dialog', route: 'dialog' },
            { name: 'Menu', route: 'menu' },
            { name: 'Multiselect', route: 'multiselect' },
            { name: 'Select', route: 'select' },
            { name: 'Tabs', route: 'tabs' },
            { name: 'Tags', route: 'tags' },
            { name: 'Toast', route: 'toast' },
            { name: 'Tooltip', route: 'tooltip' },
        ];
    }
    QuillEditorComponent.prototype.ngOnInit = function () {
        console.log('Application component initialized ...');
    };
    QuillEditorComponent.prototype.sidenavToggle = function () {
        this.isSidenavOpened = !this.isSidenavOpened;
    };
    QuillEditorComponent.prototype.sidenav = function (state) {
        this.isSidenavOpened = state;
        if (this.isSidenavOpened && this.window.innerWidth > 767) {
            this.isSidenavOpened = false;
        }
    };
    Object.defineProperty(QuillEditorComponent.prototype, "window", {
        get: function () { return window; },
        enumerable: true,
        configurable: true
    });
    QuillEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'quill-project',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(420)],
            template: __webpack_require__(422)
        }), 
        __metadata('design:paramtypes', [])
    ], QuillEditorComponent);
    return QuillEditorComponent;
}());
//# sourceMappingURL=E:/Node.js/ng2-example/src/quill.component.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Node.js/ng2-example/src/environment.js.map

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=E:/Node.js/ng2-example/src/polyfills.js.map

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(380);


/***/ }

},[701]);
//# sourceMappingURL=main.bundle.map