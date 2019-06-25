import { Injectable } from '@angular/core';

import {
  QuestionBase,
  DropdownQuestion,
  TextboxQuestion,
  TextareaQuestion
} from '@app/models';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        placeholder: 'Select one option',
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'jobs',
        label: 'Jobs',
        value: ['toto'],
        iterable: true,
        order: 5
      }),

      new TextboxQuestion({
        key: 'level',
        label: 'Level',
        type: 'range',
        value: 70,
        min: 20,
        max: 200,
        order: 6
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextareaQuestion({
        key: 'message',
        label: 'Message',
        cols: 30,
        rows: 10,
        placeholder: 'Your message here...',
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
