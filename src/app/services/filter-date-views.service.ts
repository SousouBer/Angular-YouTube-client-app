import { Injectable } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class FilterDateViewsService {

  constructor() { }
  private filterData: SearchItem[] = [];

  getData(){
    return this.filterData;
  }

 
}
