$(document).ready(function(){

    for (let i = 0; i < 5; i++) {
        let position = i * 20;
        $('#content').append(('<div class="card" style="top:' + position.toString() + 'px;"></div>'));   
    }

});