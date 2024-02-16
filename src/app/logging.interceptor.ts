import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class LoggingInterceptor implements HttpInterceptor 
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const css = 'background-color: blue; color: white';

    console.log('%c Request sent', css, req.url);

    return next.handle(req);
  }
}

export class ShortCircuitInterceptor implements HttpInterceptor 
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const chance = Math.random();
    
    const css = 'background-color: lightgreen; color: black';

    if (chance <= 0.5) {      
      console.log("%c Request short-circuited!", css);
      return of();
    }

    console.log("%c Alright, let's pass this request through!", css);

    return next.handle(req);
  }
}