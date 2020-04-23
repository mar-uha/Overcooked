using System;
using System.Collections.Generic;
using System.Text;

namespace Overcooked.Models
{
    public class RecipeXIngredient
    {
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }

        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }

        public decimal? Quantity { get; set; }
    }
}
