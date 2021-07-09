import { Sprite, Container } from "@inlet/react-pixi";
import player from "../images/player.png";

const Player = ({ state }) => {
  return (
    <Container>
      <Sprite
        image={player}
        x={state.player.position.x}
        y={state.player.position.y}
      />
    </Container>
  );
};

export default Player;
