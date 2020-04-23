using Microsoft.EntityFrameworkCore;
using Overcooked.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Overcooked.DAL
{
    public class RecipeRepository
    {
        readonly OvercookedContext db = new OvercookedContext();

        public IEnumerable<Recipe> GetRecipes()
        {
            try
            {
                return db.Recipes.ToList();
            }
            catch
            {
                throw;
            }
        }

        /// <summary>
        /// To Add new recipe record
        /// </summary>
        /// <param name="recipe"></param>
        /// <returns></returns>
        public int AddRecipe(Recipe recipe)
        {
            try
            {
                db.Recipes.Add(recipe);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        /// <summary>
        /// To Update the records of a particluar recipe.
        /// </summary>
        /// <param name="recipe"></param>
        /// <returns></returns>
        public int UpdateRecipe(Recipe recipe)
        {
            try
            {
                db.Entry(recipe).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        /// <summary>
        /// Get the details of a particular recipe.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Recipe GetRecipe(int id)
        {
            try
            {
                Recipe recipe = db.Recipes.Find(id);
                return recipe;
            }
            catch
            {
                throw;
            }
        }

        /// <summary>
        /// To Delete the record of a particular recipe.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int DeleteRecipe(int id)
        {
            try
            {
                Recipe recipe = db.Recipes.Find(id);
                db.Recipes.Remove(recipe);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }
}
