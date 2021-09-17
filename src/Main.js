import App from "./App";
import { configurStore } from "./redux/store";
import { Provider } from "react-redux";

const initState = {
  testObjects: { a: 1, b: 2 },
  plainObjects: { d: 1, e: 2 },
};
const store = configurStore(initState);

export const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
