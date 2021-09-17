import { ADD_ITEM } from "../action-types";
export const customMiddleware =
  ({ requestor }) =>
  (store) =>
  (next) =>
  (action) => {
    console.log("state after dispatch", store);
    console.log("will dispatch", action);
    // Call the next dispatch method in the middleware chain.
    // const returnValue = next(action);

    console.log("dispatch ", next);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    // if (action.type === ADD_ITEM) {
    //   console.log(action);
    // } else {
    return next(action);
  };
