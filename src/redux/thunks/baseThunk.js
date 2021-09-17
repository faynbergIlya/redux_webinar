import { baseActions } from "../actions";
export const baseThunk = () => {
  return (dispatch, getState, { requestor }) => {
    // const { counter } = getState();

    // if (counter % 2 === 0) {
    //   return;
    // }
    // requestor.get().then(()=>dispatch(...))

    dispatch(baseActions.baseThunkAction());
  };
};
