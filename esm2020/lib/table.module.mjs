import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TableComponent } from './table.component';
import { CustomerRankComponent } from "./cells-component/customer-rank/customer-rank.component";
import { DateFormatComponent } from "./cells-component/date-format/date-format.component";
import { EquipementStatusComponent } from "./cells-component/equipement-status/equipement-status.component";
import { EquipementTypeComponent } from "./cells-component/equipement-type/equipement-type.component";
import { GenderComponent } from "./cells-component/gender/gender.component";
import { IsMatIconComponent } from "./cells-component/is-mat-icon/is-mat-icon.component";
import { NameAvatarComponent } from "./cells-component/name-avatar/name-avatar.component";
import { OriginComponent } from "./cells-component/origin/origin.component";
import { PhoneDisplayComponent } from "./cells-component/phone-display/phone-display.component";
import { PngIconModule } from "./cells-component/png-icon/png-icon.module";
import { PriorityComponent } from "./cells-component/priority/priority.component";
import { YesNoComponent } from "./cells-component/yes-no/yes-no.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatBadgeModule } from "@angular/material/badge";
import { TableService } from "./table.service";
import { NgxFlagsComponent } from './cells-component/ngx-flag/ngx-flag.component';
import { MenuComponent } from './cells-component/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { NowboardIconModule, NowboardIconService } from "nowboard-icon";
import { Settings } from './Settings';
import { StatusComponent } from './cells-component/status/status.component';
import { StatusIconComponent } from './cells-component/status-icon/status-icon.component';
import { DoubleLineComponent } from './cells-component/double-line/double-line.component';
import { AppDatePipe } from './core-data-table/app-date.pipe';
import { CustomCellComponent } from './cells-component/custom-cell/custom-cell.component';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
export class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
}
TableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, deps: [{ token: TableModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
TableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        NgxFlagsComponent,
        MenuComponent,
        StatusComponent,
        StatusIconComponent,
        DoubleLineComponent,
        AppDatePipe,
        CustomCellComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule, i1.NowboardIconModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        NgxFlagsComponent,
        MatMenuModule,
        NowboardIconModule,
        StatusComponent] });
TableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, providers: [
        NowboardIconService
    ], imports: [[
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule,
            MatMenuModule,
            NowboardIconModule.forRoot(Settings.Icons_light)
        ], PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule,
        NowboardIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        NgxFlagsComponent,
                        MenuComponent,
                        StatusComponent,
                        StatusIconComponent,
                        DoubleLineComponent,
                        AppDatePipe,
                        CustomCellComponent
                    ],
                    imports: [
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule,
                        NowboardIconModule.forRoot(Settings.Icons_light)
                    ],
                    exports: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        NgxFlagsComponent,
                        MatMenuModule,
                        NowboardIconModule,
                        StatusComponent
                    ],
                    providers: [
                        NowboardIconService
                    ]
                }]
        }], ctorParameters: function () { return [{ type: TableModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JB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QkFDaEIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixlQUFlO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbUJBQW1CO3FCQUNwQjtpQkFDRjswREFFb0QsV0FBVzswQkFBakQsUUFBUTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVGb3JtYXRDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXF1aXBlbWVudFR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXNNYXRJY29uQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmFtZUF2YXRhckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yaWdpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGhvbmVEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3Bob25lLWRpc3BsYXkvcGhvbmUtZGlzcGxheS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBuZ0ljb25Nb2R1bGUgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9wcmlvcml0eS9wcmlvcml0eS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFllc05vQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3llcy1uby95ZXMtbm8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2VcIjtcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERlc2lnblRhYmxlSW50ZXJmYWNlIH0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBOZ3hGbGFnc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBOb3dib2FyZEljb25Nb2R1bGUsIE5vd2JvYXJkSWNvblNlcnZpY2UgfSBmcm9tIFwibm93Ym9hcmQtaWNvblwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL1NldHRpbmdzJztcbmltcG9ydCB7IFN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L3N0YXR1cy9zdGF0dXMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXR1c0ljb25Db21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9zdGF0dXMtaWNvbi9zdGF0dXMtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG91YmxlTGluZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L2RvdWJsZS1saW5lL2RvdWJsZS1saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBEYXRlUGlwZSB9IGZyb20gJy4vY29yZS1kYXRhLXRhYmxlL2FwcC1kYXRlLnBpcGUnO1xuaW1wb3J0IHsgQ3VzdG9tQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L2N1c3RvbS1jZWxsL2N1c3RvbS1jZWxsLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIE5neEZsYWdzQ29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgU3RhdHVzQ29tcG9uZW50LFxuICAgIFN0YXR1c0ljb25Db21wb25lbnQsXG4gICAgRG91YmxlTGluZUNvbXBvbmVudCxcbiAgICBBcHBEYXRlUGlwZSxcbiAgICBDdXN0b21DZWxsQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBQbmdJY29uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3QoU2V0dGluZ3MuSWNvbnNfbGlnaHQpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTmd4RmxhZ3NDb21wb25lbnQsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBOb3dib2FyZEljb25Nb2R1bGUsXG4gICAgU3RhdHVzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5vd2JvYXJkSWNvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IFRhYmxlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGFibGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4RGVzaWduVGFibGVfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgVGFibGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=