import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/youtube/services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    resultBlockShown = false;
    showHideSettings = false;

    isLoggedIn = true;

    @Output() showResults = new EventEmitter<boolean>();
    @Output() shareToggleSettings = new EventEmitter<boolean>();

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(){

    }

    onLogOut(){
      this.authService.logout();
      this.router.navigate(['/login'])
    }

    showResultsBlock() {
        this.resultBlockShown = true;
        this.showResults.emit(this.resultBlockShown);
    }

    toggleSettings() {
        this.showHideSettings = !this.showHideSettings;
        this.shareToggleSettings.emit(this.showHideSettings);
    }
}
