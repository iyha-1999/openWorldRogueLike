import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { playerReducers } from "./ducks/player/reducers";
import { mapReducers } from "./ducks/map/reducers";
import { stageReducers } from "./ducks/stage/reducers";
import { userInputReducers } from "./ducks/userInput/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      player: playerReducers,
      map: mapReducers,
      stage: stageReducers,
      userInput: userInputReducers,
    }),
    applyMiddleware(thunk)
  );
}
