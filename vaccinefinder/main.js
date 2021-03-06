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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark mb-3\">\r\n  <div class=\"container justify-content-center\">\r\n    <a class=\"navbar-brand\" href=\"#\">Vaccine Finder</a>\r\n  </div>\r\n</nav>\r\n\r\n<app-vaccine-slot></app-vaccine-slot>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vaccinefinder';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vaccine_slot_vaccine_slot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaccine-slot/vaccine-slot.component */ "./src/app/vaccine-slot/vaccine-slot.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _vaccine_slot_vaccine_slot_component__WEBPACK_IMPORTED_MODULE_4__["VaccineSlotComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-dark bg-dark mt-2\">\r\n  <div class=\"container\">\r\n    <a href=\"/vaccinefinder\" class=\"navbar-brand\">Made with &hearts;</a>\r\n    <a href=\"https://www.linkedin.com/in/himanshunamdeo/\" rel=\"noreferrer\" target=\"_blank\"  class=\"navbar-brand\">Connect with me on LinkedIn &#9889;</a>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/services/vaccine.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vaccine.service.ts ***!
  \*********************************************/
/*! exports provided: VaccineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineService", function() { return VaccineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VaccineService = /** @class */ (function () {
    function VaccineService(http) {
        this.http = http;
        this.districtsAPI = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/';
        this.vaccineAPI = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=';
    }
    VaccineService.prototype.getDistrict = function (stateId) {
        return this.http.get(this.districtsAPI + stateId.toString());
    };
    VaccineService.prototype.getVaccineInfoForNext7Days = function (districtId) {
        var date = new Date();
        var today = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        return this.http.get(this.vaccineAPI + districtId + '&date=' + today);
    };
    VaccineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VaccineService);
    return VaccineService;
}());



/***/ }),

/***/ "./src/app/static-data/states.ts":
/*!***************************************!*\
  !*** ./src/app/static-data/states.ts ***!
  \***************************************/
/*! exports provided: States */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
var States = /** @class */ (function () {
    function States() {
        this.statesInfo = [
            {
                state_id: 0,
                state_name: "Select Your State"
            }, {
                state_id: 1,
                state_name: "Andaman and Nicobar Islands"
            },
            {
                state_id: 2,
                state_name: "Andhra Pradesh"
            },
            {
                state_id: 3,
                state_name: "Arunachal Pradesh"
            },
            {
                state_id: 4,
                state_name: "Assam"
            },
            {
                state_id: 5,
                state_name: "Bihar"
            },
            {
                state_id: 6,
                state_name: "Chandigarh"
            },
            {
                state_id: 7,
                state_name: "Chhattisgarh"
            },
            {
                state_id: 8,
                state_name: "Dadra and Nagar Haveli"
            },
            {
                state_id: 37,
                state_name: "Daman and Diu"
            },
            {
                state_id: 9,
                state_name: "Delhi"
            },
            {
                state_id: 10,
                state_name: "Goa"
            },
            {
                state_id: 11,
                state_name: "Gujarat"
            },
            {
                state_id: 12,
                state_name: "Haryana"
            },
            {
                state_id: 13,
                state_name: "Himachal Pradesh"
            },
            {
                state_id: 14,
                state_name: "Jammu and Kashmir"
            },
            {
                state_id: 15,
                state_name: "Jharkhand"
            },
            {
                state_id: 16,
                state_name: "Karnataka"
            },
            {
                state_id: 17,
                state_name: "Kerala"
            },
            {
                state_id: 18,
                state_name: "Ladakh"
            },
            {
                state_id: 19,
                state_name: "Lakshadweep"
            },
            {
                state_id: 20,
                state_name: "Madhya Pradesh"
            },
            {
                state_id: 21,
                state_name: "Maharashtra"
            },
            {
                state_id: 22,
                state_name: "Manipur"
            },
            {
                state_id: 23,
                state_name: "Meghalaya"
            },
            {
                state_id: 24,
                state_name: "Mizoram"
            },
            {
                state_id: 25,
                state_name: "Nagaland"
            },
            {
                state_id: 26,
                state_name: "Odisha"
            },
            {
                state_id: 27,
                state_name: "Puducherry"
            },
            {
                state_id: 28,
                state_name: "Punjab"
            },
            {
                state_id: 29,
                state_name: "Rajasthan"
            },
            {
                state_id: 30,
                state_name: "Sikkim"
            },
            {
                state_id: 31,
                state_name: "Tamil Nadu"
            },
            {
                state_id: 32,
                state_name: "Telangana"
            },
            {
                state_id: 33,
                state_name: "Tripura"
            },
            {
                state_id: 34,
                state_name: "Uttar Pradesh"
            },
            {
                state_id: 35,
                state_name: "Uttarakhand"
            },
            {
                state_id: 36,
                state_name: "West Bengal"
            }
        ];
    }
    return States;
}());



/***/ }),

/***/ "./src/app/vaccine-slot/vaccine-slot.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vaccine-slot/vaccine-slot.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".records{\r\n    right: 10%;top: 4px;position: absolute;color: red;\r\n}\r\nbutton:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n}\r\n@media\r\nonly screen\r\nand (max-width: 760px), (min-device-width: 768px)\r\nand (max-device-width: 1024px)  {\r\n\r\n    table, thead, tbody, th, td, tr {\r\n        display: block;\r\n        font-size: small;\r\n    }\r\n\r\n    /* Hide table headers (but not display: none;, for accessibility) */\r\n    thead tr {\r\n        position: absolute;\r\n        top: -9999px;\r\n        left: -9999px;\r\n    }\r\n\r\n    tr {\r\n        margin: 0 0 1rem 0;\r\n    }\r\n\r\n    tr:nth-child(odd) {\r\n        background: #ccc;\r\n    }\r\n\r\n\r\n\r\n    td {\r\n        border: none;\r\n        border-bottom: 1px solid #eee;\r\n        position: relative;\r\n        padding-left: 50%;\r\n    }\r\n\r\n    td:before {\r\n        /* Now like a table header */\r\n        position: absolute;\r\n        /* Top/left values mimic padding */\r\n        top: 7px;\r\n        left: 6px;\r\n        width: 45%;\r\n        padding-right: 10px;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    td:nth-of-type(1):before { content: \"Vaccine\"; }\r\n    td:nth-of-type(2):before { content: \"Age\"; }\r\n    td:nth-of-type(3):before { content: \"Dose-1\"; }\r\n    td:nth-of-type(4):before { content: \"Dose-2\"; }\r\n    td:nth-of-type(5):before { content: \"Date\"; }\r\n    td:nth-of-type(6):before { content: \"Center\"; }\r\n    td:nth-of-type(7) { display: none }\r\n\r\n\r\n\r\n    .records{\r\n        right: 30%;top: 28px;position: absolute;color: red;\r\n    }\r\n}\r\n@media only screen and (max-width: 481px)  {\r\n    tr {\r\n        border-width: medium;border-radius: 10px;\r\n        margin-bottom: 5px;\r\n    }\r\n    tr:nth-of-type(odd) {\r\n        background: #f2fcfe ;\r\n    } tr:nth-of-type(even) {background: rgba(191, 168, 190, 0.36);\r\n    }\r\n    td {\r\n        padding-left: 0% !important;\r\n    }\r\n    td:nth-of-type(1):before { content: \"\"; }\r\n    td:nth-of-type(2):before { content: \"\"; }\r\n    td:nth-of-type(3):before { content: \"Dose-1: \";left: 10%;top: 4px}\r\n    td:nth-of-type(4):before { content: \"Dose-2: \"; left: 10%;top: 4px}\r\n    td:nth-of-type(5):before { content: \"\"; }\r\n    td:nth-of-type(6):before { content: \"\"; }\r\n    td:nth-of-type(7) { display: none }\r\n    td:nth-of-type(3):after {right: 5% }\r\n    td:nth-of-type(4):after {right: 5%  }\r\n    td:nth-of-type(1) { width: 26%;display: inline-block;border: 1px solid white;\r\n        border-radius: 14px;}\r\n    td:nth-of-type(2) {  width: 21%;display: inline-block;border: 1px solid white;\r\n        border-radius: 14px;}\r\n    td:nth-of-type(3) {  width: 25%;display: inline-block;border: 1px solid white;\r\n        border-radius: 14px;text-align: end;-webkit-padding-end:4px;padding-inline-end:4px}\r\n    td:nth-of-type(4) {  width: 25%;display: inline-block;border: 1px solid white;\r\n        border-radius: 14px;text-align: end;-webkit-padding-end:4px;padding-inline-end:4px}\r\n    td:nth-of-type(5) {  width: 30%;display: inline-block;border: 1px solid white;\r\n        border-radius: 14px;}\r\n    td:nth-of-type(6) {  width: 70%;display: inline-block;border: 1px solid white;\r\n        border-radius: 14px;}\r\n\r\n.records{\r\n    font-size: small;\r\n    left: 37%;\r\n\r\n}\r\n}\r\n.tableScroll{\r\nheight: 58vh;overflow-y: scroll\r\n}\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey;\r\n    border-radius: 10px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: cornflowerblue;\r\n    border-radius: 10px;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: steelblue;\r\n}\r\nselect  {\r\n    border-radius: 10px;\r\n}\r\n/*Button CSS */\r\n.btn-grad {background-image: linear-gradient(to right, #ff4b1f 0%, #ff9068  51%, #ff4b1f  100%)}\r\n.btn-grad {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    transition: 0.5s;\r\n    background-size: 200% auto;\r\n    color: white;\r\n    box-shadow: 0 0 20px #eee;\r\n    border-radius: 10px;\r\n    display: block;\r\n}\r\n.btn-grad:hover {\r\n    background-position: right center; /* change the direction of the change here */\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.form-select-sm:disabled {\r\n    background-color: #e9ecef;\r\n}\r\n"

/***/ }),

/***/ "./src/app/vaccine-slot/vaccine-slot.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vaccine-slot/vaccine-slot.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card\">\r\n    <div class=\"row container position-sticky\">\r\n        <div class=\"col-12 col-md-6 d-sm-inline-block p-2\" >\r\n            <select id=\"select1\" class=\"form-select\" [(ngModel)]=\"selectedstate\" (ngModelChange)=\"fetchDistricts()\">\r\n                <option *ngFor=\"let state of states\" [value]=\"state.state_id\">{{state.state_name}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 d-md-inline-block p-2\" >\r\n            <select class=\"form-select\" [(ngModel)]=\"selecteddistrict\" [disabled]=\"selectedstate===0\"\r\n                    (ngModelChange)=\"getVaccineInfo()\">\r\n                <option *ngFor=\"let district of districts\"\r\n                        [value]=\"district.district_id\">{{district.district_name}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container card my-2\">\r\n    <div class=\"row\">\r\n        <div class=\" col-10 col-md-3 d-lg-inline-block p-2\">\r\n            <div class=\"row\">\r\n                <label class=\"col-4 col-md-6 d-grid align-self-center justify-content-center\">Age : </label>\r\n                <select class=\"col form-select-sm\" [(ngModel)]=\"filteredAge\" [disabled]=\"selecteddistrict===0\">\r\n                    <option value=\"ALL\">ALL</option>\r\n                    <option value=\"18\">18 - 44 Only </option>\r\n                    <option value=\"1\">18 & Above</option>\r\n                    <option value=\"45\">45 & Above</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-10  col-md-3 d-lg-inline-block p-2\">\r\n            <div class=\"row\">\r\n                <label class=\"col-4 col-md-6 d-grid align-self-center justify-content-center\"> Vaccine : </label>\r\n                <select class=\"col  form-select-sm\" [(ngModel)]=\"filteredVaccineType\" [disabled]=\"selecteddistrict===0\">\r\n                    <option value=\"ALL\">ALL</option>\r\n                    <option value=\"COVISHIELD\">COVISHIELD</option>\r\n                    <option value=\"COVAXIN\">COVAXIN</option>\r\n                    <option value=\"SPUTNIK V\">SPUTNIK V</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\" col-10 col-md-3 d-lg-inline-block p-2\">\r\n            <div class=\"row\">\r\n                <label class=\"col-4 col-md-6 d-grid align-self-center justify-content-center\">Dose : </label>\r\n                <select class=\"col form-select-sm justify-content-center\" [(ngModel)]=\"filteredDose\" [disabled]=\"selecteddistrict===0\">\r\n                    <option value=\"ALL\">ALL</option>\r\n                    <option value=\"1\">Dose 1</option>\r\n                    <option value=\"2\">Dose 2</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-10 col-md-3 justify-content-center d-grid p-2\">\r\n            <button class=\"btn btn-sm btn-grad\" style=\"width: 200%;font-family: system-ui;font-weight: bold;\" (click)=\"filterResults()\"\r\n                    [disabled]=\"selecteddistrict===0\">Filter\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container card mt-2 mb-4\" style=\"\">\r\n    <div class=\"clearfix\">\r\n\r\n        <h5 class=\"d-grid justify-content-center mt-2 w-auto\"  >Vaccine Info\r\n        </h5>\r\n        <span *ngIf=\"filteredValues\" [@vaccineinfo]\r\n     class=\"records\" ><span *ngIf=\"filteredValues.length>0\"> Records found : {{filteredValues.length}}</span> </span>\r\n    </div>\r\n    <div class=\"mt-2 \" [ngClass]=\"{'tableScroll': (filteredValues&&filteredValues.length>10)}\" >\r\n        <table role=\"table\" class=\"table table-striped table-sm \" style=\"width: 99%;font-weight: 500;\">\r\n            <thead role=\"rowgroup\">\r\n            <tr role=\"row\"class=\"row text-center\">\r\n                <th role=\"columnheader\" class=\"col-lg-2\">Vaccine</th>\r\n                <th role=\"columnheader\" class=\"col-lg-1\">Age </th>\r\n                <th role=\"columnheader\"  class=\"col-lg-1\" (click)=\"sortDose(1)\">Dose 1</th>\r\n                <th role=\"columnheader\"  class=\"col-lg-1\" (click)=\"sortDose(2)\">Dose 2</th>\r\n                <th role=\"columnheader\"  class=\"col-lg-2\">Date</th>\r\n                <th role=\"columnheader\" class=\"col-lg\">Center Name</th>\r\n                <th role=\"columnheader\"  class=\"col-lg\">Address</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"vaccineInfo\" [@vaccineinfo] role=\"rowgroup\" style=\"font-size: small\">\r\n            <tr role=\"row\" class=\"row text-center\" *ngFor=\"let vaccine of vaccineInfo\" >\r\n            <td  role=\"cell\"  class=\"col-sm col-lg-2\">{{vaccine.sessions[0].vaccine}}\r\n                <span style=\"padding: 3px;font-size: 8px;color: white;background: #2152b3;border-radius: 7px;\">{{vaccine.fee_type.toUpperCase()}}</span>\r\n                <span *ngIf=\"vaccine.fee_type==='Paid'\" style=\"padding: 3px;font-size: 8px;color: white;background: #2152b3;border-radius: 7px;\">{{vaccine.vaccine_fees[0].fee}}</span>\r\n            </td>\r\n            <td  role=\"cell\"  class=\"col-sm col-lg-1\">{{vaccine.sessions[0].min_age_limit===18 && vaccine.sessions[0].allow_all_age===false ?  ' 18 - 44 Only' :vaccine.sessions[0].min_age_limit + ' & Above'}}</td>\r\n            <td  role=\"cell\"  class=\"col-sm col-lg-1\">{{vaccine.sessions[0].available_capacity_dose1}}</td>\r\n            <td  role=\"cell\"  class=\"col-sm col-lg-1\">{{vaccine.sessions[0].available_capacity_dose2}}</td>\r\n            <td  role=\"cell\"  class=\"col-sm col-lg-2\">{{vaccine.sessions[0].date}}</td>\r\n            <td  role=\"cell\"  class=\"col-sm col-lg\">{{vaccine.name}}</td>\r\n            <td  role=\"cell\" class=\"col-sm col-lg\">{{vaccine.address}}</td>\r\n            </tr>\r\n\r\n            </tbody>\r\n            <tbody *ngIf=\"loading\">\r\n            <div class=\"d-flex justify-content-center m-4\">\r\n                <div class=\"spinner-border\" role=\"status\">\r\n                </div>\r\n            </div>\r\n            </tbody>\r\n            <tbody *ngIf=\"filteredValues\">\r\n            <div *ngIf=\"filteredValues.length===0\" class=\"text-center\">\r\n                <div >\r\n                    <img src=\"vaccinefinder/assets/notfound.gif\" alt=\"Not Found\" style=\"width: 25%;\"/>\r\n                    <h4 class=\"p-3\" style=\"font-family: 'Comic Sans MS',serif;\"> No Vaccine Slot Available!!.. Keep Trying..</h4>\r\n                </div>\r\n            </div>\r\n            </tbody>\r\n        </table>\r\n\r\n       <!-- <div *ngIf=\"filteredValues\">\r\n            <div *ngIf=\"filteredValues.length>10\" class=\"btn-group mb-4\" role=\"group\" style=\"margin-left: 42%\">\r\n                <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"prevTen()\" [disabled]=\"paginate.prevBtn\">\r\n                    Prev\r\n                </button>\r\n                <button type=\"button\" class=\"btn  btn-outline-info\" (click)=\"nextTen()\" [disabled]=\"paginate.nextBtn\">\r\n                    Next\r\n                </button>\r\n            </div>\r\n        </div>-->\r\n\r\n    </div>\r\n\r\n</div>\r\n<div style=\"height: 50px\"></div>\r\n"

/***/ }),

/***/ "./src/app/vaccine-slot/vaccine-slot.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vaccine-slot/vaccine-slot.component.ts ***!
  \********************************************************/
/*! exports provided: VaccineSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineSlotComponent", function() { return VaccineSlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_data_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-data/states */ "./src/app/static-data/states.ts");
/* harmony import */ var _services_vaccine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vaccine.service */ "./src/app/services/vaccine.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VaccineSlotComponent = /** @class */ (function () {
    function VaccineSlotComponent(vaccineService) {
        this.vaccineService = vaccineService;
        this.states = new _static_data_states__WEBPACK_IMPORTED_MODULE_1__["States"]().statesInfo;
        this.mockDistrict = {
            'district_id': 0,
            'district_name': 'Select Your District'
        };
        this.districts = [this.mockDistrict];
        this.selectedstate = 0;
        this.selecteddistrict = 0;
        this.loading = false;
        this.paginate = { prevBtn: false, nextBtn: true };
        this.filteredAge = 'ALL';
        this.filteredVaccineType = 'ALL';
        this.filteredDose = 'ALL';
        this.tableScrollVisible = false;
        this.sortOrderDose1 = 2;
        this.sortOrderDose2 = 2;
        this.sortOrderAge = 2;
    }
    VaccineSlotComponent.prototype.ngOnInit = function () {
    };
    VaccineSlotComponent.prototype.fetchDistricts = function () {
        var _this = this;
        this.initializeFilters();
        this.districts = [this.mockDistrict];
        if (this.selectedstate > 0) {
            this.vaccineService.getDistrict(this.selectedstate).subscribe(function (result) {
                for (var _i = 0, _a = result.districts; _i < _a.length; _i++) {
                    var res = _a[_i];
                    _this.districts.push(res);
                }
                _this.selecteddistrict = 0;
            });
            return;
        }
        else {
            this.selecteddistrict = 0;
            this.selectedstate = 0;
            this.vaccineInfo = [];
        }
    };
    VaccineSlotComponent.prototype.getVaccineInfo = function () {
        var _this = this;
        this.loading = true;
        this.initializeFilters();
        this.vaccineInfoResponse = [];
        if (this.selecteddistrict > 0) {
            this.vaccineService.getVaccineInfoForNext7Days(this.selecteddistrict).subscribe(function (result) {
                for (var _i = 0, _a = result.centers; _i < _a.length; _i++) {
                    var center = _a[_i];
                    var _loop_1 = function (i) {
                        var tempSession = center.sessions;
                        _this.vaccineInfoResponse.push({
                            "center_id": center.center_id,
                            "name": center.name,
                            "address": center.address,
                            "state_name": center.address,
                            "district_name": center.district_name,
                            block_name: "",
                            pincode: 0,
                            "fee_type": center.fee_type,
                            "sessions": [tempSession[i]],
                            "vaccine_fees": (center.vaccine_fees ? center.vaccine_fees.filter(function (item) { return item.vaccine === tempSession[i].vaccine; }) : [])
                        });
                    };
                    for (var i = 0; i < center.sessions.length; i++) {
                        _loop_1(i);
                    }
                }
                _this.vaccineInfoResponse = _this.vaccineInfoResponse.filter(function (item) { return item.sessions[0].available_capacity > 0; });
                _this.vaccineInfoResponse.sort(function (a, b) {
                    return Date.parse(a.sessions[0].date) - Date.parse(b.sessions[0].date);
                });
                _this.filteredValues = _this.vaccineInfoResponse;
                // this.vaccineInfo = this.filteredValues.slice(0, 10);
                _this.vaccineInfo = _this.filteredValues;
                _this.initializeResults(_this.filteredValues);
            });
        }
    };
    VaccineSlotComponent.prototype.nextTen = function () {
        this.vaccineInfo = this.filteredValues.slice(this.displayIndex, this.displayIndex + 10);
        if (this.displayIndex + 10 >= this.filteredValues.length) {
            this.paginate.nextBtn = true;
            this.displayIndex += 10;
            this.paginate.prevBtn = false;
        }
        else {
            this.paginate.nextBtn = false;
            this.displayIndex += 10;
            this.paginate.prevBtn = false;
        }
    };
    VaccineSlotComponent.prototype.prevTen = function () {
        var prevNumber = this.displayIndex - 20;
        this.vaccineInfo = this.filteredValues.slice(prevNumber, this.displayIndex - 10);
        this.paginate.nextBtn = false;
        this.displayIndex -= 10;
        if (this.displayIndex <= 10) {
            this.paginate.prevBtn = true;
        }
    };
    VaccineSlotComponent.prototype.filterResults = function () {
        var _this = this;
        this.loading = true;
        var filteredResults = this.vaccineInfoResponse;
        if (this.filteredAge === 'ALL' && this.filteredVaccineType === 'ALL' && this.filteredDose === 'ALL') {
            filteredResults = this.vaccineInfoResponse;
        }
        if (this.filteredAge !== 'ALL') {
            if (this.filteredAge === '1') {
                filteredResults = this.vaccineInfoResponse.filter(function (item) { return item.sessions[0].min_age_limit.toString() === '18' && item.sessions[0].allow_all_age === true; });
            }
            if (this.filteredAge === '18') {
                filteredResults = this.vaccineInfoResponse.filter(function (item) { return item.sessions[0].min_age_limit.toString() === '18' && item.sessions[0].allow_all_age === false; });
            }
            if (this.filteredAge === '45') {
                filteredResults = this.vaccineInfoResponse.filter(function (item) { return item.sessions[0].min_age_limit.toString() === '45' && item.sessions[0].allow_all_age === false; });
            }
        }
        if (this.filteredVaccineType !== 'ALL') {
            filteredResults = filteredResults.filter(function (item) { return item.sessions[0].vaccine === _this.filteredVaccineType; });
        }
        if (this.filteredDose !== 'ALL') {
            if (this.filteredDose === '1') {
                filteredResults = filteredResults.filter(function (item) { return item.sessions[0].available_capacity_dose1 > 0; });
            }
            if (this.filteredDose === '2') {
                filteredResults = filteredResults.filter(function (item) { return item.sessions[0].available_capacity_dose2 > 0; });
            }
        }
        this.filteredValues = filteredResults;
        // this.vaccineInfo = this.filteredValues.slice(0, 10);
        this.vaccineInfo = this.filteredValues;
        this.initializeResults(filteredResults);
    };
    VaccineSlotComponent.prototype.initializeResults = function (results) {
        this.displayIndex = 10;
        if (this.vaccineInfo.length === results.length || this.vaccineInfo.length < 10) {
            this.paginate.prevBtn = true;
            this.paginate.nextBtn = true;
        }
        else {
            this.paginate.prevBtn = true;
            this.paginate.nextBtn = false;
        }
        this.loading = false;
    };
    VaccineSlotComponent.prototype.sortDose = function (dose) {
        var _this = this;
        if (this.filteredValues && dose === 1) {
            this.filteredValues.sort(function (a, b) {
                if (_this.sortOrderDose1 % 2 === 0) {
                    return b.sessions[0].available_capacity_dose1 - a.sessions[0].available_capacity_dose1;
                }
                if (_this.sortOrderDose1 % 2 !== 0) {
                    return a.sessions[0].available_capacity_dose1 - b.sessions[0].available_capacity_dose1;
                }
            });
            this.sortOrderDose1++;
        }
        if (this.filteredValues && dose === 2) {
            this.filteredValues.sort(function (a, b) {
                if (_this.sortOrderDose2 % 2 === 0) {
                    return b.sessions[0].available_capacity_dose2 - a.sessions[0].available_capacity_dose2;
                }
                if (_this.sortOrderDose2 % 2 !== 0) {
                    return a.sessions[0].available_capacity_dose2 - b.sessions[0].available_capacity_dose2;
                }
            });
            this.sortOrderDose2++;
        }
    };
    VaccineSlotComponent.prototype.initializeFilters = function () {
        this.filteredAge = 'ALL';
        this.filteredVaccineType = 'ALL';
        this.filteredDose = 'ALL';
    };
    VaccineSlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vaccine-slot',
            template: __webpack_require__(/*! ./vaccine-slot.component.html */ "./src/app/vaccine-slot/vaccine-slot.component.html"),
            styles: [__webpack_require__(/*! ./vaccine-slot.component.css */ "./src/app/vaccine-slot/vaccine-slot.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('vaccineinfo', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0,
                            transform: 'translateX(-500px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_vaccine_service__WEBPACK_IMPORTED_MODULE_2__["VaccineService"]])
    ], VaccineSlotComponent);
    return VaccineSlotComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hnamdeo\gitprojects\vaccine-slotfinder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
