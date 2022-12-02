import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "../../core-data-table/app-date.pipe";
export class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.replace('-', '').split(' ');
            console.log(t);
            return `<span class="">
                    <span class="hour">${t[0]}</span><br>
                    <span class="minute">${t[1]}</span>
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour"></span><br>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
}
DateFormatComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DateFormatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateFormatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: DateFormatComponent, selector: "date-format", inputs: { date: "date", lang: "lang", timezone: "timezone" }, usesOnChanges: true, ngImport: i0, template: "<span matTooltip=\"{{(date | appDate : lang)}}\" [innerHTML]=\"run((date| appDate : lang))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"], dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "pipe", type: i2.AppDatePipe, name: "appDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DateFormatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-format', template: "<span matTooltip=\"{{(date | appDate : lang)}}\" [innerHTML]=\"run((date| appDate : lang))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { date: [{
                type: Input
            }], lang: [{
                type: Input
            }], timezone: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxtQkFBbUI7SUFNNUI7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBSWxDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE9BQVE7eUNBQ3FCLENBQUMsQ0FBQyxDQUFDLENBQUM7MkNBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTzs7O3dCQUdLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBRWxDLENBQUM7O2dIQTlCUSxtQkFBbUI7b0dBQW5CLG1CQUFtQixzSUNQaEMsd0dBQ0E7MkZETWEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNJLGFBQWE7MEVBS2QsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGF0ZS1mb3JtYXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWZvcm1hdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGRhdGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGltZXpvbmUgOiBzdHJpbmcgPSAnZnInO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCB0OiBzdHJpbmdbXSA9IGRhdGUucmVwbGFjZSgnLScsICcnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICByZXR1cm4gIGA8c3BhbiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4ke3RbMF19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW51dGVcIj4ke3RbMV19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRpbWUtYmFkZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3VyXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW51dGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICB9XG5cbn1cbiIsIjxzcGFuIG1hdFRvb2x0aXA9XCJ7eyhkYXRlIHwgYXBwRGF0ZSA6IGxhbmcpfX1cIiBbaW5uZXJIVE1MXT1cInJ1bigoZGF0ZXwgYXBwRGF0ZSA6IGxhbmcpKVwiPjwvc3Bhbj5cbiJdfQ==