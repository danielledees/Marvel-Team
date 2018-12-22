//initialize firebase to store user email and password


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

  console.log("this works");

    var email = $("#userEmail").val().trim();
    var password = $("#userPassword").val().trim();

    $(".btn-primary").on("click", function(event) {
        event.preventDefault();
  

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  






    $(".btn-primary").on("click", function(event) {
        event.preventDefault();

        var email = $("#userEmail").val().trim();
        var password = $("#userPassword").val().trim();
  
//validate email

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }

  if( !validateEmail(email)) {alert("invalid email")}
  else alert("valid email");

//store user input as object

        var userInput = {
            email: email,
            password: password
        };

        database.ref().push(userInput);

        console.log(userInput);
        console.log(database);
    })
        /*function ValidateEmail(email) 
            {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
            return (true)
            }
            alert("You have entered an invalid email address!")
            return (false)
            }
            */
        
    


        


        //function to load user profile page
        //hide log in form
        //show search bar




