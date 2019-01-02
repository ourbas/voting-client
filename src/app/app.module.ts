import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { VoteService } from './vote/vote.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [VoteService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
