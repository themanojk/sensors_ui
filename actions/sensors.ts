import {Dispatch} from 'redux';
import {Sensor} from '../types/Sensor';
import {AppActions, SET_SENSORS} from '../types/actions';
import {AppState} from '../store/index';
import ApiResponse from '../types/ApiResponse';

export const setSensors = (sensors: Sensor[]): AppActions => ({
  type: SET_SENSORS,
  sensors,
});

export const startSetExpense = (data) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setSensors(data.result));
  };
};
