import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  min: number | string;
  max: number | string;
  pattern: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
    this.min = options['min'];
    this.max = options['max'];
    this.pattern = options['pattern'];
  }
}
