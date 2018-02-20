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
      case "news":
        this.navCtrl.setRoot("NewsAndEventsPage"); // mostlikely this should be used
        break;
      case "profile":
        this.navCtrl.push("AccountPage"); // mostlikely this should be used
        break;
    }
  }
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
