import { DxBulletModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxNumberBoxModule, DxSelectBoxModule, DxTemplateModule, DxTreeViewModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DecExpressExampleComponent } from './dec-express-example.component';
import { DevExpressTableComponent } from './dev-express-table/dev-express-table.component';
import { DevExpressTreeComponent } from './dev-express-tree/dev-express-tree.component';
import { DevExpressFormComponent } from './dev-express-form/dev-express-form.component';

@NgModule({
    imports: [
        DxButtonModule,
        CommonModule,
        DxDataGridModule,
        DxTemplateModule,
        DxTreeViewModule,
        DxBulletModule,
        DxCheckBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxFormModule,
    ],
    declarations: [
        DecExpressExampleComponent,
        DevExpressTableComponent,
        DevExpressTreeComponent,
        DevExpressFormComponent
    ],
})
export class DecExpressExampleModule { }
