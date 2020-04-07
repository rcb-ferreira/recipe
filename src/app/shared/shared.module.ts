import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FeatureModule } from '../feature/feature.module';

const shared = [CoreModule, FeatureModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...shared
  ],
  exports: [
    ...shared
  ]
})
export class SharedModule { }
