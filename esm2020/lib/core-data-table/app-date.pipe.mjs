import { Input, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export class DateFormatConstants {
}
DateFormatConstants.dateLocalFr = 'fr-FR';
DateFormatConstants.dateLocalEn = 'en-EN';
DateFormatConstants.timezone = 'GMT+2';
DateFormatConstants.DATE_FMT_FR = 'dd/MM/y';
DateFormatConstants.DATE_TIME_FMT_FR = `${DateFormatConstants.DATE_FMT_FR} - hh:mm`;
DateFormatConstants.DATE_FMT_EN = 'MM/dd/y';
DateFormatConstants.DATE_TIME_FMT_EN = `${DateFormatConstants.DATE_FMT_EN} - h:mm a`;
export var AppLanguages;
(function (AppLanguages) {
    AppLanguages["Fr"] = "fr";
    AppLanguages["En"] = "en";
})(AppLanguages || (AppLanguages = {}));
export class AppDatePipe extends DatePipe {
    constructor() {
        super(...arguments);
        this.showTime = true;
    }
    transform(value, lang) {
        if (lang && lang == AppLanguages.Fr) {
            return super.transform(value, this.showTime ? DateFormatConstants.DATE_TIME_FMT_FR : DateFormatConstants.DATE_FMT_FR, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
        }
        else {
            return super.transform(value, this.showTime ? DateFormatConstants.DATE_TIME_FMT_EN : DateFormatConstants.DATE_FMT_EN, DateFormatConstants.timezone, DateFormatConstants.dateLocalEn);
        }
    }
}
AppDatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AppDatePipe, deps: null, target: i0.ɵɵFactoryTarget.Pipe });
AppDatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AppDatePipe, name: "appDate" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AppDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'appDate'
                }]
        }], propDecorators: { showTime: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY29yZS1kYXRhLXRhYmxlL2FwcC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFDekMsTUFBTSxPQUFPLG1CQUFtQjs7QUFDZCwrQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUN0QiwrQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUV0Qiw0QkFBUSxHQUFHLE9BQU8sQ0FBQztBQUVuQiwrQkFBVyxHQUFHLFNBQVMsQ0FBQztBQUN4QixvQ0FBZ0IsR0FBRyxHQUFHLG1CQUFtQixDQUFDLFdBQVcsVUFBVSxDQUFDO0FBRWhFLCtCQUFXLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLG9DQUFnQixHQUFHLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxXQUFXLENBQUM7QUFFbkYsTUFBTSxDQUFOLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0Qix5QkFBUyxDQUFBO0lBQ1QseUJBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUlELE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUh6Qzs7UUFJVyxhQUFRLEdBQWEsSUFBSSxDQUFDO0tBUXBDO0lBUEMsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsRUFBRSxFQUFFO1lBQ25DLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEw7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEw7SUFDSCxDQUFDOzt5R0FSVSxXQUFXO3VHQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFIdkIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7OEJBRVUsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0Q29uc3RhbnRzIHtcbiAgc3RhdGljIHJlYWRvbmx5IGRhdGVMb2NhbEZyID0gJ2ZyLUZSJztcbiAgc3RhdGljIHJlYWRvbmx5IGRhdGVMb2NhbEVuID0gJ2VuLUVOJztcblxuICBzdGF0aWMgcmVhZG9ubHkgdGltZXpvbmUgPSAnR01UKzInO1xuXG4gIHN0YXRpYyByZWFkb25seSBEQVRFX0ZNVF9GUiA9ICdkZC9NTS95JztcbiAgc3RhdGljIHJlYWRvbmx5IERBVEVfVElNRV9GTVRfRlIgPSBgJHtEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0ZSfSAtIGhoOm1tYDtcblxuICBzdGF0aWMgcmVhZG9ubHkgREFURV9GTVRfRU4gPSAnTU0vZGQveSc7XG4gIHN0YXRpYyByZWFkb25seSBEQVRFX1RJTUVfRk1UX0VOID0gYCR7RGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9FTn0gLSBoOm1tIGFgO1xufVxuZXhwb3J0IGVudW0gQXBwTGFuZ3VhZ2VzIHtcbiAgRnIgPSAnZnInLFxuICBFbiA9ICdlbidcbn1cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcERhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEFwcERhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgQElucHV0KCkgc2hvd1RpbWUgPzpib29sZWFuID0gdHJ1ZTtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGxhbmc/OiBhbnkpOiBhbnkge1xuICAgIGlmIChsYW5nICYmIGxhbmcgPT0gQXBwTGFuZ3VhZ2VzLkZyKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCB0aGlzLnNob3dUaW1lID8gRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX1RJTUVfRk1UX0ZSIDogRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9GUiwgRGF0ZUZvcm1hdENvbnN0YW50cy50aW1lem9uZSwgRGF0ZUZvcm1hdENvbnN0YW50cy5kYXRlTG9jYWxGcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIHRoaXMuc2hvd1RpbWUgPyBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfVElNRV9GTVRfRU4gOiBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0VOLCBEYXRlRm9ybWF0Q29uc3RhbnRzLnRpbWV6b25lLCBEYXRlRm9ybWF0Q29uc3RhbnRzLmRhdGVMb2NhbEVuKTtcbiAgICB9XG4gIH1cbn1cblxuIl19