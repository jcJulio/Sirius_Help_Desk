import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome'; 
import { NativeAudio } from '@ionic-native/native-audio';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
  
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nativeAudio: NativeAudio) {
    platform.ready().then(() => {

        //carrega o audio
        this.nativeAudio.preloadSimple('sound', 'assets/sounds/sound.mp3');
  
        
        statusBar.overlaysWebView(false);
        statusBar.backgroundColorByHexString('#162d51');
    

      splashScreen.hide();
    });
  }
}
