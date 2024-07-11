import { useContext } from 'react'
import { UserStateContext } from '../store/userStateContext'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './UI/Dropdown'
import { LanguageIcon,Bars3Icon ,ArrowLeftIcon} from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { Dialog,Transition,TransitionChild,DialogPanel } from '@headlessui/react'

const links = [
  {
    name: 'All Properties',
    path : '/'
  },
  {
    name: 'About Us',
    path : '/about'
  },
  {
    name: 'Contact Us',
    path : '/contact'
  }, 
]

const authLinks = [
  {
    name: 'List Your Property',
    path : '/add-property'
  },
  {
    name: 'My Properties',
    path : '/my-properties'
  },
  {
    name : 'wishlist',
    path : '/wishlist'
  },
  {
    name: 'saved search',
    path : '/saved search'
  }
]

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const {user,logout} = useContext(UserStateContext);
  return (
    <nav
      tabIndex={-1}
      className="lg:px-16 lg:py-5 p-5  bg-[#FCF8F4] font-pop  w-full  flex flex-row justify-between  items-center "
    >
       <div>
        <Link to="/">
          <img
            src="/logo.png"
            alt="99acres"
            className="h-10"
          />
        </Link>
      </div>
      <div className='nav-right flex items-center gap-5 justify-center'>

      <ul className="flex items-center gap-5 text-white">
        {links.map(({name,path}, index) => (
            <li key={index} className='*:uppercase font-semibold hidden lg:block'>
              <NavLink
                to={path}
                end
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold underline underline-offset-4 " : "text-[#393E46]"
                }>
                {name}         
                </NavLink>
             </li>
        ))}
        
      </ul>


      {user.token && (
        authLinks.map(({name,path}, index) => (
          <li key={index} className='*:uppercase font-semibold hidden lg:block'>
            <NavLink
              to={path}
              end
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold underline underline-offset-4 " : "text-[#393E46]"
              }>
              {name}         
              </NavLink>
           </li>
        ))
      )}
      <LanguageIcon className='size-5'/>
      <Dropdown user = {user} logout= {logout}/>
      <button
          onClick={() => {
            setIsMobileNavVisible((prev) => !prev);
          }}
          className="lg:hidden">
          <span>
            <Bars3Icon className="size-6 text-black " />
          </span>
        </button>
      </div>
      <Transition appear show={isMobileNavVisible}>
            <Dialog 
              open={isMobileNavVisible}
              onClose={() => setIsMobileNavVisible(false)}
              className="relative z-[9999]"
            >
              <TransitionChild
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full opacity-0"
              >
                <div className="fixed inset-0 right-0 top-0 ">
                  <DialogPanel as='aside' className=" absolute right-0 h-screen w-1/2 space-y-4  border bg-white ">
                            <button
                  onClick={() => {
                    setIsMobileNavVisible(false);
                  }}
                  className="absolute left-0 top-0 p-2 "
                >
                  <ArrowLeftIcon className="size-7" />
                </button>
                    <ul className='flex flex-col gap-10 items-center justify-center h-full w-full'>
                      {links.map(({name,path}, index) => (
                        <li key={index} className='flex items-center justify-center'>
                          <NavLink
                            to={path}
                            onClick={() => setIsMobileNavVisible(false)}
                            className={({ isActive }) =>
                              isActive ? "text-primary font-semibold underline underline-offset-4 " : "text-[#393E46]"
                            }>
                            {name}         
                          </NavLink>
                        </li>
                      ))}
                       {user.id && (
                        authLinks.map(({name,path}, index) => (
                          <li key={index} className='flex items-center justify-center'>
                          <NavLink
                            to={path}
                            onClick={() => setIsMobileNavVisible(false)}
                            className={({ isActive }) =>
                              isActive ? "text-primary font-semibold underline underline-offset-4 " : "text-[#393E46]"
                            }>
                            {name}         
                          </NavLink>
                        </li>
                        ))
                       )}
                    </ul>
                    
                     
                     
                    
                  </DialogPanel>
                </div>
              </TransitionChild>
            </Dialog>
          </Transition>
    </nav>
  )
}

export default Header