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
        if (this.lang && l && this.lang[l] && this.lang[l][word])
            try {
                return this.lang[l][word];
            }
            catch (err) {
                return l;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFzQnpCO1FBckJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsSUFBSSxFQUFFLElBQUk7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsV0FBVztnQkFDckIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsSUFBSSxFQUFFLElBQUk7YUFDYjtTQUNKLENBQUM7SUFHRixDQUFDO0lBRU0sU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RCxJQUFJO2dCQUNBLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFBO2FBQ1g7SUFDTCxDQUFDOztnRkFoQ1EsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZiLE1BQU07dUZBRVQsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgICAnZnInOiB7XG4gICAgICAgICAgICAnU0VBUkNIJzogYFJlY2hlcmNoZS4uLmAsXG4gICAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxuICAgICAgICAgICAgJ0NBTkNFTF9TRUFSQ0gnOiAnQW5udWxlciBsYSByZWNoZXJjaGUnLFxuICAgICAgICAgICAgJ05PX1JFU1VMVCc6ICdBdWN1biByw6lzdWx0YXQgY29ycmVzcG9uZGFudCcsXG4gICAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscycsXG4gICAgICAgICAgICAnRlVOQ1RJT05BTCc6ICdGb25jdGlvbm5lbCcsXG4gICAgICAgICAgICAnS08nOiAnSFMnXG4gICAgICAgIH0sXG4gICAgICAgICdlbic6IHtcbiAgICAgICAgICAgICdTRUFSQ0gnOiBgU2VhcmNoLi4uYCxcbiAgICAgICAgICAgICdPUEVOJzogJ09wZW4nLFxuICAgICAgICAgICAgJ0NBTkNFTF9TRUFSQ0gnOiAnQ2FuY2VsIHNlYXJjaCcsXG4gICAgICAgICAgICAnTk9fUkVTVUxUJzogJ05vIGNvcnJlc3BvbmRpbmcgcmVzdWx0JyxcbiAgICAgICAgICAgICdERVRBSUxTJzogJ0RldGFpbHMnLFxuICAgICAgICAgICAgJ0ZVTkNUSU9OQUwnOiAnRnVuY3Rpb25hbCcsXG4gICAgICAgICAgICAnS08nOiAnSFMnXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmcgJiYgbCAmJiB0aGlzLmxhbmdbbF0gJiYgdGhpcy5sYW5nW2xdW3dvcmRdKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gbFxuICAgICAgICB9XG4gICAgfVxufVxuIl19