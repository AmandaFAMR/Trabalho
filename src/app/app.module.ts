import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ComentarioPage } from '../pages/comentario/comentario';
import { DetalsPage } from '../pages/detals/detals';
import { OpniaoPage } from '../pages/opniao/opniao';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComentarioPage,
    DetalsPage,
    OpniaoPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComentarioPage,
    DetalsPage,
    OpniaoPage
    

   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
