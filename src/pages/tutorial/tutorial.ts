import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { Settings } from '../../providers/providers';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
  settingsReady = false;

  constructor(public navCtrl: NavController, 
    public menu: MenuController, translate: TranslateService,
    public platform: Platform, public settings: Settings) {
    this.dir = platform.dir();

    this.settings.load().then(() => {
      this.settingsReady = true;
    });

    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];
      });
  }

  startApp() {
    this.settings.setValue('hasSeenTutorial', true)
    .then(()=>{
      this.navCtrl.setRoot('WelcomePage', {}, {
        animate: true,
        direction: 'forward'
      });
    })
  }
  //{"option1":true,"option2":"Ionitron J. Framework","option3":"3","option4":"Hello","hasSeenTutorial":true,"uid":"","isLoggedIn":false}	
// {"option1":true,"option2":"Ionitron J. Framework","option3":"3","option4":"Hello","hasSeenTutorial":false,"uid":"","isLoggedIn":false}	
  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
