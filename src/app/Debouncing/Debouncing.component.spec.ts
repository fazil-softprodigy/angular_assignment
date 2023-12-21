import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingComponent } from './Debouncing.component';

describe('DebouncingComponent', () => {
  let component: DebouncingComponent;
  let fixture: ComponentFixture<DebouncingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebouncingComponent]
    });
    fixture = TestBed.createComponent(DebouncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
