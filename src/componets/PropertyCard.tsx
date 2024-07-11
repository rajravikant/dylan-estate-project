import { MapPinIcon,IndianRupeeIcon,Heart,Share,AreaChart } from 'lucide-react'
import TextWithIcon from './UI/TextWithIcon'
import { cn } from '../utils'

interface PropertyCardProps {
    image:string,
    price:number,
    location:string,
    title:string,
    className?:string,
    area ? : string
}

function PropertyCard({image,price,location,title,area,className}:PropertyCardProps) {
  return (
    <div className={cn("cursor-pointer relative shadow-md border border-zinc-100",className)}>
       <div className="inline-flex gap-2 absolute right-2 top-2">
              <button className="shadow  bg-white border border-zinc-200 rounded-full p-2">
                <span>
                  <Heart size={15} />
                </span>
              </button>
              <button className="shadow bg-white border border-zinc-200 rounded-full p-2">
                <span>
                  <Share size={15} />
                </span>
              </button>
            </div>
    <img src={image} alt="png" className="h-56 w-full object-cover " />
    <div className='p-3'>
    <div className="title font-medium text-lg ">{title}</div>
    
    <div className="div flex flex-col mt-3 gap-2">
        <TextWithIcon icon={<MapPinIcon size={20} className='text-primary'/>} text={location}/>
        <TextWithIcon icon={<IndianRupeeIcon size={20} className='text-primary'/>} text={price.toString()} suffix = "Lac"/>
        <TextWithIcon icon={<AreaChart size={20} className='text-primary'/>} text={area?.toString() || 'unknown'} suffix = "sqft"/>
    </div>
    

    </div>
</div>
  )}

export default PropertyCard