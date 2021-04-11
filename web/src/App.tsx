import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import io, { Socket } from "socket.io-client";
import plane from "./icons/aeroplane.png";
import ReactMapGl, { Marker } from "react-map-gl";
// const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
export interface pin {
  latitude: number;
  longitude: number;
}
const token =
  "pk.eyJ1Ijoic3p5bW9uamFrdWJzYWRvd3NraSIsImEiOiJja25ieWFhNmYwOXVzMndwNTJnOHJueTJlIn0.G4LVBjspLq-9EgTHKqwFFg";
function App() {
  const [viewport, setViewport] = useState({
    latitude: 54.372158,
    longitude: 18.638306,
    zoom: 0,
    width: "100vw",
    height: "100vh",
  });
  const [pins, setPins] = useState<any>();

  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.on("fleet", (fleet: pin) => {
      console.log(fleet);
      setPins(fleet);
    });
  }, []);

  // useEffect(() => {
  //   const socket = io("http://localhost:4000");
  //   socket.on("fleeUpdate", (fleet: pin) => {
  //     console.log(fleet);
  //     // setPins(fleet);
  //   });
  // });
  // socket.on("testerEvent", (mess: any) => {
  //   console.log(mess);
  // });
  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={token}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={(viewport: any) => setViewport(viewport)}
    >
      {pins ? (
        pins.map((pin: any, idx: number) => {
          return (
            <Marker
              key={idx}
              latitude={pin.latitude}
              longitude={pin.longtitude}
            >
              <img
                src={plane}
                alt="pin as plane"
                width="15px"
                height="15px"
              ></img>
            </Marker>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </ReactMapGl>
  );
}

export default App;
