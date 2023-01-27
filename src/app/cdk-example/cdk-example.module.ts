import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdkTreeComponent } from './cdk-tree/cdk-tree.component';
import { CdkFormComponent } from './cdk-form/cdk-form.component';
import { CdkExampleComponent } from './cdk-example.component';
import { TableComponent } from './table/table.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        CdkTableModule,
        MatTreeModule,
        MatIconModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        CdkExampleComponent,
        CdkTreeComponent,
        CdkFormComponent,
        TableComponent
    ],
    exports: [ ]
})
export class CdkExampleModule { }
