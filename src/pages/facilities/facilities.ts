import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


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
