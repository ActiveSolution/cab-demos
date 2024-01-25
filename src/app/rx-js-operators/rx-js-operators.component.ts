import { Component } from '@angular/core';
import { from, filter, map, Observable, pipe, toArray, catchError, throwError, switchMap, of } from 'rxjs';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rx-js-operators',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './rx-js-operators.component.html',
  styleUrl: './rx-js-operators.component.css',
})
export class RxJsOperatorsComponent {
  seniors$ : Observable<ICitizenDto[]> = from(citizens).pipe(    
    map(c => {
      if(c.name === "Jack"){
        throw new Error('Invalid name');
      }

      return {
        name: c.name,
        age: new Date().getFullYear() - c.birthDate.getFullYear()
      } 
    }),
    // seniors,
    //catchError(() => from([])), //<-- Passes on the a new observable for the failed citizen
    catchError(() => throwError(() => new Error('Invalid name again'))),    
    toArray()
  );

  seniorsWithSwitchMap$ : Observable<ICitizenDto[]> = from(citizens).pipe(    
    switchMap(c => {
      if(c.name === "Jack"){
        throw new Error('Invalid name');
      }

      return of({
        name: c.name,
        age: new Date().getFullYear() - c.birthDate.getFullYear()
      });
    }),
    // seniors,
    catchError(() => from([])), //<-- Passes on the a new observable for the failed citizen
    toArray()
  );
  
  constructor() {
    this.seniors$.subscribe({ next: (c: ICitizenDto[]) => console.log(c), error: (e: Error) => console.log("HELLO FROM ERROR")  });
  }
}

const seniors = pipe(
  filter((c: ICitizenDto) => c.age >= 60)
);

interface ICitizen {
  name: string;
  birthDate: Date;
}

interface ICitizenDto {
  name: string;
  age: number;
}

const citizens: ICitizen[] = [
  {
    name: 'John',
    birthDate: new Date(1950, 1, 1)
  },
  {
    name: 'Jane',
    birthDate: new Date(1980, 1, 1)
  },
  {
    name: 'Jack',
    birthDate: new Date(1990, 1, 1)
  },
  {
    name: 'Jill',
    birthDate: new Date(2000, 1, 1)
  }
]

//The API/Interface remains the same
function getCitizen(citizenId: string, client: HttpClient): Observable<ICitizen> {
  if (!citizenId) {
    return throwError(() => new Error('citizenId is required'));
  }

  return client.get<ICitizen>(`https://api.se/citizen?id=${citizenId}`);
}