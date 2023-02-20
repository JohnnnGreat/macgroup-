import GoogleMapReact from "google-map-react";
<<<<<<< HEAD
import { Icon } from "@iconify/react";

=======
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
import { useEffect } from "react";
import axios from "axios";
function Location({ location, zoomLevel }) {
  const API_KEY = "AIzaSyC18c2xXIqhAj96Aq0cuB_tvFSiKFHCTI8";
  //latitude and Longitude for the location, these numbers were gotten from the google map product.
<<<<<<< HEAD
  const LAT = 33.9914619;
  const LON = -118.238958;

=======
  const LAT = 33.99038944353925;
  const LON = -118.23592211743295;

  useEffect(() => {}, []);
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
  /*const mapStyles = [
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { weight: 1 }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
  ];*/

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
  }, []);
  return (
    <div
      style={{
        height: "100vh",

<<<<<<< HEAD
        width: "80%",
        margin: "auto",
        border: "2px solid grey",
=======
        width: "100%",
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: LAT, lng: LON }}
<<<<<<< HEAD
        defaultZoom={17}
        // options={{ mapTypeId: "terrain" }}
      >
        <LocationPin lat={LAT} lng={LON} text={"5716 Alba Street La 90058"} />
=======
        defaultZoom={16}
        // options={{ mapTypeId: "terrain" }}
      >
        <Marker lat={LAT} lng={LON} text="My Marker" />
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
      </GoogleMapReact>
    </div>
  );
}

<<<<<<< HEAD
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

=======
const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "blue",

      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      width: "20px",
      height: "20px",
      transform: "translate(-50%, -50%)",
    }}
  ></div>
);
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
export default Location;
