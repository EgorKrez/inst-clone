import { Component } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'

export interface Post {
  userName: string;
  userPhoto: string;
  id: number;
  likeCount: number;
  imagePath: string;
  isLiked: boolean;
  comments: Comment;
}

export interface Comment {
  text: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'instagram-clone';

  isLog: object = LoginComponent;

  public comms: Comment[] = [
    { text: ['Egor','1488', 'Krez']},
    { text: ['Krez', 'Egor', '322']},
    { text: ['Alexandrovich', 'Egor', '228']},
    {text: ['Nice Tyan', 'Great', 'I liked']}
  ]

  public posts: Post[] = [
    { userName: 'EgorKrez', userPhoto: 'https://sun9-18.userapi.com/c852124/v852124730/ed7f1/LdgGZkXfGdk.jpg?ava=1', id: 1, likeCount: 100, imagePath: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png', isLiked: false, comments: this.comms[0] },
    { userName: 'Artsyom Bukavtsov', userPhoto: 'https://sun9-33.userapi.com/impg/y6Y3pUW3Iv2m1wv3Do_OFrqsbOk17CFo3OTcyw/rokfNazApFE.jpg?size=400x0&quality=90&crop=112,364,642,642&sign=6100849bf585b6ae364ab991a3a57bc4&ava=1', id: 2, likeCount: 1234, imagePath: 'https://i.pinimg.com/736x/91/97/2b/91972b0956ce82665414e7387f04e53f.jpg', isLiked: true, comments: this.comms[1] },
    { userName: 'Pavel Degtyarenko', userPhoto: 'https://sun9-25.userapi.com/u2HJL1uHJaac0LwY4LfpJmnkP70YpuIOhoG4xQ/jsrOkVuswNw.jpg', id: 3, likeCount: 102, imagePath: 'https://gomel.today/uploads/News/2020/08/05/309-steklo.jpg', isLiked: false, comments: this.comms[2] },
    { userName: 'Konstantin Krukouski', userPhoto: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c857228/v857228436/9e55f/aXR26fyG8SQ.jpg?size=1728x2160&quality=96&proxy=1&sign=51d50f372bbf55be84b70bf43d33b01e', id: 4, likeCount: 228, imagePath: 'https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg', isLiked: false, comments: this.comms[3] }
  ];

 

}

