import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductClienComponent } from './list-product-clien.component';

describe('ListProductClienComponent', () => {
  let component: ListProductClienComponent;
  let fixture: ComponentFixture<ListProductClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductClienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
