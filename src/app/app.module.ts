import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { PlaceInitPage } from '../pages/place-init/place-init';
import { FavoritesPage } from '../pages/favorites/favorites';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/userService';
import { HashPipe } from '../services/hashPipe';
import {
 GoogleMaps,
 GoogleMap,
} from '@ionic-native/google-maps';
@NgModule({
  declarations: [
    
    MyApp,
    AboutPage, 
    HomePage,
    TabsPage,
    FavoritesPage,
    StartPage,
    HashPipe,
    PlaceInitPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), BrowserModule, HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FavoritesPage,
    StartPage,
    PlaceInitPage
  ],
  providers: [
    StatusBar,
    UserService,
    SplashScreen,
    HashPipe,
     GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
