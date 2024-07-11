import React,{createContext,useState} from 'react'

type User = {
  id: string
  name: string
  phone: string
  country: string
  role: string
  avatar: string
  token: string
  sessionExpires: string
}

type UserStateContextType = {
  user: User 
  setUser: React.Dispatch<React.SetStateAction<User>>
  logout: () => void
}



export const UserStateContext = createContext<UserStateContextType>({} as UserStateContextType);


export const UserContextProvider = ({children} : {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User>({} as User);
  const logout = () => {
    setUser({} as User);
  }
  return (
    <UserStateContext.Provider value={{user, setUser,logout}}>
      {children}
    </UserStateContext.Provider>
  )
  
}

