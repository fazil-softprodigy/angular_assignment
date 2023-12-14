import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekLastComponent } from './week-last.component';

describe('WeekLastComponent', () => {
  let component: WeekLastComponent;
  let fixture: ComponentFixture<WeekLastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekLastComponent]
    });
    fixture = TestBed.createComponent(WeekLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
