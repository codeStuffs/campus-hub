import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Settings, User } from '../../providers/providers';
import { WelcomePage } from '../pages';

/**
 * Generated class for the NewsandeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsandevents',
  templateUrl: 'newsandevents.html',
})



export class NewsandeventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public settings:Settings) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsandeventsPage');
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

  /**
   * Navigate to the detail page for this item.
   */
  openNews(item) {
    if(item === 'news'){
      this.navCtrl.push('NewsPage');
    }
  }

  openEvents(item){
    if(item === 'events'){
      this.navCtrl.push('EventsPage')
    }
  }

}
