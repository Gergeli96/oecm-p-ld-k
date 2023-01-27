import { Component } from '@angular/core';
import { Table } from 'primeng/table';

export interface Car {
    vin: string
    year: number
    brand: string
    color: string
}

const years = new Array(30).fill(1990).map((_, i) => _ + i)
const brands = ['opel', 'toyota', 'mazda', 'honda', 'fiat', 'seat', 'renault', 'lancia', 'skoda']
const colors = [ 'red', 'blue', 'yellow', 'grey', 'white', 'black']

@Component({
    selector: 'app-primeng-table',
    templateUrl: './primeng-table.component.html',
    styleUrls: ['./primeng-table.component.scss']
})
export class PrimengTableComponent {
    public cols = [
        // { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
    public cars: Car[] = new Array(1000).fill(0).map((_, index) => {
        return {
            id: index + 1,
            vin: '',
            year: this.getRandomElementFromArr(years),
            brand: this.getRandomElementFromArr(brands),
            color: this.getRandomElementFromArr(colors)
        }
    })

    constructor() { }


    private getRandomElementFromArr(data: any[]): any {
        return data[Math.floor(Math.random() * data.length)] || data[0]
    }

    clear(table: Table) {
        table.clear();
    }

    filterGlobal(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }
}
