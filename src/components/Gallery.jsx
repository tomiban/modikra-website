import Button from "./Button";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import MueblesMedida from "./MueblesMedida";


const Gallery = () => {
	const galleryData = data.find((item) => item.hasOwnProperty("gallery"));
	const { title, cards } = galleryData.gallery;

	return (
		<div
			className=' py-6 sm:py-8'
			id='muebles'>
			<div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
				<h2 className='text-2xl font-bold text-[#001A49] lg:text-5xl text-center py-8 '>
					Muebles
				</h2>
				<div className='mb-4 flex items-center flex-col sm:mb-8 md:mb-8'>
					<p className='hidden max-w-screen-sm text-xl text-center text-gray-500 md:block mb-8'>
						{title}
					</p>

					<Button
						text={"Ver Más"}
						url={"catalogo"}
						color={"orange"}
						span={
							"absolute inset-x-0 top-0 h-[2px] bg-orange-500 transition-all group-hover:h-full group-active:bg-orange-500"
						}
					/>
				</div>

				<div className='grid grid-cols-2 gap-4 sm:grid-cols-8 md:gap-6 xl:gap-8 py-4'>
					{/* 4 cols-span en md */}

					{cards.map((card, index) =>
						card.colsMd === 4 ? (
							<Link
								key={index}
								to={`/catalogo/${card.url}`}
								className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-4 md:h-80`}>
								<img
									src={card.img}
									loading='lazy'
									alt='Photo by Magicle'
									className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
								/>

								<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

								<span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
									{card.title}
								</span>
							</Link>
						) : (
							<Link
								key={index}
								to={`/catalogo/${card.url}`}
								className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80`}>
								<img
									src={card.img}
									loading='lazy'
									alt='Photo by Magicle'
									className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
								/>

								<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

								<span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
									{card.title}
								</span>
							</Link>
						)
					)}
					<MueblesMedida />
				</div>
			</div>
		</div>
	);
};
export default Gallery;
