import "leaflet/dist/leaflet.css";
import "../index.css";
import { useEffect} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";





export const LocationMap = ({lat,lng}:{lat : number,lng:number}) => {
  // const [position, setPosition] = useState<LatLng>();


  function ResetCenterView(props:any) {
    const { selectPosition } = props;
    const map = useMap();
  
    useEffect(() => {
      if (selectPosition) {
        map.setView(
          L.latLng(selectPosition?.lat, selectPosition?.lon),
          map.getZoom(),
          {
            animate: true
          }
        )
      }
    }, [selectPosition]);
  
    return null;
  }

  // function LocationMarker() {
  //   const map = useMapEvents({
  //     click() {
  //       map.locate()
  //     },
  //     locationfound(e:LocationEvent) {
  //       setPosition(e.latlng)
  //       map.flyTo(e.latlng, map.getZoom())
  //     },
  //   })
  
  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   )
  // }
  
  
  
  
  return (
    <MapContainer center={[21.7679,78.8718]} zoom={10} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat,lng]} >
        <Popup>
          Your Location
        </Popup>
      </Marker>
      <ResetCenterView selectPosition={
        {lat:lat,lon:lng}
      }
      />
    </MapContainer>
  );
};

