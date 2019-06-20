import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase, QuestionConfig } from '@app/models';
import { QuestionControlService } from '@app/services';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(
    @Inject('questionConfig') public config: QuestionConfig,
    private qcs: QuestionControlService
  ) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.value;
  }

}
