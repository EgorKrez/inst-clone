import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth.service'
import { Post } from 'src/app/shared/post.service'
import { PostService } from 'src/app/shared/post.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userName: string = '';
  userPlace: string = '';
  userPhoto: string = '';
  img: string = '';

  posts: Post[] = this.postService.posts;
  constructor(public authService: AuthService, public postService: PostService) { }


  public newPost: Post =
    {
      user: {
        userName: 'No name',
        //userPhoto: 'https://img-17.ccm2.net/D6U8BTHt725j955FrEJc2ELUq9o=/2048x/317e4774e98c48e8a7c26cbcd5651a26/ccm-faq/Incognito_Chrome_0.jpg'},
        userPhoto: 'https://img-17.ccm2.net/D6U8BTHt725j955FrEJc2ELUq9o=/2048x/317e4774e98c48e8a7c26cbcd5651a26/ccm-faq/Incognito_Chrome_0.jpg'
      },
      userPlace: '',
      id: this.posts.length + 1,
      likeCount: 0,
      imagePath: 'https://i2.wp.com/immap.org/wp-content/uploads/2018/06/uknown.jpg?ssl=1',
      isLiked: false,
      comments: { text: [''] }
    };

  ngOnInit(): void {
  }

  generatePost() {
    this.newPost.user.userName = this.userName
    this.newPost.userPlace = this.userPlace
    this.newPost.user.userPhoto = this.userPhoto
    this.newPost.imagePath = this.img
    this.posts.push(this.newPost)
  }

  returnToPosts() {
    this.authService.returnToPosts();
  }

  onTitleChange() {
    if(this.userName = null) this.userName = "NoName"
  }
}
