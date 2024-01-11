import { ZooAction, ZooActionTypes, ZooState } from './types';

export const initialState: ZooState = {
  animals: [
    { id: 1, name: 'kiskutya' },
    { id: 2, name: 'kismacska' },
    { id: 3, name: 'mosomedve' },
  ],
};

const zooReducer = (
  state: ZooState = initialState,
  action: ZooAction,
): ZooState => {
  switch (action.type) {
    case ZooActionTypes.ADD:
      return {
        ...state,
        animals: [
          ...state.animals,
          { id: state.animals.length + 1, name: action.payload.name },
        ],
      };

    case ZooActionTypes.DELETE:
      return {
        ...state,
        animals: state.animals.filter(
          (deleted: { id: number; name: string }) =>
            deleted?.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default zooReducer;
