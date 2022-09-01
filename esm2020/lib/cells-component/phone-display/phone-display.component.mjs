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
        console.log(parsePhoneNumber(this.number));
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
PhoneDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneDisplayComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PhoneDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PhoneDisplayComponent, selector: "app-phone-display", inputs: { number: "number" }, usesOnChanges: true, ngImport: i0, template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""], components: [{ type: i2.NgxFlagsComponent, selector: "flag", inputs: ["country", "format", "size", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-phone-display', template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { number: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQVMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVFoRixNQUFNLE9BQU8scUJBQXFCO0lBSzlCLFlBQ1ksRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFIM0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlWLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDekIsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNqRDthQUFNLElBQUksR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqQixPQUFPLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNqQztpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQzthQUNiO1NBQ0o7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2xCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsZ0JBQWdCO2FBQ25CO1lBQ0QsZ0RBQWdEO1lBQzVDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDMUIsR0FBRztZQUNILDJGQUEyRjtZQUMzRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUMvRTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O21IQXBEUSxxQkFBcUI7dUdBQXJCLHFCQUFxQiw0R0NWbEMsd0VBQ0E7NEZEU2EscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNJLG1CQUFtQjtrR0FLcEIsTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5SVNPIH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcbmltcG9ydCB7IHBhcnNlUGhvbmVOdW1iZXIsIGlzVmFsaWRQaG9uZU51bWJlciwgcGFyc2UgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtcGhvbmUtZGlzcGxheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQaG9uZURpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbnVtYmVyOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcbiAgICBmbGFnID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5ub3JtYWxpemUodGhpcy5udW1iZXIpXG5cbiAgICAgICAgY29uc29sZS5sb2cocGFyc2VQaG9uZU51bWJlcih0aGlzLm51bWJlcikpO1xuICAgICAgICB0aGlzLmZsYWcgPSAodGhpcy5udW1iZXIgJiYgdGhpcy5udW1iZXIgIT0gJycgJiYgaXNWYWxpZFBob25lTnVtYmVyKHRoaXMubnVtYmVyKSA/IHBhcnNlUGhvbmVOdW1iZXIodGhpcy5udW1iZXIpLmNvdW50cnkgOiAnRlInKTtcbiAgICAgICAgdGhpcy5mbGFnID0gIXRoaXMubnVtYmVyID8gJyc6IHRoaXMuZmxhZztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyICYmIGlzVmFsaWRQaG9uZU51bWJlcihzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VQaG9uZU51bWJlcihzdHIpLmZvcm1hdE5hdGlvbmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICBjb25zdCBwaG9uZSA9IHBhcnNlUGhvbmVOdW1iZXIoc3RyLCAnRlInKTtcbiAgICAgICAgICAgIGlmIChwaG9uZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGhvbmUuZm9ybWF0TmF0aW9uYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IChzdHIgfHwgJycpLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgICAgIC8vcmVmb3JtYXQgYW5kIHJldHVybiBwaG9uZSBudW1iZXJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCszMykgJDEuJDIuJDMuJDQuJDVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA+IDEwICYmIHN0ci5sZW5ndGggPD0gMTMpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID09PSAxMSkge1xuICAgICAgICAgICAgICAgIC8vc3RyID0gJzAnK3N0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzdHIubGVuZ3RoID09PSAxMyAmJiBzdHIuaW5jbHVkZXMoJysnKSkge1xuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBzdHIuc2xpY2UoMiwgMyk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IHN0ci5zbGljZSgzLCBzdHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSAnMCcgKyB0bXAgKyBlbmQ7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrJDEpICQyLiQzLiQ0LiQ1LiQ2XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIiwiPGZsYWcgW2NvdW50cnldPVwiZmxhZ1wiPjwvZmxhZz4gPHN0cm9uZz57e2Rpc3BsYXkgfHwgJy0nfX08L3N0cm9uZz5cbiJdfQ==