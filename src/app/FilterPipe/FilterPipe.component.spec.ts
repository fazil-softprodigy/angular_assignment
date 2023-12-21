import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipeComponent } from './FilterPipe.component';

describe('FilterPipeComponent', () => {
  let component: FilterPipeComponent;
  let fixture: ComponentFixture<FilterPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPipeComponent]
    });
    fixture = TestBed.createComponent(FilterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
