import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { NgModule } from '@angular/core';

import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { PrimengTreeComponent } from './primeng-tree/primeng-tree.component';
import { PrimengFormComponent } from './primeng-form/primeng-form.component';
import { PrimengExampleComponent } from './primeng-example.component';


@NgModule({
    imports: [
		RadioButtonModule,
        InputTextModule,
		CheckboxModule,
		ButtonModule,
        RippleModule,
        CommonModule,
        TableModule,
        FormsModule,
        TreeModule
    ],
    declarations: [
        PrimengExampleComponent,
        PrimengTableComponent,
        PrimengTreeComponent,
        PrimengFormComponent
    ]
})
export class PrimengExampleModule { }
