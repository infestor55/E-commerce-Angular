import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiesShopComponent } from './babies-shop.component';

describe('BabiesShopComponent', () => {
  let component: BabiesShopComponent;
  let fixture: ComponentFixture<BabiesShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabiesShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabiesShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
