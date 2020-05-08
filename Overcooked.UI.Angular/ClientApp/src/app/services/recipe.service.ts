import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * GET recipes from the server.
   */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('api/v1/recipe');
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`api/v1/recipe/${id}`);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    console.log(recipe);
    return this.http.put("api/v1/recipe", recipe, this.httpOptions);
  }
}
