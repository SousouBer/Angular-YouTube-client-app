import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
    declarations: [
        LoginComponent,
        AdminPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: "", component: LoginComponent }])
    ],
    exports: [LoginComponent, RouterModule]
})
export class AuthModule { }
