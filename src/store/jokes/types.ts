import { Action } from 'redux';

export type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

export enum JokeActionType {
  GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS',
  GET_JOKE_ERROR = 'GET_JOKE_ERROR',
  GET_JOKE_PENDING = 'GET_JOKE_PENDING',
}

type GetJokeAction = Action<
  | JokeActionType.GET_JOKE_SUCCESS
  | JokeActionType.GET_JOKE_PENDING
  | JokeActionType.GET_JOKE_ERROR
> & {
  payload: { joke?: Joke; errorMessage?: string } | null;
};

export type JokeAction = GetJokeAction;

export type JokeState = {
  joke: Joke;
  loading: boolean;
  errorMessage?: string;
};

export type JokeSelector = {
  joke: Joke;
  loading: boolean;
};
