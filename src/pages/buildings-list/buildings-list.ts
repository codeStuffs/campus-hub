import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  Events
} from "ionic-angular";
import { BuildingProvider } from "../../providers/providers";
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: "page-buildings-list",
  templateUrl: "buildings-list.html"
})
export class BuildingsListPage {
  buildings: any;
  buildingName: any;
  data: any; // data could be of any type. But for now it will be just a string
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public buildingProvider: BuildingProvider,
    public navParams: NavParams,
    public event: Events,
    public modalCtrl: ModalController
  ) {
    this.showLoading();
    // get the parameters from the giving page eg[BuildingsPage]
    this.data = navParams.get('data') || navCtrl.setRoot('BuildingsPage');
    this.buildingName = this.data.id;
    this.getBuildings();
  }

  ionViewDidLoad() { }

  getBuildings() {
    this.buildingProvider.getBuilding(this.data)
      .then(d => {
        d.subscribe(r => {
          console.log(r);
          this.buildings = r;
          this.event.publish('loading:Complete');
        }, error => {
          console.log(error);
        })
      }).catch(error => {
        console.log(error);
      })
  }

  openBuildingDetail() {
    const details = {
      name: "My Faculty",
      pictures: {},
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur voluptatem nobis provident minus! Dolorum, eius ut adipisci, quod quas maxime accusantium error id accusamus aut qui praesentium commodi impedit"
    };
    let modal = this.modalCtrl.create("BuildingDetailPage", { data: details });
    modal.present();
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait',
    });

    loading.present();
    this.event.subscribe('loading:Complete', () => {
      loading.dismiss();
    })
  }
  ionViewDidLeave() {
  this.event.unsubscribe('loading:Complete');
  }
}
