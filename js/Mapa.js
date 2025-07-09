/* === CONFIG ===================================================== */

const GEOJSON_URL = '/js/peru_departamental_simple.geojson.geojson';
const KEY         = 'NOMBDEP';
const COLOR_BG    = '#83A59D';
const COLOR_ON    = '#F6C9A9';

const departamento =
      document.body.dataset.dpto || document.body.id || 'CUSCO';

/* === MAPA BASE ================================================== */
const map = L.map('map', {
  zoomControl: false,
  minZoom: 1,     // no más lejos que 4
  maxZoom: 6.5,     // no más cerca que 8
  zoomSnap: 0.25  // pasos de 0.25 (opcional)
}).setView([-13.5,-72.5], 5); // ← nivel inicial más pequeño

L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
).addTo(map);

const styleBase = () => ({ color: COLOR_BG, weight: 1, fillOpacity: .15 });
const styleHi   = { color: '#ef6c00', weight: 2,
                    fillColor: COLOR_ON, fillOpacity: .6 };

/* === VARIABLES de control ====================================== */
let capa;               // capa GeoJSON con los 24 departamentos
let layerActivo = null; // referencia al polígono actualmente resaltado

/* === CARGA DEL GEOJSON ========================================= */
fetch(GEOJSON_URL)
  .then(r => r.json())
  .then(geo => {

    capa = L.geoJSON(geo, {
      style: styleBase,
      interactive: false    
      
    }).addTo(map);

    /* 1ª vez: resaltar el dpto. que indica la página */
    resaltar(departamento);
  })
  .catch(e => console.error('GeoJSON error:', e));

/* === FUNCIÓN PRINCIPAL ========================================= */
function resaltar(nombre) {

  /* 1. Si había un seleccionado, lo devolvemos a gris y quitamos su tooltip */
  if (layerActivo) {
    layerActivo.setStyle(styleBase());
    layerActivo.closeTooltip();   // oculta la etiqueta
    layerActivo = null;
  }

  /* 2. Buscamos el nuevo seleccionado */
  capa.eachLayer(layer => {
    const es = layer.feature.properties[KEY] === nombre;
    if (es) {
      layerActivo = layer;                 // lo guardamos
      layer.setStyle(styleHi);             // color naranja
      layer.bindTooltip(nombre, {          // creamos tooltip solo aquí
        permanent: true,
        direction: 'center',
        className: 'label-highlight'
      }).openTooltip();
      map.fitBounds(layer.getBounds());    // zoom al contorno
    }
  });
}
