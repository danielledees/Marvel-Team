// Initialize Firebase
var config = {
  apiKey: "AIzaSyBPxpNKj8r78Tyr8qFtMhm5SPuJG5ExBeg",
  authDomain: "marvel-api-testworks.firebaseapp.com",
  databaseURL: "https://marvel-api-testworks.firebaseio.com",
  projectId: "marvel-api-testworks",
  storageBucket: "marvel-api-testworks.appspot.com",
  messagingSenderId: "543587360302"
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
    signInSuccessUrl: 'Characterpage.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    
  };

    // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);



  function renderImages(){
  var queryURL =  "https://api.giphy.com/v1/gifs/search?q=marvel&api_key=xQFr9FVDliZZP58r6lj2oZ94REMLxL68&limit=10";
   console.log(queryURL);

   $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
       console.log(response, "this is the response");
       //var matches = response.data;
       // Saving the image_original_url property
       var matches = response.data.image_original_url;
       //runs loop thru the data repsonses and appends images to display-gifs div with rating

       //for (var i = 0; i <matches.length; i++) {

        // Creating and storing an image tag
        var marvelImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        marvelImage.attr("src", matches);
        marvelImage.attr("alt", "marvel image");

        // Prepending the catImage to the images div
        //$("#display-gifs").prepend(marvelImage);

            $("#display-gifs").append(marvelImage);
            console.log(marvelImage);

    })
    }











    





