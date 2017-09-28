import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic1Component } from './infographic1.component';

describe('infographic1', () => {
  let component: Infographic1Component;
  let fixture: ComponentFixture<Infographic1Component>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
