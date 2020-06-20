// main.js handles primarily jQuery graphical effects available on multiple pages.


$(document).ready(function () {

    // General fadein effect on all pages.
    $(".content-wrapper").hide().fadeIn(600);

    // Nav-Link highlighting
    $(".nav-link").mouseover(function () {


        $(this).animate({
            fontSize: "1.5rem",
            paddingTop: "0%",
            paddingBottom: "0%",
            paddingLeft: "25px",
            paddingRight: "25px",
        }, 200);

        $(this).mouseout(function () {

            $(this).animate({
                fontSize: "1.25rem",
                padding: "10px"
            }, 200);

        });

    });

    // start.html animations on event-links. Does not trigger properly on server. 

    $(".event-link").mouseover(function () {

        $(this).animate({
            textColor: "#de3535;",
            fontSize: "1.5rem",
        }, 200);

        //Debugging message for console
        console.log("MouseOver triggered!");

        $(this).mouseout(function () {

            $(this).animate({
                fontSize: "1.25rem",
                textColor: "#000000"
            }, 200);
            //Debugging message for console
            console.log("MouseOver triggered!");
        });
    });
});