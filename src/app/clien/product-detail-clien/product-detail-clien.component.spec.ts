import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailClienComponent } from './product-detail-clien.component';

describe('ProductDetailClienComponent', () => {
  let component: ProductDetailClienComponent;
  let fixture: ComponentFixture<ProductDetailClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailClienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
