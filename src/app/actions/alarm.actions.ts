import { createAction } from '@ngrx/store';

export const activate = createAction('[Alarm] Increment');
export const deactivate = createAction('[Alarm] Decrement');
export const reset = createAction('[Alarm] Reset');