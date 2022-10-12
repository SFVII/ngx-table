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
        // this.css.maxWidth = String((this.size || 22)) + 'px';
        // this.css.maxHeight = String((this.size || 22)) + 'px';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTcEcsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQyw0QkFBNEI7SUFFNUIsWUFBb0Isa0JBQXFDLEVBQVUsT0FBcUIsRUFDOUUsU0FBMkI7UUFEakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDOUUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFSOUIsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdwQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBTVYsd0RBQXdEO1FBQ3hELHlEQUF5RDtRQUN6RCwyREFBMkQ7SUFDN0QsQ0FBQztJQUVELFFBQVE7UUFDTix3REFBd0Q7UUFDeEQseURBQXlEO1FBRXpELE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7O1dBTzdEO1FBQ0gsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzlELE1BQU07WUFDTixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLE1BQU07WUFDTixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07WUFDTjtnQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFELE1BQU07U0FDUDtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzt1SEF2RFUseUJBQXlCOzJHQUF6Qix5QkFBeUIsd0lDVHRDLGlKQUdPOzRGRE1NLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSx1QkFBdUI7a0tBS3hCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC1zdGF0dXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG5cbiAgc3RhdHVzID0gJyc7XG5cbiAgLy8gcHJpdmF0ZSBwYXJhbXM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgLy8gdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICAvLyB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICAvL3RoaXMucGFyYW1zID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuZXF1aXBtZW50U3RhdHVzO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICAvLyB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcblxuICAgIGNvbnN0IHBhcmFtczogYW55ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuZXF1aXBtZW50U3RhdHVzOyAvKntcbiAgICAgIFwiYWN0aWZcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcbiAgICAgIFwib3VpXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICBcImhzXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvSFMucG5nXCIsXG4gICAgICBcImluYWN0aWZcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmFjdGlmLnBuZ1wiLFxuICAgICAgXCJub25cIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmFjdGlmLnBuZ1wiLFxuICAgICAgXCJzcGFyZVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL3NwYXJlLnBuZ1wiLFxuICAgIH0qL1xuICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgc3dpdGNoIChjbGVhbikge1xuICAgICAgY2FzZSAnYWN0aWYnOlxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdBQ1RJVkUnKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3BhcmUnOlxuICAgICAgICB0aGlzLnN0YXR1cyA9ICdTcGFyZSc7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJyc6XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0tPJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHBhcmFtc1tjbGVhbl0pIHtcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tjbGVhbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1snZGVmYXVsdCddO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbn1cbiIsIjxzcGFuIFtzdHlsZV09XCJjc3NcIiBtYXRUb29sdGlwPVwie3t0eXBlfX1cIj5cbiAgICA8aW1nIFtzcmNdPVwiaWNvblwiIFtzdHlsZV09XCJjc3NcIiBjbGFzcz1cImVxdWlwZW1lbnQtc3RhdHVzXCI+XG4gICAge3sgc3RhdHVzIH19XG48L3NwYW4+Il19