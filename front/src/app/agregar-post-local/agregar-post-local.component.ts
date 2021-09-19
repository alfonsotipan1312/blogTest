import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../modelos/post.model';
import { CommonService } from '../service/common.service';
import { AgregarPostLocalService } from './agregar-post-local.service';

@Component({
  selector: 'app-agregar-post-local',
  templateUrl: './agregar-post-local.component.html',
  styleUrls: ['./agregar-post-local.component.css'],
  providers: [AgregarPostLocalService]
})
export class AgregarPostLocalComponent implements OnInit {

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
        //update no hay
      } else {

        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        this.post.fecha = `${day}-${month}-${year}`;
        this.post.tipo = "LOCAL";
        this.addPostService.addPostLocal(this.post).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition();
        });
      }
    } else {
      alert('El titulo y la descripción son requeridos');
    }
  }

}
