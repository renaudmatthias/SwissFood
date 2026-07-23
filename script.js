import openlayers as ol 

const extent = [2420000, 1030000, 2900000, 1360000];
proj4.defs("EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000" +
  " +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs");
ol.proj.proj4.register(proj4);
const projection = new ol.proj.Projection({ code: "EPSG:2056", extent });


const map = new ol.Map({
  target: "map",
  layers: [new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: "https://wms.geo.admin.ch/",
      params: { LAYERS: "ch.swisstopo.pixelkarte-farbe", FORMAT: "image/png", VERSION: "1.3.0" },
      serverType: "mapserver", projection,
    }),
  })],
  view: new ol.View({
    projection, center: [2660000, 1190000], zoom: 2.5, minZoom: 2.5,
    extent: [2485000, 1075000, 2834000, 1296000], constrainOnlyCenter: true,
  }),
});