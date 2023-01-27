import { Component, OnInit } from '@angular/core';
import { Product, Service } from 'src/app/app.service';

@Component({
    selector: 'app-dev-express-tree',
    templateUrl: './dev-express-tree.component.html',
    styleUrls: ['./dev-express-tree.component.scss'],
    providers: [Service]
})
export class DevExpressTreeComponent {
    products: Product[];
    currentItem: Product;

    constructor(service: Service) {
        this.products = service.getProducts();
        this.currentItem = this.products[0];
    }

    selectItem(e: any) {
        this.currentItem = e.itemData;
    }
}
