//youtube API Key: AIzaSyCfYX18CUnQSumetnfx59uPgQN3400sTG8
console.log("this works");

$(document).ready(function() {

    //var  queryURL = "https://www.googleapis.com/youtube/v3/search";


    $("#search-btn").on("click", function(event) {
        event.preventDefault();
        var userSearch  = $("#search-input").val();
        console.log(userSearch);
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

})