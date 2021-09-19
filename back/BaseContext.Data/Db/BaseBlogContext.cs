using BlogDominio.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseContext.Data.Db
{
    public class BaseBlogContext : DbContext
    {
        public DbSet<Post> Post { get; set; }
        public DbSet<Articulo> Articulo { get; set; }

        public BaseBlogContext(DbContextOptions<BaseBlogContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Articulo>().HasData(
                new Articulo
                {
                    ID = 1,
                    Nombre = "Matutino",
                    Descripcion = "Articulo para la Manana",
                    Estado = "A"
                },
                new Articulo
                {
                    ID = 2,
                    Nombre = "Deportivo",
                    Descripcion = "Articulo de Deportes",
                    Estado = "A"
                },
                new Articulo
                {
                    ID = 3,
                    Nombre = "Noticias",
                    Descripcion = "Articulo de Noticias",
                    Estado = "A"
                }
            );
        }

    }
}
