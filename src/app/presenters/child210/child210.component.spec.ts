import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child210Component } from './child210.component';

describe('Child210Component', () => {
  let component: Child210Component;
  let fixture: ComponentFixture<Child210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
