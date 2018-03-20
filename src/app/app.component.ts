import { Component, ViewChild, Input } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, Events } from 'ionic-angular';


import { FirstRunPage } from '../pages/pages';
import { Settings,User } from '../providers/providers';


/*<ion-buttons start>
<button danger outline (click)="resetItems()">
  <ion-icon name="create">
  Button 1
</ion-icon>
</button>
</ion-buttons>*/

/*<ion-header>
<ion-toolbar>

<ion-title>Navigation</ion-title>
</ion-toolbar>
</ion-header>*/


@Component({
  template: `<ion-menu [content]="content" [swipeEnabled]="false">
    <ion-header>
      <ion-toolbar>
        <ion-buttons end>
          <button ion-button menuClose="left" style="background: none; font-size: 1.8rem" 
                  (click)="opensettings('SettingsPage')">
            <ion-icon name="settings"></ion-icon>
          </button>
        </ion-buttons>
        
        <ion-title>
          Menu
        </ion-title>
      </ion-toolbar>
      
      
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          <ion-icon name="{{p.icon}}" item-left></ion-icon>
          {{p.title}}
        </button>
        
        
      </ion-list>
      
      <ion-buttons start>
        <button ion-button menuClose="left" 
                style="background: none; font-size: 2rem; margin-top: 50px;
                color: #fe4332 !important;margin-left: 40%;margin-right: 40%;
                border-radius: 30px !important;"
                (click)="logOutUid()">
          <ion-icon name="power"></ion-icon>
        </button>
        
      </ion-buttons>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  //@Input('swipeEnabled') menuSwipe; // TODO: activate on user log in

  logsOut?: boolean;


  pages: any[] = [
    { title: 'Home', component: 'HomePage', icon: 'home' },
    { title: 'Profile', component: 'AccountPage', icon: 'person' },
    { title: 'Building', component: 'BuildingsPage', icon: 'school' },
    { title: 'Facilities', component: 'FacilitiesPage', icon: 'medal' },
    /* { title: 'Search', component: 'SearchPage' },
     { title: 'Signup', component: 'SignupPage' },,*/
     /*{ title: 'Login', component: 'LoginPage' },*/
    /* { title: 'Master Detail', component: 'ListMasterPage' },
     { title: 'Menu', component: 'MenuPage' ,index: 0, icon: 'calendar'  },*/
    { title: 'Directory', component: 'DirectoryPage', icon: 'contacts' },
    { title: 'Guide', component: 'CardsPage', icon: 'information-circle' },
    /*{ title: 'Schedule', name: 'TabsPage', component: MenuPage, tabComponent: SchedulePage, index: 0, icon: 'calendar' },*/
    /*{ title: 'Settings', component: 'SettingsPage' }*/

  ];

  constructor(private translate: TranslateService,  public settings: Settings,
    private config: Config,
    private platform: Platform,
    private statusBar: StatusBar,
    private events: Events,
    public user: User,
    private splashScreen: SplashScreen) {

     this.settings.load().then(() => {
        settings.getValue('hasSeenTutorial')
        .then((data) => {
          if (data) {
            settings.getValue('isLoggedIn')
            .then((data)=>{
              if(data){
                this.nav.setRoot('HomePage');
              }else{
                this.nav.setRoot('LoginPage');
              }
            })
          } else {
            this.nav.setRoot('TutorialPage');
            console.log(data);
          }
          this.platFormReady();
        })
      });
    this.initTranslate();
    this.listenToLogInEvents();

  }


  platFormReady(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  listenToLogInEvents(){
    // this.events.subscribe('user:login', ()=>{

    // })

    // this.events.subscribe('user:signup', ()=>{

    // })
    this.events.subscribe('user:logout', () => {
      this.nav.setRoot('WelcomePage');
    });
  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  opensettings(page) {
    this.nav.setRoot(page);
  }

  logOutUid(){
    this.user.logout();
    //TODO: Prevent going back after logout
  }
}
