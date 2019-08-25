import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DocumentMasterComponent } from './components/document-master/document-master.component';
import { DocumentCreateComponent } from './components/document-create/document-create.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create', component:  DocumentCreateComponent},
  /* wildcard*/
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [LoginComponent,NotFoundComponent, DocumentCreateComponent];
