import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuedUsersComponent } from './valued-users.component';

describe('ValuedUsersComponent', () => {
  let component: ValuedUsersComponent;
  let fixture: ComponentFixture<ValuedUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuedUsersComponent]
    });
    fixture = TestBed.createComponent(ValuedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
