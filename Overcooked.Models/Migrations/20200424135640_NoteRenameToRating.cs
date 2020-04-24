using Microsoft.EntityFrameworkCore.Migrations;

namespace Overcooked.Models.Migrations
{
    public partial class NoteRenameToRating : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Note",
                table: "Recipes");

            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "Recipes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Recipes");

            migrationBuilder.AddColumn<int>(
                name: "Note",
                table: "Recipes",
                type: "int",
                nullable: true);
        }
    }
}
