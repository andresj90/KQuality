import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DocumentMasterComponent } from './components/document-master/document-master.component';
import { DocumentCreateComponent } from './components/document-create/document-create.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CompanyRolComponent } from './components/company-rol/company-rol.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'area', component: CompanyAreaComponent },
  { path: 'create', component:  DocumentCreateComponent},
  { path: 'create-user', component:  CreateUserComponent},
  { path: 'list-documents', component:  DocumentMasterComponent},
  { path: 'company-rol', component:  CompanyRolComponent},
  { path: 'rol-level', component:  DocumentMasterComponent},
  /* wildcard*/
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [LoginComponent,NotFoundComponent,DocumentCreateComponent,DocumentMasterComponent, 
  CompanyAreaComponent,CompanyRolComponent];
