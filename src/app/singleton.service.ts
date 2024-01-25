import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  theNumber: number;

  constructor() { 
    this.theNumber = Math.random();
  }
}
