import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';

import { SearchItem } from '../../models/search-item.model';
import { Store } from '@ngrx/store';
import { AppState, CustomCard } from 'src/app/store/reducers/reducers';
import { selectYoutubeAndCards, selectYoutubeItems } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnDestroy {
  searchItems$!: Observable<(CustomCard | SearchItem)[]>;

  words!: Subscription;
  dateAscending!: Subscription;
  viewIsAscending!: Subscription;

  dateBoolean$: boolean | null = null;
  viewBoolean$: boolean | null = null;
  filter = '';

  constructor(
    private itemsService: ItemsService,
    private store: Store<AppState>
  ) {
    this.searchItems$ = this.store.select(selectYoutubeAndCards);
  }

  ngOnInit(): void {
    this.words = this.itemsService.getWords().subscribe((words) => {
      this.filter = words;
    });

    this.dateAscending = this.itemsService.dateStream$.subscribe((value) => {
      this.dateBoolean$ = value;
      console.log(this.dateBoolean$);
    });

    this.viewIsAscending = this.itemsService.viewIsAscending.subscribe(
      (value) => {
        this.viewBoolean$ = value;
      }
    );
  }

  // isCustomCard(el: CustomCard | SearchItem): el is CustomCard {
  //   console.log(el);
  //   return (el as CustomCard).creationDate !== undefined;
  // }

  isCustomCard(item: CustomCard | SearchItem): item is CustomCard {
    const res = (item as CustomCard).creationDate !== undefined;
    console.log(res);
    return res;
  }

  ngOnDestroy(): void {
    this.words.unsubscribe();
    this.dateAscending.unsubscribe();
    this.viewIsAscending.unsubscribe();
  }
}
