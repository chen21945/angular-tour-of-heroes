"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var HeroSearchService = (function () {
    function HeroSearchService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    ;
    HeroSearchService.prototype.search = function (term) {
        return this.http.get("app/heroes/?name=" + term).map(function (r) { return r.json().data; });
        //return this.jsonp.get('http://localhost:8081/mydemo/heroes?callback=JSON_CALLBACK').map(response=>response.json().data as Hero[]);
    };
    HeroSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], HeroSearchService);
    return HeroSearchService;
}());
exports.HeroSearchService = HeroSearchService;
//# sourceMappingURL=hero.search.service.js.map