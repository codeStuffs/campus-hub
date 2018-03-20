import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Settings, User } from '../../providers/providers';
import { WelcomePage } from '../pages';

/**
 * Generated class for the DirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public settings:Settings) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
  }

  ionViewWillEnter(){
    this.settings.load().then(d=>{
      if(!d.isLoggedIn){
        this.navCtrl.setRoot(WelcomePage);
      }
    }).catch(e=>{
      /*console.log(e);*/
    })
  }

}
