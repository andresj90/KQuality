import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideMenuModule} from 'primeng/slidemenu';



const ngprime = [
  SlideMenuModule
]


@NgModule({
  declarations: [],
  imports: [
    ngprime
  ],
  exports: [
    ngprime
  ]
})
export class NgprimeModule { }
