import { BehaviorSubject, from } from "rxjs";
import { debounceTime, pluck, share, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
export class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}, startswith = 0) {
        super();
        this.totalElements = 0;
        this.number = 0;
        this.startWith = 0;
        this._totalElements = new BehaviorSubject(0);
        this.emptyRow = false;
        this.filterTable = {};
        this.currentPage = 0;
        this.startWith = startswith;
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
            .pipe(switchMap(filter => this.pageFilterDate.pipe(switchMap((range) => {
            this._totalElements.next(this.data.length);
            return this.pageNumber.pipe(switchMap(page => from([{
                    content: this.slice(this.sortData(this.filterData(this.filterDateRange(this.data, range), filter), sortAction), page, this.size, detailRaws)
                }])), share());
        }))))));
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
            return data;
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
        let inputSearch;
        if (typeof filter === "object") {
            if (filter.inputSearch) {
                inputSearch = filter.inputSearch;
                delete filter.inputSearch;
                return this.filterDataObject(this._search(inputSearch, data), filter);
            }
            else {
                return this.filterDataObject(data, filter);
            }
        }
        else {
            this.dataAfterSearch = data;
            return data;
        }
    }
    _search(filter, data) {
        const result = [];
        if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
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
            return data;
        }
    }
    filterDataObject(data, filter) {
        if ((data && data.length === 0 && this.data) || Object.keys(filter).length == 0) {
            //data = this.data;
            return data;
        }
        const result = [];
        if (filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                let ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(key => {
                    try {
                        if (filter[String(key)].includes(e[String(key)])) {
                            //e.pond += 1;
                        }
                        else {
                            //e.pond = 0;
                            ok = false;
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                });
                //if (e.pond) {
                if (ok) {
                    result.push(e);
                }
            }
            return result;
        }
        else {
            return data;
        }
    }
    setData(data) {
        this.data = [...data];
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
        if (myFilter != undefined) {
            this.pageFilter.next(myFilter);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NvcmUtZGF0YS10YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBc0IsTUFBTSxNQUFNLENBQUM7QUFHaEUsT0FBTyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQTZDcEQsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFtQjtJQW9CakQsWUFBWSxJQUFTLEVBQUUsU0FBZSxFQUMxQixVQUErQixFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsYUFBc0IsSUFBSSxFQUN0RSxXQUFvQixLQUFLLEVBQUUsVUFBZSxFQUFFLEVBQUUsVUFBVSxHQUFHLENBQUM7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFyQkwsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQU1YLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFJYixtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFNNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxD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Q0FBQyxFQUFFLENBQUM7UUFDN0UsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIHBsdWNrLCBzaGFyZSwgc3dpdGNoTWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gICAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVNYXRUYWJsZUludGVyZmFjZSB7XG4gICAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gICAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gICAgbnVtYmVyOiBudW1iZXI7XG4gICAgZGF0YTogYW55W107XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICAgIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gICAgZGlzY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgICBzb3J0OiBNYXRTb3J0O1xuICAgIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gICAgZmlsdGVyOiAobXlGaWx0ZXI6IGFueSkgPT4gdm9pZDtcbiAgICBmaWx0ZXJEYXRhOiAoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkgPT4gdm9pZFxuICAgIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICAgIHNldERhdGE6IChkYXRhOiBBcnJheTxhbnk+KSA9PiB2b2lkLFxuICAgIHBhZ2VOdW1iZXI6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+O1xuICAgIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gICAgYWN0aXZlOiBzdHJpbmc7XG4gICAgdmFsdWVTdGFydDogRGF0ZTtcbiAgICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gICAgcHVibGljIHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIHB1YmxpYyB0b3RhbEVsZW1lbnRzID0gMDtcbiAgICBwdWJsaWMgbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc2l6ZTogYW55O1xuICAgIHB1YmxpYyBzb3J0OiBNYXRTb3J0O1xuICAgIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuICAgIHB1YmxpYyBwYWdlTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcbiAgICBwdWJsaWMgc3RhcnRXaXRoID0gMDtcbiAgICBwcml2YXRlIHBhZ2VTb3J0OiBCZWhhdmlvclN1YmplY3Q8U29ydD47XG4gICAgcHJpdmF0ZSBwYWdlRmlsdGVyOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgICBwcml2YXRlIHBhZ2VGaWx0ZXJEYXRlOiBCZWhhdmlvclN1YmplY3Q8RmlsdGVyRGF0ZUludGVyZmFjZT47XG4gICAgcHJpdmF0ZSBfdG90YWxFbGVtZW50cyA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG4gICAgcHJpdmF0ZSBiYWNrVXBEYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBlbXB0eVJvdyA9IGZhbHNlO1xuICAgIHByaXZhdGUgZmlsdGVyVGFibGUgPSB7fTtcbiAgICBwcml2YXRlIGRhdGFBZnRlclNlYXJjaDtcbiAgICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogYW55LCBzb3J0UnVsZXM6IFNvcnQsXG4gICAgICAgICAgICAgICAgcmFuZ2VSdWxlczogRmlsdGVyRGF0ZUludGVyZmFjZSwgc2l6ZSA9IDIwLCBkZXRhaWxSYXdzOiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbXB0eVJvdzogYm9vbGVhbiA9IGZhbHNlLCBmaWx0ZXJUOiBhbnkgPSB7fSwgc3RhcnRzd2l0aCA9IDApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydFdpdGggPSBzdGFydHN3aXRoO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gW107XG4gICAgICAgIHRoaXMuYmFja1VwRGF0YSA9IFsuLi5kYXRhXTtcbiAgICAgICAgLy90aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy5lbXB0eVJvdyA9IGVtcHR5Um93O1xuICAgICAgICB0aGlzLmZpbHRlclRhYmxlID0gZmlsdGVyVDtcbiAgICAgICAgdGhpcy5wYWdlU29ydCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U29ydD4oc29ydFJ1bGVzKTtcbiAgICAgICAgdGhpcy5wYWdlRmlsdGVyRGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsdGVyRGF0ZUludGVyZmFjZT4obnVsbCk7XG4gICAgICAgIHRoaXMucGFnZUZpbHRlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPih0aGlzLnN0YXJ0V2l0aCk7XG4gICAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHRoaXMudG90YWxFbGVtZW50cyA9IHBhZ2UpO1xuXG4gICAgICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKSksIHNoYXJlKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApKSkpXG5cbiAgICB9XG5cbiAgICBmaWx0ZXJEYXRlUmFuZ2UoZGF0YTogYW55LCByYW5nZTogRmlsdGVyRGF0ZUludGVyZmFjZSkge1xuICAgICAgICBpZiAoIXJhbmdlIHx8ICghcmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb25kZXJhdGlvbihzdHI6IHN0cmluZywgc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHN0YWNrOiBzdHJpbmdbXSA9IHN0ci5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgcG9uZDogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzdGFjaykge1xuICAgICAgICAgICAgbGV0IHNlYXJjaDogc3RyaW5nID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJylcbiAgICAgICAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgICAgICAgICBwb25kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvbmQ7XG4gICAgfVxuXG4gICAgZmlsdGVyRGF0YShkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgICAgIGxldCBpbnB1dFNlYXJjaDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5pbnB1dFNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlucHV0U2VhcmNoID0gZmlsdGVyLmlucHV0U2VhcmNoO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWx0ZXIuaW5wdXRTZWFyY2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YU9iamVjdCh0aGlzLl9zZWFyY2goaW5wdXRTZWFyY2gsIGRhdGEpLCBmaWx0ZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhT2JqZWN0KGRhdGEsIGZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaChmaWx0ZXIsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyLnJlcGxhY2UoL1teYS16QS1aIF0vZywgXCIgXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFSYXc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IGZpbHRlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGxldCBjb21iaW5hdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhUmF3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb25kOiBudW1iZXIgPSB0aGlzLnBvbmRlcmF0aW9uKGRhdGFSYXcsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnBvbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wb25kICs9IHBvbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckRhdGFPYmplY3QoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgICAgICBpZiAoKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB8fCBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvL2RhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgICAgIGlmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyW1N0cmluZyhrZXkpXS5pbmNsdWRlcyhlW1N0cmluZyhrZXkpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2UucG9uZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2UucG9uZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vaWYgKGUucG9uZCkge1xuICAgICAgICAgICAgICAgIGlmIChvaykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERhdGEoZGF0YTogYW55W10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gWy4uLmRhdGFdO1xuICAgIH1cblxuICAgIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgICAgIGlmIChzb3J0QWN0aW9uLmRpcmVjdGlvbiAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEgPT09ICdlbXB0eScgfHwgYiA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShhW3NvcnRBY3Rpb24uYWN0aXZlXSwgYltzb3J0QWN0aW9uLmFjdGl2ZV0sIHNvcnRBY3Rpb24uZGlyZWN0aW9uID09PSAnYXNjJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgYjogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGlzQXNjOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgYSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICBiID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkgPiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA/IC0xIDogKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPiAoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpKSA/IDEgOiAwKSAqIChpc0FzYyA/IC0xIDogMSkpO1xuICAgIH1cblxuICAgIGZldGNoKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgICB9XG5cbiAgICBzb3J0SXQoc29ydGlkZWE6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VTb3J0Lm5leHQoc29ydGlkZWEpO1xuICAgIH1cblxuICAgIGZpbHRlcihteUZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChteUZpbHRlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlLm5leHQoZGF0ZUZpbHRlcik7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc2xpY2UoZGF0YTogYW55W10sIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IDIwLCBkZXRhaWxSb3c6IGJvb2xlYW4gPSB0cnVlKTogYW55IHtcbiAgICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IGRhdGEubGVuZ3RoID8gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCkgOiBbXTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxufVxuIl19