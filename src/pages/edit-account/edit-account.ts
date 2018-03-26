import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { User, Settings } from '../../providers/providers';

import { UserModel } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-edit-account',
  templateUrl: 'edit-account.html',
})

export class EditAccountPage {
  form: FormGroup;
  userData: UserModel;

  schools = [
    { name: "Eastern Mediterranean University" },
    { name: "Kaunas Univeristy of Technology" }
  ]
  constructor(public navCtrl: NavController,
    fb: FormBuilder, public translateService: TranslateService,
    private settings: Settings,
    public user: User,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    private events: Events,
    public navParams: NavParams) {
    this.userData = this.navParams.get('data') || this.dismiss();
    this.form = fb.group({
      fname: [this.userData.fname, Validators.compose([Validators.required, Validators.minLength(2)])],
      lname: [this.userData.lname, Validators.compose([Validators.required])],
      gender: [this.userData.gender, Validators.compose([Validators.required])],
      phone: [this.userData.phone],
      faculty: [this.userData.faculty],
      location: [this.userData.location],
      school: [this.userData.school],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAccountPage');

  }

  listenToUpdateEvents() {
    this.events.subscribe('user:updated');
  }

  dismiss() {
    this.viewCtrl.dismiss();
    this.events.unsubscribe('user:updated');
  }

  async editAccount() {

    let data = this.prepareData();
    let res = await this.user.updateAccount(data)
      .then(d => {
        this.updateToast('Account Updated');
        setTimeout(() => {
          this.dismiss();
        }, 2500);
      }).catch(error => {
        this.updateToast('Error Updating Account');
      });
  }

  updateToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }


  prepareData() {

    const formData = this.form.value;
    return {
      fname: formData.fname as string,
      lname: formData.lname as string,
      phone: formData.phone as number,
      faculty: formData.faculty as string,
      location: formData.location as string,
      school: formData.school as string,
      uid: this.userData.uid,
      gender: formData.gender as string
    }
  }

}
