import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter$ = new BehaviorSubject<number>(0);
  constructor() {}
}
