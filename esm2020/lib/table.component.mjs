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
function TableComponent_table_3_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 9);
} }
function TableComponent_table_3_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function TableComponent_table_3_ng_container_4_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_ng_container_1_th_1_Template, 2, 6, "th", 13);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-is-mat-icon", 15);
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("input", column_r8.valueStatement[column_r8.statement ? 1 : 0]);
} }
function TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵlistener("click", function TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_th_1_Template_th_click_0_listener() { i0.ɵɵrestoreView(_r22); const column_r8 = i0.ɵɵnextContext(3).$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.clicked.emit({ key: column_r8.key, statement: column_r8.statement = !column_r8.statement }); });
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_th_1_app_is_mat_icon_2_Template, 1, 1, "app-is-mat-icon", 19);
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
function TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_th_1_Template, 3, 7, "th", 17);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_3_ng_container_4_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_3_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 16);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_3_ng_container_4_ng_container_2_th_3_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_3_ng_container_4_ng_container_2_th_3_Template, 2, 6, "th", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.clickable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.clickable);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 26);
    i0.ɵɵlistener("click", function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r53); const element_r28 = i0.ɵɵnextContext(2).$implicit; const column_r8 = i0.ɵɵnextContext().$implicit; const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.callFunction.emit(element_r28[column_r8.key]); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r30.open)("innerHTML", ctx_r30.details, i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.display);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(4).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r28[column_r8.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵlistener("click", function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r64); const element_r28 = i0.ɵɵnextContext(3).$implicit; return element_r28.new = false; });
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 2);
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
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r8.display);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(4).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r28[column_r8.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 2);
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
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template, 3, 5, "a", 27);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_a_2_Template, 3, 5, "a", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r28.new);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !element_r28.new);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("click", function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r77); const element_r28 = i0.ɵɵnextContext(2).$implicit; return element_r28.new = false; });
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
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_4_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 36);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", column_r8.valueOverride[element_r28[column_r8.key]], i0.ɵɵsanitizeUrl);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 34);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_4_img_2_Template, 1, 1, "img", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", element_r28[column_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r28[column_r8.key] && column_r8.valueOverride);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-equipement-type", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", element_r28[column_r8.key])("type", element_r28[column_r8.override]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-customer-rank", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-priority", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r28["Icon"])("iconLabel", element_r28[column_r8.key] || null);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "status-icon", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-gender", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "png-icon", 42);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", element_r28[column_r8.key])("fontSize", column_r8.fontSize)("color", column_r8.color);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "menu", 43);
    i0.ɵɵlistener("callHandler", function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_13_Template_menu_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r102); const ctx_r101 = i0.ɵɵnextContext(5); return ctx_r101.callFunction.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r28)("menuSettings", column_r8.config);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-phone-display", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("number", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 47);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon)("displayNo", column_r8.config.displayYes)("displayYes", column_r8.config.displayNo);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 48);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_1_Template, 1, 4, "app-yes-nox", 45);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_15_app_yes_nox_2_Template, 1, 2, "app-yes-nox", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.config && (column_r8.config.displayNo !== undefined && column_r8.config.displayYes !== undefined));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.config || column_r8.config && !(column_r8.config.displayNo || column_r8.config.displayYes));
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "date-format", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", element_r28[column_r8.key]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "double-line", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("line1", element_r28[column_r8.key])("line2", element_r28[column_r8.override]);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", element_r28[column_r8.key], i0.ɵɵsanitizeHtml);
} }
function TableComponent_table_3_ng_container_4_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 23);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(3, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 24);
    i0.ɵɵtemplate(4, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(5, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_5_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(6, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(7, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(8, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_8_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(9, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(10, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_10_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(11, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_11_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(12, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_12_Template, 2, 3, "ng-container", 24);
    i0.ɵɵtemplate(13, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_13_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(14, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_14_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(15, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_15_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(16, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_16_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(17, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_17_Template, 2, 4, "ng-container", 24);
    i0.ɵɵtemplate(18, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_18_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(19, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_19_Template, 3, 1, "ng-container", 24);
    i0.ɵɵtemplate(20, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_20_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(21, TableComponent_table_3_ng_container_4_td_3_ng_container_1_ng_container_21_Template, 2, 1, "ng-container", 25);
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
function TableComponent_table_3_ng_container_4_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_td_3_ng_container_1_Template, 22, 21, "ng-container", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r11.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r8.class, column_r8.align ? "text-align-" + column_r8.align : "")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r28 !== "empty");
} }
function TableComponent_table_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 11);
    i0.ɵɵtemplate(1, TableComponent_table_3_ng_container_4_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_3_ng_container_4_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, TableComponent_table_3_ng_container_4_td_3_Template, 2, 6, "td", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r8.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.sort);
} }
function TableComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 4, 5);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_3_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r129); const ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.data.sortIt($event); });
    i0.ɵɵtemplate(2, TableComponent_table_3_tr_2_Template, 1, 0, "tr", 6);
    i0.ɵɵtemplate(3, TableComponent_table_3_tr_3_Template, 1, 0, "tr", 7);
    i0.ɵɵtemplate(4, TableComponent_table_3_ng_container_4_Template, 4, 3, "ng-container", 8);
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
function TableComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_mat_paginator_5_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 57, 58);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_5_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r131 = i0.ɵɵnextContext(); return ctx_r131.data.fetch($event.pageIndex); });
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
    async ngOnInit() {
        this.onReady.emit(false);
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
            console.log('My data TABLE', this.data, 'column definition', this.columnDefinitions, 'displayed column', this.displayedColumns, this.columnsToDisplay);
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
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", rowMargin: "rowMargin", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", onReady: "onReady", clicked: "clicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 6, consts: [[1, "table-wrapper"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "style", "matSortChange", 4, "ngIf"], [4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "matSortChange"], ["table", "matSort"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"], [3, "matColumnDef"], ["class", "row-style", "mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "style", "cursor: pointer;", 3, "class", "click", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "cursor", "pointer", 3, "click"], [3, "input", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "row-style"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-link-text", 3, "matTooltip", "innerHTML", "click"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", 4, "ngIf"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click"], [3, "innerHTML"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink"], [1, "is-mat-icon-cell", 3, "input"], [1, "btn-link-text", "btn-xs", 3, "matTooltip", "routerLink", "click"], ["type", "hidden", 3, "value"], ["style", "width: 20px; height: 20px;", 3, "src", 4, "ngIf"], [2, "width", "20px", "height", "20px", 3, "src"], [3, "name", "type"], [3, "lang", "type"], [3, "type"], [3, "icon", "iconLabel"], [3, "label"], [3, "src", "fontSize", "color"], [3, "element", "menuSettings", "callHandler"], [3, "number"], [3, "valid", "size", "displayNo", "displayYes", 4, "ngIf"], [3, "valid", "size", 4, "ngIf"], [3, "valid", "size", "displayNo", "displayYes"], [3, "valid", "size"], [3, "icon"], [3, "matTooltip", "src", "fontSize", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], [3, "line1", "line2"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, ""], [1, "col-lg-12", "search-container", 2, "text-align", "center"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "json");
        i0.ɵɵtemplate(3, TableComponent_table_3_Template, 5, 6, "table", 1);
        i0.ɵɵtemplate(4, TableComponent_ng_container_4_Template, 5, 1, "ng-container", 2);
        i0.ɵɵtemplate(5, TableComponent_mat_paginator_5_Template, 2, 4, "mat-paginator", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, ctx.displayedColumns), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.data && ctx.data.totalElements);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements > 0);
    } }, directives: [i4.NgIf, i5.MatTable, i6.MatSort, i5.MatHeaderRowDef, i5.MatHeaderRow, i5.MatRowDef, i5.MatRow, i4.NgForOf, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatHeaderCell, i6.MatSortHeader, i7.IsMatIconComponent, i5.MatCellDef, i5.MatCell, i4.NgSwitch, i4.NgSwitchCase, i8.MatTooltip, i1.RouterLinkWithHref, i4.NgClass, i9.EquipementTypeComponent, i10.EquipementStatusComponent, i11.CustomerRankComponent, i12.PriorityComponent, i13.StatusComponent, i14.StatusIconComponent, i15.GenderComponent, i16.PngIconComponent, i17.MenuComponent, i18.PhoneDisplayComponent, i19.YesNoComponent, i20.OriginComponent, i21.NameAvatarComponent, i22.DateFormatComponent, i23.DoubleLineComponent, i4.NgSwitchDefault, i24.MatPaginator], pipes: [i4.JsonPipe], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
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
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n\n    {{displayedColumns | json}}\n    <table mat-table #table=\"matSort\"\n           [dataSource]=\"data \" multiTemplateDataRows matSort *ngIf=\"displayedColumns && data && data.totalElements\"\n           (matSortChange)=\"data.sortIt($event)\" [style]=\"style\">\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"></tr>\n\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon\n                                *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                                [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                           [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           (click)=\"element.new = false\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\"\n                           [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\"\n                           class=\"btn-link-text btn-xs\"\n                           (click)=\"element.new = false\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                             [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\"\n                                             [type]=\"element[column.override]\"></app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\"\n                                       [iconLabel]=\"element[column.key] || null\"></icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\"\n                                  [color]=\"column.color\"></png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                              [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                                *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                                [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n                        >\n                        </app-yes-nox>\n                        <app-yes-nox\n                                *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                                     [src]=\"element[column.key]\"\n                                     [fontSize]=\"column.fontSize\"\n                                     [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                   [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                   (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUdwRSxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVnZFLHdCQUE0RDs7O0lBQzVELHlCQUEwRjs7OztJQUlsRiw4QkFFb0I7SUFDaEIsc0NBQTBEO0lBQzlELGlCQUFLOzs7O0lBSEQsd0pBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjs7O0lBSi9DLDZCQUFrQztJQUM5QixvR0FJSztJQUNULDBCQUFlOzs7SUFTSCxzQ0FHa0I7OztJQURWLDZFQUF5RDs7OztJQVByRSw4QkFHNkI7SUFGekIsK1BBQVMsbUdBQW9GLElBQUM7SUFHOUYsc0NBQTBEO0lBQzFELGtKQUdrQjtJQUN0QixpQkFBSzs7OztJQVBELHdKQUFzRztJQUVyRixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFFOUIsZUFBNkQ7SUFBN0Qsb0ZBQTZEOzs7SUFQOUUsNkJBQXVDO0lBQ25DLG1IQVNLO0lBQ1QsMEJBQWU7OztJQUVYLDhCQUMyRztJQUN2RyxzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFG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d0JBQ2pDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO3dCQUMzRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO3dCQUN2QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7cUJBQ3hGLENBQUMsQ0FBQyxpQkFDWSxpQkFBaUIsQ0FBQyxJQUFJO2dOQUdhLGdCQUFnQjtrQkFBakUsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDWixXQUFXO2tCQUE5QyxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDekIsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNOztBQXFNWCxPQUFPLEVBQ0gsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gXCIuL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tIFwiLi9jb3JlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xuICAgIHNpemVJY29uPzogbnVtYmVyO1xuICAgIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICAgIGRpc3BsYXlObz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcbiAgICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxuICAgIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICAgIHJhdGlvPzogbnVtYmVyO1xuICAgIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxuICAgIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcbiAgICBtb2R1bGU/OiBDZWxsc0NvbXBvbmVudExpc3Q7XG4gICAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICAgIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICAgIGFsaWduPzogc3RyaW5nOyAvLyBjZWxsIGNvbnRlbnQgYWxpZ24gJ2xlZnQgY2VudGVyIHJpZ2h0J1xuICAgIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXG4gICAgc3RhdGVtZW50PzogYm9vbGVhbjsgLy8gYnkgZGVmYXVsdCBzdGF0ZW1lbnQgaXMgZmFsc2UgYW5kIGlzIHVzZWQgd2l0aCAnY2xpY2thYmxlJyBvcHRpb25zXG4gICAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcbiAgICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcbiAgICB2YWx1ZU92ZXJyaWRlPzoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9O1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZSd9KSksXG4gICAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gICAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XG4gICAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRhdGE6IENvcmVNYXRUYWJsZUludGVyZmFjZTtcbiAgICBASW5wdXQoKSByb3dNYXJnaW46IHN0cmluZyA9ICcwcHggMHB4JztcbiAgICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgY2FsbEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvblJlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpXG4gICAgQElucHV0KCkgaW5wdXRTZWFyY2ggPSAnJztcbiAgICBASW5wdXQoKSBFbXB0eVJvdyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJsb2NrRGV0YWlscyA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgc3RhdGVtZW50OiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICAgIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgICBwdWJsaWMgaW5kZXggPSAwO1xuICAgIHB1YmxpYyBvcGVuID0gJyc7XG4gICAgcHVibGljIHNlYXJjaCA9ICcnO1xuICAgIHB1YmxpYyBjYW5jZWxTZWFyY2ggPSAnJztcbiAgICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcbiAgICBwdWJsaWMgZGV0YWlscyA9ICcnO1xuICAgIHB1YmxpYyBzaG93VGFibGUgPSBmYWxzZTtcbiAgICBwdWJsaWMgc3R5bGU6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBQcml2YXRlQ29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIH1cblxuICAgIGV4cGFuZChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5leHBhbmRlZEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMub25SZWFkeS5lbWl0KGZhbHNlKTtcblxuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICAgICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xuICAgICAgICB0aGlzLm5vUmVzdWx0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ05PX1JFU1VMVCcpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgICAgIGlmICh0aGlzLnJvd01hcmdpbikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3JkZXJTcGFjaW5nOiB0aGlzLnJvd01hcmdpblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbmV3cGFnZSArIDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3cGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5ld3BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKGU6YW55KSA9PiBlLmtleSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTXkgZGF0YSBUQUJMRScsIHRoaXMuZGF0YSwgJ2NvbHVtbiBkZWZpbml0aW9uJywgdGhpcy5jb2x1bW5EZWZpbml0aW9ucywgJ2Rpc3BsYXllZCBjb2x1bW4nLCB0aGlzLmRpc3BsYXllZENvbHVtbnMsIHRoaXMuY29sdW1uc1RvRGlzcGxheSlcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3JDdXJyZW50O1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQgPSB0aGlzLnNvcnRDdXJyZW50O1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwYWdlXCJdO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZTogbnVtYmVyID0gcGFnZSA/IE51bWJlcihwYWdlKSAtIDEgOiAwO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXJ0V2l0aCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZldGNoKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vblJlYWR5LmVtaXQodHJ1ZSksIDIwMCk7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyLnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuc2VydmljZS5kaXNwbGF5Q29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcCgoZTphbnkpID0+IGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgICBidWlsZEhlYWRlcnMoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuc29ydCgpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICAgICAgY29uc3QgdG1wOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW9kdWxlIFRhYmxlIE5ldyBVcGRhdGUgQ29sdW1uIERlZmluaXRpb24nLCAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xuICAgICAgICBmb3IgKGxldCBjIG9mIENsYXNzKSB7XG4gICAgICAgICAgICBpZiAoYyAmJiBjICE9PSAnJykge1xuICAgICAgICAgICAgICAgIE15Q2xhc3MucHVzaChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTXlDbGFzcztcbiAgICB9XG5cbiAgICBzb3J0KCkge1xuICAgICAgICBjb25zdCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAoYS5vcmRlciA+IGIub3JkZXIgPyAxIDogMCkpXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi50aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucy5zb3J0KGNvbXBhcmUpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgICAgIGlmIChvdmVycmlkZS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSBvdmVycmlkZVswXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3ZlcnJpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4IGluIGVsZW0pIHtcbiAgICAgICAgICAgIGlmIChvdmVycmlkZS5pbmRleE9mKHgpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCh0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA+IDEgfHwgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAmJiB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA8IDIwMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIodGhpcy5pbnB1dFNlYXJjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIubmV4dCgwKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICAvLyAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQge1xuICAgIENvcmVNYXRUYWJsZSxcbiAgICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICAgIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgICBQYWdlLFxuICAgIFBhZ2VSZXF1ZXN0LFxuICAgIFNvcnQsXG4gICAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcbiAgICBDZWxsc0NvbXBvbmVudExpc3QsXG4gICAgVGFibGVDb21wb25lbnRcbn1cbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgPCEtLSBUYWJsZSAtLT5cblxuICAgIHt7ZGlzcGxheWVkQ29sdW1ucyB8IGpzb259fVxuICAgIDx0YWJsZSBtYXQtdGFibGUgI3RhYmxlPVwibWF0U29ydFwiXG4gICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGEgXCIgbXVsdGlUZW1wbGF0ZURhdGFSb3dzIG1hdFNvcnQgKm5nSWY9XCJkaXNwbGF5ZWRDb2x1bW5zICYmIGRhdGEgJiYgZGF0YS50b3RhbEVsZW1lbnRzXCJcbiAgICAgICAgICAgKG1hdFNvcnRDaGFuZ2UpPVwiZGF0YS5zb3J0SXQoJGV2ZW50KVwiIFtzdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImNvbHVtbnNUb0Rpc3BsYXlcIj48L3RyPlxuICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCIgY2xhc3M9XCJlbGVtZW50LXJvd1wiPjwvdHI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5rZXlcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRpc3BsYXllZENvbHVtbnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uc29ydFwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXNvcnQtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5zb3J0XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBBam91dGVyIGZvbmN0aW9uIGdlbmVyYXRlIENsYXNzIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja2VkLmVtaXQoe2tleSA6IGNvbHVtbi5rZXksIHN0YXRlbWVudCA6IChjb2x1bW4uc3RhdGVtZW50ID0gIWNvbHVtbi5zdGF0ZW1lbnQpfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sdW1uLnZhbHVlU3RhdGVtZW50ICYmIGNvbHVtbi5zdGF0ZW1lbnQgIT09IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dF09XCJjb2x1bW4udmFsdWVTdGF0ZW1lbnRbY29sdW1uLnN0YXRlbWVudCA/IDEgOiAwXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctc3R5bGVcIiBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICcnXSlcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbWVudCAhPT0gJ2VtcHR5J1wiIFtuZ1N3aXRjaF09XCJjb2x1bW4ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGNsaWNrIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWNsaWNrJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW21hdFRvb2x0aXBdPVwib3BlblwiIGNsYXNzPVwiYnRuLWxpbmstdGV4dFwiIChjbGljayk9XCJjYWxsRnVuY3Rpb24uZW1pdChlbGVtZW50W2NvbHVtbi5rZXldKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRldGFpbHNcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1dHRvbiBsaW5rIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWxpbmsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIG1hdEJhZGdlPVwiKlwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJlbGVtZW50Lm5ld1wiIFttYXRUb29sdGlwXT1cIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtYnV0dG9uIGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbWVudC5uZXcgPSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJidG5PdmVycmlkZSA9PSB0cnVlID8gJ2xpbmstYnRuJzogJ25vd2JvYXJkLWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLmRpc3BsYXlcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWVsZW1lbnQubmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIm9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtYnV0dG9uIGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJidG5PdmVycmlkZSA9PSB0cnVlID8gJ2xpbmstYnRuJzogJ25vd2JvYXJkLWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBjbGFzcz1cImlzLW1hdC1pY29uLWNlbGxcIiBbaW5wdXRdPVwiY29sdW1uLmRpc3BsYXlcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGxpbmsgdGV4dCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1saW5rLXRleHQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWxpbmstdGV4dCBidG4teHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW1lbnQubmV3ID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4udmFsdWUgPT0gJ0FjdGlvbnMnID8gZGV0YWlscyA6IGNvbHVtbi5rZXkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBjdXN0b20tLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbS1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbdmFsdWVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImVsZW1lbnRbY29sdW1uLmtleV0gJiYgY29sdW1uLnZhbHVlT3ZlcnJpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImNvbHVtbi52YWx1ZU92ZXJyaWRlW2VsZW1lbnRbY29sdW1uLmtleV1dXCIgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2l0LWNhdGVnb3J5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1lcXVpcGVtZW50LXR5cGUgW25hbWVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5vdmVycmlkZV1cIj48L2FwcC1lcXVpcGVtZW50LXR5cGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gaXQgc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaXQtc3RhdHVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1lcXVpcGVtZW50LXN0YXR1cyBbbGFuZ109XCJsYW5nXCIgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWVxdWlwZW1lbnQtc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGN1c3RvbWVyIHJhbmsgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b21lci1yYW5rJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1jdXN0b21lci1yYW5rIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1jdXN0b21lci1yYW5rPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIHByaW9yaXR5LS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwcmlvcml0eSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uLXByaW9yaXR5IFtpY29uXT1cImVsZW1lbnRbJ0ljb24nXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWNvbkxhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV0gfHwgbnVsbFwiPjwvaWNvbi1wcmlvcml0eT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzIFtsYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3RhdHVzLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzLWljb24gW2xhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3N0YXR1cy1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZ2VuZGVyLWF2YXRhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtZ2VuZGVyIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1nZW5kZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUG5nIEljb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbmctaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwbmctaWNvbiBbc3JjXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbZm9udFNpemVdPVwiY29sdW1uLmZvbnRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sdW1uLmNvbG9yXCI+PC9wbmctaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIG1lbnUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidtZW51J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1lbnUgKGNhbGxIYW5kbGVyKT1cImNhbGxGdW5jdGlvbi5lbWl0KCRldmVudClcIiBbZWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51U2V0dGluZ3NdPVwiY29sdW1uLmNvbmZpZ1wiPjwvbWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3Bob25lLWRpc3BsYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXBob25lLWRpc3BsYXkgW251bWJlcl09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtcGhvbmUtZGlzcGxheT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3llcy1uby1kaXNwbGF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC15ZXMtbm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sdW1uLmNvbmZpZyAmJiAoY29sdW1uLmNvbmZpZy5kaXNwbGF5Tm8gIT09IHVuZGVmaW5lZCAmJiBjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXMgIT09IHVuZGVmaW5lZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzaXplXT1cImNvbHVtbi5jb25maWc/LnNpemVJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlOb109XCJjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXNcIiBbZGlzcGxheVllc109XCJjb2x1bW4uY29uZmlnLmRpc3BsYXlOb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC15ZXMtbm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC15ZXMtbm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKCFjb2x1bW4uY29uZmlnIHx8IChjb2x1bW4uY29uZmlnICYmICEoY29sdW1uLmNvbmZpZy5kaXNwbGF5Tm8gfHwgY29sdW1uLmNvbmZpZy5kaXNwbGF5WWVzKSkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbc2l6ZV09XCJjb2x1bW4uY29uZmlnPy5zaXplSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAteWVzLW5veD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBvcmlnaW4tLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ29yaWdpbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uLW9yaWdpbiBbaWNvbl09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9pY29uLW9yaWdpbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBuYW1lIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbmFtZS1hdmF0YXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmFtZS1hdmF0YXIgbWF0VG9vbHRpcD1cInt7Sm9pbihlbGVtZW50LCBjb2x1bW4ub3ZlcnJpZGUpfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZvbnRTaXplXT1cImNvbHVtbi5mb250U2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBDbGFzc109XCInbXktdG9vbHRpcCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmFtZS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRhdGUgZm9ybWF0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF0ZS1mb3JtYXQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZS1mb3JtYXQgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4XCIgW2RhdGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvZGF0ZS1mb3JtYXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGNvdW50IHJvd3MgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb3VudC1yb3cnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7eyhlbGVtZW50W2NvbHVtbi5rZXldICYmIGVsZW1lbnRbY29sdW1uLmtleV0ubGVuZ3RoID8gZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggOiAnLScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkb3VibGUgbGluZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RvdWJsZS1saW5lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRvdWJsZS1saW5lIFtsaW5lMV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW2xpbmUyXT1cImVsZW1lbnRbY29sdW1uLm92ZXJyaWRlXVwiPjwvZG91YmxlLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3RhYmxlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhICYmIGRhdGEudG90YWxFbGVtZW50cyA9PT0gMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJoZWlnaHQ6IDg0cHg7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgc2VhcmNoLWNvbnRhaW5lclwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG5vUmVzdWx0IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG1hdC1wYWdpbmF0b3IgI01hdFBhZ2luYXRvckN1cnJlbnQgKm5nSWY9XCJkYXRhICYmIGRhdGEudG90YWxFbGVtZW50cyA+IDBcIiBbbGVuZ3RoXT1cImRhdGEudG90YWxFbGVtZW50c1wiXG4gICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cImRhdGEuc2l6ZVwiIFtwYWdlSW5kZXhdPVwiZGF0YS5udW1iZXJcIiBbaGlkZVBhZ2VTaXplXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIChwYWdlKT1cImRhdGEuZmV0Y2goJGV2ZW50LnBhZ2VJbmRleClcIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==