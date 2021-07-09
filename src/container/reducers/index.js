import { combineReducers } from "redux";

import player from "./player";
import map from "./map";
import stage from "./stage";

export default combineReducers({
  player,
  map,
  stage
});
