// The script used to call data from books.json and populate books.html when buttons are clicked, with jQuery chaining to fade in and out between selections.

$(document).ready(function () {


  $.getJSON("../assets/js/books.json", function (data, status) {

  $("#btn-april-en").click(function () {
    
      $("#img-container").hide().html("<img src=" + data.en.aprilWitchEn.coverIMG+" style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.aprilWitchEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.aprilWitchEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.aprilWitchEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.aprilWitchEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.aprilWitchEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);
    
  });

  $("#btn-rosario-en").click(function () {

      $("#img-container").hide().html("<img src=" + data.en.rosarioEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.rosarioEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.rosarioEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.rosarioEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.rosarioEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.rosarioEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);
    });

  $("#btn-nifelheim-en").click(function () {

      $("#img-container").hide().html("<img src=" + data.en.nifelheimEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.nifelheimEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.nifelheimEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.nifelheimEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.nifelheimEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.nifelheimEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

  });

  $("#btn-denjagaldrigvar-en").click(function () {

      $("#img-container").hide().html("<img src=" + data.en.denJagAldrigVarEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.denJagAldrigVarEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.denJagAldrigVarEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.denJagAldrigVarEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.denJagAldrigVarEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.denJagAldrigVarEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

  });

  $("#btn-dittlivochmitt-en").click(function () {

      $("#img-container").hide().html("<img src=" + data.en.dittLivOchMittEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.dittLivOchMittEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.dittLivOchMittEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.dittLivOchMittEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.dittLivOchMittEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.dittLivOchMittEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

  });

  $("#btn-moderspassion-en").click(function () {



      $("#img-container").hide().html("<img src=" + data.en.moderspassionEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.moderspassionEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.moderspassionEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.moderspassionEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.moderspassionEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.moderspassionEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);

  });

  $("#btn-slumpvandring-en").click(function () {

      $("#img-container").hide().html("<img src=" + data.en.slumpvandringEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.slumpvandringEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.slumpvandringEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.slumpvandringEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.slumpvandringEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.slumpvandringEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);
   
  });

  $("#btn-miriam-en").click(function () {

    

      $("#img-container").hide().html("<img src=" + data.en.miriamEn.coverIMG + " style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.miriamEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.miriamEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.miriamEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.miriamEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.miriamEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);
    
  });

  $("#btn-isochvatten-en").click(function () {

      $("#img-container").hide().html("<img src=" + data.en.isOchVattenEn.coverIMG +" style='float: left; max-width: 180px; height: auto; margin-right: 10px;'>").fadeIn(400);
      $("#title").hide().html("<h1>" + data.en.isOchVattenEn.title + "</h1>").fadeIn(400);
      $("#isbn").hide().html("<h5>ISBN: " + data.en.isOchVattenEn.isbn + "<h5>").fadeIn(400);
      $("#published").hide().html("<h5>Year of publication: " + data.en.isOchVattenEn.published + "</h5>").fadeIn(400);
      $("#quote").hide().html("<h5>Quote: " + data.en.isOchVattenEn.quote + "</h5>").fadeIn(400);
      $("#goodreads").hide().html("<a href='"+ data.en.isOchVattenEn.goodReadsURL+"' target='_blank'><img src='../assets/images/icons/goodreads_icon_32x32.png'> Click to see on Goodreads.com</a>").fadeIn(400);
   
  })

  
});
});