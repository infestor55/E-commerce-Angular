import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListDashBoardComponent } from './users-list-dash-board.component';

describe('UsersListDashBoardComponent', () => {
  let component: UsersListDashBoardComponent;
  let fixture: ComponentFixture<UsersListDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
