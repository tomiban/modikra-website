import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules"
import { Link } from "react-router-dom"

const SliderCatalogo = ({ bannerImg }) => {
	return (
		<Swiper
			modules={[Navigation, EffectFade, Pagination, Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			navigation={true}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			effect
			speed={800}
			loop
			className='carousel-item relative'>
			{bannerImg.map((imgSrc, index) => (
				<SwiperSlide key={index}>
					<Link to={index == 0 ? "/catalogo/comedor" : "/catalogo/dormitorio"}>
						<div
							className='h-[25rem] bg-cover bg-center'
							style={{ backgroundImage: `url(${imgSrc})` }}></div>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default SliderCatalogo
