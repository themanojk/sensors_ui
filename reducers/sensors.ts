import {Expense} from '../types/Sensor';
import {SET_SENSORS, SensorActionTypes} from '../types/actions';

const sensorDefaultState: Expense[] = [];

const sensorReducer = (
  state = sensorDefaultState,
  action: SensorActionTypes,
): Expense[] => {
  switch (action.type) {
    case SET_SENSORS:
      return {
        ...state,
        sensors: action.sensors,
      };
    default:
      return state;
  }
};

export {sensorReducer};
