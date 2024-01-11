import { Joke, JokeAction, JokeActionType } from './types';

export const getJokeSuccess = (joke: Joke): JokeAction => {
  return {
    type: JokeActionType.GET_JOKE_SUCCESS,
    payload: { joke },
  };
};

export const getJokePending = (): JokeAction => {
  return {
    type: JokeActionType.GET_JOKE_PENDING,
    payload: null,
  };
};

export const getJokeError = (errorMessage: string): JokeAction => {
  return {
    type: JokeActionType.GET_JOKE_ERROR,
    payload: { errorMessage },
  };
};
