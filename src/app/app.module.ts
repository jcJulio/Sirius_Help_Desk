import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChamadosPage } from '../pages/chamados/chamados';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome'; 
import {DetalhesChamadoPage} from '../pages/detalhes-chamado/detalhes-chamado';
import {FiltrosPage} from '../pages/filtros/filtros';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';
import { Media} from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { Base64 } from '@ionic-native/base64';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';





@NgModule({
  declarations: [
    MyApp,
    ChamadosPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    FiltrosPage,
    DetalhesChamadoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
          ios: {
            statusbarPadding: true,
            tabsHideOnSubPages: true
          }
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChamadosPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    FiltrosPage,
    DetalhesChamadoPage
  ],
  providers: [
    StatusBar,
    FileTransfer,
    Media,
    FileTransferObject,
    File,
    SplashScreen,
    Camera,
    NativeAudio,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
