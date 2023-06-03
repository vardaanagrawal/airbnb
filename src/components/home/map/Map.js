import React, { useMemo, useState } from "react";
import "./map.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const api = "AIzaSyDQBG53Xpm5IESjXjkkkpt3MF4sjdnakC4";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api,
  });

  const [data, setData] = useState(15);

  const center = useMemo(() => ({ lat: 28.6, lng: 77 }), []);

  return (
    <div className="map-section">
      <div className="map-info">
        <div className="map-title">Airbnb it.</div>
        <div className="map-desc">You could earn</div>
        <div className="map-price">₹{data * 3129}</div>
        <div className="map-nights">
          <span className="night-count">{data} nights</span> at an estimated
          3129 a night
        </div>
        <div className="map-slider">
          <input
            type="range"
            min={1}
            max={30}
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="map-box">
        {isLoaded ? (
          <GoogleMap
            mapContainerClassName="map"
            zoom={10}
            center={center}
          ></GoogleMap>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}
