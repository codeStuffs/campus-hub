import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserModel } from '../../models/user';

@Injectable()
export class FirebaseProvider extends DataProvider {


  getBuilding(buildingType: string): Promise<any[]>{

    return Promise.resolve([]);
  }

  getEvents():Promise<any[]>{
    return Promise.resolve([]);    
  }

  getNews():Promise<any[]>{
    return Promise.resolve([]);    
  }


  logInUser(user){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signUpUser(user){
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  saveUserData(userInfo: UserModel){
    let defaultPhoto = 'assets/leaf.png';
    return this.afStore.collection<UserModel>('users').doc(userInfo.uid)
      .set({
        fname : userInfo.fname,
        lname  : userInfo.lname,
        id        : userInfo.uid,
        email     : userInfo.email.toLowerCase(),
        gender    : userInfo.gender,
        school:   userInfo.school,
        photo_url  : defaultPhoto,
      });
  }
 

  constructor(public http: HttpClient, private afAuth: AngularFireAuth, private afStore: AngularFirestore) {
   super();
  }
  init(): Promise<boolean>{
    return Promise.resolve(true);
  }

}
