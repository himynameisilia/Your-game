import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAC } from "../redux/actionCreators";
import { useHistory } from "react-router-dom";

export default function Register() {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (state && state.player.name) {
      history.push("/");
    }
  }, [state.player.name, history, state]);

  function logIn(e) {
    e.preventDefault();
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(registerUserAC(data));
      });
    history.push("/");
  }

  return (
    <div>
      <form
        onSubmit={logIn}
        className="flex bg-gray-400 px-7 py-5 rounded-xl flex-col w-80 space-y-2 mx-auto mt-10"
        action=""
      >
        <div></div>
        <input
          placeholder="user"
          name="username"
          className="px-3 py-2 shadow rounded"
          type="text"
        />
        <input
          placeholder="e-mail"
          name="email"
          className="px-3 py-2 shadow rounded"
          type="email"
        />
        <input
          placeholder="password"
          name="password"
          className="px-3 py-2 shadow rounded"
          type="password"
        />
        <button className="bg-blue-300 py-2 rounded shadow">Log In</button>
      </form>
    </div>
  );
}
