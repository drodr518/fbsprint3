(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nav-nav-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/main/main.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/main/main.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Every page will load this navigation bar -->\r\n<app-navbar></app-navbar>\r\n\r\n<!-- Then children components are loaded bellow -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/navbar/navbar.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/navbar/navbar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  This is the main navigation bar for the app -->\r\n\r\n<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n      <span>\r\n            <button [routerLink]=\"['nav']\" mat-button><mat-icon>dashboard</mat-icon>Dashboard</button>\r\n      </span>\r\n      <span>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\"><mat-icon>list</mat-icon>My Courses</button>\r\n\r\n            <mat-menu #menu=\"matMenu\">\r\n                  <button *ngFor=\"let course of myCourses\" [routerLink]=\"['courses/view-course']\" [queryParams]=\"{course:course.id,select:'Home'}\" mat-menu-item>\r\n                        <mat-icon>class</mat-icon>{{course.name}}\r\n                  </button>\r\n            </mat-menu>\r\n      </span>\r\n      <span>\r\n            <button [routerLink]=\"['courses/']\" mat-button><mat-icon>list</mat-icon>Courses</button>\r\n      </span>\r\n      <span>\r\n            <button [routerLink]=\"['helppage/']\" mat-button><mat-icon>help_outline</mat-icon>Help</button>\r\n      </span>\r\n      <span>\r\n            <button [routerLink]=\"['home/']\" mat-button style=\"align-content: flex-end\"><mat-icon>home</mat-icon>Home</button>\r\n      </span>\r\n      <span>\r\n            <button [routerLink]=\"['security/login/']\" mat-button style=\"align-content: flex-end\"><mat-icon>fingerprint</mat-icon>Login</button>\r\n      </span>\r\n\r\n      <span class=\"fill\"></span>\r\n      <span *ngIf=\"this.isAdmin()\">\r\n            <button mat-button><mat-icon>add</mat-icon>New Course</button>\r\n      </span>\r\n      <span>\r\n            <mat-slide-toggle (click)=\"toggleAdmin()\">Admin Toggle</mat-slide-toggle>\r\n      </span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/nav/main/main.component.scss":
/*!**********************************************!*\
  !*** ./src/app/nav/main/main.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/main/main.component.ts":
/*!********************************************!*\
  !*** ./src/app/nav/main/main.component.ts ***!
  \********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/nav/main/main.component.scss")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/nav/nav-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav/nav-routing.module.ts ***!
  \*******************************************/
/*! exports provided: NavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRoutingModule", function() { return NavRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/nav/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], children: [
            { path: 'courses', loadChildren: () => __webpack_require__.e(/*! import() | courses-courses-module */ "courses-courses-module").then(__webpack_require__.bind(null, /*! ../courses/courses.module */ "./src/app/courses/courses.module.ts")).then(mod => mod.CoursesModule) },
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(mod => mod.DashboardModule) },
            { path: 'helppage', loadChildren: () => __webpack_require__.e(/*! import() | helppage-helppage-module */ "helppage-helppage-module").then(__webpack_require__.bind(null, /*! ../helppage/helppage.module */ "./src/app/helppage/helppage.module.ts")).then(mod => mod.HelppageModule) },
            { path: 'home', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(mod => mod.HomeModule) },
            { path: 'security', loadChildren: () => __webpack_require__.e(/*! import() | security-security-module */ "security-security-module").then(__webpack_require__.bind(null, /*! ../security/security.module */ "./src/app/security/security.module.ts")).then(mod => mod.SecurityModule) },
        ] }
];
let NavRoutingModule = class NavRoutingModule {
};
NavRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NavRoutingModule);



/***/ }),

/***/ "./src/app/nav/nav.module.ts":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _nav_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-routing.module */ "./src/app/nav/nav-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/nav/navbar/navbar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/nav/main/main.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let NavModule = class NavModule {
};
NavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _nav_routing_module__WEBPACK_IMPORTED_MODULE_2__["NavRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]
        ]
    })
], NavModule);



/***/ }),

/***/ "./src/app/nav/navbar/navbar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/nav/navbar/navbar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  margin-right: 0.5rem;\n}\n\nmat-icon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdmJhci9DOlxcVXNlcnNcXDEzMDU0XFxJZGVhUHJvamVjdHNcXEZCX0Jhc2ljX0xNU1xcY2xpZW50L3NyY1xcYXBwXFxuYXZcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbn0iLCJzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/nav/navbar/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/navbar/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NavbarComponent = class NavbarComponent {
    constructor(userServices) {
        this.userServices = userServices;
        this.myCourses = []; // the user's courses names and id
        this.student_id = '';
        this.subscriptions = [];
        this.student_id = this.userServices.user(); // get debug student id
    }
    // Runs whenever this component is loaded
    ngOnInit() {
        this.loadCourses();
    }
    /**
     * Load courses, id and name, for the current user.
     */
    loadCourses() {
        this.subscriptions.push(this.userServices.getStudentCourses(this.student_id).subscribe((resp) => {
            this.myCourses = resp;
        }));
    }
    toggleAdmin() {
        this.userServices.ToggleIsAdmin();
    }
    isAdmin() {
        return this.userServices.getIsAdmin();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/nav/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ })

}]);
//# sourceMappingURL=nav-nav-module-es2015.js.map