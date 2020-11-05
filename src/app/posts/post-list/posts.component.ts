import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../app.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  @Input() posts: Post;

  constructor() { }

}
