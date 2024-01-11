import { getJokeError, getJokePending, getJokeSuccess } from './jokeAction';
import { Dispatch } from 'redux';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Joke } from './types';

const api = axios.create({
  baseURL: 'https://official-joke-api.appspot.com',
});
export const getJokeThunk = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getJokePending());
    try {
      const response = await api.get<void, AxiosResponse<Joke>>('/random_joke');
      dispatch(getJokeSuccess(response.data));
    } catch (e: unknown) {
      const error = e as AxiosError;
      dispatch(getJokeError(error?.message || ''));
    }
  };
};
