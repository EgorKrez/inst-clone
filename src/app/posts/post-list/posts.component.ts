import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../app.component';
import {LoginComponent} from 'src/app/login/login.component'
import {AuthService} from 'src/app/auth.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  @Input() posts: Post;
  @Input() LoginComponent: LoginComponent;

  constructor(public authService: AuthService) { }

}
