import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as api from '../apiRequest';
import {GET_SENSORS} from '../utils/apiPaths';
import {
  AppActions,
  SET_SENSORS,
  GET_SENSORS,
  ERROR_SENSORS,
} from '../types/actions';
import ApiResponse from '../types/ApiResponse';
import {startSetExpense} from '../actions/sensors';

function* fetchSensors(action) {
  try {
    const sensors = yield call(api.post, GET_SENSORS, action.payload);
    console.log('saga', sensors);
    yield put(startSetExpense(sensors));
  } catch (e) {
    console.log('exception', e);
    yield put({type: ERROR_SENSORS, message: e.message});
  }
}

function* mySaga() {
  console.log('inside saga');
  yield takeEvery(GET_SENSORS, fetchSensors);
}

export default mySaga;
