import Button from "../componets/UI/Button"
import { useNavigate,useLocation, Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserStateContext } from "../store/userStateContext"

const Confirmation = () => {
    const { user } = useContext(UserStateContext);
    const token = user.token ?? null;
    const navigate = useNavigate();
    const location = useLocation();
    // let {propertyID} = location.state 
    let  propertyID:string | null = null;
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        propertyID = location.state.propertyID as string
    }, [token]);
    

  
    
  return (
    <div className='space-y-5 mt-10 min-h-[calc(100vh-369px)] sm:px-16'>
        <h2>Thank you for listing your property with us</h2>
        <p>Your listing will be reviewed and will go live within 24 hours , We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. </p>
        <span className="block">-Dylan Estates</span>

        <div className="actions inline-flex gap-5 items-center">
            <Button  title="Edit Property Listing" onClick={()=>{
                navigate('/')
            }}/>
            <Link to={`/property/${propertyID}`} className="bg-primary text-white text-sm  rounded-md px-6 py-2">
            Preview Property Listing
            </Link>
        </div>
    </div>
  )
}

export default Confirmation