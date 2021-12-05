import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
