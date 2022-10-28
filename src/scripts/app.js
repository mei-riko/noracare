import $ from 'jquery';

$(function() {
    // Animate Scroll
    $(document).on('click', '[data-trigger="scroll"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
    // Fancybox
    // Fancybox.bind("[data-fancybox]", {
    //     autoFocus: false,
    //     dragToClose: false,
    // });

    // Radio Change
    $("input[name='hospital']").on("change", function(){
        console.log('1');
    });
});

import './mouseup';
import '../items/input/input';