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
//TODO: should really use *ngif so that we're not loading all this until we have to
var core_1 = require("@angular/core");
var hole_1 = require("./hole");
var NewHoleComponent = NewHoleComponent_1 = (function () {
    function NewHoleComponent(ref) {
        this.ref = ref;
        this.visibleAnimate = false;
        this.visible = false;
        this._hole = new hole_1.Hole();
        this.__myID = NewHoleComponent_1.debug_id;
        NewHoleComponent_1.debug_id = NewHoleComponent_1.debug_id + 1;
        console.log("created new NewHoleComponent: " + this.__myID);
        this.__changeDetctRef = ref;
    }
    NewHoleComponent.prototype.showModal = function () {
        var _this = this;
        this._hole = new hole_1.Hole();
        this.visible = true;
        this.visibleAnimate = true;
        setTimeout(function () { return _this.__visibleAnimate = true; }, 100);
        this.__changeDetctRef.detectChanges();
    };
    NewHoleComponent.prototype.hideModal = function () {
        var _this = this;
        //need to clean up this._hole here
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.__changeDetctRef.detectChanges();
    };
    NewHoleComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hideModal();
        }
    };
    NewHoleComponent.prototype.createHoleOnDB = function () {
        this._hole._id = "new";
        this._hole.lnglt = this.__latlng;
        this._hole.bow;
        //need to figure out angular2 posting
    };
    return NewHoleComponent;
}());
NewHoleComponent.debug_id = 0;
NewHoleComponent = NewHoleComponent_1 = __decorate([
    core_1.Component({
        selector: 'new-hole',
        templateUrl: './NewHoleModal.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], NewHoleComponent);
exports.NewHoleComponent = NewHoleComponent;
;
var NewHoleComponent_1;
//# sourceMappingURL=new-hole.component.js.map