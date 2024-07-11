import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { redirect } from "react-router-dom";
import { UserStateContext } from "./store/userStateContext";
import { useContext } from "react";





export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const getAuthToken = () =>{
  const {user} = useContext(UserStateContext);
  const token = user.token;
  return token;
}


export function isAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/login");
  }
  return  token;
}