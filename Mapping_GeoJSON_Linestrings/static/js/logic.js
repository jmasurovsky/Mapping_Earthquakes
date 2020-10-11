// Add console.log to check to see if our code is working.
console.log("working");



//L.circleMarker([34.0522, -118.2437]).addTo(map);
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
  Lights: light,
  Dark: dark
};

let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
});

L.control.layers(baseMaps).addTo(map);
// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}
// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/jmasurovsky/Mapping_Earthquakes/main/torontoRoutes.json";
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});
// Then we add our 'graymap' tile layer to the map.
// Create a base layer that holds both maps.
