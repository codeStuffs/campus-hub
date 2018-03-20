import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Settings, User } from '../../providers/providers';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  items:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public user: User,) {
    this.items = this.navParams.get('listData');

  }

  ionViewDidLoad() {
    /*console.log('ionViewDidLoad PopoverPage');*/
  }

  dismiss(item) {
    let data = item;
    this.viewCtrl.dismiss(data);
  }

  logOutUid(item){
    this.user.logout();
    let data = item;
    this.viewCtrl.dismiss(data);
  }

}
