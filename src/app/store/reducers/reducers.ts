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
  }))
);

export const requestCards = createReducer(
  initialStateC,
  on(SearchItemActions.addCard, (state, action) => ({
    ...state,
    cards: [],
  }))
);
