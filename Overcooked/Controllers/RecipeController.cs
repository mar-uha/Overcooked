using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Overcooked.DAL;
using Overcooked.Models;

namespace Overcooked.API.Controllers
{
    public class RecipeController : Controller
    {
        readonly RecipeRepository recipeRepository = new RecipeRepository();

        // GET: Recipe
        [HttpGet]
        [Route("api/v1/recipe")]
        public IEnumerable<Recipe> Index()
        {
            return recipeRepository.GetRecipes();
        }

        // GET: Recipe/5
        [HttpGet]
        [Route("api/v1/recipe/{id}")]
        public Recipe Details(int id)
        {
            return recipeRepository.GetRecipe(id);
        }

        // POST: Recipe
        [HttpPost]
        [Route("api/v1/recipe")]
        public int Create(Recipe recipe)
        {
            return recipeRepository.AddRecipe(recipe);
        }

        // PUT: Recipe/5
        [HttpPut]
        [Route("api/v1/recipe")]
        public int Edit(Recipe recipe)
        {
            return recipeRepository.UpdateRecipe(recipe);
        }

        // DELETE: Recipe/5
        [HttpDelete]
        [Route("api/v1/recipe/{id}")]
        public int Delete(int id)
        {
            return recipeRepository.DeleteRecipe(id);
        }
    }
}