import { createReducer, on } from '@ngrx/store';
import { activate, deactivate, reset } from '../actions/alarm.actions';
import { AlarmFeatureState } from '.';

export const initialState: AlarmFeatureState = { alarm: { state: false } };

export const alarmReducer = createReducer(
  initialState,
  on(activate, (state) => ({ ...state, alarm: { state: true } })),
  on(deactivate, (state) => ({ ...state, alarm: { state: false } })),
  on(reset, (state) => ({ ...state, alarm: { state: false } }))
);
