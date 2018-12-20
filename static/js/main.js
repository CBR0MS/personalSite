$(document).ready(function(){
    $('a').click(function(e) {
        let target = this.href;
        $(this).children().animate({
            width: "96vw",
            height: "100vh",
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: "2vw",
            marginBottom: "2vw",
        }, 1500, function(){
            window.location.href = target;
        } );
        return false;
    });
});
