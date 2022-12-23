import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateMangerComponent } from './graduate-manger.component';

describe('GraduateMangerComponent', () => {
  let component: GraduateMangerComponent;
  let fixture: ComponentFixture<GraduateMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduateMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
