var genres = [];

//function to display the buttons on the page
function displayGenreButtons(){
  
   
}

displayGenreButtons();

$('#add-movie').on("click", function(event){
  event.preventDefault();
    //grab value of user input
  var userInput = $("#genreInput").val("");
  genres.push(userInput);
  genres.push(userInput);
  genres.push(userInput);


  //loop through array
  for(var i=0; i<genres.length; i++){
      var movieDiv = $('<div>');
      movieDiv.addClass('card');
      movieDiv.css('width','18rem');
      var image = $('<img>');
      image.attr('src', 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
      movieDiv.append(image);

      $('#movies-appear-here').append(movieDiv);
  }
  genres = [];

})