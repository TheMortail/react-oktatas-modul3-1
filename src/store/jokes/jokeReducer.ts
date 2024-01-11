import { JokeAction, JokeActionType, JokeState } from './types';

export const initialState: JokeState = {
  joke: {
    type: '',
    setup: '',
    punchline: '',
    id: 0,
  },
  loading: false,
  errorMessage: '',
};

const jokeReducer = (
  state: JokeState = initialState,
  action: JokeAction,
): JokeState => {
  switch (action.type) {
    case JokeActionType.GET_JOKE_SUCCESS:
      return {
        ...state,
        joke: action.payload?.joke || {
          type: '',
          setup: '',
          punchline: '',
          id: 0,
        },
        loading: false,
      };

    case JokeActionType.GET_JOKE_PENDING:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage,
        loading: true,
      };

    case JokeActionType.GET_JOKE_ERROR:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };

    default:
      return state;
  }
};

export default jokeReducer;
