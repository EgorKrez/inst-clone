import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service'
import { Post } from 'src/app/shared/post.service'
import { PostService } from 'src/app/shared/post.service'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  public addForm: FormGroup;

  userPlace: string = '';
  img: string = '';

  posts: Post[] = this.postService.posts;

  constructor(public authService: AuthService, public postService: PostService) { }


  public newPost: Post = this.postService.posts[this.authService.checkId - 1]

  ngOnInit(): void {
    this.initForm()
  }

  editPost() {
    if (this.userPlace != '') this.newPost.userPlace = this.userPlace
    if (this.img != '') this.newPost.imagePath = this.img
    this.posts[this.authService.checkId - 1] = this.newPost;
  }

  show() {
    console.log(this.newPost)
  }

  returnToPosts() {
    this.authService.returnToPosts();
  }

  public initForm() {
    this.addForm = new FormGroup({
      userPlace: new FormControl(this.newPost.userPlace),
      img: new FormControl(this.newPost.imagePath),
    })
  }

  submit(form: NgForm){
    console.log(form);
}
}
