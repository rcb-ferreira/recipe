import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListAddComponent } from './shopping-list-add/shopping-list-add.component';

const shared = [
  ShoppingListComponent,
  ShoppingListItemComponent,
  ShoppingListEditComponent,
  ShoppingListAddComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: shared,
  declarations: shared,
})
export class ShoppingListModule { }
