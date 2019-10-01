import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatInputModule, MatStepperModule, MatAutocompleteModule} from '@angular/material';
import {MatRadioModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip'; 


const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatSidenavModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatProgressBarModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatTooltipModule
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
