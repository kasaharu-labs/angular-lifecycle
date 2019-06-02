import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child100',
  templateUrl: './child100.component.html',
  styleUrls: ['./child100.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent100
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input()
  parentComponentName: string;
  @Input()
  count: number;
  constructor() {}

  ngOnChanges() {
    console.log('  Child100 : ngOnChange');
  }

  ngOnInit() {
    console.log('  Child100 : ngOnInit');
  }

  ngDoCheck() {
    console.log('  Child100 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  Child100 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  Child100 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  Child100 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  Child100 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('  Child100 : ngOnDestroy');
  }
}
