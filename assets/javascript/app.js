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
		var pageNum=1
		var bigBag=[]

		for (pageNum=1; pageNum<5; pageNum++){
			$.getJSON("https://api.themoviedb.org/3/discover/movie?primary_release_year="+year+"&sort_by=vote_average.desc&api_key="+api_key+"&page="+pageNum,
			function(json) {

				json.results.forEach( function(item) { bigBag.push( item ) } )

				console.log(bigBag)
			})
		}
				var i = 0;
				var randomArr=[]

					while( i < 4 ) {

							var randNum = Math.floor( Math.random() * 80 );

						// ONLY if we are selecting a new random number...
						if( randomArr.includes( randNum ) === false ) {

							console.log( randNum );

							// push number to our checker array
								randomArr.push( randNum );
								console.log(randomArr);

								//make movie poster code
							if (json.results[randNum].poster_path) {
									var produce = baseimg + json.results[randNum].poster_path
									$('#movies-appear-here').append('<div class="movieBlock" style="display:inline-block;" data-title="'+json.results[randNum].title+'"><img src=' + produce + ' /></div>')
								
								// increase our counter
								i++;
							}
						)
					}
					});

					
//====================================================================================================================================