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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBaUIvRSxNQUFNLE9BQU8sYUFBYTtJQUt4QjtRQUpTLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBbUI7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUM1RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxLQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsS0FBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtZQUFBLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7OzJHQS9CVSxhQUFhOytGQUFiLGFBQWEsbUpDakIxQixzbUNBeUJXOzRGRFJFLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsTUFBTTswRUFLUCxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSU1lbnVTZXR0aW5ncyB7XG4gIExhYmVsOiBzdHJpbmc7XG4gIEljb24/OiBzdHJpbmc7IFxuICBJY29uQ29sb3I/OiBzdHJpbmc7XG4gIFR5cGU6ICdsaW5rJyB8ICdtb2RhbCc7XG4gIFZhbHVlOiBhbnk7XG4gIERhdGE/OiBhbnk7XG4gIENsYXNzPzogc3RyaW5nO1xuICBSb3V0ZT86IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtZW51U2V0dGluZ3M6IElNZW51U2V0dGluZ3NbXSA9IFtdO1xuICBASW5wdXQoKSBlbGVtZW50OiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsSGFuZGxlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgYWN0aW9uKG1lbnU6IElNZW51U2V0dGluZ3MpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpO1xuICAgIGlmIChtZW51LkRhdGEgJiYgbWVudS5EYXRhLmxlbmd0aCA+IDAgJiYgbWVudS5UeXBlID09ICdsaW5rJykge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIGZvcihjb25zdCBkYXQgb2YgbWVudS5EYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudFtkYXRdKTtcbiAgICAgICAgbGlzdC5wdXNoKHRoaXMuZWxlbWVudFtkYXRdKTtcbiAgICAgIH07XG4gICAgICBtZW51LkRhdGEgPSBsaXN0O1xuICAgIH0gZWxzZSBpZiAobWVudS5EYXRhICYmIG1lbnUuRGF0YS5sZW5ndGggPiAwICYmIG1lbnUuVHlwZSA9PSAnbW9kYWwnKSB7XG4gICAgICBjb25zb2xlLmxvZyhtZW51LkRhdGEpO1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIGZvcihjb25zdCBkYXQgb2YgbWVudS5EYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdCk7XG4gICAgICAgIGxpc3RbZGF0XSA9IHRoaXMuZWxlbWVudFtkYXRdO1xuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKG1lbnUuRGF0YSk7XG4gICAgICBtZW51LkRhdGEgPSBsaXN0O1xuICAgICAgY29uc29sZS5sb2cobWVudS5EYXRhKTtcbiAgICB9XG4gICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KG1lbnUpXG4gIH1cbn1cbiIsIjxuYi1pY29uIGNsYXNzPVwibWVudS1zaG93XCIgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBbaWNvbl09XCInbWVudV9rZWJhYidcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVTZXR0aW5nc1wiPlxuICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIm1lbnUuQ2xhc3NcIiAoY2xpY2spPVwiYWN0aW9uKG1lbnUpXCIgbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxuYi1pY29uIFtwcmltYXJ5XT1cIm1lbnUuSWNvbkNvbG9yXCIgW2ljb25dPVwibWVudS5JY29uXCIgKm5nSWY9XCJtZW51Lkljb25cIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICB7eyBtZW51LkxhYmVsIH19XG4gICAgICAgIDwvYnV0dG9uPiAgICBcbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8IS0tPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInaW5mb3JtYXRpb25fY2lyY2xlJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+RMOpdGFpbDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidlZGl0XzEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8c3Bhbj5Nb2RpZmllcjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkaXNwbGF5XzEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8c3Bhbj5Bc3NpZ25lciB1biDDqXF1aXBlbWVudDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1yZWRcIiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbcHJpbWFyeV09XCInI0Y2NTQ0QydcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8c3Bhbj5TdXBwcmltZXI8L3NwYW4+XG4gICAgPC9idXR0b24+LS0+XG48L21hdC1tZW51PiJdfQ==