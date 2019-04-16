const gogi = 'gogi';
const notGogi = 'not gogi';
const v = 0;

mapboxgl.accessToken = 'pk.eyJ1IjoidHJpZ2dlciIsImEiOiJjanVpZHYxbDMwdXN5M3lzYXg5dzJ0Y3Y1In0.kc2qv99WmxmAf8RgZrwS4w';
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
} else {
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [30.5933111, 50.4284607],
        zoom: 15
    });
    let marker = new mapboxgl.Marker()
        .setLngLat([30.5933111, 50.4284607])
        .addTo(map);
}