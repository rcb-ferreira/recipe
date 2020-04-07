import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('Test', 'Simple test', 'https://images.app.goo.gl/Aa6autzYqXtGjh3Q9')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
