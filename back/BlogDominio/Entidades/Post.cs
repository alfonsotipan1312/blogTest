using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDominio.Entidades
{
    [Table(nameof(Post))]
    public class Post
    {
        public long Id { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public string Tipo { get; set; }
        public string Fecha { get; set; }
       

        public Post(long id, string titulo, string descripcion, string fecha, string tipo)
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Descripcion = descripcion;
            this.Fecha = fecha;
            this.Tipo = tipo;
        }

        public Post()
        {
        }



    }

}
