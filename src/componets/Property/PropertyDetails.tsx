import { Fragment,useState,useContext } from "react";
import FieldSet from "../UI/FieldSet";
import { Radio, RadioGroup,Field,Label } from '@headlessui/react'
import RadioGroups from "../UI/RadioGroups";
import { PropertyStateContext } from "../../store/PropertyState";



const PropertyDetails = () => {
  const [view,setView] = useState<string | null>(null)
 

  const { propertyDetails,setPropertyDetails } = useContext(PropertyStateContext)!;



  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPropertyDetails((prev) => ({
      ...prev,
      [name]: value,
    })); 
  };
  
  return (
    <Fragment>
      <fieldset>
        <legend className="text-lg font-semibold leading-6 text-gray-900">
          Property For
        </legend>

        <div className="mt-6  grid grid-cols-2 lg:w-2/3 ">
          <div className="flex items-center gap-x-3 col-span-1">
            <input
              id="rent" value="Rent" onChange={handleChange}
              name="propertyFor" checked={propertyDetails.propertyFor === "Rent"}
              type="radio"
              className="size-5 border-gray-300 text-primary focus:ring-primary"
            />
            <label
              htmlFor="rent"
              className="block  text-gray-900"
            >
              Rent
            </label>
          </div>
          <div className="flex items-center gap-x-3 col-span-1">
            <input
              id="Sale" value="Sale" onChange={handleChange}
              name="propertyFor" checked={propertyDetails.propertyFor === "Sale"}
              type="radio"  
              className="size-5 border-gray-300 text-primary focus:ring-primary"
            />
            <label
              htmlFor="Sale"
              className="block  text-gray-900"
            >
              Sale
            </label>
          </div>
        </div>
      </fieldset>
      <FieldSet legend="Property Type">
      

        <div className="mt-6  grid lg:grid-cols-3  grid-cols-1">
         {["Resedential","Commercial","Land/Plot"].map((type,index) => (
            <div className="flex items-center gap-x-3 col-span-1" key={index}>
            <input
              id={index+type} 
              name="propertyType" checked={propertyDetails.propertyType === type}
              type="radio" value={type}
              onChange={(e)=>{
                setView(e.currentTarget.value.toString())
                handleChange(e)
              }
              }
              className="size-5 border-gray-300 text-primary focus:ring-primary"
            />
            <label
              htmlFor={index+type}
              className="block text-gray-900"
            >
             {type}
            </label>
          </div>
         ))}
        </div>
          {view === "Resedential" && (
               <RadioGroup  className="mt-6 grid lg:grid-cols-2 col-span-2  gap-5" value={propertyDetails.propertySubType} onChange={
                (e) => {
                  
                  setPropertyDetails((prev) => ({
                    ...prev,
                    propertySubType: e
                  }))
                }
               } aria-label="Server size">
                  {["Apartment", "Flat"].map((plan) => (
                    <Field key={plan} >
                    <Radio
                  value={plan}
                  className="group"
                >
                <Label className="text-center block  p-2 text-gray-500 bg-white border border-gray-200 rounded-full group-data-[checked]:bg-primary  group-data-[checked]:text-white">{plan}</Label>
                </Radio>
                    </Field>
                  ))}
    </RadioGroup>

           
          )}
          {view === "Commercial" && (
            <RadioGroup  className="mt-6 grid lg:grid-cols-4 col-span-4  gap-5" value={propertyDetails.propertySubType} onChange={
              (e) => {

                setPropertyDetails((prev) => ({
                  ...prev,
                  propertySubType: e
                }))
              }
             } aria-label="Server size">
                {["Office Space", "Co working","Restaurent/Cafe","Shop","Showroom","Warehouse"].map((plan) => (
                  <Field key={plan} >
                  <Radio
                value={plan}
                className="group"
              >
              <Label className="text-center block  p-2 text-gray-500 bg-white border border-gray-200 rounded-full group-data-[checked]:bg-primary  group-data-[checked]:text-white">{plan}</Label>
              </Radio>
                  </Field>
                ))}
              </RadioGroup>
          )}

         
          
      </FieldSet>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="buildUpArea"
            className="block font-medium leading-6 text-gray-900"
          >
            Build up Area
          </label>
          <div className="mt-2">
            <input
              id="buildUpArea" value={propertyDetails.buildUpArea} onChange={handleChange}
              name="buildUpArea" 
              type="text" placeholder="Sq.Ft"
              autoComplete="build up area"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="carpetArea"
            className="block  font-medium leading-6 text-gray-900"
          >
            Carpet Area
          </label>
          <div className="mt-2">
            <input
              id="carpetArea" value={propertyDetails.carpetArea} onChange={handleChange}
              name="carpetArea"
              type="text" placeholder="Sq.Ft"
              autoComplete="carpetArea"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="propertyOnFloor"
            className="block font-medium leading-6 text-gray-900"
          >
            Property On Floor
          </label>
          <div className="mt-2">
            <input
              id="propertyOnFloor" value={propertyDetails.propertyOnFloor} onChange={handleChange}
              type="text" placeholder="eg. 1st, 2nd, 3rd"
              name="propertyOnFloor"
              autoComplete="propertyOnFloor"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="Total-Floors"
            className="block font-medium leading-6 text-gray-900"
          >
            Total Floors
          </label>
          <div className="mt-2">
            <input
              id="Total-Floors" name="totalFloors"
              value={propertyDetails.totalFloors} onChange={handleChange}
              type="text" placeholder="total floors"
              autoComplete="family-name"
              className="block w-full  rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="last-name"
            className="block  font-medium leading-6 text-gray-900"
          >
            Property Facing
          </label>
          <div className="mt-2">
            <select
              id="propertyFacing" 
              name="propertyFacing"
              autoComplete="propertyFacing" value={propertyDetails.propertyFacing} onChange={handleChange}
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
            >
            {["North"," South",
            "East","West","North-East","North-West","South","South-East","South-West"].map((face,index) => (
              <option value={face} key={index}>{face}</option>
            ))
            }
            </select>
          </div>
        </div>
      </div>


      <RadioGroups legend="Property Age" className="lg:grid-cols-5" options={[
  "Less than 1 Year",
  "1-3 Years",
  "3-5 Years",
  "5-10 Years",
  "More than 10 Years",
]} value={propertyDetails.propertyAge} onChange={(e) => {
        setPropertyDetails((prev) => ({
          ...prev,
          propertyAge: e
        }))
      }}/>

      <RadioGroups legend="BHK Type" className="lg:grid-cols-6" options={[
        "1 RK","1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"
      ]} value={propertyDetails.bhkType} onChange={(e) => {
        setPropertyDetails((prev) => ({
          ...prev,
          bhkType: e
        }))
      }}/>

      <RadioGroups legend="Bathroom/Toilets" className="lg:grid-cols-6" options={[
        "1","2", "3", "4", "5","6+"
      ]} value={propertyDetails.bathroomToilets} onChange={(e) => {
        setPropertyDetails((prev) => ({
          ...prev,
          bathroomToilets: e
        }))
      }}/>

      <RadioGroups legend="Balcony" className="lg:grid-cols-5" options={[
        "0","1","2", "3", "4+",
      ]} value={propertyDetails.balcony} onChange={(e) => {
        setPropertyDetails((prev) => ({
          ...prev,
          balcony: e
        }))
      }}/>

      <RadioGroups legend="Tenant Preference" className="lg:grid-cols-4" options={[
        "Any","Family","Bachelor"]} value={propertyDetails.tenantPreference} onChange={(e) => {
          setPropertyDetails((prev) => ({
          ...prev,
          tenantPreference: e
        }))
      }
      }/>

      <RadioGroups legend="Availability" className="lg:grid-cols-4" options={[
        "Immediate","Within 15 days","Within 1 Month","Within 2 Months"
      ]} value={propertyDetails.availability} onChange={(e) => {
        setPropertyDetails((prev) => ({
          ...prev,
          availability: e
        }))
      }}/>

      <FieldSet legend="Property Description">
        <div className="mt-6">
          <textarea
            id="about"
            name="about" value={propertyDetails.propertyDescription} onChange={
              (e) => {
                setPropertyDetails((prev) => ({
                  ...prev,
                  propertyDescription: e.target.value
                }))
              }
            }
            rows={5}
            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Add a description for your property to attract the best tenant"
            ></textarea>
        </div>
      </FieldSet>
    </Fragment>
  );
};

export default PropertyDetails;


