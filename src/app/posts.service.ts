import { Injectable } from '@angular/core';
import { Post } from './interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  END_POINT = 'https://general-worker.ping-yao-shen.workers.dev';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.END_POINT);
  }

  addPost(data: Post): Observable<string> {
    return this.http.post<string>(this.END_POINT, data);
  }
}
