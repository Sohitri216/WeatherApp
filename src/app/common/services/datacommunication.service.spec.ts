import { TestBed, inject } from '@angular/core/testing';

import { DatacommunicationService } from './datacommunication.service';

describe('DatacommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacommunicationService]
    });
  });

  it('should be created', inject([DatacommunicationService], (service: DatacommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
