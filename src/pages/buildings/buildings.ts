import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Settings } from '../../providers/providers';
import { WelcomePage } from '../pages';

/**
 * Generated class for the BuildingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-buildings",
  templateUrl: "buildings.html"
})
export class BuildingsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public settings: Settings) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BuildingsPage");
  }

  /* since the building list page is generic we pass in
   * a param which will be used to
   * determine the type of building we are viewing.
   * In cases like faculites and dorms
  */

  ionViewWillEnter(){
    this.settings.load().then(d=>{
      if(!d.isLoggedIn){
        this.navCtrl.setRoot(WelcomePage);
      }
    }).catch(e=>{
      /*console.log(e);*/
    })
  }

  openPage(page: string): void {
    switch (page) {
      case "faculties":
        this.navCtrl.push("BuildingsListPage", { data: "Faculties" });
        break;
      case "dorms":
        this.navCtrl.push("BuildingsListPage", { data: "Dormitories" });
        break;
      case "io":
        this.navCtrl.push("BuildingDetailPage");
        break;
    }
  }
}
