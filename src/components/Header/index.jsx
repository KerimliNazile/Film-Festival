import React from 'react'
import './index.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const Header = () => {
  return (
    <>
      <div className='header_swiper'>

      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper_box'>
          <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img1.jpg" alt="" />
          <div className='header_elementor_section'>
           <p>TWEAK PRODUCTION PRESENTS</p>
           <h1>WAIT BY THE TRAIN</h1>
           <p>Written and directed by Micheal Gordon / France 1984</p>
          </div>
          
        </SwiperSlide>


        <SwiperSlide className='swiper_box'>
          <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img3.jpg" alt="" />
          <div className='header_elementor_section'>
           <p>TWEAK PRODUCTION PRESENTS</p>
           <h1>WAIT BY THE TRAIN</h1>
           <p>Written and directed by Micheal Gordon / France 1984</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper_box'>
          <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img2.jpg" alt="" />
          <div className='header_elementor_section'>
           <p>TWEAK PRODUCTION PRESENTS</p>
           <h1>WAIT BY THE TRAIN</h1>
           <p>Written and directed by Micheal Gordon / France 1984</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>

    </>
  )
}

export default Header