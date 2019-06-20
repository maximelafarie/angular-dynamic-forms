import { QuestionBase } from './question-base';

export class TextareaQuestion extends QuestionBase<string> {
  controlType = 'textarea';
  cols: number;
  rows: number;
  maxlength: number;
  minlength: number;

  constructor(options: {} = {}) {
    super(options);
    this.cols = options['cols'] || 0;
    this.rows = options['rows'] || 0;
    this.maxlength = options['maxlength'] || null;
    this.minlength = options['minlength'] || null;
  }
}
