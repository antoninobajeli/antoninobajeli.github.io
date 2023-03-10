importScripts('https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging.js');
firebase.initializeApp({
    apiKey: 'AIzaSyBbF6KdB2jxIdibhUybICMHD2opLTriJYs',
            appId: '1:545603182859:web:58dfa52f696487e076420e',
            messagingSenderId: '545603182859',
            projectId: 'quisi-fire',
            authDomain: 'quisi-fire.firebaseapp.com',
            storageBucket: 'quisi-fire.appspot.com',
            measurementId: 'G-MM88E1Y2HX'
});
const messaging = firebase.messaging();