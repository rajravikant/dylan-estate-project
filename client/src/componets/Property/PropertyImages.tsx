import FileUpload from '../FileUpload'

function PropertyImages() {
  return (
    <div className='space-y-5'>
      <h2 className='text-gray-900 leading-6 '>Add Photos / videos to attract more tenants! </h2>
      <p className='text-gray-900 leading-6 font-medium '> Recommended Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p>

      <FileUpload/>
      <div className='space-y-2'>
      <span className='text-black'>OR</span>
      <p className='font-medium'>We can upload them for you! You can email the pictures and videos to us at Dylanestate.com </p>
      <p className='text-xs lg:w-3/4'>Accepted formats are .jpg, .gif, .bmp & .png. 
      Maximum size allowed is 20 MB. Minimum dimension allowed 600*400 Pixel</p>
      </div>
    </div>
  )
}

export default PropertyImages