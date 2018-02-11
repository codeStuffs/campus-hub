import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsandeventsPage');
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
