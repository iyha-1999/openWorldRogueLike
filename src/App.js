//リロードするとランダムでマップが生成される
import { useDispatch, useSelector, ReactReduxContext } from "react-redux";
import { Stage } from "@inlet/react-pixi";
import "./styles.css";
import UserInput from "./components/UserInput";
import Player from "./components/Player";
import Map from "./components/Map";
import GameLoop from "./components/GameLoop";
import ContextBridge from "./components/ContextBridge";

export default function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  return (
    <>
      <div className="App">
        {/*renderPropで子コンポーネントを渡し、react-pixiコンポーネントにコンテキストを渡す*/}
        <ContextBridge
          Context={ReactReduxContext}
          render={(children) => (
            <Stage width={selector.stage.width} height={selector.stage.height}>
              {children}
            </Stage>
          )}
        >
          <Map />
          <Player />
        </ContextBridge>
      </div>
      <GameLoop />
      <UserInput />
    </>
  );
}
