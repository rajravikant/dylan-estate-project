import { LucideIcon, PinIcon, VerifiedIcon } from 'lucide-react'
import { PropertyDetailsType } from '../../store/FormDataSchema'


interface PropOverviewProps {
  details: PropertyDetailsType
}

const PropOverview = ({details}:PropOverviewProps) => {
  
  
  
  
  return (
    <div className="property-overview my-10 shadow rounded-md border border-zinc-100">
    <div className="features p-5 ">
      <h3 className="text-2xl font-medium py-5">Property Overview</h3>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-10 ">
       {
          Object.entries(details).map(([key,value]) => {
            if(typeof value === 'string' || typeof value === 'number'){
              return <OverviewItem key={key} title={key} value={value} Icon={VerifiedIcon} />
            }
            return null
          })
       }
       
      
      </div>
    </div>
  </div>
  )
}

const OverviewItem = ({title, value,Icon}:{title:string,value:string,Icon : any}) => {
  return (
    <div className=" flex space-x-2 items-start">
      <Icon size={20} className="text-primary" />
      <div className="inline-flex flex-col gap-1.5 items-start">
        <div className="text-primary font-semibold">{value}</div>
        <span className="text-sm text-gray-600 uppercase">{title}</span>
      </div>
  </div>
  )
}

export default PropOverview;


