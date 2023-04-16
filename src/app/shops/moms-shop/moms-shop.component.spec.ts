import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomsShopComponent } from './moms-shop.component';

describe('MomsShopComponent', () => {
  let component: MomsShopComponent;
  let fixture: ComponentFixture<MomsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
