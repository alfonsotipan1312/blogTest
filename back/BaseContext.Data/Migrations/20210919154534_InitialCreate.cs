using Microsoft.EntityFrameworkCore.Migrations;

namespace BlogBaseDatos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Articulo",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Estado = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articulo", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Post",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titulo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Tipo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fecha = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Post", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Articulo",
                columns: new[] { "ID", "Descripcion", "Estado", "Nombre" },
                values: new object[] { 1, "Articulo para la Manana", "A", "Matutino" });

            migrationBuilder.InsertData(
                table: "Articulo",
                columns: new[] { "ID", "Descripcion", "Estado", "Nombre" },
                values: new object[] { 2, "Articulo de Deportes", "A", "Deportivo" });

            migrationBuilder.InsertData(
                table: "Articulo",
                columns: new[] { "ID", "Descripcion", "Estado", "Nombre" },
                values: new object[] { 3, "Articulo de Noticias", "A", "Noticias" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Articulo");

            migrationBuilder.DropTable(
                name: "Post");
        }
    }
}
