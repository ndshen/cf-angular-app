import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent {
  postForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    content: ['', Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<AddPostDialogComponent>,
    private postService: PostsService,
    private fb: FormBuilder
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSubmitClick(): void {
    if (this.postForm.status === 'VALID') {
      this.postService.addPost(this.postForm.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}
