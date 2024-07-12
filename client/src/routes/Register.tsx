import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import {RadioGroup,Radio,Label,Field} from "@headlessui/react"
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


function Register() {
  const [currentStep, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [role, setRole] = useState("Owner");


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if(name === "name"){
      setName(value)
    }
    if(name === "email"){
      setEmail(value)
    }
    if(name === "country"){
      setCountry(value)
    }
    if(name === "phone"){
      setPhone(value)
    }
   
  };

  const clearFeilds = () => {
    setName("");
    setEmail("");
    setCountry("India");
    setPhone("");
  };
  

  const handleSubmit = async () => {
    if (!name || !email || !country || !phone) {
      alert("All fields are required");
      return;
    }
   
    const data = {
      name,
      email,
      country,
      phone,
      role,
      password : "12345678"
    }
    
    
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URI}/auth/signup`, data);

      const {status} = response;
      
      if(status === 201){
        toast.success("You have been Registered Succesfully")
        clearFeilds()
      }
      
     
    } catch (error:AxiosError | any) {
      const {data} = error.response;
      return toast.error(data.error)
      
    }
    
};

  const next = () => {
    if (currentStep < 2) {
      if (currentStep === 1) {
        if (!name || !email || !country || !phone) return;
      }
      setStep((currentStep) => currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setStep((currentStep) => currentStep - 1);
    }
  };

  return (
    <div className="bg-primary p-5 lg:px-16  w-full ">
      <div className="space-y-2 mt-10">
      <Toaster/>
        <h1 className=" text-white text-4xl">
          Sell or Rent your Property For Free
        </h1>
        <p className="font-light text-white text-sm">
          Whether you're ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </p>
      </div>

      <div className="flex mt-14 lg:flex-row flex-col lg:items-center justify-center lg:gap-20 gap-5">
        <div className="left ">
          <h3 className="text-xl text-white mb-8">
            Upload your property in 4 simple steps
          </h3>

          <ul className="gap-3 flex flex-col">
            {steps.map((step) => (
              <li key={step.id} className="flex items-center gap-x-2">
                <span>
                  <CheckCircleIcon className="size-5 text-white" />
                </span>
                <span className="text-white">{step.step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="right bg-white lg:w-2/5 rounded-lg overflow-hidden">
          <div className="bg-[#FCF8F4] w-full h-full">
            <h2 className="text-xl lg:px-16 px-5 py-5  ">
              LETS GET YOU STARTED !
            </h2>
          </div>
          {/* form */}
          <div className="lg:h-56 lg:overflow-auto lg:px-16 px-5  ">
            {currentStep === 1 && (
              <form  className="space-y-8 py-5">
                {/* <RadioGroups selected="Agent"  onChange={handleChange} options={["Owner", "Agent"]} title="Iam" /> */}
                <RadioGroup value={role} className={"grid grid-cols-2"} onChange={setRole} aria-label="Server size">
                    {["Owner","Agent"].map((plan) => (
                      <Field key={plan} className="flex items-center gap-2">
                        <Radio
                          value={plan}
                          className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-primary focus:ring-primary"
                        >
                          <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                        </Radio>
                        <Label>{plan}</Label>
                      </Field>
                    ))}
                  </RadioGroup>



                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    id="name" onChange={handleChange} value={name}
                    name="name" autoComplete="name" required
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <select
                    id="country" autoComplete="country"  required
                    name="country" onChange={handleChange} value={country}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <input
                  id="phone" autoComplete="phone" required
                  name="phone" value={phone} onChange={handleChange}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 
                  
                </div>
                <p>or</p>
                <div>
                  <label
                    htmlFor="email" 
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    id="email" autoComplete="email"
                    name="email" required
                    type="email" onChange={handleChange} value={email}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                  />
                </div>
              </form>
            )}

            {/* {currentStep === 2 && (
              <form action="#" className="space-y-5 py-5">
                <div className="flex justify-between">
                  <p className="font-semibold lg:text-lg">
                    Enter OTP sent on 999-999-9999
                  </p>
                  <button
                    type="button"
                    className="underline"
                    onClick={() => {
                      prev();
                    }}
                  >
                    Change
                  </button>
                </div>

                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp" required
                    placeholder="0 0 0 0 0 0"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 px-6 py-4 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span className="block text-sm text-right mt-3">
                    Resend OTP
                  </span>
                </div>
              </form>
            )} */}

  
          </div>

          <div className="navigation bg-[#FCF8F4] lg:px-16 px-5 py-5 flex justify-between items-center ">
            <div>
              <p className="text-sm text-gray-400">
                Need Help?{" "}
                <span className="text-black font-semibold">
                  Call +9999999999
                </span>
              </p>
            </div>
            <div className="">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit()
                  
                }}
                className=" disabled:bg-gray-500 bg-primary px-5 py-2 rounded-md uppercase text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

const steps = [
  {
    id: 1,
    step: "Add your properties Basic Details",
  },
  {
    id: 2,
    step: "Add property Location",
  },
  {
    id: 3,
    step: "Add property Features and amenities",
  },
  {
    id: 4,
    step: "Add Price details",
  },
  {
    id: 5,
    step: "Add your best Property Shots",
  },
];


const countries = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar (Burma)",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen"
]
