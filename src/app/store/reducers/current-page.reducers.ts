import { createReducer, on } from "@ngrx/store";
import * as CurrentPageActions from "../actions/current-page.actions";

export const initialState: number = 1;

export const getPagesData = createReducer(
  initialState,
  on(CurrentPageActions.updateCurrentPage, (state) => (state + 1)),
  on(CurrentPageActions.decreaseCurrentPage, (state) => (state - 1))
)