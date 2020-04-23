using System;
using System.Collections.Generic;
using System.Text;

namespace Overcooked.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? SeasonStart { get; set; }
        public DateTime? SeasonEnd { get; set; }
        public UnitsMesure? UnitsMesure { get; set; }

        public ICollection<RecipeXIngredient> RecipesXIngredient { get; set; }
    }
}
