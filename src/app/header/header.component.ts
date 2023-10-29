import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    resultBlockShown: boolean =  false;
    showHideSettings: boolean = false;

    @Output() showResults = new EventEmitter<boolean>();
    @Output() shareToggleSettings = new EventEmitter<boolean>();


    showResultsBlock(){
      this.resultBlockShown = true;
      this.showResults.emit(this.resultBlockShown);
    }

    toggleSettings(){
      this.showHideSettings = !this.showHideSettings;
      this.shareToggleSettings.emit(this.showHideSettings);
    }
}
