$(document).ready(function(){
    // jekyll wraps all images in paragraph elements, so we want to remove 
    // the hero image from the paragraph wrapping
    const parents = $('p > img.hero-image').parent();
    parents.each(function() {
       this.outerHTML = this.innerHTML
    });

    // wrap everything in the container class to center it on the page
   // $('.content').children().not( 'h1, h2, img' ).wrapInner( "<div class='container'></div>");
   

    // consolidate elements from jekyll into various divs for styling
    $('.content').append($("<div class='body-text'></div>"))
    $('.content').prepend($("<div class='title'></div>"))
    $('.title').append($('.content').children().filter('h1, h2'))
    $('.body-text').append($('.content').children().not('.hero-image, .title'))

    //  load in animations
    $('.hero-image').animate({
        width: '55vw'
    }, 1500);

    $('.title').animate({
        top: '30vh',
        opacity: 1
    }, 1500)
});

// when images are loaded, adjust the size of the project panel
$(document).imagesLoaded(function(){ resizeAdjust() });
// when window is resized, do the same
$(window).resize(function(){ resizeAdjust() })

function resizeAdjust() {
    let currentHCont = window.innerHeight * 1.2
    let currentHBody = parseInt($('.body-text').css('height'))
    $('.container-main').css({height: (currentHCont + currentHBody).toString() + 'px'})
}