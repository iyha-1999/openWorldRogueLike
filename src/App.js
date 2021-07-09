//リロードするとランダムでマップが生成される
import React, { useReducer } from "react";
import initialState from "./container/store/initialState";
import reducer from "./container/reducers/index";
import AppContext from "./container/contexts/AppContext";

import { Stage } from "@inlet/react-pixi";
import "./styles.css";

import Player from "./components/Player";
import Map from "./components/Map";
import InputFromKeyboard from "./components/InputFromKeyboard";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Stage>
          <Map state={state} dispatch={dispatch} />
          <Player state={state} />
        </Stage>
      </div>
      <InputFromKeyboard />
    </AppContext.Provider>
  );
}
