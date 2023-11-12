import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: "", component: LoginComponent }])
    ],
    exports: [LoginComponent, RouterModule]
})
export class AuthModule { }
