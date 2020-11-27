import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service'
import {Post} from 'src/app/shared/post.service'
import {PostService} from 'src/app/shared/post.service'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  userName: string = '';
  userPlace: string = '';
  userPhoto: string = '';
  img: string = '';

  posts: Post [] = this.postService.posts;

  constructor(public authService: AuthService, public postService: PostService) { }


  public newPost: Post = this.postService.posts[this.authService.checkId - 1]

  ngOnInit(): void {
  }

  editPost() {
    if(this.userName != '') this.newPost.userName = this.userName
    if(this.userPlace != '') this.newPost.userPlace = this.userPlace
    if(this.userPhoto != '') this.newPost.userPhoto = this.userPhoto
    if(this.img != '') this.newPost.imagePath = this.img
    this.posts[this.authService.checkId - 1] = this.newPost;
  }

  show() {
    console.log(this.newPost)
  }

  returnToPosts() {
    this.authService.returnToPosts();
  }
}
