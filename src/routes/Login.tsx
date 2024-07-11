import React, { useContext } from "react";
import { Link, useNavigation } from "react-router-dom";
import Button from "../componets/UI/Button";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../store/userStateContext";


function Login() {
  const {user,setUser} = useContext(UserStateContext);
  
  
  const navigate = useNavigate();
  const {state} = useNavigation();
  const isSubmiting = state === 'submitting';


  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/auth/login`,
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );

      const { status } = response;
      

      if (status === 200) {
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
      );

      const {user} = response.data;

      const userData = {
        ...user,
        token: response.data.token,
        sessionExpires: expiryDate.toISOString()
      }
      
      setUser(userData);
      
      return navigate("/");
      }
    } catch (error: AxiosError | any) {
      console.error(error)
      const { data } = error.response;
      return toast.error(data.error);
    }

  
  };

  return (
    <div className="py-10">
      <Toaster />
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-9 font-bold">Login</h1>
        <div className="bg-white dark:bg-dark border  rounded-md shadow-sm">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600 "
                >
                  Email
                </label>
                <input
                  id="email"
                  required
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  id="password"
                  required
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <button  type="submit"
                className={"bg-primary text-white text-sm  rounded-md px-6 py-2"} >
                {isSubmiting ? 'Loggin In' : 'Login' }
              </button>
            </form>
          </div>
          <div className="flex justify-between p-8 text-sm border-t border-gray-300  bg-gray-100 ">
            <Link to="/signup" className="font-medium text-primary">
              Create account
            </Link>
            <a href="#" className="text-gray-600 ">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
