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
DateFormatComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DateFormatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateFormatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: DateFormatComponent, selector: "date-format", inputs: { date: "date", timezone: "timezone" }, usesOnChanges: true, ngImport: i0, template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"], dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "pipe", type: i2.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DateFormatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-format', template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { date: [{
                type: Input
            }], timezone: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxtQkFBbUI7SUFLNUI7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBSWxDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsT0FBUTt5Q0FDcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzsrQ0FDRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixDQUFDO1NBQ2hCO2FBQU07WUFDSCxPQUFPOzs7d0JBR0ssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFFbEMsQ0FBQzs7Z0hBNUJRLG1CQUFtQjtvR0FBbkIsbUJBQW1CLHdIQ1BoQyw2SEFDQTsyRkRNYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0ksYUFBYTswRUFLZCxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGUtZm9ybWF0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBkYXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGltZXpvbmUgOiBzdHJpbmcgPSAnZnInO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCB0OiBzdHJpbmdbXSA9IGRhdGUucmVwbGFjZSgnLCcsICcnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgcmV0dXJuICBgPHNwYW4gY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3VyXCI+JHt0WzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwibWludXRlXCI+JHt0WzFdfTwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJ0aW1lLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91clwiPi08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgfVxuXG59XG4iLCI8c3BhbiBtYXRUb29sdGlwPVwie3soZGF0ZXwgZGF0ZSA6ICdzaG9ydCcgOiB0aW1lem9uZSl9fVwiIFtpbm5lckhUTUxdPVwicnVuKChkYXRlfCBkYXRlIDogJ3Nob3J0JyA6IHRpbWV6b25lKSlcIj48L3NwYW4+XG4iXX0=