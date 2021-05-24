import { useEffect } from "react";
import useSound from "use-sound";
import startGame from "../sounds/si_noanswer.mp3";

export default function ErrorSound({ counter }) {
  const [play] = useSound(startGame, { interrupt: true });

  useEffect(() => {
    play();
  }, [counter, play]);
  return null;
}
