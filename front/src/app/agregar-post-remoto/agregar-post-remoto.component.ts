import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AgregarPostLocalService } from '../agregar-post-local/agregar-post-local.service';
import { Post } from '../modelos/post.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-agregar-post-remoto',
  templateUrl: './agregar-post-remoto.component.html',
  styleUrls: ['./agregar-post-remoto.component.css'],
  providers: [AgregarPostLocalService]
})
export class AgregarPostRemotoComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post: Post;

  constructor(private addPostService: AgregarPostLocalService, private router: Router, private commonService: CommonService) {
    this.post = new Post();
  }

  ngOnInit() {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
      console.log('post is ', this.post.id);
    });
  }

  addPost() {
    if (this.post.titulo && this.post.descripcion) {
      if (this.post.id) {
        //no hay
      } else {
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        this.post.fecha = `${day}-${month}-${year}`;
        this.post.tipo = "REMOTO";

        this.addPostService.addPost(this.post).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostRemAddition();
        });
      }
    } else {
      alert('El titulo y la descripción son requeridos');
    }
  }

}
