var firebaseConfig = {
    apiKey: "AIzaSyD2mKONfEZihLqKrEUT6A6HBsi_LOAuUkk",
    authDomain: "tuit-38014.firebaseapp.com",
    databaseURL: "https://tuit-38014-default-rtdb.firebaseio.com/",
    projectId: "tuit-38014",
    storageBucket: "tuit-38014.appspot.com",
    messagingSenderId: "622903190856",
    appId: "1:622903190856:web:16ff50b13b12ab9903ff7d"
  };
  firebase.initializeApp(firebaseConfig);


function getData() {
    firebase.database().ref("/").child("santiago").update({
    purpose:"añadiendo usuarios"      
    })
}
function log_out() {
    window.location ="index.html"
}