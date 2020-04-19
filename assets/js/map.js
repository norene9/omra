var map, watchId, userPin;
var directionsManager;

function GetMap() {

    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'An-DQwMckibyuZ0q93OLo5kSNITR6VevW6-zy4NGjlLPGxMLljye2k7SZHXRF1oU'
    });
    function StartTracking() {
        //Add a pushpin to show the user's location.
        userPin = new Microsoft.Maps.Pushpin(map.getCenter(), { visible: false });
        map.entities.push(gpsPin);

        //Watch the users location.
        watchId = navigator.geolocation.watchPosition(UsersLocationUpdated);
    }
    function UsersLocationUpdated(position) {
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        //Update the user pushpin.
        userPin.setLocation(loc);
        userPin.setOptions({ visible: true });

        //Center the map on the user's location.
        map.setView({ center: loc });
    }

    function StopTracking() {
        // Cancel the geolocation updates.
        navigator.geolocation.clearWatch(watchId);

        //Remove the user pushpin.
        map.entities.clear();
    }

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        //Set the request options that avoid highways and uses kilometers.
        directionsManager.setRequestOptions({
            distanceUnit: Microsoft.Maps.Directions.DistanceUnit.km,
            routeAvoidance: [Microsoft.Maps.Directions.RouteAvoidance.avoidLimitedAccessHighway]
        });

        //Make the route line thick and green. Replace the title of waypoints with an empty string to hide the default text that appears.
        directionsManager.setRenderOptions({
            drivingPolylineOptions: {
                strokeColor: 'green',
                strokeThickness: 6
            },
            waypointPushpinOptions: {
                title: ''
            }
        });

        //Calculate directions.
        directionsManager.calculateDirections()


        //Specify where to display the route instructions.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Specify the where to display the input panel
        directionsManager.showInputPanel('directionsPanel');
    });
}