import { Component } from '@angular/core';

@Component({
    selector: 'app-kendo-tree',
    templateUrl: './kendo-tree.component.html',
    styleUrls: ['./kendo-tree.component.scss']
})
export class KendoTreeComponent {
    public expandedKeys: any[] = ["0", "1"]
    public checkedKeys: any[] = ["0_1"]
    public data: any[] = [
        {
            text: "Furniture",
            items: [
                { text: "Tables & Chairs" },
                { text: "Sofas" },
                { text: "Occasional Furniture" },
            ],
        },
        {
            text: "Decor",
            items: [
                { text: "Bed Linen" },
                { text: "Curtains & Blinds" },
                { text: "Carpets" },
            ],
        },
    ]
}
