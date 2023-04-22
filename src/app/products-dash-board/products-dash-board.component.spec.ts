import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDashBoardComponent } from './products-dash-board.component';

describe('ProductsDashBoardComponent', () => {
  let component: ProductsDashBoardComponent;
  let fixture: ComponentFixture<ProductsDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
