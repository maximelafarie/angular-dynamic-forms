import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFormQuestionComponent],
  exports: [DynamicFormQuestionComponent]
})
export class DynamicFormQuestionModule { }
