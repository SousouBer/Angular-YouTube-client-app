import { Component } from '@angular/core';

import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export class FilteringCriteriaComponent {
  filterByWords = '';
  isAscending = false;
  likesIsAscending = false;

  constructor(private itemsService: ItemsService) {}

  updateValue() {
    this.itemsService.updateValue(this.filterByWords);
  }

  filterByDate() {
    this.isAscending = !this.isAscending;

    this.itemsService.viewsIsAscending.next(this.isAscending);
  }

  filterByViews() {
    this.likesIsAscending = !this.likesIsAscending;

    this.itemsService.likesIsAscending.next(this.likesIsAscending);
  }
}
