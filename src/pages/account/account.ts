import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, Loading,
  LoadingController, Events, PopoverController } from 'ionic-angular';
import { Settings, User } from '../../providers/providers';
import { UserModel } from '../../models/user';
import { WelcomePage } from '../pages';
import { PopoverPage } from '../popover/popover'; //popover page



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
    public popoverCtrl: PopoverController,  //ctrl pop
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

  ionViewCanEnter() {
    //return this.authService.authenticated();
  }

  getMyInfo(uid) {
    const userd = this.user.getUserInfo(uid);
    userd.then(d => {
      let userData: any;
      d.subscribe((s) => {
        userData = s;
        this.myInfo = userData;
        /*console.log(this.myInfo);*/
        this.event.publish('loading:Complete');
      })
    })
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

  //popover
  presentPopover(myEvent) {
    let data = this.myInfo;
    data['uid'] = this.userId;
    /*let listData = [{title:"Edit Profile",id:1},{title:"Logout",id:2}];*/
    let popover = this.popoverCtrl.create("PopoverPage",{data:  data});
    popover.present({
      ev: myEvent
    });
  }

  logOutUid(){
    this.user.logout();
  }
}
