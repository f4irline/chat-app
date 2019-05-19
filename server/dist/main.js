(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/Fade.ts":
/*!************************************!*\
  !*** ./src/app/animations/Fade.ts ***!
  \************************************/
/*! exports provided: Fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return Fade; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var Fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");







var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'home', canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .app-wrapper {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxsZXBvbFxcRG9jdW1lbnRzXFxPaGplbG1vaW50aVxcV2ViXFxjaGF0LWFwcFxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmFwcC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chat Application';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-room-modal/add-room-modal.component */ "./src/app/components/add-room-modal/add-room-modal.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _components_join_room_modal_join_room_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/join-room-modal/join-room-modal.component */ "./src/app/components/join-room-modal/join-room-modal.component.ts");




















var config = { url: 'https://gentle-mesa-55326.herokuapp.com', options: {} };
function getToken() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"],
                _components_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_16__["RoomModalComponent"],
                _components_join_room_modal_join_room_modal_component__WEBPACK_IMPORTED_MODULE_19__["JoinRoomModalComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["SocketIoModule"].forRoot(config),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: getToken,
                        whitelistedDomains: ['gentle-mesa-55326.herokuapp.com'],
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_17__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_17__["SocketIoService"],
                _services__WEBPACK_IMPORTED_MODULE_17__["LocalStorageService"],
                _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-room-modal/add-room-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-room-modal/add-room-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"room-add-modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add a new room</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          <span>&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Room name\" [(ngModel)]=\"room.roomName\" name=\"roomName\">\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" #closeModal data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!room.roomName\" (click)=\"saveRoom()\">Save room</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/components/add-room-modal/add-room-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-room-modal/add-room-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXJvb20tbW9kYWwvYWRkLXJvb20tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-room-modal/add-room-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-room-modal/add-room-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoomModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomModalComponent", function() { return RoomModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");



var RoomModalComponent = /** @class */ (function () {
    function RoomModalComponent(apiService, localStorageService, socketIo) {
        this.apiService = apiService;
        this.localStorageService = localStorageService;
        this.socketIo = socketIo;
    }
    RoomModalComponent.prototype.ngOnInit = function () {
        this.room = {
            roomName: '',
        };
    };
    RoomModalComponent.prototype.saveRoom = function () {
        var _this = this;
        this.apiService.saveRoom(this.room).subscribe(function (room) {
            _this.joinRoom(room.id);
        });
    };
    RoomModalComponent.prototype.joinRoom = function (id) {
        this.localStorageService.setRoom(id);
        this.socketIo.join({
            userName: this.localStorageService.getUserName(),
            room: id.toString(),
        });
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RoomModalComponent.prototype, "closeBtn", void 0);
    RoomModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-modal',
            template: __webpack_require__(/*! ./add-room-modal.component.html */ "./src/app/components/add-room-modal/add-room-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-room-modal.component.scss */ "./src/app/components/add-room-modal/add-room-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]])
    ], RoomModalComponent);
    return RoomModalComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"paper elevate-1 container\">\r\n  <div class=\"row chat-wrapper\">\r\n      <div class=\"col-sm-3 text-center vertical-divider align-self-start side-scroll-container\">\r\n        <app-sidebar (pm)=\"onPm($event)\" [userDetails]=\"userDetails\" [users]=\"users\"></app-sidebar>\r\n      </div>\r\n      <div class=\"col-sm-9 text-center chat-container\">\r\n        <div class=\"room-wrapper row\">\r\n          <div class=\"col-sm-12 align-self-start\">\r\n            <h4 class=\"display-5\">Room: {{room.roomName}}</h4>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"chat-scroll-container row\">\r\n          <div class=\"col-sm-12 align-self-end\">\r\n            <app-message [userDetails]=\"userDetails\" (pm)=\"onPm($event)\" *ngFor=\"let msg of messages\" [msg]=\"msg\" [userName]=\"userDetails.userName\"></app-message>\r\n            <hr>\r\n            <div class=\"text-left error-container\">\r\n              <p class=\"lead\" [@fade]='receiverError' *ngIf=\"receiverError\">\r\n                {{errorString ? errorString : 'Error in message'}}\r\n              </p>\r\n            </div>\r\n            <div class=\"text-center pm-container\">\r\n              <p class=\"lead\" [ngClass]=\"{'hidden': !this.msg.private}\">Sending pm to: {{this.msg.receiver}}</p>\r\n            </div>\r\n            <div class=\"text-right typing-container\">\r\n              <p class=\"lead\" [ngClass]=\"{'hidden': whoisTyping.userName ? false : true}\">{{whoisTyping.userName}} is typing...</p>\r\n            </div>  \r\n            <form class=\"form-inline chat-controls\" *ngIf=\"!this.msg.private\">\r\n              <input type=\"text\" \r\n                #msgInput\r\n                class=\"form-control fill-parent\" \r\n                name=\"msg\" \r\n                [ngModel]=\"msg.msg\"\r\n                (ngModelChange)=\"msgChanged($event)\"\r\n                placeholder=\"Enter message.\">\r\n              <button type=\"submit\" class=\"btn btn-primary margin-left-1\" (click)=\"send()\">Send</button>\r\n            </form>\r\n            <form class=\"form-inline chat-controls\" *ngIf=\"this.msg.private\">\r\n              <input type=\"text\" \r\n                #msgInput\r\n                class=\"form-control fill-parent\" \r\n                name=\"msg\" \r\n                [ngModel]=\"msg.msg\"\r\n                (ngModelChange)=\"msgChanged($event)\"\r\n                placeholder=\"Enter private message.\">\r\n              <span (click)=\"endPm()\" class=\"clear-pm margin-left-1\">X</span>\r\n              <button type=\"submit\" class=\"btn btn-primary margin-left-1\" (click)=\"send()\">Send</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-wrapper {\n  height: 50vh;\n  max-height: 50vh;\n  padding: 1vh 0; }\n  .chat-wrapper .room-wrapper {\n    height: 10%;\n    text-align: start;\n    padding-right: 1vw; }\n  .chat-wrapper .chat-container {\n    height: 100%; }\n  .chat-wrapper .chat-container .chat-scroll-container {\n      overflow-y: overlay;\n      max-height: 90%;\n      height: 90%;\n      padding-right: 1vw; }\n  .chat-wrapper .chat-container .chat-scroll-container .typing-container, .chat-wrapper .chat-container .chat-scroll-container .error-container, .chat-wrapper .chat-container .chat-scroll-container .pm-container {\n        display: inline-block;\n        width: 33%; }\n  .chat-wrapper .chat-container .chat-scroll-container .typing-container p, .chat-wrapper .chat-container .chat-scroll-container .error-container p, .chat-wrapper .chat-container .chat-scroll-container .pm-container p {\n          font-size: 1.5vh; }\n  .chat-wrapper .chat-container .chat-scroll-container .typing-container .hidden, .chat-wrapper .chat-container .chat-scroll-container .error-container .hidden, .chat-wrapper .chat-container .chat-scroll-container .pm-container .hidden {\n          visibility: hidden; }\n  .chat-wrapper .chat-container .chat-scroll-container .error-container {\n        color: red; }\n  .chat-wrapper .chat-container .chat-scroll-container .room-wrapper {\n        position: absolute;\n        left: 0;\n        top: 0; }\n  .chat-wrapper .side-scroll-container {\n    overflow-y: overlay;\n    max-height: 100%; }\n  .chat-wrapper .chat-controls {\n    margin-bottom: 1vh; }\n  .chat-wrapper .chat-controls .clear-pm {\n      color: #fff;\n      background-color: red;\n      border: 1px solid red;\n      border-radius: 5px;\n      padding: 6px 12px; }\n  .chat-wrapper .chat-controls .clear-pm:hover {\n        background-color: darkred;\n        cursor: pointer; }\n  .vertical-divider {\n  border-right: 1px solid #aaa;\n  height: 100%; }\n  .margin-left-1 {\n  margin-left: 1vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L0M6XFxVc2Vyc1xcbGVwb2xcXERvY3VtZW50c1xcT2hqZWxtb2ludGlcXFdlYlxcY2hhdC1hcHBcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0VBSGxCO0lBTVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQVIxQjtJQVlRLFlBQVksRUFBQTtFQVpwQjtNQWVZLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBbEI5QjtRQXFCZ0IscUJBQXFCO1FBQ3JCLFVBQVUsRUFBQTtFQXRCMUI7VUF3Qm9CLGdCQUFnQixFQUFBO0VBeEJwQztVQTRCb0Isa0JBQWtCLEVBQUE7RUE1QnRDO1FBa0NnQixVQUFVLEVBQUE7RUFsQzFCO1FBMENnQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU0sRUFBQTtFQTVDdEI7SUFrRFEsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBbkR4QjtJQXVEUSxrQkFBa0IsRUFBQTtFQXZEMUI7TUEwRFksV0FBVztNQUNYLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBOUQ3QjtRQWlFZ0IseUJBQXlCO1FBQ3pCLGVBQWUsRUFBQTtFQU0vQjtFQUNJLDRCQUE0QjtFQUM1QixZQUFZLEVBQUE7RUFHaEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgcGFkZGluZzogMXZoIDA7XHJcblxyXG4gICAgLnJvb20td3JhcHBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAuY2hhdC1zY3JvbGwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXZ3O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50eXBpbmctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXZoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgICAgIC5lcnJvci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudHlwaW5nLWNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wbS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudHlwaW5nLWNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5yb29tLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZS1zY3JvbGwtY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtY29udHJvbHMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxuXHJcbiAgICAgICAgLmNsZWFyLXBtIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udmVydGljYWwtZGl2aWRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWFyZ2luLWxlZnQtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/Fade */ "./src/app/animations/Fade.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketIo) {
        this.socketIo = socketIo;
        this.msg = {
            userName: '',
            msg: '',
            private: false,
            receiver: undefined
        };
        this.messages = [];
        this.whoisTyping = {
            userName: undefined,
        };
        this.room = {
            roomName: undefined,
        };
        this.receiverError = false;
    }
    ChatComponent.prototype.onkeydown = function (event) {
        switch (event.key) {
            case 'Escape':
                this.msg.private = false;
                break;
            case 'Enter':
                this.send();
                break;
            default:
                break;
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.msgSubscription$.unsubscribe();
        this.clearSubscription$.unsubscribe();
        this.typingSubscription$.unsubscribe();
        this.usersSubscription$.unsubscribe();
        this.roomSubscription$.unsubscribe();
        this.noReceiverSubscription$.unsubscribe();
        this.invalidReceiverSubscription$.unsubscribe();
        if (this.errorTimeout) {
            window.clearTimeout(this.errorTimeout);
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollToBottom();
        this.msg.userName = this.userDetails.userName;
        this.msgSubscription$ = this.socketIo.message.subscribe(function (msg) {
            _this.messages.push(msg);
        });
        this.clearSubscription$ = this.socketIo.clear.subscribe(function () {
            _this.whoisTyping = {
                userName: undefined,
            };
        });
        this.typingSubscription$ = this.socketIo.typing.subscribe(function (user) {
            _this.whoisTyping = user;
        });
        this.usersSubscription$ = this.socketIo.users.subscribe(function (users) {
            _this.users = users;
        });
        this.roomSubscription$ = this.socketIo.room.subscribe(function (room) {
            _this.room = room;
            _this.messages = room.messages;
        });
        this.noReceiverSubscription$ = this.socketIo.noReceiver.subscribe(function (msg) {
            _this.errorString = 'No user with given name found.';
            _this.receiverError = true;
            if (_this.errorTimeout) {
                window.clearTimeout(_this.errorTimeout);
            }
            _this.errorTimeout = window.setTimeout(function () {
                _this.receiverError = false;
                _this.errorTimeout = undefined;
            }, 4000);
        });
        this.invalidReceiverSubscription$ = this.socketIo.invalidReceiver.subscribe(function (msg) {
            _this.errorString = 'Invalid receiver (do not send to self).';
            _this.receiverError = true;
            if (_this.errorTimeout) {
                window.clearTimeout(_this.errorTimeout);
            }
            _this.errorTimeout = window.setTimeout(function () {
                _this.receiverError = false;
                _this.errorTimeout = undefined;
            }, 4000);
        });
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.msgChanged = function (event) {
        this.msg.msg = event;
        if (this.msg.msg.length > 0) {
            if (!this.msg.private) {
                this.socketIo.startTyping({ userName: this.userDetails.userName });
            }
        }
        else {
            this.socketIo.clearTyping();
        }
    };
    ChatComponent.prototype.send = function () {
        if (this.msg.msg.length > 0) {
            this.socketIo.sendMessage(this.msg);
            this.socketIo.clearTyping();
            this.msg.msg = '';
        }
    };
    ChatComponent.prototype.scrollToBottom = function () {
        var chatScrollContainer = document.querySelector('.chat-scroll-container');
        chatScrollContainer.scrollTop = chatScrollContainer.scrollHeight - chatScrollContainer.clientHeight;
    };
    ChatComponent.prototype.endPm = function () {
        this.msg.private = false;
        this.msg.receiver = undefined;
    };
    ChatComponent.prototype.onPm = function (receiver) {
        this.msg.private = true;
        this.msg.receiver = receiver;
        this.msgInput.nativeElement.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatComponent.prototype, "userDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('msgInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "msgInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChatComponent.prototype, "onkeydown", null);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            animations: [
                _animations_Fade__WEBPACK_IMPORTED_MODULE_2__["Fade"],
            ],
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_3__["SocketIoService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-vertical-2\">\r\n  <div class=\"jumbotron elevate-1\">\r\n    <h1 class=\"display-3\">Welcome to Chat, {{userDetails ? userDetails.userName : ''}}!</h1>\r\n    <p class=\"lead\">The best chat application in the whole internet!</p>\r\n    <hr>\r\n    <p>Please respect each other in the chat!</p>\r\n    <button class=\"btn btn-danger action-button\" (click)=\"logout()\">Logout</button>\r\n    <button class=\"btn btn-primary action-button\" data-toggle=\"modal\" data-target=\"#room-add-modal\">Add room</button>\r\n    <button class=\"btn btn-success action-button\" data-toggle=\"modal\" data-target=\"#room-join-modal\" (click)=\"getRooms()\">Join room</button>\r\n  </div>\r\n  <app-chat *ngIf=\"userDetails\" [userDetails]=\"userDetails\"></app-chat>\r\n</div>\r\n\r\n<app-room-modal></app-room-modal>\r\n<app-join-room-modal [rooms]=\"rooms\"></app-join-room-modal>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .container.margin-vertical-2 {\n  margin-top: 2vh;\n  margin-bottom: 2vh; }\n\n:host .action-button:not(:first-of-type) {\n  margin-left: 1vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcbGVwb2xcXERvY3VtZW50c1xcT2hqZWxtb2ludGlcXFdlYlxcY2hhdC1hcHBcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFKOUI7RUFTUSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgJi5tYXJnaW4tdmVydGljYWwtMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWJ1dHRvbjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(localStorageService, router, socketIo, apiService) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.socketIo = socketIo;
        this.apiService = apiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    HomeComponent.prototype.getProfile = function () {
        var _this = this;
        this.apiService.profile().subscribe(function (res) { return _this.profileSuccess(res); }, function (err) { return _this.profileError(err); });
    };
    HomeComponent.prototype.profileSuccess = function (res) {
        this.userDetails = {
            userName: res.userName,
            room: this.localStorageService.getRoom()
        };
        this.socketIo.join(this.userDetails);
    };
    HomeComponent.prototype.profileError = function (err) {
        this.localStorageService.removeToken();
        this.localStorageService.removeUserName();
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.logout = function () {
        this.socketIo.disconnect();
        this.localStorageService.emptyLocalStorage();
        this.router.navigateByUrl('/');
    };
    HomeComponent.prototype.getRooms = function () {
        var _this = this;
        this.apiService.getRooms().subscribe(function (rooms) {
            _this.rooms = rooms;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/join-room-modal/join-room-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/join-room-modal/join-room-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"room-join-modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Join a room</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          <span>&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ul class=\"rooms-list\">\r\n          <li *ngFor=\"let room of rooms\">\r\n            <div class=\"room-wrapper\">\r\n              <span>{{room.roomName}}</span>\r\n              <button type=\"button\" class=\"btn btn-primary btn-small\" (click)=\"joinRoom(room.id)\">Join</button>\r\n            </div>\r\n            <hr>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" #closeModal data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/components/join-room-modal/join-room-modal.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/join-room-modal/join-room-modal.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rooms-list {\n  list-style: none; }\n  .rooms-list .room-wrapper {\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n  .rooms-list .room-wrapper span {\n      flex: 2; }\n  .rooms-list .room-wrapper button {\n      flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2luLXJvb20tbW9kYWwvQzpcXFVzZXJzXFxsZXBvbFxcRG9jdW1lbnRzXFxPaGplbG1vaW50aVxcV2ViXFxjaGF0LWFwcFxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxqb2luLXJvb20tbW9kYWxcXGpvaW4tcm9vbS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBSVEsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUIsRUFBQTtFQU4zQjtNQVNZLE9BQU8sRUFBQTtFQVRuQjtNQWFZLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9pbi1yb29tLW1vZGFsL2pvaW4tcm9vbS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tcy1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBcclxuICAgIC5yb29tLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/join-room-modal/join-room-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/join-room-modal/join-room-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: JoinRoomModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinRoomModalComponent", function() { return JoinRoomModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");



var JoinRoomModalComponent = /** @class */ (function () {
    function JoinRoomModalComponent(socketIo, localStorageService) {
        this.socketIo = socketIo;
        this.localStorageService = localStorageService;
    }
    JoinRoomModalComponent.prototype.ngOnInit = function () {
    };
    JoinRoomModalComponent.prototype.joinRoom = function (id) {
        this.localStorageService.setRoom(id);
        this.socketIo.join({
            userName: this.localStorageService.getUserName(),
            room: id.toString(),
        });
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JoinRoomModalComponent.prototype, "rooms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], JoinRoomModalComponent.prototype, "closeBtn", void 0);
    JoinRoomModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join-room-modal',
            template: __webpack_require__(/*! ./join-room-modal.component.html */ "./src/app/components/join-room-modal/join-room-modal.component.html"),
            styles: [__webpack_require__(/*! ./join-room-modal.component.scss */ "./src/app/components/join-room-modal/join-room-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], JoinRoomModalComponent);
    return JoinRoomModalComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <div class=\"container paper elevate-1\">\r\n    <div class=\"row header\">\r\n      <div>\r\n        <h1>Login</h1>\r\n      </div>\r\n      <div>\r\n        <h4 (click)=\"signup()\">Signup</h4>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <form class=\"login-form\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"userName\" class=\"col-sm-3 col-form-label\">Username</label>\r\n        <input type=\"text\" id=\"userName\" name=\"userName\" placeholder=\"Enter username\" class=\"form-control col-sm-9\" [(ngModel)]=\"userName\">\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>\r\n        <input type=\"text\" id=\"password\" name=\"password\" placeholder=\"Enter password\" class=\"form-control col-sm-9\" [(ngModel)]=\"password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login()\">Send</button>\r\n      <span *ngIf=\"loginFailed\" class=\"error-hint\">{{errorString ? errorString : 'Error in login.'}}</span>\r\n    </form>      \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .login-wrapper {\n  height: 100vh;\n  display: flex;\n  align-items: center; }\n  :host .login-wrapper .container {\n    padding: 5vw; }\n  :host .login-wrapper .container .header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  :host .login-wrapper .container .header div {\n        display: flex;\n        align-items: center; }\n  :host .login-wrapper .container .header div h4 {\n          margin: 0;\n          text-decoration: underline; }\n  :host .login-wrapper .container .header div h4:hover {\n            color: blue;\n            cursor: pointer; }\n  :host .login-wrapper .login-form {\n    padding: 0 1vw; }\n  :host .login-wrapper .login-form .error-hint {\n      margin-left: 1vh;\n      color: red; }\n  :host .login-wrapper .login-form input[type=\"text\"] {\n      margin-bottom: 1vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGxlcG9sXFxEb2N1bWVudHNcXE9oamVsbW9pbnRpXFxXZWJcXGNoYXQtYXBwXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFKM0I7SUFPWSxZQUFZLEVBQUE7RUFQeEI7TUFVZ0IsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQVo5QztRQWVvQixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7RUFoQnZDO1VBbUJ3QixTQUFTO1VBQ1QsMEJBQTBCLEVBQUE7RUFwQmxEO1lBdUI0QixXQUFXO1lBQ1gsZUFBZSxFQUFBO0VBeEIzQztJQWdDWSxjQUFjLEVBQUE7RUFoQzFCO01BbUNnQixnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBO0VBcEMxQjtNQXdDZ0Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmxvZ2luLXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXZ3O1xyXG5cclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxdnc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5lcnJvci1oaW50IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxdmg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(localStorageService, router, apiService) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.apiService = apiService;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.localStorageService.getToken()) {
            this.apiService.profile().subscribe(function (res) {
                _this.localStorageService.setUserName(res.userName);
                _this.router.navigateByUrl('/home');
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.apiService.login({ userName: this.userName, password: this.password }).subscribe(function (data) { return _this.handleLogin(data); }, function (err) { return _this.handleError(err); });
    };
    LoginComponent.prototype.handleLogin = function (data) {
        this.localStorageService.setToken(data.token);
        this.localStorageService.setUserName(this.userName);
        this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.handleError = function (err) {
        var _this = this;
        this.errorString = err.error.msg;
        this.loginFailed = true;
        setTimeout(function () {
            _this.loginFailed = false;
        }, 3000);
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-wrapper\" [ngClass]=\"{'user-message-wrapper': msg.userName === userName}\">\r\n  <div class=\"message\" [ngClass]=\"{'user-message':  msg.userName === userName, 'private': msg.private}\">\r\n    <p><span [ngClass]=\"{'user': userDetails.userName === msg.userName ? false : true}\" (click)=\"startPm(msg)\">{{msg.userName}}:</span> {{msg.msg}}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-wrapper {\n  display: flex;\n  width: 100%;\n  margin: 1vh 0; }\n  .message-wrapper.user-message-wrapper {\n    justify-content: flex-end; }\n  .message-wrapper .message {\n    display: flex;\n    padding: 5px;\n    max-width: 70%;\n    border: 2px solid red;\n    border-radius: 2px 2px; }\n  .message-wrapper .message.user-message {\n      border: 2px solid #00a800;\n      border-radius: 2px 2px;\n      justify-content: flex-end; }\n  .message-wrapper .message p {\n      margin: 0;\n      word-break: break-all; }\n  .message-wrapper .message p span {\n        font-weight: 700; }\n  .message-wrapper .message.private {\n      font-style: italic; }\n  .message-wrapper .message .user {\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL0M6XFxVc2Vyc1xcbGVwb2xcXERvY3VtZW50c1xcT2hqZWxtb2ludGlcXFdlYlxcY2hhdC1hcHBcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVzc2FnZVxcbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixXQUFXO0VBRVgsYUFBYSxFQUFBO0VBSmpCO0lBT1EseUJBQXlCLEVBQUE7RUFQakM7SUFXUSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCLEVBQUE7RUFmOUI7TUFrQlkseUJBQWdDO01BQ2hDLHNCQUFzQjtNQUN0Qix5QkFBeUIsRUFBQTtFQXBCckM7TUF3QlksU0FBUztNQUNULHFCQUFxQixFQUFBO0VBekJqQztRQTRCZ0IsZ0JBQWdCLEVBQUE7RUE1QmhDO01BaUNZLGtCQUFrQixFQUFBO0VBakM5QjtNQXFDWSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbjogMXZoIDA7XHJcblxyXG4gICAgJi51c2VyLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHg7XHJcblxyXG4gICAgICAgICYudXNlci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDE2OCwgMCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHg7ICAgIFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnByaXZhdGUge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.pm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.startPm = function (msg) {
        if (this.userDetails.userName !== this.msg.userName) {
            this.pm.emit(msg.userName);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageComponent.prototype, "msg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MessageComponent.prototype, "userName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageComponent.prototype, "userDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageComponent.prototype, "pm", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/components/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-bar\">\r\n    <h3>Users</h3>\r\n    <div class=\"users-wrapper\">\r\n        <ul>\r\n            <li *ngFor=\"let user of users\">\r\n                <span [ngClass]=\"{'user': userDetails.userName === user.userName ? false : true}\" (click)=\"startPm(user)\">{{user.userName}}</span>\r\n                <hr class=\"user-divider\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-bar {\n  width: 100%; }\n  .users-bar h3 {\n    margin-right: 1vw;\n    text-align: start;\n    text-transform: uppercase; }\n  .users-bar .users-wrapper {\n    display: flex;\n    margin-right: 1vw; }\n  .users-bar .users-wrapper ul {\n      list-style: none;\n      width: 100%;\n      padding: 0; }\n  .users-bar .users-wrapper ul li {\n        margin: 1vh 0;\n        width: 100%; }\n  .users-bar .users-wrapper ul li .user-divider {\n          margin: 5px 0; }\n  .users-bar .users-wrapper ul li .user:hover {\n          color: red;\n          cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcbGVwb2xcXERvY3VtZW50c1xcT2hqZWxtb2ludGlcXFdlYlxcY2hhdC1hcHBcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTtFQURmO0lBSVEsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQU5qQztJQVVRLGFBQWE7SUFDYixpQkFBaUIsRUFBQTtFQVh6QjtNQWFZLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsVUFBVSxFQUFBO0VBZnRCO1FBa0JnQixhQUFhO1FBQ2IsV0FBVyxFQUFBO0VBbkIzQjtVQXNCb0IsYUFBYSxFQUFBO0VBdEJqQztVQTBCb0IsVUFBVTtVQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxdnc7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICAudXNlcnMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXZoIDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXItZGl2aWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudXNlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.pm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.startPm = function (user) {
        if (this.userDetails.userName !== user.userName) {
            this.pm.emit(user.userName);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "userDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "pm", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <div class=\"container paper elevate-1\">\r\n    <div class=\"row header\">\r\n      <div>\r\n        <h1>Sign up</h1>\r\n      </div>\r\n      <div>\r\n        <h4 (click)=\"login()\">Login</h4>\r\n      </div>  \r\n    </div>\r\n    <hr>\r\n    <form class=\"login-form\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"userName\" class=\"col-sm-3 col-form-label\">Username</label>\r\n        <input type=\"text\" id=\"userName\" name=\"userName\" placeholder=\"Enter username\" class=\"form-control col-sm-9\" [(ngModel)]=\"userName\">\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>\r\n        <input type=\"text\" id=\"password\" name=\"password\" placeholder=\"Enter password\" class=\"form-control col-sm-9\" [(ngModel)]=\"password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signup()\">Sign up!</button>\r\n      <span *ngIf=\"signupFailed\" class=\"error-hint\">User with the given name already exists.</span>\r\n    </form>      \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .login-wrapper {\n  height: 100vh;\n  display: flex;\n  align-items: center; }\n  :host .login-wrapper .container {\n    padding: 5vw; }\n  :host .login-wrapper .container .header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  :host .login-wrapper .container .header div {\n        display: flex;\n        align-items: center; }\n  :host .login-wrapper .container .header div h4 {\n          margin: 0;\n          text-decoration: underline; }\n  :host .login-wrapper .container .header div h4:hover {\n            color: blue;\n            cursor: pointer; }\n  :host .login-wrapper .login-form {\n    padding: 0 1vw; }\n  :host .login-wrapper .login-form .error-hint {\n      margin-left: 1vh;\n      color: red; }\n  :host .login-wrapper .login-form input[type=\"text\"] {\n      margin-bottom: 1vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvQzpcXFVzZXJzXFxsZXBvbFxcRG9jdW1lbnRzXFxPaGplbG1vaW50aVxcV2ViXFxjaGF0LWFwcFxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFKM0I7SUFPWSxZQUFZLEVBQUE7RUFQeEI7TUFVZ0IsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQVo5QztRQWVvQixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7RUFoQnZDO1VBbUJ3QixTQUFTO1VBQ1QsMEJBQTBCLEVBQUE7RUFwQmxEO1lBdUI0QixXQUFXO1lBQ1gsZUFBZSxFQUFBO0VBeEIzQztJQWdDWSxjQUFjLEVBQUE7RUFoQzFCO01BbUNnQixnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBO0VBcEMxQjtNQXdDZ0Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAubG9naW4td3JhcHBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1dnc7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDF2dztcclxuICAgICAgICBcclxuICAgICAgICAgICAgLmVycm9yLWhpbnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDF2aDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(localStorageService, router, apiService) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.apiService = apiService;
        this.signupFailed = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (this.localStorageService.getToken()) {
            this.router.navigateByUrl('/home');
        }
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.apiService.signup({ userName: this.userName, password: this.password }).subscribe(function () { return _this.handleSuccess(); }, function () { return _this.handleError(); });
    };
    SignupComponent.prototype.handleSuccess = function () {
        this.router.navigateByUrl('/login');
    };
    SignupComponent.prototype.login = function () {
        this.router.navigateByUrl('/login');
    };
    SignupComponent.prototype.handleError = function () {
        var _this = this;
        this.signupFailed = true;
        setTimeout(function () {
            _this.signupFailed = false;
        }, 3000);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.api = 'https://gentle-mesa-55326.herokuapp.com/api';
        this.endpoints = {
            rooms: '/rooms',
            login: '/login',
            signup: '/signup',
            profile: '/profile',
        };
    }
    ApiService.prototype.saveRoom = function (room) {
        return this.http.post("" + this.api + this.endpoints.rooms, room);
    };
    ApiService.prototype.getRooms = function () {
        return this.http.get("" + this.api + this.endpoints.rooms);
    };
    ApiService.prototype.login = function (auth) {
        return this.http.post("" + this.api + this.endpoints.login, auth);
    };
    ApiService.prototype.profile = function () {
        return this.http.get("" + this.api + this.endpoints.profile);
    };
    ApiService.prototype.signup = function (auth) {
        return this.http.post("" + this.api + this.endpoints.signup, auth);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.localStorageService.getToken()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuardService, LocalStorageService, SocketIoService, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]; });

/* harmony import */ var _socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket-io/socket-io.service */ "./src/app/services/socket-io/socket-io.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return _socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]; });

/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]; });







/***/ }),

/***/ "./src/app/services/local-storage/local-storage.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setUserName = function (userName) {
        localStorage.setItem('userName', userName);
    };
    LocalStorageService.prototype.getUserName = function () {
        return localStorage.getItem('userName');
    };
    LocalStorageService.prototype.removeUserName = function () {
        if (localStorage.getItem('userName')) {
            localStorage.removeItem('userName');
        }
    };
    LocalStorageService.prototype.setRoom = function (room) {
        localStorage.setItem('room', room.toString());
    };
    LocalStorageService.prototype.getRoom = function () {
        return localStorage.getItem('room');
    };
    LocalStorageService.prototype.removeRoom = function () {
        if (localStorage.getItem('room')) {
            localStorage.removeItem('room');
        }
    };
    LocalStorageService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    LocalStorageService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    LocalStorageService.prototype.removeToken = function () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
    };
    LocalStorageService.prototype.emptyLocalStorage = function () {
        this.removeToken();
        this.removeRoom();
        this.removeUserName();
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/socket-io/socket-io.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/socket-io/socket-io.service.ts ***!
  \*********************************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");



var SocketIoService = /** @class */ (function () {
    function SocketIoService(socket) {
        this.socket = socket;
        this.message = this.socket.fromEvent('msg');
        this.typing = this.socket.fromEvent('typing');
        this.clear = this.socket.fromEvent('clear');
        this.users = this.socket.fromEvent('users');
        this.room = this.socket.fromEvent('room');
        this.noReceiver = this.socket.fromEvent('no-receiver-found');
        this.invalidReceiver = this.socket.fromEvent('invalid-receiver');
    }
    SocketIoService.prototype.startTyping = function (typing) {
        this.socket.emit('typing', typing);
    };
    SocketIoService.prototype.clearTyping = function () {
        this.socket.emit('clear');
    };
    SocketIoService.prototype.sendMessage = function (msg) {
        this.socket.emit('msg', msg);
    };
    SocketIoService.prototype.sendUserName = function (userName) {
        this.socket.emit('join', userName);
    };
    SocketIoService.prototype.join = function (userDetails) {
        this.socket.emit('join', userDetails);
    };
    SocketIoService.prototype.disconnect = function () {
        this.socket.emit('userLeave');
    };
    SocketIoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], SocketIoService);
    return SocketIoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lepol\Documents\Ohjelmointi\Web\chat-app\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map