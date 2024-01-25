import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { alarmReducer } from './reducers/alarm.reducers';
import { motionSensorReducer } from './reducers/motion.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'alarm', reducer: alarmReducer }),
    provideState({ name: 'motionSensors', reducer: motionSensorReducer }),
  ],
};
