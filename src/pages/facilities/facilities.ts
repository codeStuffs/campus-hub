import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Settings, User } from '../../providers/providers';
import { WelcomePage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
})
export class FacilitiesPage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public settings:Settings,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitiesPage');
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

  openFacility(){
    const modal = this.modalCtrl.create('BuildingDetailPage',{data:''});
    modal.present();
  }
}
