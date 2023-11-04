import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/youtube/services/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.authService.getTheValue();

        if (this.authService.isAuthenticated()) {
            this.router.navigate(["/main"]);
        }
    }

    onLogin(form: NgForm) {
        if (form.valid) {
            this.authService.login(form.value.username);
            this.authService.saveUsernameValue(form.value.username);
            this.router.navigate(["/main"]);
        }
    }
}
