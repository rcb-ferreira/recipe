import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RecipeModule
  ]
})
export class FeatureModule { }
