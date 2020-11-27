import { Injectable } from '@angular/core';

export interface Post {
  userName: string;
  userPlace: string;
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


@Injectable({
  providedIn: 'root'
})
export class PostService{
  public userName: string;
  public userPlace: string;
  public userPhoto: string; 
  public id: number; 
  public likeCount: number; 
  public imagePath: string; 
  public isLiked: boolean; 
  public comments: any;
    /* constructor(userName: string, userPlace: string, userPhoto: string, id: number, likeCount: number, imagePath: string, isLiked: boolean, comments: any){
      this.userName = userName;
      this.userPlace = userPlace;
      this.userPhoto = userPhoto;
      this.id = id;
      this.likeCount = likeCount;
      this.imagePath = imagePath;
      this.isLiked = isLiked;
      this.comments = comments;  
    } */
  public comms: Comment[] = [
    { text: ['Egor','1488', 'Krez']},
    { text: ['Krez', 'Egor', '322']},
    { text: ['Alexandrovich', 'Egor', '228']},
    {text: ['Nice Tyan', 'Great', 'I liked']}
  ]

  public posts: Post[] = [
    { userName: 'EgorKrez', userPlace: 'My house', userPhoto: 'https://sun9-18.userapi.com/c852124/v852124730/ed7f1/LdgGZkXfGdk.jpg?ava=1', id: 1, likeCount: 1488, imagePath: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png', isLiked: false, comments: this.comms[0] },
    { userName: 'Artsyom Bukavtsov', userPlace: '', userPhoto: 'https://sun9-33.userapi.com/impg/y6Y3pUW3Iv2m1wv3Do_OFrqsbOk17CFo3OTcyw/rokfNazApFE.jpg?size=400x0&quality=90&crop=112,364,642,642&sign=6100849bf585b6ae364ab991a3a57bc4&ava=1', id: 2, likeCount: 1234, imagePath: 'https://i.pinimg.com/736x/91/97/2b/91972b0956ce82665414e7387f04e53f.jpg', isLiked: true, comments: this.comms[1] },
    { userName: 'Pavel Degtyarenko', userPlace: 'Kostuokouka', userPhoto: 'https://sun9-25.userapi.com/u2HJL1uHJaac0LwY4LfpJmnkP70YpuIOhoG4xQ/jsrOkVuswNw.jpg', id: 3, likeCount: 102, imagePath: 'https://gomel.today/uploads/News/2020/08/05/309-steklo.jpg', isLiked: false, comments: this.comms[2] },
    { userName: 'Konstantin Krukouski', userPlace: 'My dreams', userPhoto: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c857228/v857228436/9e55f/aXR26fyG8SQ.jpg?size=1728x2160&quality=96&proxy=1&sign=51d50f372bbf55be84b70bf43d33b01e', id: 4, likeCount: 228, imagePath: 'https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg', isLiked: false, comments: this.comms[3] }
  ]; 
}