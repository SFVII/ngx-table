import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { debounceTime } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./table.service";
import * as i3 from "./translate.service";
import * as i4 from "./cells-component/png-icon/png-icon.component";
import * as i5 from "@angular/material/paginator";
import * as i6 from "@angular/material/table";
import * as i7 from "@angular/material/sort";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/common";
import * as i10 from "./cells-component/customer-rank/customer-rank.component";
import * as i11 from "./cells-component/equipement-status/equipement-status.component";
import * as i12 from "./cells-component/equipement-type/equipement-type.component";
import * as i13 from "./cells-component/gender/gender.component";
import * as i14 from "./cells-component/is-mat-icon/is-mat-icon.component";
import * as i15 from "./cells-component/name-avatar/name-avatar.component";
import * as i16 from "./cells-component/origin/origin.component";
import * as i17 from "./cells-component/phone-display/phone-display.component";
import * as i18 from "./cells-component/priority/priority.component";
import * as i19 from "./cells-component/yes-no/yes-no.component";
import * as i20 from "./cells-component/menu/menu.component";
import * as i21 from "./cells-component/status/status.component";
import * as i22 from "./cells-component/status-icon/status-icon.component";
import * as i23 from "./cells-component/double-line/double-line.component";
import * as i24 from "./cells-component/custom-cell/custom-cell.component";
import * as i25 from "./cells-component/custom-button/custom-button.component";
import * as i26 from "./core-data-table/app-date.pipe";
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
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_ng_container_2_ng_container_1_th_1_Template_th_click_0_listener() { i0.ɵɵrestoreView(_r22); const column_r8 = i0.ɵɵnextContext(3).$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.clicked.emit({ key: column_r8.key, statement: column_r8.statement = !column_r8.statement })); });
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
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 26);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r55); const element_r28 = i0.ɵɵnextContext(2).$implicit; const column_r8 = i0.ɵɵnextContext().$implicit; const ctx_r53 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r53.callFunction.emit(element_r28[column_r8.key])); });
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
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r66); const element_r28 = i0.ɵɵnextContext(3).$implicit; return i0.ɵɵresetView(element_r28.new = false); });
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 2);
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
    const ctx_r58 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r8.override ? ctx_r58.buildLink(column_r8.override, element_r28) : element_r28[column_r8.key]);
    i0.ɵɵproperty("matTooltip", ctx_r58.open)("ngClass", ctx_r58.btnOverride == true ? "link-btn" : "nowboard-btn");
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
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("click", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r79); const element_r28 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(element_r28.new = false); });
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
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "menu", 43);
    i0.ɵɵlistener("callHandler", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_13_Template_menu_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r103 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r103.callFunction.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r28)("menuSettings", column_r8.config);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "custom-button", 44);
    i0.ɵɵlistener("callHandler", function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_14_Template_custom_button_callHandler_1_listener($event) { i0.ɵɵrestoreView(_r108); const ctx_r107 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r107.callFunction.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r28)("config", column_r8.config);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-phone-display", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("number", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-custom-cell", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(element_r28[column_r8.addClass]);
    i0.ɵɵproperty("title", element_r28[column_r8.key])("subTitle", element_r28[column_r8.subTitle])("subTitleFormat", column_r8.subTitleFormat);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_app_yes_nox_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 49);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon)("displayNo", column_r8.config.displayYes)("displayYes", column_r8.config.displayNo);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_app_yes_nox_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-yes-nox", 50);
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(3).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("valid", element_r28[column_r8.key])("size", column_r8.config == null ? null : column_r8.config.sizeIcon);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_app_yes_nox_1_Template, 1, 4, "app-yes-nox", 47);
    i0.ɵɵtemplate(2, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_app_yes_nox_2_Template, 1, 2, "app-yes-nox", 48);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r8.config && (column_r8.config.displayNo !== undefined && column_r8.config.displayYes !== undefined));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r8.config || column_r8.config && !(column_r8.config.displayNo || column_r8.config.displayYes));
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r28[column_r8.key]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 52);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r48.Join(element_r28, column_r8.override));
    i0.ɵɵproperty("src", element_r28[column_r8.key])("fontSize", column_r8.fontSize)("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "appDate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, element_r28[column_r8.key], ctx_r49.lang), " ");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 53);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r28[column_r8.key] && element_r28[column_r8.key].length ? element_r28[column_r8.key].length : "-", " ");
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "double-line", 54);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r28 = i0.ɵɵnextContext(2).$implicit;
    const column_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("line1", element_r28[column_r8.key])("line2", element_r28[column_r8.override]);
} }
function TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(14, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_14_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(15, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_15_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(16, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_16_Template, 2, 5, "ng-container", 24);
    i0.ɵɵtemplate(17, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_17_Template, 3, 2, "ng-container", 24);
    i0.ɵɵtemplate(18, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_18_Template, 2, 1, "ng-container", 24);
    i0.ɵɵtemplate(19, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_19_Template, 2, 4, "ng-container", 24);
    i0.ɵɵtemplate(20, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_20_Template, 3, 4, "ng-container", 24);
    i0.ɵɵtemplate(21, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_21_Template, 3, 1, "ng-container", 24);
    i0.ɵɵtemplate(22, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_22_Template, 2, 2, "ng-container", 24);
    i0.ɵɵtemplate(23, TableComponent_table_1_ng_container_4_td_3_ng_container_1_ng_container_23_Template, 2, 1, "ng-container", 25);
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
    i0.ɵɵproperty("ngSwitchCase", "custom-button");
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
    i0.ɵɵtemplate(1, TableComponent_table_1_ng_container_4_td_3_ng_container_1_Template, 24, 23, "ng-container", 22);
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
    const _r137 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 4, 5);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_1_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r137); const ctx_r136 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r136.data.sortIt($event)); });
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
    i0.ɵɵelementStart(1, "div", 55)(2, "div", 56)(3, "div", 57);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noResult, " ");
} }
function TableComponent_mat_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 58, 59);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r139 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r139.data.fetch($event.pageIndex)); });
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
        this.previousPageNumber = null;
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
        if (changes.data) {
            this.pageNumberSub();
        }
        if (changes && changes.data && changes.data.firstChange) {
            this.init();
        }
        else {
            if ((this.inputSearch.length > 3)
                && this.inputSearch.length < 200) {
                if (this.data) {
                    console.log('avant next 0');
                    this.data.filter(this.inputSearch);
                    this.data.pageNumber.next(0);
                    this.data.fetch(0);
                    this.changeDetectorRef.markForCheck();
                }
            }
        }
    }
    init() {
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
        if (this.data && this.columnDefinitions) {
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.displayedColumns = this.sort();
            this.columnsToDisplay = this.displayedColumns.map((e) => e.key);
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            const page = this.route.snapshot.queryParams["page"];
            if (page) {
                this.data.pageNumber.next(page);
            }
            else {
                this.data.pageNumber.next(1);
            }
            const currentPage = page ? Number(page) - 1 : 0;
            if (this.data.paginator) {
                this.data.paginator.pageIndex = currentPage;
            }
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
    pageNumberSub() {
        if (this.data) {
            this.data.pageNumber.subscribe((newpage) => {
                console.log(newpage, 'newpage');
                if (newpage > 0 && newpage != this.previousPageNumber) {
                    this.previousPageNumber = newpage;
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge', // remove to replace all query params by provided
                    });
                }
                else if (newpage === 0 && newpage != this.previousPageNumber) {
                    this.previousPageNumber = newpage;
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
        }
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
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", rowMargin: "rowMargin", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", onReady: "onReady", clicked: "clicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[1, "table-wrapper"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "style", "matSortChange", 4, "ngIf"], [4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource", "matSortChange"], ["table", "matSort"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"], [3, "matColumnDef"], ["class", "row-style", "mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "style", "cursor: pointer;", 3, "class", "click", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "cursor", "pointer", 3, "click"], [3, "input", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "row-style"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-link-text", 3, "matTooltip", "innerHTML", "click"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "mat-button btn-xs", 3, "matTooltip", "ngClass", "routerLink", 4, "ngIf"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink", "click"], [3, "innerHTML"], [1, "mat-button", "btn-xs", 3, "matTooltip", "ngClass", "routerLink"], [1, "is-mat-icon-cell", 3, "input"], [1, "btn-link-text", "btn-xs", 3, "matTooltip", "routerLink", "click"], ["type", "hidden", 3, "value"], ["style", "width: 20px; height: 20px;", 3, "src", 4, "ngIf"], [2, "width", "20px", "height", "20px", 3, "src"], [3, "name", "type"], [3, "lang", "type"], [3, "type"], [3, "icon", "iconLabel"], [3, "label"], [3, "src", "fontSize", "color"], [3, "element", "menuSettings", "callHandler"], [3, "element", "config", "callHandler"], [3, "number"], [3, "title", "subTitle", "subTitleFormat"], [3, "valid", "size", "displayNo", "displayYes", 4, "ngIf"], [3, "valid", "size", 4, "ngIf"], [3, "valid", "size", "displayNo", "displayYes"], [3, "valid", "size"], [3, "icon"], [3, "matTooltip", "src", "fontSize", "matTooltipClass"], [2, "padding-left", "14px"], [3, "line1", "line2"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, ""], [1, "col-lg-12", "search-container", 2, "text-align", "center"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [i4.PngIconComponent, i5.MatPaginator, i6.MatTable, i6.MatHeaderCellDef, i6.MatHeaderRowDef, i6.MatColumnDef, i6.MatCellDef, i6.MatRowDef, i6.MatHeaderCell, i6.MatCell, i6.MatHeaderRow, i6.MatRow, i7.MatSort, i7.MatSortHeader, i8.MatTooltip, i9.NgClass, i9.NgForOf, i9.NgIf, i9.NgSwitch, i9.NgSwitchCase, i9.NgSwitchDefault, i1.RouterLinkWithHref, i10.CustomerRankComponent, i11.EquipementStatusComponent, i12.EquipementTypeComponent, i13.GenderComponent, i14.IsMatIconComponent, i15.NameAvatarComponent, i16.OriginComponent, i17.PhoneDisplayComponent, i18.PriorityComponent, i19.YesNoComponent, i20.MenuComponent, i21.StatusComponent, i22.StatusIconComponent, i23.DoubleLineComponent, i24.CustomCellComponent, i25.CustomButtonComponent, i26.AppDatePipe], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
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
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n    <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort\n        *ngIf=\"displayedColumns && data && data.totalElements\" (matSortChange)=\"data.sortIt($event)\" [style]=\"style\">\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"></tr>\n\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                            [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                            [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n                            (click)=\"element.new = false\" [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                            routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n                            [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                            routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text btn-xs\" (click)=\"element.new = false\"\n                            routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                            [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\">\n                        </app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element[column.key] || null\">\n                        </icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\" [color]=\"column.color\">\n                        </png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                            [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- custom button -->\n                    <ng-container *ngSwitchCase=\"'custom-button'\">\n                        <custom-button (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                            [config]=\"column.config\"></custom-button>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n                    <!-- custom cell-->\n                    <ng-container *ngSwitchCase=\"'custom-cell'\">\n                        <lib-custom-cell [title]=\"element[column.key]\" [subTitle]=\"element[column.subTitle]\"\n                            [subTitleFormat]=\"column.subTitleFormat\" [class]=\"element[column.addClass]\">\n                        </lib-custom-cell>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                            *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                            [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                            [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\">\n                        </app-yes-nox>\n                        <app-yes-nox\n                            *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                            [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\n                            [fontSize]=\"column.fontSize\" [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        {{element[column.key] | appDate : lang}}\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                        <span style=\"padding-left: 14px\">\n                            {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                        </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n        [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\n        showFirstLastButtons></mat-paginator>\n</div>", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUF1RSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RILE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEJ0Qyx3QkFBNEQ7OztJQUM1RCx5QkFBMEY7Ozs7SUFJbEYsOEJBRW9CO0lBQ2hCLHNDQUEwRDtJQUM5RCxpQkFBSzs7OztJQUhELHdKQUFzRztJQUVyRixlQUFzQjtJQUF0Qix1Q0FBc0I7OztJQUovQyw2QkFBa0M7SUFDOUIsb0dBSUs7SUFDVCwwQkFBZTs7O0lBU0gsc0NBRWtCOzs7SUFEZCw2RUFBeUQ7Ozs7SUFOakUsOEJBRzZCO0lBRnpCLCtQQUFTLGVBQUEsbUdBQW9GLENBQUEsSUFBQztJQUc5RixzQ0FBMEQ7SUFDMUQsa0pBRWtCO0lBQ3RCLGlCQUFLOzs7O0lBTkQsd0pBQXNHO0lBRXJGLGVBQXNCO0lBQXRCLHVDQUFzQjtJQUNyQixlQUE2RDtJQUE3RCxvRkFBNkQ7OztJQU52Riw2QkFBdUM7SUFDbkMsbUhBUUs7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LGNBR2hCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDakMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7d0JBQzdFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztxQkFDeEYsQ0FBQyxDQUFDLGlCQUNZLGlCQUFpQixDQUFDLElBQUk7Z05BR2UsZ0JBQWdCO2tCQUFuRSxTQUFTO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNaLFdBQVc7a0JBQWhELFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUMzQixpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNFLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNJLE9BQU87a0JBQWhCLE1BQU07O0FBK05YLE9BQU8sRUFDSCxZQUFZLEVBT1osa0JBQWtCLEVBQ2xCLGNBQWMsRUFDakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0IH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuXG5pbXBvcnQgeyBDZWxsc0NvbXBvbmVudExpc3QgfSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmludGVyZmFjZSBkaXNwbGF5Q29sdW1uc0NvbmZpZyB7XG4gICAgc2l6ZUljb24/OiBudW1iZXI7XG4gICAgZGlzcGxheVllcz86IGJvb2xlYW47XG4gICAgZGlzcGxheU5vPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICAgIGtleTogc3RyaW5nOyAvLyBvYmplY3Qga2V5XG4gICAgdmFsdWU6IHN0cmluZzsgLy8gZGlzcGxheSBjb2x1bW4gdmFsdWVzXG4gICAgcmF0aW8/OiBudW1iZXI7XG4gICAgb3JkZXI/OiBudW1iZXI7IC8vIHNvcnQgY29sdW1uXG4gICAgY2xhc3M/OiBzdHJpbmc7IC8vIGNzcyBjbGFzc1xuICAgIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdDtcbiAgICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdOyAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gICAgZGlzcGxheT86IHN0cmluZzsgLy8gZm9yY2UgZGlzcGxheWluZyBvdGhlciBzdHVmZiB0aGFuIGVsZW1lbnRbZm9jdXNdXG4gICAgYWxpZ24/OiBzdHJpbmc7IC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gICAgc29ydD86IGJvb2xlYW47IC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gICAgY2xpY2thYmxlPzogYm9vbGVhbjsgLy8gZW5hYmxlIGNsaWNrYWJsZSBjb2x1bW4gd2hlbiBzb3J0aW5nIGlzIGRpc2FibGVcbiAgICBzdGF0ZW1lbnQ/OiBib29sZWFuOyAvLyBieSBkZWZhdWx0IHN0YXRlbWVudCBpcyBmYWxzZSBhbmQgaXMgdXNlZCB3aXRoICdjbGlja2FibGUnIG9wdGlvbnNcbiAgICB2YWx1ZVN0YXRlbWVudD86IHN0cmluZ1tdO1xuICAgIHN1YlRpdGxlPzogc3RyaW5nO1xuICAgIGFkZENsYXNzPzogc3RyaW5nO1xuICAgIHN1YlRpdGxlRm9ybWF0Pzogc3RyaW5nO1xuICAgIGNvbmZpZz86IGRpc3BsYXlDb2x1bW5zQ29uZmlnO1xuICAgIHZhbHVlT3ZlcnJpZGU/OiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH07XG4gICAgZm9udFNpemU/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2luYXRvckN1cnJlbnQ6IE1hdFBhZ2luYXRvcjtcbiAgICBAVmlld0NoaWxkKCd0YWJsZScsIHsgc3RhdGljOiB0cnVlIH0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuICAgIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gICAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gICAgQElucHV0KCkgcm93TWFyZ2luOiBzdHJpbmcgPSAnMHB4IDBweCc7XG4gICAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25SZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKVxuICAgIEBJbnB1dCgpIGlucHV0U2VhcmNoID0gJyc7XG4gICAgQElucHV0KCkgRW1wdHlSb3cgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBibG9ja0RldGFpbHMgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gICAgcHVibGljIGluZGV4ID0gMDtcbiAgICBwdWJsaWMgb3BlbiA9ICcnO1xuICAgIHB1YmxpYyBzZWFyY2ggPSAnJztcbiAgICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XG4gICAgcHVibGljIG5vUmVzdWx0ID0gJyc7XG4gICAgcHVibGljIGRldGFpbHMgPSAnJztcbiAgICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XG4gICAgcHVibGljIHN0eWxlOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gICAgcHJpdmF0ZSBwcmV2aW91c1BhZ2VOdW1iZXI6IG51bWJlciA9ICBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMub25SZWFkeS5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBleHBhbmQoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5ibG9ja0RldGFpbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZWxlbWVudFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuXG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGJ1aWxkSGVhZGVycygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5zb3J0KCk7XG5cblxuICAgICAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICAgICAgICBjb25zdCB0bXA6IGFueSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICB0bXAucHVzaChrLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBbLi4udG1wXTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdNb2R1bGUgVGFibGUgTmV3IFVwZGF0ZSBDb2x1bW4gRGVmaW5pdGlvbicsICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ2xhc3MoQ2xhc3M6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNeUNsYXNzO1xuICAgIH1cblxuICAgIHNvcnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIEpvaW4oZWxlbTogYW55LCBvdmVycmlkZTogc3RyaW5nW10sIGpvaW5LZXk6IHN0cmluZyA9ICdcXG4nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSlcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXJTdWIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRhdGEgJiYgY2hhbmdlcy5kYXRhLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAzKVxuICAgICAgICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdmFudCBuZXh0IDAnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5uZXh0KDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICAgICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xuICAgICAgICB0aGlzLm5vUmVzdWx0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ05PX1JFU1VMVCcpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgICAgIGlmICh0aGlzLnJvd01hcmdpbikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3JkZXJTcGFjaW5nOiB0aGlzLnJvd01hcmdpblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLnNvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKGU6IGFueSkgPT4gZS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvckN1cnJlbnQ7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInBhZ2VcIl07XG4gICAgICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLm5leHQocGFnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLm5leHQoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBwYWdlID8gTnVtYmVyKHBhZ2UpIC0gMSA6IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmRhdGEuZmV0Y2goY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2UkLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgobjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZWFkeS5lbWl0KHRydWUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS51cGRhdGVIZWFkZXIuc3Vic2NyaWJlKChzdGF0dXM6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5zZXJ2aWNlLmRpc3BsYXlDb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuc29ydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKChlOiBhbnkpID0+IGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWdlTnVtYmVyU3ViKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5zdWJzY3JpYmUoKG5ld3BhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld3BhZ2UsICduZXdwYWdlJylcbiAgICAgICAgICAgICAgICBpZiAobmV3cGFnZSA+IDAgJiYgbmV3cGFnZSAhPSB0aGlzLnByZXZpb3VzUGFnZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZU51bWJlciA9IG5ld3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IG5ld3BhZ2UgKyAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwICYmIG5ld3BhZ2UgIT0gdGhpcy5wcmV2aW91c1BhZ2VOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2VOdW1iZXIgPSBuZXdwYWdlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggPSBuZXdwYWdlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7XG4gICAgQ29yZU1hdFRhYmxlLFxuICAgIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gICAgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLFxuICAgIFBhZ2UsXG4gICAgUGFnZVJlcXVlc3QsXG4gICAgU29ydCxcbiAgICBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLFxuICAgIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgICBUYWJsZUNvbXBvbmVudFxufVxuIiwiPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgICA8IS0tIFRhYmxlIC0tPlxuICAgIDx0YWJsZSBtYXQtdGFibGUgI3RhYmxlPVwibWF0U29ydFwiIFtkYXRhU291cmNlXT1cImRhdGEgXCIgbXVsdGlUZW1wbGF0ZURhdGFSb3dzIG1hdFNvcnRcbiAgICAgICAgKm5nSWY9XCJkaXNwbGF5ZWRDb2x1bW5zICYmIGRhdGEgJiYgZGF0YS50b3RhbEVsZW1lbnRzXCIgKG1hdFNvcnRDaGFuZ2UpPVwiZGF0YS5zb3J0SXQoJGV2ZW50KVwiIFtzdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImNvbHVtbnNUb0Rpc3BsYXlcIj48L3RyPlxuICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCIgY2xhc3M9XCJlbGVtZW50LXJvd1wiPjwvdHI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5rZXlcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRpc3BsYXllZENvbHVtbnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uc29ydFwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXNvcnQtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5zb3J0XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBBam91dGVyIGZvbmN0aW9uIGdlbmVyYXRlIENsYXNzIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja2VkLmVtaXQoe2tleSA6IGNvbHVtbi5rZXksIHN0YXRlbWVudCA6IChjb2x1bW4uc3RhdGVtZW50ID0gIWNvbHVtbi5zdGF0ZW1lbnQpfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uICpuZ0lmPVwiY29sdW1uLnZhbHVlU3RhdGVtZW50ICYmIGNvbHVtbi5zdGF0ZW1lbnQgIT09IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0XT1cImNvbHVtbi52YWx1ZVN0YXRlbWVudFtjb2x1bW4uc3RhdGVtZW50ID8gMSA6IDBdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5jbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1zdHlsZVwiIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJyddKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtZW50ICE9PSAnZW1wdHknXCIgW25nU3dpdGNoXT1cImNvbHVtbi5tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdXR0b24gY2xpY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tY2xpY2snXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCIgY2xhc3M9XCJidG4tbGluay10ZXh0XCIgKGNsaWNrKT1cImNhbGxGdW5jdGlvbi5lbWl0KGVsZW1lbnRbY29sdW1uLmtleV0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRldGFpbHNcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1dHRvbiBsaW5rIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uLWxpbmsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIG1hdEJhZGdlPVwiKlwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJlbGVtZW50Lm5ld1wiIFttYXRUb29sdGlwXT1cIm9wZW5cIiBjbGFzcz1cIm1hdC1idXR0b24gYnRuLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbWVudC5uZXcgPSBmYWxzZVwiIFtuZ0NsYXNzXT1cImJ0bk92ZXJyaWRlID09IHRydWUgPyAnbGluay1idG4nOiAnbm93Ym9hcmQtYnRuJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLmRpc3BsYXlcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWVsZW1lbnQubmV3XCIgW21hdFRvb2x0aXBdPVwib3BlblwiIGNsYXNzPVwibWF0LWJ1dHRvbiBidG4teHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImJ0bk92ZXJyaWRlID09IHRydWUgPyAnbGluay1idG4nOiAnbm93Ym9hcmQtYnRuJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBjbGFzcz1cImlzLW1hdC1pY29uLWNlbGxcIiBbaW5wdXRdPVwiY29sdW1uLmRpc3BsYXlcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIGxpbmsgdGV4dCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1saW5rLXRleHQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCIgY2xhc3M9XCJidG4tbGluay10ZXh0IGJ0bi14c1wiIChjbGljayk9XCJlbGVtZW50Lm5ldyA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbHVtbi52YWx1ZSA9PSAnQWN0aW9ucycgPyBkZXRhaWxzIDogY29sdW1uLmtleSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGN1c3RvbS0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFt2YWx1ZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiZWxlbWVudFtjb2x1bW4ua2V5XSAmJiBjb2x1bW4udmFsdWVPdmVycmlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJjb2x1bW4udmFsdWVPdmVycmlkZVtlbGVtZW50W2NvbHVtbi5rZXldXVwiIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpdC1jYXRlZ29yeSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtZXF1aXBlbWVudC10eXBlIFtuYW1lXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5vdmVycmlkZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLWVxdWlwZW1lbnQtdHlwZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBpdCBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpdC1zdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWVxdWlwZW1lbnQtc3RhdHVzIFtsYW5nXT1cImxhbmdcIiBbdHlwZV09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtZXF1aXBlbWVudC1zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gY3VzdG9tZXIgcmFuayAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbWVyLXJhbmsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWN1c3RvbWVyLXJhbmsgW3R5cGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvYXBwLWN1c3RvbWVyLXJhbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gcHJpb3JpdHktLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3ByaW9yaXR5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGljb24tcHJpb3JpdHkgW2ljb25dPVwiZWxlbWVudFsnSWNvbiddXCIgW2ljb25MYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldIHx8IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaWNvbi1wcmlvcml0eT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzIFtsYWJlbF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3RhdHVzLWljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzLWljb24gW2xhYmVsXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L3N0YXR1cy1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGljb24gZ2VuZGVyIGF2YXRhci0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZ2VuZGVyLWF2YXRhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtZ2VuZGVyIFt0eXBlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2FwcC1nZW5kZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUG5nIEljb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbmctaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwbmctaWNvbiBbc3JjXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbZm9udFNpemVdPVwiY29sdW1uLmZvbnRTaXplXCIgW2NvbG9yXT1cImNvbHVtbi5jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wbmctaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIG1lbnUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidtZW51J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1lbnUgKGNhbGxIYW5kbGVyKT1cImNhbGxGdW5jdGlvbi5lbWl0KCRldmVudClcIiBbZWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudVNldHRpbmdzXT1cImNvbHVtbi5jb25maWdcIj48L21lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY3VzdG9tIGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbS1idXR0b24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y3VzdG9tLWJ1dHRvbiAoY2FsbEhhbmRsZXIpPVwiY2FsbEZ1bmN0aW9uLmVtaXQoJGV2ZW50KVwiIFtlbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29sdW1uLmNvbmZpZ1wiPjwvY3VzdG9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3Bob25lLWRpc3BsYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXBob25lLWRpc3BsYXkgW251bWJlcl09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9hcHAtcGhvbmUtZGlzcGxheT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY3VzdG9tIGNlbGwtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbS1jZWxsJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1jdXN0b20tY2VsbCBbdGl0bGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzdWJUaXRsZV09XCJlbGVtZW50W2NvbHVtbi5zdWJUaXRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWJUaXRsZUZvcm1hdF09XCJjb2x1bW4uc3ViVGl0bGVGb3JtYXRcIiBbY2xhc3NdPVwiZWxlbWVudFtjb2x1bW4uYWRkQ2xhc3NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1jdXN0b20tY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGdlbmRlciBhdmF0YXItLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3llcy1uby1kaXNwbGF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC15ZXMtbm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2x1bW4uY29uZmlnICYmIChjb2x1bW4uY29uZmlnLmRpc3BsYXlObyAhPT0gdW5kZWZpbmVkICYmIGNvbHVtbi5jb25maWcuZGlzcGxheVllcyAhPT0gdW5kZWZpbmVkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIiBbc2l6ZV09XCJjb2x1bW4uY29uZmlnPy5zaXplSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlOb109XCJjb2x1bW4uY29uZmlnLmRpc3BsYXlZZXNcIiBbZGlzcGxheVllc109XCJjb2x1bW4uY29uZmlnLmRpc3BsYXlOb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAteWVzLW5veD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAteWVzLW5veFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKCFjb2x1bW4uY29uZmlnIHx8IChjb2x1bW4uY29uZmlnICYmICEoY29sdW1uLmNvbmZpZy5kaXNwbGF5Tm8gfHwgY29sdW1uLmNvbmZpZy5kaXNwbGF5WWVzKSkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtzaXplXT1cImNvbHVtbi5jb25maWc/LnNpemVJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC15ZXMtbm94PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIG9yaWdpbi0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInb3JpZ2luJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGljb24tb3JpZ2luIFtpY29uXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2ljb24tb3JpZ2luPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIG5hbWUgYXZhdGFyLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIiduYW1lLWF2YXRhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYW1lLWF2YXRhciBtYXRUb29sdGlwPVwie3tKb2luKGVsZW1lbnQsIGNvbHVtbi5vdmVycmlkZSl9fVwiIFtzcmNdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZvbnRTaXplXT1cImNvbHVtbi5mb250U2l6ZVwiIFttYXRUb29sdGlwQ2xhc3NdPVwiJ215LXRvb2x0aXAnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hbWUtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkYXRlIGZvcm1hdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUtZm9ybWF0J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtZW50W2NvbHVtbi5rZXldIHwgYXBwRGF0ZSA6IGxhbmd9fVxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjb3VudCByb3dzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY291bnQtcm93J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDE0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyhlbGVtZW50W2NvbHVtbi5rZXldICYmIGVsZW1lbnRbY29sdW1uLmtleV0ubGVuZ3RoID8gZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggOiAnLScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZG91YmxlIGxpbmUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkb3VibGUtbGluZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkb3VibGUtbGluZSBbbGluZTFdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiIFtsaW5lMl09XCJlbGVtZW50W2NvbHVtbi5vdmVycmlkZV1cIj48L2RvdWJsZS1saW5lPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC90YWJsZT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHMgPT09IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiaGVpZ2h0OiA4NHB4O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHNlYXJjaC1jb250YWluZXJcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBub1Jlc3VsdCB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxtYXQtcGFnaW5hdG9yICNNYXRQYWdpbmF0b3JDdXJyZW50ICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnRvdGFsRWxlbWVudHMgPiAwXCIgW2xlbmd0aF09XCJkYXRhLnRvdGFsRWxlbWVudHNcIlxuICAgICAgICBbcGFnZVNpemVdPVwiZGF0YS5zaXplXCIgW3BhZ2VJbmRleF09XCJkYXRhLm51bWJlclwiIFtoaWRlUGFnZVNpemVdPVwidHJ1ZVwiIChwYWdlKT1cImRhdGEuZmV0Y2goJGV2ZW50LnBhZ2VJbmRleClcIlxuICAgICAgICBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj4iXX0=