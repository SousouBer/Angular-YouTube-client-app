import { Component } from "@angular/core";

@Component({
    selector: "app-header-page",
    templateUrl: "./header-page.component.html",
    styleUrls: ["./header-page.component.scss"]
})
export class HeaderPageComponent {
    showOrHideSettings = false;

    toggleSettings(value: boolean) {
        this.showOrHideSettings = value;
    }
}
