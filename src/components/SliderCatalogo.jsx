// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "../style.css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Navigation, Pagination, EffectFade, Autoplay  } from "swiper/modules";

const SliderCatalogo = ({ bannerImg }) => {
	return (
		<Swiper
			modules={[Navigation, EffectFade, Pagination, Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			navigation={true}
			pagination={{
				clickable: true, // Haz que los puntos del paginador sean clicables
			}}
			autoplay={{
				delay: 3000, // Cambia la imagen cada 3 segundos
				disableOnInteraction: false, // No detener la reproducción cuando el usuario interactúa
			}}
			effect
			speed={800}
			loop
			className='carousel-item absolute h-[50vh] mt-24'>
			{bannerImg.map((imgSrc, index) => (
				<SwiperSlide key={index}>
					<div
						className='block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-center '
						style={{ backgroundImage: `url(${imgSrc})` }}>
						<div className='container mx-auto'>
							<div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
								<p className='text-black text-2xl my-4'>
									Los mejores escritorios para tu oficina
								</p>
								<a
									className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black'
									href='#'>
									Ver Muebles
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SliderCatalogo;
