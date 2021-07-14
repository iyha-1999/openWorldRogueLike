import { Sprite, Container } from "@inlet/react-pixi";
import usePlayer from '../hooks/usePlayer';

const Player = () => {
  const { texture, playerPosition } = usePlayer();
  return (
    <Container>
      <Sprite image={texture} x={playerPosition.x} y={playerPosition.y} />
    </Container>
  );
};

export default Player;
