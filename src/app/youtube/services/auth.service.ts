import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  login(){
    localStorage.setItem('booleanValue', 'true');
    this.isLoggedIn = true;
  }

  logout(){
    localStorage.removeItem('booleanValue')
    this.isLoggedIn = false;
  }

  getTheValue(){
    if(localStorage.getItem('booleanValue')){
      this.isLoggedIn = true;
    }
  }
}
