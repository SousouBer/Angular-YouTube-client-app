import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    isLoggedIn = false;

    showLogOut = new BehaviorSubject(false);

    usernameValue = new BehaviorSubject("");
    username$ = this.usernameValue.asObservable();

    saveUsernameValue(value: string) {
        this.usernameValue.next(value);
    }

    isAuthenticated() {
        return this.isLoggedIn;
    }

    login(username: string) {
        localStorage.setItem("username", username);
        this.isLoggedIn = true;
        this.showLogOut.next(true);
    }

    logout() {
        localStorage.removeItem("username");
        this.saveUsernameValue("");
        this.isLoggedIn = false;
        this.showLogOut.next(false);
    }

    getTheValue() {
        if (localStorage.getItem("username")) {
            const savedUsername = localStorage.getItem("username");
            this.saveUsernameValue(savedUsername as string);
            this.isLoggedIn = true;
            this.showLogOut.next(true);
        }
    }
}
