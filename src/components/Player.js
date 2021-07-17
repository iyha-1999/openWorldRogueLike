import { AnimatedSprite, Container } from "@inlet/react-pixi";
import usePlayer from "../hooks/usePlayer";

const Player = () => {
  const { playerPosition, currentAnimationType } = usePlayer();
  if (currentAnimationType.length === 0) {
    return null;
  }
  return (
    <Container>
      <AnimatedSprite
        animationSpeed={0.1}
        isPlaying
        textures={currentAnimationType}
        anchor={(0, 0)}
        scale={1}
        x={playerPosition.x}
        y={playerPosition.y}
      />
    </Container>
  );
};

export default Player;
