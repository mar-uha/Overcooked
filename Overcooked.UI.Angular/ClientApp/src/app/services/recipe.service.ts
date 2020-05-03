import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * GET recipes from the server.
   */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>("api/v1/recipe");
  }
}
