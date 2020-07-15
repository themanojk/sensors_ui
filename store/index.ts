import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {sensorReducer} from '../reducers/sensors';
import {AppActions} from '../types/actions';
import mySaga from './sagas';
import * as api from '../apiRequest';

const rootReducer = combineReducers({
  sensors: sensorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middelwares = applyMiddleware(
  thunk.withExtraArgument({
    api,
  }),
  sagaMiddleware,
);

export const store = createStore(rootReducer, middelwares);

sagaMiddleware.run(mySaga);
