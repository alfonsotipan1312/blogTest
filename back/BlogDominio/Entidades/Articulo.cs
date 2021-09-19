using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDominio.Entidades
{
    public class Articulo
    {
        public int ID { get; set; }
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public String Estado { get; set; }
    }
}
