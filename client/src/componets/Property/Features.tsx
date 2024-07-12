import { useContext } from "react";
import { CctvIcon, DropletIcon, FireExtinguisherIcon, MapIcon, ParkingCircle, RussianRubleIcon, Shield, StarIcon, SunIcon } from "lucide-react";
import CheckBox from "../UI/CheckBox";
import RadioGroups from "../UI/RadioGroups";
import { PropertyStateContext } from "../../store/PropertyState";



function Features() {

 
  const { features,setFeatures } = useContext(PropertyStateContext);
    

  return (
    <section className="divide-y divide-gray-200 space-y-10 ">
      <div>
        <h2 className="text-xl font-semibold leading-6 text-gray-900">
          General Features
        </h2>
        <div className="space-y-5">
          <RadioGroups
            options={["Allowed", "Not Allowed"]}
            className="lg:grid-cols-2" 
            type="classic"
            legend="Non-Veg" 
            value={features.nonVeg}
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                nonVeg: e,
              }));
            }}
          />
          <RadioGroups
            value={features.petsAllowed}
            type="classic"
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                petsAllowed: e,
              }));
            }}
            legend="Pets Allowed"
            options={["Yes", "No"]}
            className="lg:grid-cols-2" 
          />
          <RadioGroups
            legend="Electricity"
            type="classic"
            className="lg:grid-cols-2"
            value={features.electricity}
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                electricity: e,
              }));
            }}
            options={["Rare/No Powercut", "Frequent Powercut"]}
            
          />
          <RadioGroups
            legend="Water Supply"
            type="classic"
            options={["Municipal Corporation (BMC)", "Borewell", "Both"]}
            className="lg:grid-cols-3"
            value={features.waterSupply}
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                waterSupply: e,
              }));
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl py-5 font-semibold leading-6 text-gray-900">
          Furnishing
        </h2>
       <RadioGroups
            type="classic" className="lg:grid-cols-3"
            options={["Fully Furnished", "Semi Furnished", "Unfurnished"]}
            value={features.furnishing }
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                furnishing: e,
              }));
            }}
          />'

      </div>
      <div>
        <h2 className="text-xl py-5 font-semibold leading-6 text-gray-900">
          Tiles
        </h2>
        <RadioGroups
            type="classic"
            className="lg:grid-cols-3"
            options={["Ceramic", "Vitrified", "Marble"]}
            value={features.tiles}
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                tiles: e,
              }));
            }}
          />
      </div>
      <div>
        <h2 className="text-xl py-5 font-semibold leading-6 text-gray-900">
        Safety
        </h2>
        

        <RadioGroups
            type="classic"
            className="lg:grid-cols-2"
            options={["24/7 Security personnel (Gated Security)", "Security Systems- CCTV"]}
            value={features.security}
            onChange={(e) => {
              setFeatures((prev) => ({
                ...prev,
                security: e,
              }));
            }}
          />


      </div>
      <div>
        <h2 className="text-xl py-5 font-semibold leading-6 text-gray-900">
        SOCIETY AMENITIES
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        {socialAmnities.map(
            ({icon,option}, index) => (
              <CheckBox 
                key={index}
                icon={icon}
                option={option}
                value={features.societyAmenities.includes(option)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  if (isChecked) {
                    setFeatures({
                      ...features,
                      societyAmenities: [...features.societyAmenities, option],
                    });
                  }
                  else {
                    setFeatures({
                      ...features,
                      societyAmenities: features.societyAmenities.filter(
                        (item) => item !== option
                      ),
                    });
                  }
                }}
                />)
          )}
        </div>
      </div>
      <div>
        <h2 className="text-xl py-5 font-semibold leading-6 text-gray-900">
          Additional Features
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
          {[
            "Air Conditioning",
            "Ceiling Fans",
            "Refrigerator",
            "Washing machine",
            "Microwave",
            "Oven",
          ].map((feature, index) => (
            <div className="flex items-center gap-x-3 col-span-1" key={index}>
                <input
                  id={index.toString()}
                  type="checkbox" 
                  value={feature}
                  checked={features.additionalFeatures.includes(feature)}
                  onChange={(e)=>{
                    
                    const isChecked = e.target.checked;
                    if (isChecked) {
                      setFeatures({
                        ...features,
                        additionalFeatures: [...features.additionalFeatures, feature],
                      });
                    }
                    else {
                      setFeatures({
                        ...features,
                        additionalFeatures: features.additionalFeatures.filter(
                          (item) => item !== feature
                        ),
                      });
                    }
                    
                  }}
                  className="size-5 rounded-md border-gray-300 text-primary focus:ring-primary"
                />

                <label htmlFor={feature} className="block text-gray-900">
                  {feature}
                </label>
              </div>
          ))}
        </div>
      </div>
  
    </section>
  );
}

export default Features;


const socialAmnities = [
    { option: "24x7 Security", icon: <Shield size={50}  className="text-primary" />},
    { option: "CCTV Camera", icon: <CctvIcon size={50} className="text-primary" /> },
    { option: "Lift", icon: <StarIcon size={50}  className="text-primary"/>},
    { option: "Reversed Parking", icon: <ParkingCircle size={50} className="text-primary" />},
    { option: "Regular Water Supply", icon: <DropletIcon size={50}  className="text-primary" />},
    { option: "Garden/Park", icon: < MapIcon size={50} className="text-primary" /> },
    { option: "Fire Safety", icon: <FireExtinguisherIcon size={50}  className="text-primary"/>},
    { option: "Sport", icon: <RussianRubleIcon size={50} className="text-primary" />},
  
]
