import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
import * as i2 from "@angular/material/menu";
import * as i3 from "@angular/common";
function MenuComponent_ng_container_3_nb_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-icon", 5);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("primary", menu_r2.IconColor)("icon", menu_r2.Icon)("size", 1.5);
} }
function MenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 3);
    i0.ɵɵlistener("click", function MenuComponent_ng_container_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const menu_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.action(menu_r2); });
    i0.ɵɵtemplate(2, MenuComponent_ng_container_3_nb_icon_2_Template, 1, 3, "nb-icon", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", menu_r2.Class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.Icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", menu_r2.Label, " ");
} }
export class MenuComponent {
    constructor() {
        this.menuSettings = [];
        this.callHandler = new EventEmitter();
    }
    ngOnInit() {
    }
    action(menu) {
        if (menu.Data && menu.Data.length > 0 && menu.Type == 'link') {
            let list = [];
            for (const dat of menu.Data) {
                console.log(this.element[dat]);
                list.push(this.element[dat]);
            }
            ;
            menu.Data = list;
        }
        else if (menu.Data && menu.Data.length > 0 && menu.Type == 'modal') {
            let list = [];
            for (const dat of menu.Data) {
                list[dat] = this.element[dat];
            }
            ;
            menu.Data = list;
        }
        this.callHandler.emit(menu);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["menu"]], inputs: { menuSettings: "menuSettings", element: "element" }, outputs: { callHandler: "callHandler" }, decls: 4, vars: 4, consts: [[1, "menu-show", 3, "matMenuTriggerFor", "icon", "size"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "ngClass", "click"], [3, "primary", "icon", "size", 4, "ngIf"], [3, "primary", "icon", "size"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "nb-icon", 0);
        i0.ɵɵelementStart(1, "mat-menu", null, 1);
        i0.ɵɵtemplate(3, MenuComponent_ng_container_3_Template, 4, 3, "ng-container", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r0)("icon", "menu_kebab")("size", 1.5);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.menuSettings);
    } }, directives: [i1.NowboardIconComponent, i2.MatMenuTrigger, i2.MatMenu, i3.NgForOf, i2.MatMenuItem, i3.NgClass, i3.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{ selector: 'menu', template: "<nb-icon class=\"menu-show\" [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>", styles: [""] }]
    }], function () { return []; }, { menuSettings: [{
            type: Input
        }], element: [{
            type: Input
        }], callHandler: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0tuRSw2QkFBZ0c7OztJQUF2RiwyQ0FBMEIsc0JBQUEsYUFBQTs7OztJQUYzQyw2QkFBZ0Q7SUFDNUMsaUNBQW9FO0lBQXJDLDhOQUFTLHNCQUFZLElBQUM7SUFDakQscUZBQWdHO0lBQ2hHLFlBQ0o7SUFBQSxpQkFBUztJQUNiLDBCQUFlOzs7SUFKSCxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDOEIsZUFBZTtJQUFmLG1DQUFlO0lBQ3ZFLGVBQ0o7SUFESSw4Q0FDSjs7QURVUixNQUFNLE9BQU8sYUFBYTtJQUt4QjtRQUpTLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBbUI7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUM1RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxLQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDcEUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsS0FBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7OzBFQTFCVSxhQUFhO2dFQUFiLGFBQWE7UUNqQjFCLDZCQUFtRztRQUVuRyx5Q0FBMEI7UUFDdEIsZ0ZBS2U7UUFpQm5CLGlCQUFXOzs7UUF6QmdCLHVDQUEwQixzQkFBQSxhQUFBO1FBR2xCLGVBQWU7UUFBZiwwQ0FBZTs7dUZEY3JDLGFBQWE7Y0FMekIsU0FBUzsyQkFDRSxNQUFNO3NDQUtQLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSU1lbnVTZXR0aW5ncyB7XG4gIExhYmVsOiBzdHJpbmc7XG4gIEljb24/OiBzdHJpbmc7IFxuICBJY29uQ29sb3I/OiBzdHJpbmc7XG4gIFR5cGU6ICdsaW5rJyB8ICdtb2RhbCc7XG4gIFZhbHVlOiBhbnk7XG4gIERhdGE/OiBhbnk7XG4gIENsYXNzPzogc3RyaW5nO1xuICBSb3V0ZT86IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtZW51U2V0dGluZ3M6IElNZW51U2V0dGluZ3NbXSA9IFtdO1xuICBASW5wdXQoKSBlbGVtZW50OiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsSGFuZGxlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgYWN0aW9uKG1lbnU6IElNZW51U2V0dGluZ3MpIHtcbiAgICBpZiAobWVudS5EYXRhICYmIG1lbnUuRGF0YS5sZW5ndGggPiAwICYmIG1lbnUuVHlwZSA9PSAnbGluaycpIHtcbiAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICBmb3IoY29uc3QgZGF0IG9mIG1lbnUuRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRbZGF0XSk7XG4gICAgICAgIGxpc3QucHVzaCh0aGlzLmVsZW1lbnRbZGF0XSk7XG4gICAgICB9O1xuICAgICAgbWVudS5EYXRhID0gbGlzdDtcbiAgICB9IGVsc2UgaWYgKG1lbnUuRGF0YSAmJiBtZW51LkRhdGEubGVuZ3RoID4gMCAmJiBtZW51LlR5cGUgPT0gJ21vZGFsJykge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIGZvcihjb25zdCBkYXQgb2YgbWVudS5EYXRhKSB7XG4gICAgICAgIGxpc3RbZGF0XSA9IHRoaXMuZWxlbWVudFtkYXRdO1xuICAgICAgfTtcbiAgICAgIG1lbnUuRGF0YSA9IGxpc3Q7XG4gICAgfVxuICAgIHRoaXMuY2FsbEhhbmRsZXIuZW1pdChtZW51KVxuICB9XG59XG4iLCI8bmItaWNvbiBjbGFzcz1cIm1lbnUtc2hvd1wiIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgW2ljb25dPVwiJ21lbnVfa2ViYWInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuXG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51U2V0dGluZ3NcIj5cbiAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJtZW51LkNsYXNzXCIgKGNsaWNrKT1cImFjdGlvbihtZW51KVwiIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8bmItaWNvbiBbcHJpbWFyeV09XCJtZW51Lkljb25Db2xvclwiIFtpY29uXT1cIm1lbnUuSWNvblwiICpuZ0lmPVwibWVudS5JY29uXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAge3sgbWVudS5MYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj4gICAgXG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPCEtLTxidXR0b24gbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2luZm9ybWF0aW9uX2NpcmNsZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxzcGFuPkTDqXRhaWw8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZWRpdF8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+TW9kaWZpZXI8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZGlzcGxheV8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+QXNzaWduZXIgdW4gw6lxdWlwZW1lbnQ8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtcmVkXCIgbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG5iLWljb24gW3ByaW1hcnldPVwiJyNGNjU0NEMnXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+U3VwcHJpbWVyPC9zcGFuPlxuICAgIDwvYnV0dG9uPi0tPlxuPC9tYXQtbWVudT4iXX0=