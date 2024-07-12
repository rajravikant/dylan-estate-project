import {Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import { UserContextProvider } from '../store/userStateContext'
function Root() {
  return (
    <UserContextProvider>
        <Header/>
      <main className="bg-white font-pop">
        <Outlet />
      </main>
      <Footer/>
    </UserContextProvider>
  )
}

export default Root