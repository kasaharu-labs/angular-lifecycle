import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandchild2Component } from './grandchild2.component';

describe('Grandchild2Component', () => {
  let component: Grandchild2Component;
  let fixture: ComponentFixture<Grandchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
