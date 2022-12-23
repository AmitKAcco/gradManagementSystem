import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDeliveryComponent } from './technical-delivery.component';

describe('TechnicalDeliveryComponent', () => {
  let component: TechnicalDeliveryComponent;
  let fixture: ComponentFixture<TechnicalDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
