import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service'
import {PostService} from 'src/app/shared/post.service'


@Component({
  selector: 'app-open-post',
  templateUrl: './open-post.component.html',
  styleUrls: ['./open-post.component.scss']
})
export class OpenPostComponent implements OnInit {

  title: string = '';
  showComments: boolean = false;

  constructor(public authService: AuthService, public postService: PostService) { }

  show() {
    console.log(this.postService.posts[this.Id - 1].userName)
  }

  public Id: number = this.authService.checkId;

  ngOnInit(): void {
  }

  like(): void {
    this.postService.posts[this.Id - 1].isLiked =  !this.postService.posts[this.Id - 1].isLiked;
}

addComment() {
  this.postService.posts[this.Id - 1].comments.text.push(this.title)
  this.title = ''
}

deletePost() {
  this.postService.posts.splice(this.Id - 1, 1);
  this.authService.returnToPosts();
  for(let i = this.Id - 1; i < this.postService.posts.length; i++) {
    this.postService.posts[i].id = this.postService.posts[i].id - 1;
  }
}

returnToPosts() {
  this.authService.returnToPosts();
}

editPost(id: number) {
  console.log(id)
  this.authService.editPost(id);
}

comment(): void {
  this.showComments = !this.showComments;
}

}
