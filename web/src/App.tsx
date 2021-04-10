import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";

import ReactMapGl, { Marker } from "react-map-gl";
// const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
export interface pin {
  label: string;
  latitue: number;
  longtitue: number;
}
const token =
  "pk.eyJ1Ijoic3p5bW9uamFrdWJzYWRvd3NraSIsImEiOiJja25ieWFhNmYwOXVzMndwNTJnOHJueTJlIn0.G4LVBjspLq-9EgTHKqwFFg";
function App() {
  const [viewport, setViewport] = useState({
    latitude: 54.372158,
    longitude: 18.638306,
    zoom: 8,
    width: "100vw",
    height: "100vh",
  });
  const [pins, setPins] = useState<pin>();
  const socket = io("http://localhost:4000");
  useEffect(() => {
    socket.on("getCoords", (fleet: any) => {
      // setPins(coords);
      console.log(fleet);
    });
  });

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={token}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={(viewport: any) => setViewport(viewport)}
    ></ReactMapGl>
  );
}

export default App;
