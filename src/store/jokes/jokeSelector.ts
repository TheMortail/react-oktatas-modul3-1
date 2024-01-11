import { RootState } from '../rootReducer';
import { JokeSelector } from './types';

export const jokeSelector = (state: RootState): JokeSelector => ({
  joke: state.jokeReducer.joke,
  loading: state.jokeReducer.loading,
});
