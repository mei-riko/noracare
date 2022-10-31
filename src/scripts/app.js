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
    $(".radio .radio__input").on("change", function(){
        if( $(this).data("hidden") ){
            let id = $(this).data("hidden");
            let value = $(this).val();
            if( value === "yes" ){
                $(id).slideDown();
            }else{
                $(id).slideUp();
            }
        }else{
            return null;
        }
    });
    // Checkbox Change
    $(".checkbox .checkbox__input").on("change", function(){
        if( $(this).data("activate") ){
            let id = $(this).data("activate");
            let disabledValue = $(id).prop('disabled');
            
            if( disabledValue ){
                $(id).prop('disabled', false);
                console.log( id );
                console.log( disabledValue );
            }else{
                $(id).prop('disabled', true);
            }
        }else{
            return null;
        }
    });
});

import './mouseup';
import '../items/input/input';