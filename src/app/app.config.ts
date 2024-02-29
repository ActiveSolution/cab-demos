import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NoPreloading, PreloadingStrategy, Route, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { alarmReducer } from './reducers/alarm.reducers';
import { motionSensorReducer } from './reducers/motion.reducers';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor, ShortCircuitInterceptor } from './logging.interceptor';
import { Observable } from 'rxjs';

class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, loadContent: () => Observable<any>): Observable<any> {
    //preloadAfter

    console.log(`${route.path} --> loading content eagerly, like PreloadAllModules`);
    return loadContent();
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(NoPreloading)),
    provideStore(),
    provideState({ name: 'alarm', reducer: alarmReducer }),
    provideState({ name: 'motionSensors', reducer: motionSensorReducer }),
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: ShortCircuitInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    CustomPreloadStrategy
  ],
};
