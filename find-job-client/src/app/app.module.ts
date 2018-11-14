import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent, LoginModal, SignupModal } from './landing/landing.component';

import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


// import angular material 
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDialogModule,
  MatSelectModule,
} from '@angular/material';



const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'reset', component: ResetPasswordComponent },


  { path: '', component: LandingComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    ResetPasswordComponent,
    LoginModal,
    SignupModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule
  ], entryComponents: [
    LoginModal,
    SignupModal,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
