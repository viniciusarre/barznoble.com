var BARZ = BARZ || {};

BARZ.biography = function()
{

	var destination = $('#sect-bio .col1').hide();

	var post = 1; // About post.

	var url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/' + post + '/?context=display';
	
	var jqxhr = $.getJSON( url)
		.done(function( jsondata ) {
    		destination
    			.html( jsondata.content )
    			.fadeIn();
		})
	  .fail(function() {
			console.log( "error" );
		})
		.always(function() {
			console.log( "complete" );
		});
};