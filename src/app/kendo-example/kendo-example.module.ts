import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { GridModule } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KendoTableComponent } from './kendo-table/kendo-table.component';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';
import { KendoFormComponent } from './kendo-form/kendo-form.component';
import { KendoExampleComponent } from './kendo-example.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        DateInputsModule,
        TreeViewModule,
        CommonModule,
        InputsModule,
        FormsModule,
        LabelModule,
        GridModule
    ],
    declarations: [
        KendoExampleComponent,
        KendoTableComponent,
        KendoTreeComponent,
        KendoFormComponent
    ]
})
export class KendoExampleModule { }
