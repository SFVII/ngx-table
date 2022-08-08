import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DoubleLineComponent {
    constructor() {
        this.line1 = '';
        this.line2 = '';
    }
    ngOnInit() {
    }
}
DoubleLineComponent.ɵfac = function DoubleLineComponent_Factory(t) { return new (t || DoubleLineComponent)(); };
DoubleLineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DoubleLineComponent, selectors: [["double-line"]], inputs: { line1: "line1", line2: "line2" }, decls: 4, vars: 2, consts: [[1, "line-1"], [1, "line-2"]], template: function DoubleLineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.line1, "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.line2, "\n");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleLineComponent, [{
        type: Component,
        args: [{ selector: 'double-line', template: "<div class=\"line-1\">\n    {{ line1 }}\n</div>\n\n<div class=\"line-2\">\n    {{ line2 }}\n</div>", styles: [""] }]
    }], function () { return []; }, { line1: [{
            type: Input
        }], line2: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZG91YmxlLWxpbmUvZG91YmxlLWxpbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZG91YmxlLWxpbmUvZG91YmxlLWxpbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7UUFIUyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztzRkFQVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1BoQyw4QkFBb0I7UUFDaEIsWUFDSjtRQUFBLGlCQUFNO1FBRU4sOEJBQW9CO1FBQ2hCLFlBQ0o7UUFBQSxpQkFBTTs7UUFMRixlQUNKO1FBREksMkNBQ0o7UUFHSSxlQUNKO1FBREksMkNBQ0o7O3VGRENhLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGFBQWE7c0NBS2QsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvdWJsZS1saW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvdWJsZS1saW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG91YmxlLWxpbmUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvdWJsZUxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaW5lMTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGxpbmUyOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJsaW5lLTFcIj5cbiAgICB7eyBsaW5lMSB9fVxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJsaW5lLTJcIj5cbiAgICB7eyBsaW5lMiB9fVxuPC9kaXY+Il19