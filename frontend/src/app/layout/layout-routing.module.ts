import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
//import { OrganigramComponent } from './layout/organigram/organigram.component';
//import { DocumentMasterComponent } from './layout/document-master/document-master.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
        /*children: [
            { path: '', component: OrganigramComponent },
            { path: 'document-master', component: DocumentMasterComponent }
        ]*/
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}