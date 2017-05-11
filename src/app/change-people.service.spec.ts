import { TestBed, inject } from '@angular/core/testing';

import { ChangePeopleService } from './change-people.service';

describe('ChangePeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangePeopleService]
    });
  });

  it('should ...', inject([ChangePeopleService], (service: ChangePeopleService) => {
    expect(service).toBeTruthy();
  }));
});
