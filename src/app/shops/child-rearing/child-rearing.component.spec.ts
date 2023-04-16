import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRearingComponent } from './child-rearing.component';

describe('ChildRearingComponent', () => {
  let component: ChildRearingComponent;
  let fixture: ComponentFixture<ChildRearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRearingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
