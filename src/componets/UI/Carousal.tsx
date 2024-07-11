import { Navigation,Pagination,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function Carousal({images,className}:{images?:string[],className?:string}) {

  
  
  return (
    <Swiper navigation={true} modules={[Navigation,Pagination,Autoplay]}  autoplay={true} pagination={true} className={className}>
        {images!.map((image, index) => (
            <SwiperSlide key={index}>
            <img src={image} alt="image" className='h-full w-full object-contain block' />
            </SwiperSlide>
        ))}
  </Swiper>
  )
}

export default Carousal;

