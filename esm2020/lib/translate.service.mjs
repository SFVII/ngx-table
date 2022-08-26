import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslateService {
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
        if (this.lang && this.lang[l]) {
            return this.lang[l][word];
        }
        else {
            return word;
        }
    }
}
TranslateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFzQjNCO1FBckJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsSUFBSSxFQUFFLElBQUk7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsV0FBVztnQkFDckIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsSUFBSSxFQUFFLElBQUk7YUFDYjtTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7OzhHQTlCVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUZmLE1BQU07NEZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnU0VBUkNIJzogYFJlY2hlcmNoZS4uLmAsXG4gICAgICAgICAgJ09QRU4nOiAnT3V2cmlyJyxcbiAgICAgICAgICAnQ0FOQ0VMX1NFQVJDSCc6ICdBbm51bGVyIGxhIHJlY2hlcmNoZScsXG4gICAgICAgICAgJ05PX1JFU1VMVCc6ICdBdWN1biByw6lzdWx0YXQgY29ycmVzcG9uZGFudCcsXG4gICAgICAgICAgJ0RFVEFJTFMnOiAnRMOpdGFpbHMnLFxuICAgICAgICAgICdGVU5DVElPTkFMJzogJ0ZvbmN0aW9ubmVsJyxcbiAgICAgICAgICAnS08nOiAnSFMnXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgU2VhcmNoLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPcGVuJyxcbiAgICAgICAgICAnQ0FOQ0VMX1NFQVJDSCc6ICdDYW5jZWwgc2VhcmNoJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ05vIGNvcnJlc3BvbmRpbmcgcmVzdWx0JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEZXRhaWxzJyxcbiAgICAgICAgICAnRlVOQ1RJT05BTCc6ICdGdW5jdGlvbmFsJyxcbiAgICAgICAgICAnS08nOiAnSFMnXG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB0cmFuc2xhdGUobCwgd29yZCkge1xuICAgIGlmICh0aGlzLmxhbmcgJiYgdGhpcy5sYW5nW2xdKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==