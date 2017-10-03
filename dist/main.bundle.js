webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic1/infographic1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.comparison-container{\r\n    background-image: url(\"/assets/images/New infographics-33.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 580px;\r\n}\r\n\r\n.comparison-container ul{\r\n    width: 700px;\r\n    margin-top: 130px;\r\n    padding-left: 10px;\r\n    list-style: none;\r\n}\r\n\r\n.data-comparison{\r\n    border-bottom: 1px solid rgba(142,142, 141, 1);\r\n    color: rgba(79, 90, 101, 1);\r\n    padding: 10px;\r\n    margin-left: 68px;\r\n    font-size: 20px;\r\n}\r\n\r\n.data-comparison span{\r\n    color: rgba(237, 28, 36, 1)\r\n}\r\n.data-comparison span i{\r\n    padding-left: 3px;\r\n}\r\n.separator{\r\n    border-right: 1px solid rgba(142,142, 141, 1);\r\n}\r\n\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.country-container{\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    height: 70px;\r\n}\r\n\r\n.city-name{\r\n    color:rgba(79, 90, 101, 1);\r\n    font-weight: 600;\r\n    font-size: 32px;\r\n}\r\n.overall-costs{\r\n    color:  rgba(22, 134, 255, 1);\r\n    font-size: 28px;\r\n}\r\n.overall-costs, .city-name{\r\n    display: inline;\r\n    font-weight: 700;\r\n    line-height: 32px;\r\n}\r\n\r\n.overall-costs > span {    \r\n    font-size: 17px;\r\n}\r\n\r\n.city-icon-container{\r\n    overflow: hidden;\r\n}\r\n.city-icon-container img{\r\n    margin-top: -15px;\r\n    margin-left: -10px;\r\n    overflow: hidden;\r\n}\r\n\r\n.text-container{\r\n    font-family: proxima-nova;\r\n    font-size: 18px;\r\n    color: rgba(79, 90, 101, 1);\r\n    margin: 30px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.last-data-comparison{\r\n    border:none;\r\n}\r\n.data-comparison-percentage{\r\n    line-height: 56px;\r\n    font-weight: 700;\r\n    font-size: 32px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic1/infographic1.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"infographic row\">\r\n    <div class=\"header-text col-md-12 text-center\">\r\n        <p>Basic expenses comparison {{this.model.country_data.Capital_cities}}</p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"country-container separator col-md-6\">\r\n                <div class=\"pull-right col-md-10\">\r\n                    <div class=\"city-icon-container col-md-3\">\r\n                        <img width=\"100px\" height=\"100px\" src=\"{{originCity.cityIconUrl}}\" alt=\"{{movingCity.name}}\">\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                        <p class=\"city-name col-md-12\"></p>\r\n                        <p class=\"overall-costs col-md-12\">{{originCity.currency + originCity.price}} <span> (€{{originCity.priceInEur}}) {{originCity.period}}</span></p>\r\n                    </div>                  \r\n                </div>\r\n            </div>\r\n            <div class=\"country-container col-md-6\">\r\n                <div class=\"pull-left col-md-10\">\r\n                    <div class=\"city-icon-container col-md-3\">\r\n                        <img width=\"100px\" height=\"100px\" src=\"{{movingCity.cityIconUrl}}\" alt=\"{{movingCity.name}}\">\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                        <p class=\"city-name col-md-12\">{{movingCity.name}}</p>\r\n                        <p class=\"overall-costs col-md-12\">{{movingCity.currency + movingCity.price}} <span> (€{{movingCity.priceInEur}}) {{movingCity.period}}</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 text-center text-container\">\r\n            <p>Overall expenses based on rent, groceries, and commuting prices</p>\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"comparison-container col-md-12\">\r\n        <ul class=\"container\">\r\n            <li class=\"data-comparison row\">\r\n                <div class=\"data-comparison-text col-md-9\">                    \r\n                    Accommodation prices in {{originCity.name}}<br/>are <span>{{priceDifference.accommodation.asText}}</span> than in {{movingCity.name}}\r\n                </div>\r\n                <div class=\"data-comparison-percentage col-md-3 pull-right\">\r\n                        <span>{{priceDifference.accommodation.percentage}}%</span>\r\n                    <span><i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n            </li>\r\n            <li class=\"data-comparison row\">\r\n                <div class=\"data-comparison-text col-md-9\">                    \r\n                    Transport prices in {{originCity.name}}<br/>are <span>{{priceDifference.transport.asText}}</span> than in {{movingCity.name}}\r\n                </div>\r\n                <div class=\"data-comparison-percentage col-md-3 pull-right\">\r\n                    <span>{{priceDifference.transport.percentage}}%</span>\r\n                    <span>  <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n            </li>\r\n            <li class=\"data-comparison row\">\r\n                <div class=\"data-comparison-text col-md-9\">                    \r\n                    Food prices in {{originCity.name}}<br/>are <span>{{priceDifference.food.asText}}</span> than in {{movingCity.name}}\r\n                </div>\r\n                <div class=\"data-comparison-percentage col-md-3 pull-right\">\r\n                    <span>{{priceDifference.food.percentage}}%</span>\r\n                    <span>  <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n            </li>\r\n            <li class=\"data-comparison last-data-comparison row\">\r\n                <div class=\"data-comparison-text col-md-9\">                    \r\n                    Entertainment prices in {{originCity.name}}<br/>are <span>{{priceDifference.entertainment.asText}}</span> than in {{movingCity.name}}\r\n                </div>\r\n                <div class=\"data-comparison-percentage col-md-3 pull-right\">\r\n                    <span>{{priceDifference.entertainment.percentage}}%</span>\r\n                    <span>  <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic1/infographic1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic1Component = (function () {
    function Infographic1Component() {
        this.data = this.model;
    }
    Infographic1Component.prototype.ngOnInit = function () {
    };
    return Infographic1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic1Component.prototype, "model", void 0);
Infographic1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic1',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic1/infographic1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic1/infographic1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic1Component);

//# sourceMappingURL=infographic1.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic2/infographic2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-image{\r\n    margin-left: -15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic2/infographic2.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"map-image\" src=\"/assets/images/Infographic2.png\" alt=\"\">\n"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic2/infographic2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic2Component = (function () {
    function Infographic2Component() {
        this.data = this.model;
    }
    Infographic2Component.prototype.ngOnInit = function () {
    };
    return Infographic2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic2Component.prototype, "model", void 0);
Infographic2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic2',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic2/infographic2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic2/infographic2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic2Component);

//# sourceMappingURL=infographic2.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic3/infographic3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n    color:rgba(79, 90, 101, 1);\r\n    padding: 0;\r\n}\r\n\r\n.infographic, .header-text, ul{\r\n    padding: 0;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n.testimonial-container img{\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.testimonial-text{\r\n    font-size: 15px;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.desc-small-text{\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    padding: 15px 0;\r\n}\r\n.line-height{\r\n    line-height: 70px;\r\n}\r\n\r\n.desc-big-text{ \r\n    color: rgba(22, 134, 255, 1);\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n    line-height: 71px;\r\n    padding: 15px 0;\r\n\r\n}\r\n\r\n.desc-medium-text{\r\n    color: rgba(22, 134, 255, 1);\r\n    font-size: 54px;\r\n    font-weight: bold;\r\n    line-height: 60px;\r\n}\r\n\r\n.pt10{\r\n    padding-top: 10px;\r\n}\r\n\r\n.ml15{\r\n    margin-left: 15px;\r\n}\r\n.commute{\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n.commute li {\r\n    margin:20px 0;\r\n    height: 24px;\r\n}\r\n\r\n\r\n.commute li p{\r\n    line-height: 23px;\r\n    padding-left: 10px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n.separator{\r\n    height: 100%;\r\n    position: relative\r\n}\r\n\r\n.separator{\r\n    border-right: 1px solid rgba(142,142, 141, 1);\r\n}\r\n\r\n.employee-percentage{\r\n    border: 1px solid rgba(22, 134, 255, 1);\r\n    border-radius: 12px;\r\n    display: inline-block;\r\n}\r\n\r\n.employee-percentage-value{\r\n    font-size: 32px;\r\n    color: rgba(22, 134, 255, 1);\r\n}\r\n\r\n.employee-percentage-text{\r\n    font-size: 13px;\r\n    padding: 5px;\r\n}\r\n.chart-container{\r\n    height: 235px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.chart-info{\r\n    padding: 0;\r\n    display: inline-block;\r\n}\r\n.gray-coloring{\r\n    background-color: rgba(242, 242, 242, 1);\r\n    display: inline-block;\r\n    padding: 10px;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.testimonial-container, .chart-info, .average-container{\r\n    width: 99%;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic3/infographic3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infographic\">\r\n    <div class=\"row\">\r\n      <div class=\"header-text col-md-12 text-center\">\r\n          <p>Stark employees' living in {{this.model.Name_of_area}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <div class=\"col-md-4\">\r\n              <p class=\"desc-big-text text-right\">{{this.model.Name_of_area}}</p>\r\n          </div>\r\n          <div class=\"col-md-8\">\r\n              <p class=\"desc-small-text text-left\">{{this.model.why_its_cool}}</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"average-container col-md-12\">\r\n          <div class=\"gray-coloring\">\r\n            <div class=\"col-md-3\">\r\n                <p class=\"desc-small-text text center \">Average of what you colleagues from Stark pay</p>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"col-md-6 text-center\">\r\n                    <p class=\"desc-medium-text\">£{{this.model.SI_room_rent}}</p>\r\n                    <p class=\"desc-small-text text center\">a room in flatshare</p>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\">\r\n                    <p class=\"desc-medium-text\">£{{this.model.SI_1_bed_rent}}</p>\r\n                    <p class=\"desc-small-text text-center\">1 bedroom flat</p>\r\n                </div>  \r\n                <div class=\"pt10 col-md-12 text-center\"><i>(prices above include bills)</i></div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"chart-info col-md-12\">\r\n        <div class=\"chart-container col-md-9\">\r\n          <div class=\"gray-coloring col-md-12\">\r\n            <div class=\"col-md-6 separator\">\r\n              <div class=\"text-center\">Types of accommodation</div>\r\n              <div class=\"chart\">\r\n                  <canvas height=\"150px\" id=\"chart1\"></canvas>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"text-center\">Ways of commuting</div>\r\n                <div class=\"chart\">\r\n                    <canvas height=\"150px\"  id=\"chart2\"></canvas>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"chart-container col-md-3\">\r\n            <div class=\"gray-coloring\">\r\n              <div class=\"employee-percentage\">\r\n                <div class=\"employee-percentage-value col-md-5\">\r\n                  {{this.model.How_many_employees_stayed_there}}\r\n                </div> \r\n                <div class=\"employee-percentage-text col-md-7\">\r\n                  Of employees stayed here\r\n                </div>\r\n              </div>\r\n              <ul class=\"commute text-center col-md-12\">\r\n                  <li><img height=\"24px\" src=\"/assets/images/New infographics-17(grey).png\" alt=\"\"> <p>{{this.model.Bike_time}} by bike</p></li>\r\n                  <li><img height=\"24px\" src=\"/assets/images/New infographics-16(grey).png\" alt=\"\"> <p>{{this.model.Tube_time}} by tube</p></li>\r\n                  <li><img height=\"24px\" src=\"/assets/images/New infographics-20(grey).png\" alt=\"\"> <p>{{this.model.Walk_time}} by walk</p></li>\r\n              </ul>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"testimonial-container col-md-12\">\r\n          <div class=\"gray-coloring\">\r\n            <img width=\"80px\" height=\"80px\" src=\"/assets/images/New infographics-30(grey).png\" alt=\"Testimonial\">\r\n            <p class=\"text-left testimonial-text\">{{text}}</p>\r\n            <div class=\"pt10 col-md-12 text-center\"><i><b>{{author}},</b>{{relocatedTime}} </i></div>\r\n          </div>        \r\n      </div>\r\n    </div>\r\n    <script>\r\n      \r\n    </script>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic3/infographic3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Infographic3Component = (function () {
    function Infographic3Component() {
        this.data = this.model;
        this.text = this.model.what_your_colleagues_say.split('"')[0];
        this.author = this.model.what_your_colleagues_say.split('"')[1].split(',')[0];
        this.relocatedTime = this.model.what_your_colleagues_say.split('"')[1].split(',')[1];
    }
    Infographic3Component.prototype.ngOnInit = function () {
        var canvas1 = document.getElementById("chart1");
        var ctx1 = canvas1.getContext("2d");
        var canvas2 = document.getElementById("chart2");
        var ctx2 = canvas2.getContext("2d");
        var Chart1 = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx1, {
            type: 'pie',
            data: {
                datasets: [{
                        data: [
                            parseInt(this.model.in_Room.replace('%', '')),
                            parseInt(this.model.flat.replace('%', ''))
                        ],
                        backgroundColor: [
                            "rgba(22, 134, 255, 1)",
                            "rgba(193, 39, 45, 1)"
                        ],
                        label: 'Dataset 1'
                    }],
                labels: [
                    "Room",
                    "1 bed flat"
                ]
            },
            options: {
                responsive: true
            }
        });
        var Chart2 = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx2, {
            type: 'pie',
            data: {
                datasets: [{
                        data: [
                            parseInt(this.model.who_walk.replace('%', '')),
                            parseInt(this.model.who_tube.replace('%', '')),
                            parseInt(this.model.who_bike.replace('%', ''))
                        ],
                        backgroundColor: [
                            "rgba(247, 147, 30, 1)",
                            "rgba(22, 134, 255, 1)",
                            "rgba(193, 39, 45, 1)"
                        ],
                        label: 'Dataset 1'
                    }],
                labels: [
                    "Walk",
                    "Tube",
                    "Bike"
                ]
            },
            options: {
                responsive: true
            }
        });
    };
    return Infographic3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic3Component.prototype, "model", void 0);
Infographic3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic3',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic3/infographic3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic3/infographic3.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic3Component);

//# sourceMappingURL=infographic3.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic4/infographic4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n    color:rgba(79, 90, 101, 1);\r\n    padding: 0;\r\n}\r\n\r\n.infographic, .header-text, ul{\r\n    padding: 0;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.gray-coloring{\r\n    background-color: rgba(242, 242, 242, 1);\r\n    display: inline-block;\r\n    padding: 10px;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.wrapper{\r\n    background-image: url(\"/assets/images/New infographics-34.png\");\r\n    width: 100%;\r\n    height: 800px;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n.wrapper .info {\r\n    position: absolute;\r\n    top: 180px;\r\n    left: 260px;\r\n    width: 435px;\r\n}\r\n\r\n.list-header{\r\n    font-size: 27px;\r\n    color: rgba(22, 134, 255, 1);\r\n    font-weight: bold;\r\n    line-height: 28px;\r\n}\r\n\r\n.monthly-budget{\r\n\r\n}\r\n\r\n.monthly-budget li{\r\n    height: 40px;\r\n    border-bottom: 1px solid rgba(142,142, 141, 1);\r\n    margin: 0 20px;\r\n    margin-top: 30px;\r\n    padding-bottom: 70px;\r\n}\r\n\r\n.monthly-budget li span{\r\n    height: 30px;\r\n    width: 70px;\r\n    display: inline-block;\r\n}\r\n\r\n.monthly-budget li img{\r\n    height: 30px;\r\n}\r\n\r\n\r\n.monthly-budget li p{\r\n    display: inline-block;\r\n    line-height: 30px;\r\n    font-size: 22px;\r\n}\r\n\r\n.last-li{\r\n    border-bottom: none!important;\r\n}\r\n\r\n.total{    \r\n    font-size: 32px;\r\n    color: rgba(22, 134, 255, 1);\r\n    font-weight: bold;\r\n    line-height: 28px;\r\n    position: relative;\r\n}\r\n.total-text{\r\n    margin-top: 60px;\r\n}\r\n.currency-text{\r\n    position: absolute;\r\n    font-size: 52px;\r\n    left: 50px;\r\n    top: 50px;\r\n}\r\n\r\n.cost{\r\n    color: rgba(247, 170, 25, 1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic4/infographic4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infographic\">\r\n  <div class=\"row\">\r\n    <div class=\"header-text col-md-12 text-center\">\r\n        <p>Your personal monthly budget for {{this.model.destination_city}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row grey-coloring\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"container info\">\r\n        <p class=\"list-header text-center\">{{this.model.name}} monthly {{this.model.destination_city}} Budget</p>\r\n        <ul class=\"monthly-budget\">\r\n            <li><span><img src=\"/assets/images/New infographics-19.png\" alt=\"\"></span> <p>Rent</p> \r\n              <b class=\"pull-right cost\">£{{this.model.rent}}</b>\r\n            </li>\r\n            <li><span><img src=\"/assets/images/New infographics-18.png\" alt=\"\"></span> <p>Commute</p></li>\r\n            <li class=\"last-li\"><span><img src=\"/assets/images/New infographics-28.png\" alt=\"\"></span><p>Groceries</p></li>\r\n        </ul>\r\n        <div class=\"total\">\r\n            <p class=\"total-text text-center\">TOTAL</p>\r\n            <p class=\"currency-text\">£</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic4/infographic4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic4Component = (function () {
    function Infographic4Component() {
        this.data = this.model;
    }
    Infographic4Component.prototype.ngOnInit = function () {
    };
    return Infographic4Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic4Component.prototype, "model", void 0);
Infographic4Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic4',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic4/infographic4.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic4/infographic4.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic4Component);

//# sourceMappingURL=infographic4.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic5/infographic5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n    color:rgba(79, 90, 101, 1);\r\n    padding: 0;\r\n}\r\n\r\n.infographic, .header-text, ul{\r\n    padding: 0;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.list li img{\r\n    height:100px;\r\n}\r\n\r\n.list li{\r\n    border-right: 1px solid rgba(79, 90, 101, 1);\r\n    margin-top: 30px; \r\n}\r\n\r\n.percentage{\r\n    font-size: 72px;\r\n    color: rgba(22, 134, 255, 1);\r\n    font-weight: bold;\r\n}\r\n\r\n.text-small{\r\n    color: black;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n.text-big{\r\n    color: black;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.tube-info{\r\n    background-color: rgba(22, 134, 255, 1);\r\n    color: white;\r\n    border-radius: 15px;\r\n}\r\n\r\n.cost{\r\n    font-size: 72px;\r\n    font-weight: bold;\r\n    line-height: 60px;\r\n    padding-top: 20px;\r\n}\r\n.period{\r\n    font-size:20px;\r\n    line-height: 15px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.commute-time{\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    line-height: 24px\r\n}\r\n.commute-text{\r\n    font-size:20px;\r\n    line-height: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.cons, .pros{\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n\r\n.cons i{\r\n    font-size: 36px;\r\n    color: rgba(50, 186, 124, 1);\r\n    margin-right: 15px;\r\n    margin-top: 13px;\r\n    float: left;\r\n    height: 64px;\r\n}\r\n\r\n.pros i{\r\n    font-size: 36px;\r\n    color: rgba(232, 71, 26, 1);\r\n    margin-right: 15px;\r\n    margin-top: 13px;\r\n    float: left;\r\n    height: 64px;\r\n}\r\n\r\n.cons, .pros{\r\n    font-size: 24px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.cons p, .pros p{\r\n    display: inline;\r\n}\r\n\r\n.clearification{\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.clear-container{\r\n    margin-left: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic5/infographic5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infographic\">\r\n    <div class=\"row\">\r\n      <div class=\"header-text col-md-12 text-center\">\r\n          <p>Stark employees' living in {{Employee.AreaName}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <ul class=\"col-md-12 list\">\r\n        <li class=\"col-md-4 text-center\">\r\n            <img src=\"/assets/images/New infographics-16.png\" alt=\"\">\r\n            <p class=\"percentage\">{{Employee.TransportToOffice.Bike.ColleaguesPercent}}%</p>\r\n            <p class=\"text-small\">of Stark employees</p>\r\n            <p class=\"text-big\">take the tube to Stark</p>\r\n            <div class=\"tube-info\">\r\n              <p class=\"cost\">£{{Employee.TransportToOffice.Bike.Price}}</p>\r\n              <p class=\"period\">per/month</p>\r\n              <p class=\"commute-time\">{{Employee.TransportToOffice.Bike.Time}} mins</p>\r\n              <p class=\"commute-text\">commute time</p>\r\n            </div>\r\n            <span class=\"cons\">\r\n              <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n              <p>Not weather dependent</p>\r\n            </span>\r\n            <span class=\"pros\">\r\n              <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\r\n              <p>Tube on peak hour is VERY busy</p>\r\n            </span>\r\n        </li>\r\n        <li class=\"col-md-4 text-center\">\r\n            <img src=\"/assets/images/New infographics-17.png\" alt=\"\">\r\n            <p class=\"percentage\">{{Employee.TransportToOffice.Cycle.ColleaguesPercent}}%</p>\r\n            <p class=\"text-small\">of Stark employees</p>\r\n            <p class=\"text-big\">cycle to Stark</p>\r\n            <div class=\"tube-info\">\r\n              <p class=\"cost\">£{{Employee.TransportToOffice.Cycle.Price}}</p>\r\n              <p class=\"period\">per/month</p>\r\n              <p class=\"commute-time\">{{Employee.TransportToOffice.Cycle.Time}} mins</p>\r\n              <p class=\"commute-text\">commute time</p>\r\n            </div>\r\n            <span class=\"cons\">\r\n              <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n              <p>Cost effective with Santander bikes</p>\r\n            </span>\r\n            <span class=\"pros\">\r\n              <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\r\n              <p>Can be dangerous if not used to cycling</p>\r\n            </span>\r\n        </li>\r\n        <li class=\"col-md-4 text-center\">\r\n            <img src=\"/assets/images/New infographics-20.png\" alt=\"\">\r\n            <p class=\"percentage\">{{Employee.TransportToOffice.Walk.ColleaguesPercent}}%</p>\r\n            <p class=\"text-small\">of Stark employees</p>\r\n            <p class=\"text-big\">walk to Stark</p>\r\n            <div class=\"tube-info\">\r\n              <p class=\"cost\">£{{Employee.TransportToOffice.Walk.Price}}</p>\r\n              <p class=\"period\">per/month</p>\r\n              <p class=\"commute-time\">{{Employee.TransportToOffice.Walk.Time}} mins</p>\r\n              <p class=\"commute-text\">commute time</p>\r\n            </div>\r\n            <span class=\"cons\">\r\n              <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n              <p>Cheap,safe,eco-friendly</p>\r\n            </span>\r\n            <span class=\"pros\">\r\n              <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\r\n              <p>A long walk,itrains often</p>\r\n            </span>\r\n        </li>        \r\n      </ul>\r\n      <div class=\"col-md-4 clear-container\"></div>\r\n      <div class=\"col-md-4 clear-container\">\r\n        <p class=\"clearification text-center\">*cost based on the price of renting a Sandander bike</p>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic5/infographic5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic5Component = (function () {
    function Infographic5Component() {
        this.data = this.model;
        this.Employee = {
            AreaName: "Mile End",
            TransportToOffice: {
                Bike: {
                    ColleaguesPercent: "72",
                    Price: "135",
                    Time: "20"
                },
                Cycle: {
                    ColleaguesPercent: "18",
                    Price: "60*",
                    Time: "15"
                },
                Walk: {
                    ColleaguesPercent: "10",
                    Price: "0",
                    Time: "50"
                }
            }
        };
    }
    Infographic5Component.prototype.ngOnInit = function () {
    };
    return Infographic5Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic5Component.prototype, "model", void 0);
Infographic5Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic5',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic5/infographic5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic5/infographic5.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic5Component);

//# sourceMappingURL=infographic5.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic6/infographic6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n    color:rgba(79, 90, 101, 1);\r\n    padding: 0;\r\n}\r\n\r\n.infographic, .header-text, ul{\r\n    padding: 0;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.grey-coloring{\r\n    background-color: rgba(242, 242, 242, 1);\r\n}\r\n\r\n.wrapper{\r\n    font-size: 32px;\r\n    display: inline-block;\r\n    width: 97%;\r\n    margin: 10px;\r\n\r\n}\r\n\r\n.wrapper > div{\r\n    padding: 0;\r\n}\r\n.names1, .names2, .names3 {\r\n    margin: 0;\r\n}\r\n.names1 li, .names2 li, .names3 li {\r\n    height: 120px;\r\n    text-align: center;\r\n    border: 2px solid white;\r\n}\r\n\r\n.table-header{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color:white;\r\n    line-height: 32px;\r\n}\r\n\r\n\r\n.table-header img{\r\n    width: 80px;\r\n    margin-top: -50px; \r\n}\r\n\r\n\r\n.list-item{\r\n    line-height: 120px;\r\n}\r\n\r\n.number{\r\n    font-size: 54px;\r\n}\r\n\r\n.list-item-total{\r\n    background-color:rgba(192, 225, 249, 1);\r\n    font-weight: bold;\r\n}\r\n\r\n.table-header p{\r\n    width: 155px;\r\n    display: inline-block;\r\n    padding-top: 28px;\r\n    line-height: 30px;\r\n}\r\n\r\n.head-img-container{\r\n    display: inline-block;\r\n}\r\n.clearifications{\r\n    color: black;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic6/infographic6.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infographic\">\r\n    <div class=\"row\">\r\n      <div class=\"header-text col-md-12 text-center\">\r\n          <p>Stark employees' grocery costs</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"wrapper grey-coloring\">\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"names1\">\r\n            <li class=\"table-header\">\r\n              <div class=\"head-img-container\">\r\n                <img src=\"/assets/images/New infographics-29.png\" alt=\"\">\r\n                <p>Frequency cooking</p>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-item\">Every day</li>\r\n            <li class=\"list-item\">5 times/week</li>\r\n            <li class=\"list-item\">3 times/week</li>\r\n            <li class=\"list-item\">Rarely</li>\r\n            <li class=\"list-item\">Never</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ul class=\"names2\">\r\n              <li class=\"table-header\">\r\n                <div class=\"text-center\">\r\n                    <p>% employees</p>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-item number\">{{GroceryCosts.EveryDay.Percent}}%</li>\r\n              <li class=\"list-item number\">{{GroceryCosts.FiveTimes.Percent}}%</li>\r\n              <li class=\"list-item number\">{{GroceryCosts.ThreeTimes.Percent}}%</li>\r\n              <li class=\"list-item number\">{{GroceryCosts.Rarely.Percent}}%</li>\r\n              <li class=\"list-item number\">{{GroceryCosts.Never.Percent}}%</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ul class=\"names3\">\r\n              <li class=\"table-header\">\r\n                <div class=\"text-center\">\r\n                    <p>Total</p>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-item list-item-total number\">£{{this.model._7days}}</li>\r\n              <li class=\"list-item list-item-total number\">£{{this.model._5days}}</li>\r\n              <li class=\"list-item list-item-total number\">£{{this.model._3days}}</li>\r\n              <li class=\"list-item list-item-total number\">£{{this.model._1days}}</li>\r\n              <li class=\"list-item list-item-total number\">£{{this.model._0days}}</li>\r\n            </ul>\r\n        </div>        \r\n      </div>\r\n      <p class=\"clearifications text-center\">Numbers reported by Stark colleagues, based on shopping at high street supermarkets & delivery apps</p>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic6/infographic6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic6Component = (function () {
    function Infographic6Component() {
        this.data = this.model;
        this.GroceryCosts = {
            EveryDay: {
                Percent: 55,
                Total: 145
            },
            FiveTimes: {
                Percent: 30,
                Total: 239
            },
            ThreeTimes: {
                Percent: 14,
                Total: 314
            },
            Rarely: {
                Percent: 1,
                Total: 389
            },
            Never: {
                Percent: 0.30,
                Total: 404
            }
        };
    }
    Infographic6Component.prototype.ngOnInit = function () {
    };
    return Infographic6Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic6Component.prototype, "model", void 0);
Infographic6Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic6',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic6/infographic6.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic6/infographic6.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic6Component);

//# sourceMappingURL=infographic6.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic7/infographic7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n    color:rgba(79, 90, 101, 1);\r\n    padding: 0;\r\n}\r\n\r\n.infographic, .header-text, ul{\r\n    padding: 0;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.gray-coloring{\r\n    background-color: rgba(242, 242, 242, 1);\r\n    display: inline-block;\r\n    padding: 10px;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.wrapper{\r\n    background-image: url(\"/assets/images/New infographics-34.png\");\r\n    width: 100%;\r\n    height: 800px;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n.wrapper .info {\r\n    position: absolute;\r\n    top: 180px;\r\n    left: 260px;\r\n    width: 435px;\r\n}\r\n\r\n.list-header{\r\n    font-size: 27px;\r\n    color: rgba(22, 134, 255, 1);\r\n    font-weight: bold;\r\n    line-height: 28px;\r\n}\r\n\r\n.monthly-budget{\r\n\r\n}\r\n\r\n.monthly-budget li{\r\n    height: 40px;\r\n    border-bottom: 1px solid rgba(142,142, 141, 1);\r\n    margin: 0 20px;\r\n    margin-top: 30px;\r\n    padding-bottom: 70px;\r\n}\r\n\r\n.monthly-budget li span{\r\n    height: 30px;\r\n    width: 70px;\r\n    display: inline-block;\r\n}\r\n\r\n.monthly-budget li img{\r\n    height: 30px;\r\n}\r\n\r\n\r\n.monthly-budget li p{\r\n    display: inline-block;\r\n    line-height: 30px;\r\n    font-size: 22px;\r\n}\r\n\r\n.last-li{\r\n    border-bottom: none!important;\r\n}\r\n\r\n.total{    \r\n    font-size: 32px;\r\n    color: rgba(22, 134, 255, 1);\r\n    font-weight: bold;\r\n    line-height: 28px;\r\n    position: relative;\r\n}\r\n.total-text{\r\n    margin-top: 60px;\r\n}\r\n.currency-text{\r\n    position: absolute;\r\n    font-size: 52px;\r\n    left: 50px;\r\n    top: 50px;\r\n}\r\n\r\n.cost{\r\n    color: rgba(247, 170, 25, 1);\r\n}\r\n\r\n.description{\r\n    font-size: 14px!important;\r\n    width: 100%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic7/infographic7.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infographic\">\r\n    <div class=\"row\">\r\n      <div class=\"header-text col-md-12 text-center\">\r\n          <p>Your personal monthly budget for {{Employee.MovingCity}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row grey-coloring\">\r\n      <div class=\"wrapper\">\r\n        <div class=\"container info\">\r\n          <p class=\"list-header text-center\">{{Employee.Name}}`s monthly London Budget</p>\r\n          <ul class=\"monthly-budget\">\r\n              <li>\r\n                <span><img src=\"/assets/images/New infographics-19.png\" alt=\"\"></span>\r\n                <p>Rent</p>\r\n                <b class=\"pull-right cost\">£{{Employee.Price.Rent.Cost}}<span>(€{{Employee.Price.Rent.euro}})</span></b>\r\n                <p class=\"description\">a room in flatshare</p>\r\n              </li>\r\n              <li>\r\n                <span><img src=\"/assets/images/New infographics-18.png\" alt=\"\"></span>\r\n                <p>Commute</p>\r\n                <b class=\"pull-right cost\">£{{Employee.Price.Commute.Cost}}<span>(€{{Employee.Price.Commute.euro}})</span></b>\r\n                <p class=\"description\">taking the tube to Stark offices</p>\r\n              </li>\r\n              <li class=\"last-li\">\r\n                <span><img src=\"/assets/images/New infographics-28.png\" alt=\"\"></span>\r\n                <p>Groceries</p>\r\n                <b class=\"pull-right cost\">£{{Employee.Price.Groceries.Cost}}<span>(€{{Employee.Price.Groceries.euro}})</span></b>\r\n                <p class=\"description\">based on {{Employee.Name}} cooking everyday</p>\r\n              </li>\r\n          </ul>\r\n          <div class=\"total\">\r\n              <p class=\"total-text text-center\">TOTAL</p>\r\n              <p class=\"currency-text\">£{{Employee.Price.Total.Cost}}({{Employee.Price.Total.euro}}€)</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic7/infographic7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic7Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic7Component = (function () {
    function Infographic7Component() {
        this.data = this.model;
        this.Employee = {
            Name: "Emma",
            MovingCity: "London",
            Price: {
                Rent: {
                    Cost: "700",
                    euro: "770"
                },
                Commute: {
                    Cost: "135",
                    euro: "145"
                },
                Groceries: {
                    Cost: "145",
                    euro: "160"
                },
                Total: {
                    Cost: "1.480",
                    euro: "1.625"
                }
            }
        };
    }
    Infographic7Component.prototype.ngOnInit = function () {
    };
    return Infographic7Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic7Component.prototype, "model", void 0);
Infographic7Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic7',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic7/infographic7.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic7/infographic7.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic7Component);

//# sourceMappingURL=infographic7.component.js.map

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic8/infographic8.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infographic{\r\n    font-family: proxima-nova;\r\n    color:rgba(79, 90, 101, 1);\r\n    padding: 0;\r\n}\r\n\r\n.infographic, .header-text, ul{\r\n    padding: 0;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\np{\r\n    margin: 0;\r\n}\r\n.header-text{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n\r\n.header-text p{\r\n    line-height: 60px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.grey-coloring{\r\n    background-color: rgba(242, 242, 242, 1);\r\n    border: none;\r\n    border-bottom: 1px solid rgba(127, 127, 127, 1);\r\n}\r\n.blue-coloring{\r\n    background-color:  rgba(22, 134, 255, 1);\r\n    color: white;\r\n}\r\n\r\n.data-table{\r\n}\r\n\r\ntd {\r\n    border-right: 1px solid rgba(127, 127, 127, 1);\r\n    border-bottom: 1px solid rgba(127, 127, 127, 1);\r\n}\r\n\r\nth{\r\n    border-bottom: 1px solid rgba(127, 127, 127, 1);\r\n}\r\n\r\n.data-table thead th{\r\n    height: 150px;\r\n    width: 320px;\r\n    border-right: 1px solid rgba(127, 127, 127, 1);\r\n}\r\n\r\n.data-table thead td p{    \r\n    text-align: left;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    width: 170px;\r\n    padding: 30px;\r\n} \r\n\r\n.left-text{    \r\n    text-align: left;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    width: 170px;\r\n    padding: 30px;\r\n}\r\n\r\n.data-table thead p{\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    width: 215px;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    padding-top: 10px;\r\n}\r\n.data-table thead th span{    \r\n    float: left;\r\n    padding-right: 10px;\r\n    padding-left: 14px;\r\n}\r\n.data-table thead th span img{\r\n    width:  80px;\r\n}\r\n\r\n\r\n.data-table tbody tr{\r\n    height: 160px;\r\n}\r\n\r\n.dark-grey-coloring{\r\n    background-color: rgba(79, 90, 101, 1);\r\n    color: white;\r\n}\r\n\r\n.dark-grey-coloring td{\r\n    border-color: rgba(39, 45, 50, 1)\r\n}\r\n\r\np.small-text, p.big-text{\r\n    width: 120px;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n    text-align: none;\r\n    font-weight: 500;\r\n    width: inherit;\r\n    padding: 0;\r\n}\r\n\r\n\r\np.small-text{\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    text-align: left;\r\n    width: 85px;\r\n}\r\n\r\n\r\np.big-text{\r\n    font-size:40px;\r\n    padding: 0;\r\n    width:110px;\r\n    text-align:right;\r\n    display: inline-block;\r\n}\r\n\r\n.tbody-img-container{\r\n    height: 80px;\r\n}\r\n\r\n.tbody-text-container span.cost{\r\n    display: inline-block;\r\n    width:  200px;\r\n    color: rgba(22, 134, 255, 1);\r\n    font-weight: bold;\r\n}\r\n\r\n.tbody-text-container{\r\n    display: block;\r\n    float:right;\r\n    margin-right: 20px;\r\n}\r\n\r\n.tbody-img-container{\r\n    display: block;\r\n    float:left;\r\n    margin-left: 20px;\r\n    height: 80px;\r\n}\r\n\r\n.tbody-img-container img{\r\n    max-width: 80px;\r\n    height: inherit\r\n}\r\n\r\np.description{\r\n    color: rgba(79, 90, 101, 1);\r\n    display: inline;\r\n    font-weight: normal;\r\n}\r\n\r\n.Rent span img{\r\n    height:55px;\r\n    margin-top:10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic8/infographic8.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infographic\">\r\n    <div class=\"row\">\r\n      <div class=\"header-text col-md-12 text-center\">\r\n          <p>How your budget compares to your colleagues</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"data-table text-center\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"grey-coloring\"></th>\r\n            <th>\r\n              <span><img src=\"/assets/images/New infographics-26.png\" alt=\"\"></span>\r\n              <p>{{this.model.user_name}}'s <br/> budget</p></th>\r\n            <th>\r\n              <span><img src=\"/assets/images/New infographics-26.png\" alt=\"\"></span>\r\n              <p>Average <br/> Stark employee</p>\r\n            </th>\r\n          </tr>\r\n        </thead>          \r\n        <tbody>\r\n          <tr class=\"dark-grey-coloring\">\r\n            <td class=\"blue-coloring\"><p class=\"left-text\">Total</p></td>\r\n            <td class=\"\"><p class=\"big-text\">{{Comparision.Total.ForEmployee.GBP}}</p> <p class=\"small-text text-left\">(€{{Comparision.Total.ForEmployee.EUR}})</p></td>\r\n            <td class=\"\"><p class=\"big-text\">£{{Comparision.Total.Average.GBP}}</p> <p class=\"small-text text-left\">(€{{Comparision.Total.Average.GBP}})</p></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"grey-coloring\"><p class=\"left-text\">Rent</p></td>\r\n            <td class=\"Rent\">\r\n              <span class=\"tbody-img-container\">\r\n                <img src=\"/assets/images/New infographics-27.png\" alt=\"\"></span>\r\n              <span class=\"tbody-text-container\">\r\n                <span class=\"cost\">\r\n                    <p class=\"big-text\">£{{this.model.user_cost.rent_cost}}</p>\r\n                    <p class=\"small-text text-left\">(€{{this.model.user_cost.rent-cost}})</p>\r\n                    <p class=\"description\"><br/>Room in {{this.model.area_to_stay}}</p>\r\n                </span>\r\n              </span>\r\n            </td>\r\n            <td class=\"Rent\">\r\n                <span class=\"tbody-img-container\">\r\n                  <img src=\"/assets/images/New infographics-27.png\" alt=\"\">\r\n                </span>\r\n                <span class=\"tbody-text-container\">\r\n                  <span class=\"cost\">\r\n                      <p class=\"big-text\">£{{this.model.others_cost.rent_cost}}</p>\r\n                      <p class=\"small-text text-left\">(€{{this.model.others_cost.rent-cost}})</p>\r\n                      <p class=\"description\"><br/>Room in {{this.model.area_to_stay}}</p>\r\n                  </span>\r\n                </span>\r\n            </td>\r\n          </tr> \r\n          <tr>\r\n            <td class=\"grey-coloring\"><p class=\"left-text\">Commute</p></td>\r\n            <td class=\"\">\r\n                <span class=\"tbody-img-container\">\r\n                  <img src=\"/assets/images/New infographics-16.png\" alt=\"\">\r\n                </span>\r\n                <span class=\"tbody-text-container\">\r\n                  <span class=\"cost\">\r\n                      <p class=\"big-text\">£{{this.model.user_cost.transportation_cost}}</p>\r\n                      <p class=\"small-text text-left\">(€{{this.model.user_cost.transportation_cost}})</p>\r\n                      <p class=\"description\"><br/>Tube</p>\r\n                  </span>\r\n                </span>\r\n            </td>\r\n            <td class=\"\">\r\n                <span class=\"tbody-img-container\"><img src=\"/assets/images/New infographics-16.png\" alt=\"\"></span>\r\n                <span class=\"tbody-text-container\">\r\n                  <span class=\"cost\">\r\n                      <p class=\"big-text\">£{{this.model.others_cost.transportation_cost}}</p>\r\n                      <p class=\"small-text text-left\">(€{{this.model.others_cost.transportation_cost}})</p>\r\n                      <p class=\"description\"><br/>Tube</p>\r\n                  </span>\r\n                </span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"grey-coloring\"><p class=\"left-text\">Groceries</p></td>\r\n            <td class=\"\">\r\n                <span class=\"tbody-img-container\"><img src=\"/assets/images/New infographics-28.png\" alt=\"\"></span>\r\n                <span class=\"tbody-text-container\">\r\n                  <span class=\"cost\">\r\n                      <p class=\"big-text\">£{{this.model.user_cost.groceries_cost}}</p>\r\n                      <p class=\"small-text text-left\">(€{{this.model.user_cost.groceries_cost}})</p>\r\n                      <p class=\"description\"><br/>Groceries</p>\r\n                  </span>\r\n                </span>\r\n            </td>\r\n            <td class=\"\">\r\n                <span class=\"tbody-img-container\"><img src=\"/assets/images/New infographics-28.png\" alt=\"\"></span>\r\n                <span class=\"tbody-text-container\">\r\n                  <span class=\"cost\">\r\n                      <p class=\"big-text\">£{{this.model.others_cost.groceries_cost}}</p>\r\n                      <p class=\"small-text text-left\">(€{{this.model.others_cost.groceries_cost}})</p>\r\n                      <p class=\"description\"><br/>Groceries</p>\r\n                  </span>\r\n                </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Infographics/infographic8/infographic8.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infographic8Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Infographic8Component = (function () {
    function Infographic8Component() {
        this.data = this.model;
        this.Comparision = {
            EmployeeName: "Jenny",
            Total: {
                ForEmployee: {
                    EUR: 100,
                    GBP: 200
                },
                Average: {
                    EUR: 100,
                    GBP: 200
                }
            },
            Rent: {
                ForEmployee: {
                    EUR: 200,
                    GBP: 300
                },
                Average: {
                    EUR: 200,
                    GBP: 300
                }
            },
            Commute: {
                ForEmployee: {
                    EUR: 300,
                    GBP: 400
                },
                Average: {
                    EUR: 300,
                    GBP: 400
                }
            },
            Groceries: {
                ForEmployee: {
                    EUR: 400,
                    GBP: 500
                },
                Average: {
                    EUR: 400,
                    GBP: 500
                }
            }
        };
    }
    Infographic8Component.prototype.ngOnInit = function () {
    };
    return Infographic8Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Infographic8Component.prototype, "model", void 0);
Infographic8Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-infographic8',
        template: __webpack_require__("../../../../../src/app/Infographics/infographic8/infographic8.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Infographics/infographic8/infographic8.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Infographic8Component);

//# sourceMappingURL=infographic8.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-my-new-component></app-my-new-component>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_new_component_my_new_component_component__ = __webpack_require__("../../../../../src/app/my-new-component/my-new-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Infographics_infographic1_infographic1_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic1/infographic1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Infographics_infographic2_infographic2_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic2/infographic2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Infographics_infographic3_infographic3_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic3/infographic3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Infographics_infographic4_infographic4_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic4/infographic4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Infographics_infographic5_infographic5_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic5/infographic5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Infographics_infographic6_infographic6_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic6/infographic6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Infographics_infographic7_infographic7_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic7/infographic7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Infographics_infographic8_infographic8_component__ = __webpack_require__("../../../../../src/app/Infographics/infographic8/infographic8.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_4__Infographics_infographic1_infographic1_component__["a" /* Infographic1Component */],
            __WEBPACK_IMPORTED_MODULE_5__Infographics_infographic2_infographic2_component__["a" /* Infographic2Component */],
            __WEBPACK_IMPORTED_MODULE_6__Infographics_infographic3_infographic3_component__["a" /* Infographic3Component */],
            __WEBPACK_IMPORTED_MODULE_7__Infographics_infographic4_infographic4_component__["a" /* Infographic4Component */],
            __WEBPACK_IMPORTED_MODULE_8__Infographics_infographic5_infographic5_component__["a" /* Infographic5Component */],
            __WEBPACK_IMPORTED_MODULE_9__Infographics_infographic6_infographic6_component__["a" /* Infographic6Component */],
            __WEBPACK_IMPORTED_MODULE_10__Infographics_infographic7_infographic7_component__["a" /* Infographic7Component */],
            __WEBPACK_IMPORTED_MODULE_11__Infographics_infographic8_infographic8_component__["a" /* Infographic8Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/my-new-component/my-new-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n    width:100%;\r\n    padding: 0;\r\n}\r\n.infographic-container{\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-new-component/my-new-component.component.html":
/***/ (function(module, exports) {

module.exports = "\t<header>\r\n\t\t<div class=\"logo-box\">\r\n\t\t\t<img src=\"assets/logo.png\" alt=\"logo\" />\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"chatFullCont\">\r\n  <div class=\"row\">\r\n    <div class=\"chatBox col-md-6\">\r\n      <div id=\"chatHeight\" class=\"chatHeight scrollbarStyle\">\r\n        <div *ngFor=\"let message of messages\"> \r\n          <div class=\"sender\" *ngIf=\"message.type=='agent'\">\r\n            <div class=\"senderName\"><span>B</span></div>\r\n            <p>{{message.message}}</p>\r\n            </div>\r\n          \r\n          <div class=\"recipient\" *ngIf=\"message.type=='me'\">\r\n            <p>{{message.message}}</p>\r\n          </div>\r\n\r\n          <div>\r\n            <div class=\"sender msgTypingDots\" *ngIf=\"message.type=='dots'\">\r\n              <div class=\"senderName\"><span>L</span></div>\r\n              <div class=\"dots\">\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"sendMsg\">\r\n        <input type=\"text\"  placeholder=\"Type a message\" #box value=\"I am from Berlin\" (keyup.enter)=\"box.value=SubmitRequest(box.value);\"/>\r\n        <input type=\"submit\" value=\"SEND\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"infographic-container col-md-6\">\r\n      <div class=\"col-md-12\">\r\n          <div *ngIf=\"InfographicNumber == 0;\"><p></p></div>\r\n          <div *ngIf=\"InfographicNumber == 1;\"><app-infographic1 [model]=\"parentModel\"></app-infographic1></div>\r\n          <div *ngIf=\"InfographicNumber == 2;\"><app-infographic2 [model]=\"parentModel\"></app-infographic2></div>\r\n          <div *ngIf=\"InfographicNumber == 3;\"><app-infographic3 [model]=\"parentModel\"></app-infographic3></div>\r\n          <div *ngIf=\"InfographicNumber == 4;\"><app-infographic4 [model]=\"parentModel\"></app-infographic4></div>\r\n          <div *ngIf=\"InfographicNumber == 5;\"><app-infographic5 [model]=\"parentModel\"></app-infographic5></div>\r\n          <div *ngIf=\"InfographicNumber == 6;\"><app-infographic6 [model]=\"parentModel\"></app-infographic6></div>\r\n          <div *ngIf=\"InfographicNumber == 7;\"><app-infographic7 [model]=\"parentModel\"></app-infographic7></div>\r\n          <div *ngIf=\"InfographicNumber == 8;\"><app-infographic8 [model]=\"parentModel\"></app-infographic8></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/my-new-component/my-new-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_api_ai_javascript__ = __webpack_require__("../../../../api-ai-javascript/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyNewComponentComponent = (function () {
    function MyNewComponentComponent() {
        this.title = "Dima";
        this.response = '';
        this.request = '';
        this.readings_data = "I know that you just landed on this screen and didn't spoke to agent yet";
        this.messages = [];
        this.parentModel = {
            infographic1: {},
        };
        /*
          {message:"Hi Jenny! I'm Ben, your rental budget specialist. I was designed to help you to build your monthly budget for your move to London.",type:"agent"},
          {message:"Would you like to know how much money you will need to live in London?",type:"agent"}
        ];
        */
        this.pre_populated = 'Hi';
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new __WEBPACK_IMPORTED_MODULE_1_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: '7038fb95c5384508a0886caf841ef9b8' });
        this.client.eventRequest("WELCOME")
            .then(function (response) {
            _this.handleAPIAIresponse(response);
        })
            .catch(function (error) {
            console.log(error);
            _this.response = "sorry but something went wrong, try again in few minutes";
        });
    };
    MyNewComponentComponent.prototype.SubmitRequest = function (box_value) {
        var _this = this;
        var retVal;
        // show the message on screen
        this.request = box_value;
        this.messages.push({ message: this.request, type: "me" });
        console.log('request = ' + this.request);
        if (box_value == "I am from Berlin") {
            retVal = "ready";
        }
        else if (box_value == "ready") {
            retVal = "I want to learn about Moorgate";
        }
        else if (box_value == "I want to learn about Moorgate") {
            retVal = "I want to stay room";
        }
        else if (box_value == "I want to stay room") {
            retVal = "add";
        }
        else if (box_value == "add") {
            retVal = "commuting";
        }
        else if (box_value == "commuting") {
            retVal = "tube";
        }
        else if (box_value == "tube") {
            retVal = "I am happy with this choice";
        }
        else if (box_value == "I am happy with this choice") {
            retVal = "2 times a week";
        }
        else if (box_value == "2 times a week") {
            retVal = "no";
        }
        else {
            retVal = "";
        }
        // send message to API AI and handle the response
        this.client.textRequest(this.request)
            .then(function (response) {
            _this.handleAPIAIresponse(response);
        })
            .catch(function (error) {
            console.log(error);
            _this.response = "sorry but something went wrong, try again in few minutes";
        });
        return retVal;
    };
    MyNewComponentComponent.prototype.handleAPIAIresponse = function (response) {
        var _this = this;
        console.log(response);
        var infographic = response.result.fulfillment.data.Infographics;
        if (infographic.hasOwnProperty("number")) {
            console.log("infographic.number", infographic.number);
            this.InfographicNumber = infographic.number;
            this.parentModel = infographic.data_infographic;
        }
        this.response = response.result.fulfillment.speech;
        var responsemessage = this.response.split("$$$");
        responsemessage.forEach(function (element) {
            if (element != "") {
                _this.messages.push({ message: element, type: "agent" });
            }
        });
        this.readings(response);
        this.ScrollDown();
        var fire_event = response.result.fulfillment.data.fire_event;
        // if we want to fire specific event
        if (fire_event != "") {
            this.client.eventRequest(fire_event)
                .then(function (response) {
                _this.handleAPIAIresponse(response);
            })
                .catch(function (error) {
                console.log(error);
                _this.response = "sorry but something went wrong, try again in few minutes";
            });
        }
        console.log(this.messages);
    };
    MyNewComponentComponent.prototype.ScrollDown = function () {
        setTimeout(function () {
            var objDiv = document.getElementById("chatHeight");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 200);
        setTimeout(function () {
            var objDiv = document.getElementById("chatHeight");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 400);
        setTimeout(function () {
            var objDiv = document.getElementById("chatHeight");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 1000);
    };
    MyNewComponentComponent.prototype.readings = function (response) {
        this.readings_data = "";
        if (response.result.fulfillment) {
            if (response.result.fulfillment.data) {
                var data = response.result.fulfillment.data;
                if (data.action == 'input.city') {
                    this.readings_data = "I know you moving to "
                        + data.distination_city
                        + " and you are moving from "
                        + data.original_city
                        + " and i can show here some readings regarding it";
                }
                else if (data.action == 'input.city.rent') {
                    this.readings_data = "I know that now you asked to see rent budget in "
                        + data.distination_city
                        + " and i can show here some readings regarding it";
                }
                else if (data.action == 'input.neighborhood') {
                    this.readings_data = "I know that now you picked neighborhood "
                        + data.distination_Neighborhood
                        + " and i can show here some readings regarding it";
                }
                else if (data.action == 'input.typeofflat') {
                    this.readings_data = "I know that now you picked type of flat "
                        + data.distination_type_of_flat
                        + " and i can show here some readings regarding it";
                }
            }
        }
    };
    return MyNewComponentComponent;
}());
MyNewComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-my-new-component',
        template: __webpack_require__("../../../../../src/app/my-new-component/my-new-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-new-component/my-new-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyNewComponentComponent);

//# sourceMappingURL=my-new-component.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map