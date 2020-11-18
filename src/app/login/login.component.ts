import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string = '';
    password: string = '';

    public get logIn(): boolean {
      console.log("Key has been returned");
      return (localStorage.getItem('token') !== null);
    }
  constructor() { }

  Login() {
    if(this.email == "admin" && this.password == "admin") {
      localStorage.setItem('token', 'value')
      console.log("You are logging in");
    }
    }
    logout() {
      localStorage.removeItem('token');
      console.log("HUi")
    }
   
   
  ngOnInit(): void {
  }

}
