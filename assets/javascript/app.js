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