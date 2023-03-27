import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBt4yVWBdg3e8Svdl3ZFPULXhXkpX35xI',
  authDomain: 'react-blog-14dea.firebaseapp.com',
  projectId: 'react-blog-14dea',
  storageBucket: 'react-blog-14dea.appspot.com',
  messagingSenderId: '428126242705',
  appId: '1:428126242705:web:e6c4215ccc499f1d1fbc30',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
