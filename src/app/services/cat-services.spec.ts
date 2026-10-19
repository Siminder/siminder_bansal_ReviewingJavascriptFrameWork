import { TestBed } from '@angular/core/testing';
import { CatServices } from './cat-services';

describe('CatServices', () => {
  let service: CatServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
