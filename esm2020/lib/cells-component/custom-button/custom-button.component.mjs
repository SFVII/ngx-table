import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
import * as i3 from "nowboard-icon";
export class CustomButtonComponent {
    constructor() {
        this.callHandler = new EventEmitter();
    }
    ngOnInit() {
    }
    action() {
        this.callHandler.emit(this.element);
    }
}
CustomButtonComponent.ɵfac = function CustomButtonComponent_Factory(t) { return new (t || CustomButtonComponent)(); };
CustomButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomButtonComponent, selectors: [["custom-button"]], inputs: { config: "config", element: "element" }, outputs: { callHandler: "callHandler" }, decls: 2, vars: 4, consts: [[3, "matTooltip", "ngClass", "click"], [3, "icon", "size"]], template: function CustomButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function CustomButtonComponent_Template_button_click_0_listener() { return ctx.action(); });
        i0.ɵɵelement(1, "nb-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltip", ctx.config == null ? null : ctx.config.matTooltip)("ngClass", ctx.config == null ? null : ctx.config.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx.config == null ? null : ctx.config.icon == null ? null : ctx.config.icon.icon)("size", ctx.config == null ? null : ctx.config.icon == null ? null : ctx.config.icon.size);
    } }, dependencies: [i1.MatTooltip, i2.NgClass, i3.NowboardIconComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomButtonComponent, [{
        type: Component,
        args: [{ selector: 'custom-button', template: "<button (click)=\"action()\" [matTooltip]=\"config?.matTooltip\" [ngClass]=\"config?.class\">\n    <nb-icon [icon]=\"config?.icon?.icon\" [size]=\"config?.icon?.size\"></nb-icon>\n</button>" }]
    }], function () { return []; }, { config: [{
            type: Input
        }], element: [{
            type: Input
        }], callHandler: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyxxQkFBcUI7SUFZaEM7UUFGVSxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OzBGQW5CVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1BsQyxpQ0FBdUY7UUFBL0Usa0dBQVMsWUFBUSxJQUFDO1FBQ3RCLDZCQUEyRTtRQUMvRSxpQkFBUzs7UUFGa0IsOEVBQWlDLHlEQUFBO1FBQy9DLGVBQTJCO1FBQTNCLHdHQUEyQiwyRkFBQTs7dUZETTNCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLGVBQWU7c0NBS2hCLE1BQU07a0JBQWQsS0FBSztZQVFHLE9BQU87a0JBQWYsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZzoge1xuICAgIGNsYXNzOiBzdHJpbmcsXG4gICAgaWNvbjoge1xuICAgICAgc2l6ZTogbnVtYmVyLFxuICAgICAgaWNvbjogc3RyaW5nLFxuICAgIH0sXG4gICAgbWF0VG9vbHRpcDogc3RyaW5nXG4gIH07XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IGFueTtcbiAgQE91dHB1dCgpIGNhbGxIYW5kbGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGFjdGlvbigpIHtcbiAgICB0aGlzLmNhbGxIYW5kbGVyLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwiYWN0aW9uKClcIiBbbWF0VG9vbHRpcF09XCJjb25maWc/Lm1hdFRvb2x0aXBcIiBbbmdDbGFzc109XCJjb25maWc/LmNsYXNzXCI+XG4gICAgPG5iLWljb24gW2ljb25dPVwiY29uZmlnPy5pY29uPy5pY29uXCIgW3NpemVdPVwiY29uZmlnPy5pY29uPy5zaXplXCI+PC9uYi1pY29uPlxuPC9idXR0b24+Il19