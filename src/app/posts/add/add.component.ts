import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from 'src/app/auth.service'
import {Post} from 'src/app/shared/post.service'
import {PostService} from 'src/app/shared/post.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input() authService: AuthService;

  userName: string = '';
  userPlace: string = '';
  userPhoto: string = '';
  img: string = '';

  posts: Post [] = this.postService.posts;
  constructor(public postService: PostService) { }

  
  ngOnInit(): void {
  }

  generatePost(/* userName: string, userPlace: string, userPhoto: string, img: string = '' */) {
    console.log(this.userName)
    console.log(this.userPlace)
    console.log(this.userPhoto)
    console.log(this.img)
    this.posts.push(this.userName, this.userPlace, this.userPhoto, this.posts.length + 1, 0, this.img, false, [] )
    //this.posts.push(this.userName, this.userPlace, this.userPhoto, this.posts.length + 1, 0, this.img, false, [] )
  }

}
