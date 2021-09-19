using BlogDominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogRepositorio.Repositorio
{
    public interface IRepositorioPost
    {
        IEnumerable<Post> ObtenerListaPost();
        Post ObtenerListaPostByID(int postId);
        void RegistrarPost(Post Post);
        void EliminarPost(int postId);
        void ActualizarPost(Post post);
        void Grabar();
    }
}
