import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const EventSlider = () => {
  return (
    <>
      <div className='flex justify-center md:my-24 my-14'>
         <h1 className='text-gfgmaincolor font-black md:text-6xl text-4xl text-center md:px-0 px-4'>On Going Events GFG DCE</h1>
      </div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        loop={true}
        className='md:h-[500px] h-52'
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(images/1.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/2.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/3.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/4.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/5.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/6.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/7.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/8.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/9.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/10.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/11.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/12.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/13.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/14.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/15.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/16.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/17.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/18.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/19.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/20.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default EventSlider
