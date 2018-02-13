import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BuildingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building-detail',
  templateUrl: 'building-detail.html',
})

export class BuildingDetailPage {
  buildingDetails;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, private viewCtrl: ViewController) {
    this.buildingDetails = navParams.get('data');
    console.log(this.buildingDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingDetailPage');
  }

  ActivateSection(){

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
