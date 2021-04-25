import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactoryComponent } from './list-factory.component';

describe('ListFactoryComponent', () => {
  let component: ListFactoryComponent;
  let fixture: ComponentFixture<ListFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
