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
  selector: 'app-grandchild1',
  templateUrl: './grandchild1.component.html',
  styleUrls: ['./grandchild1.component.scss'],
})
export class Grandchild1Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('  GChild1Component : ngOnChanges');
  }

  ngOnInit() {
    console.log('  GChild1Component : ngOnInit');
  }

  ngDoCheck() {
    console.log('  GChild1Component : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  GChild1Component : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  GChild1Component : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  GChild1Component : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  GChild1Component : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('  GChild1Component : ngOnDestroy');
  }
}
