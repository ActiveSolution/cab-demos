import { createReducer, on } from '@ngrx/store';
import { detect, reset } from '../actions/motion.actions';
import { MotionSensorFeatueState } from '.';

export const initialState: MotionSensorFeatueState = {
  motionSensors: [
    {
      name: 'Kitchen',
      state: false,
      id: '1',
      lux: 0,
    },
    {
      name: 'Living Room',
      state: false,
      id: '2',
      lux: 0,
    },
    {
      name: 'Bedroom',
      state: false,
      id: '3',
      lux: 0,
    },
  ],
};

export const motionSensorReducer = createReducer(
  initialState,
  on(detect, (state, props) => ({ ...state, motionSensors: state.motionSensors.map((sensor) => (sensor.id === props.id ? { ...sensor, state: true } : sensor)) })),
  on(reset, (state, props) => ({ ...state, motionSensors: state.motionSensors.map((sensor) => (sensor.id === props.id ? { ...sensor, state: false } : sensor)) }))
);
