import { TestBed } from '@angular/core/testing';

import { AuthorAuthService } from './author-auth.service';

describe('AuthorAuthService', () => {
  let service: AuthorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
