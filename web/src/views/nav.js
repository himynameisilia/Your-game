import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav(props) {
  const state = useSelector((store) => store);

  return (
    <ul className="flex text-yellow-200 uppercase  flex-row justify-between text-3xl px-24 py-3  font-bold">
      <li className="transition-all hover:text-white">
        <Link to="/">Меню</Link>
      </li>
      <li className="transition-all  hover:text-white">
        <Link className="flex" to="/login">
          {state && state.player.name
            ? state.player.name + " (" + state.player.points + ")"
            : "Логин"}
        </Link>
      </li>
      <li className="transition-all hover:text-white">
        <Link className="flex" to="/register">
          {state && state.player.points ? state.player.points : "Регистрация"}
        </Link>
      </li>
      <li className="transition-all hover:text-white">
        <Link to="/play">Игра</Link>
      </li>
    </ul>
  );
}

export default Nav;
