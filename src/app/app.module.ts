import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { PasswordComponent } from './password/password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LeftComponent,
    RightComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
