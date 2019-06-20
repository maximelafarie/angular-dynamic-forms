import { Component } from '@angular/core';

import { QuestionService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();

    console.log(this.questions);
  }

}
