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

        // GET: /api/v1/recipe
        [HttpGet]
        [Route("api/v1/recipe")]
        public IEnumerable<Recipe> Index()
        {
            return recipeRepository.GetRecipes();
        }

        // GET: /api/v1/recipe/5
        [HttpGet]
        [Route("api/v1/recipe/{id}")]
        public Recipe Details(int id)
        {
            return recipeRepository.GetRecipe(id);
        }

        // POST: /api/v1/recipe
        [HttpPost]
        [Route("api/v1/recipe")]
        public int Create(Recipe recipe)
        {
            return recipeRepository.AddRecipe(recipe);
        }

        // PUT: /api/v1/recipe
        [HttpPut]
        [Route("api/v1/recipe")]
        public int Edit([FromBody]Recipe recipe)
        {
            return recipeRepository.UpdateRecipe(recipe);
        }

        // DELETE: /api/v1/recipe/5
        [HttpDelete]
        [Route("api/v1/recipe/{id}")]
        public int Delete(int id)
        {
            return recipeRepository.DeleteRecipe(id);
        }
    }
}