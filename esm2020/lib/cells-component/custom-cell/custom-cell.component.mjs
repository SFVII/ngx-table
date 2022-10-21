import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../core-data-table/app-date.pipe";
function CustomCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "appDate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.subTitleFormat === "date" ? i0.ɵɵpipeBind2(2, 1, ctx_r0.subTitle, ctx_r0.lang) : ctx_r0.subTitle);
} }
export class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCellComponent.ɵfac = function CustomCellComponent_Factory(t) { return new (t || CustomCellComponent)(); };
CustomCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomCellComponent, selectors: [["lib-custom-cell"]], inputs: { title: "title", subTitle: "subTitle", class: "class", subTitleFormat: "subTitleFormat", lang: "lang" }, decls: 4, vars: 4, consts: [[1, "custom-cell"], [4, "ngIf"]], template: function CustomCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CustomCellComponent_span_3_Template, 3, 4, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.class);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !!ctx.subTitle);
    } }, dependencies: [i1.NgIf, i2.AppDatePipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomCellComponent, [{
        type: Component,
        args: [{ selector: 'lib-custom-cell', template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{ subTitleFormat ==='date' ? (subTitle | appDate : lang) : subTitle}}</span>\n</div>" }]
    }], function () { return []; }, { title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], class: [{
            type: Input
        }], subTitleFormat: [{
            type: Input
        }], lang: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRXJELDRCQUF5QjtJQUFBLFlBQXNFOztJQUFBLGlCQUFPOzs7SUFBN0UsZUFBc0U7SUFBdEUsNkhBQXNFOztBREtuRyxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztzRkFUVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1BoQyw4QkFBeUMsV0FBQTtRQUMvQixZQUFTO1FBQUEsaUJBQU87UUFDdEIsc0VBQXNHO1FBQzFHLGlCQUFNOztRQUhtQix3QkFBZTtRQUM5QixlQUFTO1FBQVQsK0JBQVM7UUFDUixlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGREtkLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGlCQUFpQjtzQ0FLbEIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWN1c3RvbS1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWNlbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJUaXRsZUZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImN1c3RvbS1jZWxsXCIgW2NsYXNzXT1cImNsYXNzXCI+XG4gICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiISFzdWJUaXRsZVwiPnt7IHN1YlRpdGxlRm9ybWF0ID09PSdkYXRlJyA/IChzdWJUaXRsZSB8IGFwcERhdGUgOiBsYW5nKSA6IHN1YlRpdGxlfX08L3NwYW4+XG48L2Rpdj4iXX0=