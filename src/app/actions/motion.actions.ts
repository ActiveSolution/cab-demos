import { createAction, props } from '@ngrx/store';

export const detect = createAction('[Motion] Detect', props<{ id: string }>());
export const reset = createAction('[Motion] Reset', props<{ id: string }>());