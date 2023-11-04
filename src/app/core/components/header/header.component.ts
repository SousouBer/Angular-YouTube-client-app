import { Component, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { AuthService } from "src/app/youtube/services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    username = this.authService.username$;

    // resultBlockShown = false;
    showHideSettings = false;

    // isLoggedIn = true;

    // @Output() showResults = new EventEmitter<boolean>();
    @Output() shareToggleSettings = new EventEmitter<boolean>();

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

    onLogOut(){
      // this.isLoggedIn = false;
      

      this.authService.logout();
      this.router.navigate(['/login'])
    }

    // showResultsBlock() {
    //     this.resultBlockShown = true;
    //     this.showResults.emit(this.resultBlockShown);
    // }

    toggleSettings() {
      if(this.authService.isAuthenticated()){
        this.showHideSettings = !this.showHideSettings;
        this.shareToggleSettings.emit(this.showHideSettings);
      }
      console.log(this.route.snapshot);
    }
}
