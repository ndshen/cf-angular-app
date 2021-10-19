import { Injectable } from '@angular/core';
import { Post } from './interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() {}

  getPosts(): Observable<Post[]> {
    const mockData: Post[] = [
      {
        title: 'Post1',
        author: 'Aiden',
        date: '2018-09-01',
        content: 'Hello World'
      },
      {
        title: 'Post2',
        author: 'Aiden',
        date: '2021-10-18',
        content:
          'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World'
      },
      {
        title: 'Post3',
        author: 'Aiden',
        date: '2021-12-18',
        content: 'Hello World'
      }
    ];

    return of(mockData);
  }
}
