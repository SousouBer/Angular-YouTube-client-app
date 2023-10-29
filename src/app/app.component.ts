import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  resultBlockIsShown: boolean = false;
  showOrHideSettings: boolean = false;

  showResults(value: boolean){
    this.resultBlockIsShown = value;
  }

  toggleSettings(value: boolean) {
    this.showOrHideSettings = value;
  }
}
