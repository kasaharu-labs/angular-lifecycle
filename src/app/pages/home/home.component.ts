import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  componentName: 'HomeComponent';
  counter$: Observable<number> = this.counterService.counter$;
  constructor(private counterService: CounterService) {}

  ngOnChanges() {
    console.log('HomeComponent : ngOnChanges -----');
  }

  ngOnInit() {
    console.log('HomeComponent : ngOnInit -----');
  }

  ngDoCheck() {
    console.log('HomeComponent : ngDoCheck -----');
  }

  ngAfterContentInit() {
    console.log('HomeComponent : ngAfterContentInit -----');
  }

  ngAfterContentChecked() {
    console.log('HomeComponent : ngAfterContentChecked -----');
  }

  ngAfterViewInit() {
    console.log('HomeComponent : ngAfterViewInit -----');
  }

  ngAfterViewChecked() {
    console.log('HomeComponent : ngAfterViewChecked -----');
  }

  ngOnDestroy() {
    console.log('HomeComponent : ngOnDestroy -----');
  }

  increment() {}
}
