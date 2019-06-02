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
  selector: 'app-child320',
  templateUrl: './child320.component.html',
  styleUrls: ['./child320.component.scss'],
})
export class Child320Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('    Child320 : ngOnChanges');
  }

  ngOnInit() {
    console.log('    Child320 : ngOnInit');
  }

  ngDoCheck() {
    console.log('    Child320 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('    Child320 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('    Child320 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('    Child320 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('    Child320 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('    Child320 : ngOnDestroy');
  }
}
