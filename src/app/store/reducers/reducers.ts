import { createAction, createReducer, on } from '@ngrx/store';
import * as SearchItemActions from '../actions/actions';

import { SearchItem } from 'src/app/youtube/models/search-item.model';

export interface CustomCard {
  id: string;
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
  currentPage: number;
}

export const initialStateCurrentPage: number = 1;

export interface YoutubeItemsState {
  items: SearchItem[];
  favouriteItems: SearchItem[];
  isLoading: boolean;
  error: string | null;
}

export const initialStateY: YoutubeItemsState = {
  items: [],
  favouriteItems: [],
  isLoading: false,
  error: null,
};

export const initialStateC: CardsState = {
  cards: [],
};

export const requestItems = createReducer(
  initialStateY,
  on(SearchItemActions.success, (state, action) => ({
    ...state,
    items: action.items,
  })),
  on(SearchItemActions.markFavourite, (state, { id }) => {
    const updatedItems = state.items.map(item =>
      item.id === id ? { ...item, markedAsFavourite: true } : item
    );

    return { ...state, items: updatedItems };
  }),
  on(SearchItemActions.removeFromFavourite, (state, { id }) => {
    const updatedItems = state.items.map(item =>
      item.id === id ? { ...item, markedAsFavourite: undefined } : item
    );

    return { ...state, items: updatedItems };
  })
);

// Custom Cards Reducers

export const requestCards = createReducer(
  initialStateC,
  on(SearchItemActions.addCard, (state, { card }) => ({
    ...state,
    cards: [...state.cards, card],
  })),
  on(SearchItemActions.removeCard, (state, { id }) => {
    const updatedCards = state.cards.filter(card => card.id !== id);

    return { ...state, cards: updatedCards }
  })
);

export const getPagesData = createReducer(
  initialStateCurrentPage,
  on(SearchItemActions.updateCurrentPage, (state) => (state + 1)),
  on(SearchItemActions.decreaseCurrentPage, (state) => (state - 1))
)