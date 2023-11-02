import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/youtube/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){
    this.authService.getTheValue()

    if(this.authService.isAuthenticated()){
      this.router.navigate(['/main'])
    }
  }

  onLogin(){
    this.authService.login();
    this.router.navigate(['/main']);
  }
}
