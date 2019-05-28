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

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.scss'],
})
export class AnotherChildComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('AnotherChildComponent : ngOnChanges');
  }

  ngOnInit() {
    console.log('AnotherChildComponent : ngOnInit');
  }

  ngDoCheck() {
    console.log('AnotherChildComponent : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('AnotherChildComponent : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AnotherChildComponent : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AnotherChildComponent : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AnotherChildComponent : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('AnotherChildComponent : ngOnDestroy');
  }
}
