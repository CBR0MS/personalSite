$(document).ready(function(){
    // jekyll wraps all images in paragraph elements, so we want to remove 
    // the hero image from the paragraph wrapping
    const parents = $('p > img.hero-image').parent();
    parents.each(function() {
       this.outerHTML = this.innerHTML
    });

    // wrap everything in the container class to center it on the page
    $('.content').children().not( 'h1, h2, img' ).wrapInner( "<div class='container'></div>");

    //
    $('.content').prepend($("<div class='main-color'></div>"))
    $('.main-color').append($('.hero-image'))

    $('.content').animate({
            opacity: 1
        }, 2000);
});