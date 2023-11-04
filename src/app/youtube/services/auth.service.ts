import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  usernameValue = new BehaviorSubject('');
  username$ = this.usernameValue.asObservable();
  // isLoggedIn = new BehaviorSubject(false);

  constructor() { }

  saveUsernameValue(value: string){
    this.usernameValue.next(value);
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  login(username: string){
    // localStorage.setItem('booleanValue', 'true');
    localStorage.setItem('username', username);
    this.isLoggedIn = true;
    // this.isLoggedIn.next(true);
  }

  logout(){
    // localStorage.removeItem('booleanValue')
    localStorage.removeItem('username')
    this.saveUsernameValue('');
    this.isLoggedIn = false;
  }

  getTheValue(){
    if(localStorage.getItem('username')){
      const savedUsername = localStorage.getItem('username');
      this.saveUsernameValue(savedUsername as string)
      this.isLoggedIn = true;
    }
  }
}
