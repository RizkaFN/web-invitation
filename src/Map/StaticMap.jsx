import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import osm from "./osm-dark";
import "leaflet/dist/leaflet.css";
import './map.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

// const interactionOptions = {
//   zoomControl: false,
//   doubleClickZoom: false,
//   closePopupOnClick: false,
//   dragging: false,
//   zoomSnap: false,
//   zoomDelta: false,
//   trackResize: false,
//   touchZoom: false,
//   scrollWheelZoom: true,
// };

class StaticMap extends React.Component {
  render(){
    return (
      <>
          <div className="loc">
            <h1 className="loc-title">Lokasi</h1>
          </div>

          <div className="maplink">
            <a href={this.props.location.url}>
            <MapContainer
              center={this.props.location}
              zoom={12}
              className="static-map"
              // {...interactionOptions}
            >
              <TileLayer url={osm.maptiler.url} />
              <Marker position={[this.props.location.lat, this.props.location.lng]} ></Marker>
            </MapContainer>
            </a>
          </div> 
      </>
    );
  }
};

export default StaticMap;