import { Component, Input } from '@angular/core';
import { parsePhoneNumber, isValidPhoneNumber, formatIncompletePhoneNumber } from 'libphonenumber-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../ngx-flag/ngx-flag.component";
export class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        if (this.number) {
            this.display = this.normalize(this.number);
        }
        //this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(''+this.number)?.country : 'FR');
        //this.flag = !this.number ? '': this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            /*const phone = parsePhoneNumber(str)
            if (phone) {
                console.log(phone.formatNational())
            }*/
            console.log(formatIncompletePhoneNumber(str));
            let p = str.split('+')[1];
            let newp = '';
            for (let i = 0; i < p.length; i++) {
                if (p.split('')[i]) {
                    if (i % 2 == 0 && i > 0) {
                        newp += ' ';
                    }
                    newp += p.split('')[i];
                }
            }
            return newp;
            /*if (phone.isValid()) {
                return phone.formatNational();
            } else {
                return '';
            }*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQW9DLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFReEksTUFBTSxPQUFPLHFCQUFxQjtJQUs5QixZQUNZLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBSDNCLFNBQUksR0FBRyxFQUFFLENBQUM7SUFJVixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDN0M7UUFFRCx1SUFBdUk7UUFDdkksMkNBQTJDO0lBQy9DLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUN6QixJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxHQUFHLEVBQUU7WUFDWjs7O2VBR0c7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7WUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQixJQUFJLElBQUksR0FBRyxDQUFDO3FCQUNmO29CQUNELElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUM7WUFDWjs7OztlQUlHO1NBQ047YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2xCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsZ0JBQWdCO2FBQ25CO1lBQ0QsZ0RBQWdEO1lBQzVDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDMUIsR0FBRztZQUNILDJGQUEyRjtZQUMzRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUMvRTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O21IQXJFUSxxQkFBcUI7dUdBQXJCLHFCQUFxQiw0R0NWbEMsd0VBQ0E7NEZEU2EscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNJLG1CQUFtQjtrR0FLcEIsTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5SVNPIH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcbmltcG9ydCB7IHBhcnNlUGhvbmVOdW1iZXIsIGlzVmFsaWRQaG9uZU51bWJlciwgcGFyc2UsIHBhcnNlUGhvbmVOdW1iZXJXaXRoRXJyb3IsIGZvcm1hdEluY29tcGxldGVQaG9uZU51bWJlciB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1waG9uZS1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIGZsYWcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5udW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMubm9ybWFsaXplKHRoaXMubnVtYmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzLmZsYWcgPSAodGhpcy5udW1iZXIgJiYgdGhpcy5udW1iZXIgIT0gJycgJiYgaXNWYWxpZFBob25lTnVtYmVyKHRoaXMubnVtYmVyKSA/IHBhcnNlUGhvbmVOdW1iZXIoJycrdGhpcy5udW1iZXIpPy5jb3VudHJ5IDogJ0ZSJyk7XG4gICAgICAgIC8vdGhpcy5mbGFnID0gIXRoaXMubnVtYmVyID8gJyc6IHRoaXMuZmxhZztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyICYmIGlzVmFsaWRQaG9uZU51bWJlcihzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VQaG9uZU51bWJlcihzdHIpLmZvcm1hdE5hdGlvbmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICAvKmNvbnN0IHBob25lID0gcGFyc2VQaG9uZU51bWJlcihzdHIpXG4gICAgICAgICAgICBpZiAocGhvbmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaG9uZS5mb3JtYXROYXRpb25hbCgpKVxuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXRJbmNvbXBsZXRlUGhvbmVOdW1iZXIoc3RyKSlcbiAgICAgICAgICAgIGxldCBwID0gc3RyLnNwbGl0KCcrJylbMV07XG4gICAgICAgICAgICBsZXQgbmV3cDogYW55ID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCAmJiBpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3cCArPSAnICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3cCArPSBwLnNwbGl0KCcnKVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3cDtcbiAgICAgICAgICAgIC8qaWYgKHBob25lLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwaG9uZS5mb3JtYXROYXRpb25hbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSAoc3RyIHx8ICcnKS5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIik7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDEwKSB7XG4gICAgICAgICAgICAvL3JlZm9ybWF0IGFuZCByZXR1cm4gcGhvbmUgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPiAxMCAmJiBzdHIubGVuZ3RoIDw9IDEzKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAvL3N0ciA9ICcwJytzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmICggc3RyLmxlbmd0aCA9PT0gMTMgJiYgc3RyLmluY2x1ZGVzKCcrJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wID0gc3RyLnNsaWNlKDIsIDMpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBzdHIuc2xpY2UoMywgc3RyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3RyID0gJzAnICsgdG1wICsgZW5kO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICAvL3JldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKyQxKSAkMi4kMy4kNC4kNS4kNlwiKTtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiJDEuJDIuJDMuJDQuJDVcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cbiIsIjxmbGFnIFtjb3VudHJ5XT1cImZsYWdcIj48L2ZsYWc+IDxzdHJvbmc+e3tkaXNwbGF5IHx8ICctJ319PC9zdHJvbmc+XG4iXX0=