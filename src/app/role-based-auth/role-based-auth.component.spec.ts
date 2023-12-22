import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedAuthComponent } from './role-based-auth.component';

describe('RoleBasedAuthComponent', () => {
  let component: RoleBasedAuthComponent;
  let fixture: ComponentFixture<RoleBasedAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleBasedAuthComponent]
    });
    fixture = TestBed.createComponent(RoleBasedAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
