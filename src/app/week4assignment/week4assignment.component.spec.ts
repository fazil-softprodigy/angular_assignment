import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4assignmentComponent } from './week4assignment.component';

describe('Week4assignmentComponent', () => {
  let component: Week4assignmentComponent;
  let fixture: ComponentFixture<Week4assignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Week4assignmentComponent]
    });
    fixture = TestBed.createComponent(Week4assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
