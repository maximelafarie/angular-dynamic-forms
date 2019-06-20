import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionModule } from '../dynamic-form-question/dynamic-form-question.module';

import { QuestionConfig } from '@app/models';
import { QuestionControlService } from '@app/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormQuestionModule
  ],
  providers: [QuestionControlService],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {

  /**
   * Use in AppModule: new instance of NgxSmartModal.
   */
  public static forRoot(config?: QuestionConfig): ModuleWithProviders {
    if (!config) {
      config = { validClass: 'valid', invalidClass: 'invalid' };
    }

    return {
      ngModule: DynamicFormModule,
      providers: [QuestionControlService, { provide: 'questionConfig', useValue: config }]
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of NgxSmartModal.
   */
  public static forChild(): ModuleWithProviders {
    return {
      ngModule: DynamicFormModule,
      providers: [QuestionControlService]
    };
  }

}
