import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { baseActions } from "./redux/actions";
import { baseSelector } from "./redux/selectors";
import { baseThunk } from "./redux/thunks";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const onClickFn = () => {
    dispatch(baseActions.addItem("1234"));
  };
  const onClickFnNewItem = () => {
    dispatch(baseActions.newItem("555555"));
  };
  const baseValue = useSelector(baseSelector);
  useEffect(() => {
    console.warn("baseValue", baseValue);
  }, [baseValue]);
  const onClickFnthunk = () => {
    dispatch(baseThunk());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={onClickFn}>Кликни меня</button>
        <button onClick={onClickFnNewItem}>Кликни меня NEW ITEM</button>
        <button onClick={onClickFnthunk}>Кликни меня thunk</button>
        <div>StateValue {baseValue}</div>
      </header>
    </div>
  );
}

export default App;
