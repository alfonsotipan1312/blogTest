using BaseContext.Data.Db;
using BlogDominio.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogRepositorio.Repositorio
{

    public class RepositorioPost : IRepositorioPost
    {
        private readonly BaseBlogContext _dbContext;

        public RepositorioPost(BaseBlogContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void ActualizarPost(Post post)
        {

            _dbContext.Entry(post).State = EntityState.Modified;
            Grabar();
        }

        public void EliminarPost(int postId)
        {
            var product = _dbContext.Post.Find(postId);
            _dbContext.Post.Remove(product);
            Grabar();
        }

        public void Grabar()
        {
            _dbContext.SaveChanges();
        }

        public IEnumerable<Post> ObtenerListaPost()
        {
            return _dbContext.Post.ToList();
        }

        public Post ObtenerListaPostByID(int postId)
        {
            return _dbContext.Post.Find(postId);
        }

        public void RegistrarPost(Post post)
        {
            _dbContext.Add(post);
            Grabar();
        }
    }
}
