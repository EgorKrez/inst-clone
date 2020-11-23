import { Component, Input } from '@angular/core';
import { from } from 'rxjs';
import { Comment } from 'src/app/shared/post.service';
import {LoginComponent} from 'src/app/login/login.component'
import {AuthService} from 'src/app/auth.service'

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})


export class PostComponent {
    @Input() userName: string;
    @Input() userPlace: string;
    @Input() userPhoto: string;
    @Input() id: number;
    @Input() likeCount: number;
    @Input() imagePath: number;
    @Input() isLiked: boolean;
    @Input() comments: Comment;
    @Input() authService: AuthService;
    
    public getLogin() {
        console.log(this.authService.logIn);
        return this.authService.logIn;
    } 

    public showComments: boolean;
    public title: string = '';
    like(): void {
        this.isLiked =  !this.isLiked;
    }

    comment(id: number): void {
        console.log(id);
        this.showComments = !this.showComments;
    }

    addComment(id: number): void{
        const comment: string = this.title;
        this.comments.text.push(comment);
        this.title = '';
    }

}
