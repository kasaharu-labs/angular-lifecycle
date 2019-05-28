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
  selector: 'app-grandchild2',
  templateUrl: './grandchild2.component.html',
  styleUrls: ['./grandchild2.component.scss'],
})
export class Grandchild2Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('  GChild2Component : ngOnChanges');
  }

  ngOnInit() {
    console.log('  GChild2Component : ngOnInit');
  }

  ngDoCheck() {
    console.log('  GChild2Component : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  GChild2Component : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  GChild2Component : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  GChild2Component : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  GChild2Component : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('  GChild2Component : ngOnDestroy');
  }
}
