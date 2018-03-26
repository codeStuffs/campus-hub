import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseProvider } from '../firebase/firebase';

@Injectable()
export class BuildingProvider {

  constructor(public http: HttpClient,
    public afStore: FirebaseProvider) {
    console.log('Hello BuildingProvider Provider');
  }


  async getBuilding(sch) {

    try {
      let resp = await this.afStore.getBuildings(sch)
        .snapshotChanges().map(aa => {
          const id =/*console.log(e);*/ aa.payload.id;
          const data = aa.payload.data();
          return { id, ...data };
        });
      return resp;

    } catch (error) {
      console.log(error);
    }

  }

  async getBuildingDetails(data){
    try {
      const resp = await this.afStore.getBuildingDetails(data)
      .snapshotChanges().map(aa => {
        const id =/*console.log(e);*/ aa.payload.id;
        const data = aa.payload.data();
        return { id, ...data };
      });
    return resp;
    } catch (error) {
      
    }
  }

}
