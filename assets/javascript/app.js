
$(function(){
  //This is to remove the validation message if no poster image is present
  $('#term').focus(function() {
      var full = $('#poster').has("img").length ? true: false;
      if (full == false) {
          $('#poster').empty();
      }

  });
// cache some shit
  var api_key = "a97f71ed06e6f46f60b4fad70c2bd407";
  var baseimg = "http://image.tmdb.org/t/p/w500";

  //function definition
  var getPoster = function(e){
 // this gets rid of the warning about using return false
    e.preventDefault();

      var film = $('#term').val();

          $.getJSON("https://api.themoviedb.org/3/search/movie?query=" +
              escape(film)  +
                "&api_key=" +
                api_key     +
                "&callback=?",
              function(json) {
              // console.log(json);
              // console.log(json.results[0].poster_path);
                  if (json.total_results) {
                      $('#poster').html(
                        '<h2 class="loading"> We found you your poster.</h2><img id="thePoster" src=' +
                            baseimg + json.results[0].poster_path + ' />');
                  } else {
                      $.getJSON("http://api.themoviedb.org/3/search/movie?query=goonies&api_key=" +
                        api_key,
                          function(json){
                              $('#poster').html(
                                '<h2 class="loading">Sorry, nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src='+
                                baseimg +
                                json.results[0].poster_path +'/>');
           });
       }
          });
      }

  }

  $('#fetch form').on('submit', getPoster);
});



var genres = ["https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","https://m.media-amazon.com/images/M/MV5BZjA3YjdhMWEtYjc2Ni00YzVlLWI0MTUtMGZmNTJjNmU0Yzk2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","https://m.media-amazon.com/images/M/MV5BMTQ5MjI1OTA2NV5BMl5BanBnXkFtZTgwNjMxMjE3NjE@._V1_SX300.jpg"];

//function to display the buttons on the page

$('#add-movie').on("click", function(event){
  event.preventDefault();
    //grab value of user input
  var userInput = $("#genreInput").val("");

  //loop through array
  for(var i=0; i<genres.length; i++){
      var movieDiv = $('<div>');
      movieDiv.addClass('card');
      movieDiv.css('width','18rem');
      var image = $('<img>');
      image.attr('src', genres[i]);
      movieDiv.append(image);

      $('#movies-appear-here').append(movieDiv);
  }
  genres = [];

})