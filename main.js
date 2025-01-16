import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature.js';
import { Circle } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import { useGeographic } from 'ol/proj';
import coordinateData from './locations.json' assert { type: 'json' };

const calPolyLocation = [-120.6559, 35.3010];

useGeographic();
function styleCreator(coord) {
   return new Style({
    renderer(coords, state) {
      const [[x, y], [x1, y1]] = coords;
      const ctx = state.context;
      const dx = x - x1;
      const dy = y - y1;
      const radius = Math.sqrt(dx * dx + dy * dy);

      const calPolyDistance = Math.hypot(
        coord[0] - calPolyLocation[0], 
        coord[1] - calPolyLocation[1]
      );

      let fillColor;
      let size;

      if (calPolyDistance < 10) {
        fillColor = 'rgba(255, 0, 0, 1)';
        size = 0.5;
      } else if (calPolyDistance < 40) {
        fillColor = 'rgba(0, 255, 0, 1)';
        size = 1.0;
      } else {
        fillColor = 'rgba(0, 0, 255, 1)';
        size = 2.0;
      }

      ctx.beginPath();
      ctx.fillStyle = fillColor;
      ctx.arc(x, y, radius * size, 0, 2 * Math.PI, true);
      ctx.fill();

      ctx.arc(x, y, radius * size, 0, 2 * Math.PI, true);
      ctx.strokeStyle = 'rgba(50, 50, 50, 1)';
      ctx.stroke();
    },
  });
}

const circles = coordinateData.locations.map(coord => {
  const circle = new Feature({geometry: new Circle(coord, 1)});
  const style = styleCreator(coord);
  circle.setStyle(style);

  return circle
});

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
      visible: true
    }),
    new VectorLayer({
      source: new VectorSource({
        features: circles,
      }),
    }),
  ],
  view: new View({
    center: [-120.6596, 35.2828],
  zoom: 2
  })
});
