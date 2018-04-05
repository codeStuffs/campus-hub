import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserModel } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider extends DataProvider {
  buildings: Observable<any[]>;

  getBuildings(data) {
    const id = data.id;
    this.buildings = Observable.combineLatest(
      id
    ).switchMap(([id]) =>
      this.afStore.collection('buildings', ref => {
        let query:  firebase.firestore.Query = ref; //firebase.firestore.CollectionReference |
        if (id) { query = query.where('buildingType', '==', `${data.id}`) };
        return query; //.doc(`${data.schoolId}/`)
      }).valueChanges()
    );
    return this.buildings;
  }

  getBuildingDetails(data) {
    return this.afStore.collection('buildings').doc(`${data.schoolId}/`);
  }

  getEvents(): Promise<any[]> {
    return Promise.resolve([]);
  }

  getNews(): Promise<any[]> {
    return Promise.resolve([]);
  }


  getUserDetails(uid) {
    return this.afStore.collection(`users`).doc(`${uid}/`);
  }


  logInUser(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signUpUser(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  saveUserData(userInfo: UserModel) {
    userInfo.avatar = 'assets/avatar.png';
    userInfo.email.toLowerCase();
    userInfo.password = "";
    return this.afStore.collection<UserModel>('users')
      .doc(userInfo.uid)
      .set(userInfo);
  }

  updateUserAccount(userData) {
    return this.afStore.collection('users')
      .doc(userData.uid)
      .update(userData);
  }
  // {"option1":true,"option2":"Ionitron J. Framework","option3":"3","option4":"Hello","hasSeenTutorial":true,"uid":"PkOpeq0Ro7RmonKuf4ZDDKenDn22","isLoggedIn":true}	

  constructor(public http: HttpClient,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore) {
    super();
  }
  init(): Promise<boolean> {
    return Promise.resolve(true);
  }

}
