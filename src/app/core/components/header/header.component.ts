import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  username = this.authService.username$;
  showHideSettings = false;

  @Output() shareToggleSettings = new EventEmitter<boolean>();

  constructor(private itemsService: ItemsService, private authService: AuthService, private router: Router) {}

  getInput(e: any){
    this.itemsService.searchItemText.next(e.target.value);
  }

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
