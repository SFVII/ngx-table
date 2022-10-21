import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/material/tooltip";
export class GenderComponent {
    constructor(service) {
        this.service = service;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.gender;
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = params.none; //"/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
GenderComponent.ɵfac = function GenderComponent_Factory(t) { return new (t || GenderComponent)(i0.ɵɵdirectiveInject(i1.TableService)); };
GenderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GenderComponent, selectors: [["app-gender"]], inputs: { type: "type", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function GenderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
    } }, dependencies: [i2.MatTooltip] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GenderComponent, [{
        type: Component,
        args: [{ selector: 'app-gender', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n" }]
    }], function () { return [{ type: i1.TableService }]; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L2dlbmRlci9nZW5kZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFRakYsTUFBTSxPQUFPLGVBQWU7SUFNeEIsWUFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUZuQyxRQUFHLEdBQVEsRUFBRSxDQUFBO0lBR3BCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUV0RCxNQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUU5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkIsQ0FBQzs7OEVBM0JRLGVBQWU7a0VBQWYsZUFBZTtRQ1I1QiwrQkFBMEM7UUFDdEMseUJBQWdDO1FBQ3BDLGlCQUFPOztRQUZELHNCQUFhO1FBQUMsZ0RBQXFCO1FBQ25CLGVBQWE7UUFBYixzQkFBYTtRQUExQixnREFBWTs7dUZET1IsZUFBZTtjQUwzQixTQUFTOzJCQUNJLFlBQVk7K0RBS2IsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZ2VuZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ2VuZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9nZW5kZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3M6IGFueSA9IHt9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2UgOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIGNvbnN0IHBhcmFtczogYW55ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuZ2VuZGVyO1xuXG4gICAgICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXMubm9uZTsgLy9cIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgICAgIHRoaXMubmdPbkluaXQoKVxuICAgIH1cblxufVxuIiwiPHNwYW4gW3N0eWxlXT1cImNzc1wiIG1hdFRvb2x0aXA9XCJ7e3R5cGV9fVwiPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCIgW3N0eWxlXT1cImNzc1wiPlxuPC9zcGFuPlxuIl19