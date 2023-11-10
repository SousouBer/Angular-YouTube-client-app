import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  username = this.authService.username$;
  showHideSettings = false;

  @Output() shareToggleSettings = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  onLogOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSettings() {
    if (this.authService.isAuthenticated()) {
      this.showHideSettings = !this.showHideSettings;
      this.shareToggleSettings.emit(this.showHideSettings);
    }
  }
}
