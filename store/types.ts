import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

import Sensor from '../types/Sensor';

export type State = {
  sensors: Sensor[];
};

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export type Dispatch = ThunkDispatch<any, any, any>;
export function useDispatch(): Dispatch {
  return useReduxDispatch();
}
