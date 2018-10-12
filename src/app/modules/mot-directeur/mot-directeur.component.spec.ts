import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDirecteurComponent } from './mot-directeur.component';

describe('MotDirecteurComponent', () => {
  let component: MotDirecteurComponent;
  let fixture: ComponentFixture<MotDirecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotDirecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
