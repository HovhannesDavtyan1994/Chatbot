import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic3Component } from './infographic3.component';

describe('Infographic3Component', () => {
  let component: Infographic3Component;
  let fixture: ComponentFixture<Infographic3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
