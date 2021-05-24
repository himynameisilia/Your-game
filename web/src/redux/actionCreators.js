import {
  QUESTION,
  REGISTER_USER,
  USER_LOGIN,
  QUESTION_FALSE,
} from "./actionTypes";

export const questionFalse = (payload) => {
  return {
    type: QUESTION_FALSE,
    payload,
  };
};
export const registerUserAC = (payload) => {
  return {
    type: REGISTER_USER,
    payload,
  };
};

export const loginUserAC = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

export const questTypesAC = (payload) => {
  return {
    type: QUESTION,
    payload,
  };
};
