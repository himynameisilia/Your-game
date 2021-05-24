import {
  USER_LOGIN,
  REGISTER_USER,
  QUESTION_FALSE,
  QUESTION,
} from "./actionTypes";

function reducer(state = [], action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, player: { ...action.payload, points: 0 } };

    case REGISTER_USER:
      return { ...state, player: { ...action.payload, points: 0 } };

    case QUESTION:
      return {
        ...state,
        game: {
          ...action.payload[0],
          questions: [
            ...action.payload.map((el) =>
              el.questions.map((question) => {
                console.log(question);
                return { ...question, isActive: true };
              })
            ),
          ],
        },
      };

    case QUESTION_FALSE:
      return {
        ...state,
        game: {
          ...state.game,
          questions: action.payload,
        },
      };

    default:
      return state;
  }
}

export default reducer;
