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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
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

module.exports = "<nav class=\"navbar fixed-bottom navbar-dark bg-dark mt-2\">\n  <div class=\"container\">\n    <a href=\"/vaccinefinder/\" class=\"navbar-brand\">Made with Love &hearts;</a> <a href=\"https://www.linkedin.com/in/himanshunamdeo/\">Connect with my on LinkedIn  </a> \n  </div>\n</nav>\n"

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

module.exports = "button:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/vaccine-slot/vaccine-slot.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vaccine-slot/vaccine-slot.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card\">\n    <div class=\"container position-sticky\">\n        <div class=\"d-inline-block p-2\" style=\"width:50%\">\n            <select class=\"form-select\" [(ngModel)]=\"selectedstate\" (ngModelChange)=\"fetchDistricts()\">\n                <option *ngFor=\"let state of states\" [value]=\"state.state_id\">{{state.state_name}}</option>\n            </select>\n        </div>\n        <div class=\"d-inline-block p-2\" style=\"width:50%\">\n            <select class=\"form-select\" [(ngModel)]=\"selecteddistrict\" [disabled]=\"selectedstate===0\"\n                    (ngModelChange)=\"getVaccineInfo()\">\n                <option *ngFor=\"let district of districts\"\n                        [value]=\"district.district_id\">{{district.district_name}}</option>\n            </select>\n        </div>\n    </div>\n</div>\n<div class=\"container card my-2\">\n    <div class=\"row\">\n        <div class=\" col d-inline-block p-2\">\n            <div class=\"row\">\n                <label class=\"col d-grid align-self-center justify-content-center\">Age : </label>\n                <select class=\"col form-select\" [(ngModel)]=\"filteredAge\" [disabled]=\"selecteddistrict===0\">\n                    <option value=\"ALL\">ALL</option>\n                    <option value=\"18\">18+</option>\n                    <option value=\"45\">45+</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"col  d-inline-block p-2\">\n            <div class=\"row\">\n                <label class=\"col d-grid align-self-center justify-content-center\"> Vaccine Type: </label>\n                <select class=\"col form-select\" [(ngModel)]=\"filteredVaccineType\" [disabled]=\"selecteddistrict===0\">\n                    <option value=\"ALL\">BOTH</option>\n                    <option value=\"COVISHIELD\">COVISHIELD</option>\n                    <option value=\"COVAXIN\">COVAXIN</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"col justify-content-center  d-grid p-2\">\n            <button class=\"btn btn-success btn-block\" style=\"width: 200%\" (click)=\"filterResults()\"\n                    [disabled]=\"selecteddistrict===0\">Filter\n            </button>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container card mt-2 mb-4\" style=\"\">\n    <div class=\"clearfix\">\n\n        <h4 class=\"d-grid justify-content-center mt-2 w-auto\">Vaccine Info\n        </h4>\n        <span *ngIf=\"filteredValues\"\n              style=\"right: 10%;top: 3%;position: absolute\"> Records found : {{filteredValues.length}} </span>\n    </div>\n    <div class=\"mt-2 table-responsive\">\n        <table class=\"table table-sm table-striped table-hover\">\n            <thead>\n\n            <tr class=\"d-flex text-center\">\n                <th class=\"col-sm-1 col-md-2\">Vaccine</th>\n                <th class=\"col-sm-1\">Age</th>\n                <th class=\"col-sm-1\">Dose 1</th>\n                <th class=\"col-sm-1\">Dose 2</th>\n                <th class=\"col-sm-1\">Date</th>\n                <th class=\"col-sm-3 col-md\">Center Name</th>\n                <th class=\"col-sm-3 col-md\">Address</th>\n            </tr>\n\n            </thead>\n\n            <tbody *ngIf=\"vaccineInfo\">\n            <tr class=\"d-flex text-center\" *ngFor=\"let vaccine of vaccineInfo\">\n                <td class=\"col-sm-2 col-md-2\">{{vaccine.sessions[0].vaccine}}</td>\n                <td class=\"col-sm-1\">{{vaccine.sessions[0].min_age_limit}}</td>\n                <td class=\"col-sm-1\">{{vaccine.sessions[0].available_capacity_dose1}}</td>\n                <td class=\"col-sm-1\">{{vaccine.sessions[0].available_capacity_dose2}}</td>\n                <td class=\"col-sm-1\">{{vaccine.sessions[0].date}}</td>\n                <td class=\"col-sm-3 col-md \" data-toggle=\"tooltip\" data-placement=\"top\"\n                    title=\"{{vaccine.name}}\">{{vaccine.name}}</td>\n                <td class=\"col-sm-3 col-md \" data-toggle=\"tooltip\" data-placement=\"top\"\n                    title=\"{{vaccine.address}}\">{{vaccine.address}}</td>\n            </tr>\n\n            </tbody>\n            <tbody *ngIf=\"loading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border text-dark m-3\" style=\"width: 3rem; height: 3rem;\" role=\"status\">\n                </div>\n            </div>\n            </tbody>\n\n            <tbody *ngIf=\"filteredValues\">\n            <div *ngIf=\"filteredValues.length===0\" class=\"text-center\">\n                <div >\n                    <img src=\"vaccinefinder/assets/404.gif\" alt=\"Not Found\" style=\"width: 30%;\"/>\n                    <h4 class=\"p-3\" style=\"font-family: 'Comic Sans MS';\"> No Vaccine Slot Available!!.. Keep Trying..</h4>\n                </div>\n            </div>\n            </tbody>\n\n\n\n        </table>\n        <div *ngIf=\"filteredValues\">\n            <div *ngIf=\"filteredValues.length>10\" class=\"btn-group mb-4\" role=\"group\" style=\"margin-left: 42%\">\n                <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"prevTen()\" [disabled]=\"paginate.prevBtn\">\n                    Prev\n                </button>\n                <button type=\"button\" class=\"btn  btn-outline-info\" (click)=\"nextTen()\" [disabled]=\"paginate.nextBtn\">\n                    Next\n                </button>\n            </div>\n        </div>\n        <div style=\"margin-top: 20px\"></div>\n    </div>\n</div>\n"

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
    }
    VaccineSlotComponent.prototype.ngOnInit = function () {
    };
    VaccineSlotComponent.prototype.fetchDistricts = function () {
        var _this = this;
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
            console.log(JSON.stringify(this.districts));
            this.vaccineInfo = [];
        }
    };
    VaccineSlotComponent.prototype.getVaccineInfo = function () {
        var _this = this;
        this.loading = true;
        if (this.selecteddistrict > 0) {
            this.vaccineService.getVaccineInfoForNext7Days(this.selecteddistrict).subscribe(function (result) {
                _this.vaccineInfoResponse = result.centers.filter(function (item) { return item.sessions[0].available_capacity > 0; });
                console.log(_this.vaccineInfoResponse.length);
                _this.filteredValues = _this.vaccineInfoResponse;
                _this.vaccineInfo = _this.filteredValues.slice(0, 10);
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
        var filteredResults = this.vaccineInfoResponse;
        if (this.filteredAge === 'ALL' && this.filteredVaccineType === 'ALL') {
            filteredResults = this.vaccineInfoResponse;
        }
        if (this.filteredAge !== 'ALL') {
            filteredResults = this.vaccineInfoResponse.filter(function (item) { return item.sessions[0].min_age_limit.toString() === _this.filteredAge; });
        }
        if (this.filteredVaccineType !== 'ALL') {
            filteredResults = filteredResults.filter(function (item) { return item.sessions[0].vaccine === _this.filteredVaccineType; });
        }
        this.filteredValues = filteredResults;
        this.vaccineInfo = this.filteredValues.slice(0, 10);
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
    VaccineSlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vaccine-slot',
            template: __webpack_require__(/*! ./vaccine-slot.component.html */ "./src/app/vaccine-slot/vaccine-slot.component.html"),
            styles: [__webpack_require__(/*! ./vaccine-slot.component.css */ "./src/app/vaccine-slot/vaccine-slot.component.css")]
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
    production: false
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
