import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic8Component } from './infographic8.component';

describe('Infographic8Component', () => {
  let component: Infographic8Component;
  let fixture: ComponentFixture<Infographic8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
