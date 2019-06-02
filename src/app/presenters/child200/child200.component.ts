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
  selector: 'app-child200',
  templateUrl: './child200.component.html',
  styleUrls: ['./child200.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child200Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('  Child200 : ngOnChange');
  }

  ngOnInit() {
    console.log('  Child200 : ngOnInit');
  }

  ngDoCheck() {
    console.log('  Child200 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  Child200 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  Child200 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  Child200 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  Child200 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('  Child200 : ngOnDestroy');
  }
}
