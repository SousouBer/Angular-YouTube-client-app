import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  resultBlockIsShown = false;
    showOrHideSettings = false;

    showResults(value: boolean) {
        this.resultBlockIsShown = value;
    }

    toggleSettings(value: boolean) {
        this.showOrHideSettings = value;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
