import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './ecosystems/about/about.component';
import { ContactComponent } from './ecosystems/contact/contact.component';
import { HomeComponent } from './ecosystems/home/home.component';

import { NavComponent } from './organisms/nav/nav.component';

import { ButtonComponent } from './atoms/button/button.component';

import { SearchInputComponent } from './molecules/search-input/search-input.component';
import { LoginComponent } from './molecules/login/login.component';
import { UserComponent } from './ecosystems/user/user.component';
import { UserCardComponent } from './molecules/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ButtonComponent,
    SearchInputComponent,
    LoginComponent,
    UserComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
