import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic7Component } from './infographic7.component';

describe('Infographic7Component', () => {
  let component: Infographic7Component;
  let fixture: ComponentFixture<Infographic7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
