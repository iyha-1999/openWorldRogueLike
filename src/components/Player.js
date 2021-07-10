import { Sprite, Container } from "@inlet/react-pixi";
import player from "../images/player.png";
import { getPlayerPosition } from "../store/ducks/player/selecors";

const Player = ({ selector }) => {
  const playerPosition = getPlayerPosition(selector);
  return (
    <Container>
      <Sprite image={player} x={playerPosition.x} y={playerPosition.y} />
    </Container>
  );
};

export default Player;
