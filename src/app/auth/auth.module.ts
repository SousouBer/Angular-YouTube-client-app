import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

@NgModule({
    declarations: [
        LoginPageComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: "", component: LoginPageComponent }])
    ],
    exports: [LoginComponent, LoginPageComponent, RouterModule]
})
export class AuthModule { }
