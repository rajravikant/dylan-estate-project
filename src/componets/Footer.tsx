import { Link } from "react-router-dom"

const Footer = () => {
  return (
    

<footer className="bg-primary border-t-zinc-100/50 border-t ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between gap-20">
          <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                  <img src="/logo.png" className="lg:h-32 h-20 object-contain" alt="logo" />
              </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-3">
              <div>
                  <ul className="text-white  font-medium">
                      {["Home","Properties","List your propery","saved searches"].map((item,index) => (
                        <li key={index} className="mb-4" >
                          <Link to="/" className="hover:underline capitalize ">{item}</Link>
                        </li>
                      ))}
                  </ul>
              </div>
              <div>
                  <ul className="text-white  font-medium">
                        {["About Us","Contact Us","Blog","FAQs"].map((item,index) => (
                            <li key={index} className="mb-4" >
                            <Link to="/" className="hover:underline capitalize ">{item}</Link>
                            </li>
                        ))}
                  </ul>
              </div>
              <div>
                  <ul className="text-white  font-medium">
                    {["Contact Us","office hours"].map((item,index) => (
                        <li key={index} className="mb-4" >
                        <Link to="/" className="hover:underline capitalize ">
                            <span>{item}</span>
                            <p className="text-sm text-gray-200 font-light">B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti </p>
                        </Link>
                        </li>
                    ))}
                      
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 lg:mx-auto  lg:my-8" />
      <div className="lg:flex lg:items-center lg:justify-between">
          <span className="text-sm text-white lg:text-center ">© 2023 <a href="https://dylanestate.com" className="hover:underline">© 2024 Dylan Estates. All rights reserved. Dylan Estates- Your Neighborhood Experts
          Privacy Policy | Terms & Conditions </a>
          </span>
         
      </div>
    </div>
</footer>

  )
}

export default Footer