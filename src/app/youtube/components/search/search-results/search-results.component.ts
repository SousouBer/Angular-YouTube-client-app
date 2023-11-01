import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';

import { SearchItem } from '../../../models/search-item.model';
import { ResponseItem } from '../../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  MockResponse!: ResponseItem;
  @Output() SearchItems: SearchItem[] = [];

  data!: Subscription;
  words!: Subscription;
  viewAscending!: Subscription;
  likesIsAscending!: Subscription;
  filter = '';

  constructor(private filterWords: ItemsService) {}

  ngOnInit(): void {
    this.data = this.filterWords.data.subscribe((data) => {
      this.SearchItems = data;
    });

    this.words = this.filterWords.getWords().subscribe((words) => {
      this.filter = words;
    });

    this.viewAscending = this.filterWords.viewsIsAscending.subscribe(
      (value) => {
        if (value) {
          // Pass a copy of the array in order to trigger the change detection and
          //  have the UI updated.
          const res = this.filterWords.sortAscending(this.SearchItems.slice());
          this.filterWords.updateData(res);
        } else {
          const res = this.filterWords.sortDescending(this.SearchItems.slice());
          this.filterWords.updateData(res);
        }
      }
    );

    this.likesIsAscending = this.filterWords.likesIsAscending.subscribe(
      (value) => {
        if (value) {
          const res = this.filterWords.sortByLikesAscending(
            this.SearchItems.slice()
          );
          this.filterWords.updateData(res);
        } else {
          const res = this.filterWords.sortByLikesDescending(
            this.SearchItems.slice()
          );
          this.filterWords.updateData(res);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.data.unsubscribe();
    this.words.unsubscribe();
    this.viewAscending.unsubscribe();
    this.likesIsAscending.unsubscribe();
  }
}
