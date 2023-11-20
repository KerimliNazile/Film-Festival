import React from 'react'

import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Speakers = () => {
  return (
    <div className='speakers'>
      <div className='speakers_text'>
        <p>SPEAKERS</p>
      </div>
      <div className='pictures_box'>
        <div className='pictures_text'>
          <h1>LEARNING FROM EXPERTS</h1>
          <p>
            Et pri magna evertitur. Ne qui doctus interesset, ad eum ullum accusam, te nam iusto iisque omittam. Elit nobis
            magnas iust.
          </p>
        </div>
        <div className='pictures_image'>
          <Swiper
            breakpoints={{
              1081: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1042: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img3.jpg' alt='' />
                <div className='speakersName'>
                  <div className='image_text'>
                    <h1>KEREN</h1>
                    <h1 className='image_text_2'>HESS</h1>
                  </div>
                  <p>SET DECORATOR</p>
                </div>
                <div className='speakers_social_media'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-vimeo-v"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-1.jpg' alt='' />
              <div className='speakersName'>
                  <div className='image_text'>
                    <h1>VICTOR</h1>
                    <h1 className='image_text_1'>GRAY</h1>
                  </div>
                  <p>SOUND DESIGNER</p>
                </div>
                <div className='speakers_social_media'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-vimeo-v"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-2.jpg' alt='' />
              <div className='speakersName'>
                  <div className='image_text'>
                    <h1>TRIPP</h1>
                    <h1 className='image_text_3'>MICKY</h1>
                  </div>
                  <p>CAMERA OPERATOR</p>
                </div>
                <div className='speakers_social_media'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-vimeo-v"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img1.jpg' alt='' />
              <div className='speakersName'>
                  <div className='image_text'>
                    <h1>ZAHIRA</h1>
                    <h1 className='image_text_2'>WIDE</h1>
                  </div>
                  <p>MOVIE DIRECTOR</p>
                </div>
                <div className='speakers_social_media'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-vimeo-v"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img2.jpg' alt='' />
              <div className='speakersName'>
                  <div className='image_text'>
                    <h1>SHIN</h1>
                    <h1 className='image_text_1'>SAMARI</h1>
                  </div>
                  <p>CASTING DIRECTOR</p>
                </div>
                <div className='speakers_social_media'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-vimeo-v"></i>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Speakers;