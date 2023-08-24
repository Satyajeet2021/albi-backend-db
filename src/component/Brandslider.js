import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Brandslider.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

export default function Brandslider() {
  return (
    <div className='brandslider'>
      <div className="">
        <div className="container  mx-auto w-full sm:w-10/12">
        <Swiper
        slidesPerView={2}
        grid={{
          rows: 3,
        }}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            grid:{rows:2},
          },
          768: {
            slidesPerView: 4,
            grid:{rows:2},
          },
          1024: {
            slidesPerView: 4,
            grid:{rows:2},
          },
          1280: {
            slidesPerView: 4,
            grid:{rows:2},
          },
          1536: {
            slidesPerView: 4,
            grid:{rows:2},
          },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/hugo">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/04/2791_330035_HUGO_SR22_WEB_SINGLE_MIX_548x548_NoLogo_V1.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/04/HUGO-MID4.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="HomeSlider__item">
          <a href="/stores/carpisa">
            <div class="HomeSlider__item__image">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Store-Banner-01.jpg" alt="Carpisa" class="Image"/>
            </div>
            <div class="HomeSlider__item__logo">
              <img src="https://management.albionline.com/wp-content/uploads/2022/07/Artboard-1-copy.svg" alt="Carpisa" class="Image"/>
            </div>
          </a>
        </div>
        </SwiperSlide>
      </Swiper>  
        </div>    
      </div>
    </div>
  )
}
