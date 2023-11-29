import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemsService } from 'src/app/core/services/items.service';
import { exhaustMap, map, switchMap, from, mergeMap } from 'rxjs';
// import { loadItems, success } from '../actions/actions';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { loadItems, success } from '../actions/youtube-items.actions';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private itemsService: ItemsService) {}

  loadItems = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap(( { searchInput }) => this.itemsService.getVideoIds(searchInput).pipe(
        switchMap((ids) => this.itemsService.getVideos(ids))).pipe(
          map((data) => success( { items: data as SearchItem[] })
        )
      )
    )
  ))

  // this.sub = this.headerData
  //           .pipe(
  //               map((typedValue) => typedValue.trim()),
  //               filter((value) => value.length > 3),
  //               debounceTime(1000),
  //               distinctUntilChanged(),
  //               switchMap((query) => this.itemsService.getVideoIds(query)),
  //               switchMap((videoIds) => this.itemsService.getVideos(videoIds))
  //           )
  //           .subscribe((videoDataArray) => this.itemsService.updateData(<SearchItem[]>videoDataArray));
}
