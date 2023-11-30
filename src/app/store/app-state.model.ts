import { CardsState } from "./reducers/custom-cards.reducers";
import { YoutubeItemsState } from "./reducers/youtube-items.reducers";

export interface AppState {
    youtubeItems: YoutubeItemsState;
    customCards: CardsState;
    currentPage: number;
}
