import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-buildings-list",
  templateUrl: "buildings-list.html"
})
export class BuildingsListPage {
  data: any; // data could be of any type. But for now it will be just a string
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    // get the parameters from the giving page eg[BuildingsPage]
    this.data = navParams.get('data') || navCtrl.setRoot('BuildingsPage'); 
  }

  ionViewDidLoad() {}

  openFaculty() {
    const details = {
      name: "My Faculty",
      pictures: {},
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur voluptatem nobis provident minus! Dolorum, eius ut adipisci, quod quas maxime accusantium error id accusamus aut qui praesentium commodi impedit"
    };
    let modal = this.modalCtrl.create("BuildingDetailPage", { data: details });
    modal.present();
  }
}
