import { TestBed } from '@angular/core/testing';

import { QuestionControlService } from './question-control.service';

describe('QuestionControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [QuestionControlService]
  }));

  it('should be created', () => {
    const service: QuestionControlService = TestBed.get(QuestionControlService);
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
