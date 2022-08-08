import { Component, Input } from '@angular/core';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../ngx-flag/ngx-flag.component";
export class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
        this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        this.flag = !this.number ? '' : this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            const phone = parsePhoneNumber(str, 'FR');
            if (phone.isValid()) {
                return phone.formatNational();
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            let tmp = str.slice(2, 3);
            let end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    }
}
PhoneDisplayComponent.ɵfac = function PhoneDisplayComponent_Factory(t) { return new (t || PhoneDisplayComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
PhoneDisplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PhoneDisplayComponent, selectors: [["app-phone-display"]], inputs: { number: "number" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[3, "country"]], template: function PhoneDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "flag", 0);
        i0.ɵɵelementStart(1, "strong");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("country", ctx.flag);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.display || "-");
    } }, directives: [i2.NgxFlagsComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PhoneDisplayComponent, [{
        type: Component,
        args: [{ selector: 'app-phone-display', template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { number: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQVMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVFoRixNQUFNLE9BQU8scUJBQXFCO0lBSzlCLFlBQ1ksRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFIM0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlWLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXO1FBQ3pCLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDakQ7YUFBTSxJQUFJLEdBQUcsRUFBRTtZQUNaLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsT0FBTyxFQUFFLENBQUM7YUFDYjtTQUNKO2FBQU07WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNsQixrQ0FBa0M7WUFDbEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDckY7YUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQzVDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7Z0JBQ25CLGdCQUFnQjthQUNuQjtZQUNELGdEQUFnRDtZQUM1QyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQzFCLEdBQUc7WUFDSCwyRkFBMkY7WUFDM0YsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDL0U7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzswRkFuRFEscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNWbEMsMEJBQThCO1FBQUMsOEJBQVE7UUFBQSxZQUFrQjtRQUFBLGlCQUFTOztRQUE1RCxrQ0FBZ0I7UUFBaUIsZUFBa0I7UUFBbEIsd0NBQWtCOzt1RkRVNUMscUJBQXFCO2NBTGpDLFNBQVM7MkJBQ0ksbUJBQW1COzhEQUtwQixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuaW1wb3J0IHsgcGFyc2VQaG9uZU51bWJlciwgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZSB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1waG9uZS1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIGZsYWcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLm5vcm1hbGl6ZSh0aGlzLm51bWJlcilcblxuICAgICAgICB0aGlzLmZsYWcgPSAodGhpcy5udW1iZXIgJiYgdGhpcy5udW1iZXIgIT0gJycgJiYgaXNWYWxpZFBob25lTnVtYmVyKHRoaXMubnVtYmVyKSA/IHBhcnNlUGhvbmVOdW1iZXIodGhpcy5udW1iZXIpLmNvdW50cnkgOiAnRlInKTtcbiAgICAgICAgdGhpcy5mbGFnID0gIXRoaXMubnVtYmVyID8gJyc6IHRoaXMuZmxhZztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyICYmIGlzVmFsaWRQaG9uZU51bWJlcihzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VQaG9uZU51bWJlcihzdHIpLmZvcm1hdE5hdGlvbmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICBjb25zdCBwaG9uZSA9IHBhcnNlUGhvbmVOdW1iZXIoc3RyLCAnRlInKTtcbiAgICAgICAgICAgIGlmIChwaG9uZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGhvbmUuZm9ybWF0TmF0aW9uYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IChzdHIgfHwgJycpLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgICAgIC8vcmVmb3JtYXQgYW5kIHJldHVybiBwaG9uZSBudW1iZXJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCszMykgJDEuJDIuJDMuJDQuJDVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA+IDEwICYmIHN0ci5sZW5ndGggPD0gMTMpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID09PSAxMSkge1xuICAgICAgICAgICAgICAgIC8vc3RyID0gJzAnK3N0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzdHIubGVuZ3RoID09PSAxMyAmJiBzdHIuaW5jbHVkZXMoJysnKSkge1xuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBzdHIuc2xpY2UoMiwgMyk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IHN0ci5zbGljZSgzLCBzdHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSAnMCcgKyB0bXAgKyBlbmQ7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrJDEpICQyLiQzLiQ0LiQ1LiQ2XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIiwiPGZsYWcgW2NvdW50cnldPVwiZmxhZ1wiPjwvZmxhZz4gPHN0cm9uZz57e2Rpc3BsYXkgfHwgJy0nfX08L3N0cm9uZz5cbiJdfQ==