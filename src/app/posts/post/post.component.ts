import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})


export class PostComponent {
    @Input() id: number;
    @Input() likeCount: number;
    @Input() imagePath: number;
    @Input() isLiked: boolean;

    like(): void {
        this.isLiked =  !this.isLiked;
    }
}
