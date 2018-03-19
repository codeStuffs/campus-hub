import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Settings } from '../../providers/providers';
import { MainPage } from '../pages';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
    private settings: Settings,
    public modalCtrl: ModalController) { }

  login() {
    // const modal = this.modalCtrl.create('LoginPage');
    // modal.present();
    this.navCtrl.setRoot('LoginPage');
  }

  ionViewWillEnter(){
    this.settings.load().then(d=>{
      if(d.isLoggedIn){
        this.navCtrl.setRoot(MainPage);
      }
    }).catch(e=>{
      console.log(e);
    })
  }

  signup() {
    this.navCtrl.setRoot('SignupPage');
  }

  ionViewWillLeave() {

  }
}
