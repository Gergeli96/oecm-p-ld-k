import DataSource from 'devextreme/data/data_source';
import { Service } from 'src/app/app.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dev-express-table',
    templateUrl: './dev-express-table.component.html',
    styleUrls: ['./dev-express-table.component.scss'],
    providers: [Service]
})
export class DevExpressTableComponent {
    public dataSource: DataSource
    public collapsed = false

    constructor(service: Service) {
        this.dataSource = service.getDataSource()
    }

    contentReady = (e: any) => {
        if (!this.collapsed) {
            this.collapsed = true;
            e.component.expandRow(['EnviroCare']);
        }
    }

    customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` })
}
