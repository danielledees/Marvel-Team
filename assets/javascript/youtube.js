//youtube API Key: AIzaSyCfYX18CUnQSumetnfx59uPgQN3400sTG8
console.log("this works");

$(document).ready(function() {

    //var  queryURL = "https://www.googleapis.com/youtube/v3/search";


    $("#sub-button").on("click", function(event) {
        event.preventDefault();
        var userSearch  = $("#character-input").val();
        console.log(userSearch);
        var root = "https://www.youtube.com/embed/"
        
        $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            
            part: "snippet",
            maxResults: 2,
            q:  userSearch + " origins" ,
            type: "video",
            videoEmbeddable: true,
            key: "AIzaSyCfYX18CUnQSumetnfx59uPgQN3400sTG8"}, 
            function(data){
                $("#youtubevid").empty()
                for (var i = 0; i < data.items.length; i++) {
                    var video = data.items[i];
                    var videoId = video.id.videoId;
                    var url = root + videoId;
                    console.log(url, "-------------------------")
                    $("#youtubevid").append(`<iframe width="560" height="315" src=${url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
                }
             }
        )
    })

})