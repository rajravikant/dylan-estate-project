import FileUpload from '../FileUpload'

function PropertyImages() {
  return (
    <div className='space-y-5'>
      <h2 className='text-gray-900 leading-6 '>Add Photos / videos to attract more tenants! </h2>
      <p className='text-gray-900 leading-6 font-medium '> Recommended Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p>

      <FileUpload/>
    </div>
  )
}

export default PropertyImages