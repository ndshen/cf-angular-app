import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { Post } from './interfaces';
import { PostsService } from './posts.service';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cloudflare General Assignment';
  postsList: Post[] = [];

  constructor(private postService: PostsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.updatePosts();
  }

  updatePosts(): void {
    this.postService.getPosts().subscribe((posts) => (this.postsList = posts));
  }

  openAddPostDialog(): void {
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      width: '400px'
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((newPostIsAdded) => newPostIsAdded),
        tap(() => {
          this.updatePosts();
        })
      )
      .subscribe();
  }
}
