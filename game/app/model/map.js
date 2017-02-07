var mymap = L.map('mapid').setView([46.7167, 2.5167], 13);
  var bonneLat = 48.853;
  var bonneLong = 2.35;
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 6, minZoom: 6,
      id: 'mapbox.streets'
  }).addTo(mymap);

  mymap.on('click', function(e) {
      var rlat1 = Math.PI * bonneLat/180; // Passage de degrès à radians
      var rlat2 = Math.PI * e.latlng.lat/180;
      var rlong1 = Math.PI * bonneLong/180;
      var rlong2 = Math.PI * e.latlng.lng/180;

      var theta = bonneLong - e.latlng.lng;
      var rtheta = Math.PI * theta/180;

      var dist = Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta);
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515 * 1.609344;


      if (dist < 50){
          var marker = L.marker([bonneLat, bonneLong],{color:'red'}).addTo(mymap);
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
          return points;
      }
      else{
          var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
          alert("Vous êtes à : " + dist + " km de votre destination");
      }
  });
