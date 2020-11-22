import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.LPioAgzhHkoy8x-Kph3-d3hh2Wm4ZoqgCvm-eM7gXjo';
  private email: string;
  private password: string;
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  constructor(private http: HttpClient, private router: Router) { }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
  }

  public login(email: string, password: string): void {
    this.email = email;
    this.password = password;
    if (email === 'admin' && password === 'admin') {
      console.log('redirect to home...');
      this.router.navigate(['posts']);
      return localStorage.setItem('auth_token', this.token);
    }
  }
  
  
}
