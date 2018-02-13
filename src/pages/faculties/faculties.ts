import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the FacultiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faculties',
  templateUrl: 'faculties.html',
})
export class FacultiesPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultiesPage');
  }

  openFaculty(){
    const details = {
      name: "My Faculty",
      pictures: {},
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur voluptatem nobis provident minus! Dolorum, eius ut adipisci, quod quas maxime accusantium error id accusamus aut qui praesentium commodi impedit",
    }
    let modal = this.modalCtrl.create('BuildingDetailPage', {data: details});
    modal.present();
  }
}
