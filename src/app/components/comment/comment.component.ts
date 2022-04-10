import { Component, Input, OnInit } from '@angular/core';
import Comment from '../../models/Comment';

@Component({
  selector: 'app-comment',
  styleUrls: ['./comment.component.scss'],
  template: `
    <div *ngFor="let comment of comments">
      <ul>
       <li>
         {{comment.text}}
         <app-comment [comments]="comment.children" *ngIf="comment.children"></app-comment>
       </li>
      </ul>
    </div>
  `
})
export class CommentComponent implements OnInit {
  @Input() comments: Array<Comment> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
