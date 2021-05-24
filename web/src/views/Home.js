import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  const state = useSelector((store) => store);

  return (
    <>
      <div className="flex uppercase font-bold text-yellow-200 flex-col text-5xl space-y-10  justify-items-center items-center">
        <div className="">
          {/* {state && state.player.name !== undefined && state.player.name} */}
        </div>
        {!state.game.questions ? (
          <div>
            <button className="uppercase">
              <Link to="/play">Начать игру</Link>
            </button>
          </div>
        ) : (
          <div>
            <button className="uppercase">
              <Link to="/play">Продолжить игру</Link>
            </button>
          </div>
        )}
        <img
          className="opacity-70"
          src="https://i.ytimg.com/vi/fNieIqptdX4/hqdefault.jpg" alt="Вассерман"
        />
      </div>
    </>
  );
}

export default Home;
