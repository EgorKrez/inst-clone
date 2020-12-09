import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service'
import { Post } from 'src/app/shared/post.service'
import { PostService } from 'src/app/shared/post.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public authService: AuthService, public postService: PostService) { }

  public newPost: Post = this.postService.posts[this.authService.checkId - 1]
  public img: string = this.postService.posts[this.authService.checkId - 1].imagePath
  public posts: Post[] = this.postService.posts
  ngOnInit(): void {
  }

  show(id: number) {
    console.log(id)
  }

  openPost(id: number) {
    console.log(id)
    this.authService.openPost(id)
  }

  returnToPosts() {
    this.authService.returnToPosts();
  }

}
