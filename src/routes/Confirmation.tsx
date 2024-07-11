import Button from "../componets/UI/Button"
import { useNavigate } from "react-router-dom"
const Confirmation = () => {
    const navigate = useNavigate();
  return (
    <div className='space-y-5 mt-10 min-h-[calc(100vh-369px)] sm:px-16'>
        <h2>Thank you for listing your property with us</h2>
        <p>Your listing will be reviewed and will go live within 24 hours , We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. </p>
        <span className="block">-Dylan Estates</span>

        <div className="actions inline-flex gap-5 items-center">
            <Button  title="Edit Property Listing" onClick={()=>{
                navigate('/')
            }}/>
            <Button title="Preview Property Listing" onClick={()=>{
                navigate('/add-property/confirmation')
            }}/>
        </div>
    </div>
  )
}

export default Confirmation