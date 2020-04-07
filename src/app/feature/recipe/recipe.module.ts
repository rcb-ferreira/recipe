import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [RecipeComponent, ListComponent, AddComponent, EditComponent, DetailComponent],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
