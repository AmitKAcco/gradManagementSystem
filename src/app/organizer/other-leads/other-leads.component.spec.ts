import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLeadsComponent } from './other-leads.component';

describe('OtherLeadsComponent', () => {
  let component: OtherLeadsComponent;
  let fixture: ComponentFixture<OtherLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
