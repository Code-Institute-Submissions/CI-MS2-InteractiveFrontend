$(document).ready(function () {

    var API_KEY = config.GCalAPIKey;
    var path = config.GCalBaseURI;

    // The script gets 5 events from the Google Calendar API. All keys and personal information used in the API call is stored in config.js 

    $.get(path, { key: API_KEY, maxResults: 5 }, function (data, status) {


        //For loop functions, it returns the event IDs that is then fed back into the GCal API for more specific event data.

        var i;
        for (i = 0; i < data.items.length; i++) {

            var eventId = data.items[i].id;// Fed into the URL for the get() function, to get specific event-related data

            $.get(path + eventId, { key: API_KEY }, function (eventDetail, getStatus) {

                // Gets the specifics of each event, which can then be fed into the #calendar-events span on start.html

                var eventCont = JSON.stringify(eventDetail);

                console.log("Returned " + eventCont);
                console.log("HTTP req status: " + getStatus);

                // TO DO: Start feeding eventCont into html on the actual page!
            });
        }

    });
});