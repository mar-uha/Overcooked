import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../services/recipe.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  /**
   * @private
   */
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => {
      this.recipeForm = this.formBuilder.group({
        id: [recipe.id],
        title: [recipe.title],
        rating: [recipe.rating],
        price: [recipe.price],
        numberOfPeople: [recipe.numberOfPeople],
        preparationTime: [recipe.preparationTime],
        cookingTime: [recipe.cookingTime],
        dishType: [recipe.dishType],
        difficulty: [recipe.difficulty]
      });
    });
  }

  onSubmit(): void {
    console.log(this.recipeForm.value);
    const recipe = this.recipeForm.value;
    this.recipeService.updateRecipe(recipe).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
