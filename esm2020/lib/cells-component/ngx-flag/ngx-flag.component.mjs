import { Component, Input } from '@angular/core';
import * as database from './ngx-flags.database';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a1) { return ["ngx-flag", a1]; };
function NgxFlagsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r0.style);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r0.class));
} }
export class NgxFlagsComponent {
    constructor() {
        this.size = 48;
        this.class = '';
        this.database = database.db;
        this.countryCode = '';
    }
    ngOnChanges(changes) {
        this.setImage();
    }
    setImage() {
        this.imageUrl = `assets/flags/${this.getFlag(this.getCode())}.svg`;
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: `10px`,
            height: '10px',
            marginRight: '5px',
            backgroundImage: `url("${this.imageUrl}")`,
        };
    }
    getSize() {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    }
    getFormat() {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    }
    getCode() {
        return this.country.toLowerCase();
    }
    getFlag(code) {
        return this.database[code.toLowerCase()];
    }
}
NgxFlagsComponent.ɵfac = function NgxFlagsComponent_Factory(t) { return new (t || NgxFlagsComponent)(); };
NgxFlagsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxFlagsComponent, selectors: [["flag"]], inputs: { country: "country", format: "format", size: "size", class: "class" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "style", "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function NgxFlagsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxFlagsComponent_div_0_Template, 1, 5, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.country);
    } }, dependencies: [i1.NgClass, i1.NgIf], styles: [".ngx-flag[_ngcontent-%COMP%]{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFlagsComponent, [{
        type: Component,
        args: [{ selector: 'flag', template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`, styles: [".ngx-flag{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover}\n"] }]
    }], function () { return []; }, { country: [{
            type: Input
        }], format: [{
            type: Input
        }], size: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
var FORMAT;
(function (FORMAT) {
    FORMAT["NONE"] = "none";
    FORMAT["ROUND"] = "round";
    FORMAT["SQUARE"] = "square";
})(FORMAT || (FORMAT = {}));
var SIZE;
(function (SIZE) {
    SIZE[SIZE["XXS"] = 8] = "XXS";
    SIZE[SIZE["XS"] = 16] = "XS";
    SIZE[SIZE["S"] = 24] = "S";
    SIZE[SIZE["M"] = 32] = "M";
    SIZE[SIZE["L"] = 48] = "L";
    SIZE[SIZE["XL"] = 64] = "XL";
    SIZE[SIZE["XXL"] = 96] = "XXL";
})(SIZE || (SIZE = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbmd4LWZsYWcvbmd4LWZsYWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEtBQUssUUFBUSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQUlwQyx5QkFBMEY7OztJQUFoRSwyQkFBb0I7SUFBQyxrRUFBb0M7O0FBWWhHLE1BQU0sT0FBTyxpQkFBaUI7SUFXNUI7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixlQUFlLEVBQUUsUUFBUSxJQUFJLENBQUMsUUFBUSxJQUFJO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOztrRkExQ1UsaUJBQWlCO29FQUFqQixpQkFBaUI7UUFaakIsa0VBQTBGOztRQUFwRixrQ0FBa0I7O3VGQVl4QixpQkFBaUI7Y0FkN0IsU0FBUzsyQkFDRSxNQUFNLFlBQ04sNEZBQTRGO3NDQWE3RixPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7O0FBeUNSLElBQUssTUFJSjtBQUpELFdBQUssTUFBTTtJQUNULHVCQUFhLENBQUE7SUFDYix5QkFBZSxDQUFBO0lBQ2YsMkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpJLE1BQU0sS0FBTixNQUFNLFFBSVY7QUFFRCxJQUFLLElBUUo7QUFSRCxXQUFLLElBQUk7SUFDUCw2QkFBTyxDQUFBO0lBQ1AsNEJBQU8sQ0FBQTtJQUNQLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sMEJBQU0sQ0FBQTtJQUNOLDRCQUFPLENBQUE7SUFDUCw4QkFBUSxDQUFBO0FBQ1YsQ0FBQyxFQVJJLElBQUksS0FBSixJQUFJLFFBUVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vbmd4LWZsYWdzLmRhdGFiYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxhZycsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cInRoaXMuY291bnRyeVwiIFtzdHlsZV09XCJ0aGlzLnN0eWxlXCIgW25nQ2xhc3NdPVwiWyduZ3gtZmxhZycsIHRoaXMuY2xhc3NdXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLm5neC1mbGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RmxhZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBhbnkgPSA0ODtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xuICBwdWJsaWMgc3R5bGU7XG4gIHB1YmxpYyBkYXRhYmFzZSA9IGRhdGFiYXNlLmRiO1xuICBwdWJsaWMgY291bnRyeUNvZGU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgc2V0SW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbWFnZVVybCA9IGBhc3NldHMvZmxhZ3MvJHt0aGlzLmdldEZsYWcodGhpcy5nZXRDb2RlKCkpfS5zdmdgO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuZ2V0Rm9ybWF0KCkgPT0gRk9STUFULlJPVU5EID8gJzk5OTlweCcgOiAnMCUnLFxuICAgICAgd2lkdGg6IGAxMHB4YCxcbiAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHt0aGlzLmltYWdlVXJsfVwiKWAsXG4gICAgfTtcbiAgfVxuXG4gIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXNOYU4oK3RoaXMuc2l6ZSkgPyArU0laRVt0aGlzLnNpemUudG9VcHBlckNhc2UoKV0gOiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXRGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdC50b0xvd2VyQ2FzZSgpIDogRk9STUFULk5PTkU7XG4gIH1cblxuICBnZXRDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZ2V0RmxhZyhjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW2NvZGUudG9Mb3dlckNhc2UoKV07XG4gIH1cbn1cblxuZW51bSBGT1JNQVQge1xuICBOT05FID0gJ25vbmUnLFxuICBST1VORCA9ICdyb3VuZCcsXG4gIFNRVUFSRSA9ICdzcXVhcmUnLFxufVxuXG5lbnVtIFNJWkUge1xuICBYWFMgPSA4LFxuICBYUyA9IDE2LFxuICBTID0gMjQsXG4gIE0gPSAzMixcbiAgTCA9IDQ4LFxuICBYTCA9IDY0LFxuICBYWEwgPSA5Nixcbn0iXX0=