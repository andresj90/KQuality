
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
import { LoginTestComponent } from './components/login-test/login-test.component';



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
    LoginTestComponent
   
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
