import {
    Component, EventEmitter, OnDestroy, OnInit, Output
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";

import { ItemsService } from "../../services/items.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    username = this.authService.username$;
    showHideSettings = false;

    hideOrShowLogOut = false;
    logoutSub!: Subscription;

    @Output() shareToggleSettings = new EventEmitter<boolean>();

    constructor(
        private itemsService: ItemsService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.logoutSub = this.authService.showLogOut.subscribe((value) => {
            this.hideOrShowLogOut = value;
        });
    }

    getInput(e: any) {
        this.itemsService.searchItemText.next(e.target.value);
    }

    onLogOut() {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }

    toggleSettings() {
        if (this.authService.isAuthenticated()) {
            this.showHideSettings = !this.showHideSettings;
            this.shareToggleSettings.emit(this.showHideSettings);
        }
    }

    ngOnDestroy() {
        this.logoutSub.unsubscribe();
    }
}
