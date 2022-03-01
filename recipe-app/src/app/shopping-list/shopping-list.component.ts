import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public Ingredients: Ingredient[] = [];

  constructor() { 
    this.Ingredients.push(
       new Ingredient('Apple', 5)
      ,new Ingredient('Tomato', 10)
    );
  }

  ngOnInit(): void {
  }

}
