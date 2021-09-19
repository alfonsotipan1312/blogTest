using BlogDominio.Entidades;
using BlogRepositorio.Repositorio;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BlogServicio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IRepositorioPost _repositorioPost;

        public BlogController(IRepositorioPost repositorioPost)
        {
            _repositorioPost = repositorioPost;
        }

        [HttpGet]
        public IActionResult ObtenerListaPost()
        {
            var products = _repositorioPost.ObtenerListaPost();
            return new OkObjectResult(products);
        }

        [HttpGet("{id}", Name = "ObtenerListaPost")]
        public IActionResult ObtenerListaPostByID(int id)
        {
            var product = _repositorioPost.ObtenerListaPostByID(id);
            return new OkObjectResult(product);
        }

        [HttpPost]
        public IActionResult RegistrarPost([FromBody] Post post)
        {
            using (var scope = new TransactionScope())
            {
                _repositorioPost.RegistrarPost(post);
                scope.Complete();
                return CreatedAtAction(nameof(ObtenerListaPost), new { id = post.Id }, post);
            }
        }

        [HttpPut]
        public IActionResult ActualizarPost([FromBody] Post post)
        {
            if (post != null)
            {
                using (var scope = new TransactionScope())
                {
                    _repositorioPost.ActualizarPost(post);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarPost(int id)
        {
            _repositorioPost.EliminarPost(id);
            return new OkResult();
        }
    }
}
