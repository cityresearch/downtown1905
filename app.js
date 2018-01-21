var map = L.map('map',{
      minZoom: 8,
      maxZoom: 19
    })
    .setView([38.2529, -85.751], 15);

var gBase = new L.Google();

map.addLayer(gBase);

var overlay = L.tileLayer('https://api.mapbox.com/v4/maptimelou.4a73dnii/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwdGltZWxvdSIsImEiOiJjaXYzM3NsbmwwMTZoMm9vYXVva3gxN2ttIn0.obxey61xwB2yWaR5Ca1Psw', {
      //  attribution: '<a href="https://www.ridetarc.org/" target="_blank">Transit Authority of the River City</a>',
        opacity: 0.75,
        maxNativeZoom: 19,
        maxZoom: 19
      })
      .addTo(map);

  $("#opacity-control").trigger("create");
  $("#opacity-slider").on("slidestop", function(event, ui){
    var opacityNew = event.target.valueAsNumber;
    ChangeOpacity(opacityNew, overlay);
  })

  function ChangeOpacity(slider, overlay){
    var opacityValue = slider/100;
    overlay.setOpacity(opacityValue);
  }
