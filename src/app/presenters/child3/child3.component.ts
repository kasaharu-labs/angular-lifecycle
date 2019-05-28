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
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
})
export class Child3Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('Child3Component : ngOnChanges');
  }

  ngOnInit() {
    console.log('Child3Component : ngOnInit');
  }

  ngDoCheck() {
    console.log('Child3Component : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Child3Component : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child3Component : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child3Component : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child3Component : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child3Component : ngOnDestroy');
  }
}
