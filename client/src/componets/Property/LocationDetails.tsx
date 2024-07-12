import { useContext,useState } from "react";
import { PropertyStateContext } from "../../store/PropertyState";
import { MapPinIcon } from "@heroicons/react/24/solid";
import GoogleMaps from "../GoogleMaps";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

function LocationDetails() {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const { locationDetails, setLocationDetails } =
    useContext(PropertyStateContext);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLocationDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="buildingName"
            className="block font-medium leading-6 text-gray-900"
          >
            Building/Society Name
          </label>
          <div className="mt-2">
            <input
              id="buildingName"
              name="buildingName"
              required
              placeholder="Enter Building/Society Name"
              type="text"
              onChange={handleChange}
              value={locationDetails.buildingName}
              autoComplete="buildingName"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="locality"
            className="block font-medium leading-6 text-gray-900"
          >
            Locality/Area
          </label>
          <div className="mt-2">
            <input
              id="locality"
              placeholder="Enter Locality/Area Name"
              name="locality"
              required
              type="text"
              onChange={handleChange}
              value={locationDetails.locality}
              autoComplete="locality"
              className="block w-full  rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="landmark"
            className="block font-medium leading-6 text-gray-900"
          >
            Landmark/Street Name
          </label>
          <div className="mt-2">
            <input
              id="landmark"
              required
              placeholder="Enter Landmark/Street Name"
              name="landmark"
              onChange={handleChange}
              value={locationDetails.landmark}
              type="text"
              autoComplete="landmark"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="city"
            className="block font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <select
              id="city"
              required
              name="city"
              value={locationDetails.city}
              onChange={handleChange}
              autoComplete="city"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
            >
              {cities.map((face, index) => (
                <option value={face} key={index}>
                  {face}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <h3 className="text-lg mb-3 font-medium leading-6 text-gray-900">
            Mark Locality on Map
          </h3>
          <div className="action flex flex-col w-full  ">
              <div> 
              <div className="relative w-full inline-flex  items-center justify-between gap-2">
                
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <MapPinIcon className="size-4 text-gray-400" />
                </div>
                  <input type="text" placeholder="Search the locality" className="block ps-10 my-2 w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}/>
                  
                  
                <button type="button" onClick={()=>{
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
                  })
                  .catch((err) => console.log("err: ", err));
  
  
  
                }} className="bg-primary text-white px-4 py-1.5 rounded-md  ">Search</button>
                </div>
              </div>
          

                {/* <div className="search-list-box  bg-white w-full h-32 my-5 overflow-auto border border-zinc-300 rounded-md">
                    <ul className="divide-y  space-y-2">
                    {listPlace.map((place, index) => (
                      // @ts-ignore
                      <li key={index} className="search-list-item cursor-pointer hover:bg-gray-200 h-full">{place?.display_name}</li>
                    ))} 
                    </ul>
                </div> */}
          </div>
             
          <div className="w-full">
              <GoogleMaps />
          </div>
        </div>
        </div>
      
    </>
  );
}

export default LocationDetails;

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Thane",
  "Bhopal",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Haora",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli and Dharwad",
  "Bareilly",
  "Moradabad",
  "Mysore",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Tiruchirappalli",
  "Bhubaneswar",
  "Salem",
  "Mira and Bhayander",
  "Thiruvananthapuram",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Guntur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai Nagar",
  "Warangal",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Nanded Waghala",
  "Kolapur",
  "Ajmer",
];
