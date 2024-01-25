import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface MotionSensorFeatueState {
  motionSensors: IMotionSensorState[];
}

export interface AlarmFeatureState {
  alarm: IAlarmState;
}

export interface State {
  motionSensors: MotionSensorFeatueState;
  alarm: AlarmFeatureState;
}

export interface IMotionSensorState {
  id: string;
  name: string;
  lux: number;
  state: boolean;
}

export interface IAlarmState {
  state: boolean;
}

const getMotionSensorState = createFeatureSelector<MotionSensorFeatueState>('motionSensors'); // memoized selector
const getAlarmState = createFeatureSelector<AlarmFeatureState>('alarm');

export const selectFeatureMotionSensor = createSelector(
  getMotionSensorState,
  (state: MotionSensorFeatueState) => state.motionSensors
);

export const selectFeatureAlarm = createSelector(
  getAlarmState,
  (state: AlarmFeatureState) => state.alarm
);

// export const reducers: ActionReducerMap<State> = {
  
// };


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
