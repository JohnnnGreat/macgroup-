import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import { TerrainLayer } from "@react-google-maps/api";
import { useEffect } from "react";
import axios from "axios";
function Location({ location, zoomLevel }) {
  const API_KEY = "AIzaSyC18c2xXIqhAj96Aq0cuB_tvFSiKFHCTI8";
  //latitude and Longitude for the location, these numbers were gotten from the google map product.

  const LAT = 33.9914619;
  const LON = -118.238958;
  const mapStyle = [
    {
      featureType: "all",
      stylers: [{ saturation: -80 }, { lightness: 60 }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ hue: "#00ffee" }, { saturation: -50 }],
    },
  ];

  
 
  return (
    <div
      style={{
        height: "100vh",

        width: "80%",
        margin: "auto",
        border: "2px solid grey",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: LAT, lng: LON }}
        defaultZoom={17}
        options={{ style: mapStyle }}
      >
        <TerrainLayer />
        <LocationPin lat={LAT} lng={LON} text={"5716 Alba Street La 90058"} />
      </GoogleMapReact>
    </div>
  );
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon
      icon="mdi:map-marker"
      color="blue"
      width="30"
      height="27"
      hFlip={true}
    />
    <p className="pin-text">{text}</p>
  </div>
);

export default Location;
