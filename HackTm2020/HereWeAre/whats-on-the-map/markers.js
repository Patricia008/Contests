const coordinates = `(21.20366386, 45.76215994), (21.20278751, 45.75403165)
(21.20330301, 45.75813191), (21.20696305, 45.75798805)
(21.207427, 45.76198012), (21.2064991, 45.75377987)
(21.21294285, 45.76169241), (21.2099014, 45.75392375)
(21.21304595, 45.76162049), (21.2152626, 45.75370794)
(21.2110355, 45.75654939), (21.2144378, 45.75647746)
(21.22284044,45.76147663), (21.21851025,45.76158452), (21.21789165,45.75374391), (21.22201564,45.75367197)
(21.22732529,45.7614047), (21.22691289,45.75356406)
(21.23304734,45.76126085), (21.22727374,45.75744856), (21.23227409,45.75342019)
(21.24541366,45.76139292), (21.2525791,45.76117713)
(21.2488675,45.76124906), (21.24850665,45.75333646)
(21.25819805,45.7529408), (21.258662,45.76099732), (21.2618581,45.75614197), (21.26593054,45.76085346), (21.26556969,45.75272499)`

// function addPolylineToMap(map) {
// 	var lineString = new H.geo.LineString();
  
// 	lineString.pushPoint({lat:53.3477, lng:-6.2597});
// 	lineString.pushPoint({lat:51.5008, lng:-0.1224});
// 	lineString.pushPoint({lat:48.8567, lng:2.3508});
// 	lineString.pushPoint({lat:52.5166, lng:13.3833});
  
// 	map.addObject(new H.map.Polyline(
// 	  lineString, { style: { lineWidth: 4 }}
// 	));
//   }

/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} mp      A HERE Map instance within the application
 */
function addMarkersToMap(mp) {

	let tuples = coordinates.split('\n')
	console.log('tples', tuples)
	tuples.map(t => {
		var linePoints = t.split('), (')
		linePoints = linePoints.map(lp => lp.replace(')','').replace('(',''))
		console.log(linePoints)
		const line = []
		linePoints.forEach(t => {
			t = t.split(',')
			console.log('t', t)
			line.push([t[1], t[0]])
		})
		L.polyline(line).addTo(map)
		// mp.addObject(new H.map.Polyline(
		// 	lineString, { style: { lineWidth: 5 }}
		// ))
	})
}

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: ''
});
var defaultLayers = platform.createDefaultLayers();

// //Step 2: initialize a map - this map is centered over Europe
// var map = new H.Map(document.getElementById('map'),
//   defaultLayers.vector.normal.map,{
//   center: {lat:50, lng:5},
//   zoom: 4,
//   pixelRatio: window.devicePixelRatio || 1
// });
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
// var behavior = new L.mapevents.Behavior(new L.mapevents.MapEvents(map));

// Create the default UI components
// var ui = L.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  addMarkersToMap(map);
}
