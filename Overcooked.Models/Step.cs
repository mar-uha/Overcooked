using System;
using System.Collections.Generic;
using System.Text;

namespace Overcooked.Models
{
    public class Step
    {
        public int Id { get; set; }
        public int Ordre { get; set; }
        public string Instruction { get; set; }

        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}
