import { Pipe } from '@angular/core';
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
    transform(value, lang) {
        if (lang == AppLanguages.Fr) {
            return super.transform(value, DateFormatConstants.DATE_TIME_FMT_FR, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
        }
        else {
            if (!lang) {
                return super.transform(value, DateFormatConstants.DATE_TIME_FMT_FR, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
            }
            else {
                return super.transform(value, DateFormatConstants.DATE_TIME_FMT_EN, DateFormatConstants.timezone, DateFormatConstants.dateLocalEn);
            }
        }
    }
}
AppDatePipe.ɵfac = /*@__PURE__*/ function () { let ɵAppDatePipe_BaseFactory; return function AppDatePipe_Factory(t) { return (ɵAppDatePipe_BaseFactory || (ɵAppDatePipe_BaseFactory = i0.ɵɵgetInheritedFactory(AppDatePipe)))(t || AppDatePipe); }; }();
AppDatePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appDate", type: AppDatePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppDatePipe, [{
        type: Pipe,
        args: [{
                name: 'appDate'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY29yZS1kYXRhLXRhYmxlL2FwcC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUN6QyxNQUFNLE9BQU8sbUJBQW1COztBQUNkLCtCQUFXLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLCtCQUFXLEdBQUcsT0FBTyxDQUFDO0FBRXRCLDRCQUFRLEdBQUcsT0FBTyxDQUFDO0FBRW5CLCtCQUFXLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLG9DQUFnQixHQUFHLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxVQUFVLENBQUM7QUFFaEUsK0JBQVcsR0FBRyxTQUFTLENBQUM7QUFDeEIsb0NBQWdCLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLFdBQVcsQ0FBQztBQUVuRixNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLHlCQUFTLENBQUE7SUFDVCx5QkFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBSUQsTUFBTSxPQUFPLFdBQVksU0FBUSxRQUFRO0lBQ3ZDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsRUFBRSxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BJO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BJO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BJO1NBQ0Y7SUFDSCxDQUFDOzsrTUFYVSxXQUFXLFNBQVgsV0FBVzsyRUFBWCxXQUFXO3VGQUFYLFdBQVc7Y0FIdkIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0Q29uc3RhbnRzIHtcbiAgc3RhdGljIHJlYWRvbmx5IGRhdGVMb2NhbEZyID0gJ2ZyLUZSJztcbiAgc3RhdGljIHJlYWRvbmx5IGRhdGVMb2NhbEVuID0gJ2VuLUVOJztcblxuICBzdGF0aWMgcmVhZG9ubHkgdGltZXpvbmUgPSAnR01UKzInO1xuXG4gIHN0YXRpYyByZWFkb25seSBEQVRFX0ZNVF9GUiA9ICdkZC9NTS95JztcbiAgc3RhdGljIHJlYWRvbmx5IERBVEVfVElNRV9GTVRfRlIgPSBgJHtEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0ZSfSAtIGhoOm1tYDtcblxuICBzdGF0aWMgcmVhZG9ubHkgREFURV9GTVRfRU4gPSAnTU0vZGQveSc7XG4gIHN0YXRpYyByZWFkb25seSBEQVRFX1RJTUVfRk1UX0VOID0gYCR7RGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9FTn0gLSBoOm1tIGFgO1xufVxuZXhwb3J0IGVudW0gQXBwTGFuZ3VhZ2VzIHtcbiAgRnIgPSAnZnInLFxuICBFbiA9ICdlbidcbn1cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcERhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEFwcERhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGxhbmc/OiBhbnkpOiBhbnkge1xuICAgIGlmIChsYW5nID09IEFwcExhbmd1YWdlcy5Gcikge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX1RJTUVfRk1UX0ZSLCBEYXRlRm9ybWF0Q29uc3RhbnRzLnRpbWV6b25lLCBEYXRlRm9ybWF0Q29uc3RhbnRzLmRhdGVMb2NhbEZyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFsYW5nKSB7XG4gICAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIERhdGVGb3JtYXRDb25zdGFudHMuREFURV9USU1FX0ZNVF9GUiwgRGF0ZUZvcm1hdENvbnN0YW50cy50aW1lem9uZSwgRGF0ZUZvcm1hdENvbnN0YW50cy5kYXRlTG9jYWxGcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfVElNRV9GTVRfRU4sIERhdGVGb3JtYXRDb25zdGFudHMudGltZXpvbmUsIERhdGVGb3JtYXRDb25zdGFudHMuZGF0ZUxvY2FsRW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0=