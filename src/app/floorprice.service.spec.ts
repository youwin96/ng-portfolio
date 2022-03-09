import { TestBed } from '@angular/core/testing';

import { FloorpriceService } from './floorprice.service';

describe('FloorpriceService', () => {
  let service: FloorpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
