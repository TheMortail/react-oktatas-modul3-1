import { RootState } from '../rootReducer';

export const selectAnimals = (state: RootState) => state.zooReducer.animals;
