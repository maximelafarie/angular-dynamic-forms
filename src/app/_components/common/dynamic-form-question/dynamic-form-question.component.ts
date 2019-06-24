import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

import { QuestionBase, QuestionConfig } from '@app/models';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormQuestionComponent),
      multi: true
    }
  ]
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() config: QuestionConfig;
  ctx = this;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    if (this.question.iterable) {
      console.log(this.question, this.form, this.questionArray);
    }
  }

  public addItem(question: QuestionBase<any>): void {
    this.questionArray.push(this.fb.control(''));
    console.log(this.question, this.form, this.questionArray, 'keys', Object.keys(this.questionArray.controls));
  }

  public get questionArray(): FormArray {
    return this.form.get(this.question.key) as FormArray;
  }

}
