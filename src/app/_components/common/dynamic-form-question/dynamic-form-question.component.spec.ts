import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DynamicFormQuestionModule } from './dynamic-form-question.module';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormQuestionComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DynamicFormQuestionModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponent);
    component = fixture.componentInstance;

    // Mock form
    component.form = new UntypedFormGroup({
      firstName: new UntypedFormControl()
    });

    // Mock question
    component.question = {
      value: 'Bombasto',
      key: 'firstName',
      label: 'First name',
      required: true,
      order: 1,
      controlType: 'textbox',
      placeholder: '',
      iterable: false
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
