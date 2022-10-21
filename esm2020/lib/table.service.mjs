import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    setHeader(displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(i0.ɵɵinject('__NgxDesignTable__')); };
TableService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxDesignTable__']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTS9ELE1BQU0sT0FBTyxZQUFZO0lBS3ZCLFlBQWlELGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBRjVELGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFXLENBQUE7UUFDbEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0sU0FBUyxDQUFDLGFBQWlCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7O3dFQVpVLFlBQVksY0FLSCxvQkFBb0I7a0VBTDdCLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07dUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQU1jLE1BQU07dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc2lnblRhYmxlSW50ZXJmYWNlfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2U7XG4gIHB1YmxpYyBkaXNwbGF5Q29sdW1uIDogYW55O1xuICBwdWJsaWMgdXBkYXRlSGVhZGVyIDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXG4gIHB1YmxpYyBlbXB0eVJvdyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neERlc2lnblRhYmxlX18nKSBwdWJsaWMgc2V0dGluZ0NvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBzZXR0aW5nQ29uZmlnO1xuICB9XG5cbiAgcHVibGljIHNldEhlYWRlcihkaXNwbGF5Q29sdW1uOmFueSkge1xuICAgIHRoaXMuZGlzcGxheUNvbHVtbiA9IGRpc3BsYXlDb2x1bW47XG4gICAgdGhpcy51cGRhdGVIZWFkZXIuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19