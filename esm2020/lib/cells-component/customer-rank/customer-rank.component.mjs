import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "../../translate.service";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
export class CustomerRankComponent {
    constructor(changeDetectorRefs, service, local) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.local = local;
        this.notSpecified = false;
        this.tooltip = '';
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        this.tooltip = this.local.translate(this.lang, 'CONTRACT_TYPE');
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    // this.type = 'Classic'.toUpperCase();
                    this.type = this.local.translate(this.lang, 'NS');
                    this.tooltip += ' : ' + this.local.translate(this.lang, 'NOT_SPECIFIED');
                    this.notSpecified = true;
                    // this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                    this.tooltip += ' : ' + this.type;
                }
            }
        }
        else {
            // this.type = 'Classic'.toUpperCase();
            // this.typeClass = 'default';
            this.type = this.local.translate(this.lang, 'NS');
            this.notSpecified = true;
            this.tooltip += ' : ' + this.local.translate(this.lang, 'NOT_SPECIFIED');
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
CustomerRankComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CustomerRankComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
CustomerRankComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: CustomerRankComponent, selector: "app-customer-rank", inputs: { type: "type", lang: "lang" }, usesOnChanges: true, ngImport: i0, template: "<span *ngIf=\"!notSpecified\" [class]=\"typeClass\" matTooltip=\"{{tooltip}}\">\n  <span>{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n\n<span *ngIf=\"notSpecified\" class=\"default\" matTooltip=\"{{tooltip}}\">\n  <span>{{type}}</span>\n</span>", styles: [".gold{font-size:12px;font-weight:700;color:gold}.silver{font-size:12px;font-weight:700;color:silver}.bronze{font-weight:700;font-size:12px;color:#cd7f32}.default{font-weight:700;font-size:12px;color:#000}\n"], dependencies: [{ kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CustomerRankComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-customer-rank', template: "<span *ngIf=\"!notSpecified\" [class]=\"typeClass\" matTooltip=\"{{tooltip}}\">\n  <span>{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n\n<span *ngIf=\"notSpecified\" class=\"default\" matTooltip=\"{{tooltip}}\">\n  <span>{{type}}</span>\n</span>", styles: [".gold{font-size:12px;font-weight:700;color:gold}.silver{font-size:12px;font-weight:700;color:silver}.bronze{font-weight:700;font-size:12px;color:#cd7f32}.default{font-weight:700;font-size:12px;color:#000}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }, { type: i2.TranslateService }]; }, propDecorators: { type: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFTcEcsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUNVLGtCQUFxQyxFQUNyQyxPQUFxQixFQUNyQixLQUF1QjtRQUZ2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFOakMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQU9iLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFNBQVMsRUFBRTtvQkFDaEQsdUNBQXVDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7b0JBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QiwwQ0FBMEM7aUJBQzNDO3FCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO29CQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsdUNBQXVDO1lBQ3ZDLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztTQUMxRTtRQUdEOzs7Ozs7Ozs7Ozs7O29EQWE0QztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOztrSEE3RFUscUJBQXFCO3NHQUFyQixxQkFBcUIsc0hDVGxDLDhSQU1POzJGREdNLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxtQkFBbUI7a0tBS3BCLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1yYW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgcHVibGljIHR5cGVDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cbiAgbm90U3BlY2lmaWVkID0gZmFsc2U7XG4gIHRvb2x0aXAgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYsIFxuICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9jYWw6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IHN0cmluZ1tdID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuY3VzdG9tZXJSYW5rIHx8IFsnZ29sZCcsICdzaWx2ZXInLCAnYnJvbnplJywgJ2RlZmF1bHQnXTtcbiAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLmxvY2FsLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDT05UUkFDVF9UWVBFJyk7XG4gICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgdGhpcy5fdHlwZSA9ICh0aGlzLnR5cGUgfHwgJycpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgICAgZm9yIChsZXQgYyBvZiBjb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgLy8gdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50eXBlID0gdGhpcy5sb2NhbC50cmFuc2xhdGUodGhpcy5sYW5nLCAnTlMnKTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAgKz0gJyA6ICcgKyB0aGlzLmxvY2FsLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT1RfU1BFQ0lGSUVEJyk7XG4gICAgICAgICAgdGhpcy5ub3RTcGVjaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIHRoaXMudHlwZUNsYXNzID0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSBjLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50b29sdGlwICs9ICcgOiAnICsgdGhpcy50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgLy8gdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCc7XG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLmxvY2FsLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOUycpO1xuICAgICAgdGhpcy5ub3RTcGVjaWZpZWQgPSB0cnVlO1xuICAgICAgdGhpcy50b29sdGlwICs9ICcgOiAnICsgdGhpcy5sb2NhbC50cmFuc2xhdGUodGhpcy5sYW5nLCAnTk9UX1NQRUNJRklFRCcpO1xuICAgIH1cblxuXG4gICAgLyogIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdnb2xkJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdnb2xkJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdzaWx2ZXInKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ3NpbHZlcidcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnYnJvbnplJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdicm9uemUnXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTsqL1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxufVxuIiwiPHNwYW4gKm5nSWY9XCIhbm90U3BlY2lmaWVkXCIgW2NsYXNzXT1cInR5cGVDbGFzc1wiIG1hdFRvb2x0aXA9XCJ7e3Rvb2x0aXB9fVwiPlxuICA8c3Bhbj57e3R5cGV9fTwvc3Bhbj48bWF0LWljb24gKm5nSWY9XCJ0eXBlICE9PSAnQ0xBU1NJQydcIj5zdGFyX3JhdGU8L21hdC1pY29uPlxuPC9zcGFuPlxuXG48c3BhbiAqbmdJZj1cIm5vdFNwZWNpZmllZFwiIGNsYXNzPVwiZGVmYXVsdFwiIG1hdFRvb2x0aXA9XCJ7e3Rvb2x0aXB9fVwiPlxuICA8c3Bhbj57e3R5cGV9fTwvc3Bhbj5cbjwvc3Bhbj4iXX0=