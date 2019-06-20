import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {

      if (question.iterable) {

        group[question.key] = question.required  ? new FormArray([new FormControl(question.value || '')
        ]) : new FormArray([new FormControl(question.value || '')], Validators.required);

      } else {

        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');

      }

    });
    return new FormGroup(group);
  }
}
