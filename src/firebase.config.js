import { firebase } from '@firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

  const firebaseConfig = {
    apiKey: "AIzaSyBavcIzNGhuEuqDDv2EbfxEUmRHlNmzY_8",
    authDomain: "webfrontend-97284.firebaseapp.com",
    projectId: "webfrontend-97284",
    storageBucket: "webfrontend-97284.appspot.com",
    messagingSenderId: "204085886378",
    appId: "1:204085886378:web:8eccd3eacd3e63bc4f7fd3"
  };

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
var postsImages = firebase.storage().ref();
var storage = firebase.storage();
const posts = db.collection('posts')

export {
    posts, storage, postsImages
}
