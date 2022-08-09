import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { debounceTime } from "rxjs/operators";
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
            this.data.page$.pipe(debounceTime(200))
                .subscribe((n) => {
                this.onReady.emit(true);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUdwRSxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFJL0UsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hCcEMsd0JBQTREOzs7SUFDNUQseUJBQTBGOzs7O0lBSWxGLDhCQUVvQjtJQUNoQixzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFIRCx3SkFBc0c7SUFFckYsZUFBc0I7SUFBdEIsdUNBQXNCOzs7SUFKL0MsNkJBQWtDO0lBQzlCLG9HQUlLO0lBQ1QsMEJBQWU7OztJQVNILHNDQUdrQjs7O0lBRFYsNkVBQXlEOzs7O0lBUHJFLDhCQUc2QjtJQUZ6QiwrUEFBUyxtR0FBb0YsSUFBQztJQUc5RixzQ0FBMEQ7SUFDMUQsa0pBR2tCO0lBQ3RCLGlCQUFLOzs7O0lBUEQsd0pBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjtJQUU5QixlQUE2RDtJQUE3RCxvRkFBNkQ7OztJQVA5RSw2QkFBdUM7SUFDbkMsbUhBU0s7SUFDVCwwQkFBZTs7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LENBQUMsQ0FBQzt3QkFDM0UsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzt3QkFDdkMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3FCQUN4RixDQUFDLENBQUMsaUJBQ1ksaUJBQWlCLENBQUMsSUFBSTtnTkFHYSxnQkFBZ0I7a0JBQWpFLFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ1osV0FBVztrQkFBOUMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ3pCLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0UsV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTTs7QUFzTVgsT0FBTyxFQUNILFlBQVksRUFPWixrQkFBa0IsRUFDbEIsY0FBYyxFQUNqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0fSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge0NvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBQYWdlLCBQYWdlUmVxdWVzdCwgU29ydH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgICBzaXplSWNvbj86IG51bWJlcjtcbiAgICBkaXNwbGF5WWVzPzogYm9vbGVhbjtcbiAgICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gICAga2V5OiBzdHJpbmc7IC8vIG9iamVjdCBrZXlcbiAgICB2YWx1ZTogc3RyaW5nOyAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgICByYXRpbz86IG51bWJlcjtcbiAgICBvcmRlcj86IG51bWJlcjsgLy8gc29ydCBjb2x1bW5cbiAgICBjbGFzcz86IHN0cmluZzsgLy8gY3NzIGNsYXNzXG4gICAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0O1xuICAgIG92ZXJyaWRlPzogc3RyaW5nIHwgc3RyaW5nW107IC8vIGZvciBidWlsZGluZyB1cmwgb3IgYXZhdGFyIG5hbWVcbiAgICBkaXNwbGF5Pzogc3RyaW5nOyAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgICBhbGlnbj86IHN0cmluZzsgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgICBzb3J0PzogYm9vbGVhbjsgLy8gJ3NvcnRhYmxlIGNvbHVtbidcbiAgICBjbGlja2FibGU/OiBib29sZWFuOyAvLyBlbmFibGUgY2xpY2thYmxlIGNvbHVtbiB3aGVuIHNvcnRpbmcgaXMgZGlzYWJsZVxuICAgIHN0YXRlbWVudD86IGJvb2xlYW47IC8vIGJ5IGRlZmF1bHQgc3RhdGVtZW50IGlzIGZhbHNlIGFuZCBpcyB1c2VkIHdpdGggJ2NsaWNrYWJsZScgb3B0aW9uc1xuICAgIHZhbHVlU3RhdGVtZW50Pzogc3RyaW5nW107XG4gICAgY29uZmlnPzogZGlzcGxheUNvbHVtbnNDb25maWc7XG4gICAgdmFsdWVPdmVycmlkZT86IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfTtcbiAgICBmb250U2l6ZT86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZGVzaWduLXRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcbiAgICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSldLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYmxlJywge3N0YXRpYzogdHJ1ZX0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuICAgIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gICAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gICAgQElucHV0KCkgcm93TWFyZ2luOiBzdHJpbmcgPSAnMHB4IDBweCc7XG4gICAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKVxuICAgIEBJbnB1dCgpIGlucHV0U2VhcmNoID0gJyc7XG4gICAgQElucHV0KCkgRW1wdHlSb3cgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBibG9ja0RldGFpbHMgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gICAgcHVibGljIGluZGV4ID0gMDtcbiAgICBwdWJsaWMgb3BlbiA9ICcnO1xuICAgIHB1YmxpYyBzZWFyY2ggPSAnJztcbiAgICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XG4gICAgcHVibGljIG5vUmVzdWx0ID0gJyc7XG4gICAgcHVibGljIGRldGFpbHMgPSAnJztcbiAgICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XG4gICAgcHVibGljIHN0eWxlOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMub25SZWFkeS5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBleHBhbmQoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5ibG9ja0RldGFpbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZWxlbWVudFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuXG4gICAgICAgIHRoaXMub3BlbiA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdPUEVOJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ1NFQVJDSCcpO1xuICAgICAgICB0aGlzLmNhbmNlbFNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDQU5DRUxfU0VBUkNIJyk7XG4gICAgICAgIHRoaXMubm9SZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnTk9fUkVTVUxUJyk7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XG5cbiAgICAgICAgaWYgKHRoaXMucm93TWFyZ2luKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJvcmRlclNwYWNpbmc6IHRoaXMucm93TWFyZ2luXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5zdWJzY3JpYmUoKG5ld3BhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld3BhZ2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBuZXdwYWdlICsgMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnBhZ2luYXRvciAmJiB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCAhPT0gbmV3cGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ID0gbmV3cGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuc29ydCgpO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcCgoZTogYW55KSA9PiBlLmtleSk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicGFnZVwiXTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IHBhZ2UgPyBOdW1iZXIocGFnZSkgLSAxIDogMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnZSQucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChuOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlYWR5LmVtaXQodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5zb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKGU6IGFueSkgPT4gZS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICB0aGlzLnNob3dUYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYnVpbGRIZWFkZXJzKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcblxuXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRtcDogYW55ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGsua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IFsuLi50bXBdO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBNeUNsYXNzLnB1c2goYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE15Q2xhc3M7XG4gICAgfVxuXG4gICAgc29ydCgpIHtcbiAgICAgICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xuICAgICAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZXhwYW5kU2hvdyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLm5leHQoMClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmV0Y2goMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgICAvLyAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQge1xuICAgIENvcmVNYXRUYWJsZSxcbiAgICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICAgIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgICBQYWdlLFxuICAgIFBhZ2VSZXF1ZXN0LFxuICAgIFNvcnQsXG4gICAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcbiAgICBDZWxsc0NvbXBvbmVudExpc3QsXG4gICAgVGFibGVDb21wb25lbnRcbn1cbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgPCEtLSBUYWJsZSAtLT5cbiAgICA8dGFibGUgbWF0LXRhYmxlICN0YWJsZT1cIm1hdFNvcnRcIlxuICAgICAgICAgICBbZGF0YVNvdXJjZV09XCJkYXRhIFwiIG11bHRpVGVtcGxhdGVEYXRhUm93cyBtYXRTb3J0ICpuZ0lmPVwiZGlzcGxheWVkQ29sdW1ucyAmJiBkYXRhICYmIGRhdGEudG90YWxFbGVtZW50c1wiXG4gICAgICAgICAgIChtYXRTb3J0Q2hhbmdlKT1cImRhdGEuc29ydEl0KCRldmVudClcIiBbc3R5bGVdPVwic3R5bGVcIj5cbiAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zVG9EaXNwbGF5XCI+PC90cj5cbiAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCBlbGVtZW50OyBjb2x1bW5zOiBjb2x1bW5zVG9EaXNwbGF5O1wiIGNsYXNzPVwiZWxlbWVudC1yb3dcIj48L3RyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgW21hdENvbHVtbkRlZl09XCJjb2x1bW4ua2V5XCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBkaXNwbGF5ZWRDb2x1bW5zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnNvcnRcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiXG4gICAgICAgICAgICAgICAgICAgIG1hdC1zb3J0LWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uc29ydFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQWpvdXRlciBmb25jdGlvbiBnZW5lcmF0ZSBDbGFzcyAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmNsaWNrYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tlZC5lbWl0KHtrZXkgOiBjb2x1bW4ua2V5LCBzdGF0ZW1lbnQgOiAoY29sdW1uLnN0YXRlbWVudCA9ICFjb2x1bW4uc3RhdGVtZW50KX0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbHVtbi52YWx1ZVN0YXRlbWVudCAmJiBjb2x1bW4uc3RhdGVtZW50ICE9PSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRdPVwiY29sdW1uLnZhbHVlU3RhdGVtZW50W2NvbHVtbi5zdGF0ZW1lbnQgPyAxIDogMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmNsaWNrYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LXN0eWxlXCIgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAnJ10pXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVsZW1lbnQgIT09ICdlbXB0eSdcIiBbbmdTd2l0Y2hdPVwiY29sdW1uLm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1dHRvbiBjbGljayAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1jbGljaydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFttYXRUb29sdGlwXT1cIm9wZW5cIiBjbGFzcz1cImJ0bi1saW5rLXRleHRcIiAoY2xpY2spPVwiY2FsbEZ1bmN0aW9uLmVtaXQoZWxlbWVudFtjb2x1bW4ua2V5XSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJkZXRhaWxzXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gbGluayAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1saW5rJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICBtYXRCYWRnZT1cIipcIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiZWxlbWVudC5uZXdcIiBbbWF0VG9vbHRpcF09XCJvcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0LWJ1dHRvbiBidG4teHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW1lbnQubmV3ID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYnRuT3ZlcnJpZGUgPT0gdHJ1ZSA/ICdsaW5rLWJ0bic6ICdub3dib2FyZC1idG4nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi5kaXNwbGF5XCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFlbGVtZW50Lm5ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJvcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0LWJ1dHRvbiBidG4teHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYnRuT3ZlcnJpZGUgPT0gdHJ1ZSA/ICdsaW5rLWJ0bic6ICdub3dib2FyZC1idG4nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gY2xhc3M9XCJpcy1tYXQtaWNvbi1jZWxsXCIgW2lucHV0XT1cImNvbHVtbi5kaXNwbGF5XCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1dHRvbiBsaW5rIHRleHQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tbGluay10ZXh0J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW21hdFRvb2x0aXBdPVwib3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1saW5rLXRleHQgYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlbGVtZW50Lm5ldyA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY29sdW1uLnZhbHVlID09ICdBY3Rpb25zJyA/IGRldGFpbHMgOiBjb2x1bW4ua2V5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gY3VzdG9tLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20taWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgW3ZhbHVlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJlbGVtZW50W2NvbHVtbi5rZXldICYmIGNvbHVtbi52YWx1ZU92ZXJyaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJjb2x1bW4udmFsdWVPdmVycmlkZVtlbGVtZW50W2NvbHVtbi5rZXldXVwiIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpdC1jYXRlZ29yeSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtZXF1aXBlbWVudC10eXBlIFtuYW1lXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ub3ZlcnJpZGVdXCI+PC9hcHAtZXF1aXBlbWVudC10eXBlPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGl0IHN0YXR1cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2l0LXN0YXR1cydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtZXF1aXBlbWVudC1zdGF0dXMgW2xhbmddPVwibGFuZ1wiIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1lcXVpcGVtZW50LXN0YXR1cz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBjdXN0b21lciByYW5rIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tZXItcmFuaydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtY3VzdG9tZXItcmFuayBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtY3VzdG9tZXItcmFuaz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBwcmlvcml0eS0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncHJpb3JpdHknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWNvbi1wcmlvcml0eSBbaWNvbl09XCJlbGVtZW50WydJY29uJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ljb25MYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldIHx8IG51bGxcIj48L2ljb24tcHJpb3JpdHk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3RhdHVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXR1cyBbbGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHN0YXR1cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3N0YXR1cy1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXR1cy1pY29uIFtsYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zdGF0dXMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2dlbmRlci1hdmF0YXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWdlbmRlciBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtZ2VuZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFBuZyBJY29uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncG5nLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG5nLWljb24gW3NyY109XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW2ZvbnRTaXplXT1cImNvbHVtbi5mb250U2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbHVtbi5jb2xvclwiPjwvcG5nLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBtZW51IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbWVudSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZW51IChjYWxsSGFuZGxlcik9XCJjYWxsRnVuY3Rpb24uZW1pdCgkZXZlbnQpXCIgW2VsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudVNldHRpbmdzXT1cImNvbHVtbi5jb25maWdcIj48L21lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBnZW5kZXIgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwaG9uZS1kaXNwbGF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1waG9uZS1kaXNwbGF5IFtudW1iZXJdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLXBob25lLWRpc3BsYXk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBnZW5kZXIgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid5ZXMtbm8tZGlzcGxheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAteWVzLW5veFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbHVtbi5jb25maWcgJiYgKGNvbHVtbi5jb25maWcuZGlzcGxheU5vICE9PSB1bmRlZmluZWQgJiYgY29sdW1uLmNvbmZpZy5kaXNwbGF5WWVzICE9PSB1bmRlZmluZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbc2l6ZV09XCJjb2x1bW4uY29uZmlnPy5zaXplSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5Tm9dPVwiY29sdW1uLmNvbmZpZy5kaXNwbGF5WWVzXCIgW2Rpc3BsYXlZZXNdPVwiY29sdW1uLmNvbmZpZy5kaXNwbGF5Tm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAteWVzLW5veD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAteWVzLW5veFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIighY29sdW1uLmNvbmZpZyB8fCAoY29sdW1uLmNvbmZpZyAmJiAhKGNvbHVtbi5jb25maWcuZGlzcGxheU5vIHx8IGNvbHVtbi5jb25maWcuZGlzcGxheVllcykpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW3NpemVdPVwiY29sdW1uLmNvbmZpZz8uc2l6ZUljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXllcy1ub3g+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gb3JpZ2luLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidvcmlnaW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWNvbi1vcmlnaW4gW2ljb25dPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvaWNvbi1vcmlnaW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gbmFtZSBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ25hbWUtYXZhdGFyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hbWUtYXZhdGFyIG1hdFRvb2x0aXA9XCJ7e0pvaW4oZWxlbWVudCwgY29sdW1uLm92ZXJyaWRlKX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb250U2l6ZV09XCJjb2x1bW4uZm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwQ2xhc3NdPVwiJ215LXRvb2x0aXAnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hbWUtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkYXRlIGZvcm1hdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUtZm9ybWF0J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGUtZm9ybWF0IHN0eWxlPVwicGFkZGluZy1yaWdodDogMTBweFwiIFtkYXRlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2RhdGUtZm9ybWF0PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjb3VudCByb3dzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY291bnQtcm93J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTRweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAge3soZWxlbWVudFtjb2x1bW4ua2V5XSAmJiBlbGVtZW50W2NvbHVtbi5rZXldLmxlbmd0aCA/IGVsZW1lbnRbY29sdW1uLmtleV0ubGVuZ3RoIDogJy0nKX19XG4gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZG91YmxlIGxpbmUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkb3VibGUtbGluZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkb3VibGUtbGluZSBbbGluZTFdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtsaW5lMl09XCJlbGVtZW50W2NvbHVtbi5vdmVycmlkZV1cIj48L2RvdWJsZS1saW5lPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC90YWJsZT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHMgPT09IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiaGVpZ2h0OiA4NHB4O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHNlYXJjaC1jb250YWluZXJcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBub1Jlc3VsdCB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxtYXQtcGFnaW5hdG9yICNNYXRQYWdpbmF0b3JDdXJyZW50ICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHMgPiAwXCIgW2xlbmd0aF09XCJkYXRhLnRvdGFsRWxlbWVudHNcIlxuICAgICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJkYXRhLnNpemVcIiBbcGFnZUluZGV4XT1cImRhdGEubnVtYmVyXCIgW2hpZGVQYWdlU2l6ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAocGFnZSk9XCJkYXRhLmZldGNoKCRldmVudC5wYWdlSW5kZXgpXCIgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM+PC9tYXQtcGFnaW5hdG9yPlxuPC9kaXY+XG4iXX0=