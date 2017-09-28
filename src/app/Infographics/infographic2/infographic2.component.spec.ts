import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic2Component } from './infographic2.component';

describe('Infographic2Component', () => {
  let component: Infographic2Component;
  let fixture: ComponentFixture<Infographic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
