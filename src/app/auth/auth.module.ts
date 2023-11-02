import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LoginComponent, LoginPageComponent]
})
export class AuthModule { }
