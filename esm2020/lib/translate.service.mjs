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
                'KO': 'HS',
                'ACTIVE': 'Actif',
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details',
                'FUNCTIONAL': 'Functional',
                'KO': 'HS',
                'ACTIVE': 'Active',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUF3QjNCO1FBdkJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87YUFDcEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLGVBQWUsRUFBRSxlQUFlO2dCQUNoQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsU0FBUztnQkFDcEIsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxRQUFRO2FBQ3JCO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUk7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OEdBaENVLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgUmVjaGVyY2hlLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0FubnVsZXIgbGEgcmVjaGVyY2hlJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ0F1Y3VuIHLDqXN1bHRhdCBjb3JyZXNwb25kYW50JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscycsXG4gICAgICAgICAgJ0ZVTkNUSU9OQUwnOiAnRm9uY3Rpb25uZWwnLFxuICAgICAgICAgICdLTyc6ICdIUycsXG4gICAgICAgICAgJ0FDVElWRSc6ICdBY3RpZicsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgU2VhcmNoLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPcGVuJyxcbiAgICAgICAgICAnQ0FOQ0VMX1NFQVJDSCc6ICdDYW5jZWwgc2VhcmNoJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ05vIGNvcnJlc3BvbmRpbmcgcmVzdWx0JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEZXRhaWxzJyxcbiAgICAgICAgICAnRlVOQ1RJT05BTCc6ICdGdW5jdGlvbmFsJyxcbiAgICAgICAgICAnS08nOiAnSFMnLFxuICAgICAgICAgICdBQ1RJVkUnOiAnQWN0aXZlJyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgaWYgKHRoaXMubGFuZyAmJiB0aGlzLmxhbmdbbF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmxhbmdbbF1bd29yZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3b3JkO1xuICAgIH1cbiAgfVxufVxuIl19