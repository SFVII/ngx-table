import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusComponent, selectors: [["status"]], inputs: { label: "label" }, decls: 2, vars: 5, consts: [[3, "matTooltip"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("status status-", ctx.label == null ? null : ctx.label.toLowerCase(), "");
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, dependencies: [i1.MatTooltip], styles: [".status[_ngcontent-%COMP%]{background:#F6544C;border-radius:1000px;font-style:normal;font-weight:600;font-size:16px;line-height:125%;padding:8px 19px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusComponent, [{
        type: Component,
        args: [{ selector: 'status', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label?.toLowerCase()}}\">\n    {{ label }}\n</span>", styles: [".status{background:#F6544C;border-radius:1000px;font-style:normal;font-weight:600;font-size:16px;line-height:125%;padding:8px 19px}\n"] }]
    }], function () { return []; }, { label: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBRzFCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs4RUFOVSxlQUFlO2tFQUFmLGVBQWU7UUNQNUIsK0JBQThFO1FBQzFFLFlBQ0o7UUFBQSxpQkFBTzs7UUFGd0IsbUdBQThDO1FBQXZFLGlEQUF3QjtRQUMxQixlQUNKO1FBREksMkNBQ0o7O3VGREthLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxRQUFRO3NDQUtULEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGF0dXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhdHVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHNwYW4gbWF0VG9vbHRpcD1cInt7IGxhYmVsIH19XCIgY2xhc3M9XCJzdGF0dXMgc3RhdHVzLXt7bGFiZWw/LnRvTG93ZXJDYXNlKCl9fVwiPlxuICAgIHt7IGxhYmVsIH19XG48L3NwYW4+Il19