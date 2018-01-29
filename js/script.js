var action = "click";
var speed = "500";

$(document).ready(process());

function process() {
//    alert('TEST');
    $('li.q').on(action, function () {
//        $(this).next().slideToggle(speed);
        $(this).next().slideToggle(speed)
                .siblings('li.a')
                .slideUp();
        
        //Get arrow image for the question
        var image = $(this).children('img');
        //Remove rotate class
        $('img').not(image).removeClass('rotate');
        //Toggle rotate class
        image.toggleClass('rotate');
    });
}