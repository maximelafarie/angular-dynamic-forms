import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { QuestionBase, QuestionConfig } from '@app/models';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() config: QuestionConfig;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() {
  }

  ngOnInit() {

    if (this.question.iterable) {
      console.log(this.question);
    }
  }

  public addItem(question: QuestionBase<any>): void {
    (<FormArray> this.form.get(question.key)).push(new FormControl(''));
    console.log(question);
  }

}
