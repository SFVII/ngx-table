import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, pluck, share, startWith, switchMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
export class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}, startswith = 0) {
        super();
        this.totalElements = 0;
        this.number = 0;
        this.pageNumber = new BehaviorSubject(null);
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
        //  this.pageNumber = new BehaviorSubject<number>(this.startWith);
        this.search = new BehaviorSubject('');
        this._totalElements.subscribe((page) => this.totalElements = page);
        this.page$ = this.pageSort.pipe(switchMap(sortAction => this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(filter => this.search.pipe(switchMap(search => this.pageFilterDate.pipe(switchMap((range) => {
            this._totalElements.next(this.data.length);
            return this.pageNumber.pipe(startWith(this.startWith), switchMap(page => from([{
                    content: this.slice(this.sortData(this._search(search, this.filterData(this.filterDateRange(this.data, range), filter)), sortAction), page, this.size, detailRaws)
                }])), share());
        }))))))));
        this.pageNumber.next(this.startWith);
    }
    filterDateRange(data, range) {
        if (data && data.length && range && range.active && ((range.valueEnd && range.valueStart) || (range.valueEnd && !range.valueStart) || (!range.valueEnd && range.valueStart))) {
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
            let search = s;
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        if (typeof filter === 'object' && Object.keys(filter).length) {
            delete filter.inputSearch;
            data = this.filterDataObject(data, filter);
        }
        this.dataAfterSearch = data;
        return data;
    }
    _search(filter, data) {
        const result = [];
        if (filter && filter.replace(/[^a-zA-Z ]/g, ' ')) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, ' ');
                const stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ' ')
                    .split(' ').filter((e) => e && e !== '');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        e.pond += 1;
                        combination++;
                    }
                }
                if (e.pond >= 1 && combination === stack.length) {
                    result.push(e);
                }
            }
            return result.filter((e => e.pond > 0)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    formatCharacters(text) {
        return String(text).toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    }
    filterDataObject(data, filter) {
        const result = [];
        if (data && data.length && filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                let ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(key => {
                    try {
                        if (Array.isArray(filter[String(key)]) && (filter[String(key)].includes(e[String(key)]) || filter[String(key)].length === 0) || this.formatCharacters(filter[String(key)]) === this.formatCharacters(e[String(key)])) {
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
        //  this.pageNumber.next(0);
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '' && data && data.length) {
            return data.sort((a, b) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NvcmUtZGF0YS10YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUF1QixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFrRHRELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBbUI7SUFxQmpELFlBQVksSUFBUyxFQUFFLFNBQWUsRUFDbEMsVUFBK0IsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLGFBQXNCLElBQUksRUFDdEUsV0FBb0IsS0FBSyxFQUFFLFVBQWUsRUFBRSxFQUFFLFVBQVUsR0FBRyxDQUFDO1FBQzVELEtBQUssRUFBRSxDQUFDO1FBdEJMLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFLWCxlQUFVLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFJYixtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3hDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFNNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUs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QyxDQUFDLEVBQUUsQ0FBQztRQUM3RSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgcGx1Y2ssIHNoYXJlLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gICAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVNYXRUYWJsZUludGVyZmFjZSB7XG4gICAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gICAgc2VhcmNoOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgICBudW1iZXI6IG51bWJlcjtcbiAgICBkYXRhOiBhbnlbXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgZmV0Y2g6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG4gICAgY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICAgIHNvcnQ6IE1hdFNvcnQ7XG4gICAgc29ydEl0OiAoc29ydGlkZWE6IGFueSkgPT4gdm9pZDtcbiAgICBmaWx0ZXI6IChteUZpbHRlcjogYW55KSA9PiB2b2lkO1xuICAgIGZpbHRlckRhdGE6IChkYXRhOiBhbnksIGZpbHRlcjogYW55KSA9PiB2b2lkXG4gICAgZmlsdGVyRGF0ZTogKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpID0+IHZvaWQ7XG4gICAgc2V0RGF0YTogKGRhdGE6IEFycmF5PGFueT4pID0+IHZvaWQsXG4gICAgcGFnZU51bWJlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XG4gICAgc3RhcnRXaXRoOiBudW1iZXI7XG4gICAgcGFnZUZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gICAgcGFnZUZpbHRlckRhdGU6IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckRhdGVJbnRlcmZhY2Uge1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIHZhbHVlU3RhcnQ6IERhdGU7XG4gICAgdmFsdWVFbmQ6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcmVNYXRUYWJsZSBleHRlbmRzIERhdGFTb3VyY2U8RWxlbWVudD4ge1xuICAgIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICBwdWJsaWMgdG90YWxFbGVtZW50cyA9IDA7XG4gICAgcHVibGljIG51bWJlciA9IDA7XG4gICAgcHVibGljIHNpemU6IGFueTtcbiAgICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgICBwdWJsaWMgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgcGFnZU51bWJlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4obnVsbCk7XG4gICAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gICAgcHJpdmF0ZSBwYWdlU29ydDogQmVoYXZpb3JTdWJqZWN0PFNvcnQ+O1xuICAgIHB1YmxpYyBwYWdlRmlsdGVyOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgICBwdWJsaWMgcGFnZUZpbHRlckRhdGU6IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPjtcbiAgICBwcml2YXRlIF90b3RhbEVsZW1lbnRzID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcbiAgICBwdWJsaWMgc2VhcmNoOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcbiAgICBwcml2YXRlIGVtcHR5Um93ID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBmaWx0ZXJUYWJsZSA9IHt9O1xuICAgIHByaXZhdGUgZGF0YUFmdGVyU2VhcmNoO1xuICAgIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIHNvcnRSdWxlczogU29ydCxcbiAgICAgICAgcmFuZ2VSdWxlczogRmlsdGVyRGF0ZUludGVyZmFjZSwgc2l6ZSA9IDIwLCBkZXRhaWxSYXdzOiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgZW1wdHlSb3c6IGJvb2xlYW4gPSBmYWxzZSwgZmlsdGVyVDogYW55ID0ge30sIHN0YXJ0c3dpdGggPSAwKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhcnRXaXRoID0gc3RhcnRzd2l0aDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5kYXRhID0gWy4uLmRhdGFdO1xuICAgICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IFtdO1xuICAgICAgICB0aGlzLmJhY2tVcERhdGEgPSBbLi4uZGF0YV07XG4gICAgICAgIC8vdGhpcy50b3RhbEVsZW1lbnRzID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuZW1wdHlSb3cgPSBlbXB0eVJvdztcbiAgICAgICAgdGhpcy5maWx0ZXJUYWJsZSA9IGZpbHRlclQ7XG4gICAgICAgIHRoaXMucGFnZVNvcnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNvcnQ+KHNvcnRSdWxlcyk7XG4gICAgICAgIHRoaXMucGFnZUZpbHRlckRhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+KG51bGwpO1xuICAgICAgICB0aGlzLnBhZ2VGaWx0ZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xuICAgICAgICAvLyAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4gdGhpcy50b3RhbEVsZW1lbnRzID0gcGFnZSk7XG5cbiAgICAgICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5zZWFyY2gucGlwZShcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKHNlYXJjaCA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5zdGFydFdpdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKHRoaXMuc29ydERhdGEodGhpcy5fc2VhcmNoKHNlYXJjaCwgdGhpcy5maWx0ZXJEYXRhKHRoaXMuZmlsdGVyRGF0ZVJhbmdlKHRoaXMuZGF0YSwgcmFuZ2UpLCBmaWx0ZXIpKSwgc29ydEFjdGlvbiksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApKSkpKSk7XG4gICAgICAgIHRoaXMucGFnZU51bWJlci5uZXh0KHRoaXMuc3RhcnRXaXRoKVxuICAgIH1cblxuICAgIGZpbHRlckRhdGVSYW5nZShkYXRhOiBhbnksIHJhbmdlOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoICYmIHJhbmdlICYmIHJhbmdlLmFjdGl2ZSAmJiAoKHJhbmdlLnZhbHVlRW5kICYmIHJhbmdlLnZhbHVlU3RhcnQpIHx8IChyYW5nZS52YWx1ZUVuZCAmJiAhcmFuZ2UudmFsdWVTdGFydCkgfHwgKCFyYW5nZS52YWx1ZUVuZCAmJiByYW5nZS52YWx1ZVN0YXJ0KSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvbmRlcmF0aW9uKHN0cjogc3RyaW5nLCBzZWFyY2hLZXk6IHN0cmluZykge1xuICAgICAgICBsZXQgc3RhY2s6IHN0cmluZ1tdID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBwb25kOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBzIG9mIHN0YWNrKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBzO1xuICAgICAgICAgICAgaWYgKHNlYXJjaCAmJiBzZWFyY2guaW5jbHVkZXMoc2VhcmNoS2V5KSkge1xuICAgICAgICAgICAgICAgIHBvbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9uZDtcbiAgICB9XG5cbiAgICBmaWx0ZXJEYXRhKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgZmlsdGVyLmlucHV0U2VhcmNoO1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmlsdGVyRGF0YU9iamVjdChkYXRhLCBmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoKGZpbHRlciwgZGF0YSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCAnICcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFSYXc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgJyAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBmaWx0ZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJykuZmlsdGVyKChlKSA9PiBlICYmIGUgIT09ICcnKTtcbiAgICAgICAgICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayBvZiBzdGFjaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wb25kICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnBvbmQgPj0gMSAmJiBjb21iaW5hdGlvbiA9PT0gc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCA+IDApKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9ybWF0Q2hhcmFjdGVycyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGV4dCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcnKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJEYXRhT2JqZWN0KGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCAmJiBmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJbU3RyaW5nKGtleSldKSAmJiAoZmlsdGVyW1N0cmluZyhrZXkpXS5pbmNsdWRlcyhlW1N0cmluZyhrZXkpXSkgfHwgZmlsdGVyW1N0cmluZyhrZXkpXS5sZW5ndGggPT09IDApIHx8IHRoaXMuZm9ybWF0Q2hhcmFjdGVycyhmaWx0ZXJbU3RyaW5nKGtleSldKSA9PT0gdGhpcy5mb3JtYXRDaGFyYWN0ZXJzKGVbU3RyaW5nKGtleSldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZS5wb25kICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZS5wb25kID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vaWYgKGUucG9uZCkge1xuICAgICAgICAgICAgICAgIGlmIChvaykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICAgICAgLy8gIHRoaXMucGFnZU51bWJlci5uZXh0KDApO1xuICAgIH1cblxuICAgIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgICAgIGlmIChzb3J0QWN0aW9uLmRpcmVjdGlvbiAhPT0gJycgJiYgZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKGFbc29ydEFjdGlvbi5hY3RpdmVdLCBiW3NvcnRBY3Rpb24uYWN0aXZlXSwgc29ydEFjdGlvbi5kaXJlY3Rpb24gPT09ICdhc2MnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYXJlKGE6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBiOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgaXNBc2M6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICBhID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIGIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA+ICgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkpID8gMSA6IDApICogKGlzQXNjID8gLTEgOiAxKSk7XG4gICAgfVxuXG4gICAgZmV0Y2gocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZU51bWJlci5uZXh0KHBhZ2UpO1xuICAgIH1cblxuICAgIHNvcnRJdChzb3J0aWRlYTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0aWRlYSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKG15RmlsdGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKG15RmlsdGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlRmlsdGVyLm5leHQobXlGaWx0ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyRGF0ZShkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUocGx1Y2soJ2NvbnRlbnQnKSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzbGljZShkYXRhOiBhbnlbXSwgc3RhcnQ6IG51bWJlciA9IDAsIGVuZDogbnVtYmVyID0gMjAsIGRldGFpbFJvdzogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xuICAgICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQoZGF0YS5sZW5ndGgpO1xuICAgICAgICBjb25zdCByb3dzID0gZGF0YS5sZW5ndGggPyBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKSA6IFtdO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG59XG4iXX0=