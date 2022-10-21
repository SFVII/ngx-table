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
AppDatePipe.ɵfac = /*@__PURE__*/ function () { let ɵAppDatePipe_BaseFactory; return function AppDatePipe_Factory(t) { return (ɵAppDatePipe_BaseFactory || (ɵAppDatePipe_BaseFactory = i0.ɵɵgetInheritedFactory(AppDatePipe)))(t || AppDatePipe); }; }();
AppDatePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appDate", type: AppDatePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppDatePipe, [{
        type: Pipe,
        args: [{
                name: 'appDate'
            }]
    }], null, { showTime: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY29yZS1kYXRhLXRhYmxlL2FwcC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFDekMsTUFBTSxPQUFPLG1CQUFtQjs7QUFDZCwrQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUN0QiwrQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUV0Qiw0QkFBUSxHQUFHLE9BQU8sQ0FBQztBQUVuQiwrQkFBVyxHQUFHLFNBQVMsQ0FBQztBQUN4QixvQ0FBZ0IsR0FBRyxHQUFHLG1CQUFtQixDQUFDLFdBQVcsVUFBVSxDQUFDO0FBRWhFLCtCQUFXLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLG9DQUFnQixHQUFHLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxXQUFXLENBQUM7QUFFbkYsTUFBTSxDQUFOLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0Qix5QkFBUyxDQUFBO0lBQ1QseUJBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUlELE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUh6Qzs7UUFJVyxhQUFRLEdBQWEsSUFBSSxDQUFDO0tBUXBDO0lBUEMsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsRUFBRSxFQUFFO1lBQ25DLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEw7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEw7SUFDSCxDQUFDOzsrTUFSVSxXQUFXLFNBQVgsV0FBVzsyRUFBWCxXQUFXO3VGQUFYLFdBQVc7Y0FIdkIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCO2dCQUVVLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0LCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbnN0YW50cyB7XG4gIHN0YXRpYyByZWFkb25seSBkYXRlTG9jYWxGciA9ICdmci1GUic7XG4gIHN0YXRpYyByZWFkb25seSBkYXRlTG9jYWxFbiA9ICdlbi1FTic7XG5cbiAgc3RhdGljIHJlYWRvbmx5IHRpbWV6b25lID0gJ0dNVCsyJztcblxuICBzdGF0aWMgcmVhZG9ubHkgREFURV9GTVRfRlIgPSAnZGQvTU0veSc7XG4gIHN0YXRpYyByZWFkb25seSBEQVRFX1RJTUVfRk1UX0ZSID0gYCR7RGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9GUn0gLSBoaDptbWA7XG5cbiAgc3RhdGljIHJlYWRvbmx5IERBVEVfRk1UX0VOID0gJ01NL2RkL3knO1xuICBzdGF0aWMgcmVhZG9ubHkgREFURV9USU1FX0ZNVF9FTiA9IGAke0RhdGVGb3JtYXRDb25zdGFudHMuREFURV9GTVRfRU59IC0gaDptbSBhYDtcbn1cbmV4cG9ydCBlbnVtIEFwcExhbmd1YWdlcyB7XG4gIEZyID0gJ2ZyJyxcbiAgRW4gPSAnZW4nXG59XG5AUGlwZSh7XG4gIG5hbWU6ICdhcHBEYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBEYXRlUGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIEBJbnB1dCgpIHNob3dUaW1lID86Ym9vbGVhbiA9IHRydWU7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBsYW5nPzogYW55KTogYW55IHtcbiAgICBpZiAobGFuZyAmJiBsYW5nID09IEFwcExhbmd1YWdlcy5Gcikge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgdGhpcy5zaG93VGltZSA/IERhdGVGb3JtYXRDb25zdGFudHMuREFURV9USU1FX0ZNVF9GUiA6IERhdGVGb3JtYXRDb25zdGFudHMuREFURV9GTVRfRlIsIERhdGVGb3JtYXRDb25zdGFudHMudGltZXpvbmUsIERhdGVGb3JtYXRDb25zdGFudHMuZGF0ZUxvY2FsRnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCB0aGlzLnNob3dUaW1lID8gRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX1RJTUVfRk1UX0VOIDogRGF0ZUZvcm1hdENvbnN0YW50cy5EQVRFX0ZNVF9FTiwgRGF0ZUZvcm1hdENvbnN0YW50cy50aW1lem9uZSwgRGF0ZUZvcm1hdENvbnN0YW50cy5kYXRlTG9jYWxFbik7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==