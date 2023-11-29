import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state.model';
import { YoutubeItemsState } from '../reducers/youtube-items.reducers';
import { CardsState } from '../reducers/custom-cards.reducers';

export const getYoutubeItems = (state: AppState) => {
  return state.youtubeItems;
};

export const getCustomCards = (state: AppState) => {
  return state.customCards;
};

export const selectFavouriteItems = createSelector(
  getYoutubeItems,
  (state: YoutubeItemsState) => {
    return state.items.filter((item) => item.markedAsFavourite);
  }
);

export const selectYoutubeItems = createSelector(
  getYoutubeItems,
  (state: YoutubeItemsState) => {
    return state.items;
  }
);

export const selectCardItems = createSelector(
  getCustomCards,
  (state: CardsState) => {
    return state.cards;
  }
);

export const selectYoutubeAndCards = createSelector(
  getCustomCards,
  getYoutubeItems,
  (cardsState, youtubeItemsState) => {
    return [...cardsState.cards, ...youtubeItemsState.items];
  }
);

export const getCurrentPage = (state: AppState) => {
  return state.currentPage;
};
export const selectTotalPageCount = createSelector(
  selectYoutubeAndCards,
  (state) => {
    const itemsPerPage = 20;
    let value = Math.floor(state.length / itemsPerPage);
    const threshold = 0.5;

    if (state.length - value > threshold) {
      return value + 1; // Round up
    } else {
      return value; // Keep the original integer part
    }
  }
);

export const selectCurrentPageItems = createSelector(
  selectYoutubeAndCards,
  getCurrentPage,
  (state, getCurrentPage) => {
    const itemsPerPage = 20;
    const startIndex = (getCurrentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return state.slice(startIndex, endIndex);
  }
);
