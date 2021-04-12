import { useEffect, useState } from "react";
import io from "socket.io-client";
import plane from "./icons/aeroplane.png";
import ReactMapGl, { Marker } from "react-map-gl";
import { Heading, Text } from "@chakra-ui/react";
import ListBox from "./components/search";
// const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
export interface pin {
  label: string;
  latitude: number;
  longitude: number;
}

// ! this should be in .env file but it's easier for you to run it with it here
const token =
  "pk.eyJ1Ijoic3p5bW9uamFrdWJzYWRvd3NraSIsImEiOiJja25ieWFhNmYwOXVzMndwNTJnOHJueTJlIn0.G4LVBjspLq-9EgTHKqwFFg";
function App() {
  // We set deafult settings on our Map latitude and longitude are coords of Gdansk
  const [viewport, setViewport] = useState({
    latitude: 54.372158,
    longitude: 18.638306,
    zoom: 0,
    width: "100vw",
    height: "100vh",
  });
  // Data we get from our server is kept in useState
  const [pins, setPins] = useState<any>();

  // we use this useEffect to recive data from our server and we store in in state
  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.on("fleet", (fleet: pin) => {
      // console.log(fleet);
      setPins(fleet);
    });
  }, []);

  return (
    <>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={(viewport: any) => setViewport(viewport)}
      >
        {/* We show our search box if we have any pins */}
        {pins ? <ListBox pins={pins} /> : null}

        {/* We go through each pin and show it on a map */}
        {pins ? (
          pins.map((pin: any, idx: number) => {
            return (
              <Marker
                key={idx}
                latitude={pin.latitude}
                longitude={pin.longtitude}
              >
                <Text color="red" fontSize="24px">
                  {pin.label}
                </Text>
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
          // If we didnt receive any pins show Loading
          <Heading>Loading</Heading>
        )}
      </ReactMapGl>
    </>
  );
}

export default App;
