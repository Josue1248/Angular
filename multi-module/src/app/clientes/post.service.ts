import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  private url = "https://jsonplaceholder.typicode.com/posts"

  getPosts():Observable<Post[]>{
    let posts:Observable<Post[]>;
    posts = this.httpClient
      .get<Post[]>(this.url)
        .pipe(catchError(this.handleError));
    return posts
  }

  addPost(post:Post):Observable<Post>{
    return this.httpClient.post<Post>(this.url, post, httpOptions)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    let mensaje = "Error desconocido";
    // Los errores pueden ser Client Side HTTP 400 o Server Side 500
    if (error.error instanceof ErrorEvent){ // Client-Side Error
      mensaje = `Error: ${error.error.message}`;
    }
    else {
      mensaje = `Error: ${error.status} ${error.message}`;
    }
    return throwError(mensaje);
  }

}
