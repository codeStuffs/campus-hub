import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Events } from 'ionic-angular';
import { FirebaseProvider } from '../firebase/firebase';
import { Settings } from '../settings/settings';
import { UserModel } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  HAS_LOGGED_IN = false;
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  public loginError: any;
  constructor(public api: Api,
    public settings: Settings,
    public events: Events,
    public fbase: FirebaseProvider) {

    settings.load().then(() => {

    })
  }

  /*
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  async login(accountInfo: any) {
    try {
      let res = await this.fbase.logInUser(accountInfo);
      // If the API returned a successful response, mark the user as logged in
      if (res) {
        this._loggedIn(res);
      };
      return res;
    } catch (error) {
      switch (error.code) {
        case 'auth/network-request-failed':
          this.loginError = error.message;
          this.events.publish('user:networkError');
          break;
        case 'auth/user-not-found':
          this.loginError = error.message;
          this.events.publish('user:loginError');
          break;
        default:
          this.events.publish('Unknown');
      }
    };
  }

  /**
   * Send a POST request to our signup endpoint with
   *  the data the user entered on the form.
   *
   * NOTE: Look for a way to make this function simplier.
   */
  async signup(accountInfo: any) {
    try {
      let seq = await this.fbase.signUpUser(accountInfo);
      if (seq.uid) {
        this._loggedIn(seq);
        accountInfo.uid = seq.uid;
        this.saveUserInfo(accountInfo);
        this.HAS_LOGGED_IN = true;
      }
      return seq;
    } catch (error) {
      if (error.code) {
        console.log(error);
      }
      console.log(error);
    }
  }

  async updateAccount(data){

    try {
      let res = this.fbase.updateUserAccount(data);
      if(res){
        this.events.publish('user:updated');
      }
      return res;
    } catch (error) {
      console.log(error);
    }

  }
  // save user data to users collection
  async saveUserInfo(accountInfo: UserModel) {
    try {
      let res = await this.fbase.saveUserData(accountInfo);
      if (res) {
        // process offline data here
        this.HAS_LOGGED_IN = true;
// 
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getUserInfo(uid) {
    try {
      const resp = await this.fbase.getUserDetails(uid)
        .snapshotChanges().map(aa => {
          const id =/*console.log(e);*/ aa.payload.id;
          const data = aa.payload.data();
          return { id, ...data };
        });
      return resp;
    } catch (e) {

    }
  }
  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
    this.settings.setValue('isLoggedIn', false);
    this.events.publish('user:logout');
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this.settings.setValue('uid', resp.uid);
    this.settings.setValue('isLoggedIn', true).then(() => {
      this.events.publish('user:login');
    });
    this._user = resp;
  }
}
// {"option1":false,"option2":false,"option3":"3","option4":"Hello","hasSeenTutorial":true,"uid":"ywUc15e0WNSlhC7RCoXMaXXjQBs1"}
