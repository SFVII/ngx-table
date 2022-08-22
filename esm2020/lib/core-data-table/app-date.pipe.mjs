import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export class DateFormatConstants {
}
DateFormatConstants.dateLocalFr = 'fr-FR';
DateFormatConstants.dateLocalEn = 'en-EN';
DateFormatConstants.timezone = 'GMT+2';
DateFormatConstants.DATE_FMT_FR = 'dd/MM/yyyy';
DateFormatConstants.DATE_TIME_FMT_FR = `${DateFormatConstants.DATE_FMT_FR} - hh:mm`;
DateFormatConstants.DATE_FMT_EN = 'MM/dd/y';
DateFormatConstants.DATE_TIME_FMT_EN = `${DateFormatConstants.DATE_FMT_EN} - h:mm a`;
export var AppLanguages;
(function (AppLanguages) {
    AppLanguages["Fr"] = "fr";
    AppLanguages["En"] = "en";
})(AppLanguages || (AppLanguages = {}));
export class AppDatePipe extends DatePipe {
    // @ts-ignore
    transform(value, lang, showDate = true) {
        //console.log('DATE', value, lang);
        if (lang && lang == AppLanguages.Fr) {
            //console.log('IS FR')
            return super.transform(value, showDate ? DateFormatConstants.DATE_TIME_FMT_FR : DateFormatConstants.DATE_FMT_FR, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
        }
        else {
            //console.log('IS EN')
            return super.transform(value, showDate ? DateFormatConstants.DATE_TIME_FMT_EN : DateFormatConstants.DATE_FMT_EN, DateFormatConstants.timezone, DateFormatConstants.dateLocalEn);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY29yZS1kYXRhLXRhYmxlL2FwcC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUV6QyxNQUFNLE9BQU8sbUJBQW1COztBQUNaLCtCQUFXLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLCtCQUFXLEdBQUcsT0FBTyxDQUFDO0FBRXRCLDRCQUFRLEdBQUcsT0FBTyxDQUFDO0FBRW5CLCtCQUFXLEdBQUcsWUFBWSxDQUFDO0FBQzNCLG9DQUFnQixHQUFHLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxVQUFVLENBQUM7QUFFaEUsK0JBQVcsR0FBRyxTQUFTLENBQUM7QUFDeEIsb0NBQWdCLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLFdBQVcsQ0FBQztBQUdyRixNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCLHlCQUFTLENBQUE7SUFDVCx5QkFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBS0QsTUFBTSxPQUFPLFdBQVksU0FBUSxRQUFRO0lBRXJDLGFBQWE7SUFDYixTQUFTLENBQUMsS0FBVSxFQUFFLElBQVUsRUFBRSxXQUFxQixJQUFJO1FBQ3ZELG1DQUFtQztRQUNuQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxzQkFBc0I7WUFDdEIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25MO2FBQU07WUFDSCxzQkFBc0I7WUFDdEIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25MO0lBQ0wsQ0FBQzs7K01BWlEsV0FBVyxTQUFYLFdBQVc7MkVBQVgsV0FBVzt1RkFBWCxXQUFXO2NBSHZCLElBQUk7ZUFBQztnQkFDRixJQUFJLEVBQUUsU0FBUzthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbnN0YW50cyB7XG4gICAgc3RhdGljIHJlYWRvbmx5IGRhdGVMb2NhbEZyID0gJ2ZyLUZSJztcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGF0ZUxvY2FsRW4gPSAnZW4tRU4nO1xuXG4gICAgc3RhdGljIHJlYWRvbmx5IHRpbWV6b25lID0gJ0dNVCsyJztcblxuICAgIHN0YXRpYyByZWFkb25seSBEQVRFX0ZNVF9GUiA9ICdkZC9NTS95eXl5JztcbiAgICBzdGF0aWMgcmVhZG9ubHkgREFURV9USU1FX0ZNVF9GUiA9IGAke0RhdGVGb3JtYXRDb25zdGFudHMuREFURV9GTVRfRlJ9IC0gaGg6bW1gO1xuXG4gICAgc3RhdGljIHJlYWRvbmx5IERBVEVfRk1UX0VOID0gJ01NL2RkL3knO1xuICAgIHN0YXRpYyByZWFkb25seSBEQVRFX1RJTUVfRk1UX0VOID0gYCR7RGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9FTn0gLSBoOm1tIGFgO1xufVxuXG5leHBvcnQgZW51bSBBcHBMYW5ndWFnZXMge1xuICAgIEZyID0gJ2ZyJyxcbiAgICBFbiA9ICdlbidcbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6ICdhcHBEYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBEYXRlUGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGxhbmc/OiBhbnksIHNob3dEYXRlPzogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdEQVRFJywgdmFsdWUsIGxhbmcpO1xuICAgICAgICBpZiAobGFuZyAmJiBsYW5nID09IEFwcExhbmd1YWdlcy5Gcikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnSVMgRlInKVxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgc2hvd0RhdGUgPyBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfVElNRV9GTVRfRlIgOiBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0ZSLCBEYXRlRm9ybWF0Q29uc3RhbnRzLnRpbWV6b25lLCBEYXRlRm9ybWF0Q29uc3RhbnRzLmRhdGVMb2NhbEZyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0lTIEVOJylcbiAgICAgICAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIHNob3dEYXRlID8gRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX1RJTUVfRk1UX0VOIDogRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9FTiwgRGF0ZUZvcm1hdENvbnN0YW50cy50aW1lem9uZSwgRGF0ZUZvcm1hdENvbnN0YW50cy5kYXRlTG9jYWxFbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==