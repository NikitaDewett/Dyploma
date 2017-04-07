import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
