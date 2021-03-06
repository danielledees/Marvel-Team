$(document).ready(function(){ 
    console.log("app.js linked")

    $("#loader-img").hide()
    $("#noResults").hide()
    $("#comic-table").hide()
    $("#topContent").hide()
    $("#bottomContent").hide()

    $("#sub-button").on("click", function(event){
        console.log("click received")

        event.preventDefault()

        $("#loader-img").show()
        $("#noResults").hide()

        $("#topContent").show()
        $("#bottomContent").show()

        $("#description-div").empty()
        $("#thumbnail-div").empty()
        $("#name-div").empty()
        $("#comics-div").empty()
        $("#table-body").empty()

        var character = $("#character-input").val().trim()
        var queryUrl = "https://gateway.marvel.com:443/v1/public/characters?name=" + character + "&limit=10&ts=1&apikey=f8f6b1e652ea6b5406fc0494dc8babca&hash=1aaf11cbe07314e2d1ea51a9f6bd342c"

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(queryUrl)

            if (response.data.total === 0){
                console.log("no results")
                 $("#loader-img").hide()
                 $("#comic-table").hide()
                 $("#noResults").show()
                 return false
            }
          
            $("#noResults").hide()
            $("#loader-img").hide()
            $("#comic-table").show()
            //grab relevant data
            var description = response.data.results[0].description
            var name = response.data.results[0].name

            var thumbnailPath = response.data.results[0].thumbnail.path
            var thumbnailExt = ".jpg"

            console.log(response)

            //seperate nested ajax call to grab relevant comics
            var characterID = response.data.results[0].id
            var comicsUrl = "https://gateway.marvel.com:443/v1/public/characters/" + characterID + "/comics?limit=10&ts=1&apikey=f8f6b1e652ea6b5406fc0494dc8babca&hash=1aaf11cbe07314e2d1ea51a9f6bd342c"
            $.ajax({
                url: comicsUrl,
                method: "GET"
            }).then(function(comicResponse){
                console.log("second Ajax hit")
                console.log(comicResponse)

                for(var i=0; i < comicResponse.data.results.length; i++) {
                  var cover = comicResponse.data.results[i].thumbnail.path + ".jpg"
                  var name = comicResponse.data.results[i].title
                  var desc = comicResponse.data.results[i].description
                  var pageCount = comicResponse.data.results[i].pageCount

                  var link = comicResponse.data.results[i].urls[0].url
                //   console.log(link)

                  var release = comicResponse.data.results[i].dates[0].date
                  var releaseFormat = "MM/DD/YYYY"
                  var convertedRelease = moment(release).format(releaseFormat)
                //   console.log(convertedRelease)

                  var coverThumb = $("<img>")
                  coverThumb.attr("src", cover) 
                  coverThumb.addClass("comic-thumb")
                  
                  var newRow = $("<tr>")

                  var td1 = $("<td>")
                  var td1span = $("<span>")
                  td1span.append(coverThumb)
                  td1.append(td1span)

                  var td2 = $("<td>")
                  var td2span = $("<span>")
                  td2span.text(name)
                  td2.append(td2span)

                  var td3 = $("<td>")
                  var td3span = $("<span>")
                  td3span.text(desc)
                  td3.append(td3span)

                  var td4 = $("<td>")
                  var td4span = $("<span>")
                  td4span.text(convertedRelease)
                  td4.append(td4span)

                  var td5 = $("<td>")
                  var td5span = $("<span>")
                  var readMore = $("<a target='blank'> Read More </a>")
                  readMore.attr("href", link)
                  td5span.append(readMore)
                  td5.append(td5span)


                  newRow.append(td1)
                  newRow.append(td2)
                  newRow.append(td3)
                  newRow.append(td4)
                  newRow.append(td5)

                  $("#table-body").append(newRow)
                } 
            })

            //create new displays
            $("#description-div").text(JSON.stringify(description))

            $("#name-div").text(JSON.stringify(name))

            var thumbnail = $("<img>")
            var thumbnailSrc = thumbnailPath + thumbnailExt
            thumbnail.attr("src", thumbnailSrc)
            thumbnail.attr("alt", "character picture")
            
            $("#thumbnail-div").append(thumbnail)

        })//initial ajax end

    })//sub button end
    
})//document ready end