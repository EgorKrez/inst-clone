import { Injectable, ChangeDetectorRef } from '@angular/core';

export interface Post {
  user: User;
  userPlace: string;
  id: number;
  likeCount: number;
  imagePath: string;
  isLiked: boolean;
  comments: Comment;
}

export interface User {
  userName: string;
  userPhoto: string;
}

export interface Comment {
  text: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public userName: string;
  public userPlace: string;
  public userPhoto: string;
  public id: number;
  public likeCount: number;
  public imagePath: string;
  public isLiked: boolean;
  public comments: any;



  public users: User[] = [
    { userName: 'Egor Krez', userPhoto: 'https://sun9-18.userapi.com/c852124/v852124730/ed7f1/LdgGZkXfGdk.jpg?ava=1' },
    { userName: 'Artsyom Bukavtsov', userPhoto: 'https://sun9-33.userapi.com/impg/y6Y3pUW3Iv2m1wv3Do_OFrqsbOk17CFo3OTcyw/rokfNazApFE.jpg?size=400x0&quality=90&crop=112,364,642,642&sign=6100849bf585b6ae364ab991a3a57bc4&ava=1' },
    { userName: 'Pavel Degtyarenko', userPhoto: 'https://sun9-25.userapi.com/u2HJL1uHJaac0LwY4LfpJmnkP70YpuIOhoG4xQ/jsrOkVuswNw.jpg' },
    { userName: 'Konstantin Krukouski', userPhoto: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c857228/v857228436/9e55f/aXR26fyG8SQ.jpg?size=1728x2160&quality=96&proxy=1&sign=51d50f372bbf55be84b70bf43d33b01e' },
  ]


  public comms: Comment[] = [
    { text: ['Egor', '1488', 'Krez'] },
    { text: ['Krez', 'Egor', '322'] },
    { text: ['Alexandrovich', 'Egor', '228'] },
    { text: ['Nice Tyan', 'Great', 'I liked'] }
  ]

  public posts: Post[] = [
    { user: this.users[0], userPlace: 'My house', id: 1, likeCount: 1234, imagePath: 'https://i.ytimg.com/vi/lkQ0LDx9jHs/maxresdefault.jpg', isLiked: false, comments: this.comms[0] },
    { user: this.users[1], userPlace: '', id: 2, likeCount: 1234, imagePath: 'https://i.pinimg.com/736x/91/97/2b/91972b0956ce82665414e7387f04e53f.jpg', isLiked: true, comments: this.comms[1] },
    { user: this.users[2], userPlace: 'Kostuokouka', id: 3, likeCount: 102, imagePath: 'https://gomel.today/uploads/News/2020/08/05/309-steklo.jpg', isLiked: false, comments: this.comms[2] },
    { user: this.users[3], userPlace: 'My dreams', id: 4, likeCount: 228, imagePath: 'https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg', isLiked: false, comments: this.comms[3] },
    { user: this.users[0], userPlace: 'My house', id: 5, likeCount: 228, imagePath: 'https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg', isLiked: false, comments: this.comms[0] },
    { user: this.users[0], userPlace: 'My house', id: 6, likeCount: 23, imagePath: 'https://bigpicture.ru/wp-content/uploads/2012/07/cats-32.jpg', isLiked: false, comments: this.comms[0] },
    { user: this.users[0], userPlace: 'My house', id: 7, likeCount: 34, imagePath: 'https://i.pinimg.com/originals/31/02/cd/3102cdcf8a516aa9509c0c0bdbebf570.png', isLiked: false, comments: this.comms[0] },
  ];

  public showPosts: Post[] = this.posts.slice(0, 3);

  ngOnChange() {
    
  }

  /* pagination() {
    this.showPosts = this.posts.slice(0, 6);
    console.log(this.showPosts)
  } */
}