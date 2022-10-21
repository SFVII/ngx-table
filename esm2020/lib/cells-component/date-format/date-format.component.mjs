import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
export class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.replace(',', '').split(' ');
            return `<span class="">
                    <span class="hour">${t[0]}</span>
                    <!--<span class="minute">${t[1]}</span>-->
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour">-</span>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
}
DateFormatComponent.ɵfac = function DateFormatComponent_Factory(t) { return new (t || DateFormatComponent)(); };
DateFormatComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateFormatComponent, selectors: [["date-format"]], inputs: { date: "date", timezone: "timezone" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "matTooltip", "innerHTML"]], template: function DateFormatComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
        i0.ɵɵpipe(1, "date");
        i0.ɵɵpipe(2, "date");
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", i0.ɵɵpipeBind3(1, 2, ctx.date, "short", ctx.timezone));
        i0.ɵɵproperty("innerHTML", ctx.run(i0.ɵɵpipeBind3(2, 6, ctx.date, "short", ctx.timezone)), i0.ɵɵsanitizeHtml);
    } }, dependencies: [i1.MatTooltip, i2.DatePipe], styles: ["span.time-badge[_ngcontent-%COMP%]{display:block;text-align:center!important;padding-right:25px}span.time-badge[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{display:block;font-weight:900;font-size:12px}span.time-badge[_ngcontent-%COMP%]   .minute[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFormatComponent, [{
        type: Component,
        args: [{ selector: 'date-format', template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
    }], function () { return []; }, { date: [{
            type: Input
        }], timezone: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxtQkFBbUI7SUFLNUI7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBSWxDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsT0FBUTt5Q0FDcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzsrQ0FDRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixDQUFDO1NBQ2hCO2FBQU07WUFDSCxPQUFPOzs7d0JBR0ssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFFbEMsQ0FBQzs7c0ZBNUJRLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDUGhDLDBCQUFxSDs7OztRQUEvRyw2RkFBa0Q7UUFBQyw2R0FBb0Q7O3VGRE9oRyxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxhQUFhO3NDQUtkLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRlLWZvcm1hdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLWZvcm1hdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgZGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcnVuKGRhdGU6c3RyaW5nKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgdDogc3RyaW5nW10gPSBkYXRlLnJlcGxhY2UoJywnLCAnJykuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91clwiPiR7dFswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPiR7dFsxXX08L3NwYW4+LS0+XG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgIH1cblxufVxuIiwiPHNwYW4gbWF0VG9vbHRpcD1cInt7KGRhdGV8IGRhdGUgOiAnc2hvcnQnIDogdGltZXpvbmUpfX1cIiBbaW5uZXJIVE1MXT1cInJ1bigoZGF0ZXwgZGF0ZSA6ICdzaG9ydCcgOiB0aW1lem9uZSkpXCI+PC9zcGFuPlxuIl19