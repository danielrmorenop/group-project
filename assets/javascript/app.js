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
$('#add-movie').on("click", function(e){
// this gets rid of the warning about using return false
	e.preventDefault();

		var year = $('#genreInput').val();
		var baseimg= "http://image.tmdb.org/t/p/w200//"

				$.getJSON("https://api.themoviedb.org/3/discover/movie?primary_release_year="+year+"&sort_by=vote_average.desc&api_key="+api_key,
					function(json) {
					console.log(json);
						
						var i = 0;

							while( i < 4 ) {

								var randNum = Math.floor( Math.random() * 19 );
								var randomArr=[]

								// ONLY if we are selecting a new random number...
								if( randomArr.includes( randNum ) === false ) {

									console.log( randNum );

									// push number to our checker array
									randomArr.push( randNum );
									console.log(randomArr);

									//make movie poster code
									if (json.total_results) {
										var produce = baseimg + json.results[randNum].poster_path
										$('#movies-appear-here').append('<img src=' + produce + ' />')

									// increase our counter
									i++;

								}
							}}
				})})
	//==============================================================================================================================

	var clicks = 0;

$('.myClass').click(function() {
    if (clicks == 0){
        // first click
    } else{
        // second click
    }
    ++clicks;
});
