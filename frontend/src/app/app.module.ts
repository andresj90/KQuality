import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module'; 
import { MaterialCustomModule } from './sharedModule/materialCustom';


/* Components */
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/components/nav-bar/nav-bar.component';
import { LateralPanelComponent } from './layout/components/lateral-panel/lateral-panel.component';
import { FooterComponent } from './layout/components/footer/footer.component';
 

/*Services */
import { CompanyCRUDService } from './services/company-crud.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LateralPanelComponent,
    FooterComponent,
    RoutingComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialCustomModule
  ],
  providers: [
    CompanyCRUDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
