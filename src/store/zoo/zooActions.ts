import { ZooAction, ZooActionTypes } from './types';

export const addNewAnimal = (name: string): ZooAction => {
  return {
    type: ZooActionTypes.ADD,
    payload: { name },
  };
};

export const deleteAnimal = (id: number): ZooAction => {
  return {
    type: ZooActionTypes.DELETE,
    payload: { id },
  };
};
