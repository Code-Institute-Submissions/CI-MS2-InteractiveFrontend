$(document).ready(function () {

    console.log("Script loaded!");

    $("#btn-april-en").click(function () {
        
          
        console.log("Confirm click!");
        
    
          $.getJSON("../assets/js/bookLoader.js", function (data, status) {

            console.log(data);
            console.log(status);
    
            $("#img-container").html("<img src=" + data.aprilWitchEn.coverIMG + ">");
            $("#title-en").html("h3>Title: ")+data.aprilWitchEn.title+"</h3>"
          });

    });

});