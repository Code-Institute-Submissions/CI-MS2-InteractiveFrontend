// The script used to call data from books.json and populate books.html when buttons are clicked, with jQuery chaining to fade in and out between selections.

$(document).ready(function () {

    $.getJSON("../assets/js/books.json", function (data, status) {

        $("#btn-april-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.aprilWitch.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.aprilWitch.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.aprilWitch.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.aprilWitch.published + "</h5>").fadeIn(400);
            $("#quote").hide().html(`<h5>Quote: ${data.en.aprilWitch.quote}</h5>`).fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.aprilWitch.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'>Se boken på Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-rosario-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.rosario.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.rosario.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.rosario.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.rosario.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.rosario.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.rosario.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com</a>").fadeIn(400);
        });

        $("#btn-nifelheim-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.nifelheim.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.nifelheim.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.nifelheim.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.nifelheim.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.nifelheim.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.nifelheim.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-denjagaldrigvar-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.denJagAldrigVar.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.denJagAldrigVar.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.denJagAldrigVar.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.denJagAldrigVar.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.denJagAldrigVar.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.denJagAldrigVar.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-dittlivochmitt-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.dittLivOchMitt.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.dittLivOchMitt.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.dittLivOchMitt.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.dittLivOchMitt.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.dittLivOchMitt.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.dittLivOchMitt.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com").fadeIn(400);



        });

        $("#btn-moderspassion-en").click(function () {



            $("#img-container").hide().html("<img src=" + data.en.moderspassion.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.moderspassion.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.moderspassion.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.moderspassion.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.moderspassion.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.moderspassion.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);
        });

        $("#btn-slumpvandring-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.slumpvandring.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.slumpvandring.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.slumpvandring.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.slumpvandring.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.slumpvandring.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.slumpvandring.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-miriam-en").click(function () {



            $("#img-container").hide().html("<img src=" + data.en.miriam.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.miriam.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.miriam.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.miriam.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.miriam.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.miriam.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-isochvatten-en").click(function () {

            $("#img-container").hide().html("<img src=" + data.en.isOchVatten.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.en.isOchVatten.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.en.isOchVatten.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Year of publication: " + data.en.isOchVatten.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Quote: " + data.en.isOchVatten.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.en.isOchVatten.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });

// Language-adjusted version of the above, for the swedish-language part of the site

        $("#btn-april-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.aprilWitch.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.aprilWitch.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.aprilWitch.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.aprilWitch.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.aprilWitch.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.aprilWitch.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'>Se boken på Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-rosario-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.rosario.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.rosario.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.rosario.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.rosario.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.rosario.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.rosario.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com</a>").fadeIn(400);
        });

        $("#btn-nifelheim-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.nifelheim.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.nifelheim.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.nifelheim.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.nifelheim.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.nifelheim.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.nifelheim.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-denjagaldrigvar-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.denJagAldrigVar.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.denJagAldrigVar.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.denJagAldrigVar.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.denJagAldrigVar.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.denJagAldrigVar.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.denJagAldrigVar.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-dittlivochmitt-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.dittLivOchMitt.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.dittLivOchMitt.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.dittLivOchMitt.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.dittLivOchMitt.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.dittLivOchMitt.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.dittLivOchMitt.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Se boken på Goodreads.com").fadeIn(400);

        });

        $("#btn-moderspassion-sv").click(function () {



            $("#img-container").hide().html("<img src=" + data.sv.moderspassion.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.moderspassion.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.moderspassion.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.moderspassion.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.moderspassion.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.moderspassion.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-slumpvandring-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.slumpvandring.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.slumpvandring.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.slumpvandring.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.slumpvandring.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.slumpvandring.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.slumpvandring.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-miriam-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.miriam.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.miriam.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.miriam.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.miriam.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.miriam.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.miriam.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });

        $("#btn-isochvatten-sv").click(function () {

            $("#img-container").hide().html("<img src=" + data.sv.isOchVatten.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
            $("#title").hide().html("<h1>" + data.sv.isOchVatten.title + "</h1>").fadeIn(400);
            $("#isbn").hide().html("<h5>ISBN: " + data.sv.isOchVatten.isbn + "<h5>").fadeIn(400);
            $("#published").hide().html("<h5>Publiceringsår: " + data.sv.isOchVatten.published + "</h5>").fadeIn(400);
            $("#quote").hide().html("<h5>Citat: " + data.sv.isOchVatten.quote + "</h5>").fadeIn(400);
            $("#goodreads").hide().html("<a href='" + data.sv.isOchVatten.goodReadsURL + "' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

        });
    });
});