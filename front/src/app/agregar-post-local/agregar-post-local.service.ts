import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../modelos/post.model';
import { Observable } from 'rxjs';

function getLocalStorage(): Storage {
	return localStorage;
}

@Injectable()
export class AgregarPostLocalService {

	constructor(private http: HttpClient) {

	}

	get localStorage(): Storage {
		return getLocalStorage();
	}

	addPost(post: Post) {
		return this.http.post('http://localhost:19462/api/Blog', {
			titulo : post.titulo,
			descripcion : post.descripcion,
			fecha : post.fecha,
			tipo : post.tipo
		}, {responseType: 'text'}
		
		)

		
	}

	addPostLocal(post: Post) {
		return new Observable(Observable => {
			const datos = JSON.parse(this.localStorage.getItem('datos'));

			if (datos) {
				datos.push(post);
				const jsonData = JSON.stringify(datos);
				this.localStorage.setItem('datos', jsonData);
			} else {
				const datos = [];
				datos.push(post);
				const jsonData = JSON.stringify(datos);
				this.localStorage.setItem('datos', jsonData);
			}


			Observable.next();
		});

	}

	getPostLocales() {
		const datos = JSON.parse(this.localStorage.getItem('datos'));
		if (!datos) {
			return [];
		}
		return datos;
	}







}