import React from "react";
import { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
// For clustering, could not implement
import { UseSuperclusterArgument } from "use-supercluster";
import { HiLocationMarker } from "react-icons/hi";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

export default function Map(props) {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const vals = Object.keys(props).map((key) => props[key].class);
  const mapData = [];
  vals.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      mapData.push(obj[key]);
    });
  });

  console.log(mapData);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const Marker = ({ children }) => children;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-screen w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
        defaultCenter={{ lat: 13.026230727627308, lng: 80.27356610337964 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
      >
        {mapData.map((obj, indx) => (
          <Marker
            key={indx}
            lat={parseFloat(String(obj.building.location).substr(1, 13))}
            lng={parseFloat(String(obj.building.location).substr(18, 25))}
          >
            <div onClick={handleClick}>
              <HiLocationMarker />
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div class="w-32 flex-col">
                <span>{obj.course_id}</span>
                <span>{obj.building.building_name}</span>
                <span>{obj.faculty_name}</span>
              </div>
            </Popover>
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  );
}
