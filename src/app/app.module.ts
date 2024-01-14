import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './layout/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatButtonModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule
    // FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
