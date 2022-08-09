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
function TableComponent_table_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 9);
} }
function TableComponent_table_1_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function TableComponent_table_1_ng_container_4_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r12.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r8.class, column_r8.align ? "text-align-" + column_r8.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.value);
} }
function TableComponent_table_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_ng_container_1_th_1_Template, 2, 6, "th", 13);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-is-mat-icon", 15);
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("input", column_r8.valueStatement[column_r8.statement ? 1 : 0]);
} }
function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_th_1_Template_th_click_0_listener() { i0.ɵɵrestoreView(_r22); const column_r8 = i0.ɵɵnextContext(3).$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.clicked.emit({ key: column_r8.key, statement: column_r8.statement = !column_r8.statement }); });
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template, 1, 1, "app-is-mat-icon", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r17.generateClass(i0.ɵɵpureFunction2(4, _c2, column_r8.class, column_r8.align ? "text-align-" + column_r8.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.valueStatement && column_r8.statement !== undefined);
} }
function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_th_1_Template, 3, 7, "th", 17);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r24.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r8.class, column_r8.align ? "text-align-" + column_r8.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.value);
} }
function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 16);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_1_ng_container_4_ng_container_2_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r16.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r8.class, column_r8.align ? "text-align-" + column_r8.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.value);
} }
function TableComponent_table_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_4_ng_container_2_th_3_Template, 2, 6, "th", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.clickable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.clickable);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 26);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r53); const element_r28 = i0.ɵɵnextContext(2).$implicit; const column_r8 = i0.ɵɵnextContext().$implicit; const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.callFunction.emit(element_r28[column_r8.key]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r30.open)("innerHTML", ctx_r30.details, i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.display);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(4).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r28[column_r8.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r64); const element_r28 = i0.ɵɵnextContext(3).$implicit; return element_r28.new = false; });
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r8.override ? ctx_r55.buildLink(column_r8.override, element_r28) : element_r28[column_r8.key]);
    i0.ɵɵproperty("matTooltip", ctx_r55.open)("ngClass", ctx_r55.btnOverride == true ? "link-btn" : "nowboard-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.display);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.display);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(4).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r28[column_r8.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r56 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r8.override ? ctx_r56.buildLink(column_r8.override, element_r28) : element_r28[column_r8.key]);
    i0.ɵɵproperty("matTooltip", ctx_r56.open)("ngClass", ctx_r56.btnOverride == true ? "link-btn" : "nowboard-btn");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.display);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template, 3, 5, "a", 27);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_Template, 3, 5, "a", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r28.new);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !element_r28.new);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r77); const element_r28 = i0.ɵɵnextContext(2).$implicit; return element_r28.new = false; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("routerLink", column_r8.override ? ctx_r32.buildLink(column_r8.override, element_r28) : element_r28[column_r8.key]);
    i0.ɵɵproperty("matTooltip", ctx_r32.open);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r8.value == "Actions" ? ctx_r32.details : column_r8.key, " ");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_4_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 36);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", column_r8.valueOverride[element_r28[column_r8.key]], i0.ɵɵsanitizeUrl);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 34);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_4_img_2_Template, 1, 1, "img", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", element_r28[column_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r28[column_r8.key] && column_r8.valueOverride);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-type", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", element_r28[column_r8.key])("type", element_r28[column_r8.override]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-status", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("lang", ctx_r35.lang)("type", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-customer-rank", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-priority", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r28["Icon"])("iconLabel", element_r28[column_r8.key] || null);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status-icon", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-gender", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "png-icon", 42);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", element_r28[column_r8.key])("fontSize", column_r8.fontSize)("color", column_r8.color);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "menu", 43);
    i0.ɵɵlistener("callHandler", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_13_Template_menu_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r102); const ctx_r101 = i0.ɵɵnextContext(5); return ctx_r101.callFunction.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r28)("menuSettings", column_r8.config);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-phone-display", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("number", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 47);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon)("displayNo", column_r8.config.displayYes)("displayYes", column_r8.config.displayNo);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 48);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template, 1, 4, "app-yes-nox", 45);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template, 1, 2, "app-yes-nox", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.config && (column_r8.config.displayNo !== undefined && column_r8.config.displayYes !== undefined));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.config || column_r8.config && !(column_r8.config.displayNo || column_r8.config.displayYes));
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 50);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r46 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r46.Join(element_r28, column_r8.override));
    i0.ɵɵproperty("src", element_r28[column_r8.key])("fontSize", column_r8.fontSize)("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "date-format", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r28[column_r8.key] && element_r28[column_r8.key].length ? element_r28[column_r8.key].length : "-", " ");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "double-line", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("line1", element_r28[column_r8.key])("line2", element_r28[column_r8.override]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r28[column_r8.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 23);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 24);
    i0.ɵɵtemplate(4, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(5, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_5_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(6, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(7, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(8, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_8_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(9, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(10, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_10_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(11, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_11_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(12, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_12_Template, 2, 3, "ng-container", 24);
    i0.ɵɵtemplate(13, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_13_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(14, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_14_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(15, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(16, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(17, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_Template, 2, 4, "ng-container", 24);
    i0.ɵɵtemplate(18, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_18_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(19, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_19_Template, 3, 1, "ng-container", 24);
    i0.ɵɵtemplate(20, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_20_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(21, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_21_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngSwitch", column_r8.module);
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
function TableComponent_table_1_ng_container_4_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_Template, 22, 21, "ng-container", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r11.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r8.class, column_r8.align ? "text-align-" + column_r8.align : "")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r28 !== "empty");
} }
function TableComponent_table_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 11);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_1_ng_container_4_td_3_Template, 2, 6, "td", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r8.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.sort);
} }
function TableComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 4, 5);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_1_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r129); const ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.data.sortIt($event); });
    i0.ɵɵtemplate(2, TableComponent_table_1_tr_2_Template, 1, 0, "tr", 6);
    i0.ɵɵtemplate(3, TableComponent_table_1_tr_3_Template, 1, 0, "tr", 7);
    i0.ɵɵtemplate(4, TableComponent_table_1_ng_container_4_Template, 4, 3, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r0.style);
    i0.ɵɵproperty("dataSource", ctx_r0.data);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r0.columnsToDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r0.columnsToDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.displayedColumns);
} }
function TableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 54)(2, "div", 55)(3, "div", 56);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noResult, " ");
} }
function TableComponent_mat_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 57, 58);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r131 = i0.ɵɵnextContext(); return ctx_r131.data.fetch($event.pageIndex); });
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
        this.rowMargin = '0px 0px';
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
        this.style = null;
        this.onReady.emit(false);
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
    }
    async ngOnInit() {
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
        this.details = this.translate.translate(this.lang, 'DETAILS');
        if (this.rowMargin) {
            this.style = {
                borderSpacing: this.rowMargin
            };
        }
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
        if (this.data && this.columnDefinitions) {
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.displayedColumns = this.sort();
            this.columnsToDisplay = this.displayedColumns.map((e) => e.key);
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            const page = this.route.snapshot.queryParams["page"];
            const currentPage = page ? Number(page) - 1 : 0;
            this.data.startWith = currentPage;
            this.data.fetch(currentPage);
            this.data.number = currentPage;
            setTimeout(() => this.onReady.emit(true), 200);
            this.service.updateHeader.subscribe((status) => {
                if (status === true) {
                    this.displayedColumns = null;
                    this.columnsToDisplay = null;
                    this.PrivateColumnDefinitions = this.service.displayColumn;
                    this.displayedColumns = this.sort();
                    this.columnsToDisplay = this.displayedColumns.map((e) => e.key);
                    this.detector.detectChanges();
                }
            });
        }
    }
    ngOnDestroy() {
    }
    ngAfterViewChecked() {
        this.showTable = true;
    }
    buildHeaders() {
        this.displayedColumns = this.sort();
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
    sort() {
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
        //  this.ngOnInit();
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
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", rowMargin: "rowMargin", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", onReady: "onReady", clicked: "clicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[1, "table-wrapper"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "style", "matSortChange", 4, "ngIf"], [4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "matSortChange"], ["table", "matSort"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"], [3, "matColumnDef"], ["class", "row-style", "mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "style", "cursor: pointer;", 3, "class", "click", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "cursor", "pointer", 3, "click"], [3, "input", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "row-style"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-link-text", 3, "matTooltip", "innerHTML", "click"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", 4, "ngIf"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click"], [3, "innerHTML"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink"], [1, "is-mat-icon-cell", 3, "input"], [1, "btn-link-text", "btn-xs", 3, "matTooltip", "routerLink", "click"], ["type", "hidden", 3, "value"], ["style", "width: 20px; height: 20px;", 3, "src", 4, "ngIf"], [2, "width", "20px", "height", "20px", 3, "src"], [3, "name", "type"], [3, "lang", "type"], [3, "type"], [3, "icon", "iconLabel"], [3, "label"], [3, "src", "fontSize", "color"], [3, "element", "menuSettings", "callHandler"], [3, "number"], [3, "valid", "size", "displayNo", "displayYes", 4, "ngIf"], [3, "valid", "size", 4, "ngIf"], [3, "valid", "size", "displayNo", "displayYes"], [3, "valid", "size"], [3, "icon"], [3, "matTooltip", "src", "fontSize", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], [3, "line1", "line2"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, ""], [1, "col-lg-12", "search-container", 2, "text-align", "center"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TableComponent_table_1_Template, 5, 6, "table", 1);
        i0.ɵɵtemplate(2, TableComponent_ng_container_2_Template, 5, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, TableComponent_mat_paginator_3_Template, 2, 4, "mat-paginator", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.data && ctx.data.totalElements);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements > 0);
    } }, directives: [i4.NgIf, i5.MatTable, i6.MatSort, i5.MatHeaderRowDef, i5.MatHeaderRow, i5.MatRowDef, i5.MatRow, i4.NgForOf, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatHeaderCell, i6.MatSortHeader, i7.IsMatIconComponent, i5.MatCellDef, i5.MatCell, i4.NgSwitch, i4.NgSwitchCase, i8.MatTooltip, i1.RouterLinkWithHref, i4.NgClass, i9.EquipementTypeComponent, i10.EquipementStatusComponent, i11.CustomerRankComponent, i12.PriorityComponent, i13.StatusComponent, i14.StatusIconComponent, i15.GenderComponent, i16.PngIconComponent, i17.MenuComponent, i18.PhoneDisplayComponent, i19.YesNoComponent, i20.OriginComponent, i21.NameAvatarComponent, i22.DateFormatComponent, i23.DoubleLineComponent, i4.NgSwitchDefault, i24.MatPaginator], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
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
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n    <table mat-table #table=\"matSort\"\n           [dataSource]=\"data \" multiTemplateDataRows matSort *ngIf=\"displayedColumns && data && data.totalElements\"\n           (matSortChange)=\"data.sortIt($event)\" [style]=\"style\">\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"></tr>\n\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon\n                                *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                                [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                           [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           (click)=\"element.new = false\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\"\n                           [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\"\n                           class=\"btn-link-text btn-xs\"\n                           (click)=\"element.new = false\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                             [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\"\n                                             [type]=\"element[column.override]\"></app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\"\n                                       [iconLabel]=\"element[column.key] || null\"></icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\"\n                                  [color]=\"column.color\"></png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                              [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                                *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                                [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n                        >\n                        </app-yes-nox>\n                        <app-yes-nox\n                                *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                                     [src]=\"element[column.key]\"\n                                     [fontSize]=\"column.fontSize\"\n                                     [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                   [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                   (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
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
        }], rowMargin: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUdwRSxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWnZFLHdCQUE0RDs7O0lBQzVELHlCQUEwRjs7OztJQUlsRiw4QkFFb0I7SUFDaEIsc0NBQTBEO0lBQzlELGlCQUFLOzs7O0lBSEQsd0pBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjs7O0lBSi9DLDZCQUFrQztJQUM5QixvR0FJSztJQUNULDBCQUFlOzs7SUFTSCxzQ0FHa0I7OztJQURWLDZFQUF5RDs7OztJQVByRSw4QkFHNkI7SUFGekIsK1BBQVMsbUdBQW9GLElBQUM7SUFHOUYsc0NBQTBEO0lBQzFELGtKQUdrQjtJQUN0QixpQkFBSzs7OztJQVBELHdKQUFzRztJQUVyRixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFFOUIsZUFBNkQ7SUFBN0Qsb0ZBQTZEOzs7SUFQOUUsNkJBQXVDO0lBQ25DLG1IQVNLO0lBQ1QsMEJBQWU7OztJQUVYLDhCQUMyRztJQUN2RyxzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFG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LENBQUM7cUJBQ3hGLENBQUMsQ0FBQyxpQkFDWSxpQkFBaUIsQ0FBQyxJQUFJO2dOQUdhLGdCQUFnQjtrQkFBakUsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDWixXQUFXO2tCQUE5QyxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDekIsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNOztBQW9NWCxPQUFPLEVBQ0gsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gXCIuL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tIFwiLi9jb3JlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xuICAgIHNpemVJY29uPzogbnVtYmVyO1xuICAgIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICAgIGRpc3BsYXlObz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcbiAgICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxuICAgIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICAgIHJhdGlvPzogbnVtYmVyO1xuICAgIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxuICAgIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcbiAgICBtb2R1bGU/OiBDZWxsc0NvbXBvbmVudExpc3Q7XG4gICAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICAgIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICAgIGFsaWduPzogc3RyaW5nOyAvLyBjZWxsIGNvbnRlbnQgYWxpZ24gJ2xlZnQgY2VudGVyIHJpZ2h0J1xuICAgIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXG4gICAgc3RhdGVtZW50PzogYm9vbGVhbjsgLy8gYnkgZGVmYXVsdCBzdGF0ZW1lbnQgaXMgZmFsc2UgYW5kIGlzIHVzZWQgd2l0aCAnY2xpY2thYmxlJyBvcHRpb25zXG4gICAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcbiAgICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcbiAgICB2YWx1ZU92ZXJyaWRlPzoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9O1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZSd9KSksXG4gICAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gICAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XG4gICAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRhdGE6IENvcmVNYXRUYWJsZUludGVyZmFjZTtcbiAgICBASW5wdXQoKSByb3dNYXJnaW46IHN0cmluZyA9ICcwcHggMHB4JztcbiAgICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgY2FsbEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvblJlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpXG4gICAgQElucHV0KCkgaW5wdXRTZWFyY2ggPSAnJztcbiAgICBASW5wdXQoKSBFbXB0eVJvdyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJsb2NrRGV0YWlscyA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgc3RhdGVtZW50OiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICAgIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgICBwdWJsaWMgaW5kZXggPSAwO1xuICAgIHB1YmxpYyBvcGVuID0gJyc7XG4gICAgcHVibGljIHNlYXJjaCA9ICcnO1xuICAgIHB1YmxpYyBjYW5jZWxTZWFyY2ggPSAnJztcbiAgICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcbiAgICBwdWJsaWMgZGV0YWlscyA9ICcnO1xuICAgIHB1YmxpYyBzaG93VGFibGUgPSBmYWxzZTtcbiAgICBwdWJsaWMgc3R5bGU6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBQcml2YXRlQ29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5vblJlYWR5LmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIGV4cGFuZChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG5cblxuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICAgICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xuICAgICAgICB0aGlzLm5vUmVzdWx0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ05PX1JFU1VMVCcpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgICAgIGlmICh0aGlzLnJvd01hcmdpbikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3JkZXJTcGFjaW5nOiB0aGlzLnJvd01hcmdpblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbmV3cGFnZSArIDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3cGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5ld3BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKGU6YW55KSA9PiBlLmtleSk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicGFnZVwiXTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IHBhZ2UgPyBOdW1iZXIocGFnZSkgLSAxIDogMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25SZWFkeS5lbWl0KHRydWUpLCAyMDApO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5zb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKGU6YW55KSA9PiBlLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1RhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAgYnVpbGRIZWFkZXJzKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcblxuXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRtcDogYW55ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGsua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IFsuLi50bXBdO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBNeUNsYXNzLnB1c2goYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE15Q2xhc3M7XG4gICAgfVxuXG4gICAgc29ydCgpIHtcbiAgICAgICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xuICAgICAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZXhwYW5kU2hvdyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLm5leHQoMClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmV0Y2goMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgLy8gIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgICBDb3JlTWF0VGFibGUsXG4gICAgRmlsdGVyRGF0ZUludGVyZmFjZSxcbiAgICBDb3JlTWF0VGFibGVJbnRlcmZhY2UsXG4gICAgUGFnZSxcbiAgICBQYWdlUmVxdWVzdCxcbiAgICBTb3J0LFxuICAgIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gICAgQ2VsbHNDb21wb25lbnRMaXN0LFxuICAgIFRhYmxlQ29tcG9uZW50XG59XG4iLCI8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxuICAgIDwhLS0gVGFibGUgLS0+XG4gICAgPHRhYmxlIG1hdC10YWJsZSAjdGFibGU9XCJtYXRTb3J0XCJcbiAgICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YSBcIiBtdWx0aVRlbXBsYXRlRGF0YVJvd3MgbWF0U29ydCAqbmdJZj1cImRpc3BsYXllZENvbHVtbnMgJiYgZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHNcIlxuICAgICAgICAgICAobWF0U29ydENoYW5nZSk9XCJkYXRhLnNvcnRJdCgkZXZlbnQpXCIgW3N0eWxlXT1cInN0eWxlXCI+XG4gICAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiY29sdW1uc1RvRGlzcGxheVwiPjwvdHI+XG4gICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgZWxlbWVudDsgY29sdW1uczogY29sdW1uc1RvRGlzcGxheTtcIiBjbGFzcz1cImVsZW1lbnQtcm93XCI+PC90cj5cblxuICAgICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uLmtleVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZGlzcGxheWVkQ29sdW1uc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5zb3J0XCI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIlxuICAgICAgICAgICAgICAgICAgICBtYXQtc29ydC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLnNvcnRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEFqb3V0ZXIgZm9uY3Rpb24gZ2VuZXJhdGUgQ2xhc3MgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5jbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrZWQuZW1pdCh7a2V5IDogY29sdW1uLmtleSwgc3RhdGVtZW50IDogKGNvbHVtbi5zdGF0ZW1lbnQgPSAhY29sdW1uLnN0YXRlbWVudCl9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2x1bW4udmFsdWVTdGF0ZW1lbnQgJiYgY29sdW1uLnN0YXRlbWVudCAhPT0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0XT1cImNvbHVtbi52YWx1ZVN0YXRlbWVudFtjb2x1bW4uc3RhdGVtZW50ID8gMSA6IDBdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5jbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1zdHlsZVwiIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJyddKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtZW50ICE9PSAnZW1wdHknXCIgW25nU3dpdGNoXT1cImNvbHVtbi5tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gY2xpY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tY2xpY2snXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCIgY2xhc3M9XCJidG4tbGluay10ZXh0XCIgKGNsaWNrKT1cImNhbGxGdW5jdGlvbi5lbWl0KGVsZW1lbnRbY29sdW1uLmtleV0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZGV0YWlsc1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGxpbmsgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tbGluaydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgbWF0QmFkZ2U9XCIqXCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImVsZW1lbnQubmV3XCIgW21hdFRvb2x0aXBdPVwib3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1idXR0b24gYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlbGVtZW50Lm5ldyA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImJ0bk92ZXJyaWRlID09IHRydWUgPyAnbGluay1idG4nOiAnbm93Ym9hcmQtYnRuJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4uZGlzcGxheVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhZWxlbWVudC5uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwib3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1idXR0b24gYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImJ0bk92ZXJyaWRlID09IHRydWUgPyAnbGluay1idG4nOiAnbm93Ym9hcmQtYnRuJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIGNsYXNzPVwiaXMtbWF0LWljb24tY2VsbFwiIFtpbnB1dF09XCJjb2x1bW4uZGlzcGxheVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gbGluayB0ZXh0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWxpbmstdGV4dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFttYXRUb29sdGlwXT1cIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tbGluay10ZXh0IGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbWVudC5uZXcgPSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbHVtbi52YWx1ZSA9PSAnQWN0aW9ucycgPyBkZXRhaWxzIDogY29sdW1uLmtleSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGN1c3RvbS0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFt2YWx1ZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiZWxlbWVudFtjb2x1bW4ua2V5XSAmJiBjb2x1bW4udmFsdWVPdmVycmlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiY29sdW1uLnZhbHVlT3ZlcnJpZGVbZWxlbWVudFtjb2x1bW4ua2V5XV1cIiBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaXQtY2F0ZWdvcnknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWVxdWlwZW1lbnQtdHlwZSBbbmFtZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLm92ZXJyaWRlXVwiPjwvYXBwLWVxdWlwZW1lbnQtdHlwZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBpdCBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpdC1zdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWVxdWlwZW1lbnQtc3RhdHVzIFtsYW5nXT1cImxhbmdcIiBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtZXF1aXBlbWVudC1zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gY3VzdG9tZXIgcmFuayAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbWVyLXJhbmsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWN1c3RvbWVyLXJhbmsgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWN1c3RvbWVyLXJhbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gcHJpb3JpdHktLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3ByaW9yaXR5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGljb24tcHJpb3JpdHkgW2ljb25dPVwiZWxlbWVudFsnSWNvbiddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpY29uTGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XSB8fCBudWxsXCI+PC9pY29uLXByaW9yaXR5PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHN0YXR1cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3N0YXR1cydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdGF0dXMgW2xhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3N0YXR1cz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzdGF0dXMtaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdGF0dXMtaWNvbiBbbGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3RhdHVzLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBnZW5kZXIgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidnZW5kZXItYXZhdGFyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1nZW5kZXIgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWdlbmRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBQbmcgSWNvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BuZy1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBuZy1pY29uIFtzcmNdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtmb250U2l6ZV09XCJjb2x1bW4uZm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2x1bW4uY29sb3JcIj48L3BuZy1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbWVudSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ21lbnUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWVudSAoY2FsbEhhbmRsZXIpPVwiY2FsbEZ1bmN0aW9uLmVtaXQoJGV2ZW50KVwiIFtlbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnVTZXR0aW5nc109XCJjb2x1bW4uY29uZmlnXCI+PC9tZW51PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGhvbmUtZGlzcGxheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtcGhvbmUtZGlzcGxheSBbbnVtYmVyXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1waG9uZS1kaXNwbGF5PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIneWVzLW5vLWRpc3BsYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXllcy1ub3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2x1bW4uY29uZmlnICYmIChjb2x1bW4uY29uZmlnLmRpc3BsYXlObyAhPT0gdW5kZWZpbmVkICYmIGNvbHVtbi5jb25maWcuZGlzcGxheVllcyAhPT0gdW5kZWZpbmVkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW3NpemVdPVwiY29sdW1uLmNvbmZpZz8uc2l6ZUljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheU5vXT1cImNvbHVtbi5jb25maWcuZGlzcGxheVllc1wiIFtkaXNwbGF5WWVzXT1cImNvbHVtbi5jb25maWcuZGlzcGxheU5vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXllcy1ub3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXllcy1ub3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoIWNvbHVtbi5jb25maWcgfHwgKGNvbHVtbi5jb25maWcgJiYgIShjb2x1bW4uY29uZmlnLmRpc3BsYXlObyB8fCBjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXMpKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzaXplXT1cImNvbHVtbi5jb25maWc/LnNpemVJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC15ZXMtbm94PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIG9yaWdpbi0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInb3JpZ2luJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGljb24tb3JpZ2luIFtpY29uXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2ljb24tb3JpZ2luPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIG5hbWUgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIiduYW1lLWF2YXRhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYW1lLWF2YXRhciBtYXRUb29sdGlwPVwie3tKb2luKGVsZW1lbnQsIGNvbHVtbi5vdmVycmlkZSl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJlbGVtZW50W2NvbHVtbi5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9udFNpemVdPVwiY29sdW1uLmZvbnRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcENsYXNzXT1cIidteS10b29sdGlwJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYW1lLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZGF0ZSBmb3JtYXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkYXRlLWZvcm1hdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlLWZvcm1hdCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHhcIiBbZGF0ZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9kYXRlLWZvcm1hdD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY291bnQgcm93cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NvdW50LXJvdydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDE0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7KGVsZW1lbnRbY29sdW1uLmtleV0gJiYgZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggPyBlbGVtZW50W2NvbHVtbi5rZXldLmxlbmd0aCA6ICctJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRvdWJsZSBsaW5lIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZG91YmxlLWxpbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG91YmxlLWxpbmUgW2xpbmUxXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbbGluZTJdPVwiZWxlbWVudFtjb2x1bW4ub3ZlcnJpZGVdXCI+PC9kb3VibGUtbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdGFibGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEgJiYgZGF0YS50b3RhbEVsZW1lbnRzID09PSAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImhlaWdodDogODRweDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBzZWFyY2gtY29udGFpbmVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbm9SZXN1bHQgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bWF0LXBhZ2luYXRvciAjTWF0UGFnaW5hdG9yQ3VycmVudCAqbmdJZj1cImRhdGEgJiYgZGF0YS50b3RhbEVsZW1lbnRzID4gMFwiIFtsZW5ndGhdPVwiZGF0YS50b3RhbEVsZW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICBbcGFnZVNpemVdPVwiZGF0YS5zaXplXCIgW3BhZ2VJbmRleF09XCJkYXRhLm51bWJlclwiIFtoaWRlUGFnZVNpemVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgKHBhZ2UpPVwiZGF0YS5mZXRjaCgkZXZlbnQucGFnZUluZGV4KVwiIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PlxuIl19