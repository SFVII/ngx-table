import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { CellsComponentList } from "./setting/CellsComponentRegistry";
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
import * as i19 from "./cells-component/custom-cell/custom-cell.component";
import * as i20 from "./cells-component/yes-no/yes-no.component";
import * as i21 from "./cells-component/origin/origin.component";
import * as i22 from "./cells-component/name-avatar/name-avatar.component";
import * as i23 from "./cells-component/double-line/double-line.component";
import * as i24 from "@angular/material/paginator";
import * as i25 from "./core-data-table/app-date.pipe";
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
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 26);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r54); const element_r28 = i0.ɵɵnextContext(2).$implicit; const column_r8 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.callFunction.emit(element_r28[column_r8.key]); });
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
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r65); const element_r28 = i0.ɵɵnextContext(3).$implicit; return element_r28.new = false; });
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 2);
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
    const ctx_r57 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r8.override ? ctx_r57.buildLink(column_r8.override, element_r28) : element_r28[column_r8.key]);
    i0.ɵɵproperty("matTooltip", ctx_r57.open)("ngClass", ctx_r57.btnOverride == true ? "link-btn" : "nowboard-btn");
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
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r78); const element_r28 = i0.ɵɵnextContext(2).$implicit; return element_r28.new = false; });
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
    const _r103 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "menu", 43);
    i0.ɵɵlistener("callHandler", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_13_Template_menu_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r103); const ctx_r102 = i0.ɵɵnextContext(5); return ctx_r102.callFunction.emit($event); });
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
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-custom-cell", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(element_r28[column_r8.addClass]);
    i0.ɵɵproperty("title", element_r28[column_r8.key])("subTitle", element_r28[column_r8.subTitle]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_app_yes_nox_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 48);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon)("displayNo", column_r8.config.displayYes)("displayYes", column_r8.config.displayNo);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_app_yes_nox_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 49);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_app_yes_nox_1_Template, 1, 4, "app-yes-nox", 46);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_app_yes_nox_2_Template, 1, 2, "app-yes-nox", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.config && (column_r8.config.displayNo !== undefined && column_r8.config.displayYes !== undefined));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.config || column_r8.config && !(column_r8.config.displayNo || column_r8.config.displayYes));
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 50);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r47.Join(element_r28, column_r8.override));
    i0.ɵɵproperty("src", element_r28[column_r8.key])("fontSize", column_r8.fontSize)("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "appDate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, element_r28[column_r8.key], ctx_r48.lang), " ");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "double-line", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("line1", element_r28[column_r8.key])("line2", element_r28[column_r8.override]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_22_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(15, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_Template, 2, 4, "ng-container", 24);
    i0.ɵɵtemplate(16, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(17, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(18, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_18_Template, 2, 4, "ng-container", 24);
    i0.ɵɵtemplate(19, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_19_Template, 3, 4, "ng-container", 24);
    i0.ɵɵtemplate(20, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_20_Template, 3, 1, "ng-container", 24);
    i0.ɵɵtemplate(21, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_21_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(22, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_22_Template, 2, 1, "ng-container", 25);
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
    i0.ɵɵproperty("ngSwitchCase", "custom-cell");
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
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_Template, 23, 22, "ng-container", 22);
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
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 4, 5);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_1_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r131 = i0.ɵɵnextContext(); return ctx_r131.data.sortIt($event); });
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
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 57, 58);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r134 = i0.ɵɵnextContext(); return ctx_r134.data.fetch($event.pageIndex); });
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
            this.data.page$.pipe(debounceTime(500))
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
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", rowMargin: "rowMargin", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", onReady: "onReady", clicked: "clicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[1, "table-wrapper"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "style", "matSortChange", 4, "ngIf"], [4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "matSortChange"], ["table", "matSort"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"], [3, "matColumnDef"], ["class", "row-style", "mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "style", "cursor: pointer;", 3, "class", "click", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "cursor", "pointer", 3, "click"], [3, "input", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "row-style"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-link-text", 3, "matTooltip", "innerHTML", "click"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", 4, "ngIf"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click"], [3, "innerHTML"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink"], [1, "is-mat-icon-cell", 3, "input"], [1, "btn-link-text", "btn-xs", 3, "matTooltip", "routerLink", "click"], ["type", "hidden", 3, "value"], ["style", "width: 20px; height: 20px;", 3, "src", 4, "ngIf"], [2, "width", "20px", "height", "20px", 3, "src"], [3, "name", "type"], [3, "lang", "type"], [3, "type"], [3, "icon", "iconLabel"], [3, "label"], [3, "src", "fontSize", "color"], [3, "element", "menuSettings", "callHandler"], [3, "number"], [3, "title", "subTitle"], [3, "valid", "size", "displayNo", "displayYes", 4, "ngIf"], [3, "valid", "size", 4, "ngIf"], [3, "valid", "size", "displayNo", "displayYes"], [3, "valid", "size"], [3, "icon"], [3, "matTooltip", "src", "fontSize", "matTooltipClass"], [2, "padding-left", "14px"], [3, "line1", "line2"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, ""], [1, "col-lg-12", "search-container", 2, "text-align", "center"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i4.NgIf, i5.MatTable, i6.MatSort, i5.MatHeaderRowDef, i5.MatHeaderRow, i5.MatRowDef, i5.MatRow, i4.NgForOf, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatHeaderCell, i6.MatSortHeader, i7.IsMatIconComponent, i5.MatCellDef, i5.MatCell, i4.NgSwitch, i4.NgSwitchCase, i8.MatTooltip, i1.RouterLinkWithHref, i4.NgClass, i9.EquipementTypeComponent, i10.EquipementStatusComponent, i11.CustomerRankComponent, i12.PriorityComponent, i13.StatusComponent, i14.StatusIconComponent, i15.GenderComponent, i16.PngIconComponent, i17.MenuComponent, i18.PhoneDisplayComponent, i19.CustomCellComponent, i20.YesNoComponent, i21.OriginComponent, i22.NameAvatarComponent, i23.DoubleLineComponent, i4.NgSwitchDefault, i24.MatPaginator], pipes: [i25.AppDatePipe], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
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
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n    <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort\n        *ngIf=\"displayedColumns && data && data.totalElements\" (matSortChange)=\"data.sortIt($event)\" [style]=\"style\">\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"></tr>\n\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                            [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                            [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n                            (click)=\"element.new = false\" [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                            routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n                            [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                            routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text btn-xs\" (click)=\"element.new = false\"\n                            routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                            [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\">\n                        </app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element[column.key] || null\">\n                        </icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\" [color]=\"column.color\">\n                        </png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                            [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n                    <!-- custom cell-->\n                    <ng-container *ngSwitchCase=\"'custom-cell'\">\n                        <lib-custom-cell [title]=\"element[column.key]\" [subTitle]=\"element[column.subTitle]\"\n                            [class]=\"element[column.addClass]\"></lib-custom-cell>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                            *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                            [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                            [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\">\n                        </app-yes-nox>\n                        <app-yes-nox\n                            *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                            [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\n                            [fontSize]=\"column.fontSize\" [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        {{element[column.key] | appDate : lang}}\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                        <span style=\"padding-left: 14px\">\n                            {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                        </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n        [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\n        showFirstLastButtons></mat-paginator>\n</div>", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUF1RSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RILE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsQnRDLHdCQUE0RDs7O0lBQzVELHlCQUEwRjs7OztJQUlsRiw4QkFFb0I7SUFDaEIsc0NBQTBEO0lBQzlELGlCQUFLOzs7O0lBSEQsd0pBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjs7O0lBSi9DLDZCQUFrQztJQUM5QixvR0FJSztJQUNULDBCQUFlOzs7SUFTSCxzQ0FFa0I7OztJQURkLDZFQUF5RDs7OztJQU5qRSw4QkFHNkI7SUFGekIsK1BBQVMsbUdBQW9GLElBQUM7SUFHOUYsc0NBQTBEO0lBQzFELGtKQUVrQjtJQUN0QixpQkFBSzs7OztJQU5ELHdKQUFzRztJQUVyRixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDckIsZUFBNkQ7SUFBN0Qsb0ZBQTZEOzs7SUFOdkYsNkJBQXVDO0lBQ25DLG1IQVFLO0lBQ1QsMEJBQWU7OztJQUVYLDhCQUMyRztJQUN2RyxzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFGRCx3SkFBc0c7SUFDckYsZUFBc0I7SUFBdEIsdUNBQXNCOzs7SUFIL0MsNkJBQXdDO0lBQ3BDLG1IQUdLO0lBQ1QsMEJBQWU7OztJQUNmLDhCQUMyRztJQUN2RyxzQ0FBMEQ7SUFDOUQsaUJBQUs7Ozs7SUFGRCx3SkFBc0c7SUFDckYsZUFBc0I7SUFBdEIsdUNBQXNCOzs7SUFyQi9DLDZCQUFtQztJQUUvQix1SEFVZTtJQUNmLHVIQUtlO0lBQ2Ysb0dBR0s7SUFDVCwwQkFBZTs7O0lBckJJLGVBQXNCO0lBQXRCLDBDQUFzQjtJQVd0QixlQUF1QjtJQUF2QiwyQ0FBdUI7Ozs7SUFnQmxDLDZCQUE2QztJQUN6Qyw2QkFDMEI7SUFEbUIsZ1RBQVMscURBQXNDLElBQUM7SUFDbkUsaUJBQUk7SUFDbEMsMEJBQWU7OztJQUZSLGVBQW1CO0lBQW5CLHlDQUFtQixpREFBQTs7O0lBVWxCLDZCQUFxQztJQUNqQyxzQ0FBNEQ7SUFDaEUsMEJBQWU7OztJQURNLGVBQXdCO0lBQXhCLHlDQUF3Qjs7O0lBRTdDLDZCQUFzQztJQUNsQywyQkFBK0M7SUFDbkQsMEJBQWU7Ozs7SUFETCxlQUFpQztJQUFqQyx5RUFBaUM7Ozs7SUFQL0MsNkJBRWlHO0lBRDdGLGlQQUF1QixLQUFLLElBQUM7SUFFN0IsK0lBRWU7SUFDZiwrSUFFZTtJQUNuQixpQkFBSTs7Ozs7SUFQQSw0SUFBNEY7SUFGekUseUNBQW1CLHNFQUFBO0lBR3ZCLGVBQW9CO0lBQXBCLHdDQUFvQjtJQUdwQixlQUFxQjtJQUFyQix5Q0FBcUI7OztJQU9wQyw2QkFBcUM7SUFDakMsc0NBQXFGO0lBQ3pGLDBCQUFlOzs7SUFEK0IsZUFBd0I7SUFBeEIseUNBQXdCOzs7SUFFdEUsNkJBQXNDO0lBQ2xDLDJCQUErQztJQUNuRCwwQkFBZTs7OztJQURMLGVBQWlDO0lBQWpDLHlFQUFpQzs7O0lBUC9DLDZCQUVpRztJQUM3RiwrSUFFZTtJQUNmLCtJQUVlO0lBQ25CLGlCQUFJOzs7OztJQVBBLDRJQUE0RjtJQUZ4RSx5Q0FBbUIsc0VBQUE7SUFHeEIsZUFBb0I7SUFBcEIsd0NBQW9CO0lBR3BCLGVBQXFCO0lBQXJCLHlDQUFxQjs7O0lBbkI1Qyw2QkFBNEM7SUFHeEMsc0hBU0k7SUFDSixzSEFTSTtJQUNSLDBCQUFlOzs7SUFwQlAsZUFBaUI7SUFBakIsc0NBQWlCO0lBVWpCLGVBQWtCO0lBQWxCLHVDQUFrQjs7OztJQVkxQiw2QkFBaUQ7SUFDN0MsNkJBQ2lHO0lBRDdDLDZPQUF1QixLQUFLLElBQUM7SUFFN0UsWUFDSjtJQUFBLGlCQUFJO0lBQ1IsMEJBQWU7Ozs7O0lBSFAsZUFBNEY7SUFBNUYsNElBQTRGO0lBRDdGLHlDQUFtQjtJQUVsQixlQUNKO0lBREksK0ZBQ0o7OztJQUtBLDBCQUN5Rjs7OztJQUFyRiwyRkFBaUQ7OztJQUh6RCw2QkFBNEM7SUFDeEMsNEJBQW1EO0lBQ25ELDBIQUN5RjtJQUM3RiwwQkFBZTs7OztJQUhVLGVBQTZCO0lBQTdCLGtEQUE2QjtJQUM1QyxlQUFpRDtJQUFqRCw0RUFBaUQ7OztJQUczRCw2QkFBNEM7SUFDeEMsMENBQ3NCO0lBQzFCLDBCQUFlOzs7O0lBRlUsZUFBNEI7SUFBNUIsaURBQTRCLHlDQUFBOzs7SUFJckQsNkJBQTBDO0lBQ3RDLDRDQUEwRjtJQUM5RiwwQkFBZTs7Ozs7SUFEWSxlQUFhO0lBQWIsbUNBQWEsb0NBQUE7OztJQUd4Qyw2QkFBOEM7SUFDMUMsd0NBQW9FO0lBQ3hFLDBCQUFlOzs7O0lBRFEsZUFBNEI7SUFBNUIsaURBQTRCOzs7SUFHbkQsNkJBQXlDO0lBQ3JDLG9DQUNnQjtJQUNwQiwwQkFBZTs7OztJQUZJLGVBQXdCO0lBQXhCLDBDQUF3QixpREFBQTs7O0lBSzNDLDZCQUF1QztJQUNuQyw2QkFBK0M7SUFDbkQsMEJBQWU7Ozs7SUFESCxlQUE2QjtJQUE3QixrREFBNkI7OztJQUl6Qyw2QkFBNEM7SUFDeEMsa0NBQXlEO0lBQzdELDBCQUFlOzs7O0lBREUsZUFBNkI7SUFBN0Isa0RBQTZCOzs7SUFJOUMsNkJBQThDO0lBQzFDLGlDQUFzRDtJQUMxRCwwQkFBZTs7OztJQURDLGVBQTRCO0lBQTVCLGlEQUE0Qjs7O0lBSTVDLDZCQUF5QztJQUNyQywrQkFDVztJQUNmLDBCQUFlOzs7O0lBRkQsZUFBMkI7SUFBM0IsZ0RBQTJCLGdDQUFBLDBCQUFBOzs7O0lBTXpDLDZCQUFxQztJQUNqQyxnQ0FDbUM7SUFEN0IscU9BQWUsa0NBQXlCLElBQUM7SUFDWixpQkFBTztJQUM5QywwQkFBZTs7OztJQUZxQyxlQUFtQjtJQUFuQixxQ0FBbUIsa0NBQUE7OztJQUt2RSw2QkFBOEM7SUFDMUMsd0NBQXNFO0lBQzFFLDBCQUFlOzs7O0lBRFEsZUFBOEI7SUFBOUIsbURBQThCOzs7SUFHckQsNkJBQTRDO0lBQ3hDLHNDQUN5RDtJQUM3RCwwQkFBZTs7OztJQURQLGVBQWtDO0lBQWxDLDhDQUFrQztJQURyQixrREFBNkIsNkNBQUE7OztJQU05QyxrQ0FJYzs7OztJQUZWLGtEQUE2QixxRUFBQSwwQ0FBQSwwQ0FBQTs7O0lBR2pDLGtDQUdjOzs7O0lBRFYsa0RBQTZCLHFFQUFBOzs7SUFSckMsNkJBQStDO0lBQzNDLDJJQUljO0lBQ2QsMklBR2M7SUFDbEIsMEJBQWU7OztJQVJOLGVBQXdHO0lBQXhHLGtJQUF3RztJQUt4RyxlQUFtRztJQUFuRyw0SEFBbUc7OztJQUs1Ryw2QkFBdUM7SUFDbkMsa0NBQXdEO0lBQzVELDBCQUFlOzs7O0lBREUsZUFBNEI7SUFBNUIsaURBQTRCOzs7SUFHN0MsNkJBQTRDO0lBQ3hDLGtDQUVjO0lBQ2xCLDBCQUFlOzs7OztJQUhFLGVBQStDO0lBQS9DLHFGQUErQztJQUFDLGdEQUEyQixnQ0FBQSxpQ0FBQTs7O0lBSzVGLDZCQUE0QztJQUN4QyxZQUNKOztJQUFBLDBCQUFlOzs7OztJQURYLGVBQ0o7SUFESSwrRkFDSjs7O0lBRUEsNkJBQTBDO0lBQ3RDLGdDQUFpQztJQUM3QixZQUNKO0lBQUEsaUJBQU87SUFDWCwwQkFBZTs7OztJQUZQLGVBQ0o7SUFESSwwSUFDSjs7O0lBR0osNkJBQTRDO0lBQ3hDLGtDQUE0RjtJQUNoRywwQkFBZTs7OztJQURFLGVBQTZCO0lBQTdCLGtEQUE2QiwwQ0FBQTs7O0lBRTlDLDZCQUErQjtJQUMzQiwyQkFBK0M7SUFDbkQsMEJBQWU7Ozs7SUFETCxlQUFpQztJQUFqQyx5RUFBaUM7OztJQXpJL0MsaUNBQXFFO0lBRWpFLDZIQUdlO0lBRWYsNkhBdUJlO0lBRWYsNkhBS2U7SUFFZiw2SEFJZTtJQUNmLDZIQUdlO0lBRWYsNkhBRWU7SUFFZiw2SEFFZTtJQUVmLDZIQUdlO0lBR2YsNkhBRWU7SUFHZiwrSEFFZTtJQUdmLCtIQUVlO0lBR2YsK0hBR2U7SUFJZiwrSEFHZTtJQUdmLCtIQUVlO0lBRWYsK0hBR2U7SUFHZiwrSEFVZTtJQUVmLCtIQUVlO0lBRWYsK0hBSWU7SUFFZiwrSEFFZTtJQUVmLCtIQUllO0lBRWYsK0hBRWU7SUFDZiwrSEFFZTtJQUNuQiwwQkFBZTs7O0lBM0kyQiwyQ0FBMEI7SUFFakQsZUFBNEI7SUFBNUIsNkNBQTRCO0lBSzVCLGVBQTJCO0lBQTNCLDRDQUEyQjtJQXlCM0IsZUFBZ0M7SUFBaEMsaURBQWdDO0lBT2hDLGVBQTJCO0lBQTNCLDRDQUEyQjtJQUszQixlQUEyQjtJQUEzQiw0Q0FBMkI7SUFLM0IsZUFBeUI7SUFBekIsMENBQXlCO0lBSXpCLGVBQTZCO0lBQTdCLDhDQUE2QjtJQUk3QixlQUF3QjtJQUF4Qix5Q0FBd0I7SUFNeEIsZUFBc0I7SUFBdEIsdUNBQXNCO0lBS3RCLGVBQTJCO0lBQTNCLDRDQUEyQjtJQUszQixlQUE2QjtJQUE3Qiw4Q0FBNkI7SUFLN0IsZUFBd0I7SUFBeEIseUNBQXdCO0lBT3hCLGVBQW9CO0lBQXBCLHFDQUFvQjtJQU1wQixlQUE2QjtJQUE3Qiw4Q0FBNkI7SUFJN0IsZUFBMkI7SUFBM0IsNENBQTJCO0lBTTNCLGVBQThCO0lBQTlCLCtDQUE4QjtJQVk5QixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFJdEIsZUFBMkI7SUFBM0IsNENBQTJCO0lBTTNCLGVBQTJCO0lBQTNCLDRDQUEyQjtJQUkzQixlQUF5QjtJQUF6QiwwQ0FBeUI7SUFNekIsZUFBMkI7SUFBM0IsNENBQTJCOzs7SUF2SWxELDhCQUM0RjtJQUN4RixnSEEySWU7SUFDbkIsaUJBQUs7Ozs7O0lBN0lELHlJQUF1RjtJQUN4RSxlQUF5QjtJQUF6Qiw4Q0FBeUI7OztJQW5DaEQsaUNBQWtGO0lBQzlFLHdHQU1lO0lBQ2Ysd0dBdUJlO0lBRWYscUZBOElLO0lBRVQsMEJBQWU7OztJQWpMRCw0Q0FBMkI7SUFDdEIsZUFBaUI7SUFBakIscUNBQWlCO0lBT2pCLGVBQWtCO0lBQWxCLHNDQUFrQjs7OztJQWJ6QyxtQ0FDaUg7SUFBdEQsc0xBQWlCLDRCQUFtQixJQUFDO0lBQzVGLHFFQUE0RDtJQUM1RCxxRUFBMEY7SUFFMUYseUZBaUxlO0lBQ25CLGlCQUFROzs7SUF0THlGLDJCQUFlO0lBRDlFLHdDQUFvQjtJQUU5QixlQUFpQztJQUFqQyx5REFBaUM7SUFDaEIsZUFBMEI7SUFBMUIsMERBQTBCO0lBRUYsZUFBbUI7SUFBbkIsaURBQW1COzs7SUFtTHBGLDZCQUF1RDtJQUNuRCwrQkFBeUUsY0FBQSxjQUFBO0lBRzdELFlBQ0o7SUFBQSxpQkFBTSxFQUFBLEVBQUE7SUFHbEIsMEJBQWU7OztJQUpDLGVBQ0o7SUFESSxnREFDSjs7OztJQUlaLDZDQUV5QjtJQURrRCxvTEFBUSxxQ0FBNEIsSUFBQztJQUN2RixpQkFBZ0I7OztJQUZrQyxrREFBNkIsOEJBQUEsaUNBQUEsc0JBQUE7O0FEL0k1RyxNQVdNLGNBQWM7SUErQmhCLFlBQW9CLE1BQWMsRUFDdEIsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsaUJBQW9DO1FBTDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBaEN2QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRTlCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsWUFBTyxHQUEwQixJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUMsQ0FBQTtRQUNqRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUduRixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUczQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsVUFBSyxHQUFRLElBQUksQ0FBQztRQVNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDVixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUE7U0FDakM7SUFFTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFHVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTlELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNULGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUzthQUNoQyxDQUFBO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUMvQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2hCLEVBQUUsRUFDRjtvQkFDSSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFO29CQUNsQyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsaURBQWlEO2lCQUNsRixDQUFDLENBQUM7YUFDVjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNoQixFQUFFLEVBQ0Y7b0JBQ0ksVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUN0QixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUMzQixtQkFBbUIsRUFBRSxPQUFPLEVBQUUsaURBQWlEO2lCQUNsRixDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7Z0JBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNyQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsTUFBTSxXQUFXLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQyxTQUFTLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUM3QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ2pDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxXQUFXO0lBRVgsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUdwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7WUFDcEIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNwQztRQUNELG1GQUFtRjtJQUN2RixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWU7UUFDekIsTUFBTSxPQUFPLEdBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xELEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxDQUFDLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRU0sU0FBUyxDQUFDLFFBQWtCLEVBQUUsT0FBTztRQUN4QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksUUFBUSxHQUFXLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsUUFBUSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFDRCxPQUFPLFFBQVEsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFTSxJQUFJLENBQUMsSUFBUyxFQUFFLFFBQWtCLEVBQUUsVUFBa0IsSUFBSTtRQUM3RCxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNiLE1BQU0sRUFBRTtnQkFDSixLQUFLLEVBQUUsRUFBRTthQUNaO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQjtJQUUzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2VBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QztTQUNKO1FBQ0QsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtJQUN4QixDQUFDOzs0RUFqTkMsY0FBYztpRUFBZCxjQUFjOzs7Ozs7OztRQy9EcEIsOEJBQTJCO1FBRXZCLG1FQXVMUTtRQUNSLGlGQVFlO1FBQ2YsbUZBRXlDO1FBQzdDLGlCQUFNOztRQW5NRyxlQUFvRDtRQUFwRCxpRkFBb0Q7UUF1TDFDLGVBQXNDO1FBQXRDLCtEQUFzQztRQVNoQixlQUFvQztRQUFwQyw2REFBb0M7NDJHRDNJN0QsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDN0UsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDekMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2FBQ3hGLENBQUMsQ0FBQzt1RkFHRCxjQUFjO2NBWG5CLFNBQVM7MkJBQ0ksa0JBQWtCLGNBR2hCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDakMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7d0JBQzdFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztxQkFDeEYsQ0FBQyxDQUFDLGlCQUNZLGlCQUFpQixDQUFDLElBQUk7Z05BR2UsZ0JBQWdCO2tCQUFuRSxTQUFTO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNaLFdBQVc7a0JBQWhELFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUMzQixpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNFLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNJLE9BQU87a0JBQWhCLE1BQU07O0FBc01YLE9BQU8sRUFDSCxZQUFZLEVBT1osa0JBQWtCLEVBQ2xCLGNBQWMsRUFDakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0IH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuXG5pbXBvcnQgeyBDZWxsc0NvbXBvbmVudExpc3QgfSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmludGVyZmFjZSBkaXNwbGF5Q29sdW1uc0NvbmZpZyB7XG4gICAgc2l6ZUljb24/OiBudW1iZXI7XG4gICAgZGlzcGxheVllcz86IGJvb2xlYW47XG4gICAgZGlzcGxheU5vPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICAgIGtleTogc3RyaW5nOyAvLyBvYmplY3Qga2V5XG4gICAgdmFsdWU6IHN0cmluZzsgLy8gZGlzcGxheSBjb2x1bW4gdmFsdWVzXG4gICAgcmF0aW8/OiBudW1iZXI7XG4gICAgb3JkZXI/OiBudW1iZXI7IC8vIHNvcnQgY29sdW1uXG4gICAgY2xhc3M/OiBzdHJpbmc7IC8vIGNzcyBjbGFzc1xuICAgIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdDtcbiAgICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdOyAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gICAgZGlzcGxheT86IHN0cmluZzsgLy8gZm9yY2UgZGlzcGxheWluZyBvdGhlciBzdHVmZiB0aGFuIGVsZW1lbnRbZm9jdXNdXG4gICAgYWxpZ24/OiBzdHJpbmc7IC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gICAgc29ydD86IGJvb2xlYW47IC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gICAgY2xpY2thYmxlPzogYm9vbGVhbjsgLy8gZW5hYmxlIGNsaWNrYWJsZSBjb2x1bW4gd2hlbiBzb3J0aW5nIGlzIGRpc2FibGVcbiAgICBzdGF0ZW1lbnQ/OiBib29sZWFuOyAvLyBieSBkZWZhdWx0IHN0YXRlbWVudCBpcyBmYWxzZSBhbmQgaXMgdXNlZCB3aXRoICdjbGlja2FibGUnIG9wdGlvbnNcbiAgICB2YWx1ZVN0YXRlbWVudD86IHN0cmluZ1tdO1xuICAgIHN1YlRpdGxlPzogc3RyaW5nO1xuICAgIGNvbmZpZz86IGRpc3BsYXlDb2x1bW5zQ29uZmlnO1xuICAgIHZhbHVlT3ZlcnJpZGU/OiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH07XG4gICAgZm9udFNpemU/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2luYXRvckN1cnJlbnQ6IE1hdFBhZ2luYXRvcjtcbiAgICBAVmlld0NoaWxkKCd0YWJsZScsIHsgc3RhdGljOiB0cnVlIH0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuICAgIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gICAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gICAgQElucHV0KCkgcm93TWFyZ2luOiBzdHJpbmcgPSAnMHB4IDBweCc7XG4gICAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKVxuICAgIEBJbnB1dCgpIGlucHV0U2VhcmNoID0gJyc7XG4gICAgQElucHV0KCkgRW1wdHlSb3cgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBibG9ja0RldGFpbHMgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gICAgcHVibGljIGluZGV4ID0gMDtcbiAgICBwdWJsaWMgb3BlbiA9ICcnO1xuICAgIHB1YmxpYyBzZWFyY2ggPSAnJztcbiAgICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XG4gICAgcHVibGljIG5vUmVzdWx0ID0gJyc7XG4gICAgcHVibGljIGRldGFpbHMgPSAnJztcbiAgICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XG4gICAgcHVibGljIHN0eWxlOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5vblJlYWR5LmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIGV4cGFuZChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG5cbiAgICAgICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnU0VBUkNIJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsU2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0NBTkNFTF9TRUFSQ0gnKTtcbiAgICAgICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcblxuICAgICAgICBpZiAodGhpcy5yb3dNYXJnaW4pIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyU3BhY2luZzogdGhpcy5yb3dNYXJnaW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV3cGFnZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBuZXdwYWdlICsgMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3cGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnBhZ2luYXRvciAmJiB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCAhPT0gbmV3cGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ID0gbmV3cGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuc29ydCgpO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcCgoZTogYW55KSA9PiBlLmtleSk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicGFnZVwiXTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IHBhZ2UgPyBOdW1iZXIocGFnZSkgLSAxIDogMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnZSQucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChuOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlYWR5LmVtaXQodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5zb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKGU6IGFueSkgPT4gZS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICB0aGlzLnNob3dUYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYnVpbGRIZWFkZXJzKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcblxuXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRtcDogYW55ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGsua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IFsuLi50bXBdO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBNeUNsYXNzLnB1c2goYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE15Q2xhc3M7XG4gICAgfVxuXG4gICAgc29ydCgpIHtcbiAgICAgICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xuICAgICAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZXhwYW5kU2hvdyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLm5leHQoMClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmV0Y2goMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgICAvLyAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQge1xuICAgIENvcmVNYXRUYWJsZSxcbiAgICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICAgIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgICBQYWdlLFxuICAgIFBhZ2VSZXF1ZXN0LFxuICAgIFNvcnQsXG4gICAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcbiAgICBDZWxsc0NvbXBvbmVudExpc3QsXG4gICAgVGFibGVDb21wb25lbnRcbn1cbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgPCEtLSBUYWJsZSAtLT5cbiAgICA8dGFibGUgbWF0LXRhYmxlICN0YWJsZT1cIm1hdFNvcnRcIiBbZGF0YVNvdXJjZV09XCJkYXRhIFwiIG11bHRpVGVtcGxhdGVEYXRhUm93cyBtYXRTb3J0XG4gICAgICAgICpuZ0lmPVwiZGlzcGxheWVkQ29sdW1ucyAmJiBkYXRhICYmIGRhdGEudG90YWxFbGVtZW50c1wiIChtYXRTb3J0Q2hhbmdlKT1cImRhdGEuc29ydEl0KCRldmVudClcIiBbc3R5bGVdPVwic3R5bGVcIj5cbiAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zVG9EaXNwbGF5XCI+PC90cj5cbiAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCBlbGVtZW50OyBjb2x1bW5zOiBjb2x1bW5zVG9EaXNwbGF5O1wiIGNsYXNzPVwiZWxlbWVudC1yb3dcIj48L3RyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgW21hdENvbHVtbkRlZl09XCJjb2x1bW4ua2V5XCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBkaXNwbGF5ZWRDb2x1bW5zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnNvcnRcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiXG4gICAgICAgICAgICAgICAgICAgIG1hdC1zb3J0LWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uc29ydFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQWpvdXRlciBmb25jdGlvbiBnZW5lcmF0ZSBDbGFzcyAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmNsaWNrYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tlZC5lbWl0KHtrZXkgOiBjb2x1bW4ua2V5LCBzdGF0ZW1lbnQgOiAoY29sdW1uLnN0YXRlbWVudCA9ICFjb2x1bW4uc3RhdGVtZW50KX0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiAqbmdJZj1cImNvbHVtbi52YWx1ZVN0YXRlbWVudCAmJiBjb2x1bW4uc3RhdGVtZW50ICE9PSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dF09XCJjb2x1bW4udmFsdWVTdGF0ZW1lbnRbY29sdW1uLnN0YXRlbWVudCA/IDEgOiAwXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctc3R5bGVcIiBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICcnXSlcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbWVudCAhPT0gJ2VtcHR5J1wiIFtuZ1N3aXRjaF09XCJjb2x1bW4ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGNsaWNrIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWNsaWNrJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW21hdFRvb2x0aXBdPVwib3BlblwiIGNsYXNzPVwiYnRuLWxpbmstdGV4dFwiIChjbGljayk9XCJjYWxsRnVuY3Rpb24uZW1pdChlbGVtZW50W2NvbHVtbi5rZXldKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJkZXRhaWxzXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gbGluayAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1saW5rJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICBtYXRCYWRnZT1cIipcIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiZWxlbWVudC5uZXdcIiBbbWF0VG9vbHRpcF09XCJvcGVuXCIgY2xhc3M9XCJtYXQtYnV0dG9uIGJ0bi14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW1lbnQubmV3ID0gZmFsc2VcIiBbbmdDbGFzc109XCJidG5PdmVycmlkZSA9PSB0cnVlID8gJ2xpbmstYnRuJzogJ25vd2JvYXJkLWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi5kaXNwbGF5XCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFlbGVtZW50Lm5ld1wiIFttYXRUb29sdGlwXT1cIm9wZW5cIiBjbGFzcz1cIm1hdC1idXR0b24gYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJidG5PdmVycmlkZSA9PSB0cnVlID8gJ2xpbmstYnRuJzogJ25vd2JvYXJkLWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gY2xhc3M9XCJpcy1tYXQtaWNvbi1jZWxsXCIgW2lucHV0XT1cImNvbHVtbi5kaXNwbGF5XCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1dHRvbiBsaW5rIHRleHQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tbGluay10ZXh0J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW21hdFRvb2x0aXBdPVwib3BlblwiIGNsYXNzPVwiYnRuLWxpbmstdGV4dCBidG4teHNcIiAoY2xpY2spPVwiZWxlbWVudC5uZXcgPSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4udmFsdWUgPT0gJ0FjdGlvbnMnID8gZGV0YWlscyA6IGNvbHVtbi5rZXkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBjdXN0b20tLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbS1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbdmFsdWVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImVsZW1lbnRbY29sdW1uLmtleV0gJiYgY29sdW1uLnZhbHVlT3ZlcnJpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiY29sdW1uLnZhbHVlT3ZlcnJpZGVbZWxlbWVudFtjb2x1bW4ua2V5XV1cIiBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaXQtY2F0ZWdvcnknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWVxdWlwZW1lbnQtdHlwZSBbbmFtZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ub3ZlcnJpZGVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC1lcXVpcGVtZW50LXR5cGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gaXQgc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaXQtc3RhdHVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1lcXVpcGVtZW50LXN0YXR1cyBbbGFuZ109XCJsYW5nXCIgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWVxdWlwZW1lbnQtc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGN1c3RvbWVyIHJhbmsgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b21lci1yYW5rJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1jdXN0b21lci1yYW5rIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1jdXN0b21lci1yYW5rPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIHByaW9yaXR5LS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwcmlvcml0eSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uLXByaW9yaXR5IFtpY29uXT1cImVsZW1lbnRbJ0ljb24nXVwiIFtpY29uTGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XSB8fCBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ljb24tcHJpb3JpdHk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3RhdHVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXR1cyBbbGFiZWxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHN0YXR1cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3N0YXR1cy1pY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXR1cy1pY29uIFtsYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zdGF0dXMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2dlbmRlci1hdmF0YXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWdlbmRlciBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtZ2VuZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFBuZyBJY29uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncG5nLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG5nLWljb24gW3NyY109XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW2ZvbnRTaXplXT1cImNvbHVtbi5mb250U2l6ZVwiIFtjb2xvcl09XCJjb2x1bW4uY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcG5nLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBtZW51IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbWVudSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZW51IChjYWxsSGFuZGxlcik9XCJjYWxsRnVuY3Rpb24uZW1pdCgkZXZlbnQpXCIgW2VsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lbnVTZXR0aW5nc109XCJjb2x1bW4uY29uZmlnXCI+PC9tZW51PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGhvbmUtZGlzcGxheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtcGhvbmUtZGlzcGxheSBbbnVtYmVyXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1waG9uZS1kaXNwbGF5PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjdXN0b20gY2VsbC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tLWNlbGwnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGliLWN1c3RvbS1jZWxsIFt0aXRsZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW3N1YlRpdGxlXT1cImVsZW1lbnRbY29sdW1uLnN1YlRpdGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImVsZW1lbnRbY29sdW1uLmFkZENsYXNzXVwiPjwvbGliLWN1c3RvbS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIneWVzLW5vLWRpc3BsYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXllcy1ub3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbHVtbi5jb25maWcgJiYgKGNvbHVtbi5jb25maWcuZGlzcGxheU5vICE9PSB1bmRlZmluZWQgJiYgY29sdW1uLmNvbmZpZy5kaXNwbGF5WWVzICE9PSB1bmRlZmluZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzaXplXT1cImNvbHVtbi5jb25maWc/LnNpemVJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheU5vXT1cImNvbHVtbi5jb25maWcuZGlzcGxheVllc1wiIFtkaXNwbGF5WWVzXT1cImNvbHVtbi5jb25maWcuZGlzcGxheU5vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC15ZXMtbm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC15ZXMtbm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoIWNvbHVtbi5jb25maWcgfHwgKGNvbHVtbi5jb25maWcgJiYgIShjb2x1bW4uY29uZmlnLmRpc3BsYXlObyB8fCBjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXMpKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW3NpemVdPVwiY29sdW1uLmNvbmZpZz8uc2l6ZUljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXllcy1ub3g+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gb3JpZ2luLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidvcmlnaW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWNvbi1vcmlnaW4gW2ljb25dPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvaWNvbi1vcmlnaW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gbmFtZSBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ25hbWUtYXZhdGFyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hbWUtYXZhdGFyIG1hdFRvb2x0aXA9XCJ7e0pvaW4oZWxlbWVudCwgY29sdW1uLm92ZXJyaWRlKX19XCIgW3NyY109XCJlbGVtZW50W2NvbHVtbi5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9udFNpemVdPVwiY29sdW1uLmZvbnRTaXplXCIgW21hdFRvb2x0aXBDbGFzc109XCInbXktdG9vbHRpcCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmFtZS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRhdGUgZm9ybWF0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF0ZS1mb3JtYXQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW1lbnRbY29sdW1uLmtleV0gfCBhcHBEYXRlIDogbGFuZ319XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGNvdW50IHJvd3MgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb3VudC1yb3cnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTRweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7KGVsZW1lbnRbY29sdW1uLmtleV0gJiYgZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggPyBlbGVtZW50W2NvbHVtbi5rZXldLmxlbmd0aCA6ICctJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkb3VibGUgbGluZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RvdWJsZS1saW5lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRvdWJsZS1saW5lIFtsaW5lMV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCIgW2xpbmUyXT1cImVsZW1lbnRbY29sdW1uLm92ZXJyaWRlXVwiPjwvZG91YmxlLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3RhYmxlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhICYmIGRhdGEudG90YWxFbGVtZW50cyA9PT0gMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJoZWlnaHQ6IDg0cHg7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgc2VhcmNoLWNvbnRhaW5lclwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG5vUmVzdWx0IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG1hdC1wYWdpbmF0b3IgI01hdFBhZ2luYXRvckN1cnJlbnQgKm5nSWY9XCJkYXRhICYmIGRhdGEudG90YWxFbGVtZW50cyA+IDBcIiBbbGVuZ3RoXT1cImRhdGEudG90YWxFbGVtZW50c1wiXG4gICAgICAgIFtwYWdlU2l6ZV09XCJkYXRhLnNpemVcIiBbcGFnZUluZGV4XT1cImRhdGEubnVtYmVyXCIgW2hpZGVQYWdlU2l6ZV09XCJ0cnVlXCIgKHBhZ2UpPVwiZGF0YS5mZXRjaCgkZXZlbnQucGFnZUluZGV4KVwiXG4gICAgICAgIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PiJdfQ==