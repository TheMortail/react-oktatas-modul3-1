import { Action } from 'redux';

export type ZooState = {
  animals: { id: number; name: string }[];
};

export enum ZooActionTypes {
  ADD = 'ADD',
  DELETE = 'DELETE',
}

type AddAnimalAction = Action<ZooActionTypes.ADD> & {
  payload: { name: string };
};

type DeleteAnimalAction = Action<ZooActionTypes.DELETE> & {
  payload: { id: number };
};

export type ZooAction = AddAnimalAction | DeleteAnimalAction;
