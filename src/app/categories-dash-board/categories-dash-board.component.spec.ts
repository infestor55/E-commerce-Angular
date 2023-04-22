import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDashBoardComponent } from './categories-dash-board.component';

describe('CategoriesDashBoardComponent', () => {
  let component: CategoriesDashBoardComponent;
  let fixture: ComponentFixture<CategoriesDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
