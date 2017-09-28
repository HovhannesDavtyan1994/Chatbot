import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic1 } from './infographic1.component';

describe('infographic1', () => {
  let component: Infographic1;
  let fixture: ComponentFixture<Infographic1>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infographic1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infographic1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
