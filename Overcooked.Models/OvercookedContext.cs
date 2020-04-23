using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Overcooked.Models
{
    public partial class OvercookedContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<RecipeXIngredient> RecipesXIngredients { get; set; }

        public OvercookedContext()
        {
        }

        public OvercookedContext(DbContextOptions<OvercookedContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Overcooked;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // remove delete on cascade behavior
            var cascadeFKs = modelBuilder.Model.GetEntityTypes()
                                               .SelectMany(t => t.GetForeignKeys())
                                               .Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade);

            foreach (var fk in cascadeFKs)
            {
                fk.DeleteBehavior = DeleteBehavior.Restrict;
            }

            OnModelCreatingPartial(modelBuilder);

            // declare entities
            modelBuilder.Entity<Recipe>();
            modelBuilder.Entity<Step>();
            modelBuilder.Entity<Ingredient>();

            modelBuilder.Entity<RecipeXIngredient>()
                .HasKey(RxI => new { RxI.RecipeId, RxI.IngredientId });
            modelBuilder.Entity<RecipeXIngredient>()
                .HasOne(RxI => RxI.Recipe)
                .WithMany(r => r.RecipeXIngredients)
                .HasForeignKey(RxI => RxI.RecipeId);
            modelBuilder.Entity<RecipeXIngredient>()
                .HasOne(RxI => RxI.Ingredient)
                .WithMany(r => r.RecipesXIngredient)
                .HasForeignKey(RxI => RxI.IngredientId);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
