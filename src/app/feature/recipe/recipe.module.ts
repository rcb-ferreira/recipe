import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const shared = [RecipeComponent, ListComponent, AddComponent, EditComponent, DetailComponent];
@NgModule({
  imports: [
    CommonModule
  ],
  exports: shared,
  declarations: shared,
})
export class RecipeModule { }
