import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, CardsState, YoutubeItemsState } from '../reducers/reducers';

export const getYoutubeItems = (state: AppState) => {
  return state.youtubeItems
};

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

