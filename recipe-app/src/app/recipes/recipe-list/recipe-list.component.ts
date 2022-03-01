import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor() { 
    //Sample recipe
    this.recipes.push(
      new Recipe('Vegan Tacos Sample'
                ,'Super tastey vegan street tacos'
                ,'https://www.acouplecooks.com/wp-content/uploads/2021/01/Tofu-Tacos-023.jpg')
                
      );
  }

  ngOnInit(): void {
  }
}
