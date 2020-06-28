// main.js handles primarily jQuery graphical effects available on multiple pages.

// Nothing to be executed until the page is fully loaded.
$(document).ready(function () {
    
    // General fadein effect on all pages.
    $(".content-wrapper").hide().fadeIn(600);

    // Nav-Link highlighting
    $(".nav-link").mouseover(function () {
        $(this).css("text-decoration", "underline");

        $(this).mouseout(function () {
            $(this).css("text-decoration", "NONE");
        });
    });

    // start.html highlighting of event-links created with loadCalEvents.js
    $(".event-link").mouseover(function () {

        $(this).css("text-decoration", "underline");

        $(this).mouseout(function () {

            $(this).css("text-decoration", "NONE");
        });
    });

    // Language toggler highlighter

    $(".flag-icon-wrapper").mouseover(function () {
        $(this).fadeTo(100, 1);

        $(this).mouseout(function () {
            $(this).fadeTo(100, 0.5);
        });
    });
});