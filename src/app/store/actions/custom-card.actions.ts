import { createAction, props } from "@ngrx/store";
import { CustomCard } from "src/app/youtube/models/custom-card.model";

// Custom Cards Actions
export const addCard = createAction(
  '[Admin Page] Add Card',
  props<{ card: CustomCard }>()
);

export const removeCard = createAction(
  '[Card Page] Remove Card',
  props<{ id: string }>()
);
