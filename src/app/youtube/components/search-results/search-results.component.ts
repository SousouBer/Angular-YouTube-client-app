import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';

import { SearchItem } from '../../models/search-item.model';
import { Store } from '@ngrx/store';
import { AppState, CustomCard } from 'src/app/store/reducers/reducers';
import { getCurrentPage, selectCurrentPageItems, selectTotalPageCount, selectYoutubeAndCards, selectYoutubeItems } from 'src/app/store/selectors/selectors';
import { decreaseCurrentPage, updateCurrentPage } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnDestroy {
  searchItems$!: Observable<(CustomCard | SearchItem)[]>;
  // currentPage!: Observable<number>;
  // pagesCount!: Observable<number>;

  currentPage$!: Observable<number>;
  pagesCount$!: Observable<number>;
  // pagesCount: number = 0;

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
    // this.searchItems$ = this.store.select(selectYoutubeAndCards);
    this.searchItems$ = this.store.select(selectCurrentPageItems);
  }

  ngOnInit(): void {
    this.words = this.itemsService.getWords().subscribe((words) => {
      this.filter = words;
    });

    this.dateAscending = this.itemsService.dateStream$.subscribe((value) => {
      this.dateBoolean$ = value;
    });

    this.viewIsAscending = this.itemsService.viewIsAscending.subscribe(
      (value) => {
        this.viewBoolean$ = value;
      }
    );
    this.currentPage$ = this.store.select(getCurrentPage);
    this.pagesCount$ = this.store.select(selectTotalPageCount);
  }

  isCustomCard(item: CustomCard | SearchItem): item is CustomCard {
    const res = (item as CustomCard).creationDate !== undefined;
    return res;
  }

  nextPage(){
    this.store.dispatch(updateCurrentPage())
  }

  previousPage(){
    this.store.dispatch(decreaseCurrentPage())
  }

  ngOnDestroy(): void {
    this.words.unsubscribe();
    this.dateAscending.unsubscribe();
    this.viewIsAscending.unsubscribe();
  }
}
