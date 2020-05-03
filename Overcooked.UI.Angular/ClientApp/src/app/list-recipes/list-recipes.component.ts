import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  recipes: Recipe[];

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes)
  }

}
