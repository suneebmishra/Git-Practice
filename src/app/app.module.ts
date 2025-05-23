import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // For form handling

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component'; // ✅ Import this
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent // ✅ Add this here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
