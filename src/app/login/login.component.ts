import { Component, OnInit, Output } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    email: string = '';
    password: string = '';

  constructor(public authService: AuthService) { }

   
  ngOnInit(): void {
  }

  Login(): void {
    this.authService.login(this.email, this.password);
  }

}
