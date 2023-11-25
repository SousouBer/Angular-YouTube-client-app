import { createAction, props } from "@ngrx/store";
import { SearchItem } from "src/app/youtube/models/search-item.model";
import { CardsState } from "../reducers/reducers";

export const loadItems = createAction(
  '[Header Search] load items',
  props<{ searchInput: any }>()
)

// export const success = createAction(
//   '[Header API] Data Success',
//   props< { items: SearchItem[] }>()
// )
export const success = createAction(
  '[Header API] Data Success',
  props< { items: SearchItem[] }>()
)

export const filterByDate = createAction(
  '[Filter Date] Filter By Date',
  props<{ value: boolean }>()
)

export const sortByLikes = createAction(
  '[Sort Button] Sort By Likes',
  props<{ value: boolean }>()
)

export const addCard = createAction(
  '[Main] Add Card',
  props<{  card: CardsState  }>()
)

export const getSearchItem = createAction(
  '[Details Page] Get Item Data',
  props<{ id: string }>()
)