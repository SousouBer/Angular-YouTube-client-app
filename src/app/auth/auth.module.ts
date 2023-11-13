import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { AdminPageComponent } from './components/admin-page/admin-page.component';

@NgModule({
    declarations: [
        LoginComponent,
        AdminPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // RouterModule.forChild([{ path: "", component: LoginComponent }])
        RouterModule.forChild([{ path: "", component: AdminPageComponent }])
    ],
    exports: [LoginComponent, RouterModule]
})
export class AuthModule { }
