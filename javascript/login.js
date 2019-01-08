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
    signInSuccessUrl: 'main.html',
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





renderImages()




//display marvel gifs 

// my API Key xQFr9FVDliZZP58r6lj2oZ94REMLxL68

//var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=marvel&api_key=xQFr9FVDliZZP58r6lj2oZ94REMLxL68&limit=5");
//xhr.done(function(data) { console.log("success got data", data); });


    

    /*// After the data from the AJAX request comes back
    .then(function(response) {
        console.log(response);


        

        // Saving the image_original_url property
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var marvelImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          marvelImage.attr("src", imageUrl);
          marvelImage.attr("alt", "marvel image");

          // Prepending the catImage to the images div
          $("#display-gifs").prepend(marvelImage);

    })
    */


  



   
   






    





