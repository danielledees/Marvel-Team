// Initialize Firebase
var config = {
    apiKey: "AIzaSyCRRRYCURmR-Xbt8ks2q5iacgBVoQI0f7M",
    authDomain: "marvelproject-40bbc.firebaseapp.com",
    databaseURL: "https://marvelproject-40bbc.firebaseio.com",
    projectId: "marvelproject-40bbc",
    storageBucket: "marvelproject-40bbc.appspot.com",
    messagingSenderId: "1078044173233"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  // Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

    // Uploads employee data to the database
    //database.ref().push(ui);


var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'test.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    
  };

    // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);




    





