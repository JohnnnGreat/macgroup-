import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
function Location({ location, zoomLevel }) {
  const API_KEY = "AIzaSyC18c2xXIqhAj96Aq0cuB_tvFSiKFHCTI8";

  //latitude and Longitude for the location, these numbers were gotten from the google map product.
  const LAT = 33.9914619;
  const LON = -118.238958;

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        margin: "auto",
        border: "1px solid grey",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: LAT, lng: LON }}
        defaultZoom={11}
      >
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
