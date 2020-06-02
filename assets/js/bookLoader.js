$(document).ready(function () {

    $("#btn-april-en").click(function () {
                  
    
          $.getJSON("../assets/js/books.json", function (data, status) {

            // Remove the console logs before final submission, currently in for debugging reasons

            console.log(data);
            console.log(status); 
    
            $("#img-container").html("<img src="+data.aprilWitchEn.coverIMG+">");
            $("#title-en").html("h3>Title: ")+data.aprilWitchEn.title+"</h3>"
          });
    });
});