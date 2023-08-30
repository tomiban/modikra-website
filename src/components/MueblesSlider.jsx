import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { data } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "./styles.css"
const MueblesSlider = () => {
	const galleryData = data.find((item) => item.hasOwnProperty("gallery"));
	const { cards } = galleryData.gallery;

	return (
		<Swiper
			grabCursor={true}
			Pagination={true}
			loop={true}
			navigation={true}
			breakpoints={{
				320: {
					slidesPerView: 2,
					spaceBetween: 18,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}}
			modules={[Navigation, Pagination]}
			className='mySwiper'>
			{cards.map((card, index) => (
				<SwiperSlide key={index}>
					<div className='h-96'>
						<img
							src={card.img}
							alt=''
							className='object-cover object-center h-full w-full rounded-md  bg-transparent shadow-md'
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
		
	);
};

export default MueblesSlider;
