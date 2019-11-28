import { NgModule } from '@angular/core';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DocumentMasterComponent } from './components/document-master/document-master.component';
import { DocumentCreateComponent } from './components/document-create/document-create.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CompanyRolComponent } from './components/company-rol/company-rol.component';
import { RolSystemComponent } from './components/rol-system/rol-system.component';
import { ApproveDocumentComponent } from './components/approve-document/approve-document.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewAreaComponent } from './components/view-area/view-area.component';
import { ViewRolSComponent } from './components/view-rol-s/view-rol-s.component';
import { ViewRolCComponent } from './components/view-rol-c/view-rol-c.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ProcessComponent } from './components/process/process.component';



const routes: Routes = [
  // { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'area', component: CompanyAreaComponent },
  { path: 'document', component: DocumentCreateComponent },
  { path: 'user', component: CreateUserComponent },
  { path: 'documents', component: DocumentMasterComponent },
  { path: 'companyrole', component: CompanyRolComponent },
  { path: 'systemrole', component: RolSystemComponent },
  { path: 'approvedocument', component: ApproveDocumentComponent },
  { path: 'viewArea', component: ViewAreaComponent },
  { path: 'viewRolS', component: ViewRolSComponent },
  { path: 'viewRolC', component: ViewRolCComponent },
  { path: 'viewUser', component: ViewUserComponent },
  { path: 'viewDoc', component: ViewDocumentComponent },
   {path:'loginauth', component:AuthPageComponent},
  { path: 'process', component: ProcessComponent },
  /* wildcard*/
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
  RoutingComponent = [LoginComponent, NotFoundComponent, DocumentCreateComponent, DocumentMasterComponent,
    CompanyAreaComponent, CompanyRolComponent, CompanyRolComponent, CreateUserComponent, RolSystemComponent,
    ApproveDocumentComponent, ProcessComponent,
    ViewDocumentComponent, ViewUserComponent, ViewRolCComponent, ViewRolSComponent]; 
