import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusninesslogicComponent } from './busninesslogic.component';

describe('BusninesslogicComponent', () => {
  let component: BusninesslogicComponent;
  let fixture: ComponentFixture<BusninesslogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusninesslogicComponent]
    });
    fixture = TestBed.createComponent(BusninesslogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
