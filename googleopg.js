var map;
var info;
var liste;

function initMap() {
    // Styles a map in "night mode".
    var info = document.querySelector('#info');
    var infowindow = new google.maps.InfoWindow({})

    var map = new google.maps.Map(document.querySelector('#map'), {
        center: {
            lat: 55.706467,
            lng: 12.539116
        },
        zoom: 12,
        styles: [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
                    }]
                }, {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
                    }]
                }, {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
                    }]
                }, {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
                    }]
                }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
                    }]
                }, {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
                    }]
                }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
                    }]
                }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
                    }]
                }, {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
                    }]
                }, {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
                    }]
                }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
                    }]
                }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
                    }]
                }, {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
                    }]
                }, {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
                    }]
                }, {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
                    }]
                }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
                    }]
                }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
                    }]
                }, {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
                    }]
                }]
    });


    $.getJSON("googleopg.JSON", harLoadetJSON);
    console.log("har loadet JSON");

    function harLoadetJSON(data) {
        liste = data;

    }

    function findMarker(event) {
        var valgtMarker = event.target.id;
        console.log("clickOnMarker" + valgtMarker);
        //for hvert punkt i listen aktiverers grundet "forEach" - JSON fil
        liste.forEach(infoJASON);
    }

    function findInfoiJSON(Information) {
        if (Information.id == valgtMarker) {
            // klon af info template
            var klon = document.querySelector("#template_info").content.cloneNode(true);

            klon.querySelector(".navn").textContent = Information.navn;
            klon.querySelector(".lat").textContent = Information.lat;
            klon.querySelector(".lng").textContent = Information.lng;
            klon.querySelector(".beskrivelse").textContent = Information.beskrivelse;
            klon.querySelector(".motto").textContent = Information.motto;

            document.querySelector("#template_info").innerHTML = "";
            document.querySelector("#template_info").appendChild(klon);

        }
    }




    //zoom, inforWondow og set center
    function clickOnMarker() {
        console.log("der er blevet klikket på ikon");
        map.setCenter(myHomeMarker);
        map.setZoom(18);

        animation: google.maps.Animation.DROP;

        //indset child til klon
        infowindow.setContent(klon);
        infowindow.open(map, marker1);

        // klik på marker og vis info:
        // event listner på marker skal skrives som addListener,
        marker1.addListener("click", clickOnMarker);
        marker2.addListener("click", clickOnMarker);
    }



    // marker rygergården
    var Rygergaarden = {
        lat: 55.706887,
        lng: 12.593779
    }
    var marker1 = new google.maps.Marker({
        position: Rygergaarden,
        map: map,
        title: "I'm HOME",
        animation: google.maps.Animation.DROP
    });

    // marker Moonbar
    var Moonbar = {
        lat: 55.706404,
        lng: 12.539379
    }
    var marker2 = new google.maps.Marker({
        position: Moonbar,
        map: map,
        title: 'ass to the grass',
        //icon: 'bicep.png'
        animation: google.maps.Animation.DROP
    });









}
