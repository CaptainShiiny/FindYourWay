var mymap = L.map('mapid').setView([46.7167, 2.5167], 13);
// var bonneLat = 48.853;  // En attendant de pouvoir générer des coordonnées aléatoires
// var bonneLong = 2.35;   // En attendant de pouvoir générer des coordonnées aléatoires
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    maxZoom: 6,
    minZoom: 6,
    id: 'mapbox.streets'
}).addTo(mymap);

function comparaisonDestinationFinale(bonneLat, bonneLong, url) {

    // var villes = [];
    mymap.on('click', function(e) {
        //e.latlng.lat et e.latlng.lng représentent la latitude et longitude de l'endroit cliqué
        //bonneLat et bonneLong représente la latitude et longitude de l'endroit à trouver

        var rlat1 = Math.PI * bonneLat / 180; // Passage de degrès à radians
        var rlat2 = Math.PI * e.latlng.lat / 180;
        var rtheta = Math.PI * (bonneLong - e.latlng.lng) / 180;

        var dist = Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta);
        dist = Math.acos(dist) * 180 / Math.PI * 60 * 1.1515 * 1.609344;


        if (dist < 50) {
            var marker = L.marker([bonneLat, bonneLong], {
                color: 'red'
            }).addTo(mymap);
            if (dist < 10)
                var points = 10;
            else if (dist < 20)
                var points = 8;
            else if (dist < 30)
                var points = 6;
            else if (dist < 40)
                var points = 4;
            else
                var points = 2;

            alert("Félicitations, vous êtes au bon endroit : " + points + "points");
            if (localStorage.getItem("score")) {
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + points);
            } else {
                localStorage.setItem("score", points);
            }
            localStorage.setItem("score_verify", url);
            return points;
        } else {
            var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
            alert("Vous êtes à : " + dist + " km de votre destination");
        }
    });
}

function comparaisonLieuIndince(bonneLat, bonneLong, indice) {
    mymap.on('click', function(e) {

        var rlat1 = Math.PI * bonneLat / 180; // Passage de degrès à radians
        var rlat2 = Math.PI * e.latlng.lat / 180;
        var rtheta = Math.PI * (bonneLong - e.latlng.lng) / 180;

        var dist = Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta);
        dist = Math.acos(dist) * 180 / Math.PI * 60 * 1.1515 * 1.609344;


        if (dist < 50) {
            var marker = L.marker([bonneLat, bonneLong], {
                color: 'red'
            }).addTo(mymap);
            alert("Félicitations, voila le prochaine indice : " + indice);
        } else {
            var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
            alert("Vous êtes au mauvais endroit");
        }
    });
}

// comparaisonDestinationFinale(48.853, 2.35);
//comparaisonLieuIndince(48.853, 2.35, "Balec");
