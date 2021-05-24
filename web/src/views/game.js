import { useEffect, useState } from "react";
import Question from "./question";
import { useDispatch, useSelector } from "react-redux";
import { questTypesAC, questionFalse } from "../redux/actionCreators";
import Sound from "./startSound";
export default function Game() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  useEffect(() => {
    if (state && !state.game.questions) {
      fetch("http://localhost:3001/game")
        .then((response) => response.json())
        .then((data) => dispatch(questTypesAC(data)));
    }
  }, [dispatch, state]);

  let gameT = [];
  const pointsRow = ["Вопросы", 200, 400, 600, 800, 1000];
  for (let i = 0; i < 6; i++) {
    let cardArr = pointsRow.map((el) => {
      return { cost: el, isActive: true, question: "Kto debil?", answer: "ti" };
    });
    gameT.push(cardArr);
  }
  const [currentQ, setCurrentQ] = useState({ isActive: false });

  function goQuestion(x, y) {
    let gameHidden = JSON.parse(JSON.stringify(state.game.questions));
    console.log(gameHidden);
    console.log(x, y);
    setCurrentQ({ ...gameHidden[y][x] });
    console.log({ ...gameHidden[y][x] });

    gameHidden[y][x].isActive = false;
    console.log("123" + gameHidden[y][x].isActive);
    dispatch(questionFalse(gameHidden));
  }
  function answerResult(value) {
    if ((value, currentQ)) {
      state.player.points += currentQ.cost;
    }
    setCurrentQ(false);
  }

  return (
    <div className="mx-auto w-full  font-bold h-screen mt-5   px-24 text-3xl text-yellow-200 py-10 container">
      {!state.game.questions && <Sound />}
      {currentQ.isActive ? (
        <Question answerResult={answerResult} currentQ={currentQ} />
      ) : (
        state.game.questions &&
        state.game.questions.map((el, y) => {
          return (
            <div key={"row" + y} className="flex items-center justify-center">
              {el.map((el, x) => {
                return (
                  <>
                    {x === 0 ? (
                      <span className="py-5 px-8 text-xl self-stretch relative uppercase select-none align-middle box-border border  border-gray-100  items-center">
                        {state.game.theme}
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      key={x + "" + y}
                      onClick={() => {
                        el.isActive ? goQuestion(x, y) : console.log(1);
                      }}
                      className={`flex ${
                        el.isActive
                          ? "hover:bg-blue-400 hover:text-yellow-300"
                          : " text-3xl text-transparent"
                      } ${
                        el.isActive ? "" : ""
                      } py-5 px-8 relative uppercase select-none align-middle box-border border  border-gray-100  items-center`}
                    >
                      {el.cost}
                    </span>
                  </>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
}
