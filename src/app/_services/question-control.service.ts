import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from '@app/models';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {

      if (question.iterable) {

        if (!Array.isArray(question.value)) {
          question.value = !!question.value ? [question.value] : [''];
        }

        const tmpArray: FormArray = question.required ? new FormArray([]) : new FormArray([], Validators.required);

        if (!question.value || !question.value.length) {
          tmpArray.push(new FormControl(''));
        } else {
          question.value.forEach(val => {
            tmpArray.push(new FormControl(val));
          });
        }

        group[question.key] = tmpArray;

      } else {

        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');

      }

    });
    return new FormGroup(group);
  }
}
