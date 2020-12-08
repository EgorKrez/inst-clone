import { Component, Input, ChangeDetectorRef } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'
import {AuthService} from 'src/app/auth.service'
import {PostService} from 'src/app/shared/post.service'
import {Post} from 'src/app/shared/post.service'
import { from } from 'rxjs';

const numbOfPosts: number = 3;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent {

  public paginationStep: number = 0;
  public a: Post [] = this.postService.posts.slice(0, numbOfPosts + this.paginationStep);

  @Input() LoginComponent: LoginComponent;

  constructor(public authService: AuthService, public postService: PostService, private changeDetector: ChangeDetectorRef ) {
    this.changeDetector.markForCheck()
   }

  posts: Post [] = this.postService.posts;

  addComment() {
    this.authService.addComponent();
  }
  
  pagination() {
    this.paginationStep +=3;  
    this.a = this.postService.posts.slice(0, this.paginationStep + numbOfPosts);
    console.log(this.a)
  }
  }


