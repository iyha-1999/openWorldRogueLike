import { createStore as reduxCreateStore, combineReducers } from "redux";

import { playerReducers } from "./ducks/player/reducers";
import { mapReducers } from "./ducks/map/reducers";
import { stageReducers } from "./ducks/stage/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      player: playerReducers,
      map: mapReducers,
      stage: stageReducers
    })
  );
}
