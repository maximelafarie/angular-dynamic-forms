import { Component, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormBuilder, AbstractControl } from '@angular/forms';

import { QuestionBase } from '@app/models';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: UntypedFormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor(private fb: UntypedFormBuilder) { }

  private asFormArray(ctrl: AbstractControl): UntypedFormArray {
    return ctrl as UntypedFormArray;
  }

  public addQuestion(): void {
    this.questionArray.push(this.fb.control(''));
  }

  public removeQuestion(index: number): void {
    this.questionArray.removeAt(index);
  }

  public get questionArray(): UntypedFormArray {
    return this.form.get(this.question.key) as UntypedFormArray;
  }

  public get questionIsIterable(): boolean {
    return !!this.question && this.question.iterable;
  }

  public questionControl(index?: number): AbstractControl {
    return this.questionIsIterable ? this.asFormArray(this.form.get(this.question.key)).controls[index] : this.form.get(this.question.key);
  }

  public questionId(index?: number): string {
    return this.questionIsIterable ? `${this.question.key}-${index}` : this.question.key;
  }

  public questionLabel(index?: number): string {
    return this.questionIsIterable ? `${this.question.label} n°${index + 1}` : this.question.label;
  }
}
