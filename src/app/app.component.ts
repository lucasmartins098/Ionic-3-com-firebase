import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/data-service/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { BarraPage } from '../pages/barra/barra';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  rootPage:any = BarraPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      auth.authNotifier.subscribe((authed) => {
        console.log('app.component.ts: auth.authNotifier =', authed);
        if (authed) {
          console.log('set rootPage to Tabs');
          this.rootPage = TabsPage;
        } else {
          console.log('set rootPage to Login');
          this.rootPage = BarraPage;
        }
      });
    });
  }
}
