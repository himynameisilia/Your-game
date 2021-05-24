import { useEffect } from "react";
import useSound from "use-sound";
import startGame from "../sounds/startGame.mp3";

export default function Sound({ counter }) {
  const [play] = useSound(startGame, { interrupt: true });

  useEffect(() => {
    play();
  }, [counter, play]);
  return null;
}
