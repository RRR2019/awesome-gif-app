var gifList = [];

function createImg(response) {
  for (i = 0; i < gifList.length; i++) {
    var gif = $("<img>");
    gif.attr("src", response.data[i].images.original.url);
    gif.attr("alt", response.data[i].title + " Gif");

    var image = $("<div>");
    image.append(gif);
    $(".col-md-12").append(image); // to show the image in body
  }
}

for (var i = 0; i < gifList.length; i++) {
  var imgGif = getGif(imgGif);
}

function getGif(gifSearch) {
  // queryURL endpoint for OMDB API
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    gifSearch +
    "&api_key=A8zXa2FhTisNo4nWf63dDEFxlyhwUClg&limit=5";

  // AJAX call to OBMD API with promise and callback handler
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response.data.length);
    for (var j = 0; j < response.data.length; j++) {
      gifList.push(response.data[j].title);
    }
    createImg(response);
  });
}

$("#search").click(function() {
  var gifName = $("#gif-name").val();
  console.log(gifName);
  getGif(gifName);
});
