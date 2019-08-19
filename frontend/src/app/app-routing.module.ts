import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrganigramComponent } from './layout/organigram/organigram.component';
import { DocumentMasterComponent } from './layout/document-master/document-master.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  /* wildcard*/
  { path: 'organigram', component: OrganigramComponent },
  { path: 'document-master', component: DocumentMasterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [LoginComponent,NotFoundComponent, OrganigramComponent, DocumentMasterComponent];
