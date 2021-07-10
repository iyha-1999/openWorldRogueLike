//リロードするとランダムでマップが生成される
import { useDispatch, useSelector } from "react-redux";
import { Stage } from "@inlet/react-pixi";
import "./styles.css";

import Player from "./components/Player";
import Map from "./components/Map";
import GameLoop from "./components/GameLoop";

export default function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  return (
    <>
      <div className="App">
        <Stage width={selector.stage.width} height={selector.stage.height}>
          <Map selector={selector} dispatch={dispatch} />
          <Player selector={selector} />
        </Stage>
      </div>
      <GameLoop />
    </>
  );
}
