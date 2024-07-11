import { PinIcon } from 'lucide-react'
const PropOverview = () => {
  return (
    <div className="property-overview my-10 shadow rounded-md border border-zinc-100">
    <div className="features p-5 ">
      <h3 className="text-2xl font-medium py-5">Property Overview</h3>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-10 ">
        <div className=" flex space-x-2 items-start">
          <PinIcon size={20} className="text-primary" />
          <div className="inline-flex flex-col gap-1.5 items-start">
            <div className="text-primary font-semibold">Two (2)</div>
            <span className="text-sm text-gray-600">Bedrooms</span>
          </div>
        </div>
       
      
      </div>
    </div>
  </div>
  )
}

export default PropOverview