import "leaflet/dist/leaflet.css";
import "../index.css";
import { useState,useEffect,useRef,useMemo,useCallback, } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup,useMapEvents } from "react-leaflet";
import { LocationEvent,LatLng} from "leaflet";
import { Icon } from "leaflet";



import mappin from "../assets/map-pin.png";
interface marker  {
  latis: [number, number];
};




const customIcon = new Icon({
  iconUrl: mappin ,
  iconSize: [30, 30],
});



const GoogleMaps = () => {
  
  const [position, setPosition] = useState<LatLng>(new LatLng(28.65553,77.23165));
  const markerRef = useRef<any>(null)
  useEffect(()=>{
    console.log(position)
  },[position])

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e:LocationEvent) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  function DraggableMarker() {
 
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span>
            Marker is draggable <br /> Lat: {position.lat} <br /> Lng: {position.lng}
          </span>
        </Popup>
      </Marker>
    )
  }
  
  



  
  return (
    <MapContainer center={[28.65553,77.23165]} zoom={13} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      <DraggableMarker/>
    </MapContainer>
  );
};

export default GoogleMaps;
