/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaravillasService } from './maravillas.service';

describe('Service: Series', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaravillasService]
    });
  });

  it('should ...', inject([MaravillasService], (service: MaravillasService) => {
    expect(service).toBeTruthy();
  }));
});
