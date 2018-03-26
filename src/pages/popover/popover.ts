import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import { Settings, User } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  items:any;
  userData: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public user: User,) {
    this.userData = this.navParams.get('data');


  }

  ionViewDidLoad() {
    /*console.log('ionViewDidLoad PopoverPage');*/
  }

  dismiss(item) {
    let data = item;
    this.viewCtrl.dismiss(data);
  }

  editProfile(userData){
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create('EditAccountPage',{
      data: this.userData
    });

    modal.present();

  }

  logOutUid(item){
    this.user.logout();
    let data = item;
    this.viewCtrl.dismiss(data);
  }

}
