import { useSelector } from "react-redux";
import { getPlayerPosition } from "../store/ducks/player/selecors";
import texture from "../images/player.png";

const usePlayer = () => {
    const selector = useSelector((state) => state);
    const playerPosition = getPlayerPosition(selector);
    return {
        texture,
        playerPosition,
    }
}
export default usePlayer;