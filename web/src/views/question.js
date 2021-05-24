import { useState } from "react";
import ErrorSound from "./wrong";

export default function Question({ currentQ, answerResult }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function checkAnswer(e) {
    e.preventDefault();
    const answer = e.target.answer.value;
    if (answer.toLowerCase().trim() === currentQ.answer.toLowerCase().trim()) {
      console.log(true);
      answerResult(true);
    } else {
      setShowAnswer(true);
      setTimeout(() => {
        answerResult(false);
      }, 3000);
    }
  }

  function passAnser(e) {
    e.preventDefault();
    setShowAnswer(true);
    setTimeout(() => {
      answerResult(false);
    }, 3000);
  }

  return (
    <>
      <div className=" relative text-5xl flex flex-col space-y-5 justify-center h-full items-center">
        {showAnswer ? <ErrorSound /> : ""}
        {showAnswer ? (
          currentQ.answer
        ) : (
          <>
            {currentQ.question}
            <form
              className="mt-10 flex text-3xl  overflow-hidden  bg-white"
              action=""
              onSubmit={checkAnswer}
            >
              <input
                className=" px-5 py-3  text-black max-w-sm font-thin overflow "
                type="text"
                name="answer"
                placeholder="Ответ сюда..."
              />
              <button className="text-xl bg-blue-300 hover:bg-blue-600 h-full px-3 text-black">
                Отправить
              </button>
            </form>
            <button
              onClick={passAnser}
              className="font-bold p-5 bg-red-900 hover:bg-red-600"
            >
              ПАС
            </button>
          </>
        )}
      </div>
    </>
  );
}
