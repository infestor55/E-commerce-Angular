import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorRegisterComponent } from './author-register.component';

describe('AuthorRegisterComponent', () => {
  let component: AuthorRegisterComponent;
  let fixture: ComponentFixture<AuthorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
