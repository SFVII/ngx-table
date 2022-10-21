import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "../png-icon/png-icon.component";
import * as i3 from "@angular/material/tooltip";
export class OriginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const list = this.service.settingConfig.origin;
        if (this.icon) {
            const flter = list.filter((e) => {
                if (e.label)
                    return this.icon.includes(e.label);
                else
                    return false;
            });
            this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
OriginComponent.ɵfac = function OriginComponent_Factory(t) { return new (t || OriginComponent)(i0.ɵɵdirectiveInject(i1.TableService)); };
OriginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OriginComponent, selectors: [["icon-origin"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[2, "margin", "auto", "text-align", "center", 3, "matTooltip", "src"]], template: function OriginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "png-icon", 0);
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
        i0.ɵɵproperty("src", ctx.iconSrc);
    } }, dependencies: [i2.PngIconComponent, i3.MatTooltip] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OriginComponent, [{
        type: Component,
        args: [{ selector: 'icon-origin', template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>" }]
    }], function () { return [{ type: i1.TableService }]; }, { icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L29yaWdpbi9vcmlnaW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUWpGLE1BQU0sT0FBTyxlQUFlO0lBSXhCLFlBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFDeEMsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsQ0FBQyxLQUFLO29CQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQkFDM0MsT0FBTyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUU5RTtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OzhFQXJCUSxlQUFlO2tFQUFmLGVBQWU7UUNSNUIsOEJBQStHOztRQUEzRCxnREFBMEI7UUFBQyxpQ0FBb0I7O3VGRFF0RixlQUFlO2NBTDNCLFNBQVM7MkJBQ0ksYUFBYTsrREFLZCxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tICcuLi8uLi90YWJsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpY29uLW9yaWdpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL29yaWdpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3JpZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JpZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgaWNvblNyYzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IFRhYmxlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcub3JpZ2luO1xuICAgICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgICAgICBjb25zdCBmbHRlciA9IGxpc3QuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5sYWJlbCkgcmV0dXJuIHRoaXMuaWNvbi5pbmNsdWRlcyhlLmxhYmVsKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gZmx0ZXIgJiYgZmx0ZXIubGVuZ3RoICYmIGZsdGVyWzBdLmRhdGEgPyBmbHRlclswXS5kYXRhIDogJyc7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIiwiPHBuZy1pY29uIHN0eWxlPVwibWFyZ2luIDogYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyXCIgbWF0VG9vbHRpcD1cInt7dGhpcy5pY29ufX1cIiBbc3JjXT1cInRoaXMuaWNvblNyY1wiPjwvcG5nLWljb24+Il19