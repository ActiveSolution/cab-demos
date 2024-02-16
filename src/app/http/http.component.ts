import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { mergeMap, of, retry, retryWhen, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:4200/assets/products.json')
    .pipe(
      retry({ count: 2, delay: (error: any, retryCount: number) => {
        if (error.status === 404) {
          return timer(1000); // retry after 1 second
        }
        return throwError(() => error);
      }})

    )
    .subscribe(console.log);
  }
}
