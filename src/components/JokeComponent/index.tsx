import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jokeSelector } from '../../store/jokes/jokeSelector';
import { useThunkDispatch } from '../../hooks/useThunkDispatcher';
import { getJokeThunk } from '../../store/jokes/jokeThunk';

const JokeComponent: FC = () => {
  const { joke, loading } = useSelector(jokeSelector);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    getJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Reloading!</h1>;
  }

  const getJoke = () => {
    dispatch(getJokeThunk()).then();
  };

  return (
    <div>
      {joke.setup}
      <br />
      {joke.punchline}
      <br />
      <br />
      <button onClick={() => getJoke()}>
        That was horrible. Give me another!
      </button>
    </div>
  );
};

export default JokeComponent;
