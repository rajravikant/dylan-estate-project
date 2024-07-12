import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import axios, { AxiosError } from "axios";


import { PropertyType } from "./store/FormDataSchema";
import PropertyCard from "./componets/PropertyCard";
import Button from "./componets/UI/Button";
import { SearchIcon } from "lucide-react";
import GoogleMaps from "./componets/GoogleMaps";

function Home() {
  let data = useLoaderData() as PropertyType[];
 

  return (
    <section className="bg-white sm:px-16 px-5 w-full ">
        <div className="flex relative justify-between gap-10 py-5 ">
            <div >
              <div className="flex gap-2 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon size={20} />
                </div>
                <input
                  id="searcj"
                  type="text" placeholder="Search for properties or locations"
                  autoComplete="location"
                  className="block w-full ps-10 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <Button type="button" title="Search"/>
              </div>

              <div className="grid lg:grid-cols-2 mt-5 gap-10">
                {data.length > 0 ? (
                  data.map((property, index) => (
                    <Link
                      to={`property/${property._id}`}
                      key={index}
                      className="property"
                    >
                      <PropertyCard
                        className="rounded-md overflow-hidden"
                        image={property.images[0] ?? "https://placehold.co/600x400"}
                        location={property.location.locality ?? "Address"}
                        price={property.price.rent ?? 0}
                        area={property.details.buildUpArea.toString() ?? "0"}
                        // property.details.bhkType + property.details.propertySubType +
                        //   " / " +property.details.propertyType+
                        //   " in " +
                        //   property.location.locality +
                        //   " " +
                        //   property.details.buildUpArea +
                        //   " sqft"
                        title={`${property.details.bhkType} ${property.details.propertySubType} in ${property.location.locality} (${property.details.buildUpArea} sqft) for ${property.details.propertyFor}`}
                      />
                    </Link>
                  ))
                ) : (<div className="lg:col-span-1">
                    <h2 className=" text-2xl font-medium">No Properties Found ! Try Adding Some</h2>
                      <div className="action mt-5">
                        <Link to="/signup" className="font-bold text-primary border-2 rounded-md border-primary px-6 py-2">Add Property</Link>
                      </div>
                  </div>)
                }
                
              </div>
            </div>

      <div className="w-1/2 h-full hidden lg:block sticky top-5 overflow-hidden">
        <div className="img-container w-full bg-gray-400 ">
                <GoogleMaps />
        </div>
      </div>

        </div>
    </section>
  );
}

export default Home;

export const loader = (async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URI}/allproperties`
    );
    return response.data.properties;
  } catch (error:Error | AxiosError | any) {
    return error;
  }
  
}
)satisfies LoaderFunction


type marker = {
  position: [number, number];
  content: string;
};

const Markers: marker[] = [
  {
    position: [23.34380664470183, 85.30615675989196],
    content: "Location 1",
  },
  {
    position: [23.35019807248094, 85.30010335350777],
    content: "Location 2",
  },
  {
    position: [23.355060909178736, 85.32643567127896],
    content: "Location 3",
  },
 
];




