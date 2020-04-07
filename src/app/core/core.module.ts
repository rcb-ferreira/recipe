import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './component/header/header.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderModule
  ]
})
export class CoreModule { }
