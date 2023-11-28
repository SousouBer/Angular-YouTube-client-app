import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, CardsState, YoutubeItemsState } from '../reducers/reducers';

export const getYoutubeItems = (state: AppState) => {
  return state.youtubeItems;
};

export const getCustomCards = (state: AppState) => {
  return state.customCards;
}

export const selectFavouriteItems = createSelector(
  getYoutubeItems,
  (state: YoutubeItemsState) => {
    return state.items.filter(item => item.markedAsFavourite)
  }
)

export const selectYoutubeItems = createSelector(
  getYoutubeItems,
  (state: YoutubeItemsState) => {
    return state.items
  }
);

export const selectCardItems = createSelector(
  getCustomCards,
  (state: CardsState) => {
    return state.cards;
  }
)

export const selectYoutubeAndCards = createSelector(
  getCustomCards,
  getYoutubeItems,
  (cardsState, youtubeItemsState) => {
    return [ ...cardsState.cards, ...youtubeItemsState.items ]
  }
)