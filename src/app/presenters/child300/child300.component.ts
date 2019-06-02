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
  selector: 'app-child300',
  templateUrl: './child300.component.html',
  styleUrls: ['./child300.component.scss'],
})
export class Child300Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('  Child300 : ngOnChange');
  }

  ngOnInit() {
    console.log('  Child300 : ngOnInit');
  }

  ngDoCheck() {
    console.log('  Child300 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  Child300 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  Child300 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  Child300 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  Child300 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('  Child300 : ngOnDestroy');
  }
}
