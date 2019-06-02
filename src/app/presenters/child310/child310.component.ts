import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child310',
  templateUrl: './child310.component.html',
  styleUrls: ['./child310.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child310Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('    Child310 : ngOnChanges');
  }

  ngOnInit() {
    console.log('    Child310 : ngOnInit');
  }

  ngDoCheck() {
    console.log('    Child310 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('    Child310 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('    Child310 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('    Child310 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('    Child310 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('    Child310 : ngOnDestroy');
  }
}
