import { ADD_ITEM, NEW_ITEM, THUNK_TEST_ACTION } from "../action-types";

export const baseActions = {
  addItem: (payload) => ({
    type: ADD_ITEM,
    payload,
  }),
  newItem: (payload) => ({
    type: NEW_ITEM,
    payload,
  }),
  baseThunkAction: () => ({
    type: THUNK_TEST_ACTION,
  }),
};
