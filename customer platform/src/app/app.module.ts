import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrainComponent } from './shared/svg/brain_svg/brain.component';
import { CheckInComponent } from './shared/svg/check-in_svg/check-in.component';
import { CloseSvgComponent } from './shared/svg/close-svg/close-svg.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {LoginFormComponent} from "./form/login-form/login-form.component";
import { HomeComponentComponent } from './home-component/home-component.component';
import {RouterModule} from "@angular/router";
import { ExpertGalleryItemComponent } from './exper-gallery/expert-gallery-item/expert-gallery-item.component';
import {StarComponent} from "./shared/svg/star-svg/star.component";
import {ExpertComponent} from "./expert/expert.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SingUpComponent} from "./form/sing-up/sing-up.component";
import {ToggleDirective} from "./shared/directive/toggleDirective";
import { BecomeExpertComponent } from './form/become-expert/become-expert.component';
import {DollarSvg} from "./shared/svg/dollar_svg/dollarSvg";
import {RemoveSpan} from "./shared/directive/removeSpan";
import {ArrowSvg} from "./shared/svg/arrow/arrow-svg";
import {ExpertGalleryComponent} from "./exper-gallery/expert-gallery.component";
import {userPhotoSvg} from "./shared/svg/userPhotoSvg/userPhotoSvg";
import { SearchComponent } from './search/search.component';
import {ExpertModal} from "./expert/expertModal/expertModal";
import { GmailSvgComponent } from './shared/svg/gmail-svg/gmail-svg.component';
import { PhoneSvgComponent } from './shared/svg/phone-svg/phone-svg.component';
import { FacebookSvgComponent } from './shared/svg/facebook-svg/facebook-svg.component';
import { ChatSvgComponent } from './shared/svg/chat-svg/chat-svg.component';
import { FavouriteComponent } from './favourite/favourite.component';
import {NamePipe} from "./shared/pipe/namePipe/name.pipe";
import { LoadingComponent } from './loading/loading.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrainComponent,
    CheckInComponent,
    CloseSvgComponent,
    LoginFormComponent,
    NavComponent,
    FooterComponent,
    SingUpComponent,
    ExpertModal,
    userPhotoSvg,
    ExpertComponent,
    HomeComponentComponent,
    ExpertGalleryItemComponent,
    StarComponent,
    ExpertComponent,
    ToggleDirective,
    BecomeExpertComponent,
    DollarSvg,
    RemoveSpan,
    ArrowSvg,
    ExpertGalleryComponent,
    SearchComponent,
    GmailSvgComponent,
    PhoneSvgComponent,
    FacebookSvgComponent,
    ChatSvgComponent,
    FavouriteComponent,
    NamePipe,
    LoadingComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
