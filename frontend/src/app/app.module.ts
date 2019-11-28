
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module'; 
import { MaterialCustomModule } from './sharedModule/materialCustom';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

/* Components */
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LateralPanelComponent } from './components/lateral-panel/lateral-panel.component';
import { FooterComponent } from './components/footer/footer.component';
 

/*Services */
import { CompanyCRUDService } from './services/company-crud.service';
import { DocumentCreateComponent } from './components/document-create/document-create.component';
import { DocumentCRUDService } from './services/document-crud.service';
import { FileInputValueAccessor } from './directives/file-input-value-accessor.directive';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { UserCRUDService } from './services/user-crud.service';
import { ViewAreaComponent } from './components/view-area/view-area.component';
import { ViewRolSComponent } from './components/view-rol-s/view-rol-s.component';
import { ViewRolCComponent } from './components/view-rol-c/view-rol-c.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { ApproveDocumentComponent } from './components/approve-document/approve-document.component';
import { ProcessComponent } from './components/process/process.component';



export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LateralPanelComponent,
    FooterComponent,
    RoutingComponent,
    DocumentCreateComponent,
    FileInputValueAccessor,
    CompanyAreaComponent,
    ViewAreaComponent,
    ViewRolSComponent,
    ViewRolCComponent,
    ViewUserComponent,
    ViewDocumentComponent,
    LoginTestComponent,
    ApproveDocumentComponent,
    ProcessComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialCustomModule,
    ReactiveFormsModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    CompanyCRUDService,
    DocumentCRUDService,
    UserCRUDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
