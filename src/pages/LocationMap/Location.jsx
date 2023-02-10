import GoogleMapReact from "google-map-react";
import { useEffect } from "react";
import axios from "axios";
function Location({ location, zoomLevel }) {
  const API_KEY = "AIzaSyC18c2xXIqhAj96Aq0cuB_tvFSiKFHCTI8";
  //latitude and Longitude for the location, these numbers were gotten from the google map product.
  const LAT = 33.99038944353925;
  const LON = -118.23592211743295;

  useEffect(() => {}, []);
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

        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: LAT, lng: LON }}
        defaultZoom={16}
        // options={{ mapTypeId: "terrain" }}
      >
        <Marker lat={LAT} lng={LON} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

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
export default Location;
