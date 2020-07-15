import {Sensor} from './Sensor';

export const SET_SENSORS = 'SET_SENSORS';
export const GET_SENSORS = 'GET_SENSORS';
export const ERROR_SENSORS = 'ERROR_SENSORS';

export interface SetSensorsAction {
  type: typeof SET_SENSORS;
  sensors: Sensor[];
}

export type SensorActionTypes = SetSensorsAction;

export type AppActions = SensorActionTypes;
