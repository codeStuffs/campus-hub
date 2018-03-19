import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, Events } from 'ionic-angular';
import { Settings, User } from '../../providers/providers';
import { UserModel } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  myInfo: UserModel;
  userId: string;
  loading: Loading;
  constructor(public navCtrl: NavController,
    private settings: Settings,
    public user: User,
    public event: Events,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {

    this.showLoading();
    this.settings.load().then(d => {
      this.userId = d.uid;
      console.log(d);
      if (this.userId) {
        this.getMyInfo(this.userId);
      }
    }).catch(e => {
      console.log(e);
    })
  }

  getMyInfo(uid) {
    const userd = this.user.getUserInfo(uid);
    userd.then(d => {
      let userData: any;
      d.subscribe((s) => {
        userData = s;
        this.myInfo = userData;
        this.event.publish('loading:Complete');
      })
    })
  }


  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please waiting',
    })

    loading.present();
    this.event.subscribe('loading:Complete', () => {
      loading.dismiss();
    })
  }

  logout(){
    
  }
}