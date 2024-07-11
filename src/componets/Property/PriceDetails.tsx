import { useContext,useState } from "react";
import { PropertyStateContext } from "../../store/PropertyState";
function PriceDetails() {
  const [view, setView] = useState(null as string | null);
  const { priceDetails, setPriceDetails } = useContext(PropertyStateContext);
 

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPriceDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  return (
    <>
     

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="rent"
            className="block font-medium leading-6 text-gray-900"
          >
            Rent
          </label>
          <div className="mt-2">
            <input
              id="rent" onChange={handleChange} value={priceDetails.rent}
              name="rent"
              type="text"
              placeholder="$/Month"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="security"
            className="block  font-medium leading-6 text-gray-900"
          >
            Security
          </label>
          <div className="mt-2">
            <input
              id="security" onChange={handleChange} value={priceDetails.security}
              name="security"
              type="text"
              placeholder="$/Month"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="maintainance"
            className="block  font-medium leading-6 text-gray-900"
          >
            Maintenance
          </label>
          <div className="mt-2">
            <select onChange={(e) => {
              setView(e.target.value)
              setPriceDetails((prev) => ({
                ...prev,
                maintainance: {
                  ...prev.maintainance,
                  type: e.target.value,
                },
              }));
              
            }
            }
              id="maintainance"
              value={priceDetails.maintainance.type || "Included in Rent"}
              name="maintainanceType"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
            >
              {["Included in Rent ", "Extra Maintenance"].map((face, index) => (
                <option value={face} key={index}>
                  {face}
                </option>
              ))}
            </select>
          </div>
        </div>
        {view === "Extra Maintenance" && (
          <div className="sm:col-span-3">
            <label
              htmlFor="maintainanceCharge"
              className="block  font-medium leading-6 text-gray-900"
            >
              Maintenance
            </label>
            <div className="grid grid-cols-2 mt-2 gap-5">
            <input
              id="maintainanceCharge"
              value={priceDetails.maintainance.charge || 0}
              name="maintainanceCharge"
              type="text" onChange={
                (e) => {
                  setPriceDetails((prev) => ({
                    ...prev,
                    maintainance: {
                      ...prev.maintainance,
                      charge: parseInt(e.target.value),
                    },
                  }));
                }
              } 
              placeholder="$/Month"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
        
              <select
                id="period" value={priceDetails.maintainance.period} onChange={
                  (e) => {
                    setPriceDetails((prev) => ({
                      ...prev,
                      maintainance: {
                        ...prev.maintainance,
                        period: e.target.value,
                      },
                    }));
                  }
                }
                name="period"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
              >
                {["Monthly ", "Anually","Half-Yearly"].map(
                  (face, index) => (
                    <option value={face} key={index}>
                      {face}
                    </option>
                  )
                )}
              </select>
           

            </div>
          </div>
        )}
        
        <div className="col-span-full">
      <h3 className=" font-medium leading-6 text-gray-900">Additional Pricing details to convey to agent?</h3>
          <textarea
            id="about" onChange={
              (e) => {
                setPriceDetails((prev) => ({
                  ...prev,
                  remarks: e.target.value,
                }));
              }
            } value={priceDetails.remarks}
            name="about"
            rows={5}
            className="block w-full mt-2 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
            ></textarea>
        </div>
      </div>
    
    </>
  );
}

export default PriceDetails;
