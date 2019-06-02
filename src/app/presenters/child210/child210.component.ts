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
  selector: 'app-child210',
  templateUrl: './child210.component.html',
  styleUrls: ['./child210.component.scss'],
})
export class Child210Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('    Child210 : ngOnChanges');
  }

  ngOnInit() {
    console.log('    Child210 : ngOnInit');
  }

  ngDoCheck() {
    console.log('    Child210 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('    Child210 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('    Child210 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('    Child210 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('    Child210 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('    Child210 : ngOnDestroy');
  }
}
