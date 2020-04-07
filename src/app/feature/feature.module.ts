import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModule } from './recipe/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RecipeModule,
    ShoppingListModule
  ]
})
export class FeatureModule { }
