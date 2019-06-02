import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child310Component } from './child310.component';

describe('Child310Component', () => {
  let component: Child310Component;
  let fixture: ComponentFixture<Child310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
