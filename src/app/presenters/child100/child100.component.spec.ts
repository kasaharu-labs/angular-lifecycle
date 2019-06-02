import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent100 } from './child100.component';

describe('ChildComponent100', () => {
  let component: ChildComponent100;
  let fixture: ComponentFixture<ChildComponent100>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent100],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent100);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
