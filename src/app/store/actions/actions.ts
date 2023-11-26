import { createAction, props } from "@ngrx/store";
import { SearchItem } from "src/app/youtube/models/search-item.model";
import { CardsState, CustomCard } from "../reducers/reducers";

export const loadItems = createAction(
  '[Header Search] load items',
  props<{ searchInput: any }>()
)

export const success = createAction(
  '[Header API] Data Success',
  props< { items: SearchItem[] }>()
)

export const getSearchItem = createAction(
  '[Details Page] Get Item Data',
  props<{ id: string }>()
)

export const markFavourite = createAction(
  '[Youtube Item] Mark As Favourite',
  props<{ id: string }>()
)

export const removeFromFavourite = createAction(
  '[Youtube Item] Remove From Favourite',
  props<{ id: string }>()
)

// Custom Cards
export const addCard = createAction(
  '[Admin Page] Add Card',
  props<{  card: CustomCard  }>()
)