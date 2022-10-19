import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { QuestionBase } from '@app/models';
import { QuestionControlService } from '@app/services';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: UntypedFormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.value;
  }

}
