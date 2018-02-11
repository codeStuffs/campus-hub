import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

import { Tab1Root, Tab2Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  drawerOptions: any;

  constructor(public navCtrl: NavController) { 
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  gotoPage() {
  // this.navCtrl.push(Tab1Root); // Used this method in other to add a back button
   this.navCtrl.setRoot(Tab1Root); // mostlikely this should be used
  }
}
