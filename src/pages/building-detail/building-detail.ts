import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, LoadingController, ToastController } from 'ionic-angular';
import { Settings, User, BuildingProvider } from '../../providers/providers';
import { UserModel } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-building-detail',
  templateUrl: 'building-detail.html',
})

export class BuildingDetailPage {
  buildingDetails= [];
  data: any;
  buildingDataSubscription:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private settings: Settings,
    public user: User,
    public buildingProvider: BuildingProvider,
    public events: Events,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController) {


    this.data = navParams.get('data');
    this.showLoading();
    this.getBuildingDetail(this.data);
  }



  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait',
    });

    loading.present();
    this.events.subscribe('loading:Complete', () => {
      console.log('d');
      loading.dismiss();
    })

    this.events.subscribe('loading:Error', (s) => {
      console.log(s);
      this.showToast('No Data found');
      setTimeout(()=>{
        loading.dismiss();
        this.dismiss();
      },3200);
    })
  }

  getBuildingDetail(data) {
    const bData  = this.buildingProvider.getBuildingDetails(data);
    bData.then(d => {
      let buildingData: any;
      this.buildingDataSubscription = d;
      this.buildingDataSubscription.subscribe((s) => {
        buildingData = s;
        if (!buildingData.buildingId) {
          this.events.publish('loading:Error',"No Data");
        } else {
          this.buildingDetails = buildingData;
          this.events.publish('loading:Complete');
        }
      })
    })
  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingDetailPage');
  }

  ActivateSection() {

  }

  dismiss() {
    const d = this.events.unsubscribe("loading:Error");
    console.log(`a= ${d}`);
   
    this.viewCtrl.dismiss();
  }
}
