import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Inject, Component, Input, ViewChild, NgModule, Output, ViewEncapsulation, Optional, SkipSelf } from '@angular/core';
import * as i2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i1 from '@angular/forms';
import { BehaviorSubject, from } from 'rxjs';
import { switchMap, debounceTime, share, pluck } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1$2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i5 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i6 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import * as i1$1 from 'nowboard-icon';
import { NowboardIconService, NowboardIconModule } from 'nowboard-icon';
import * as i2$1 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i24 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';

class TableService {
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

function CustomerRankComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "star_rate");
    i0.ɵɵelementEnd();
} }
class CustomerRankComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    this.type = 'Classic'.toUpperCase();
                    this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                }
            }
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
CustomerRankComponent.ɵfac = function CustomerRankComponent_Factory(t) { return new (t || CustomerRankComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(TableService)); };
CustomerRankComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomerRankComponent, selectors: [["app-customer-rank"]], inputs: { type: "type" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [[3, "matTooltip"], [4, "ngIf"]], template: function CustomerRankComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0)(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CustomerRankComponent_mat_icon_3_Template, 2, 0, "mat-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.typeClass);
        i0.ɵɵpropertyInterpolate1("matTooltip", "Contrat de type : ", ctx.type, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type !== "CLASSIC");
    } }, directives: [i2.MatTooltip, i4.NgIf, i4$1.MatIcon], styles: [".gold[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:gold}.silver[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:silver}.bronze[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#cd7f32}.default[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#000}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerRankComponent, [{
        type: Component,
        args: [{ selector: 'app-customer-rank', template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span>{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n", styles: [".gold{font-size:12px;font-weight:700;color:gold}.silver{font-size:12px;font-weight:700;color:silver}.bronze{font-weight:700;font-size:12px;color:#cd7f32}.default{font-weight:700;font-size:12px;color:#000}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: TableService }]; }, { type: [{
            type: Input
        }] }); })();

class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.replace(',', '').split(' ');
            return `<span class="">
                    <span class="hour">${t[0]}</span>
                    <!--<span class="minute">${t[1]}</span>-->
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour">-</span>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
}
DateFormatComponent.ɵfac = function DateFormatComponent_Factory(t) { return new (t || DateFormatComponent)(); };
DateFormatComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateFormatComponent, selectors: [["date-format"]], inputs: { date: "date", timezone: "timezone" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "matTooltip", "innerHTML"]], template: function DateFormatComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
        i0.ɵɵpipe(1, "date");
        i0.ɵɵpipe(2, "date");
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", i0.ɵɵpipeBind3(1, 2, ctx.date, "short", ctx.timezone));
        i0.ɵɵproperty("innerHTML", ctx.run(i0.ɵɵpipeBind3(2, 6, ctx.date, "short", ctx.timezone)), i0.ɵɵsanitizeHtml);
    } }, directives: [i2.MatTooltip], pipes: [i4.DatePipe], styles: ["span.time-badge[_ngcontent-%COMP%]{display:block;text-align:center!important;padding-right:25px}span.time-badge[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{display:block;font-weight:900;font-size:12px}span.time-badge[_ngcontent-%COMP%]   .minute[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFormatComponent, [{
        type: Component,
        args: [{ selector: 'date-format', template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
    }], function () { return []; }, { date: [{
            type: Input
        }], timezone: [{
            type: Input
        }] }); })();

class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'SEARCH': `Recherche...`,
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails',
                'FUNCTIONAL': 'Fonctionnel',
                'KO': 'HS'
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details',
                'FUNCTIONAL': 'Functional',
                'KO': 'HS'
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(); };
TranslateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service, translate) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.translate = translate;
        this.css = {};
        this.status = '';
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        switch (clean) {
            case 'actif':
                this.status = this.translate.translate(this.lang, 'FUNCTIONAL');
                break;
            default:
                this.status = this.translate.translate(this.lang, 'KO');
                break;
        }
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementStatusComponent.ɵfac = function EquipementStatusComponent_Factory(t) { return new (t || EquipementStatusComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(TableService), i0.ɵɵdirectiveInject(TranslateService)); };
EquipementStatusComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EquipementStatusComponent, selectors: [["app-equipement-status"]], inputs: { type: "type", size: "size", lang: "lang" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 7, consts: [[3, "matTooltip"], [1, "equipement-status", 3, "src"]], template: function EquipementStatusComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.status, "\n");
    } }, directives: [i2.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EquipementStatusComponent, [{
        type: Component,
        args: [{ selector: 'app-equipement-status', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n    {{ status }}\n</span>", styles: [""] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: TableService }, { type: TranslateService }]; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }], lang: [{
            type: Input
        }] }); })();

class EquipementTypeComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.equipmentType; /*{
                "firewall": "/assets/icons/equipment/firewallnwt.png",
                "nas": "/assets/icons/equipment/nasnwt.png",
                "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
                "pcportable": "/assets/icons/equipment/pcportable_1.png",
                "portable": "/assets/icons/equipment/pcportable_1.png",
                "clientleger": "/assets/icons/equipment/pcportable_1.png",
                "clientléger": "/assets/icons/equipment/pcportable_1.png",
                "onduleur": "/assets/icons/equipment/ondulateur.png",
                "serveur": "/assets/icons/equipment/serveur.png",
                "server": "/assets/icons/equipment/serveur.png",
                "servervirtuel": "/assets/icons/equipment/vps.png",
                "serveurvirtuel": "/assets/icons/equipment/vps.png",
                "vm": "/assets/icons/equipment/vps.png",
                "wifi": "/assets/icons/equipment/wifi.png",
                "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
                "workstationportable": "/assets/icons/equipment/pcportable_1.png",
                "imprimante": "/assets/icons/equipment/printer.png",
            }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementTypeComponent.ɵfac = function EquipementTypeComponent_Factory(t) { return new (t || EquipementTypeComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(TableService)); };
EquipementTypeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EquipementTypeComponent, selectors: [["app-equipement-type"]], inputs: { name: "name", type: "type", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementTypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
    } }, directives: [i2.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EquipementTypeComponent, [{
        type: Component,
        args: [{ selector: 'app-equipement-type', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: TableService }]; }, { name: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

class GenderComponent {
    constructor(service) {
        this.service = service;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.gender; /*{
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = params.none; //"/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
GenderComponent.ɵfac = function GenderComponent_Factory(t) { return new (t || GenderComponent)(i0.ɵɵdirectiveInject(TableService)); };
GenderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GenderComponent, selectors: [["app-gender"]], inputs: { type: "type", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function GenderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
    } }, directives: [i2.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GenderComponent, [{
        type: Component,
        args: [{ selector: 'app-gender', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
    }], function () { return [{ type: TableService }]; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

function IsMatIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.display);
} }
function IsMatIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.display);
} }
class IsMatIconComponent {
    constructor() {
        this.isIcon = false;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    ngOnInit() {
        if (this.input && this.input.indexOf(('icon.')) > -1) {
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        }
        else {
            this.isIcon = false;
            this.display = this.input;
        }
    }
}
IsMatIconComponent.ɵfac = function IsMatIconComponent_Factory(t) { return new (t || IsMatIconComponent)(); };
IsMatIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IsMatIconComponent, selectors: [["app-is-mat-icon"]], inputs: { input: "input" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function IsMatIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, IsMatIconComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, IsMatIconComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isIcon);
    } }, directives: [i4.NgIf, i4$1.MatIcon], styles: ["[_nghost-%COMP%]{height:34px;display:flex;padding:auto}[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%]{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}[_nghost-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;height:24px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsMatIconComponent, [{
        type: Component,
        args: [{ selector: 'app-is-mat-icon', template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>", styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}\n"] }]
    }], function () { return []; }, { input: [{
            type: Input
        }] }); })();

const _c0$3 = ["avatar"];
const _c1$1 = function (a0, a1, a3) { return { "width": a0, "height": a1, "vertical-align": "middle", "border-radius": a3 }; };
function NameAvatarComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.src, i0.ɵɵsanitizeUrl)("ngStyle", i0.ɵɵpureFunction3(2, _c1$1, ctx_r1.fontSize || "44px", ctx_r1.fontSize || "44px", ctx_r1._borderRadius));
} }
const _c2$1 = function () { return { "display": "none" }; };
class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this.textSize = '14px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src && !this.src.includes('assets')) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize || '44px';
            this.icon.nativeElement.style.height = this.fontSize || '44px';
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'nexa'";
            this.icon.nativeElement.style.color = '#171F26';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.src && this.src.includes('assets')) {
            //this.icon.nativeElement.style.backgroundImage = this.src;
            /*this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';*/
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
}
NameAvatarComponent.ɵfac = function NameAvatarComponent_Factory(t) { return new (t || NameAvatarComponent)(i0.ɵɵdirectiveInject(TableService)); };
NameAvatarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NameAvatarComponent, selectors: [["name-avatar"]], viewQuery: function NameAvatarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$3, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.icon = _t.first);
    } }, inputs: { src: "src", fontSize: "fontSize", textSize: "textSize" }, decls: 4, vars: 4, consts: [[3, "ngStyle"], ["avatar", ""], [3, "src", "ngStyle", 4, "ngIf"], [3, "src", "ngStyle"]], template: function NameAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, NameAvatarComponent_img_3_Template, 1, 6, "img", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.src && ctx.src.includes("assets") && i0.ɵɵpureFunction0(3, _c2$1));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.letter, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.src && ctx.src.includes("assets"));
    } }, directives: [i4.NgStyle, i4.NgIf], styles: ["div[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:0!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NameAvatarComponent, [{
        type: Component,
        args: [{ selector: 'name-avatar', template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />", styles: ["div{align-items:center;justify-content:center;padding:0!important}\n"] }]
    }], function () { return [{ type: TableService }]; }, { src: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], textSize: [{
            type: Input
        }], icon: [{
            type: ViewChild,
            args: ['avatar', { static: true }]
        }] }); })();

const _c0$2 = ["icon"];
class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px 13px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    }
}
PngIconComponent.ɵfac = function PngIconComponent_Factory(t) { return new (t || PngIconComponent)(); };
PngIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PngIconComponent, selectors: [["png-icon"]], viewQuery: function PngIconComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$2, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.icon = _t.first);
    } }, inputs: { src: "src", fontSize: "fontSize", color: "color" }, decls: 2, vars: 0, consts: [["icon", ""]], template: function PngIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", null, 0);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PngIconComponent, [{
        type: Component,
        args: [{ selector: 'png-icon', template: "<span #icon></span>\n", styles: [""] }]
    }], function () { return []; }, { src: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], color: [{
            type: Input
        }], icon: [{
            type: ViewChild,
            args: ['icon', { static: true }]
        }] }); })();

class OriginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const list = this.service.settingConfig.origin; /*[{
            "label": "Web",
            "data": "assets/icons/nowteam/Web.png"
        }, {
            "label": "PRTG",
            "data": "assets/icons/nowteam/PRTG.png"
        }, {
            "label": "Mail",
            "data": "assets/icons/nowteam/Mail.png"
        }, {
            "label": "Téléphone",
            "data": "assets/icons/nowteam/Telephone.png"
        }, {
            "label": "Bot",
            "data": "assets/icons/nowteam/Bot.png"
        }];*/
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
OriginComponent.ɵfac = function OriginComponent_Factory(t) { return new (t || OriginComponent)(i0.ɵɵdirectiveInject(TableService)); };
OriginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OriginComponent, selectors: [["icon-origin"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[2, "margin", "auto", "text-align", "center", 3, "matTooltip", "src"]], template: function OriginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "png-icon", 0);
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
        i0.ɵɵproperty("src", ctx.iconSrc);
    } }, directives: [PngIconComponent, i2.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OriginComponent, [{
        type: Component,
        args: [{ selector: 'icon-origin', template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>", styles: [""] }]
    }], function () { return [{ type: TableService }]; }, { icon: [{
            type: Input
        }] }); })();

const db = {
    ad: 'ad',
    and: 'ad',
    andorra: 'ad',
    ae: 'ae',
    are: 'ae',
    'united-arab-emirates-(the)': 'ae',
    af: 'af',
    afg: 'af',
    afghanistan: 'af',
    ag: 'ag',
    atg: 'ag',
    'antigua-and-barbuda': 'ag',
    al: 'al',
    alb: 'al',
    albania: 'al',
    am: 'am',
    arm: 'am',
    armenia: 'am',
    ao: 'ao',
    ago: 'ao',
    angola: 'ao',
    ar: 'ar',
    arg: 'ar',
    argentina: 'ar',
    at: 'at',
    aut: 'at',
    austria: 'at',
    au: 'au',
    aus: 'au',
    australia: 'au',
    az: 'az',
    aze: 'az',
    azerbaijan: 'az',
    ba: 'ba',
    bih: 'ba',
    'bosnia-and-herzegovina': 'ba',
    bb: 'bb',
    brb: 'bb',
    barbados: 'bb',
    bd: 'bd',
    bgd: 'bd',
    bangladesh: 'bd',
    be: 'be',
    bel: 'be',
    belgium: 'be',
    bf: 'bf',
    bfa: 'bf',
    'burkina-faso': 'bf',
    bg: 'bg',
    bgr: 'bg',
    bulgaria: 'bg',
    bh: 'bh',
    bhr: 'bh',
    bahrain: 'bh',
    bi: 'bi',
    bdi: 'bi',
    burundi: 'bi',
    bj: 'bj',
    ben: 'bj',
    benin: 'bj',
    bn: 'bn',
    brn: 'bn',
    'brunei-darussalam': 'bn',
    bo: 'bo',
    bol: 'bo',
    bolivia: 'bo',
    br: 'br',
    bra: 'br',
    brazil: 'br',
    bs: 'bs',
    bhs: 'bs',
    bahamas: 'bs',
    bt: 'bt',
    btn: 'bt',
    bhutan: 'bt',
    bw: 'bw',
    bwa: 'bw',
    botswana: 'bw',
    by: 'by',
    blr: 'by',
    belarus: 'by',
    bz: 'bz',
    blz: 'bz',
    belize: 'bz',
    ca: 'ca',
    can: 'ca',
    canada: 'ca',
    cd: 'cd',
    cod: 'cd',
    'the-democratic-republic-of-the-congo': 'cd',
    cf: 'cf',
    caf: 'cf',
    'central-african-republic': 'cf',
    cg: 'cg',
    cog: 'cg',
    congo: 'cg',
    ch: 'ch',
    che: 'ch',
    switzerland: 'ch',
    ci: 'ci',
    civ: 'ci',
    'cote-d-ivoire': 'ci',
    cl: 'cl',
    chl: 'cl',
    chile: 'cl',
    cm: 'cm',
    cmr: 'cm',
    cameroon: 'cm',
    cn: 'cn',
    chn: 'cn',
    china: 'cn',
    co: 'co',
    col: 'co',
    colombia: 'co',
    cr: 'cr',
    cri: 'cr',
    'costa-rica': 'cr',
    cu: 'cu',
    cub: 'cu',
    cuba: 'cu',
    cv: 'cv',
    cpv: 'cv',
    'cabo-verde [f]': 'cv',
    cy: 'cy',
    cyp: 'cy',
    cyprus: 'cy',
    cz: 'cz',
    cze: 'cz',
    czechia: 'cz',
    de: 'de',
    deu: 'de',
    germany: 'de',
    dj: 'dj',
    dji: 'dj',
    djibouti: 'dj',
    dk: 'dk',
    dnk: 'dk',
    denmark: 'dk',
    dm: 'dm',
    dma: 'dm',
    dominica: 'dm',
    do: 'do',
    dom: 'do',
    'dominican-republic': 'do',
    dz: 'dz',
    dza: 'dz',
    algeria: 'dz',
    ec: 'ec',
    'ec-w': 'ec-w',
    ecu: 'ec',
    ecuador: 'ec',
    ee: 'ee',
    est: 'ee',
    estonia: 'ee',
    eg: 'eg',
    egy: 'eg',
    egypt: 'eg',
    er: 'er',
    eri: 'er',
    eritrea: 'er',
    es: 'es',
    esp: 'es',
    spain: 'es',
    et: 'et',
    eth: 'et',
    ethiopia: 'et',
    fi: 'fi',
    fin: 'fi',
    finland: 'fi',
    fj: 'fj',
    fji: 'fj',
    fiji: 'fj',
    fm: 'fm',
    fsm: 'fm',
    micronesia: 'fm',
    fr: 'fr',
    fra: 'fr',
    france: 'fr',
    ga: 'ga',
    gab: 'ga',
    gabon: 'ga',
    gb: 'gb',
    gbr: 'gb',
    'united-kingdom': 'gb',
    uk: 'gb',
    'great-britain': 'gb',
    gd: 'gd',
    grd: 'gd',
    grenada: 'gd',
    ge: 'ge',
    geo: 'ge',
    georgia: 'ge',
    gh: 'gh',
    gha: 'gh',
    ghana: 'gh',
    gm: 'gm',
    gmb: 'gm',
    gambia: 'gm',
    gn: 'gn',
    gin: 'gn',
    guinea: 'gn',
    gq: 'gq',
    gnq: 'gq',
    'equatorial-guinea': 'gq',
    gr: 'gr',
    grc: 'gr',
    greece: 'gr',
    gt: 'gt',
    gtm: 'gt',
    guatemala: 'gt',
    gw: 'gw',
    gnb: 'gw',
    'guinea-bissau': 'gw',
    gy: 'gy',
    guy: 'gy',
    guyana: 'gy',
    hn: 'hn',
    hnd: 'hn',
    honduras: 'hn',
    hr: 'hr',
    hrv: 'hr',
    croatia: 'hr',
    ht: 'ht',
    hti: 'ht',
    haiti: 'ht',
    hu: 'hu',
    hun: 'hu',
    hungary: 'hu',
    id: 'id',
    idn: 'id',
    indonesia: 'id',
    ie: 'ie',
    irl: 'ie',
    ireland: 'ie',
    il: 'il',
    isr: 'il',
    israel: 'il',
    in: 'in',
    ind: 'in',
    india: 'in',
    iq: 'iq',
    irq: 'iq',
    iraq: 'iq',
    ir: 'ir',
    irn: 'ir',
    iran: 'ir',
    is: 'is',
    isl: 'is',
    iceland: 'is',
    it: 'it',
    ita: 'it',
    italy: 'it',
    jm: 'jm',
    jam: 'jm',
    jamaica: 'jm',
    jo: 'jo',
    jor: 'jo',
    jordan: 'jo',
    jp: 'jp',
    jpn: 'jp',
    japan: 'jp',
    ke: 'ke',
    ken: 'ke',
    kenya: 'ke',
    kg: 'kg',
    kgz: 'kg',
    kyrgyzstan: 'kg',
    kh: 'kh',
    khm: 'kh',
    cambodia: 'kh',
    ki: 'ki',
    kir: 'ki',
    kiribati: 'ki',
    km: 'km',
    com: 'km',
    comoros: 'km',
    kn: 'kn',
    kna: 'kn',
    'saint-kitts-and-nevis': 'kn',
    kp: 'kp',
    prk: 'kp',
    'north-korea': 'kp',
    kr: 'kr',
    kor: 'kr',
    'south-korea': 'kr',
    kw: 'kw',
    kwt: 'kw',
    kuwait: 'kw',
    kz: 'kz',
    kaz: 'kz',
    kazakhstan: 'kz',
    la: 'la',
    lao: 'la',
    laos: 'la',
    lb: 'lb',
    lbn: 'lb',
    lebanon: 'lb',
    lc: 'lc',
    lca: 'lc',
    'saint-lucia': 'lc',
    li: 'li',
    lie: 'li',
    liechtenstein: 'li',
    lk: 'lk',
    lka: 'lk',
    'sri-lanka': 'lk',
    lr: 'lr',
    lbr: 'lr',
    liberia: 'lr',
    ls: 'ls',
    lso: 'ls',
    lesotho: 'ls',
    lt: 'lt',
    ltu: 'lt',
    lithuania: 'lt',
    lu: 'lu',
    lux: 'lu',
    luxembourg: 'lu',
    lv: 'lv',
    lva: 'lv',
    latvia: 'lv',
    ly: 'ly',
    lby: 'ly',
    libya: 'ly',
    ma: 'ma',
    mar: 'ma',
    morocco: 'ma',
    mc: 'mc',
    mco: 'mc',
    monaco: 'mc',
    md: 'md',
    mda: 'md',
    moldova: 'md',
    me: 'me',
    mne: 'me',
    montenegro: 'me',
    mg: 'mg',
    mdg: 'mg',
    madagascar: 'mg',
    mh: 'mh',
    mhl: 'mh',
    'marshall-islands': 'mh',
    mk: 'mk',
    mkd: 'mk',
    'north-macedonia': 'mk',
    ml: 'ml',
    mli: 'ml',
    mali: 'ml',
    mm: 'mm',
    mmr: 'mm',
    myanmar: 'mm',
    mn: 'mn',
    mng: 'mn',
    mongolia: 'mn',
    mr: 'mr',
    mrt: 'mr',
    mauritania: 'mr',
    mt: 'mt',
    mlt: 'mt',
    malta: 'mt',
    mu: 'mu',
    mus: 'mu',
    mauritius: 'mu',
    mv: 'mv',
    mdv: 'mv',
    maldives: 'mv',
    mw: 'mw',
    mwi: 'mw',
    malawi: 'mw',
    mx: 'mx',
    mex: 'mx',
    mexico: 'mx',
    my: 'my',
    mys: 'my',
    malaysia: 'my',
    mz: 'mz',
    moz: 'mz',
    mozambique: 'mz',
    na: 'na',
    nam: 'na',
    namibia: 'na',
    ne: 'ne',
    ner: 'ne',
    niger: 'ne',
    ng: 'ng',
    nga: 'ng',
    nigeria: 'ng',
    ni: 'ni',
    nic: 'ni',
    nicaragua: 'ni',
    nl: 'nl',
    nld: 'nl',
    netherlands: 'nl',
    no: 'no',
    nor: 'no',
    norway: 'no',
    np: 'np',
    npl: 'np',
    nepal: 'np',
    nr: 'nr',
    nru: 'nr',
    nauru: 'nr',
    nz: 'nz',
    nzl: 'nz',
    'new-zealand': 'nz',
    om: 'om',
    omn: 'om',
    oman: 'om',
    pa: 'pa',
    pan: 'pa',
    panama: 'pa',
    pe: 'pe',
    per: 'pe',
    peru: 'pe',
    pg: 'pg',
    png: 'pg',
    'papua-new-guinea': 'pg',
    ph: 'ph',
    phl: 'ph',
    philippines: 'ph',
    pk: 'pk',
    pak: 'pk',
    pakistan: 'pk',
    pl: 'pl',
    pol: 'pl',
    poland: 'pl',
    pt: 'pt',
    prt: 'pt',
    portugal: 'pt',
    pw: 'pw',
    plw: 'pw',
    palau: 'pw',
    py: 'py',
    pry: 'py',
    paraguay: 'py',
    qa: 'qa',
    qat: 'qa',
    qatar: 'qa',
    ro: 'ro',
    rou: 'ro',
    romania: 'ro',
    rs: 'rs',
    srb: 'rs',
    serbia: 'rs',
    ru: 'ru',
    rus: 'ru',
    russia: 'ru',
    rw: 'rw',
    rwa: 'rw',
    rwanda: 'rw',
    sa: 'sa',
    sau: 'sa',
    'saudi-arabia': 'sa',
    sb: 'sb',
    slb: 'sb',
    'solomon-islands': 'sb',
    sc: 'sc',
    syc: 'sc',
    seychelles: 'sc',
    sd: 'sd',
    sdn: 'sd',
    sudan: 'sd',
    se: 'se',
    swe: 'se',
    sweden: 'se',
    sg: 'sg',
    sgp: 'sg',
    singapore: 'sg',
    si: 'si',
    svn: 'si',
    slovenia: 'si',
    sk: 'sk',
    svk: 'sk',
    slovakia: 'sk',
    sl: 'sl',
    sle: 'sl',
    'sierra-leone': 'sl',
    sm: 'sm',
    smr: 'sm',
    'san-marino': 'sm',
    sn: 'sn',
    sen: 'sn',
    senegal: 'sn',
    so: 'so',
    som: 'so',
    somalia: 'so',
    sr: 'sr',
    sur: 'sr',
    suriname: 'sr',
    ss: 'ss',
    ssd: 'ss',
    'south-sudan': 'ss',
    st: 'st',
    stp: 'st',
    'sao-tome-and-principe': 'st',
    sv: 'sv',
    slv: 'sv',
    'el-salvador': 'sv',
    sy: 'sy',
    syr: 'sy',
    syria: 'sy',
    sz: 'sz',
    swz: 'sz',
    eswatini: 'sz',
    td: 'td',
    tcd: 'td',
    chad: 'td',
    tg: 'tg',
    tgo: 'tg',
    togo: 'tg',
    th: 'th',
    tha: 'th',
    thailand: 'th',
    tj: 'tj',
    tjk: 'tj',
    tajikistan: 'tj',
    tl: 'tl',
    tls: 'tl',
    'timor-leste': 'tl',
    tm: 'tm',
    tkm: 'tm',
    turkmenistan: 'tm',
    tn: 'tn',
    tun: 'tn',
    tunisia: 'tn',
    to: 'to',
    ton: 'to',
    tonga: 'to',
    tr: 'tr',
    tur: 'tr',
    turkey: 'tr',
    tt: 'tt',
    tto: 'tt',
    'trinidad-and-tobago': 'tt',
    tv: 'tv',
    tuv: 'tv',
    tuvalu: 'tv',
    tz: 'tz',
    tza: 'tz',
    tanzania: 'tz',
    ua: 'ua',
    ukr: 'ua',
    ukraine: 'ua',
    ug: 'ug',
    uga: 'ug',
    uganda: 'ug',
    us: 'us',
    usa: 'us',
    'united-states-of-america': 'us',
    uy: 'uy',
    ury: 'uy',
    uruguay: 'uy',
    uz: 'uz',
    uzb: 'uz',
    uzbekistan: 'uz',
    vc: 'vc',
    vct: 'vc',
    'saint-vincent-and-the-grenadines': 'vc',
    ve: 've',
    ven: 've',
    venezuela: 've',
    vn: 'vn',
    vnm: 'vn',
    'viet-nam': 'vn',
    vu: 'vu',
    vut: 'vu',
    vanuatu: 'vu',
    ws: 'ws',
    wsm: 'ws',
    samoa: 'ws',
    ye: 'ye',
    yem: 'ye',
    yemen: 'ye',
    za: 'za',
    zaf: 'za',
    'south-africa': 'za',
    zm: 'zm',
    zmb: 'zm',
    zambia: 'zm',
    zw: 'zw',
    zwe: 'zw',
    zimbabwe: 'zw',
    cc: 'cc',
    cck: 'cc',
    'cocos-islands': 'cc',
    'au-cc': 'cc',
    cx: 'cx',
    cxr: 'cx',
    'christmas-island': 'cx',
    'au-cx': 'cx',
    hm: 'hm',
    hmd: 'hm',
    'heard-island-and-mcdonald-islands': 'hm',
    'au-hm': 'hm',
    nf: 'nf',
    nfk: 'nf',
    'norfolk-island': 'nf',
    'au-nf': 'nf',
    hk: 'hk',
    hkg: 'hk',
    'hong-kong': 'hk',
    'cn-hk': 'hk',
    mo: 'mo',
    mac: 'mo',
    macao: 'mo',
    'cn-mo': 'mo',
    tw: 'tw',
    twn: 'tw',
    taiwan: 'tw',
    'cn-tw': 'tw',
    fo: 'fo',
    fro: 'fo',
    'faroe-islands': 'fo',
    'dk-fo': 'fo',
    gl: 'gl',
    grl: 'gl',
    greenland: 'gl',
    'dk-gl': 'gl',
    ax: 'ax',
    ala: 'ax',
    'aland-islands': 'ax',
    'fi-ax': 'ax',
    bl: 'bl',
    blm: 'bl',
    'saint-barthelemy': 'bl',
    'fr-bl': 'bl',
    gf: 'gf',
    guf: 'gf',
    'french-guiana': 'gf',
    'fr-gf': 'gf',
    gp: 'gp',
    glp: 'gp',
    guadeloupe: 'gp',
    'fr-gp': 'gp',
    mf: 'mf',
    maf: 'mf',
    'saint-martin': 'mf',
    'fr-mf': 'mf',
    mq: 'mq',
    mtq: 'mq',
    martinique: 'mq',
    'fr-mq': 'mq',
    nc: 'nc',
    ncl: 'nc',
    'new-caledonia': 'nc',
    'fr-nc': 'nc',
    pf: 'pf',
    pyf: 'pf',
    'french-polynesia': 'pf',
    'fr-pf': 'pf',
    pm: 'pm',
    spm: 'pm',
    'saint-pierre-and-miquelon': 'pm',
    'fr-pm': 'pm',
    re: 're',
    reu: 're',
    reunion: 're',
    'fr-re': 're',
    tf: 'tf',
    atf: 'tf',
    'french-southern-territories': 'tf',
    'fr-tf': 'tf',
    wf: 'wf',
    wlf: 'wf',
    'wallis-and-futuna': 'wf',
    'fr-wf': 'wf',
    yt: 'yt',
    myt: 'yt',
    mayotte: 'yt',
    'fr-yt': 'yt',
    gg: 'gg',
    ggy: 'gg',
    guernsey: 'gg',
    'gb-gg': 'gg',
    im: 'im',
    imn: 'im',
    'isle-of-man': 'im',
    'gb-im': 'im',
    je: 'je',
    jey: 'je',
    jersey: 'je',
    'gb-je': 'je',
    aw: 'aw',
    abw: 'aw',
    aruba: 'aw',
    'nl-aw': 'aw',
    bq: 'bq',
    bes: 'bq',
    bonaire: 'bq',
    'nl-bq': 'bq',
    cw: 'cw',
    cuw: 'cw',
    curaçao: 'cw',
    'nl-cw': 'cw',
    sx: 'sx',
    sxm: 'sx',
    'sint-maarten': 'sx',
    'nl-sx': 'sx',
    bv: 'bv',
    bvt: 'bv',
    'bouvet-island': 'bv',
    'no-bv': 'bv',
    sj: 'sj',
    sjm: 'sj',
    svalbard: 'sj',
    'no-sj': 'sj',
    ck: 'ck',
    cok: 'ck',
    'cook-islands': 'ck',
    'nz-ck': 'ck',
    nu: 'nu',
    niu: 'nu',
    niue: 'nu',
    'nz-nu': 'nu',
    tk: 'tk',
    tkl: 'tk',
    tokelau: 'tk',
    'nz-tk': 'tk',
    ai: 'ai',
    aia: 'ai',
    anguilla: 'ai',
    'uk-ai': 'ai',
    bm: 'bm',
    bmu: 'bm',
    bermuda: 'bm',
    'uk-bm': 'bm',
    fk: 'fk',
    flk: 'fk',
    'falkland-islands': 'fk',
    'uk-fk': 'fk',
    gi: 'gi',
    gib: 'gi',
    gibraltar: 'gi',
    'uk-gi': 'gi',
    gs: 'gs',
    sgs: 'gs',
    'south-georgia-and-the-south-sandwich-islands': 'gs',
    'uk-gs': 'gs',
    io: 'io',
    iot: 'io',
    'british-indian-ocean-territory': 'io',
    'uk-io': 'io',
    ky: 'ky',
    cym: 'ky',
    'cayman-islands': 'ky',
    'uk-ky': 'ky',
    ms: 'ms',
    msr: 'ms',
    montserrat: 'ms',
    'uk-ms': 'ms',
    pn: 'pn',
    pcn: 'pn',
    pitcairn: 'pn',
    'uk-pn': 'pn',
    sh: 'sh',
    shn: 'sh',
    'saint-helena': 'sh',
    'uk-sh': 'sh',
    tc: 'tc',
    tca: 'tc',
    'turks-and-caicos-islands': 'tc',
    'uk-tc': 'tc',
    vg: 'vg',
    vgb: 'vg',
    'british-virgin-islands': 'vg',
    'uk-vg': 'vg',
    as: 'as',
    asm: 'as',
    'american-samoa': 'as',
    'us-as': 'as',
    gu: 'gu',
    gum: 'gu',
    guam: 'gu',
    'us-gu': 'gu',
    mp: 'mp',
    mnp: 'mp',
    'northern-mariana-islands': 'mp',
    'us-mp': 'mp',
    pr: 'pr',
    pri: 'pr',
    'puerto-rico': 'pr',
    'us-pr': 'pr',
    um: 'um',
    umi: 'um',
    'united-states-minor-outlying-islands': 'um',
    'us-um': 'um',
    vi: 'vi',
    vir: 'vi',
    'us-virgin-islands': 'vi',
    'us-vi': 'vi',
    aq: 'aq',
    ata: 'aq',
    antarctica: 'aq',
    eh: 'eh',
    esh: 'eh',
    'western-sahara': 'eh',
    ps: 'ps',
    pse: 'ps',
    palestine: 'ps',
    va: 'va',
    vat: 'va',
    'holy-see': 'va',
    'vatican-city': 'va',
};

const _c0$1 = function (a1) { return ["ngx-flag", a1]; };
function NgxFlagsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r0.style);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0$1, ctx_r0.class));
} }
class NgxFlagsComponent {
    constructor() {
        this.size = 48;
        this.class = '';
        this.database = db;
        this.countryCode = '';
    }
    ngOnChanges(changes) {
        this.setImage();
    }
    setImage() {
        this.imageUrl = `assets/flags/${this.getFlag(this.getCode())}.svg`;
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: `10px`,
            height: '10px',
            marginRight: '5px',
            backgroundImage: `url("${this.imageUrl}")`,
        };
    }
    getSize() {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    }
    getFormat() {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    }
    getCode() {
        return this.country.toLowerCase();
    }
    getFlag(code) {
        return this.database[code.toLowerCase()];
    }
}
NgxFlagsComponent.ɵfac = function NgxFlagsComponent_Factory(t) { return new (t || NgxFlagsComponent)(); };
NgxFlagsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxFlagsComponent, selectors: [["flag"]], inputs: { country: "country", format: "format", size: "size", class: "class" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "style", "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function NgxFlagsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxFlagsComponent_div_0_Template, 1, 5, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.country);
    } }, directives: [i4.NgIf, i4.NgClass], styles: [".ngx-flag[_ngcontent-%COMP%]{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFlagsComponent, [{
        type: Component,
        args: [{
                selector: 'flag',
                template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`,
                styles: [
                    `
      .ngx-flag {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `,
                ],
            }]
    }], function () { return []; }, { country: [{
            type: Input
        }], format: [{
            type: Input
        }], size: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
var FORMAT;
(function (FORMAT) {
    FORMAT["NONE"] = "none";
    FORMAT["ROUND"] = "round";
    FORMAT["SQUARE"] = "square";
})(FORMAT || (FORMAT = {}));
var SIZE;
(function (SIZE) {
    SIZE[SIZE["XXS"] = 8] = "XXS";
    SIZE[SIZE["XS"] = 16] = "XS";
    SIZE[SIZE["S"] = 24] = "S";
    SIZE[SIZE["M"] = 32] = "M";
    SIZE[SIZE["L"] = 48] = "L";
    SIZE[SIZE["XL"] = 64] = "XL";
    SIZE[SIZE["XXL"] = 96] = "XXL";
})(SIZE || (SIZE = {}));

class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
        this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        this.flag = !this.number ? '' : this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            const phone = parsePhoneNumber(str, 'FR');
            if (phone.isValid()) {
                return phone.formatNational();
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            let tmp = str.slice(2, 3);
            let end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    }
}
PhoneDisplayComponent.ɵfac = function PhoneDisplayComponent_Factory(t) { return new (t || PhoneDisplayComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
PhoneDisplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PhoneDisplayComponent, selectors: [["app-phone-display"]], inputs: { number: "number" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[3, "country"]], template: function PhoneDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "flag", 0);
        i0.ɵɵelementStart(1, "strong");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("country", ctx.flag);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.display || "-");
    } }, directives: [NgxFlagsComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PhoneDisplayComponent, [{
        type: Component,
        args: [{ selector: 'app-phone-display', template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { number: [{
            type: Input
        }] }); })();

class PngIconModule {
}
PngIconModule.ɵfac = function PngIconModule_Factory(t) { return new (t || PngIconModule)(); };
PngIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PngIconModule });
PngIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PngIconModule, [{
        type: NgModule,
        args: [{
                declarations: [PngIconComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    PngIconComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PngIconModule, { declarations: [PngIconComponent], imports: [CommonModule], exports: [PngIconComponent] }); })();

class PriorityComponent {
    constructor(service) {
        this.service = service;
        this.label = '';
    }
    ngOnInit() {
        const list = this.service.settingConfig.priority; /*= [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];*/
        //console.log(this.icon);
        //console.log(this.iconLabel);
        this.iconSrc = "assets/icons/nowteam/" + this.icon + ".png";
        if (!this.iconLabel) {
            this.label = '';
        }
        else if (this.iconLabel.indexOf('-') == -1) {
            this.label = this.iconLabel;
        }
        else {
            this.label = this.iconLabel.split('-')[1];
        }
        switch (this.icon) {
            case 'Bleu':
                this.iconSrc = 'now-low';
                break;
            case 'Vert':
                this.iconSrc = 'now-normal';
                break;
            case 'Orange':
                this.iconSrc = 'now-urgent';
                break;
            case 'Rouge':
                this.iconSrc = 'now-critic';
                break;
            case 'Noir':
                this.iconSrc = 'now-vip';
                break;
        }
        /*if (!this.icon) {
            this.iconSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAxCAYAAABDEFA9AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAK6ADAAQAAAABAAAAMQAAAABnROrhAAAGVUlEQVRoBe1Ya0wUVxQ+d3ZXgQUxKot9wGJEk7KaAkbcVQM0qa3WNGKr1voqxD6MjdE2prFtGumftkkTK20TkzZpMCak1NZHU6GNL1hEQas8dFEpVXloykNhQVCBndtzV2ec3ZmdWXaWNibeH3PvPec753xz5sy9d4bAKDeLZUo8RBhzgJCFhNJkADKZEojFsDcB6D9AST0F/hDccZd0dnbeVqND1JR6dBOenJpgNBo+Q0KrCTZNX5QO8BR2cIO9X7S3t/cr4bWdKFlpyCwJ0zYAR75G5yYNqIKadlDKv9LR8nelv5LzF+idI9EvCUd2hUaURScWQrij8QnJS/y5hDWz8YnTPwcC2/yDhDKnmF4C5IX2lsajgn3YyMYlJi/nCPeT4DhQbzQaYeKECdDZ1QU8zweCeeUUqJtQko6ErzBBWMogenJyHAek0BtB4WIwGOCNNa9DxZFSuHapDupOV0Dz5XpwHimB3LWrwGRSLm3MbCwF2CO4DEtmLYnTduELv0FwKu3ZQlC85wfInD9XKvYZO0+chJXr1gfMNOVhaUdr4wGDj1UIk7ikpMmEGooCLU9v5a2DvHWrRc+9vX1QfeYsxMREQ2RkpFduTUyAW7e6oaauXsRJB5jRqf3um9/rLgPCm5Yg0YB+5s+1i3HP1dRBSrodVqzJA1u6A867GkTdPMdDnCgUBgRmT7JanzAK85B7QmRLjNRX8S/74fCxMq+IZW54eNg7xrcd2tpuwExbinduNKlT4XjTUnWE143GhdLpuJUGBJX8flimS7ImwkcfvA+LXnxe1B0q/UMcKw4ImamfLIGJis4DCN/MXQsfb9sKkRERIqKo+Gf49bdSca40wHQkEGd1Qw4+EWuWPaVACVRe1bAZE9ecOSflgJLeYp0+iI6U1x4/A0tcHNSfOSFKW1rbYOuHnwBbDTQbhbMcULqfAN3prGrYIjU4XnN1fHmVq4bpGKai2rVdqmfjytOu1HExMYFrwM9gniNDlLh7eyFrweLgiDIrQm9LyoB+5Tzl6sl02AoZieF7A3gTkCR4x+znO6tcSZ6xUe89lzalp+LUxexh3rN/4qRJxr6+PgGm2t+5ew+EGr7U2Ah37t5VxfspbxAkgJvE/YbbWw9uavkAfD7uHuMFubRHcC3eZqE346jY+c0OqDxRIYWojseMMUG0ORpudXer4vyVuDFv8lkfGUFGIhBR5gCznSoQZfPZsx4+WjZXa+lpz8L5P09663bj2+vVoDIdR6HEh6wMEYQgPW0W7u2SalKxWbJ4EcSOGwfsMLNyxasqSF8Vrsnn2GFGN1m2Zb608GVf7wFmBw+VQo/bDUNDQ1BUvDcASi7G9+VbJvWpWTksOEl/fz9s3PQODGCv1VjNmqPM0N2Dr0cQDYlWdrQ0zmdQ3ZllTsxmM7y7YRMbarbBwaHgieJ5lqdkheA0LGSZs4yMObB82UrBr+4e69TDe2hOV+vlG4Iz+ZtBoRyXpzIBMJJ++bLX8Aug3VFWdnwB2gW9WfjHwEc/jMvoqq62pjKpTkaWEc1y2PKloJGO459Ktj9tTTzVdr1tpKaIp9UeAnk3m5su+hvLyBJCs5S2Vn9DrbnHw8OxsqOwb99ewJ8XWnDATLbjZXtHy1/fIVjcqKSGYVkNpA79x+zcWltbAz8WF7muXG3qkuqR0XVKyQVC+bMdrU3HUHf/sCsFScajTlaIhZw/1VteYVsNBFKj2T9SZGUvGNZRQZbdtkVPhthZ2HBvYGTHqiACyjNLIbh9UMU5O++qqENWyTKLJ/LNzqoLWSF7REMa4CysxyezlZF9cJbN1uM45K1LI6i8DDQM/k/1I0VWVgZYcM2YvWu6M0hAV90rxZeRxaWrUO9OwwJJP0SVAocik5HFHxpW5+mL+rOi8aM4LGTRSS7+KM0Nxdlo2zxSL9hjsqNVDo8z+19m9qBaMFyH3ahXxdzfWGidmp9QdD5lgEQKMu22HAyWp+yM1hk5yGYY9pkSCOOJiEo1UUPOgxtThoUgfUiW0t3CoZv9ozVwkOYTDP8neMaas+dl2GpZHO8uhzfli6G7M+0zUtl51uF45hq7MR99CASlJvgnEQpQcNATYfb5OmCk+LFRSUzHsog3kO1/qGY3xQjhkyhnTyPTMSMX8WJjPgiFLUxvNMABURHi4F8JNiqcf6QfuAAAAABJRU5ErkJggg==';
        } else {
            const data: any = list.filter((e: any) => {
                return this.icon.includes(e.label);
            });
            if (data && data.length) {
                this.iconSrc = data[0].data
            }
        }*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(i0.ɵɵdirectiveInject(TableService)); };
PriorityComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PriorityComponent, selectors: [["icon-priority"]], inputs: { icon: "icon", iconLabel: "iconLabel" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[3, "matTooltip"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.iconSrc);
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, directives: [i2.MatTooltip], styles: [".now-low[_ngcontent-%COMP%]{background-color:#00fcbe;border-radius:1000px;border:none!important;text-align:left;color:#fff;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-normal[_ngcontent-%COMP%]{background-color:#8e62ef;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-urgent[_ngcontent-%COMP%]{background-color:#f6d04c;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-critic[_ngcontent-%COMP%]{background:#F6544C!important;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-vip[_ngcontent-%COMP%]{background:#FFFFFF4D!important;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PriorityComponent, [{
        type: Component,
        args: [{ selector: 'icon-priority', template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span matTooltip=\"{{this.label}}\" class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>", styles: [".now-low{background-color:#00fcbe;border-radius:1000px;border:none!important;text-align:left;color:#fff;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-normal{background-color:#8e62ef;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-urgent{background-color:#f6d04c;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-critic{background:#F6544C!important;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}.now-vip{background:#FFFFFF4D!important;border-radius:1000px;border:none!important;text-align:left;font-style:normal;font-weight:600;font-size:16px;line-height:125%;letter-spacing:0px;color:#fff;padding:8px 19px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;text-align:center}\n"] }]
    }], function () { return [{ type: TableService }]; }, { icon: [{
            type: Input
        }], iconLabel: [{
            type: Input
        }] }); })();

class YesNoComponent {
    constructor(service) {
        this.service = service;
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.yesNo; /*{
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            }*/
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
YesNoComponent.ɵfac = function YesNoComponent_Factory(t) { return new (t || YesNoComponent)(i0.ɵɵdirectiveInject(TableService)); };
YesNoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: YesNoComponent, selectors: [["app-yes-nox"]], inputs: { valid: "valid", displayNo: "displayNo", displayYes: "displayYes", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[3, "src"]], template: function YesNoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelement(1, "img", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.css);
        i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YesNoComponent, [{
        type: Component,
        args: [{ selector: 'app-yes-nox', template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
    }], function () { return [{ type: TableService }]; }, { valid: [{
            type: Input
        }], displayNo: [{
            type: Input
        }], displayYes: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
    CellsComponentList["PngIcon"] = "png-icon";
    CellsComponentList["Menu"] = "menu";
    CellsComponentList["Status"] = "status";
    CellsComponentList["StatusIcon"] = "status-icon";
    CellsComponentList["DoubleLine"] = "double-line";
})(CellsComponentList || (CellsComponentList = {}));

class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}) {
        super();
        this.totalElements = 0;
        this.number = 0;
        this.startWith = 0;
        this._totalElements = new BehaviorSubject(0);
        this.emptyRow = false;
        this.filterTable = {};
        this.size = size;
        this.data = [...data];
        this.dataAfterSearch = [];
        this.backUpData = [...data];
        //this.totalElements = data.length;
        this.emptyRow = emptyRow;
        this.filterTable = filterT;
        this.pageSort = new BehaviorSubject(sortRules);
        this.pageFilterDate = new BehaviorSubject(null);
        this.pageFilter = new BehaviorSubject('');
        this.pageNumber = new BehaviorSubject(this.startWith);
        this._totalElements.subscribe((page) => this.totalElements = page);
        this.page$ = this.pageSort.pipe(switchMap(sortAction => this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(filter => this.pageFilterDate.pipe(switchMap(range => this.pageNumber.pipe(switchMap(page => from([{
                content: this.slice(this.sortData(this.filterDataObject(this.filterData(this.filterDateRange(this.data, range), filter), this.filterTable), sortAction), page, this.size, detailRaws)
            }])), share())))))));
    }
    filterDateRange(data, range) {
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
            return data.filter((e) => {
                if (range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart)
                        && new Date(e[range.active]) <= new Date(range.valueEnd);
                }
                else if (range.valueStart && !range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart);
                }
                else if (!range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) <= new Date(range.valueEnd);
                }
            });
        }
        else {
            return this.data;
        }
    }
    ponderation(str, searchKey) {
        let stack = str.split(' ');
        let pond = 0;
        for (let s of stack) {
            let search = s.replace(new RegExp(' ', 'g'), '');
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        if (this.pageNumber.getValue() > 0) {
            this.pageNumber.next(0);
            this.number = 0;
            //console.log('filterData log');
        }
        /*if (data.length === 0 && this.data) {
          data = this.data;
        }*/
        const result = [];
        if (typeof filter === "object") {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, " ");
                const stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, " ")
                    .split(' ');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            this.dataAfterSearch = data;
            return data;
        }
    }
    filterDataObject(data, filter) {
        if (this.pageNumber.getValue() > 0) {
            this.pageNumber.next(0);
            this.number = 0;
            //console.log('filterDataObject log')
        }
        if (data.length === 0 && this.data) {
            //data = this.data;
            return data;
        }
        const result = [];
        if (filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                let ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(key => {
                    if (filter[key].includes(e[key])) {
                        //e.pond += 1;
                    }
                    else {
                        //e.pond = 0;
                        ok = false;
                    }
                });
                //if (e.pond) {
                if (ok) {
                    result.push(e);
                }
            }
            return result;
            //return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '') {
            return data.sort((a, b) => {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    }
    compare(a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    }
    fetch(page) {
        this.pageNumber.next(page);
    }
    sortIt(sortidea) {
        this.pageSort.next(sortidea);
    }
    filter(myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
    }
    filterDate(dateFilter) {
        this.pageFilterDate.next(dateFilter);
    }
    connect() {
        return this.page$.pipe(pluck('content'));
    }
    disconnect() {
    }
    slice(data, start = 0, end = 20, detailRow = true) {
        this._totalElements.next(data.length);
        const rows = data.length ? data.slice(start * end, (start * end) + end) : [];
        return rows;
    }
}

class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusComponent, selectors: [["status"]], inputs: { label: "label" }, decls: 2, vars: 5, consts: [[3, "matTooltip"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("status status-", ctx.label.toLowerCase(), "");
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, directives: [i2.MatTooltip], styles: [".status[_ngcontent-%COMP%]{background:#F6544C;border-radius:1000px;font-style:normal;font-weight:600;font-size:16px;line-height:125%;padding:8px 19px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusComponent, [{
        type: Component,
        args: [{ selector: 'status', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    {{ label }}\n</span>", styles: [".status{background:#F6544C;border-radius:1000px;font-style:normal;font-weight:600;font-size:16px;line-height:125%;padding:8px 19px}\n"] }]
    }], function () { return []; }, { label: [{
            type: Input
        }] }); })();

class StatusIconComponent {
    constructor() { }
    ngOnInit() {
        switch (this.label.toLocaleLowerCase()) {
            case 'closed':
            case 'cloturé':
                this.src = '/assets/icons/status/green-dot.svg';
                break;
            default:
                this.src = '/assets/icons/status/yellow-dot.svg';
                break;
        }
    }
}
StatusIconComponent.ɵfac = function StatusIconComponent_Factory(t) { return new (t || StatusIconComponent)(); };
StatusIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusIconComponent, selectors: [["status-icon"]], inputs: { label: "label" }, decls: 3, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function StatusIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("status status-", ctx.label.toLowerCase(), "");
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("src", ctx.src, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, directives: [i2.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusIconComponent, [{
        type: Component,
        args: [{ selector: 'status-icon', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""] }]
    }], function () { return []; }, { label: [{
            type: Input
        }] }); })();

function MenuComponent_ng_container_3_nb_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-icon", 5);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("primary", menu_r2.IconColor)("icon", menu_r2.Icon)("size", 1.5);
} }
function MenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 3);
    i0.ɵɵlistener("click", function MenuComponent_ng_container_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const menu_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.action(menu_r2); });
    i0.ɵɵtemplate(2, MenuComponent_ng_container_3_nb_icon_2_Template, 1, 3, "nb-icon", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", menu_r2.Class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.Icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", menu_r2.Label, " ");
} }
class MenuComponent {
    constructor() {
        this.menuSettings = [];
        this.callHandler = new EventEmitter();
    }
    ngOnInit() {
    }
    action(menu) {
        if (menu.Data && menu.Data.length > 0 && menu.Type == 'link') {
            let list = [];
            for (const dat of menu.Data) {
                console.log(this.element[dat]);
                list.push(this.element[dat]);
            }
            ;
            menu.Data = list;
        }
        else if (menu.Data && menu.Data.length > 0 && menu.Type == 'modal') {
            let list = [];
            for (const dat of menu.Data) {
                list[dat] = this.element[dat];
            }
            ;
            menu.Data = list;
        }
        this.callHandler.emit(menu);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["menu"]], inputs: { menuSettings: "menuSettings", element: "element" }, outputs: { callHandler: "callHandler" }, decls: 4, vars: 4, consts: [[1, "menu-show", 3, "matMenuTriggerFor", "icon", "size"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "ngClass", "click"], [3, "primary", "icon", "size", 4, "ngIf"], [3, "primary", "icon", "size"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "nb-icon", 0);
        i0.ɵɵelementStart(1, "mat-menu", null, 1);
        i0.ɵɵtemplate(3, MenuComponent_ng_container_3_Template, 4, 3, "ng-container", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r0)("icon", "menu_kebab")("size", 1.5);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.menuSettings);
    } }, directives: [i1$1.NowboardIconComponent, i2$1.MatMenuTrigger, i2$1.MatMenu, i4.NgForOf, i2$1.MatMenuItem, i4.NgClass, i4.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{ selector: 'menu', template: "<nb-icon class=\"menu-show\" [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>", styles: [""] }]
    }], function () { return []; }, { menuSettings: [{
            type: Input
        }], element: [{
            type: Input
        }], callHandler: [{
            type: Output
        }] }); })();

class DoubleLineComponent {
    constructor() {
        this.line1 = '';
        this.line2 = '';
    }
    ngOnInit() {
    }
}
DoubleLineComponent.ɵfac = function DoubleLineComponent_Factory(t) { return new (t || DoubleLineComponent)(); };
DoubleLineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DoubleLineComponent, selectors: [["double-line"]], inputs: { line1: "line1", line2: "line2" }, decls: 4, vars: 2, consts: [[1, "line-1"], [1, "line-2"]], template: function DoubleLineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.line1, "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.line2, "\n");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleLineComponent, [{
        type: Component,
        args: [{ selector: 'double-line', template: "<div class=\"line-1\">\n    {{ line1 }}\n</div>\n\n<div class=\"line-2\">\n    {{ line2 }}\n</div>", styles: [""] }]
    }], function () { return []; }, { line1: [{
            type: Input
        }], line2: [{
            type: Input
        }] }); })();

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
            console.log('My data TABLE', this.data);
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
            console.log('My data TABLE', this.data);
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.buildHeaders().then(() => {
                console.log('READYYYYYYYY', this.data);
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
        this.ngOnDestroy();
        this.ngOnInit();
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i1$2.Router), i0.ɵɵdirectiveInject(i1$2.ActivatedRoute), i0.ɵɵdirectiveInject(TableService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(TranslateService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
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
        i0.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.columnsToDisplay && ctx.data && ctx.data.totalElements && ctx.showTable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.totalElements > 0);
    } }, directives: [i4.NgIf, i5.MatTable, i6.MatSort, i4.NgForOf, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatHeaderCell, i6.MatSortHeader, IsMatIconComponent, i5.MatCellDef, i5.MatCell, i4.NgSwitch, i4.NgSwitchCase, i2.MatTooltip, i1$2.RouterLinkWithHref, i4.NgClass, EquipementTypeComponent, EquipementStatusComponent, CustomerRankComponent, PriorityComponent, StatusComponent, StatusIconComponent, GenderComponent, PngIconComponent, MenuComponent, PhoneDisplayComponent, YesNoComponent, OriginComponent, NameAvatarComponent, DateFormatComponent, DoubleLineComponent, i4.NgSwitchDefault, i24.MatPaginator], styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
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
                    ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n    <!-- Table -->\n    <table mat-table #table=\"matSort\"\n           [dataSource]=\"data \" multiTemplateDataRows matSort\n           class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n           (matSortChange)=\"data.sortIt($event)\">\n        <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n            <ng-container *ngIf=\"column.sort\">\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                    mat-sort-header>\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n            <ng-container *ngIf=\"!column.sort\">\n                <!-- Ajouter fonction generate Class -->\n                <ng-container *ngIf=\"column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n                        style=\"cursor: pointer;\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                        <app-is-mat-icon\n                                *ngIf=\"column.valueStatement && column.statement !== undefined\"\n                                [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n                        </app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <ng-container *ngIf=\"!column.clickable\">\n                    <th mat-header-cell *matHeaderCellDef\n                        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                        <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                    </th>\n                </ng-container>\n                <th mat-header-cell *matHeaderCellDef\n                    [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n                    <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n                </th>\n            </ng-container>\n\n            <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n                [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n                <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n                    <!-- Button click -->\n                    <ng-container *ngSwitchCase=\"'button-click'\">\n                        <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\"\n                           [innerHTML]=\"details\"></a>\n                    </ng-container>\n                    <!-- Button link -->\n                    <ng-container *ngSwitchCase=\"'button-link'\">\n                        <!--                matBadge=\"*\" matBadgePosition=\"before\"\n                           matBadgeColor=\"accent\" -->\n                        <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           (click)=\"element.new = false\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"!element.new\"\n                           [matTooltip]=\"open\"\n                           class=\"mat-button btn-xs\"\n                           [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            <ng-container *ngIf=\"column.display\">\n                                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n                            </ng-container>\n                            <ng-container *ngIf=\"!column.display\">\n                                <span [innerHTML]=\"element[column.key]\"></span>\n                            </ng-container>\n                        </a>\n                    </ng-container>\n                    <!-- Button link text -->\n                    <ng-container *ngSwitchCase=\"'button-link-text'\">\n                        <a [matTooltip]=\"open\"\n                           class=\"btn-link-text btn-xs\"\n                           (click)=\"element.new = false\"\n                           routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                            {{ column.value == 'Actions' ? details : column.key }}\n                        </a>\n                    </ng-container>\n                    <!-- icon custom-->\n                    <ng-container *ngSwitchCase=\"'custom-icon'\">\n                        <input type=\"hidden\" [value]=\"element[column.key]\">\n                        <img *ngIf=\"element[column.key] && column.valueOverride\"\n                             [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'it-category'\">\n                        <app-equipement-type [name]=\"element[column.key]\"\n                                             [type]=\"element[column.override]\"></app-equipement-type>\n                    </ng-container>\n                    <!-- icon it status -->\n                    <ng-container *ngSwitchCase=\"'it-status'\">\n                        <app-equipement-status [lang]=\"lang\" [type]=\"element[column.key]\"></app-equipement-status>\n                    </ng-container>\n                    <!-- icon customer rank -->\n                    <ng-container *ngSwitchCase=\"'customer-rank'\">\n                        <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n                    </ng-container>\n                    <!-- icon priority-->\n                    <ng-container *ngSwitchCase=\"'priority'\">\n                        <icon-priority [icon]=\"element['Icon']\"\n                                       [iconLabel]=\"element[column.key] || null\"></icon-priority>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status'\">\n                        <status [label]=\"element[column.key]\"></status>\n                    </ng-container>\n\n                    <!-- status -->\n                    <ng-container *ngSwitchCase=\"'status-icon'\">\n                        <status-icon [label]=\"element[column.key]\"></status-icon>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'gender-avatar'\">\n                        <app-gender [type]=\"element[column.key]\"></app-gender>\n                    </ng-container>\n\n                    <!-- Png Icon -->\n                    <ng-container *ngSwitchCase=\"'png-icon'\">\n                        <png-icon [src]=\"element[column.key]\" [fontSize]=\"column.fontSize\"\n                                  [color]=\"column.color\"></png-icon>\n                    </ng-container>\n\n\n                    <!-- menu -->\n                    <ng-container *ngSwitchCase=\"'menu'\">\n                        <menu (callHandler)=\"callFunction.emit($event)\" [element]=\"element\"\n                              [menuSettings]=\"column.config\"></menu>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'phone-display'\">\n                        <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n                    </ng-container>\n\n                    <!-- icon gender avatar-->\n                    <ng-container *ngSwitchCase=\"'yes-no-display'\">\n                        <app-yes-nox\n                                *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n                                [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n                        >\n                        </app-yes-nox>\n                        <app-yes-nox\n                                *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n                                [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n                        </app-yes-nox>\n                    </ng-container>\n                    <!-- icon origin-->\n                    <ng-container *ngSwitchCase=\"'origin'\">\n                        <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n                    </ng-container>\n                    <!-- icon name avatar-->\n                    <ng-container *ngSwitchCase=\"'name-avatar'\">\n                        <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                                     [src]=\"element[column.key]\"\n                                     [fontSize]=\"column.fontSize\"\n                                     [matTooltipClass]=\"'my-tooltip'\">\n                        </name-avatar>\n                    </ng-container>\n                    <!-- date format -->\n                    <ng-container *ngSwitchCase=\"'date-format'\">\n                        <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n                    </ng-container>\n                    <!-- count rows -->\n                    <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n                    </ng-container>\n                    <!-- double line -->\n                    <ng-container *ngSwitchCase=\"'double-line'\">\n                        <double-line [line1]=\"element[column.key]\" [line2]=\"element[column.override]\"></double-line>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <span [innerHTML]=\"element[column.key]\"></span>\n                    </ng-container>\n                </ng-container>\n            </td>\n        </ng-container>\n    </table>\n    <ng-container *ngIf=\"data && data.totalElements === 0\">\n        <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n            <div class=\"\">\n                <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n                    {{ noResult }}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                   [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                   (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row-none{display:none!important}\n"] }]
    }], function () { return [{ type: i1$2.Router }, { type: i1$2.ActivatedRoute }, { type: TableService }, { type: i0.ChangeDetectorRef }, { type: TranslateService }, { type: i0.ChangeDetectorRef }]; }, { paginatorCurrent: [{
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

const Settings = {
    Icons_light: {
        disabled_color: "#5E7290",
        primary: "#001B66"
    },
    Icons_dark: {
        disabled_color: '#D1DBEA',
        primary: "#FFFFFF"
    }
};

class TableModule {
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
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(i0.ɵɵinject(TableModule, 12)); };
TableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableModule, [{
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
                    DoubleLineComponent
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
    }], function () { return [{ type: TableModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableModule, { declarations: [TableComponent,
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
        DoubleLineComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule, i1$1.NowboardIconModule], exports: [TableComponent,
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
        StatusComponent] }); })();

/*
 * Public API Surface of table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CellsComponentList, CoreMatTable, CustomerRankComponent, DateFormatComponent, EquipementStatusComponent, EquipementTypeComponent, GenderComponent, IsMatIconComponent, NameAvatarComponent, NgxFlagsComponent, OriginComponent, PhoneDisplayComponent, PngIconComponent, PngIconModule, PriorityComponent, StatusComponent, TableComponent, TableModule, TableService, YesNoComponent };
//# sourceMappingURL=ngx-table.mjs.map
