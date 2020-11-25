import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'
import {AuthService} from 'src/app/auth.service'
import {PostService} from 'src/app/shared/post.service'
import {Post} from 'src/app/shared/post.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {


  @Input() LoginComponent: LoginComponent;

  constructor(public authService: AuthService, public postService: PostService) { }

  posts: Post [] = this.postService.posts;

  addComment() {
    this.authService.addComponent();
  }

}
