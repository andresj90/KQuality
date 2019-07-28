import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LateralPanelComponent } from './components/lateral-panel/lateral-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/* Creating the router array*/ 

const appRoutes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},  
  /* wildcard*/
  {path: '**', component: NotFoundComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LateralPanelComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes , {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
