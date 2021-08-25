import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostStatusComponent } from './post-status/post-status.component';
import { PostErrorComponent } from './post-error/post-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PostStatusComponent,
    PostErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
