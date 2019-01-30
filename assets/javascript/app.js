// cache some shit
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
							
							for(i=0; i<4; i++){
								
							if (json.total_results) {
								var produce = baseimg + json.results[i].poster_path
								$('#movies-appear-here').append('<img src=' + produce + ' />')
							}
						}
				})})

//==============================================================================================================================
