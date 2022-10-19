import { Injectable } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormArray } from '@angular/forms';

import { QuestionBase } from '@app/models';

@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {

      if (question.iterable) {

        if (!Array.isArray(question.value)) {
          question.value = !!question.value ? [question.value] : [''];
        }

        const tmpArray: UntypedFormArray = question.required ? new UntypedFormArray([]) : new UntypedFormArray([], Validators.required);

        if (!question.value || !question.value.length) {
          tmpArray.push(new UntypedFormControl(''));
        } else {
          question.value.forEach(val => {
            tmpArray.push(new UntypedFormControl(val));
          });
        }

        group[question.key] = tmpArray;

      } else {

        group[question.key] = question.required ? new UntypedFormControl(question.value || '', Validators.required)
          : new UntypedFormControl(question.value || '');

      }

    });
    return new UntypedFormGroup(group);
  }
}
