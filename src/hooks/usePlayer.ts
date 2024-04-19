import { useContext } from "react";
import playerContext from "../providers/player-provider";

const usePlayer = () => useContext(playerContext);

export default usePlayer;
