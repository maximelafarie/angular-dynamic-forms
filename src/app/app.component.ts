import { Component, VERSION } from '@angular/core';

import { QuestionService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  questions: any[];
  version = VERSION.full;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
