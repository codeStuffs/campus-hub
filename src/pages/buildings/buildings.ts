import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events, LoadingController, ToastController } from "ionic-angular";
import { Settings, User } from '../../providers/providers';
import { WelcomePage } from '../pages';
import { UserModel } from "../../models/user";

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
  userId: any;
  myInfo: UserModel;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public user: User,
    public events: Events,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public settings: Settings) {

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

  ionViewDidLoad() {
    console.log("ionViewDidLoad BuildingsPage");
  }

  /* since the building list page is generic we pass in
   * a param which will be used to
   * determine the type of building we are viewing.
   * In cases like faculites and dorms
  */

  ionViewWillEnter() {
    this.settings.load().then(d => {
      if (!d.isLoggedIn) {
        this.navCtrl.setRoot(WelcomePage);
      }
    }).catch(e => {
      /*console.log(e);*/
    })
  }
  openPage(page: string): void {

    if (this.myInfo.school) {
      const schlId = this.myInfo.school.replace(/\s/g, '_').toLocaleLowerCase();
      let data = {
        schoolId: schlId
      }
      switch (page) {
        case "faculties":
          data['id'] = 'faculties';
          this.navCtrl.push("BuildingsListPage", { data: data });
          break;
        case "dorms":
          data['id'] = 'dorms';
          this.navCtrl.push("BuildingsListPage", { data: data });
          break;
        case "io":
          data['id'] = 'internationalOffice';
          this.navCtrl.push("BuildingDetailPage", { data: data });
          break;
      }
    } else {
      this.showToast('Please add your school');
    }
  }


  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getMyInfo(uid) {
    const userd = this.user.getUserInfo(uid);
    userd.then(d => {
      let userData: any;
      d.subscribe((s) => {
        userData = s;
        this.myInfo = userData;
      })
    })
  }
}
