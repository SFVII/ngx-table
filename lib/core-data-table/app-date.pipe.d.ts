import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DateFormatConstants {
    static readonly dateLocalFr = "fr-FR";
    static readonly dateLocalEn = "en-EN";
    static readonly timezone = "GMT+2";
    static readonly DATE_FMT_FR = "dd/MM/yyyy";
    static readonly DATE_TIME_FMT_FR: string;
    static readonly DATE_FMT_EN = "MM/dd/y";
    static readonly DATE_TIME_FMT_EN: string;
}
export declare enum AppLanguages {
    Fr = "fr",
    En = "en"
}
export declare class AppDatePipe implements PipeTransform {
    transform(value: any, lang?: any, showDate?: boolean): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AppDatePipe, "appDate">;
}
//# sourceMappingURL=app-date.pipe.d.ts.map