$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";
    // jekyll wraps all images in paragraph elements, so we want to remove 
    // the images from the paragraph wrapping
    const parents = $('p > img').parent();
    parents.each(function() {
       this.outerHTML = this.innerHTML
    });
    // consolidate elements from jekyll into various divs for styling
    $('.content').append($("<div class='body-text'></div>"))
    $('.content').prepend($("<div class='title'></div>"))
    $('.title').append($('.content').children().filter('h1, h2'))
    $('.body-text').append($('.content').children().not('.hero-image, .title'))

    $('.body-text > img').each(function(){
        console.log($(this).nextUntil('img'))

    });


    // set up the grid system for the contents of the body
    $('.body-text').children().each(function(index){
        let elt = $(this).detach()
        elt = $(elt).addClass('img-fluid')
        if (index % 2 == 0){
            $('.body-text').append("<div class='row'></div>")
        }
        $('.row').last().append("<div class='col-sm-12 col-lg-6' id='" + index.toString() + "'></div>")
        $('#' + index.toString()).append(elt)   
    })

    //  animate in image
    $('.hero-image').animate({
        width: '55vw'
    }, 1500);
    // animate in title
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

function gcd (a,b){
    if (b == 0) {
        return a
    }
    return gcd (b, a % b)
}
    