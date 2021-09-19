import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaPostService } from './lista-post.service';
import { Post } from '../modelos/post.model';
import { CommonService } from '../service/common.service';
import { AgregarPostLocalService } from '../agregar-post-local/agregar-post-local.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css'],
  providers: [ListaPostService, AgregarPostLocalService]
})
export class ListaPostComponent implements OnInit {

  /*
  postTotal: number;
  pagina: number;
  paginaAnterior: number;
  presentarPaginacion: boolean;
*/
  public posts: any;

  constructor(private listaPostService: ListaPostService, private commonService: CommonService, private agregarPostLocalService: AgregarPostLocalService) {

  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

    this.commonService.postAddedRem_Observable.subscribe(res => {
      this.getAllPost();
    });

  }



  getAllPost() {
    this.listaPostService.obtenerPost().subscribe(resultadoRemoto => {
      console.log('resultado ', resultadoRemoto);
      this.posts = resultadoRemoto;

      const datos = this.agregarPostLocalService.getPostLocales();

      this.posts.push(...datos);


      /* esto es para paginar, pero el rest debe tener paginacion
        if (this.posts.length > 0 ){
          this.presentarPaginacion = true;
          this.pagina =1;
          this.paginaAnterior =1;
          this.postTotal = this.posts.length;
        }
        else{
          this.presentarPaginacion = false;
        }
        */

      /*let postLocales = this.listaPostService.obtenerPostLocal();
      this.posts.push(...postLocales);
*/
    });
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
    console.log('el post es ', post);
  }

}
