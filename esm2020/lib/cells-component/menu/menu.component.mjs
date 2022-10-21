import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/menu";
import * as i3 from "nowboard-icon";
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
    i0.ɵɵlistener("click", function MenuComponent_ng_container_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const menu_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.action(menu_r2)); });
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
        if (menu.DataParam && menu.DataParam.length > 0 && menu.Type == 'link') {
            let list = [];
            for (const dat of menu.DataParam) {
                list.push(this.element[dat]);
            }
            ;
            menu.Data = list;
        }
        else if (menu.DataParam && menu.DataParam.length > 0 && menu.Type == 'modal') {
            let list = [];
            for (const dat of menu.DataParam) {
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
    } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.MatMenu, i2.MatMenuItem, i2.MatMenuTrigger, i3.NowboardIconComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{ selector: 'menu', template: "<nb-icon class=\"menu-show\" [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>" }]
    }], function () { return []; }, { menuSettings: [{
            type: Input
        }], element: [{
            type: Input
        }], callHandler: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0tuRSw2QkFBZ0c7OztJQUF2RiwyQ0FBMEIsc0JBQUEsYUFBQTs7OztJQUYzQyw2QkFBZ0Q7SUFDNUMsaUNBQW9FO0lBQXJDLDhOQUFTLGVBQUEsc0JBQVksQ0FBQSxJQUFDO0lBQ2pELHFGQUFnRztJQUNoRyxZQUNKO0lBQUEsaUJBQVM7SUFDYiwwQkFBZTs7O0lBSkgsZUFBc0I7SUFBdEIsdUNBQXNCO0lBQzhCLGVBQWU7SUFBZixtQ0FBZTtJQUN2RSxlQUNKO0lBREksOENBQ0o7O0FEV1IsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFKUyxpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVuRCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQW1CO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdEUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsS0FBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDOUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsS0FBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7OzBFQXpCVSxhQUFhO2dFQUFiLGFBQWE7UUNsQjFCLDZCQUFtRztRQUVuRyx5Q0FBMEI7UUFDdEIsZ0ZBS2U7UUFpQm5CLGlCQUFXOzs7UUF6QmdCLHVDQUEwQixzQkFBQSxhQUFBO1FBR2xCLGVBQWU7UUFBZiwwQ0FBZTs7dUZEZXJDLGFBQWE7Y0FMekIsU0FBUzsyQkFDRSxNQUFNO3NDQUtQLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSU1lbnVTZXR0aW5ncyB7XG4gIERhdGFQYXJhbTogYW55O1xuICBMYWJlbDogc3RyaW5nO1xuICBJY29uPzogc3RyaW5nOyBcbiAgSWNvbkNvbG9yPzogc3RyaW5nO1xuICBUeXBlOiAnbGluaycgfCAnbW9kYWwnO1xuICBWYWx1ZTogYW55O1xuICBEYXRhPzogYW55O1xuICBDbGFzcz86IHN0cmluZztcbiAgUm91dGU/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbWVudVNldHRpbmdzOiBJTWVudVNldHRpbmdzW10gPSBbXTtcbiAgQElucHV0KCkgZWxlbWVudDogYW55O1xuICBAT3V0cHV0KCkgY2FsbEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGFjdGlvbihtZW51OiBJTWVudVNldHRpbmdzKSB7XG4gICAgaWYgKG1lbnUuRGF0YVBhcmFtICYmIG1lbnUuRGF0YVBhcmFtLmxlbmd0aCA+IDAgJiYgbWVudS5UeXBlID09ICdsaW5rJykge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIGZvcihjb25zdCBkYXQgb2YgbWVudS5EYXRhUGFyYW0pIHtcbiAgICAgICAgbGlzdC5wdXNoKHRoaXMuZWxlbWVudFtkYXRdKTtcbiAgICAgIH07XG4gICAgICBtZW51LkRhdGEgPSBsaXN0O1xuICAgIH0gZWxzZSBpZiAobWVudS5EYXRhUGFyYW0gJiYgbWVudS5EYXRhUGFyYW0ubGVuZ3RoID4gMCAmJiBtZW51LlR5cGUgPT0gJ21vZGFsJykge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIGZvcihjb25zdCBkYXQgb2YgbWVudS5EYXRhUGFyYW0pIHtcbiAgICAgICAgbGlzdFtkYXRdID0gdGhpcy5lbGVtZW50W2RhdF07XG4gICAgICB9O1xuICAgICAgbWVudS5EYXRhID0gbGlzdDtcbiAgICB9XG4gICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KG1lbnUpXG4gIH1cbn1cbiIsIjxuYi1pY29uIGNsYXNzPVwibWVudS1zaG93XCIgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBbaWNvbl09XCInbWVudV9rZWJhYidcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVTZXR0aW5nc1wiPlxuICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIm1lbnUuQ2xhc3NcIiAoY2xpY2spPVwiYWN0aW9uKG1lbnUpXCIgbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxuYi1pY29uIFtwcmltYXJ5XT1cIm1lbnUuSWNvbkNvbG9yXCIgW2ljb25dPVwibWVudS5JY29uXCIgKm5nSWY9XCJtZW51Lkljb25cIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICB7eyBtZW51LkxhYmVsIH19XG4gICAgICAgIDwvYnV0dG9uPiAgICBcbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8IS0tPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInaW5mb3JtYXRpb25fY2lyY2xlJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+RMOpdGFpbDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidlZGl0XzEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8c3Bhbj5Nb2RpZmllcjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkaXNwbGF5XzEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8c3Bhbj5Bc3NpZ25lciB1biDDqXF1aXBlbWVudDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1yZWRcIiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbcHJpbWFyeV09XCInI0Y2NTQ0QydcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8c3Bhbj5TdXBwcmltZXI8L3NwYW4+XG4gICAgPC9idXR0b24+LS0+XG48L21hdC1tZW51PiJdfQ==