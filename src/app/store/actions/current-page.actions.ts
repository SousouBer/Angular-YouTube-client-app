import { createAction } from "@ngrx/store"

export const updateCurrentPage = createAction(
  '[Main Page] Increase Current Page',
)

export const decreaseCurrentPage = createAction(
  '[Main Page] Decrease Current Page'
)