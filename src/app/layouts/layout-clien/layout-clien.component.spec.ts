import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutClienComponent } from './layout-clien.component';

describe('LayoutClienComponent', () => {
  let component: LayoutClienComponent;
  let fixture: ComponentFixture<LayoutClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutClienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
