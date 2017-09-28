import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic4Component } from './infographic4.component';

describe('Infographic4Component', () => {
  let component: Infographic4Component;
  let fixture: ComponentFixture<Infographic4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
