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
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵelement(1, "app-is-mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r10.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
} }
function TableComponent_table_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_1_th_1_Template, 2, 6, "th", 10);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-is-mat-icon", 12);
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("input", column_r5.valueStatement[column_r5.statement ? 1 : 0]);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_Template_th_click_0_listener() { i0.ɵɵrestoreView(_r20); const column_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.clicked.emit({ key: column_r5.key, statement: column_r5.statement = !column_r5.statement }); });
    i0.ɵɵelement(1, "app-is-mat-icon", 12);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template, 1, 1, "app-is-mat-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r15.generateClass(i0.ɵɵpureFunction2(4, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.valueStatement && column_r5.statement !== undefined);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_th_1_Template, 3, 7, "th", 14);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵelement(1, "app-is-mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r22.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 13);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_2_ng_container_2_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵelement(1, "app-is-mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r14.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.value);
} }
function TableComponent_table_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_2_ng_container_2_th_3_Template, 2, 6, "th", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.clickable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.clickable);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r51); const element_r26 = i0.ɵɵnextContext(2).$implicit; const column_r5 = i0.ɵɵnextContext().$implicit; const ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.callFunction.emit(element_r26[column_r5.key]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r28.open)("innerHTML", ctx_r28.details, i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(4).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r26[column_r5.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 26);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r62); const element_r26 = i0.ɵɵnextContext(3).$implicit; return element_r26.new = false; });
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r53 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r5.override ? ctx_r53.buildLink(column_r5.override, element_r26) : element_r26[column_r5.key]);
    i0.ɵɵproperty("matTooltip", ctx_r53.open)("ngClass", ctx_r53.btnOverride == true ? "link-btn" : "nowboard-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(4).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r26[column_r5.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 28);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r54 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r5.override ? ctx_r54.buildLink(column_r5.override, element_r26) : element_r26[column_r5.key]);
    i0.ɵɵproperty("matTooltip", ctx_r54.open)("ngClass", ctx_r54.btnOverride == true ? "link-btn" : "nowboard-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.display);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_1_Template, 3, 5, "a", 24);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_a_2_Template, 3, 5, "a", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r26.new);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !element_r26.new);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 30);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r75); const element_r26 = i0.ɵɵnextContext(2).$implicit; return element_r26.new = false; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("routerLink", column_r5.override ? ctx_r30.buildLink(column_r5.override, element_r26) : element_r26[column_r5.key]);
    i0.ɵɵproperty("matTooltip", ctx_r30.open);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r5.value == "Actions" ? ctx_r30.details : column_r5.key, " ");
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 33);
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", column_r5.valueOverride[element_r26[column_r5.key]], i0.ɵɵsanitizeUrl);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 31);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_img_2_Template, 1, 1, "img", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", element_r26[column_r5.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r26[column_r5.key] && column_r5.valueOverride);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-type", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", element_r26[column_r5.key])("type", element_r26[column_r5.override]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-status", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("lang", ctx_r33.lang)("type", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-customer-rank", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-priority", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r26["Icon"])("iconLabel", element_r26[column_r5.key] || null);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status-icon", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-gender", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "png-icon", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", element_r26[column_r5.key])("fontSize", column_r5.fontSize)("color", column_r5.color);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "menu", 40);
    i0.ɵɵlistener("callHandler", function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_13_Template_menu_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r100); const ctx_r99 = i0.ɵɵnextContext(5); return ctx_r99.callFunction.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r26)("menuSettings", column_r5.config);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-phone-display", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("number", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 44);
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r26[column_r5.key])("size", column_r5.config == null ? null : column_r5.config.sizeIcon)("displayNo", column_r5.config.displayYes)("displayYes", column_r5.config.displayNo);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 45);
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(3).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r26[column_r5.key])("size", column_r5.config == null ? null : column_r5.config.sizeIcon);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template, 1, 4, "app-yes-nox", 42);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template, 1, 2, "app-yes-nox", 43);
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
    i0.ɵɵelement(1, "icon-origin", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r44 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r44.Join(element_r26, column_r5.override));
    i0.ɵɵproperty("src", element_r26[column_r5.key])("fontSize", column_r5.fontSize)("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "date-format", 48);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", element_r26[column_r5.key]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r26[column_r5.key] && element_r26[column_r5.key].length ? element_r26[column_r5.key].length : "-", " ");
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "double-line", 50);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("line1", element_r26[column_r5.key])("line2", element_r26[column_r5.override]);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r26 = i0.ɵɵnextContext(2).$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r26[column_r5.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_2_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 20);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 21);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 21);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 21);
    i0.ɵɵtemplate(4, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 21);
    i0.ɵɵtemplate(5, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_5_Template, 2, 2, "ng-container", 21);
    i0.ɵɵtemplate(6, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 21);
    i0.ɵɵtemplate(7, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(8, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_8_Template, 2, 2, "ng-container", 21);
    i0.ɵɵtemplate(9, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(10, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_10_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(11, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_11_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(12, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_12_Template, 2, 3, "ng-container", 21);
    i0.ɵɵtemplate(13, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_13_Template, 2, 2, "ng-container", 21);
    i0.ɵɵtemplate(14, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_14_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(15, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_15_Template, 3, 2, "ng-container", 21);
    i0.ɵɵtemplate(16, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_16_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(17, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_17_Template, 2, 4, "ng-container", 21);
    i0.ɵɵtemplate(18, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_18_Template, 2, 1, "ng-container", 21);
    i0.ɵɵtemplate(19, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_19_Template, 3, 1, "ng-container", 21);
    i0.ɵɵtemplate(20, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_20_Template, 2, 2, "ng-container", 21);
    i0.ɵɵtemplate(21, TableComponent_table_1_ng_container_2_td_3_ng_container_1_ng_container_21_Template, 2, 1, "ng-container", 22);
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
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_td_3_ng_container_1_Template, 22, 21, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r8.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r5.class, column_r5.align ? "text-align-" + column_r5.align : "")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r26 !== "empty");
} }
function TableComponent_table_1_ng_container_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 51);
} }
function TableComponent_table_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 7);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_2_td_3_Template, 2, 6, "td", 8);
    i0.ɵɵtemplate(4, TableComponent_table_1_ng_container_2_tr_4_Template, 1, 0, "tr", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matColumnDef", column_r5.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r5.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r5.sort);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matRowDefColumns", ctx_r4.columnsToDisplay);
} }
function TableComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 4, 5);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_1_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r128); const ctx_r127 = i0.ɵɵnextContext(); return ctx_r127.data.sortIt($event); });
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_2_Template, 5, 4, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r0.data);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.displayedColumns);
} }
function TableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 52)(2, "div", 53)(3, "div", 54);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noResult, " ");
} }
function TableComponent_mat_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 55, 56);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r131); const ctx_r130 = i0.ɵɵnextContext(); return ctx_r130.data.fetch($event.pageIndex); });
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
            console.log('My data TABLE', this.data, 'column definition', this.columnDefinitions);
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
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", onReady: "onReady", clicked: "clicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[1, "table-wrapper"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "class", "", 3, "dataSource", "matSortChange", 4, "ngIf"], [4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "", 3, "dataSource", "matSortChange"], ["table", "matSort"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [3, "matColumnDef"], ["class", "row-style", "mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "style", "cursor: pointer;", 3, "class", "click", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "cursor", "pointer", 3, "click"], [3, "input", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "row-style"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-link-text", 3, "matTooltip", "innerHTML", "click"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", 4, "ngIf"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click"], [3, "innerHTML"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink"], [1, "is-mat-icon-cell", 3, "input"], [1, "btn-link-text", "btn-xs", 3, "matTooltip", "routerLink", "click"], ["type", "hidden", 3, "value"], ["style", "width: 20px; height: 20px;", 3, "src", 4, "ngIf"], [2, "width", "20px", "height", "20px", 3, "src"], [3, "name", "type"], [3, "lang", "type"], [3, "type"], [3, "icon", "iconLabel"], [3, "label"], [3, "src", "fontSize", "color"], [3, "element", "menuSettings", "callHandler"], [3, "number"], [3, "valid", "size", "displayNo", "displayYes", 4, "ngIf"], [3, "valid", "size", 4, "ngIf"], [3, "valid", "size", "displayNo", "displayYes"], [3, "valid", "size"], [3, "icon"], [3, "matTooltip", "src", "fontSize", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], [3, "line1", "line2"], ["mat-row", "", 1, "element-row"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, ""], [1, "col-lg-12", "search-container", 2, "text-align", "center"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i4.NgIf, i5.MatTable, i6.MatSort, i4.NgForOf, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatHeaderCell, i6.MatSortHeader, i7.IsMatIconComponent, i5.MatCellDef, i5.MatCell, i4.NgSwitch, i4.NgSwitchCase, i8.MatTooltip, i1.RouterLinkWithHref, i4.NgClass, i9.EquipementTypeComponent, i10.EquipementStatusComponent, i11.CustomerRankComponent, i12.PriorityComponent, i13.StatusComponent, i14.StatusIconComponent, i15.GenderComponent, i16.PngIconComponent, i17.MenuComponent, i18.PhoneDisplayComponent, i19.YesNoComponent, i20.OriginComponent, i21.NameAvatarComponent, i22.DateFormatComponent, i23.DoubleLineComponent, i4.NgSwitchDefault, i5.MatRowDef, i5.MatRow, i24.MatPaginator], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
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
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n    <table mat-table #table=\"matSort\"\n           [dataSource]=\"data \" multiTemplateDataRows matSort\n           class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements\"\n           (matSortChange)=\"data.sortIt($event)\">\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon\n                                *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                                [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                           [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           (click)=\"element.new = false\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\"\n                           [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\"\n                           class=\"btn-link-text btn-xs\"\n                           (click)=\"element.new = false\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                             [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\"\n                                             [type]=\"element[column.override]\"></app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\"\n                                       [iconLabel]=\"element[column.key] || null\"></icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\"\n                                  [color]=\"column.color\"></png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                              [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                                *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                                [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n                        >\n                        </app-yes-nox>\n                        <app-yes-nox\n                                *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                                     [src]=\"element[column.key]\"\n                                     [fontSize]=\"column.fontSize\"\n                                     [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n            <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"></tr>\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                   [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                   (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUdwRSxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1QvRCw4QkFFb0I7SUFDaEIsc0NBQTBEO0lBQzlELGlCQUFLOzs7O0lBSEQsd0pBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjs7O0lBSi9DLDZCQUFrQztJQUM5QixvR0FJSztJQUNULDBCQUFlOzs7SUFTSCxzQ0FHa0I7OztJQURWLDZFQUF5RDs7OztJQVByRSw4QkFHNkI7SUFGekIsK1BBQVMsbUdBQW9GLElBQUM7SUFHOUYsc0NBQTBEO0lBQzFELGtKQUdrQjtJQUN0QixpQkFBSzs7OztJQVBELHdKQUFzRztJQUVyRixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFFOUIsZUFBNkQ7SUFBN0Qsb0ZBQTZEOzs7SUFQOUUsNkJBQXVDO0lBQ25DLG1IQVNLO0lBQ1QsMEJBQWU7OztJQUVYLDhCQUMyRztJQUN2RyxzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFGRCx3SkFBc0c7SUFDckYsZUFBc0I7SUFBdEIsdUNB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LFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7d0JBQzNFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7d0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztxQkFDeEYsQ0FBQyxDQUFDLGlCQUNZLGlCQUFpQixDQUFDLElBQUk7Z05BR2EsZ0JBQWdCO2tCQUFqRSxTQUFTO21CQUFDLHFCQUFxQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQUNaLFdBQVc7a0JBQTlDLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQUV6QixpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0UsV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTTs7QUFzTVgsT0FBTyxFQUNILFlBQVksRUFPWixrQkFBa0IsRUFDbEIsY0FBYyxFQUNqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0fSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge0NvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBQYWdlLCBQYWdlUmVxdWVzdCwgU29ydH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgICBzaXplSWNvbj86IG51bWJlcjtcbiAgICBkaXNwbGF5WWVzPzogYm9vbGVhbjtcbiAgICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gICAga2V5OiBzdHJpbmc7IC8vIG9iamVjdCBrZXlcbiAgICB2YWx1ZTogc3RyaW5nOyAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgICByYXRpbz86IG51bWJlcjtcbiAgICBvcmRlcj86IG51bWJlcjsgLy8gc29ydCBjb2x1bW5cbiAgICBjbGFzcz86IHN0cmluZzsgLy8gY3NzIGNsYXNzXG4gICAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0O1xuICAgIG92ZXJyaWRlPzogc3RyaW5nIHwgc3RyaW5nW107IC8vIGZvciBidWlsZGluZyB1cmwgb3IgYXZhdGFyIG5hbWVcbiAgICBkaXNwbGF5Pzogc3RyaW5nOyAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgICBhbGlnbj86IHN0cmluZzsgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgICBzb3J0PzogYm9vbGVhbjsgLy8gJ3NvcnRhYmxlIGNvbHVtbidcbiAgICBjbGlja2FibGU/OiBib29sZWFuOyAvLyBlbmFibGUgY2xpY2thYmxlIGNvbHVtbiB3aGVuIHNvcnRpbmcgaXMgZGlzYWJsZVxuICAgIHN0YXRlbWVudD86IGJvb2xlYW47IC8vIGJ5IGRlZmF1bHQgc3RhdGVtZW50IGlzIGZhbHNlIGFuZCBpcyB1c2VkIHdpdGggJ2NsaWNrYWJsZScgb3B0aW9uc1xuICAgIHZhbHVlU3RhdGVtZW50Pzogc3RyaW5nW107XG4gICAgY29uZmlnPzogZGlzcGxheUNvbHVtbnNDb25maWc7XG4gICAgdmFsdWVPdmVycmlkZT86IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfTtcbiAgICBmb250U2l6ZT86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZGVzaWduLXRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcbiAgICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSldLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYmxlJywge3N0YXRpYzogdHJ1ZX0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuXG4gICAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRhdGE6IENvcmVNYXRUYWJsZUludGVyZmFjZTtcbiAgICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgY2FsbEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvblJlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpXG4gICAgQElucHV0KCkgaW5wdXRTZWFyY2ggPSAnJztcbiAgICBASW5wdXQoKSBFbXB0eVJvdyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJsb2NrRGV0YWlscyA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgc3RhdGVtZW50OiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICAgIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgICBwdWJsaWMgaW5kZXggPSAwO1xuICAgIHB1YmxpYyBvcGVuID0gJyc7XG4gICAgcHVibGljIHNlYXJjaCA9ICcnO1xuICAgIHB1YmxpYyBjYW5jZWxTZWFyY2ggPSAnJztcbiAgICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcbiAgICBwdWJsaWMgZGV0YWlscyA9ICcnO1xuICAgIHB1YmxpYyBzaG93VGFibGUgPSBmYWxzZTtcbiAgICBwcml2YXRlIFByaXZhdGVDb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIGV4cGFuZChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5leHBhbmRlZEVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uUmVhZHkuZW1pdChmYWxzZSk7XG4gICAgICAgIC8vdGhpcy5zZXJ2aWNlLmVtcHR5Um93ID0gdGhpcy5FbXB0eVJvdztcbiAgICAgICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnU0VBUkNIJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsU2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0NBTkNFTF9TRUFSQ0gnKTtcbiAgICAgICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ015IGRhdGEgVEFCTEUnLCB0aGlzLmRhdGEsICdjb2x1bW4gZGVmaW5pdGlvbicsIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMpXG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3JDdXJyZW50O1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQgPSB0aGlzLnNvcnRDdXJyZW50O1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5zdWJzY3JpYmUoKG5ld3BhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBuZXdwYWdlICsgMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggPSBuZXdwYWdlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwYWdlXCJdO1xuXG4gICAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBOdW1iZXIocGFnZSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZTogbnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0V2l0aCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmV0Y2goY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRUFEWVlZWVlZWVknLCB0aGlzLmNvbHVtbkRlZmluaXRpb25zLCB0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uUmVhZHkuZW1pdCh0cnVlKSwgMjAwKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICB0aGlzLnNob3dUYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBhd2FpdCB0aGlzLnNvcnQoKTtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICAgICAgY29uc3QgdG1wOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kdWxlIFRhYmxlIE5ldyBVcGRhdGUgQ29sdW1uIERlZmluaXRpb24nLCAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xuICAgICAgICBmb3IgKGxldCBjIG9mIENsYXNzKSB7XG4gICAgICAgICAgICBpZiAoYyAmJiBjICE9PSAnJykge1xuICAgICAgICAgICAgICAgIE15Q2xhc3MucHVzaChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTXlDbGFzcztcbiAgICB9XG5cbiAgICBhc3luYyBzb3J0KCkge1xuICAgICAgICBjb25zdCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAoYS5vcmRlciA+IGIub3JkZXIgPyAxIDogMCkpXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi50aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucy5zb3J0KGNvbXBhcmUpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgICAgIGlmIChvdmVycmlkZS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSBvdmVycmlkZVswXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3ZlcnJpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4IGluIGVsZW0pIHtcbiAgICAgICAgICAgIGlmIChvdmVycmlkZS5pbmRleE9mKHgpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCh0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA+IDEgfHwgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAmJiB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA8IDIwMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIodGhpcy5pbnB1dFNlYXJjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIubmV4dCgwKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAvLyAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7XG4gICAgQ29yZU1hdFRhYmxlLFxuICAgIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gICAgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLFxuICAgIFBhZ2UsXG4gICAgUGFnZVJlcXVlc3QsXG4gICAgU29ydCxcbiAgICBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLFxuICAgIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgICBUYWJsZUNvbXBvbmVudFxufVxuIiwiPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgICA8IS0tIFRhYmxlIC0tPlxuICAgIDx0YWJsZSBtYXQtdGFibGUgI3RhYmxlPVwibWF0U29ydFwiXG4gICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGEgXCIgbXVsdGlUZW1wbGF0ZURhdGFSb3dzIG1hdFNvcnRcbiAgICAgICAgICAgY2xhc3M9XCJcIiAqbmdJZj1cImRpc3BsYXllZENvbHVtbnMgJiYgY29sdW1uc1RvRGlzcGxheSAmJiBkYXRhICYmIGRhdGEudG90YWxFbGVtZW50c1wiXG4gICAgICAgICAgIChtYXRTb3J0Q2hhbmdlKT1cImRhdGEuc29ydEl0KCRldmVudClcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5rZXlcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRpc3BsYXllZENvbHVtbnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uc29ydFwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXNvcnQtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5zb3J0XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBBam91dGVyIGZvbmN0aW9uIGdlbmVyYXRlIENsYXNzIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja2VkLmVtaXQoe2tleSA6IGNvbHVtbi5rZXksIHN0YXRlbWVudCA6IChjb2x1bW4uc3RhdGVtZW50ID0gIWNvbHVtbi5zdGF0ZW1lbnQpfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sdW1uLnZhbHVlU3RhdGVtZW50ICYmIGNvbHVtbi5zdGF0ZW1lbnQgIT09IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dF09XCJjb2x1bW4udmFsdWVTdGF0ZW1lbnRbY29sdW1uLnN0YXRlbWVudCA/IDEgOiAwXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctc3R5bGVcIiBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICcnXSlcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbWVudCAhPT0gJ2VtcHR5J1wiIFtuZ1N3aXRjaF09XCJjb2x1bW4ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGNsaWNrIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWNsaWNrJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW21hdFRvb2x0aXBdPVwib3BlblwiIGNsYXNzPVwiYnRuLWxpbmstdGV4dFwiIChjbGljayk9XCJjYWxsRnVuY3Rpb24uZW1pdChlbGVtZW50W2NvbHVtbi5rZXldKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRldGFpbHNcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1dHRvbiBsaW5rIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWxpbmsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIG1hdEJhZGdlPVwiKlwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJlbGVtZW50Lm5ld1wiIFttYXRUb29sdGlwXT1cIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtYnV0dG9uIGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbWVudC5uZXcgPSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJidG5PdmVycmlkZSA9PSB0cnVlID8gJ2xpbmstYnRuJzogJ25vd2JvYXJkLWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLmRpc3BsYXlcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWVsZW1lbnQubmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtYnV0dG9uIGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJidG5PdmVycmlkZSA9PSB0cnVlID8gJ2xpbmstYnRuJzogJ25vd2JvYXJkLWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBjbGFzcz1cImlzLW1hdC1pY29uLWNlbGxcIiBbaW5wdXRdPVwiY29sdW1uLmRpc3BsYXlcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGxpbmsgdGV4dCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1saW5rLXRleHQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWxpbmstdGV4dCBidG4teHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW1lbnQubmV3ID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4udmFsdWUgPT0gJ0FjdGlvbnMnID8gZGV0YWlscyA6IGNvbHVtbi5rZXkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBjdXN0b20tLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbS1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbdmFsdWVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImVsZW1lbnRbY29sdW1uLmtleV0gJiYgY29sdW1uLnZhbHVlT3ZlcnJpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImNvbHVtbi52YWx1ZU92ZXJyaWRlW2VsZW1lbnRbY29sdW1uLmtleV1dXCIgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2l0LWNhdGVnb3J5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1lcXVpcGVtZW50LXR5cGUgW25hbWVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5vdmVycmlkZV1cIj48L2FwcC1lcXVpcGVtZW50LXR5cGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gaXQgc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaXQtc3RhdHVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1lcXVpcGVtZW50LXN0YXR1cyBbbGFuZ109XCJsYW5nXCIgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWVxdWlwZW1lbnQtc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGN1c3RvbWVyIHJhbmsgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b21lci1yYW5rJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1jdXN0b21lci1yYW5rIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1jdXN0b21lci1yYW5rPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIHByaW9yaXR5LS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwcmlvcml0eSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uLXByaW9yaXR5IFtpY29uXT1cImVsZW1lbnRbJ0ljb24nXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWNvbkxhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV0gfHwgbnVsbFwiPjwvaWNvbi1wcmlvcml0eT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzIFtsYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3RhdHVzLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzLWljb24gW2xhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3N0YXR1cy1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZ2VuZGVyLWF2YXRhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtZ2VuZGVyIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1nZW5kZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUG5nIEljb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbmctaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwbmctaWNvbiBbc3JjXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbZm9udFNpemVdPVwiY29sdW1uLmZvbnRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sdW1uLmNvbG9yXCI+PC9wbmctaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIG1lbnUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidtZW51J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1lbnUgKGNhbGxIYW5kbGVyKT1cImNhbGxGdW5jdGlvbi5lbWl0KCRldmVudClcIiBbZWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51U2V0dGluZ3NdPVwiY29sdW1uLmNvbmZpZ1wiPjwvbWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3Bob25lLWRpc3BsYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXBob25lLWRpc3BsYXkgW251bWJlcl09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtcGhvbmUtZGlzcGxheT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3llcy1uby1kaXNwbGF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC15ZXMtbm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sdW1uLmNvbmZpZyAmJiAoY29sdW1uLmNvbmZpZy5kaXNwbGF5Tm8gIT09IHVuZGVmaW5lZCAmJiBjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXMgIT09IHVuZGVmaW5lZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzaXplXT1cImNvbHVtbi5jb25maWc/LnNpemVJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlOb109XCJjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXNcIiBbZGlzcGxheVllc109XCJjb2x1bW4uY29uZmlnLmRpc3BsYXlOb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC15ZXMtbm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC15ZXMtbm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKCFjb2x1bW4uY29uZmlnIHx8IChjb2x1bW4uY29uZmlnICYmICEoY29sdW1uLmNvbmZpZy5kaXNwbGF5Tm8gfHwgY29sdW1uLmNvbmZpZy5kaXNwbGF5WWVzKSkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbc2l6ZV09XCJjb2x1bW4uY29uZmlnPy5zaXplSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAteWVzLW5veD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBvcmlnaW4tLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ29yaWdpbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uLW9yaWdpbiBbaWNvbl09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9pY29uLW9yaWdpbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBuYW1lIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbmFtZS1hdmF0YXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmFtZS1hdmF0YXIgbWF0VG9vbHRpcD1cInt7Sm9pbihlbGVtZW50LCBjb2x1bW4ub3ZlcnJpZGUpfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZvbnRTaXplXT1cImNvbHVtbi5mb250U2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBDbGFzc109XCInbXktdG9vbHRpcCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmFtZS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRhdGUgZm9ybWF0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF0ZS1mb3JtYXQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZS1mb3JtYXQgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4XCIgW2RhdGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvZGF0ZS1mb3JtYXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGNvdW50IHJvd3MgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb3VudC1yb3cnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7eyhlbGVtZW50W2NvbHVtbi5rZXldICYmIGVsZW1lbnRbY29sdW1uLmtleV0ubGVuZ3RoID8gZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggOiAnLScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkb3VibGUgbGluZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RvdWJsZS1saW5lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRvdWJsZS1saW5lIFtsaW5lMV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW2xpbmUyXT1cImVsZW1lbnRbY29sdW1uLm92ZXJyaWRlXVwiPjwvZG91YmxlLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgZWxlbWVudDsgY29sdW1uczogY29sdW1uc1RvRGlzcGxheTtcIiBjbGFzcz1cImVsZW1lbnQtcm93XCI+PC90cj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC90YWJsZT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHMgPT09IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiaGVpZ2h0OiA4NHB4O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHNlYXJjaC1jb250YWluZXJcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBub1Jlc3VsdCB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxtYXQtcGFnaW5hdG9yICNNYXRQYWdpbmF0b3JDdXJyZW50ICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHMgPiAwXCIgW2xlbmd0aF09XCJkYXRhLnRvdGFsRWxlbWVudHNcIlxuICAgICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJkYXRhLnNpemVcIiBbcGFnZUluZGV4XT1cImRhdGEubnVtYmVyXCIgW2hpZGVQYWdlU2l6ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAocGFnZSk9XCJkYXRhLmZldGNoKCRldmVudC5wYWdlSW5kZXgpXCIgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM+PC9tYXQtcGFnaW5hdG9yPlxuPC9kaXY+XG4iXX0=