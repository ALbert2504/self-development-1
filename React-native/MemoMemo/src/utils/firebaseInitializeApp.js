import firebase from '@react-native-firebase/app';


const credentials = {
  clientId: '',
  appId: '1:19828272539:android:aa1dd3e8cda579ef7c053e',
  apiKey: 'AIzaSyB5nAX8CNnhlXrfeNSCCKRm88GRMpJ5imU',
  databaseURL: 'https://memo-memo-anrdoid-default-rtdb.firebaseio.com',
  storageBucket: 'memo-memo-anrdoid.appspot.com',
  messagingSenderId: '19828272539',
  projectId: 'memo-memo-anrdoid',
};


const firebaseInitializeApp = async () => {
  if (firebase.apps.length) {
    return;
  }

  await firebase.initializeApp(credentials);
};

export default firebaseInitializeApp;
