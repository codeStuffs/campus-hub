import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { DATA_PROVIDER, firebaseConfig } from '../config';
import { FirebaseProvider } from '../providers/providers';
import { DataProvider } from '../providers/data/data';
import { NetworkProvider } from '../providers/network/network';
import { BuildingProvider } from '../providers/building/building';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


function getDataProvider(){
  switch(DATA_PROVIDER){
    case 'FIREBASE':
    return FirebaseProvider;
    default:
    throw new Error('Unknown Provider');
  }
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello',
    hasSeenTutorial: false,
    uid: '',
    isLoggedIn: false
  });
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: "__icampushub",
      storeName: "__icampushub",
      driverOrder: ['websql', 'indexeddb']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,NgxErrorsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Api,
    Items,
    User,
    FirebaseProvider,
    AngularFireAuth,
    /*AngularFirestore,*/
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: DataProvider, useClass: getDataProvider(), },
    NetworkProvider,
    BuildingProvider,    
 
  ]
})
export class AppModule { }
