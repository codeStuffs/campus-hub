import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ModalController
} from "ionic-angular";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-news",
  templateUrl: "news.html"
})
export class NewsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewsPage");
  }

  openNews(news) {
    news = {
      profilePic: "assets/img/speakers/bear.jpg",
      title: "News Title"
    };

    // this.navCtrl.push("NewsDetailPage", {
     // news: news
   // });
    const modal = this.modalCtrl.create('NewsDetailPage', {news: news});
      modal.present();

  }

}
