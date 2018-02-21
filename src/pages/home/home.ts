import { Component, ViewChild } from "@angular/core";
import { IonicPage, Nav, NavController, MenuController } from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  drawerOptions: any;

  constructor(public navCtrl: NavController, public menu: MenuController,) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  gotoPage(page) {
    // this.navCtrl.push(Tab1Root); // Used this method in other to add a back button

    switch (page) {
      case "facilties":
        this.navCtrl.setRoot("FacilitiesPage");
        break;
      case "buildings":
        this.navCtrl.setRoot("BuildingsPage");
        break;
      case "newsAndEvents":
        this.navCtrl.setRoot("NewsandeventsPage"); 
        break;
      case "profile":
        this.navCtrl.push("AccountPage"); 
        break;
    }
  }
  ionViewDidEnter() {
    // disabling the right menu on the homepage
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the home page
    this.menu.enable(true);
  }
}
