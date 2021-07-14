import { Sprite, Container } from "@inlet/react-pixi";
import useMap from '../hooks/useMap';

const Map = () => {
  const { onceMapChipSize, randomArray,isFirstRender,checkMapChipType } = useMap();
  const sprites = () => {
    if (isFirstRender.current) {
      return randomArray.map((value, index) => {
        const sprites = value.map((secondValue, secondIndex) => {
          return (
            <Sprite
              image={checkMapChipType(secondValue)}
              x={secondIndex * onceMapChipSize}
              y={index * onceMapChipSize}
            />
          );
        });
        return [...sprites];
      });
    }
  };
  return <Container>{sprites()}</Container>;
};
export default Map;
