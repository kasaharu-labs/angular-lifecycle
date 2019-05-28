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
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('Child2Component : ngOnChanges');
  }

  ngOnInit() {
    console.log('Child2Component : ngOnInit');
  }

  ngDoCheck() {
    console.log('Child2Component : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Child2Component : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child2Component : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child2Component : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child2Component : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child2Component : ngOnDestroy');
  }
}
