import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child200Component } from './child200.component';

describe('Child200Component', () => {
  let component: Child200Component;
  let fixture: ComponentFixture<Child200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Child200Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
