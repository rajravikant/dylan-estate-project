import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { PropertyType } from "./store/FormDataSchema";
import PropertyCard from "./componets/PropertyCard";
import Button from "./componets/UI/Button";

function Home() {
  const data = useLoaderData() as PropertyType[];

  return (
    <section className="flex my-10 items-start gap-5 sm:px-16 px-5">
      <div className=" flex-1">
        <div className="flex  gap-5">
          <input
            id="Total-Floors"
            type="text"
            autoComplete="family-name"
            className="block w-full  rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          <Button type="button" title="Search"/>
        </div>

        <div className="grid sm:grid-cols-2 mt-5 gap-5">
          {data.length > 0 &&
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
            ))}
        </div>
      </div>

      <div className="w-2/5 h-full hidden lg:block">
        <div className="img-container w-1/2  overflow-hidden "></div>
        <img
          src="/dummy.png"
          alt="img"
          className="h-[70vh] w-full object-cover rounded-md "
        />
      </div>
    </section>
  );
}

export default Home;

export async function loader() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URI}/allproperties`
  );
  return response.data.properties;
}
