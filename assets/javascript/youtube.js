var player;

function playTrailer(movieName){
   $('#player').empty();
    var q = movieName
    $("#movieName").html(movieName);
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      maxResults:1      
    });
  
    request.execute(function(response) {
    console.log(response);
     embedVideo(response.items[0].id.videoId);
    });
}

var OAUTH2_CLIENT_ID = 'AIzaSyCW2aE8Cv-LwPp8rwHT0PagtMa2AwWH_gc';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.client.setApiKey(OAUTH2_CLIENT_ID);
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
        console.log("It works")
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    $('#trailerModal').modal('show')
  }
  function embedVideo(videoId)
  {
    player = new YT.Player('player', {
      width: '100%',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady
      }
    });
  }