// main.js handles primarily jQuery graphical effects available on multiple pages.


$(document).ready(function () {

    // General fadein effect on all pages.
    $(".content-wrapper").hide().fadeIn(600);

    // Nav-Link highlighting
    $(".nav-link").mouseover(function () {


        $(this).animate({ fontSize: "1.75rem" }, 200);

        $(this).mouseout(function(){

            $(this).animate({ fontSize: "1.25rem" }, 200);

        });
  
   });

});