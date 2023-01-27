import { DecExpressExampleModule } from './dec-express-example/dec-express-example.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoExampleModule } from './kendo-example/kendo-example.module';
import { CdkExampleModule } from './cdk-example/cdk-example.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { PrimengExampleModule } from './primeng-example/primeng-example.module';

@NgModule({
  imports: [
    DecExpressExampleModule,
    BrowserAnimationsModule,
    KendoExampleModule,
    AppRoutingModule,
    CdkExampleModule,
    BrowserModule,
    GridModule,
    TreeViewModule,
    InputsModule,
    LabelModule,
    DateInputsModule,
    PrimengExampleModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
