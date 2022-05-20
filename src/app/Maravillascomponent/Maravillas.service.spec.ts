/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaravillasService } from './Maravillas.service';

describe('Service: Maravillas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaravillasService]
    });
  });

  it('should ...', inject([MaravillasService], (service: MaravillasService) => {
    expect(service).toBeTruthy();
  }));
});
