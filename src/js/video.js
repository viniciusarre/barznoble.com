var BARZ = BARZ || {};

BARZ.youtube = function()
{
// Get the playlist data via youtube api.
// Loop through each item in the playlist.
//// Get the video id, thumbnail image, and title text.
//// Create thumbnails and add them to the Document.
// Trigger the special manualYouTubeIframeAPIReady function that needs better documentation.

function fetchData() 
{
	$.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLLR3cVv55vsn6qxQ3Llsvp_Y4V8B92lwy&key=AIzaSyBImwfn6loeCIEJWi9uJysL9lxaJhS3EzI')
	.done(function(data)
	{
		for( var i=0; i<data.items.length; i++)
		{
			var currentItem = data.items[i];
			var imageUrl = currentItem.snippet.thumbnails.high.url;
			var videoId = currentItem.snippet.resourceId.videoId;
			if(typeof firstvideo === 'undefined'){ var firstvideo = videoId; }
			var text = currentItem.snippet.title;
			addThumbnail( videoId, imageUrl, text );
		}
		manualYouTubeIframeAPIReady(firstvideo);
	});
}

function addThumbnail( videoid, imagesrc, titletext )
{
	var image = $('<img>').attr('src',imagesrc).attr('alt', titletext).attr('data-video',videoid);
	var text = $('<span>').text(titletext);
	var listItem = $('<li>').append( image, text);
	$('#thumbs').removeClass('empty').append( listItem );	
}

function watchThumbs( click ) 
{
	var target = click.target;
	
	if( $(target).data().video ) 
	{
		//console.log(target)
		player.loadVideoById(  $(target).data().video );

		$('html, body').animate({
        scrollTop: $("#playwrapper").offset().top
    	}, 2000);
	}
}

function videoStartup()
{
	fetchData();
	$('#thumbs').click( watchThumbs );
	console.log('videoStartup!!');
}


var player;
function manualYouTubeIframeAPIReady( video ) {
	console.log('new YT player');
  player = new YT.Player('player', {
	// height: '390',
	// width: '640',
	 videoId: video,
	 events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
	 }
  });
}

function onPlayerReady(){ console.log('on yt player ready'); }

function onPlayerStateChange(){ console.log('on yt player state change'); }

// Makes the magic happen
videoStartup();

}