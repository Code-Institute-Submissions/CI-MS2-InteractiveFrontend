// Passing the key from config.JS as a variable

$('#maContactSheet').on('submit', function (event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('service_id', 'gmail');
    formData.append('template_id', 'contact_form');
    formData.append('user_id', config.EmailJSKey);

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        // Simple confirmation message.
        $("#mail-confirm").hide().html("Your mail has been sent!").fadeIn(200);
    }).fail(function (error) {
        // Error message incl. error code.
        $("#mail-confirm").hide().html("An error has occured! Error code: " + JSON.stringify("error")).fadeIn(200);
    });
});
