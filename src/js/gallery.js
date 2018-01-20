var BARZ = BARZ || {};

BARZ.gallery = function()
{
  // move photo list markup text out of the script tag and into the DOM proper.
  $('.gallery').get(0).innerHTML = $('.gallery > script').get(0).innerHTML;

  $('.gallery').magnificPopup({
   delegate: 'a',
   type: 'image',
   tLoading: 'Loading image #%curr%...',
   mainClass: 'mfp-img-mobile',
   zoom:{enabled:true},
   gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
   }
  });
  
  $('.gallery img').load(function(e){ centerImage(e.target) });
  
};