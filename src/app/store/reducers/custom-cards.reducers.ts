import { createReducer, on } from "@ngrx/store";
import { CustomCard } from "src/app/youtube/models/custom-card.model";
import * as CustomCardsActions from "../actions/custom-card.actions";

export interface CardsState {
  cards: CustomCard[];
}

export const initialState: CardsState = {
  cards: [],
};

export const requestCards = createReducer(
  initialState,
  on(CustomCardsActions.addCard, (state, { card }) => ({
    ...state,
    cards: [...state.cards, card],
  })),
  on(CustomCardsActions.removeCard, (state, { id }) => {
    const updatedCards = state.cards.filter(card => card.id !== id);

    return { ...state, cards: updatedCards }
  })
);