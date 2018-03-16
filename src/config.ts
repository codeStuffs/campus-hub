export const localDataUrl = "assets/data/data.json"; // optional data from local json

export const mapApiKey = ""; // map api key

export const phpServerApiUrl = '';

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyA24osqXxeEZvLwTbsMJqY1UYtyos6Mriw",
    authDomain: "icampushu.firebaseapp.com",
    databaseURL: "https://icampushu.firebaseio.com",
    projectId: "icampushu",
    storageBucket: "icampushu.appspot.com",
    messagingSenderId: "747369264933"
  };


  export const DATA_PROVIDER: 'HTTP' | 'FIREBASE' | 'LOCALDATA' = 'FIREBASE';
