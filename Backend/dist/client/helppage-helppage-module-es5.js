(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helppage-helppage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/helppage/helppage/helppage.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helppage/helppage/helppage.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <label class=\"header-text\">How Can We Help</label>\r\n  <br>\r\n  <input class=\"header-searchbox\" type=\"text\"/>\r\n  <button class=\"headerbutton\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\r\n    <mat-icon>search</mat-icon>\r\n  </button>\r\n</div>\r\n<div class=\"complaintsubmission\">\r\n  <label class=\"header-text-2\">Describe Your Problem</label>\r\n  <br>\r\n  <textarea rows=\"5\" style=\"width: 500px\" [value]=\"'Please explain your problem here!'\"></textarea>\r\n  <br>\r\n  <button (click)=\"ComplaintSubmitted()\"> Submit </button>\r\n  <p> {{submittedComplaint}} </p>\r\n</div>\r\n<div class=\"header-2\">\r\n  <hr>\r\n  <h1 mat-subheader class=\"mat-subheader\">Contact Information</h1>\r\n  <div class=\"matlist\">\r\n  <mat-list>\r\n  <mat-list-item *ngFor=\"let admin of admins\">\r\n    <mat-icon mat-list-icon class=\"listicon\">contact_support</mat-icon>\r\n    <h4 mat-line>{{admin.name}}</h4>\r\n    <p mat-line> Phone: {{admin.phone}} </p>\r\n    <p mat-line> Email: {{admin.email}} </p>\r\n  </mat-list-item>\r\n</mat-list>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/helppage/helppage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/helppage/helppage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HelppageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelppageRoutingModule", function() { return HelppageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helppage_helppage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helppage/helppage.component */ "./src/app/helppage/helppage/helppage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var routes = [
    { path: '', component: _helppage_helppage_component__WEBPACK_IMPORTED_MODULE_3__["HelppageComponent"] }
];
var HelppageRoutingModule = /** @class */ (function () {
    function HelppageRoutingModule() {
    }
    HelppageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ]
        })
    ], HelppageRoutingModule);
    return HelppageRoutingModule;
}());



/***/ }),

/***/ "./src/app/helppage/helppage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/helppage/helppage.module.ts ***!
  \*********************************************/
/*! exports provided: HelppageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelppageModule", function() { return HelppageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helppage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helppage-routing.module */ "./src/app/helppage/helppage-routing.module.ts");
/* harmony import */ var _helppage_helppage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helppage/helppage.component */ "./src/app/helppage/helppage/helppage.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");







var HelppageModule = /** @class */ (function () {
    function HelppageModule() {
    }
    HelppageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_helppage_helppage_component__WEBPACK_IMPORTED_MODULE_4__["HelppageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _helppage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelppageRoutingModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ]
        })
    ], HelppageModule);
    return HelppageModule;
}());



/***/ }),

/***/ "./src/app/helppage/helppage/helppage.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/helppage/helppage/helppage.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: aliceblue;\n  text-align: center;\n  padding: 50px;\n  position: relative;\n}\n\n.header-text {\n  font-weight: bold;\n  font-size: 30px;\n  color: dodgerblue;\n  padding-bottom: 10px;\n  background-color: aliceblue;\n  width: 100%;\n}\n\n.header-text-2 {\n  font-weight: bold;\n  font-size: 30px;\n  color: dodgerblue;\n  padding-bottom: 10px;\n  background-color: aliceblue;\n  width: 100%;\n  padding-left: 100px;\n}\n\n.header-searchbox {\n  height: 24px;\n  width: 300px;\n}\n\n.headerbutton {\n  position: absolute;\n  top: 83px;\n}\n\n.matlist {\n  text-align: center;\n}\n\n.listicon {\n  position: absolute;\n  left: 840px;\n}\n\n.complaintsubmission {\n  background-color: aliceblue;\n  position: absolute;\n  padding-left: 700px;\n  top: 220px;\n  height: 200px;\n  width: 100%;\n}\n\nmat-list {\n  position: absolute;\n  width: 100%;\n  height: 900px;\n  background-color: aliceblue;\n  text-align: center;\n  top: 450px;\n}\n\n.mat-subheader {\n  text-align: center;\n  position: absolute;\n  padding-left: 830px;\n  font-weight: bold;\n  font-size: 30px;\n  color: dodgerblue;\n  top: 370px;\n  background-color: aliceblue;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscHBhZ2UvaGVscHBhZ2UvQzpcXFVzZXJzXFwxMzA1NFxcSWRlYVByb2plY3RzXFxGQl9CYXNpY19MTVNcXGNsaWVudC9zcmNcXGFwcFxcaGVscHBhZ2VcXGhlbHBwYWdlXFxoZWxwcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVscHBhZ2UvaGVscHBhZ2UvaGVscHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hlbHBwYWdlL2hlbHBwYWdlL2hlbHBwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0LTJ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5oZWFkZXItc2VhcmNoYm94e1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJidXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODNweDtcclxufVxyXG5cclxuLm1hdGxpc3R7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdGljb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDg0MHB4O1xyXG59XHJcblxyXG4uY29tcGxhaW50c3VibWlzc2lvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNzAwcHg7XHJcbiAgdG9wOiAyMjBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxubWF0LWxpc3R7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDQ1MHB4O1xyXG59XHJcblxyXG5cclxuLm1hdC1zdWJoZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDgzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICB0b3A6IDM3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbiIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItdGV4dC0yIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyLXNlYXJjaGJveCB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaGVhZGVyYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgzcHg7XG59XG5cbi5tYXRsaXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGlzdGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDg0MHB4O1xufVxuXG4uY29tcGxhaW50c3VibWlzc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDcwMHB4O1xuICB0b3A6IDIyMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA0NTBweDtcbn1cblxuLm1hdC1zdWJoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiA4MzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG4gIHRvcDogMzcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/helppage/helppage/helppage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/helppage/helppage/helppage.component.ts ***!
  \*********************************************************/
/*! exports provided: HelppageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelppageComponent", function() { return HelppageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelppageComponent = /** @class */ (function () {
    function HelppageComponent() {
        this.admins = [
            { name: 'Danny Rodriguez', phone: '(305)-439-1452', email: 'drodr518@fiu.edu' },
            { name: 'Joao Guiramaes', phone: '(999)-999-9999', email: 'xxxxxx@fiu.edu' }
        ];
        this.submittedComplaint = '';
    }
    HelppageComponent.prototype.ComplaintSubmitted = function () {
        this.submittedComplaint = 'Thank you for your submission, we will be contacting you as soon as possible';
    };
    HelppageComponent.prototype.ngOnInit = function () {
    };
    HelppageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helppage',
            template: __webpack_require__(/*! raw-loader!./helppage.component.html */ "./node_modules/raw-loader/index.js!./src/app/helppage/helppage/helppage.component.html"),
            styles: [__webpack_require__(/*! ./helppage.component.scss */ "./src/app/helppage/helppage/helppage.component.scss")]
        })
    ], HelppageComponent);
    return HelppageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=helppage-helppage-module-es5.js.map