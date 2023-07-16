import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from './card-detail.json'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



export default function Slider({num}) {
  const { img,title,site } = data.data[num];
  const imgBox = img.map((aa,index) => {
    return <SwiperSlide key={index} onClick={()=> window.open(site[index])}><img src={aa} alt={title} title='클릭하면 이동합니다' /></SwiperSlide>
  })
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {imgBox}
      </Swiper>
    </>
  );
}
