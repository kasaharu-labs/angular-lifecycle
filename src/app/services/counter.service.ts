import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _count = 0;
  counter$ = new BehaviorSubject<number>(this._count);
  constructor() {}

  countup() {
    this.counter$.next(++this._count);
  }
}
