import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
import * as i2 from "@angular/material/menu";
import * as i3 from "@angular/common";
export class MenuComponent {
    constructor() {
        this.menuSettings = [];
        this.callHandler = new EventEmitter();
    }
    ngOnInit() {
    }
    action(menu) {
        console.log(this.element);
        console.log(menu);
        console.log(menu.Data);
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
            console.log(menu.Data);
            let list = [];
            for (const dat of menu.Data) {
                console.log(dat);
                list[dat] = this.element[dat];
            }
            ;
            console.log(menu.Data);
            menu.Data = list;
            console.log(menu.Data);
        }
        this.callHandler.emit(menu);
    }
}
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: MenuComponent, selector: "menu", inputs: { menuSettings: "menuSettings", element: "element" }, outputs: { callHandler: "callHandler" }, ngImport: i0, template: "<nb-icon class=\"menu-show\" [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>", styles: [""], components: [{ type: i1.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }, { type: i2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'menu', template: "<nb-icon class=\"menu-show\" [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { menuSettings: [{
                type: Input
            }], element: [{
                type: Input
            }], callHandler: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBaUIvRSxNQUFNLE9BQU8sYUFBYTtJQUt4QjtRQUpTLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBbUI7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQzVELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLEtBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxLQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1lBQUEsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7MkdBakNVLGFBQWE7K0ZBQWIsYUFBYSxtSkNqQjFCLHNtQ0F5Qlc7NEZEUkUsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxNQUFNOzBFQUtQLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBJTWVudVNldHRpbmdzIHtcbiAgTGFiZWw6IHN0cmluZztcbiAgSWNvbj86IHN0cmluZzsgXG4gIEljb25Db2xvcj86IHN0cmluZztcbiAgVHlwZTogJ2xpbmsnIHwgJ21vZGFsJztcbiAgVmFsdWU6IGFueTtcbiAgRGF0YT86IGFueTtcbiAgQ2xhc3M/OiBzdHJpbmc7XG4gIFJvdXRlPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1lbnVTZXR0aW5nczogSU1lbnVTZXR0aW5nc1tdID0gW107XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IGFueTtcbiAgQE91dHB1dCgpIGNhbGxIYW5kbGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBhY3Rpb24obWVudTogSU1lbnVTZXR0aW5ncykge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc29sZS5sb2cobWVudSk7XG4gICAgY29uc29sZS5sb2cobWVudS5EYXRhKTtcbiAgICBpZiAobWVudS5EYXRhICYmIG1lbnUuRGF0YS5sZW5ndGggPiAwICYmIG1lbnUuVHlwZSA9PSAnbGluaycpIHtcbiAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICBmb3IoY29uc3QgZGF0IG9mIG1lbnUuRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRbZGF0XSk7XG4gICAgICAgIGxpc3QucHVzaCh0aGlzLmVsZW1lbnRbZGF0XSk7XG4gICAgICB9O1xuICAgICAgbWVudS5EYXRhID0gbGlzdDtcbiAgICB9IGVsc2UgaWYgKG1lbnUuRGF0YSAmJiBtZW51LkRhdGEubGVuZ3RoID4gMCAmJiBtZW51LlR5cGUgPT0gJ21vZGFsJykge1xuICAgICAgY29uc29sZS5sb2cobWVudS5EYXRhKTtcbiAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICBmb3IoY29uc3QgZGF0IG9mIG1lbnUuRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXQpO1xuICAgICAgICBsaXN0W2RhdF0gPSB0aGlzLmVsZW1lbnRbZGF0XTtcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhtZW51LkRhdGEpO1xuICAgICAgbWVudS5EYXRhID0gbGlzdDtcbiAgICAgIGNvbnNvbGUubG9nKG1lbnUuRGF0YSk7XG4gICAgfVxuICAgIHRoaXMuY2FsbEhhbmRsZXIuZW1pdChtZW51KVxuICB9XG59XG4iLCI8bmItaWNvbiBjbGFzcz1cIm1lbnUtc2hvd1wiIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgW2ljb25dPVwiJ21lbnVfa2ViYWInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuXG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51U2V0dGluZ3NcIj5cbiAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJtZW51LkNsYXNzXCIgKGNsaWNrKT1cImFjdGlvbihtZW51KVwiIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8bmItaWNvbiBbcHJpbWFyeV09XCJtZW51Lkljb25Db2xvclwiIFtpY29uXT1cIm1lbnUuSWNvblwiICpuZ0lmPVwibWVudS5JY29uXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAge3sgbWVudS5MYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj4gICAgXG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPCEtLTxidXR0b24gbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2luZm9ybWF0aW9uX2NpcmNsZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxzcGFuPkTDqXRhaWw8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZWRpdF8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+TW9kaWZpZXI8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZGlzcGxheV8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+QXNzaWduZXIgdW4gw6lxdWlwZW1lbnQ8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtcmVkXCIgbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG5iLWljb24gW3ByaW1hcnldPVwiJyNGNjU0NEMnXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+U3VwcHJpbWVyPC9zcGFuPlxuICAgIDwvYnV0dG9uPi0tPlxuPC9tYXQtbWVudT4iXX0=