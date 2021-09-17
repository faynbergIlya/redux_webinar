import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { baseReducer } from "./reducers";
import { customMiddleware } from "./middlewares";
import { composeWithDevTools } from "redux-devtools-extension";
import { requestor } from "./httpRequestor";

export const configurStore = (initialState) => {
  const initRequestor = requestor;
  const store = createStore(
    baseReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware.withExtraArgument({ requestor: initRequestor }),
        customMiddleware({ requestor: initRequestor })
      )
    )
  );
  return store;
};
