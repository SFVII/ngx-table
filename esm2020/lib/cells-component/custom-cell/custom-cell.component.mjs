import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CustomCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.subTitle);
} }
export class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCellComponent.ɵfac = function CustomCellComponent_Factory(t) { return new (t || CustomCellComponent)(); };
CustomCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomCellComponent, selectors: [["lib-custom-cell"]], inputs: { title: "title", subTitle: "subTitle", class: "class" }, decls: 4, vars: 4, consts: [[1, "custom-cell"], [4, "ngIf"]], template: function CustomCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CustomCellComponent_span_3_Template, 2, 1, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.class);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !!ctx.subTitle);
    } }, directives: [i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomCellComponent, [{
        type: Component,
        args: [{ selector: 'lib-custom-cell', template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>", styles: [""] }]
    }], function () { return []; }, { title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7SUNFckQsNEJBQXlCO0lBQUEsWUFBWTtJQUFBLGlCQUFPOzs7SUFBbkIsZUFBWTtJQUFaLHFDQUFZOztBREt6QyxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztzRkFQVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1BoQyw4QkFBeUMsV0FBQTtRQUMvQixZQUFTO1FBQUEsaUJBQU87UUFDdEIsc0VBQTRDO1FBQ2hELGlCQUFNOztRQUhtQix3QkFBZTtRQUM5QixlQUFTO1FBQVQsK0JBQVM7UUFDUixlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGREtkLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGlCQUFpQjtzQ0FLbEIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY3VzdG9tLWNlbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tY2VsbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImN1c3RvbS1jZWxsXCIgW2NsYXNzXT1cImNsYXNzXCI+XG4gICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiISFzdWJUaXRsZVwiPnt7c3ViVGl0bGV9fTwvc3Bhbj5cbjwvZGl2PiJdfQ==