import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms'

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { GuessPage } from '../pages/guess/guess';
import { ManySubjectsPage } from '../pages/many-subjects/many-subjects';
import { OneSubjectsPage } from '../pages/one-subjects/one-subjects';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuessPage,
    AboutPage,
    ManySubjectsPage,
    OneSubjectsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuessPage,
    AboutPage,
    ManySubjectsPage,
    OneSubjectsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
