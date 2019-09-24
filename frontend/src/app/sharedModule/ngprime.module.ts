import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ToastModule} from 'primeng/toast';


const ngprime = [
  SlideMenuModule,
  ToastModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngprime
  ],
  exports: [
    ngprime
  ]
})
export class NgprimeModule { }
