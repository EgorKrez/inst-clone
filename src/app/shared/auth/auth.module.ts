import { AuthGuard } from 'src/app/auth-guard'
import { NgModule } from '@angular/core';
import { PostsComponent } from 'src/app/posts/post-list/posts.component';
import { PostComponent } from 'src/app/posts/post/post.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from 'src/app/posts/add/add.component';
import { OpenPostComponent } from 'src/app/posts/open-post/open-post.component';
import { EditPostComponent } from 'src/app/posts/edit-post/edit-post.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { AccountComponent } from 'src/app/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    LoginComponent,
    AddComponent,
    OpenPostComponent,
    EditPostComponent,
    NotFoundComponent,
    AccountComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'add', component: AddComponent, canActivate: [AuthGuard] },
      { path: 'open', component: OpenPostComponent, canActivate: [AuthGuard] },
      { path: 'edit', component: EditPostComponent, canActivate: [AuthGuard] },
      { path: 'acc', component: AccountComponent, canActivate: [AuthGuard] },
      {
        canActivate: [AuthGuard],
        path: 'posts',
        component: PostsComponent
      },
      { path: '**', component: NotFoundComponent }
    ]),
  ]
})
export class AuthModule { }
