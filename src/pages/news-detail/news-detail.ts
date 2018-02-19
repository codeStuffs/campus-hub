import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})

export class NewsDetailPage {
  newsDetail: any;
  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController) {
    this.newsDetail = navParams.get('news');
    //this.newsDetail['profilePic'] = '../../assets/img/speakers/bear.jpg';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
