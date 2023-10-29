import { Component, OnInit } from '@angular/core';
import { FilterByWordsService } from '../services/filter-by-words.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export class FilteringCriteriaComponent {
  filterByWords: string = '';

  isAscending: boolean = false;
  directionText: string = '';

  constructor(private filterService: FilterByWordsService) {}

  updateValue() {
    this.filterService.updateValue(this.filterByWords);
  }

  filterByDate() {
    this.isAscending = !this.isAscending;
    this.directionText = this.isAscending ? 'Ascending' : 'Descending';

    this.filterService.viewsIsAscending.next(this.isAscending);
  }
}
