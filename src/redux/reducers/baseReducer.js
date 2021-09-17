import { ADD_ITEM, NEW_ITEM } from "../action-types";

const initBaseReducer = {};
export const baseReducer = (state = initBaseReducer, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        b: action.payload,
      };
    case NEW_ITEM:
      return {
        ...state,
        newItem: action.payload,
      };
    default:
      return state;
  }
};
