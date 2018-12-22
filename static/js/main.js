$(document).ready(function(){
    $(function() {
        $.scrollify({
            section : ".section-class-name",
            sectionName : "section-name",
            interstitialSection : ".hf",
            setHeights: false,
            scrollbars: false,
            before: function(index, sections) {
                // change the menu button's shading to signify which
                // panel we are currently on 
                if (sections[index].attr('class') == 'project-tile section-class-name'){
                   let current = '#' + sections[index].attr('id').split('loc-')[1]
                   let target = '.project-panel-link' + '[href="' + current +'"]'
                   $('.project-panel-link').css({backgroundColor: "#191919"})
                   $($(target)[0]).css({backgroundColor: "#2B2B2B"})
                }
            }
        });
    });

    window.setTimeout(function() {
        // set margins of project panels after setting scrollify
        // to ensure proper spacing
        $('.project-tile').css({marginTop: "15vh"});  
        $('.project-tile').first().css({marginTop: "30vh"});  
    }, 5)

    // on menu button click, move to section
    $('.project-panel-link').click(function(e){
        $.scrollify.move('#' + (this.href.split('#')[1]));
    });

    // on project panel click, animate out to page change
    $('.project-link').click(function(e) {
        let target = this.href;
        let margin = ""
        console.log($(this).children().first())
        console.log($('.project-tile').first())
        if ($(this).children().first()[0] == $('.project-tile').first()[0]){
            let height = window.innerHeight;
            let width = window.innerWidth;
            margin = (height * 0.15 +  width * 0.02).toString() + "px"
        }
        else {
            margin = "2vw"
        }
        // make dots dissapear
        $('.dots').animate({opacity: 0}, 1000);
        // animate the project panel 
        $(this).children().animate({
            width: "96vw",
            height: "100vh",
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: margin,
            marginBottom: "2vw",
        }, 1500, function(){
            // change the page when done
            window.setTimeout(function(){
                window.location.href = target;
            }, 100)
        });
        // animate out all other project panels
        $('.project-tile').not($(this).children()).animate({
            opacity: 0
        }, 800)
        // animate the main image and content
        let image = $(this).children().first().children().first()
        $(image).animate({
            width: "-1vw",
            height: "100vh"
        }, 1500)
        return false;
    });
});
