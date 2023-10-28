import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterByWordsService {
  filteringWords = new BehaviorSubject<string>('');

  updateValue(newValue: string) {
    this.filteringWords.next(newValue);
  }

  getWords(){
    return this.filteringWords.asObservable();
  }
}
