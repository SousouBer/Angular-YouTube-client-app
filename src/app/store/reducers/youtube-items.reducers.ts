import { createReducer, on } from "@ngrx/store";
import { SearchItem } from "src/app/youtube/models/search-item.model";

import * as YoutubeItemActions from "../actions/youtube-items.actions";

export interface YoutubeItemsState {
    items: SearchItem[];
    favouriteItems: SearchItem[];
    isLoading: boolean;
    error: string | null;
}

export const initialState: YoutubeItemsState = {
    items: [],
    favouriteItems: [],
    isLoading: false,
    error: null,
};

export const requestItems = createReducer(
    initialState,
    on(YoutubeItemActions.success, (state, action) => ({
        ...state,
        items: action.items,
    })),
    on(YoutubeItemActions.markFavourite, (state, { id }) => {
        const updatedItems = state.items.map((item) => (item.id === id ? { ...item, markedAsFavourite: true } : item));

        return { ...state, items: updatedItems };
    }),
    on(YoutubeItemActions.removeFromFavourite, (state, { id }) => {
        const updatedItems = state.items.map((item) => (item.id === id ? { ...item, markedAsFavourite: undefined } : item));

        return { ...state, items: updatedItems };
    })
);
