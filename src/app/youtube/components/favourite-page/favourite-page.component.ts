import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';
import { selectFavouriteItems } from 'src/app/store/selectors/selectors';
import { AppState } from 'src/app/store/app-state.model';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.scss']
})
export class FavouritePageComponent implements OnInit {
  favItems$!: Observable<SearchItem[]>;

  constructor(private store: Store<AppState>) {
    this.favItems$ = this.store.select(selectFavouriteItems);
  }

  ngOnInit(): void {
  }

}
