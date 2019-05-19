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
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('ChildComponent : ngOnChanges -----');
  }

  ngOnInit() {
    console.log('ChildComponent : ngOnInit -----');
  }

  ngDoCheck() {
    console.log('ChildComponent : ngDoCheck -----');
  }

  ngAfterContentInit() {
    console.log('ChildComponent : ngAfterContentInit -----');
  }

  ngAfterContentChecked() {
    console.log('ChildComponent : ngAfterContentChecked -----');
  }

  ngAfterViewInit() {
    console.log('ChildComponent : ngAfterViewInit -----');
  }

  ngAfterViewChecked() {
    console.log('ChildComponent : ngAfterViewChecked -----');
  }

  ngOnDestroy() {
    console.log('ChildComponent : ngOnDestroy -----');
  }
}
