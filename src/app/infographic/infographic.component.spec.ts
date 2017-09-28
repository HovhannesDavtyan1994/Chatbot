import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic } from './infographic.component';

describe('infographic', () => {
  let component: Infographic;
  let fixture: ComponentFixture<Infographic>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
