

import {
  CctvIcon,
  DropletIcon,
  FireExtinguisherIcon,
  MapIcon,
  ParkingCircle,
  RussianRubleIcon,
  Shield,
  StarIcon,
} from "lucide-react";

const Amenities = () => {
  return (
    <div className="amenities shadow my-10 border border-zinc-100 rounded-md">
    <div className="p-5">
      <h3 className="text-2xl font-medium py-5">Amenities</h3>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-14">
        {socialAmnities.map(({ icon, option }, index) => (
          <div
            className="flex flex-col col-span-1 items-center"
            key={index}
          >
            <div className="">{icon}</div>
            <div className="text-neutral-700">{option}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Amenities;



const socialAmnities = [
    {
      option: "24x7 Security",
      icon: <Shield size={40} className="text-primary" />,
    },
    {
      option: "CCTV Camera",
      icon: <CctvIcon size={40} className="text-primary" />,
    },
    { option: "Lift", icon: <StarIcon size={40} className="text-primary" /> },
    {
      option: "Reversed Parking",
      icon: <ParkingCircle size={40} className="text-primary" />,
    },
    {
      option: "Regular Water Supply",
      icon: <DropletIcon size={40} className="text-primary" />,
    },
    {
      option: "Garden/Park",
      icon: <MapIcon size={40} className="text-primary" />,
    },
    {
      option: "Garden/Park",
      icon: <MapIcon size={40} className="text-primary" />,
    },
    {
      option: "Fire Safety",
      icon: <FireExtinguisherIcon size={40} className="text-primary" />,
    },
    {
      option: "Sport",
      icon: <RussianRubleIcon size={40} className="text-primary" />,
    },
    {
      option: "Sport",
      icon: <RussianRubleIcon size={40} className="text-primary" />,
    },
  ];
  