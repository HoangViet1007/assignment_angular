import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUnitComponent } from './dashboard-unit.component';

describe('DashboardUnitComponent', () => {
  let component: DashboardUnitComponent;
  let fixture: ComponentFixture<DashboardUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
