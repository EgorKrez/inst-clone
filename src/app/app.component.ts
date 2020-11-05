import { Component } from '@angular/core';

export interface Post {
  id: number;
  likeCount: number;
  imagePath: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'instagram-clone';

  public posts: Post[] = [
    { id: 1, likeCount: 100, imagePath: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png', isLiked: false },
    { id: 2, likeCount: 1234, imagePath: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png', isLiked: true },
    { id: 3, likeCount: 102, imagePath: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png', isLiked: false }
  ];
}

