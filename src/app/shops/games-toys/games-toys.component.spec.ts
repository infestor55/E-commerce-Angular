import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesToysComponent } from './games-toys.component';

describe('GamesToysComponent', () => {
  let component: GamesToysComponent;
  let fixture: ComponentFixture<GamesToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
