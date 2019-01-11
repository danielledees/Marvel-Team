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


    $("#search-btn").on("click", function(event) {
        event.preventDefault();

        //user input
        var userSearch  = $("#search-input").val().trim();

         //object to hold user input
         var comic = {
            name: userSearch
        };

        //push user input to database
      database.ref().push(comic);

      console.log(comic.name, "this is the comic name"); 

      var root = "https://www.youtube.com/embed/"

       
       $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            q: userSearch,
            type: "video",
            videoEmbeddable: true,
            key: "AIzaSyCfYX18CUnQSumetnfx59uPgQN3400sTG8"}, 
            function(data){
                $("#results").empty()
                for (var i = 0; i < data.items.length; i++) {
                    var video = data.items[i];
                    var videoId = video.id.videoId;
                    var url = root + videoId;
                    console.log(url, "-------------------------")
                    $("#results").append(`<iframe width="560" height="315" src=${url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)

                }

             }
        )
        

    })