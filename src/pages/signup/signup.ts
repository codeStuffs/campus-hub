import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, ViewController } from 'ionic-angular';

import { User, Settings } from '../../providers/providers';
import { MainPage } from '../pages';
import { UserModel } from '../../models/user';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_REGEX } from '../../config';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account = {
    fname: 'Tiong',
    lname: 'Human',
    email: 'test@example.com',
    password: 'test',
    cpassword: 'test',
    phone: 3706862510,
    faculty: 'Faculty of Criminology',
    location: 'Kaunas',
    school: 'ddd',
  } as UserModel;

  form: FormGroup;
  // Our translated text strings
  private signupErrorString: string;

  constructor(fb: FormBuilder, public navCtrl: NavController,
    private settings: Settings,
    public user: User,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.form = fb.group({
      fname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      cpassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      gender: ['', Validators.compose([Validators.required])],
      phone: [''],
      faculty: [''],
      location: [''],
      school: [''],
    }, this.passwordMatchValidator2.bind(this));


    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  ionViewWillEnter(){
    this.settings.load().then(d=>{
      if(d.isLoggedIn){
        this.navCtrl.setRoot(MainPage);
      }
    }).catch(e=>{
      console.log(e);
    })
  }
  
  passwordMatchValidator2(control: AbstractControl): { [key: string]: boolean } {

    const password = control.get('password');
    const confirm_password = control.get('cpassword');
    console.log(password);
    if (!password || !confirm_password) {
      return null;
    }
    const dd = password.value === confirm_password.value
      ? null : { mismatch: true };
    if (dd !== null) {
      control.get('cpassword').setErrors(dd);
    } else {
      control.get('cpassword').getError('required');
      control.get('cpassword').getError('minlength');
    }
    return dd;
  }

  async doSignup() {

    let data = this.prepareSignUpData();
    // Attempt to login in through our User service
    const res = await this.user.signup(data);
    if (res) {
      // wait for loggin to be fired from the user service
      if (this.user.HAS_LOGGED_IN) {
        this.navCtrl.setRoot(MainPage);
      }else{
        console.log('something happened'); // handle possible error here
      }
    } else {
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 5000,
        position: 'top'
      });
      toast.present();
    }
  }


  prepareSignUpData(): UserModel {

    const formData = this.form.value;
    return {
      fname: formData.fname as string,
      lname: formData.lname as string,
      email: formData.email as string,
      password: formData.password as string,
      cpassword: formData.cpassword as string,
      phone: formData.phone as number,
      faculty: formData.faculty as string,
      location: formData.location as string,
      school: formData.location as string,
      uid: '',
      avatar: '',
      gender: formData.gender as string
    }
  }

  dismiss() {
    this.viewCtrl.dismiss().catch(error => { this.navCtrl.setRoot('WelcomePage') });
  }
}
