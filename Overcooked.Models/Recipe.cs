using System;
using System.Collections.Generic;
using System.Text;

namespace Overcooked.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int? Note { get; set; }
        public decimal? Price { get; set; }
        public int NumberOfPeople { get; set; }
        public int? PreparationTime { get; set; }
        public int? CookingTime { get; set; }
        public DishType DishType { get; set; }
        public int? Difficulty { get; set; }

        public ICollection<Step> Steps { get; set; }
        public ICollection<RecipeXIngredient> RecipeXIngredients { get; set; }
    }
}
