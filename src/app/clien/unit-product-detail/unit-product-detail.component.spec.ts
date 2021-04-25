import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitProductDetailComponent } from './unit-product-detail.component';

describe('UnitProductDetailComponent', () => {
  let component: UnitProductDetailComponent;
  let fixture: ComponentFixture<UnitProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
