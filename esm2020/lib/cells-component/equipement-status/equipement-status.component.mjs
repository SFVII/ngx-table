import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "../../translate.service";
import * as i3 from "@angular/material/tooltip";
export class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service, translate) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.translate = translate;
        this.css = {};
        this.status = '';
        // this.css.maxWidth = String((this.size || 22)) + 'px';
        // this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        switch (clean) {
            case 'actif':
                this.status = this.translate.translate(this.lang, 'ACTIVE');
                break;
            case 'spare':
                this.status = 'Spare';
                break;
            case '':
                this.status = '';
                break;
            default:
                this.status = this.translate.translate(this.lang, 'KO');
                break;
        }
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementStatusComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
EquipementStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EquipementStatusComponent, selector: "app-equipement-status", inputs: { type: "type", size: "size", lang: "lang" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n    {{ status }}\n</span>", styles: [""], directives: [{ type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-equipement-status', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n    {{ status }}\n</span>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }, { type: i2.TranslateService }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTcEcsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQyw0QkFBNEI7SUFFNUIsWUFBb0Isa0JBQXFDLEVBQVUsT0FBcUIsRUFDOUUsU0FBMkI7UUFEakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDOUUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFSOUIsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdwQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBTVYsd0RBQXdEO1FBQ3hELHlEQUF5RDtRQUN6RCwyREFBMkQ7SUFDN0QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEQsTUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7V0FPN0Q7UUFDSCxNQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUQsTUFBTTtZQUNOLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsTUFBTTtZQUNOLEtBQUssRUFBRTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNOO2dCQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtTQUNQO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7O3VIQXZEVSx5QkFBeUI7MkdBQXpCLHlCQUF5Qix3SUNUdEMsaUpBR087NEZETU0seUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLHVCQUF1QjtrS0FLeEIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1lcXVpcGVtZW50LXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gIHB1YmxpYyBjc3M6IGFueSA9IHt9XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcblxuICBzdGF0dXMgPSAnJztcblxuICAvLyBwcml2YXRlIHBhcmFtczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSwgXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAvLyB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIC8vIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIC8vdGhpcy5wYXJhbXMgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5lcXVpcG1lbnRTdGF0dXM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5lcXVpcG1lbnRTdGF0dXM7IC8qe1xuICAgICAgXCJhY3RpZlwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgXCJvdWlcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcbiAgICAgIFwiaHNcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9IUy5wbmdcIixcbiAgICAgIFwiaW5hY3RpZlwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2luYWN0aWYucG5nXCIsXG4gICAgICBcIm5vblwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2luYWN0aWYucG5nXCIsXG4gICAgICBcInNwYXJlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvc3BhcmUucG5nXCIsXG4gICAgfSovXG4gICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICBzd2l0Y2ggKGNsZWFuKSB7XG4gICAgICBjYXNlICdhY3RpZic6XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0FDVElWRScpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGFyZSc6XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ1NwYXJlJztcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJzpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnS08nKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xuICAgICAgdGhpcy5pY29uID0gcGFyYW1zW2NsZWFuXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pY29uID0gcGFyYW1zWydkZWZhdWx0J107XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuIiwiPHNwYW4gW3N0eWxlXT1cImNzc1wiIG1hdFRvb2x0aXA9XCJ7e3R5cGV9fVwiPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCIgW3N0eWxlXT1cImNzc1wiIGNsYXNzPVwiZXF1aXBlbWVudC1zdGF0dXNcIj5cbiAgICB7eyBzdGF0dXMgfX1cbjwvc3Bhbj4iXX0=