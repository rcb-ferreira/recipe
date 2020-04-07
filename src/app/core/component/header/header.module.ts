import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

const shared = [HeaderComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: shared,
  declarations: shared,
})
export class HeaderModule { }
