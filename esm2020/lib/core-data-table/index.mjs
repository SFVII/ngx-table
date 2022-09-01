import { BehaviorSubject, from } from "rxjs";
import { debounceTime, pluck, share, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
export class CoreMatTable extends DataSource {
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
            console.log(this.data.length);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NvcmUtZGF0YS10YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBc0IsTUFBTSxNQUFNLENBQUM7QUFHaEUsT0FBTyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQTRDcEQsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFtQjtJQW1CakQsWUFBWSxJQUFTLEVBQUUsU0FBZSxFQUMxQixVQUErQixFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsYUFBc0IsSUFBSSxFQUN0RSxXQUFvQixLQUFLLEVBQUUsVUFBZSxFQUFFO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBcEJMLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFNWCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBSWIsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBT3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFH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QyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUErQjtRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFVBQVU7SUFDVixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVcsRUFBRSxRQUFnQixDQUFDLEVBQUUsTUFBYyxFQUFFLEVBQUUsWUFBcUIsSUFBSTtRQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0UsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIHBsdWNrLCBzaGFyZSwgc3dpdGNoTWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gICAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVNYXRUYWJsZUludGVyZmFjZSB7XG4gICAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gICAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gICAgbnVtYmVyOiBudW1iZXI7XG4gICAgZGF0YTogYW55W107XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICAgIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gICAgZGlzY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgICBzb3J0OiBNYXRTb3J0O1xuICAgIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gICAgZmlsdGVyOiAobXlGaWx0ZXI6IGFueSkgPT4gdm9pZDtcbiAgICBmaWx0ZXJEYXRhOiAoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkgPT4gdm9pZFxuICAgIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICAgIHBhZ2VOdW1iZXI6IFN1YmplY3Q8bnVtYmVyPjtcbiAgICBzdGFydFdpdGg6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckRhdGVJbnRlcmZhY2Uge1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIHZhbHVlU3RhcnQ6IERhdGU7XG4gICAgdmFsdWVFbmQ6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcmVNYXRUYWJsZSBleHRlbmRzIERhdGFTb3VyY2U8RWxlbWVudD4ge1xuICAgIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICBwdWJsaWMgdG90YWxFbGVtZW50cyA9IDA7XG4gICAgcHVibGljIG51bWJlciA9IDA7XG4gICAgcHVibGljIHNpemU6IGFueTtcbiAgICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgICBwdWJsaWMgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgcGFnZU51bWJlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XG4gICAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gICAgcHJpdmF0ZSBwYWdlU29ydDogQmVoYXZpb3JTdWJqZWN0PFNvcnQ+O1xuICAgIHByaXZhdGUgcGFnZUZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gICAgcHJpdmF0ZSBwYWdlRmlsdGVyRGF0ZTogQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+O1xuICAgIHByaXZhdGUgX3RvdGFsRWxlbWVudHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICAgIHByaXZhdGUgYmFja1VwRGF0YTogYW55O1xuICAgIHByaXZhdGUgZW1wdHlSb3cgPSBmYWxzZTtcbiAgICBwcml2YXRlIGZpbHRlclRhYmxlID0ge307XG4gICAgcHJpdmF0ZSBkYXRhQWZ0ZXJTZWFyY2g7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIHNvcnRSdWxlczogU29ydCxcbiAgICAgICAgICAgICAgICByYW5nZVJ1bGVzOiBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBzaXplID0gMjAsIGRldGFpbFJhd3M6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICAgIGVtcHR5Um93OiBib29sZWFuID0gZmFsc2UsIGZpbHRlclQ6IGFueSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSBbXTtcbiAgICAgICAgdGhpcy5iYWNrVXBEYXRhID0gWy4uLmRhdGFdO1xuICAgICAgICAvL3RoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLmVtcHR5Um93ID0gZW1wdHlSb3c7XG4gICAgICAgIHRoaXMuZmlsdGVyVGFibGUgPSBmaWx0ZXJUO1xuICAgICAgICB0aGlzLnBhZ2VTb3J0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTb3J0Pihzb3J0UnVsZXMpO1xuICAgICAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPihudWxsKTtcbiAgICAgICAgdGhpcy5wYWdlRmlsdGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KCcnKTtcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4gdGhpcy50b3RhbEVsZW1lbnRzID0gcGFnZSk7XG5cbiAgICAgICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcChyYW5nZSA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YU9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHRoaXMuZmlsdGVyVGFibGUpLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICkpKSlcblxuICAgIH1cblxuICAgIGZpbHRlckRhdGVSYW5nZShkYXRhOiBhbnksIHJhbmdlOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmICghcmFuZ2UgfHwgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9uZGVyYXRpb24oc3RyOiBzdHJpbmcsIHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzdGFjazogc3RyaW5nW10gPSBzdHIuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IHBvbmQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IHMgb2Ygc3RhY2spIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpXG4gICAgICAgICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgICAgICAgICAgcG9uZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb25kO1xuICAgIH1cblxuICAgIGZpbHRlckRhdGEoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyLmdldFZhbHVlKCkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dCgwKTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyID0gMDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2ZpbHRlckRhdGEgbG9nJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyppZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgfSovXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGFPYmplY3QoZGF0YSwgZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyLnJlcGxhY2UoL1teYS16QS1aIF0vZywgXCIgXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFSYXc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IGZpbHRlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGxldCBjb21iaW5hdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhUmF3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb25kOiBudW1iZXIgPSB0aGlzLnBvbmRlcmF0aW9uKGRhdGFSYXcsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnBvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wb25kICs9IHBvbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckRhdGFPYmplY3QoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyLmdldFZhbHVlKCkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dCgwKTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyID0gMDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2ZpbHRlckRhdGFPYmplY3QgbG9nJylcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAvL2RhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgICAgIGlmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJba2V5XS5pbmNsdWRlcyhlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2UucG9uZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9lLnBvbmQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vaWYgKGUucG9uZCkge1xuICAgICAgICAgICAgICAgIGlmIChvaykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAvL3JldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0RGF0YShkYXRhOiBhbnksIHNvcnRBY3Rpb246IGFueSkge1xuICAgICAgICBpZiAoc29ydEFjdGlvbi5kaXJlY3Rpb24gIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhID09PSAnZW1wdHknIHx8IGIgPT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgIGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpID4gKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPyAtMSA6ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID4gKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSkgPyAxIDogMCkgKiAoaXNBc2MgPyAtMSA6IDEpKTtcbiAgICB9XG5cbiAgICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyLm5leHQocGFnZSk7XG4gICAgfVxuXG4gICAgc29ydEl0KHNvcnRpZGVhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlU29ydC5uZXh0KHNvcnRpZGVhKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIW15RmlsdGVyICYmIHRoaXMuZGF0YSB8fCAhbXlGaWx0ZXIudHJpbSgpICYmIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dCh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJEYXRlKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlRmlsdGVyRGF0ZS5uZXh0KGRhdGVGaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSQucGlwZShwbHVjaygnY29udGVudCcpKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dChkYXRhLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBkYXRhLmxlbmd0aCA/IGRhdGEuc2xpY2Uoc3RhcnQgKiBlbmQsIChzdGFydCAqIGVuZCkgKyBlbmQpIDogW107XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cbn1cbiJdfQ==