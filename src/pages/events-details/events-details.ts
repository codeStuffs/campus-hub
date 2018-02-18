import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EventsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-details',
  templateUrl: 'events-details.html',
})
export class EventsDetailsPage {
  eventDetail: any;
  conferenceDate;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
     public navParams: NavParams) {
    this.eventDetail = navParams.get('event');
    this.conferenceDate = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsDetailsPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  

}
