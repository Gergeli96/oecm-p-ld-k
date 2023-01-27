import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { process } from "@progress/kendo-data-query"
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const products = ['alma', 'korte', 'banan', 'szilva', 'barack', 'meggy', 'kiwi', 'dinnye']

export interface IKendoData { ProductID: number, UnitPrice: number, Discontinued: boolean, Name: string }

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private gridData: IKendoData[] =
        new Array(1000).fill(0).map((_, index) => {
            return {
                ProductID: index + 1,
                UnitPrice: Math.round(Math.random() * 10000000),
                Discontinued: Math.round(Math.random() * 10) % 2 == 0,
                Name: products[Math.floor(Math.random() * products.length)] || 'eper'
            }
        })

    constructor() { }

    public getProducts(skip: number, pageSize: number, sortDescriptor: SortDescriptor[], filterTerm: number | null): Observable<GridDataResult> {
        let a: GridDataResult = { data: this.gridData.slice(skip, skip + pageSize), total: 1000 }
        return of(a)
    }

    public filter(value: string, skip: number, pageSize: number): Observable<GridDataResult> {
        let filteredData = this.gridData.filter((x) => x.Name.toLowerCase().includes(value))
        let a: GridDataResult = { data: filteredData.slice(skip, skip + pageSize), total: 1000 }
        return of(a)
    }

    public onFilter(inputValue: string): GridDataResult {
        return process(this.gridData, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: "Name",
                        operator: "contains",
                        value: inputValue,
                    },
                    // {
                    //     field: "UnitPrice",
                    //     operator: "equal",
                    //     value: inputValue,
                    // }
                ],
            },
        })
    }
}
