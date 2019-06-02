import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child320Component } from './child320.component';

describe('Child320Component', () => {
  let component: Child320Component;
  let fixture: ComponentFixture<Child320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Child320Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
