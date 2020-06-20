// The script gets and event list and then detailed events-resources from the Google Calendar API. All keys and personal information used in the API call is stored in config.js. 
// For more information on the API used, please visit: https://developers.google.com/calendar/v3/reference/events
// Making sure everything is fully loaded before I begin.
$(document).ready(function () {

    // Keeping API key and path as variables on config.js, as a safety precaution

    let API_KEY = config.GCalAPIKey;
    let path = config.GCalBaseURI;

    // Defining a dateTime object in ISO format, in order to pass this to the API as a filtering argument.

    let currentTime = new Date(Date.now());
    let isoTime = currentTime.toISOString();


    // singleEvents is "TRUE" to ensure the script sorts results by date, as the google API disables orderBy if singleEvents is "FALSE". The variable isoTime is passed as timeMin to 
    // filter older, irrelevant events. 
    $.getJSON(path, { key: API_KEY, maxResults: 15, singleEvents: "TRUE", orderBy: "startTime", timeMin: isoTime }, function (data, status) {
        
        // Iterating through the returned event-items, to gain a list of upcoming events in the calendar. 
        $.each(data.items, function (i, val) {

            // Using the Google Calendar "Event Get" format to get more detailed data to be used in updating the calendar segment of the site.
            $.getJSON(path + val.id, { key: API_KEY }, function (eventData) {

                // Creating a usable URI for Google Maps integration
                var gMapsLink =  encodeURIComponent(eventData.location);
                var GMapsURI = "https://www.google.com/maps/dir/?api=1&destination=";
                
                console.log(GMapsURI+gMapsLink);

                // Google Calendar API Returns ISO timestamps, converting them into something more readable.
                var eventDatetime = new Date(eventData.start.dateTime);
                var dateString = eventDatetime.toLocaleDateString('sv-SE');
                var timeString = eventDatetime.toLocaleTimeString('sv-SE')

                // Each item iterated over creates a child-element of the #calendar-events div-element, with data from the API.
                $("#calendar-events").append("<span style='border:1px;'>Description: " + eventData.description + "<br><br><i class='fas fa-clock'></i>:  " + dateString + " " + timeString+ "<br><a target='_blank' href="+GMapsURI+gMapsLink+"><i class='fas fa-map-marker' class ='event-link'></i>: "+eventData.location + "<br><br><a href=" + eventData.htmlLink + " target='_blank' class ='event-link'><i class='far fa-calendar-check'></i>: See event in calendar!</a><br></span>");

            });
        });
    });
});