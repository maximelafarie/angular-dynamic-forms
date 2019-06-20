import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DynamicFormModule } from './_components/common/dynamic-form/dynamic-form.module';
import { QuestionService } from '@app/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormModule.forRoot({
      validClass: 'good',
      invalidClass: 'bad'
    })
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
