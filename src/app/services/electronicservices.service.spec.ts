import { TestBed } from '@angular/core/testing';

import { ElectronicservicesService } from '../electronicservices.service';

describe('ElectronicservicesService', () => {
  let service: ElectronicservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
