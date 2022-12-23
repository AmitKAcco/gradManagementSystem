import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLeadComponent } from './approval-lead.component';

describe('ApprovalLeadComponent', () => {
  let component: ApprovalLeadComponent;
  let fixture: ComponentFixture<ApprovalLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
