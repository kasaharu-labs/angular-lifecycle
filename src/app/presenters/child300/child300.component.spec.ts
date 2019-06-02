import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child300Component } from './child300.component';

describe('Child300Component', () => {
  let component: Child300Component;
  let fixture: ComponentFixture<Child300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Child300Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
