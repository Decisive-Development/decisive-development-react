"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Zoom, Navigation, Pagination, } from 'swiper/modules';
import Image from "next/image";
import { images } from "../../../lib/sliderimages.js";
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default () => {
    return (
        <section className='z-30 relative '>
            <Swiper
                spaceBetween={50}
                modules={[Zoom, EffectFade, Navigation, Pagination]}
                pagination={{
                    type: 'fraction',
                }}
                loop={true}
                effect={'fade'}
                navigation={true} 
                zoom={true}
                className='mySwiper'
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                    <div className='m-auto swiper-zoom-container'>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className=""
                            loading="lazy"
                        />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};