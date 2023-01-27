import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ProductService } from 'src/app/product.service';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-kendo-table',
    templateUrl: './kendo-table.component.html',
    styleUrls: ['./kendo-table.component.scss']
})
export class KendoTableComponent {
    public gridItems: Observable<GridDataResult>;
    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: number | null = null;

    constructor(private service: ProductService) {
        this.loadGridItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadGridItems();
    }

    public handleSortChange(descriptor: SortDescriptor[]): void {
        this.sortDescriptor = descriptor;
        this.loadGridItems();
    }

    public onFilter(event: Event): void {
        const value = ((event as InputEvent)?.target as HTMLInputElement).value
        
        // Kézműves
        // this.gridItems = this.service.filter(value, this.skip, this.pageSize)

        // Kendo
        this.gridItems = of(this.service.onFilter(value))
        this.skip = 0
    }

    private loadGridItems(): void {
        this.gridItems = this.service.getProducts(
          this.skip,
          this.pageSize,
          this.sortDescriptor,
          this.filterTerm
        );
    }
}
