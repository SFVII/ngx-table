import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class StatusIconComponent {
    constructor() { }
    ngOnInit() {
        switch (this.label.toLocaleLowerCase()) {
            case 'closed':
            case 'cloturé':
                this.src = '/assets/icons/status/green-dot.svg';
                break;
            default:
                this.src = '/assets/icons/status/yellow-dot.svg';
                break;
        }
    }
}
StatusIconComponent.ɵfac = function StatusIconComponent_Factory(t) { return new (t || StatusIconComponent)(); };
StatusIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusIconComponent, selectors: [["status-icon"]], inputs: { label: "label" }, decls: 3, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function StatusIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("status status-", ctx.label.toLowerCase(), "");
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("src", ctx.src, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, directives: [i1.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusIconComponent, [{
        type: Component,
        args: [{ selector: 'status-icon', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""] }]
    }], function () { return []; }, { label: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN0QyxLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFBO2dCQUNqRCxNQUFNO1lBQ047Z0JBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztnQkFDbkQsTUFBTTtTQUNQO0lBQ0gsQ0FBQzs7c0ZBakJVLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDUGhDLCtCQUE2RTtRQUN6RSx5QkFBcUI7UUFDckIsWUFDSjtRQUFBLGlCQUFPOztRQUh3Qix3RUFBNkM7UUFBdEUsaURBQXdCO1FBQ3JCLGVBQWU7UUFBZiwwREFBZTtRQUNwQixlQUNKO1FBREksMkNBQ0o7O3VGRElhLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGFBQWE7c0NBS2QsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0YXR1cy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXR1cy1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhdHVzLWljb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBcbiAgc3JjOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAnY2xvc2VkJzpcbiAgICAgIGNhc2UgJ2Nsb3R1csOpJzpcbiAgICAgICAgdGhpcy5zcmMgPSAnL2Fzc2V0cy9pY29ucy9zdGF0dXMvZ3JlZW4tZG90LnN2ZydcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogXG4gICAgICAgIHRoaXMuc3JjID0gJy9hc3NldHMvaWNvbnMvc3RhdHVzL3llbGxvdy1kb3Quc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8c3BhbiBtYXRUb29sdGlwPVwie3sgbGFiZWwgfX1cIiBjbGFzcz1cInN0YXR1cyBzdGF0dXMte3tsYWJlbC50b0xvd2VyQ2FzZSgpfX1cIj5cbiAgICA8aW1nIHNyYz1cInt7IHNyYyB9fVwiPlxuICAgIHt7IGxhYmVsIH19XG48L3NwYW4+Il19