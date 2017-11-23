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
var core_1 = require("@angular/core");
var new_hole_component_1 = require("./new-hole.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.__mapRightClickHandler = (function (event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            this.new_hole_component.showModal();
        }).bind(this);
    }
    AppComponent.prototype.ngOnInit = function () {
        var mapProps = {
            center: new google.maps.LatLng(41, -110),
            zoom: 7
        };
        this.map = new google.maps.Map(document.getElementById('google_map'), mapProps);
        this.map.setMapTypeId('terrain');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        //TODO: LOAD bow's from DB
        google.maps.event.addListener(this.map, 'rightclick', this.__mapRightClickHandler);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(new_hole_component_1.NewHoleComponent),
    __metadata("design:type", new_hole_component_1.NewHoleComponent)
], AppComponent.prototype, "new_hole_component", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'the-map',
        templateUrl: './../views/AppComponent.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map