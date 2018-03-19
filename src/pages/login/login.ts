import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, ViewController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { User, Settings } from '../../providers/providers';
import { MainPage } from '../pages';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type


  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  willLoad: boolean = false;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    private settings: Settings,
    public events: Events,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    private auth: AngularFireAuth,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    this.loginEvents();
  }

  // Attempt to login in through our User service
  async doLogin() {
    const res = await this.user.login(this.account);
    //this.navCtrl.setRoot('HomePage');
    if (res) {
     
    } else {
      console.log(this.user.loginError);
      let toast = this.toastCtrl.create({
        message: this.user.loginError,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
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

  ionViewDidEnter(){
    console.log('yeah');
  }

  loginEvents() {
    // this might come in handy later.
    this.events.subscribe('user:loginError', () => {
      console.log('s');
    });
    this.events.subscribe('user:networkError', () => {
      console.log('network error');
    });
    this.events.subscribe('Unknown', ()=>{
      console.log('Uknown');
    })
    this.events.subscribe('user:login', ()=>{
      this.navCtrl.setRoot(MainPage);
    })
  }

  dismiss() {
    this.viewCtrl.dismiss().catch(e => {
      this.navCtrl.setRoot('WelcomePage');
    });
  }
}
