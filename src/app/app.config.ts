import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { alarmReducer } from './reducers/alarm.reducers';
import { motionSensorReducer } from './reducers/motion.reducers';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor, ShortCircuitInterceptor } from './logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideStore(),
    provideState({ name: 'alarm', reducer: alarmReducer }),
    provideState({ name: 'motionSensors', reducer: motionSensorReducer }),
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: ShortCircuitInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
};
