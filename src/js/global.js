
// Tracks whether or not certain sections have been prepared for display.
var prepared = { photos:false, bio:false, news:false, youtubeIframeApi:false, videos:false };

function onYouTubeIframeAPIReady() {
	console.log('onYouTubeIframeAPIReady');
	prepared.youtubeIframeApi = true;
}

var transitionPage = function( event )
{
	console.info("event type: "+event.type);
	
	if( 'click' === event.type )
	{
		event.preventDefault();
		console.log( 'clicked a tracked link' );
		
		// Add the clicked page to the history stack
		var stateObj = { foo: event.target.href };
		history.pushState(stateObj, "title here", event.target.href);	
		console.log('added to history stack: '+event.target.href);
	}
	
	console.log('> > transitionPage');

//--- Request / Transition ---//
	// trigger fade out old Section
	// trigger add blur effect at the same time
	
	blurPage(true);
	$('#main').stop().animate({opacity:0}, 900, function(){initPage()}); 

	// When transition's fade out is done it calls the initPage method

//--- Render / Initpage ---//	
	// make new section display but transparent
	
	// make old section display:none
	
	// I was doing the transparency transition with jquery so i can delay activity 
	// until after the transparency effect was finished:
	// fade in transparency of new section
		// when fade in is done, trigger blur effect removal
		
	// Indicate the active navigation item
}



// Preparations contains functions that need to be run once before visiting specific pages.
var preparations = {};

preparations.bio = function()
{
	prepared.bio = true;
	console.log('PPP running  preparations.bio ');
	BARZ.biography();
}

preparations.news = function()
{
	prepared.news = true;
	console.log('PPP running  preparations.news ');
	BARZ.news();
}

preparations.photos = function()
{
	prepared.photos = true;
	console.log('PPP running  preparations.photos ');
	BARZ.gallery();
};

preparations.videos = function()
{
	prepared.videos = true;
	console.log('PPP running  preparations.videos ');
	BARZ.youtube();
}

$(window).load( function(){
	console.log('THE WINDOW HAS FULLY LOADED - Running preparations for other areas in advance: ');
	
	Object.keys( preparations ).forEach( 
		function( token, index) 
		{
			if( prepared[ token ] )
			{
				console.log('preparations.'+token+' was already run'); 
			}
			else 
			{
				preparations[token](); 
			}
		}
	);


});


//-----------------------------
// SET UP EVENT LISTENERS
//-----------------------------
$('#header a').click( transitionPage );

$(window).bind("popstate", transitionPage);


// Initialize the first page the visitor landed on.
initPage();


function initPage()
{
	console.log('> > initPage');

	var currentPage = window.location.href.split('/').filter( function(i,e){ if( i !=''){return i;} } ).pop();
	//console.log('current page initially is ', currentPage);

	// Special cases for home page
	if( currentPage === window.location.host || currentPage === 'index.php' )
		{ currentPage = 'home'; }
	
	if( currentPage === 'home')
		{ $('#nav').addClass('open'); }
	else
		{ $('#nav').removeClass('open'); }
	
	//console.log('current page finally is ', currentPage);
	//console.log('window.location.host is ', window.location.host);
	
	
	// If there is a "prepare" function for the current page, run that immediately.
	// It is also possible that multiple "prepare" functions may be run after the full 
	// initial page load so they don't need to be run again later.
	if( preparations[currentPage] && !prepared[currentPage] ){ preparations[currentPage](); }
	
	// Instead of pattern based side effect causing the section to show
	// I should consider having dedicated functions for each page.
	$('section').removeClass('js-visible');
	$('section#sect-' + currentPage).addClass('js-visible');
	if($('section#sect-' + currentPage).length < 1){ console.warn(currentPage+' PAGE NOT FOUND'); }
	
	// Update Page Title tag
	var pageTitle = 'Barz Noble - ' + $('section#sect-' + currentPage +' title').text();
	$('head title').text( pageTitle );
	

	$('#main').stop().animate({opacity:1}, 900, function(){console.log('fade in finished'); blurPage(false);});	

	$('#nav li').removeClass('active');
	$('a[href*='+currentPage+']').parent().addClass('active');
}



function blurPage( boo )
{
	if( boo ) 
	{ 
		$('#page').addClass('blurred');
		$('.bg').removeClass('blurred'); 
	}
	else {
		 $('#page').removeClass('blurred');
		 $('.bg').addClass('blurred');  
	 }
}


$('#menutoggle').click(function(event){
	var target = event.target;
	$('#nav').toggleClass('open');
})

function showAllSections()
{
	$('section[id^=sect]').addClass('js-visible');
}


soundManager.url = 'soundmanager2/swf/';

threeSixtyPlayer = new ThreeSixtyPlayer();

threeSixtyPlayer.config.autoPlay = true;

// hook into SM2 init
soundManager.onready(threeSixtyPlayer.init);

// threeSixtyPlayer.lastSound.play();
// threeSixtyPlayer.lastSound.pause();
