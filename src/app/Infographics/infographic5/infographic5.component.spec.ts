import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic5Component } from './infographic5.component';

describe('Infographic5Component', () => {
  let component: Infographic5Component;
  let fixture: ComponentFixture<Infographic5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
