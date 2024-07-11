import {useContext } from 'react';
import { PropertyStateContext } from '../../store/PropertyState';
import { MapPinIcon } from '@heroicons/react/24/solid';
function LocationDetails() {
  
  const { locationDetails, setLocationDetails } = useContext(PropertyStateContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
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
              name='buildingName'
              placeholder='Enter Building/Society Name'
              type="text" onChange={handleChange} value={locationDetails.buildingName}
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
              placeholder='Enter Locality/Area Name'
              name='locality'
              type="text" onChange={handleChange} value={locationDetails.locality}
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
              placeholder='Enter Landmark/Street Name'
              name='landmark' onChange={handleChange} value={locationDetails.landmark}
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
              name="city" value={locationDetails.city}
              onChange={handleChange}
              autoComplete="city"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
            >
            {cities.map((face,index) => (
              <option value={face} key={index}>{face}</option>
            ))
            }
            </select>
          </div>
        </div>

        <div className='col-span-full'>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Mark Locality on Map</h3>

        <div className='relative w-full'>
            <div className='px-5 absolute w-full top-5 inline-flex items-center'>
            <div className='absolute px-3'>
                <span><MapPinIcon className='size-5 text-primary'/></span>
            </div>
                <input type='text' id='map-location' name='map' value={locationDetails.map} onChange={handleChange} className='w-full border-0 pl-10' placeholder='Search your society or nearest landmark'/>

            </div>
            <div className='map w-full'>
                <img src="/dummy.png" alt="logo" className='object-contain w-full' />
            </div>
        </div>
        </div>
     </div>
    </>
  )
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
    "Ajmer"
]