
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import Button  from './UI/Button';
import { StarIcon } from '@heroicons/react/16/solid';



interface Review {
    id: number;
    name: string;
    experience: string;
    review_title: string;
    review: string;
    stars: number;
}
function Reviews({reviews}:{reviews:Review[]}) {
  return (
    <section>
    <Swiper slidesPerView={2} breakpoints={
        {
            425: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    
    } autoplay >
       {reviews.map((review, index) => (
           <SwiperSlide key={index} className='px-2'>
                <Review review={review}/>
            </SwiperSlide>
        ))}
       
  </Swiper>
        <Button title='Write a Review' className='mt-5' />
        </section>
  
  )
}

export default Reviews;

const Review = ({review}:{review:Review})=>{
    return (
        <div className='bg-white cursor-pointer '>
            <div className='flex items-center gap-2 justify-between'>
                <div className='flex gap-3'>
                    <img src={`/dummy.png`} className='size-10 rounded-full'/>
                    <div>
                        <h3 className='font-semibold'>{review.name}</h3>
                        <p className='text-xs text-neutral-800'>{review.experience}</p>
                    </div>
                </div>
                <div>
                    <div className='font-semibold inline-flex items-center justify-center'>
                        <span>{review.stars}</span> 
                        <span><StarIcon className='size-5'/></span>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
            <h3 className='font-medium'>{review.review_title}</h3>
            <p className='text-sm mt-2 lg:w-2/3 text-neutral-700'>{review.review}</p>

            </div>
        </div>
    )
}
    