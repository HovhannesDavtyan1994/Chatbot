import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic6Component } from './infographic6.component';

describe('Infographic6Component', () => {
  let component: Infographic6Component;
  let fixture: ComponentFixture<Infographic6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
