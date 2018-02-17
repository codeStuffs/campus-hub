import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuildingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buildings',
  templateUrl: 'buildings.html',
})
export class BuildingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingsPage');
  }


  openPage(page: string): void{
    switch (page){
      case"faculties":
        this.navCtrl.push("FacultiesPage");
        break;
      case"io":
        this.navCtrl.push("BuildingDetailPage");
        break;
    }
  }
}
