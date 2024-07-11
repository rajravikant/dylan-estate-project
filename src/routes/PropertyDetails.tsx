import { ArrowLeft, Heart, MapPinIcon, Share } from "lucide-react";
import { useNavigate,useLoaderData,LoaderFunction} from "react-router-dom";
import axios from "axios";
import Carousal from "../componets/UI/Carousal";
import Explore from "../componets/PropDetails/Explore";
import RatingReview from "../componets/PropDetails/RatingReview";
import AreaInfo from "../componets/PropDetails/AreaInfo";
import SimilarProps from "../componets/PropDetails/SimilarProps";
import PropOverview from "../componets/PropDetails/PropOverview";
import Amenities from "../componets/PropDetails/Amenities";
import PropInfo from "../componets/PropDetails/PropInfo";
import { PropertyType } from "../store/FormDataSchema";

const PropertyDetails = ({}) => {
  const property = useLoaderData() as PropertyType;
  let titleOfProperty:string | null = null;
  console.log(property); 
  if (property) {
    titleOfProperty = `${property.details.bhkType} ${property.details.propertySubType} in ${property.location.locality} (${property.details.buildUpArea} sqft) for ${property.details.propertyFor}`
  } 
  const navigate = useNavigate();
  return (
    <div className="bg-white  mt-5 sm:px-16 px-5">
      <button type="button" onClick={()=>{
        navigate(-1)
      }}>
        <span>
          <ArrowLeft size={24} />
        </span>
      </button>

      <div className="flex lg:justify-between flex-col lg:flex-row items-start gap-20 relative">
        <div className="left lg:w-[65%] ">
          <h2 className="text-xl font-medium">
            {titleOfProperty ?? "Property Title"}
          </h2>
          <div className="address flex items-center justify-between">
            <div className="inline-flex items-center">
              <MapPinIcon size={16} className="mr-2" />
              <span className="">{
                property?.location.locality.concat(", "+property?.location.landmark ?? "Landmark")
                }</span>
            </div>

            <div className="inline-flex gap-2">
              <button className="shadow  border border-zinc-200 rounded-full p-2">
                <span>
                  <Heart size={15} />
                </span>
              </button>
              <button className="shadow border border-zinc-200 rounded-full p-2">
                <span>
                  <Share size={15} />
                </span>
              </button>
            </div>
          </div>

          <div className="image-carosol mt-5 h-52 lg:h-96 w-[90vw] lg:w-auto ">
            <Carousal images={property.images} className="h-full w-full" />
          </div>

          <PropOverview />
          <Amenities />
          <PropInfo />
        </div>

        <div className="right lg:w-[35%] lg:sticky lg:top-10  ">
          <div className="space-y-3">
            <div className="flex bg-[#F6EFE6] items-center justify-between p-5 rounded-md shadow ">
              <div className="">
                <div className="text-lg font-semibold">
                  ₹ 280000 <span className="font-normal">/ Month</span>
                </div>
                <div className="text-sm text-center">(Rent-Negotiable)</div>
              </div>
              <div className="">
                <div className="text-lg font-semibold">₹ 280000</div>
                <div className="text-sm text-center">(Deposit)</div>
              </div>
            </div>

            <div className="bg-[#FDFAF7] p-6 space-y-2 rounded-md shadow-md ">
              <h4 className="text-lg font-medium">
                Send an Inquiry for this property?
              </h4>
              <p className="text-xs">Contact Person : Melvin Larsdo</p>
              <form action="">
                <div className="space-y-3 mt-5 ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-zinc-200 px-3 text-sm py-1.5 rounded-md shadow-sm "
                  ></input>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full border border-zinc-200  px-3 text-sm py-1.5 rounded-md shadow-sm "
                  ></input>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="w-full border border-zinc-200 shadow-sm  px-3 text-sm py-1.5 rounded-md"
                  ></input>
                  <textarea
                    placeholder="Message"
                    className="w-full border border-zinc-200 shadow-sm  px-3 text-sm py-1.5 rounded-md"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send Inquiry"
                    className="w-full bg-primary shadow uppercase text-white p-2 rounded-md  "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Explore />
      <RatingReview />
      <SimilarProps />
      <AreaInfo />
    </div>
  );
};

export default PropertyDetails;


export const loader = (async ({params}) => {
	const propertyID = params.propertyID
  const response = await axios.get(`${import.meta.env.VITE_API_URI}/property/${propertyID}`)
  return response.data.property
}) satisfies LoaderFunction;

