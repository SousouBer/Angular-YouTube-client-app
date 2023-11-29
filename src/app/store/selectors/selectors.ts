import { createSelector } from "@ngrx/store";

import { AppState } from "../app-state.model";
import { CardsState } from "../reducers/custom-cards.reducers";
import { YoutubeItemsState } from "../reducers/youtube-items.reducers";

export const getYoutubeItems = (state: AppState) => state.youtubeItems;

export const getCustomCards = (state: AppState) => state.customCards;

export const selectFavouriteItems = createSelector(
    getYoutubeItems,
    (state: YoutubeItemsState) => state.items.filter((item) => item.markedAsFavourite)
);

export const selectYoutubeItems = createSelector(
    getYoutubeItems,
    (state: YoutubeItemsState) => state.items
);

export const selectCardItems = createSelector(
    getCustomCards,
    (state: CardsState) => state.cards
);

export const selectYoutubeAndCards = createSelector(
    getCustomCards,
    getYoutubeItems,
    (cardsState, youtubeItemsState) => [...cardsState.cards, ...youtubeItemsState.items]
);

export const getCurrentPage = (state: AppState) => state.currentPage;
export const selectTotalPageCount = createSelector(
    selectYoutubeAndCards,
    (state) => {
        const itemsPerPage = 20;
        const value = Math.floor(state.length / itemsPerPage);
        const threshold = 0.5;

        if (state.length - value > threshold) {
            return value + 1; // Round up
        }
        return value; // Keep the original integer part
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
