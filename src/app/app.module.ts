import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './View/header/header.component';
import { FooterComponent } from './View/footer/footer.component';
import { HomeComponent } from './View/home/home.component';
import { DetailJobComponent } from './View/detail-job/detail-job.component';
import { ManageJobComponent } from './View/manage-job/manage-job.component';
import { LoginComponent } from './View/login/login.component';
import { RegisterComponent } from './View/register/register.component';
import { ContactComponent } from './View/contact/contact.component';
import { AlljobComponent } from './View/alljob/alljob.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailJobComponent,
    ManageJobComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AlljobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
