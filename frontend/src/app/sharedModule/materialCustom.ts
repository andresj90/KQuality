import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatRadioModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatSidenavModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [materialModules]
})
export class MaterialCustomModule { }
