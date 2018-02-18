import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
})
export class FacilitiesPage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitiesPage');
  }

  openFacility(){
    const modal = this.modalCtrl.create('BuildingDetailPage',{data:''});
    modal.present();
  }
}
