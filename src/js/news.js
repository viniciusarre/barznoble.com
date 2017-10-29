var BARZ = BARZ || {};

BARZ.news = function()
{

function handleNewsTitleCLicks( eve )
{
	eve.preventDefault();
	var anchor = $(this);	
	var destination = anchor.next('.article')	
	destination.slideToggle();
}

function populateNewsList()
{
	var url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/?context=display';
	var jqxhr = $.getJSON( url)
		.done(function( jsondata ) {
    		
			for( var i=0; i<jsondata.posts.length; i++)
			{
				var $post = jsondata.posts[i];
				var $date = $post.date;
				var $newsItem = '\
				<li>\
					<a class="article-opener" data-postid="' + $post.ID + '" href="' + $post.URL + '"> \
					  <span class="label">' + $post.title + '</span> \
					  <span class="date">' + $date + '</span> \
					</a> \
					<div class="article">' + $post.content + '</div> \
				</li>';
				$('#news-area > ul').append( $newsItem );
			}
			
			$('#news-area a').click( handleNewsTitleCLicks );
			$('#news-area a').first().click();
		});
}

populateNewsList();

}