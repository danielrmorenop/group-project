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

// cache some stuff
var api_key = "a97f71ed06e6f46f60b4fad70c2bd407";
//function definition
$(document).on('click','.movieBlock', function(){
  console.log("poster click")
  playTrailer ($(this).attr('data-title'))
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
var baseimg= "http://image.tmdb.org/t/p/w200//"
var bigBag=[]

calculateChineseCalender(year);

$.getJSON("https://api.themoviedb.org/3/discover/movie?primary_release_year="+year+"&sort_by=vote_average.desc&api_key="+api_key+"&sort_by=popularity.desc",

function(json) {

	json.results.forEach( function(item) { bigBag.push( item ) } )

	console.log(bigBag)
				
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
			var produce = baseimg + json.results[randNum].poster_path
			$('#movies-appear-here').append('<div class="movieBlock" style="display:inline-block;" data-title="'+json.results[randNum].title+ 'trailer"><img src=' + produce + ' /></div>')
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