import { useState,useContext } from "react";
import {PropertyStateContext } from "../store/PropertyState";
import { redirect, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";

import PropertyDetails from "../componets/Property/PropertyDetails";
import LocationDetails from "../componets/Property/LocationDetails";
import Features from "../componets/Property/Features";
import PriceDetails from "../componets/Property/PriceDetails";
import PropertyImages from "../componets/Property/PropertyImages";
import { ArrowLeft } from "lucide-react";
import { Dialog,DialogTitle,DialogPanel,DialogBackdrop } from "@headlessui/react";
import { UserStateContext } from "../store/userStateContext";



const steps = [
  {
    id: 1,
    step: "Property Details",

  },
  {
    id: 2,
    step: "Location Details",
  },
  {
    id: 3,
    step: "Features & Amenities",
  },
  {
    id: 4,
    step: "Price Details",
  },
  {
    id: 5,
    step: "Property Images",
  },
];

const AddNewProperty = () => {
  const [currentStep, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(UserStateContext);
  const { getAllData,resetForm  } = useContext(PropertyStateContext);
  const navigate = useNavigate();
  const token = user.token ?? "";


  const processForm = async () => {
    setIsOpen(false);

    const data = getAllData() as any;
    
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, JSON.stringify(data[key]));
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/addproperty`,
        data,
        {  headers: { Authorization: "Bearer " + token }, }
      );
      console.log(response);
      
      const { status } = response;
      
      if (status === 201) {
        resetForm();
        navigate('/add-property/confirmation');  
        // navigate('/add-property/confirmation',{
        //   state: { propertyID: response.data.propertyID }
        // });  
      }
    } catch (error: AxiosError | any) {
      console.error(error)
      const { data } = error.response;
      return toast.error(data.error);
    } 
  }
  


 

  const next = () => {
    if (currentStep < steps.length - 1) {
      setStep(currentStep => currentStep + 1);
    }
    if (currentStep === steps.length - 1) {
      setIsOpen(true);
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setStep(currentStep => currentStep - 1);
    }
  }

  return (
    <div className="bg-white p-5 sm:px-16 h-screen w-full justify-center overflow-hidden items-center">
    <Toaster/>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12 rounded-xl">
            <DialogTitle className="font-bold uppercase text-center">Post Property on Dynlan Estate?</DialogTitle>
    
              <button className="bg-primary font-bold w-full rounded-md text-center text-white px-6 py-2" onClick={processForm}>Continue</button>
             
            <p className="text-sm text-center">By continuing you agree to our Terms and Conditions & Privacy Policy</p>
          </DialogPanel>
        </div>
      </Dialog>
  

        <div className="bg-white max-w-4xl border border-zinc-200 mx-auto shadow-md rounded-lg overflow-hidden">
        <div className="menus-steps flex w-full gap-2 lg:gap-0 bg-[#FCF8F4] p-5 items-center lg:justify-between ">
          {steps.map((step,index) => (
            <div key={step.id} onClick={()=>{
              setStep(index);
            }} className={`cursor-pointer uppercase font-medium  ${currentStep === index ? 'text-primary ' : 'text-gray-400'}`}>
              <span className="lg:text-sm text-xs   text-center inline-block ">{step.step}</span>
            </div>
          ))}
      </div>
      <progress className="w-full h-2"  value={currentStep + 1} max={steps.length} />

          <div className="h-[26rem] overflow-auto lg:px-16 lg:py-5 ">
           
            <form className="space-y-5 lg:py-5 p-5" >
            {currentStep === 0 && (
               <PropertyDetails/>
            )}

          {currentStep === 1 && (
            <div>
              <LocationDetails/>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <Features/>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <PriceDetails/>
            </div>
          )}
          {currentStep === 4 && (
            <div>
            <PropertyImages/>
            </div>
          )}
          </form>

            
           
          </div>

          <div className="navigation flex justify-between items-center py-5 px-16 bg-primary ">
            <div>
              <p className="text-sm text-white">
              Need Help? Call +9999999999
              </p>
              </div>
            <div className="inline-flex items-center justify-center gap-3">
            <button type="button" hidden={currentStep === 0} onClick={()=>{ 
             prev()
            }}  className=" disabled:bg-gray-500 flex-1 text-lg bg-transparent">
              {
                <span className="block h-full">
                  <ArrowLeft size={20} className="text-white" />

                </span>
              }
            </button>
           
            <button type="button" onClick={()=>{
             next()
            }}  className=" disabled:bg-gray-500 text-lg bg-transparent px-8 py-1 border rounded-md uppercase text-white hover:bg-white hover:text-primary transition duration-75">
              {currentStep === steps.length - 1 ? 'Save & Post' : 'Next'}
            </button>

            </div>
          </div>
        </div>
      </div>

  );
};

export default AddNewProperty;
