import { animate, transition } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})


export class PostComponent {
    @Input() userName: string;
    @Input() userPhoto: string;
    @Input() id: number;
    @Input() likeCount: number;
    @Input() imagePath: number;
    @Input() isLiked: boolean;
    @Input() comments: Comment;

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
