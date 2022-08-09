import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./table.service";
import * as i3 from "./translate.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/table";
import * as i6 from "@angular/material/sort";
import * as i7 from "./cells-component/is-mat-icon/is-mat-icon.component";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "./cells-component/equipement-type/equipement-type.component";
import * as i10 from "./cells-component/equipement-status/equipement-status.component";
import * as i11 from "./cells-component/customer-rank/customer-rank.component";
import * as i12 from "./cells-component/priority/priority.component";
import * as i13 from "./cells-component/status/status.component";
import * as i14 from "./cells-component/status-icon/status-icon.component";
import * as i15 from "./cells-component/gender/gender.component";
import * as i16 from "./cells-component/png-icon/png-icon.component";
import * as i17 from "./cells-component/menu/menu.component";
import * as i18 from "./cells-component/phone-display/phone-display.component";
import * as i19 from "./cells-component/yes-no/yes-no.component";
import * as i20 from "./cells-component/origin/origin.component";
import * as i21 from "./cells-component/name-avatar/name-avatar.component";
import * as i22 from "./cells-component/date-format/date-format.component";
import * as i23 from "./cells-component/double-line/double-line.component";
import * as i24 from "@angular/material/paginator";
const _c0 = ["MatPaginatorCurrent"];
const _c1 = ["table"];
const _c2 = function (a0, a1) { return [a0, a1]; };
function TableComponent_table_1_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵelement(1, "app-is-mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r9.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
} }
function TableComponent_table_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_1_th_1_Template, 2, 6, "th", 9);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-is-mat-icon", 11);
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("input", column_r5.valueStatement[column_r5.statement ? 1 : 0]);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_Template_th_click_0_listener() { i0.ɵɵrestoreView(_r19); const column_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.clicked.emit({ key: column_r5.key, statement: column_r5.statement = !column_r5.statement }); });
    i0.ɵɵelement(1, "app-is-mat-icon", 11);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template, 1, 1, "app-is-mat-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r14.generateClass(i0.ɵɵpureFunction2(4, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.valueStatement && column_r5.statement !== undefined);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_Template, 3, 7, "th", 13);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵelement(1, "app-is-mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r21.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 12);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_2_ng_container_2_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵelement(1, "app-is-mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r13.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_2_ng_container_2_th_3_Template, 2, 6, "th", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.clickable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.clickable);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 22);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r50); const element_r25 = i0.ɵɵnextContext(2).$implicit; const column_r5 = i0.ɵɵnextContext().$implicit; const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.callFunction.emit(element_r25[column_r5.key]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r27.open)("innerHTML", ctx_r27.details, i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(4).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r25[column_r5.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r61); const element_r25 = i0.ɵɵnextContext(3).$implicit; return element_r25.new = false; });
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r5.override ? ctx_r52.buildLink(column_r5.override, element_r25) : element_r25[column_r5.key]);
    i0.ɵɵproperty("matTooltip", ctx_r52.open)("ngClass", ctx_r52.btnOverride == true ? "link-btn" : "nowboard-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(4).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r25[column_r5.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 27);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r53 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r5.override ? ctx_r53.buildLink(column_r5.override, element_r25) : element_r25[column_r5.key]);
    i0.ɵɵproperty("matTooltip", ctx_r53.open)("ngClass", ctx_r53.btnOverride == true ? "link-btn" : "nowboard-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_Template, 3, 5, "a", 23);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_Template, 3, 5, "a", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r25.new);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !element_r25.new);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 29);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r74); const element_r25 = i0.ɵɵnextContext(2).$implicit; return element_r25.new = false; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("routerLink", column_r5.override ? ctx_r29.buildLink(column_r5.override, element_r25) : element_r25[column_r5.key]);
    i0.ɵɵproperty("matTooltip", ctx_r29.open);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r5.value == "Actions" ? ctx_r29.details : column_r5.key, " ");
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 32);
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", column_r5.valueOverride[element_r25[column_r5.key]], i0.ɵɵsanitizeUrl);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 30);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_img_2_Template, 1, 1, "img", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", element_r25[column_r5.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r25[column_r5.key] && column_r5.valueOverride);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-type", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", element_r25[column_r5.key])("type", element_r25[column_r5.override]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-status", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("lang", ctx_r32.lang)("type", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-customer-rank", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-priority", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r25["Icon"])("iconLabel", element_r25[column_r5.key] || null);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status-icon", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-gender", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "png-icon", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", element_r25[column_r5.key])("fontSize", column_r5.fontSize)("color", column_r5.color);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "menu", 39);
    i0.ɵɵlistener("callHandler", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_13_Template_menu_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r99); const ctx_r98 = i0.ɵɵnextContext(5); return ctx_r98.callFunction.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r25)("menuSettings", column_r5.config);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-phone-display", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("number", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 43);
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r25[column_r5.key])("size", column_r5.config == null ? null : column_r5.config.sizeIcon)("displayNo", column_r5.config.displayYes)("displayYes", column_r5.config.displayNo);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 44);
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r25[column_r5.key])("size", column_r5.config == null ? null : column_r5.config.sizeIcon);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template, 1, 4, "app-yes-nox", 41);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template, 1, 2, "app-yes-nox", 42);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.config && (column_r5.config.displayNo !== undefined && column_r5.config.displayYes !== undefined));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.config || column_r5.config && !(column_r5.config.displayNo || column_r5.config.displayYes));
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r43.Join(element_r25, column_r5.override));
    i0.ɵɵproperty("src", element_r25[column_r5.key])("fontSize", column_r5.fontSize)("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "date-format", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", element_r25[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r25[column_r5.key] && element_r25[column_r5.key].length ? element_r25[column_r5.key].length : "-", " ");
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "double-line", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("line1", element_r25[column_r5.key])("line2", element_r25[column_r5.override]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r25[column_r5.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 19);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 20);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 20);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 20);
    i0.ɵɵtemplate(4, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 20);
    i0.ɵɵtemplate(5, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_5_Template, 2, 2, "ng-container", 20);
    i0.ɵɵtemplate(6, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 20);
    i0.ɵɵtemplate(7, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(8, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_8_Template, 2, 2, "ng-container", 20);
    i0.ɵɵtemplate(9, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(10, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_10_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(11, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_11_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(12, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_12_Template, 2, 3, "ng-container", 20);
    i0.ɵɵtemplate(13, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_13_Template, 2, 2, "ng-container", 20);
    i0.ɵɵtemplate(14, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_14_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(15, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_Template, 3, 2, "ng-container", 20);
    i0.ɵɵtemplate(16, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_16_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(17, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_17_Template, 2, 4, "ng-container", 20);
    i0.ɵɵtemplate(18, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_18_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(19, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_19_Template, 3, 1, "ng-container", 20);
    i0.ɵɵtemplate(20, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_20_Template, 2, 2, "ng-container", 20);
    i0.ɵɵtemplate(21, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_21_Template, 2, 1, "ng-container", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngSwitch", column_r5.module);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "button-click");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "button-link");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "button-link-text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "custom-icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "it-category");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "it-status");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "customer-rank");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "priority");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "status");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "status-icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "gender-avatar");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "png-icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "menu");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "phone-display");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "yes-no-display");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "origin");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "name-avatar");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date-format");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "count-row");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "double-line");
} }
function TableComponent_table_1_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_Template, 22, 21, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r8.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r25 !== "empty");
} }
function TableComponent_table_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 7);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_2_td_3_Template, 2, 6, "td", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r5.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.sort);
} }
function TableComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 4, 5);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_1_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r126); const ctx_r125 = i0.ɵɵnextContext(); return ctx_r125.data.sortIt($event); });
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_Template, 4, 3, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r0.data);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.displayedColumns);
} }
function TableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 50)(2, "div", 51)(3, "div", 52);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noResult, " ");
} }
function TableComponent_mat_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 53, 54);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r129); const ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.data.fetch($event.pageIndex); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("length", ctx_r2.data.totalElements)("pageSize", ctx_r2.data.size)("pageIndex", ctx_r2.data.number)("hidePageSize", true);
} }
class TableComponent {
    constructor(router, route, service, detector, translate, changeDetectorRef) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.detector = detector;
        this.translate = translate;
        this.changeDetectorRef = changeDetectorRef;
        this.displayDetail = false;
        this.btnOverride = false;
        this.callFunction = new EventEmitter();
        this.onReady = new EventEmitter(true);
        this.inputSearch = '';
        this.EmptyRow = false;
        this.blockDetails = false;
        this.clicked = new EventEmitter();
        this.filter = [];
        this.index = 0;
        this.open = '';
        this.search = '';
        this.cancelSearch = '';
        this.noResult = '';
        this.details = '';
        this.showTable = false;
    }
    expand(element) {
        if (this.blockDetails) {
            return;
        }
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = element;
        }
        console.log(this.expandedElement);
    }
    ngOnInit() {
        this.onReady.emit(false);
        //this.service.emptyRow = this.EmptyRow;
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
        this.details = this.translate.translate(this.lang, 'DETAILS');
        if (this.data) {
            console.log('My data TABLE', this.data, this.columnDefinitions);
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            this.data.pageNumber.subscribe((newpage) => {
                if (newpage > 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge', // remove to replace all query params by provided
                    });
                }
                else if (newpage === 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge', // remove to replace all query params by provided
                    });
                    this.changeDetectorRef.markForCheck();
                }
                if (this.data && this.data.paginator && this.data.paginator.pageIndex !== newpage) {
                    this.data.paginator.pageIndex = newpage;
                    this.changeDetectorRef.markForCheck();
                }
            });
            this.service.updateHeader.subscribe((status) => {
                if (status === true) {
                    this.displayedColumns = null;
                    this.columnsToDisplay = null;
                    this.PrivateColumnDefinitions = this.service.displayColumn;
                    this.buildHeaders().catch((err) => console.log('Error build table', err));
                    this.detector.detectChanges();
                }
            });
            const page = this.route.snapshot.queryParams["page"];
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.buildHeaders().then(() => {
                if (page) {
                    const currentPage = Number(page) - 1;
                    this.data.startWith = currentPage;
                    this.data.fetch(currentPage);
                    this.data.number = currentPage;
                }
                else {
                    const currentPage = 0;
                    this.data.startWith = currentPage;
                    this.data.fetch(currentPage);
                    this.data.number = currentPage;
                }
                console.log('READYYYYYYYY', this.columnDefinitions, this.data);
                setTimeout(() => this.onReady.emit(true), 200);
            }).catch((err) => console.log('Error build table', err));
        }
    }
    ngOnDestroy() {
        if (this.service.updateHeader)
            this.service.updateHeader.unsubscribe();
        if (this.data.pageNumber)
            this.data.pageNumber.unsubscribe();
    }
    ngAfterViewChecked() {
        this.showTable = true;
    }
    async buildHeaders() {
        this.displayedColumns = await this.sort();
        if (this.displayedColumns) {
            const tmp = [];
            for (let k of this.displayedColumns) {
                tmp.push(k.key);
            }
            this.columnsToDisplay = [...tmp];
        }
        //console.log('Module Table New Update Column Definition',  this.columnsToDisplay);
    }
    generateClass(Class) {
        const MyClass = ['default-table-class'];
        for (let c of Class) {
            if (c && c !== '') {
                MyClass.push(c);
            }
        }
        return MyClass;
    }
    async sort() {
        const compare = (a, b) => {
            return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
        };
        if (this.PrivateColumnDefinitions) {
            return [...this.PrivateColumnDefinitions.sort(compare)];
        }
    }
    buildLink(override, element) {
        if (override.length >= 2) {
            let basePath = override[0];
            for (let i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    }
    Join(elem, override, joinKey = '\n') {
        const value = [];
        for (let x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    }
    reset() {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    }
    expandShow(template) {
    }
    ngOnChanges(changes) {
        if ((this.inputSearch.length > 1 || this.inputSearch.length === 0)
            && this.inputSearch.length < 200) {
            if (this.data) {
                this.data.filter(this.inputSearch);
                this.data.pageNumber.next(0);
                this.data.fetch(0);
                this.data.number = 0;
                this.changeDetectorRef.markForCheck();
            }
        }
        //  this.ngOnDestroy();
        this.ngOnInit();
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.TableService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.TranslateService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["ngx-design-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginatorCurrent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sortCurrent = _t.first);
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", onReady: "onReady", clicked: "clicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[1, "table-wrapper"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "class", "", 3, "dataSource", "matSortChange", 4, "ngIf"], [4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "", 3, "dataSource", "matSortChange"], ["table", "matSort"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [3, "matColumnDef"], ["class", "row-style", "mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "style", "cursor: pointer;", 3, "class", "click", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "cursor", "pointer", 3, "click"], [3, "input", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "row-style"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-link-text", 3, "matTooltip", "innerHTML", "click"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", 4, "ngIf"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click"], [3, "innerHTML"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink"], [1, "is-mat-icon-cell", 3, "input"], [1, "btn-link-text", "btn-xs", 3, "matTooltip", "routerLink", "click"], ["type", "hidden", 3, "value"], ["style", "width: 20px; height: 20px;", 3, "src", 4, "ngIf"], [2, "width", "20px", "height", "20px", 3, "src"], [3, "name", "type"], [3, "lang", "type"], [3, "type"], [3, "icon", "iconLabel"], [3, "label"], [3, "src", "fontSize", "color"], [3, "element", "menuSettings", "callHandler"], [3, "number"], [3, "valid", "size", "displayNo", "displayYes", 4, "ngIf"], [3, "valid", "size", 4, "ngIf"], [3, "valid", "size", "displayNo", "displayYes"], [3, "valid", "size"], [3, "icon"], [3, "matTooltip", "src", "fontSize", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], [3, "line1", "line2"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, ""], [1, "col-lg-12", "search-container", 2, "text-align", "center"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TableComponent_table_1_Template, 3, 2, "table", 1);
        i0.ɵɵtemplate(2, TableComponent_ng_container_2_Template, 5, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, TableComponent_mat_paginator_3_Template, 2, 4, "mat-paginator", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.columnsToDisplay && ctx.data && ctx.data.totalElements);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements > 0);
    } }, directives: [i4.NgIf, i5.MatTable, i6.MatSort, i4.NgForOf, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatHeaderCell, i6.MatSortHeader, i7.IsMatIconComponent, i5.MatCellDef, i5.MatCell, i4.NgSwitch, i4.NgSwitchCase, i8.MatTooltip, i1.RouterLinkWithHref, i4.NgClass, i9.EquipementTypeComponent, i10.EquipementStatusComponent, i11.CustomerRankComponent, i12.PriorityComponent, i13.StatusComponent, i14.StatusIconComponent, i15.GenderComponent, i16.PngIconComponent, i17.MenuComponent, i18.PhoneDisplayComponent, i19.YesNoComponent, i20.OriginComponent, i21.NameAvatarComponent, i22.DateFormatComponent, i23.DoubleLineComponent, i4.NgSwitchDefault, i24.MatPaginator], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'ngx-design-table', animations: [trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n    <table mat-table #table=\"matSort\"\n           [dataSource]=\"data \" multiTemplateDataRows matSort\n           class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements\"\n           (matSortChange)=\"data.sortIt($event)\">\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon\n                                *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                                [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                           [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           (click)=\"element.new = false\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\"\n                           [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\"\n                           class=\"btn-link-text btn-xs\"\n                           (click)=\"element.new = false\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                             [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\"\n                                             [type]=\"element[column.override]\"></app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\"\n                                       [iconLabel]=\"element[column.key] || null\"></icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\"\n                                  [color]=\"column.color\"></png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                              [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                                *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                                [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n                        >\n                        </app-yes-nox>\n                        <app-yes-nox\n                                *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                                     [src]=\"element[column.key]\"\n                                     [fontSize]=\"column.fontSize\"\n                                     [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                   [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                   (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.TableService }, { type: i0.ChangeDetectorRef }, { type: i3.TranslateService }, { type: i0.ChangeDetectorRef }]; }, { paginatorCurrent: [{
            type: ViewChild,
            args: ['MatPaginatorCurrent', { static: true }]
        }], sortCurrent: [{
            type: ViewChild,
            args: ['table', { static: true }]
        }], columnDefinitions: [{
            type: Input
        }], displayDetail: [{
            type: Input
        }], displayComponent: [{
            type: Input
        }], data: [{
            type: Input
        }], lang: [{
            type: Input
        }], btnOverride: [{
            type: Input
        }], callFunction: [{
            type: Output
        }], onReady: [{
            type: Output
        }], inputSearch: [{
            type: Input
        }], EmptyRow: [{
            type: Input
        }], blockDetails: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUdwRSxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1QvRCw4QkFFb0I7SUFDaEIsc0NBQTBEO0lBQzlELGlCQUFLOzs7O0lBSEQsdUpBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjs7O0lBSi9DLDZCQUFrQztJQUM5QixtR0FJSztJQUNULDBCQUFlOzs7SUFTSCxzQ0FHa0I7OztJQURWLDZFQUF5RDs7OztJQVByRSw4QkFHNkI7SUFGekIsK1BBQVMsbUdBQW9GLElBQUM7SUFHOUYsc0NBQTBEO0lBQzFELGtKQUdrQjtJQUN0QixpQkFBSzs7OztJQVBELHdKQUFzRztJQUVyRixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFFOUIsZUFBNkQ7SUFBN0Qsb0ZBQTZEOzs7SUFQOUUsNkJBQXVDO0lBQ25DLG1IQVNLO0lBQ1QsMEJBQWU7OztJQUVYLDhCQUMyRztJQUN2RyxzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFGRCx3SkFBc0c7SUFDckYsZUFBc0I7SUFBdEIsdUNB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QkFDSSxrQkFBa0IsY0FHaEIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO3dCQUNqQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzt3QkFDM0UsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzt3QkFDdkMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3FCQUN4RixDQUFDLENBQUMsaUJBQ1ksaUJBQWlCLENBQUMsSUFBSTtnTkFHYSxnQkFBZ0I7a0JBQWpFLFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ1osV0FBVztrQkFBOUMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBRXpCLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNOztBQXVNWCxPQUFPLEVBQ0gsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gXCIuL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tIFwiLi9jb3JlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xuICAgIHNpemVJY29uPzogbnVtYmVyO1xuICAgIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICAgIGRpc3BsYXlObz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcbiAgICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxuICAgIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICAgIHJhdGlvPzogbnVtYmVyO1xuICAgIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxuICAgIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcbiAgICBtb2R1bGU/OiBDZWxsc0NvbXBvbmVudExpc3Q7XG4gICAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICAgIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICAgIGFsaWduPzogc3RyaW5nOyAvLyBjZWxsIGNvbnRlbnQgYWxpZ24gJ2xlZnQgY2VudGVyIHJpZ2h0J1xuICAgIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXG4gICAgc3RhdGVtZW50PzogYm9vbGVhbjsgLy8gYnkgZGVmYXVsdCBzdGF0ZW1lbnQgaXMgZmFsc2UgYW5kIGlzIHVzZWQgd2l0aCAnY2xpY2thYmxlJyBvcHRpb25zXG4gICAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcbiAgICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcbiAgICB2YWx1ZU92ZXJyaWRlPzoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9O1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZSd9KSksXG4gICAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gICAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XG5cbiAgICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNwbGF5Q29tcG9uZW50OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGF0YTogQ29yZU1hdFRhYmxlSW50ZXJmYWNlO1xuICAgIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgICBASW5wdXQoKSBidG5PdmVycmlkZSA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBjYWxsRnVuY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVhZHk6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSlcbiAgICBASW5wdXQoKSBpbnB1dFNlYXJjaCA9ICcnO1xuICAgIEBJbnB1dCgpIEVtcHR5Um93ID0gZmFsc2U7XG4gICAgQElucHV0KCkgYmxvY2tEZXRhaWxzID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCBzdGF0ZW1lbnQ6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgY29sdW1uc1RvRGlzcGxheTogc3RyaW5nW107XG4gICAgcHVibGljIGZpbHRlcjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBhbnk7XG4gICAgcHVibGljIGV4cGFuZGVkRWxlbWVudDogYW55O1xuICAgIHB1YmxpYyBpbmRleCA9IDA7XG4gICAgcHVibGljIG9wZW4gPSAnJztcbiAgICBwdWJsaWMgc2VhcmNoID0gJyc7XG4gICAgcHVibGljIGNhbmNlbFNlYXJjaCA9ICcnO1xuICAgIHB1YmxpYyBub1Jlc3VsdCA9ICcnO1xuICAgIHB1YmxpYyBkZXRhaWxzID0gJyc7XG4gICAgcHVibGljIHNob3dUYWJsZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgZXhwYW5kKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tEZXRhaWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV4cGFuZGVkRWxlbWVudCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25SZWFkeS5lbWl0KGZhbHNlKTtcbiAgICAgICAgLy90aGlzLnNlcnZpY2UuZW1wdHlSb3cgPSB0aGlzLkVtcHR5Um93O1xuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICAgICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xuICAgICAgICB0aGlzLm5vUmVzdWx0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ05PX1JFU1VMVCcpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTXkgZGF0YSBUQUJMRScsIHRoaXMuZGF0YSwgdGhpcy5jb2x1bW5EZWZpbml0aW9ucylcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvckN1cnJlbnQ7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld3BhZ2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG5ld3BhZ2UgKyAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld3BhZ2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnBhZ2luYXRvciAmJiB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCAhPT0gbmV3cGFnZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5ld3BhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyLnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuc2VydmljZS5kaXNwbGF5Q29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInBhZ2VcIl07XG5cbiAgICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcbiAgICAgICAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IE51bWJlcihwYWdlKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZldGNoKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFQURZWVlZWVlZWScsIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMsIHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25SZWFkeS5lbWl0KHRydWUpLCAyMDApO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyKSB0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEucGFnZU51bWJlcikgdGhpcy5kYXRhLnBhZ2VOdW1iZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1RhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBidWlsZEhlYWRlcnMoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICAgICAgICBjb25zdCB0bXA6IGFueSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICB0bXAucHVzaChrLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBbLi4udG1wXTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdNb2R1bGUgVGFibGUgTmV3IFVwZGF0ZSBDb2x1bW4gRGVmaW5pdGlvbicsICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ2xhc3MoQ2xhc3M6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNeUNsYXNzO1xuICAgIH1cblxuICAgIGFzeW5jIHNvcnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIEpvaW4oZWxlbTogYW55LCBvdmVycmlkZTogc3RyaW5nW10sIGpvaW5LZXk6IHN0cmluZyA9ICdcXG4nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSlcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoKHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID4gMSB8fCB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICYmIHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoIDwgMjAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcih0aGlzLmlucHV0U2VhcmNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5uZXh0KDApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZldGNoKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIC8vICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgICBDb3JlTWF0VGFibGUsXG4gICAgRmlsdGVyRGF0ZUludGVyZmFjZSxcbiAgICBDb3JlTWF0VGFibGVJbnRlcmZhY2UsXG4gICAgUGFnZSxcbiAgICBQYWdlUmVxdWVzdCxcbiAgICBTb3J0LFxuICAgIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gICAgQ2VsbHNDb21wb25lbnRMaXN0LFxuICAgIFRhYmxlQ29tcG9uZW50XG59XG4iLCI8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxuICAgIDwhLS0gVGFibGUgLS0+XG4gICAgPHRhYmxlIG1hdC10YWJsZSAjdGFibGU9XCJtYXRTb3J0XCJcbiAgICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YSBcIiBtdWx0aVRlbXBsYXRlRGF0YVJvd3MgbWF0U29ydFxuICAgICAgICAgICBjbGFzcz1cIlwiICpuZ0lmPVwiZGlzcGxheWVkQ29sdW1ucyAmJiBjb2x1bW5zVG9EaXNwbGF5ICYmIGRhdGEgJiYgZGF0YS50b3RhbEVsZW1lbnRzXCJcbiAgICAgICAgICAgKG1hdFNvcnRDaGFuZ2UpPVwiZGF0YS5zb3J0SXQoJGV2ZW50KVwiPlxuICAgICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uLmtleVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZGlzcGxheWVkQ29sdW1uc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5zb3J0XCI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIlxuICAgICAgICAgICAgICAgICAgICBtYXQtc29ydC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLnNvcnRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEFqb3V0ZXIgZm9uY3Rpb24gZ2VuZXJhdGUgQ2xhc3MgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5jbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrZWQuZW1pdCh7a2V5IDogY29sdW1uLmtleSwgc3RhdGVtZW50IDogKGNvbHVtbi5zdGF0ZW1lbnQgPSAhY29sdW1uLnN0YXRlbWVudCl9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2x1bW4udmFsdWVTdGF0ZW1lbnQgJiYgY29sdW1uLnN0YXRlbWVudCAhPT0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0XT1cImNvbHVtbi52YWx1ZVN0YXRlbWVudFtjb2x1bW4uc3RhdGVtZW50ID8gMSA6IDBdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5jbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1zdHlsZVwiIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJyddKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtZW50ICE9PSAnZW1wdHknXCIgW25nU3dpdGNoXT1cImNvbHVtbi5tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gY2xpY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tY2xpY2snXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCIgY2xhc3M9XCJidG4tbGluay10ZXh0XCIgKGNsaWNrKT1cImNhbGxGdW5jdGlvbi5lbWl0KGVsZW1lbnRbY29sdW1uLmtleV0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZGV0YWlsc1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGxpbmsgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tbGluaydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgbWF0QmFkZ2U9XCIqXCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImVsZW1lbnQubmV3XCIgW21hdFRvb2x0aXBdPVwib3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1idXR0b24gYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlbGVtZW50Lm5ldyA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImJ0bk92ZXJyaWRlID09IHRydWUgPyAnbGluay1idG4nOiAnbm93Ym9hcmQtYnRuJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4uZGlzcGxheVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhZWxlbWVudC5uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwib3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1idXR0b24gYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImJ0bk92ZXJyaWRlID09IHRydWUgPyAnbGluay1idG4nOiAnbm93Ym9hcmQtYnRuJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIGNsYXNzPVwiaXMtbWF0LWljb24tY2VsbFwiIFtpbnB1dF09XCJjb2x1bW4uZGlzcGxheVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gbGluayB0ZXh0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWxpbmstdGV4dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFttYXRUb29sdGlwXT1cIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tbGluay10ZXh0IGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbWVudC5uZXcgPSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbHVtbi52YWx1ZSA9PSAnQWN0aW9ucycgPyBkZXRhaWxzIDogY29sdW1uLmtleSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGN1c3RvbS0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFt2YWx1ZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiZWxlbWVudFtjb2x1bW4ua2V5XSAmJiBjb2x1bW4udmFsdWVPdmVycmlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiY29sdW1uLnZhbHVlT3ZlcnJpZGVbZWxlbWVudFtjb2x1bW4ua2V5XV1cIiBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaXQtY2F0ZWdvcnknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWVxdWlwZW1lbnQtdHlwZSBbbmFtZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLm92ZXJyaWRlXVwiPjwvYXBwLWVxdWlwZW1lbnQtdHlwZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBpdCBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpdC1zdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWVxdWlwZW1lbnQtc3RhdHVzIFtsYW5nXT1cImxhbmdcIiBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtZXF1aXBlbWVudC1zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gY3VzdG9tZXIgcmFuayAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbWVyLXJhbmsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWN1c3RvbWVyLXJhbmsgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWN1c3RvbWVyLXJhbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gcHJpb3JpdHktLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3ByaW9yaXR5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGljb24tcHJpb3JpdHkgW2ljb25dPVwiZWxlbWVudFsnSWNvbiddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpY29uTGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XSB8fCBudWxsXCI+PC9pY29uLXByaW9yaXR5PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHN0YXR1cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3N0YXR1cydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdGF0dXMgW2xhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3N0YXR1cz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzdGF0dXMtaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdGF0dXMtaWNvbiBbbGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3RhdHVzLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBnZW5kZXIgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidnZW5kZXItYXZhdGFyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1nZW5kZXIgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWdlbmRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBQbmcgSWNvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BuZy1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBuZy1pY29uIFtzcmNdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtmb250U2l6ZV09XCJjb2x1bW4uZm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2x1bW4uY29sb3JcIj48L3BuZy1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbWVudSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ21lbnUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWVudSAoY2FsbEhhbmRsZXIpPVwiY2FsbEZ1bmN0aW9uLmVtaXQoJGV2ZW50KVwiIFtlbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnVTZXR0aW5nc109XCJjb2x1bW4uY29uZmlnXCI+PC9tZW51PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGhvbmUtZGlzcGxheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtcGhvbmUtZGlzcGxheSBbbnVtYmVyXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1waG9uZS1kaXNwbGF5PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIneWVzLW5vLWRpc3BsYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXllcy1ub3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2x1bW4uY29uZmlnICYmIChjb2x1bW4uY29uZmlnLmRpc3BsYXlObyAhPT0gdW5kZWZpbmVkICYmIGNvbHVtbi5jb25maWcuZGlzcGxheVllcyAhPT0gdW5kZWZpbmVkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW3NpemVdPVwiY29sdW1uLmNvbmZpZz8uc2l6ZUljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheU5vXT1cImNvbHVtbi5jb25maWcuZGlzcGxheVllc1wiIFtkaXNwbGF5WWVzXT1cImNvbHVtbi5jb25maWcuZGlzcGxheU5vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXllcy1ub3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXllcy1ub3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoIWNvbHVtbi5jb25maWcgfHwgKGNvbHVtbi5jb25maWcgJiYgIShjb2x1bW4uY29uZmlnLmRpc3BsYXlObyB8fCBjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXMpKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzaXplXT1cImNvbHVtbi5jb25maWc/LnNpemVJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC15ZXMtbm94PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIG9yaWdpbi0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInb3JpZ2luJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGljb24tb3JpZ2luIFtpY29uXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2ljb24tb3JpZ2luPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIG5hbWUgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIiduYW1lLWF2YXRhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYW1lLWF2YXRhciBtYXRUb29sdGlwPVwie3tKb2luKGVsZW1lbnQsIGNvbHVtbi5vdmVycmlkZSl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJlbGVtZW50W2NvbHVtbi5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9udFNpemVdPVwiY29sdW1uLmZvbnRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcENsYXNzXT1cIidteS10b29sdGlwJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYW1lLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZGF0ZSBmb3JtYXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkYXRlLWZvcm1hdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlLWZvcm1hdCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHhcIiBbZGF0ZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9kYXRlLWZvcm1hdD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY291bnQgcm93cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NvdW50LXJvdydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDE0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7KGVsZW1lbnRbY29sdW1uLmtleV0gJiYgZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggPyBlbGVtZW50W2NvbHVtbi5rZXldLmxlbmd0aCA6ICctJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRvdWJsZSBsaW5lIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZG91YmxlLWxpbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG91YmxlLWxpbmUgW2xpbmUxXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbbGluZTJdPVwiZWxlbWVudFtjb2x1bW4ub3ZlcnJpZGVdXCI+PC9kb3VibGUtbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3RhYmxlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhICYmIGRhdGEudG90YWxFbGVtZW50cyA9PT0gMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJoZWlnaHQ6IDg0cHg7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgc2VhcmNoLWNvbnRhaW5lclwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG5vUmVzdWx0IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG1hdC1wYWdpbmF0b3IgI01hdFBhZ2luYXRvckN1cnJlbnQgKm5nSWY9XCJkYXRhICYmIGRhdGEudG90YWxFbGVtZW50cyA+IDBcIiBbbGVuZ3RoXT1cImRhdGEudG90YWxFbGVtZW50c1wiXG4gICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cImRhdGEuc2l6ZVwiIFtwYWdlSW5kZXhdPVwiZGF0YS5udW1iZXJcIiBbaGlkZVBhZ2VTaXplXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIChwYWdlKT1cImRhdGEuZmV0Y2goJGV2ZW50LnBhZ2VJbmRleClcIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==