import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2Component } from './Assignment2.component';

describe('Assignment2Component', () => {
  let component: Assignment2Component;
  let fixture: ComponentFixture<Assignment2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assignment2Component]
    });
    fixture = TestBed.createComponent(Assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
