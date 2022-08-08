import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
function CustomerRankComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "star_rate");
    i0.ɵɵelementEnd();
} }
export class CustomerRankComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    this.type = 'Classic'.toUpperCase();
                    this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                }
            }
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
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
CustomerRankComponent.ɵfac = function CustomerRankComponent_Factory(t) { return new (t || CustomerRankComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.TableService)); };
CustomerRankComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomerRankComponent, selectors: [["app-customer-rank"]], inputs: { type: "type" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [[3, "matTooltip"], [4, "ngIf"]], template: function CustomerRankComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0)(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CustomerRankComponent_mat_icon_3_Template, 2, 0, "mat-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.typeClass);
        i0.ɵɵpropertyInterpolate1("matTooltip", "Contrat de type : ", ctx.type, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type !== "CLASSIC");
    } }, directives: [i2.MatTooltip, i3.NgIf, i4.MatIcon], styles: [".gold[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:gold}.silver[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:silver}.bronze[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#cd7f32}.default[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#000}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerRankComponent, [{
        type: Component,
        args: [{ selector: 'app-customer-rank', template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span>{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n", styles: [".gold{font-size:12px;font-weight:700;color:gold}.silver{font-size:12px;font-weight:700;color:silver}.bronze{font-weight:700;font-size:12px;color:#cd7f32}.default{font-weight:700;font-size:12px;color:#000}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }]; }, { type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNDN0UsZ0NBQXFDO0lBQUEseUJBQVM7SUFBQSxpQkFBVzs7QURPaEYsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxZQUFvQixrQkFBcUMsRUFBVSxPQUFxQjtRQUFwRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUN4RixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFNBQVMsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQ3hDO3FCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO29CQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3JDO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFHRDs7Ozs7Ozs7Ozs7OztvREFhNEM7SUFDOUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7MEZBN0NVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUmxDLCtCQUFrRSxXQUFBO1FBQzFELFlBQVE7UUFBQSxpQkFBTztRQUFBLGdGQUF5RDtRQUNoRixpQkFBTzs7UUFGRCw0QkFBbUI7UUFBQywyRUFBdUM7UUFDekQsZUFBUTtRQUFSLDhCQUFRO1FBQWtCLGVBQXdCO1FBQXhCLDZDQUF3Qjs7dUZETzdDLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLG1CQUFtQjsrRkFLcEIsSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1yYW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyB0eXBlQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZzogc3RyaW5nW10gPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5jdXN0b21lclJhbmsgfHwgWydnb2xkJywgJ3NpbHZlcicsICdicm9uemUnLCAnZGVmYXVsdCddO1xuICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAodGhpcy50eXBlIHx8ICcnKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICAgIGZvciAobGV0IGMgb2YgY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSBjLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLnR5cGVDbGFzcyA9ICdkZWZhdWx0JztcbiAgICB9XG5cblxuICAgIC8qICBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnZ29sZCcpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZ29sZCdcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnc2lsdmVyJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdzaWx2ZXInXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2Jyb256ZScpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnYnJvbnplJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7Ki9cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cbn1cbiIsIjxzcGFuIFtjbGFzc109XCJ0eXBlQ2xhc3NcIiBtYXRUb29sdGlwPVwiQ29udHJhdCBkZSB0eXBlIDoge3t0eXBlfX1cIj5cbiAgPHNwYW4+e3t0eXBlfX08L3NwYW4+PG1hdC1pY29uICpuZ0lmPVwidHlwZSAhPT0gJ0NMQVNTSUMnXCI+c3Rhcl9yYXRlPC9tYXQtaWNvbj5cbjwvc3Bhbj5cbiJdfQ==