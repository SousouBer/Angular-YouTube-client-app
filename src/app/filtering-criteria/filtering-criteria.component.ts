import { Component, OnInit } from '@angular/core';
import { FilterByWordsService } from '../services/filter-by-words.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent {
  filterByWords: string = '';

  constructor(private filterService: FilterByWordsService){}

  updateValue(){
    this.filterService.updateValue(this.filterByWords);
  }
}
