import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DecExpressExampleComponent } from './dec-express-example/dec-express-example.component';
import { PrimengExampleComponent } from './primeng-example/primeng-example.component';
import { KendoExampleComponent } from './kendo-example/kendo-example.component';
import { CdkExampleComponent } from './cdk-example/cdk-example.component';

const routes: Routes = [
    {
        path: '',
        component: CdkExampleComponent
    },
    {
        path: 'devexpress',
        component: DecExpressExampleComponent
    },
    {
        path: 'kendo',
        component: KendoExampleComponent
    },
    {
        path: 'primeng',
        component: PrimengExampleComponent
    },
    {
        path: '**',
        component: CdkExampleComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
