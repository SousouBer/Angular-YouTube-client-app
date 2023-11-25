import { createAction, createReducer, on } from '@ngrx/store';
import * as SearchItemActions from '../actions/actions';

import { SearchItem } from 'src/app/youtube/models/search-item.model';

export interface CustomCard {
  title: string;
  description: string;
  imgLink: string;
  videoLink: string;
  creationDate: string;
}

export interface CardsState {
  cards: CustomCard[];
}

export interface AppState {
  youtubeItems: YoutubeItemsState;
  customCards: CardsState;
}

export interface YoutubeItemsState {
  items: SearchItem[];
  filteredByDate: SearchItem[];
  filteredByLikes: SearchItem[];
  isLoading: boolean;
  error: string | null;
}

export const initialStateY: YoutubeItemsState = {
  items: [],
  filteredByDate: [],
  filteredByLikes: [],
  isLoading: false,
  error: null,
};

export const initialStateC: CardsState = {
  cards: [],
};

// export const initialState: AppState = {
//   youtubeItems: {
//     items: [],
//     isLoading: false,
//     error: null
//    },
//   customCards: {
//     cards: []
//   }
// }

export const requestItems = createReducer(
  initialStateY,
  on(SearchItemActions.success, (state, action) => ({
    ...state,
    items: action.items,
  })),
  on(SearchItemActions.filterByDate, (state, { value }) => {
    const itemsToSort = [...state.items];

    if (value) {
      itemsToSort.sort(
        (a: SearchItem, b: SearchItem) =>
          Number(new Date(a.snippet.publishedAt)) -
          Number(new Date(b.snippet.publishedAt))
      );
    } else {
      itemsToSort.sort(
        (a: SearchItem, b: SearchItem) =>
          Number(new Date(b.snippet.publishedAt)) -
          Number(new Date(a.snippet.publishedAt))
      );
    }
    return { ...state, items: itemsToSort };
  }),
  on(SearchItemActions.sortByLikes, (state, { value }) => {
    const itemsToSortLikes = [...state.items];

    if(value){
      itemsToSortLikes.sort(
        (a: SearchItem, b: SearchItem) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
    )
    } else {
      itemsToSortLikes.sort(
        (a: SearchItem, b: SearchItem) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    )
  }
  return { ...state, items: itemsToSortLikes }

  })
);

export const requestCards = createReducer(
  initialStateC,
  on(SearchItemActions.addCard, (state, action) => ({
    ...state,
    cards: [],
  }))
);
