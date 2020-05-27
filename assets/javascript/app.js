												//            ,'.            //
												//          .'   '.          //
												//      _.-'       '-._      //
												//    .'               '.    //
												//   /                   \   //
												//  |      OUR JQUERY     |  //
												//   \                   /   //
												//    '-._           _.-'    //
												//   _..._'.       .'_..._   //
												// .'     '.\     /.'     '. //
												///   __    \\   //    __   \//
												//|  /  `.   \| |/   .'  \  |//
												// \ \    \   Y Y   /    / / //
												//  `-'  ==+=+;=;+=+==  '-`  //
												//         // / \ \\         //
												//     ('-'/ /   \ \'-')     //
												//      '-' (     ) '-'      //
												//           '. .'           //
												//             '             //

//--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>
//--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>--<>
var database = firebase.database().ref();
var bigBag=[]
var URLpart1 = "https://api.themoviedb.org/3/discover/movie?primary_release_year="
var URLpart2 = "&sort_by=vote_average.desc&api_key="
var URLpart3 = "&sort_by=popularity.desc"

var baseimg= "http://image.tmdb.org/t/p/w200//"

// cache some stuff
var api_key = "a97f71ed06e6f46f60b4fad70c2bd407";
//function definition
$(document).on('click','.movieBlock', function(){
	$('#deleteToList').hide();
	$('#addToList').show();

  var specificMovieTitle = $(this).attr('data-title')
  var specificMoviePosterURL = $(this).attr('data-url')

  console.log(specificMovieTitle);
  playTrailer (specificMovieTitle);

  $('#addToList').attr("data-title", specificMovieTitle);
  $('#addToList').attr("data-url", specificMoviePosterURL);

})

$('#addToList').on('click', function(ev){
	console.log(ev)

	var specificMovieTitle = $(this).attr('data-title');
	var specificMoviePosterURL = $(this).attr('data-url');

	var recommendations = database.child("savedMovies");
	console.log(recommendations);

	recommendations.push({
		title: specificMovieTitle,
		url: specificMoviePosterURL
	})
})

$(document).on("click", ".firebaseMovies", function(){
	var specificMovieTitlefirebase = $(this).attr('data-title')
	playTrailer (specificMovieTitlefirebase);
	$('#addToList').hide();
	$('#deleteToList').show();
})

$('#deleteToList').on("click", function(){

})

$('#trailerModal').on('shown.bs.modal', function(){
  player.playVideo();
})

$('#trailerModal').on('hide.bs.modal', function(e){
  player.stopVideo();
  player.destroy();
  console.log("modal hide")
})

$('#add-movie').on("click", function(e){
	// this gets rid of the warning about using return false
	e.preventDefault();

	var year = $('#genreInput').val();

	calculateChineseCalender(year);

	$.getJSON(URLpart1 + year + URLpart2 + api_key + URLpart3,

	function(json) {
		console.log(json);
				
		var i = 0;
		var randomArr=[]
		while( i < 4 ) {
			var randNum = Math.floor( Math.random() * 20 );
			// ONLY if we are selecting a new random number...
			if( randomArr.includes( randNum ) === false ) {
				console.log( randNum );
				// push number to our checker array
				randomArr.push( randNum );
				console.log(randomArr);

			//make movie poster code
			if (json.results[randNum].poster_path) {
				var produce = baseimg + json.results[randNum].poster_path;

				$('#movies-appear-here').append('<div class="movieBlock" style="display:inline-block;" data-title="'+json.results[randNum].title+ 'trailer" data-url="'+ produce +'"><img src=' + produce + ' /></div>')
				// increase our counter
				i++;
				}
			}}
		})
	})




function calculateChineseCalender(year){
	//formula for calculating chinese calender animal
var userAnimal = year % 12;

//determine animal with switch
switch(userAnimal){
	case 0: console.log("Monkey")
	break;
	case 1: console.log("Rooster")
	break;
	case 2: console.log("Dog")
	break;
	case 3: console.log("Pig")
	break;
	case 4: console.log("Rat")
	break;
	case 5: console.log("Ox")
	break;
	case 6: console.log("Tiger")
	break;
	case 7: console.log("Rabbit")
	break;
	case 8: console.log("Dragon")
	break;
	case 9: console.log("Snake")
	break;
	case 10: console.log("Horse")
	break;
	case 11: console.log("Goat")
	break;	
	}	
}

database.child('savedMovies/').on('child_removed', function(childRemoved){
	console.log("child " +childRemoved+ " was removed");
})
database.child('savedMovies/').on('child_added', function(childAdded){
	console.log("child " +JSON.stringify(childAdded)+ " was added");
	var ListMovies = childAdded.val().url;
	var ListMoviesTitle = childAdded.val().title;
	
	$('#listMoviesAppearHere').append('<div class="firebaseMovies" style="display:inline-block;" data-title="'+ListMoviesTitle+ 'trailer"><img src = "' + ListMovies + '"/></div>');

})

$("#resetButton").on("click", function(){
    $('#movies-appear-here').empty();
  });
