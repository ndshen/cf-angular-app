import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent {
  postForm = this.fb.group({
    title: [''],
    author: [''],
    content: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<AddPostDialogComponent>,
    private fb: FormBuilder
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSubmitClick(): void {
    console.log('hi');
    this.dialogRef.close(true);
  }
}
