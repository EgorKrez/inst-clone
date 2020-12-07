
import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/post-list/posts.component';
import { PostComponent } from './posts/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './posts/add/add.component';
import { OpenPostComponent } from './posts/open-post/open-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard'
import { from } from 'rxjs';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
