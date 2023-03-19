import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import img1 from '../images/img1.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Slider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
      <Grid container sx={{pl:'4rem',pr:'4rem', pb:"6rem", pt:"2rem"}}>
        <Grid item xs={12}><Typography sx={{textAlign:'center',fontWeight:'600',fontSize:"28px",mb:'1.5rem'}}>Immaculate. IAMntegrity. [ESX]</Typography></Grid>
<Grid item xs={12} sx={{pl:'10rem',pr:'10rem',position:'relative'}} >
<div className="swiper-button-prev"><AiOutlineLeft/></div>
<div className="swiper-button-next"><AiOutlineRight/></div>
<Swiper
              
              modules={[Pagination,Navigation,Autoplay]}
            //   spaceBetween={10}
              slidesPerView={1}
              navigation= {{
               
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'}}
              watchOverflow={true}
              autoplay={{

                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              onSlideChange={({ activeIndex }) => setCurrentSlide(activeIndex)}
              pagination={{
                clickable: true,
                el: ".swiper__pagination__wrapper",
              }}
            >
                <SwiperSlide>
                    {/* gvbhnjmk */}
                    <img src="http://mpartial.io/static/4bbdfb5b2a4a6b91f9fd5691124a59ad.png" width={'100%'} height={'50%'}/>
                </SwiperSlide>
                <SwiperSlide>
                   <img src="http://mpartial.io/static/12672af5557f53819c31c5faf4ce6a9e.png" width={'100%'} height={'50%'} />
                </SwiperSlide>
                </Swiper>


<Paginations
  currentSlide={currentSlide}
  totalSlides={['red','blue']}
/>
</Grid>
      </Grid>
    );
}

export default Slider;

const Paginations = ({ currentSlide, totalSlides, onClick }) => (
    <Grid className="swiper__pagination__wrapper" sx={{textAlign:'center','& .swiper-pagination-bullet-active':{background:'#4267B2'}}}>
      {totalSlides?.map((item, index) => (
        <div key={index} className="swiperPagination__bullets"></div>
      ))}
    </Grid>
  );
  