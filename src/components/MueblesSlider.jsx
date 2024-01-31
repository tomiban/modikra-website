// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "../style.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useDataContext } from "../context/UserContext";
import Spinner from "./Spinner";
const MueblesSlider = () => {

	const { imgMuebles } = useDataContext().dataGallery || {};
	
	if (!imgMuebles) return <Spinner />;

	return (
		<Swiper
			grabCursor={true}
			navigation={true}
			loop={true}
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
			modules={[Navigation]}
			className='mySwiper '>
			{imgMuebles.map((img, index) => (
				<SwiperSlide key={index}>
					<div className='h-60 md:h-96'>
						<img
							src={img}
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
