import { useState } from "react";
import {LocationMap} from "../componets/LocationMap";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Test = () => {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({ lat: 0, lng: 0 });
  const [isLoading, setIsLoading] = useState(false);



  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

  return (
    <section className="w-full min-h-screen bg-gray-100 flex">
      <div className="action flex flex-col flex-1 px-16 ">
        <div>
          <div className="relative w-full inline-flex  items-center justify-between gap-2">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <MapPinIcon className="size-4 text-gray-400" />
            </div>
            <input
              type="text" value={searchText}
              placeholder="Search the locality"
              className="block ps-10  w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                const params = {
                  q: searchText,
                  format: "json",
                  addressdetails: 1,
                  polygon_geojson: 0,
                };
                // @ts-ignore
                const queryString = new URLSearchParams(params).toString();

                fetch(`${NOMINATIM_BASE_URL}${queryString}`, {
                  method: "GET",
                  redirect: "follow",
                })
                  .then((response) => response.text())
                  .then((result) => {
                    console.log(JSON.parse(result));
                    setListPlace(JSON.parse(result));
                    setIsLoading(false);
                  })
                  .catch((err) => console.log("err: ", err));
              }}
              className="bg-primary  text-white px-4 py-1.5 rounded-md disabled:bg-gray-500"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>
        <div></div>

              {!isLoading && searchText.length > 0  && (
                   <div className="search-list-box mt-2 bg-white w-full h-32  overflow-auto border border-zinc-300 ">
                   <ul className="divide-y">
                     {listPlace.map((place: any, index) => (
                       // @ts-ignore
                       <li
                         key={index}
                         onClick={() => {
                           console.log(place);
                           
                           setSelectedPlace({
                             lat: parseFloat(place.lat),
                             lng: parseFloat(place.lon),
                           });
                         }}
                         className="block p-1.5 text-sm text-left search-list-item cursor-pointer hover:bg-gray-100 h-full"
                       >
                         {place?.display_name}
                       </li>
                     ))}
                   </ul>
                 </div>

              )}
       
      </div>
      <div className="w-1/2 relative">
        <LocationMap lat={selectedPlace.lat} lng={selectedPlace.lng} />
      </div>
    </section>
  );
};

export default Test;
